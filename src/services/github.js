import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com'; // Replace with your API URL

export const fetchRepositories = async (username, page = 1, perPage = 5) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`, {
      params: {
        page,
        per_page: perPage
      }
    });
    return response;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};
