import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // ✅ Advanced React Query options
    staleTime: 1000 * 60 * 5,         // data considered fresh for 5 minutes
    cacheTime: 1000 * 60 * 10,        // unused cache stays for 10 minutes
    refetchOnWindowFocus: true,       // refetch when window/tab regains focus
    keepPreviousData: true,           // keep old data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts List</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
