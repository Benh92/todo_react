import React from "react";

class Task extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12">

                        <div class="card">
                            <h5 class="card-header">Task Header</h5>
                            <div class="card-body">
                                <h5 class="card-title">Task Subheader </h5>
                                <p class="card-text">This can be the task description, Ideally this will be updated on the card.</p>
                                <a href="#" className="marg">Complete</a>
                                <a href="#" className="marg">Delete</a>
                            </div>
                        </div>
                        <br />

                    </div>
                </div>
            </div>

        );
    }
}

export default Task; 