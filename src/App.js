import React from 'react';
import TaskCount from './TaskCount';
import Task from './Task';
import './App.css';
import CompleteCount from './CompleteCount';
import CompletedTask from './CompletedTask'

class App extends React.Component {
  render() {
    return (
      <section>
        <div className="alert alert-primary">
          <TaskCount count={2} />
        </div>
        <div>
          <Task />
          <Task />
        </div>
        <div className="alert alert-primary">
          <CompleteCount count={1} />
        </div>
        <div>
          <CompletedTask />
        </div>
      </section>
    );
  }
}


export default App;
