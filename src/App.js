import React from 'react';
import TaskCount from './TaskCount';
import Task from './Task';
import './App.css';
import CompleteCount from './CompleteCount';
import CompletedTask from './CompletedTask';
import AddTask from './AddTaskForm';


class App extends React.Component {
  render() {
    return (
      <section>
        <div>
          <nav className="navbar">
          <i class="fab fa-cloudversify fa-5x iconnav"></i> 
          </nav>
        </div>
        <div>
        <h4> Add your task below... </h4>
        </div>
        <div className="formplacement">
         <AddTask/>
         </div>
      <br/>
        <div className="alert alert-primary">
          <TaskCount count={2} />
        </div>
      <br/>
            <div className="container">
              <div className="row">
                <Task />
                <Task />
                </div>
              </div>
            <div className="alert alert-primary">
              <CompleteCount count={3} />
            </div>
            <div className="container">
              <div className="row">
                <CompletedTask />
                <CompletedTask />
                <CompletedTask/>
              </div>
            </div>
            </section>
          );
        }
      }
      
      
export default App;