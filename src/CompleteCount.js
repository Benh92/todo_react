import React from "react";

class CompleteCount extends React.Component {
    render() {
        return (
            <p> Number of tasks completed: {this.props.count} </p>
        );
    }
}


export default CompleteCount;