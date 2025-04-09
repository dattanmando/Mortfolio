import React, { useEffect, useState } from 'react';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const username = 'dattanmando'; // ← change this

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await res.json();

        const formatted = data.map((repo) => ({
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
        }));

        setRepos(formatted);
      } catch (err) {
        console.error('Failed to fetch repos:', err);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.url}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            {repo.description && <p>{repo.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
