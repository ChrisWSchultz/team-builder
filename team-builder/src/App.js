import React, { useState } from 'react';
import './App.css';
import TeamList from "./components/teamList";
import TeamForm from "./components/teamForm";

function App() {
  const [ teamlist, setTeamList ] = useState([]);

  function addMemberHandler(event) {
      setTeamList([...teamlist, event]);
  }

  return (
    <div className="App">
      <h1>Team List</h1>
      <TeamForm addMember={addMemberHandler}/>
      <TeamList team={teamlist} />
    </div>
  );
}

export default App;
