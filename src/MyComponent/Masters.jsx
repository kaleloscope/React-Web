import React, { Component } from 'react';

class Masters extends Component {
    constructor(props) {
        super(props) 

        this.state = {

        }
        this.goToDis = this.goToDis.bind(this);
    }

    goToDis() {
        this.props.history.push('/district')
    }
    render() {
        return (
            <div>
               <div className="container-fluid">
            <       div className="row justify-content-center">
                        <div className="col-12 col-sm-6 col-md-3">
                            <form className="form-card sign-up-form bg-light">
                                <h2 className="text-center">Masters</h2>
		                        <p className="text-center">Choose from the following Masters</p>
                                <hr />
                                <div class="d-grid gap-2">
                                    <button class="btn btn-outline-dark" type="button">Country</button>
                                    <button class="btn btn-outline-dark" type="button">State</button>
                                    <button class="btn btn-outline-dark" type="button" onClick = {this.goToDis}>District</button>
                                    <button class="btn btn-outline-dark" type="button">Tahsil</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Masters;