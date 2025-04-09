import React, { useEffect, useState } from 'react';

const RepoList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('/repos.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('Here is data', data);
        setRepos(data);
      });
  }, []);

  return (
    <div className="ms-2 me-auto">
      <h1>GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li className="card" key={repo.url}>
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
