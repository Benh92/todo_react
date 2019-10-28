import React from 'react';
import TaskCount from './TaskCount';
import uuid from "uuid/v4";
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
        completed: true, date: "2019-10-21", id: uuid()
      },
      {
        taskheader: "Buy Twinkies",
        text: "Pick Twinkies up from speciality shop.",
        completed: true, date: "2019-10-21", id: uuid()
      },
      {
        taskheader: "Walk The Cat",
        text: "Must be walked seperately from the Dog.",
        completed: false, date: "2019-10-26", id: uuid()
      },
      {
        taskheader: "Walk The dog",
        text: "Must not be walked with the Cat.",
        completed: false, date: "2019-10-26", id: uuid()
      },
      {
        taskheader: "Bake a cake",
        text: "Make sure to bake a cake for visitors",
        completed: false, date: "2019-10-26", id: uuid()
      }
    ]
  }

  addTask = (taskHeader, taskDescription) => {
    const newTask = {
      taskheader: taskHeader,
      text: taskDescription,
      completed: false,
      date: "26-10-2020",
      id: uuid()
    };

    const taskscopy = this.state.tasks.slice();
    taskscopy.push(newTask);
    this.setState({
      tasks: taskscopy
    })
  }

  deleteTask = (taskId) => {
const existingTasks = this.state.tasks
const filteredTasks = existingTasks.filter(function(item){
 return item.id !== taskId;
});

this.setState(
  {tasks: filteredTasks}
);

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
            <i className="fab fa-cloudversify fa-5x iconnav"></i>
          </nav>
        </div>
        <div className="formplacement">
          <AddTask addTaskFunc={this.addTask} />
        </div>
        <br />
        <div className="alert alert-primary">
          <TaskCount count={notCompleteItems.length} />
        </div>
        <br />
        <div className="container">
          <div className="row">
            {notCompleteItems.map(item => {
              return <Task deleteTaskFunc={this.deleteTask} key={item.id} taskId={item.id} text={item.text} completed={item.complete} date={item.date} taskheader={item.taskheader} />
            })}

          </div>
        </div>
        <div className="alert alert-primary">
          <CompleteCount count={completedItems.length} />
        </div>
        <div className="container">
          <div className="row">
            {completedItems.map(item => {
              return <Task deleteTaskFunc={this.deleteTask} key={item.id} taskId={item.id} text={item.text} completed={item.complete} date={item.date} taskheader={item.taskheader} />
            })}
          </div>
        </div>
      </section>
    );
  }
}


export default App;