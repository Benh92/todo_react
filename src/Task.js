import React from "react";

class Task extends React.Component {

    trashClicked = () => {
        this.props.deleteTaskFunc(this.props.taskId);
    }


    render() {
        return (
            <div className="col-md-4">
                <div className="card">
                    <h5 className="card-header cardheader">{this.props.taskheader}<span className="floatright h6">{this.props.dueDate}</span> </h5>
                    <div className="card-body">
                        <p className="card-text">{this.props.text}</p>
                        <i className="fas fa-trash floatright iconcard" onClick={this.trashClicked} />
                        {this.props.completed
                            ?
                            <i className="fas fa-undo"></i> :
                            <i className="fas fa-check iconcard" onClick={this.checkClicked}></i>}
                    </div>
                </div>
                <br />

            </div>


        );
    }
}


export default Task; 