import React from "react";

class AddTaskForm extends React.Component {

  state = {
    newTaskHeader: "",
    newTaskDescription: "",
    newDueDate: ""
  }

  updateTaskHeader = (event) => {
    this.setState({
      newTaskHeader: event.target.value,
    })
  }

  updateTaskDescription = (event) => {
    this.setState({
      newTaskDescription: event.target.value
    })
  }

  updateDueDate = (event) => {
    this.setState({
      newDueDate: event.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.addTaskFunc(this.state.newTaskHeader, this.state.newTaskDescription, this.state.newDueDate)
    this.setState({
    newTaskHeader: "",
    newTaskDescription: "",
    newDueDate: Date,
    })
    }


  render() {
    return (
      <form className="col-md-12">
        <div className="form-group">
          <label> Task Header</label>
          <input type="text" className="form-control" value={this.state.newTaskHeader}
            onChange={this.updateTaskHeader} />
        </div>
        <div className="form-group">
          <label> Task Description</label>
          <input type="text" className="form-control" value={this.state.newTaskDescription}
            onChange={this.updateTaskDescription} />
        </div>
        <div className="form-group">
          <label> Due Date</label>
          <input type="date" className="form-control" value={this.state.newDueDate}
          onChange={this.updateDueDate}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Add Task</button>
      </form>
    );
  }
}

export default AddTaskForm;