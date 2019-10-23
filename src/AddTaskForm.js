import React from "react";

class AddTaskForm extends React.Component {
  render() {
    return (
      <form className="col-md-12">
        <div className="form-group">
          <label> Task Header</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label> Task Description</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default AddTaskForm;