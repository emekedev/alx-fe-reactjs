import { QueryClient, QueryClientProvider } from 'react-query';
import React from "react";
import PostsComponent from "./components/PostsComponent.jsx";

  const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    );
  }

export default App
