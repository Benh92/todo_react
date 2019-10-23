import React from 'react';
import TaskCount from './TaskCount';
import Task from './Task';
import './App.css';
import CompleteCount from './CompleteCount';
import AddTask from './AddTaskForm';


class App extends React.Component {
  state = {
    tasks: [
      { taskheader: "Walk The Cat", 
      text: "I must walk the cat otherwise it will seize up and need those wheel things.", 
      completed: true, date: "2019-10-21", id: 2},
      { taskheader: "Walk The Cat", 
      text: "I must walk the cat otherwise it will seize up and need those wheel things.", 
      completed: true, date: "2019-10-21", id: 3},
      { taskheader: "Walk The Cat", 
      text: "I must walk the cat otherwise it will seize.", 
      completed: false, date: "2019-10-26", id: 4},
      { taskheader: "Walk The dog", 
      text: "I must walk the cat otherwise it will seize.", 
      completed: false, date: "2019-10-26", id: 6},
      { taskheader: "Walk The dog", 
      text: "I must walk the cat otherwise it will seize.", 
      completed: false, date: "2019-10-26", id: 8}
    ]
  }


  render() {
    const completedItems = this.state.tasks.filter(item => {
      if (item.completed === true) {
        return true;
      } else {
        return false;
      }
    })
    const notCompleteItems = this.state.tasks.filter(item => {
      if (item.completed === false) {
        return true;
      } else {
        return false;
      }
    })
    return (
      <section>
        <div>
          <nav className="navbar">
          <i class="fab fa-cloudversify fa-5x iconnav"></i>
          <h4 className="iconnav">Cloud-List</h4> 
          </nav>
        </div>
        <div className="formplacement">
         <AddTask/>
         </div>
      <br/>
        <div className="alert alert-primary">
          <TaskCount count={notCompleteItems.length} />
        </div>
      <br/>
            <div className="container">
              <div className="row">
              {notCompleteItems.map(item => {
                return <Task key={item.id} text={item.text} completed={item.complete} taskheader={item.taskheader} />
              })}
       
                </div>
              </div>
            <div className="alert alert-primary">
              <CompleteCount count={completedItems.length} />
            </div>
            <div className="container">
              <div className="row">
              {completedItems.map(item => {
                return <Task key={item.id} text={item.text} completed={item.complete} taskheader={item.taskheader} />
              })}
              </div>
            </div>
            </section>
          );
        }
      }
      
      
export default App;