import { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

const Search = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos: '',
  });
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const searchUsers = async (pageNumber = 1, append = false) => {
    setLoading(true);
    setError('');
    try {
      const { users, hasNextPage } = await fetchAdvancedUsers({ ...formData, page: pageNumber });
      setResults((prev) => (append ? [...prev, ...users] : users));
      setHasNextPage(hasNextPage);
      setPage(pageNumber);
    } catch (err) {
      setError('Failed to fetch users.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults([]);
    setPage(1);
    searchUsers(1);
  };

  const handleLoadMore = () => {
    searchUsers(page + 1, true);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="GitHub username (optional)"
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          name="minRepos"
          value={formData.minRepos}
          onChange={handleChange}
          placeholder="Minimum repositories"
          className="w-full border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="border rounded p-4 shadow-sm flex items-center gap-4"
          >
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-lg font-semibold">{user.name || user.login}</h3>
              <p className="text-sm">Username: {user.login}</p>
              <p className="text-sm">Location: {user.location || 'N/A'}</p>
              <p className="text-sm">Public Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasNextPage && (
        <button
          onClick={handleLoadMore}
          className="mt-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
