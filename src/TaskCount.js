import React from "react";

class TaskCount extends React.Component {
    render() {
        return (
            <p> Number of tasks outstanding: {this.props.count} </p>
        );
    }
}


export default TaskCount;

