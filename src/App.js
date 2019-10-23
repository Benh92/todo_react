import React from 'react';
import TaskCount from './TaskCount';
import Task from './Task';
import './App.css';
import CompleteCount from './CompleteCount';
import AddTask from './AddTaskForm';


class App extends React.Component {
  state = {
    tasks: [
      {
        taskheader: "Buy Batteries",
        text: "Aisle 5 of my favourite shop.",
        completed: true, date: "2019-10-21", id: 2
      },
      {
        taskheader: "Buy Twinkies",
        text: "Pick Twinkies up from speciality shop.",
        completed: true, date: "2019-10-21", id: 3
      },
      {
        taskheader: "Walk The Cat",
        text: "Must be walked seperately from the Dog.",
        completed: false, date: "2019-10-26", id: 4
      },
      {
        taskheader: "Walk The dog",
        text: "Must not be walked with the Cat.",
        completed: false, date: "2019-10-26", id: 6
      },
      {
        taskheader: "Bake a cake",
        text: "Make sure to bake a cake for visitors",
        completed: false, date: "2019-10-26", id: 8
      }
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
          <AddTask />
        </div>
        <br />
        <div className="alert alert-primary">
          <TaskCount count={notCompleteItems.length} />
        </div>
        <br />
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