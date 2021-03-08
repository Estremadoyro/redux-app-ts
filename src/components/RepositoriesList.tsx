import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
/* import { actionCreators } from "../state/index"; */
const RepositoriesList: React.FC = () => {
  const [repo, setRepo] = useState<string>("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(repo);
    /* dispatch(actionCreators.searchRepositories(repo)); */
    return;
  };

  return (
    <div>
      <form onSubmit={search}>
        <input value={repo} onChange={(e) => setRepo(e.target.value)} />
        <button> Search </button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Searching...</h3>}
      {!error && !loading && data.map((name) => <li key={name}>{name}</li>)}
    </div>
  );
};

export default RepositoriesList;
