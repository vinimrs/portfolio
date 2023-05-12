export const githubServices = {
  getRepos: async (username: string) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    return response.json();
  },
};
