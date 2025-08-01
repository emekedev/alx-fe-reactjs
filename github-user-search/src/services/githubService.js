// src/services/githubService.js
// src/services/githubService.js
import axios from 'axios';

export const fetchAdvancedUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=5&page=${page}`;

  const { data } = await axios.get(url);
  const userItems = data.items;

  // Fetch full user details
  const detailedUsers = await Promise.all(
    userItems.map(async (user) => {
      const full = await axios.get(`https://api.github.com/users/${user.login}`);
      return full.data;
    })
  );

  return {
    users: detailedUsers,
    hasNextPage: data.total_count > page * 5,
  };
};
