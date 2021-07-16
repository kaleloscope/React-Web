import React, { Component } from 'react';
import Service from '../services/Service'

class AddDis extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            name: '',
            code: '',
            description: '',
            activeStatus: ''
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.saveDistrict = this.saveDistrict.bind(this);
        

    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeCodeHandler= (event) => {
        this.setState({code: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeStatusHandler= (event) => {
        this.setState({activeStatus: event.target.value});
    }

    saveDistrict = (e) => {
        e.preventDefault();
        let district = {name: this.state.name, code : this.state.code, description: this.state.description, activeStatus: this.state.activeStatus};
        console.log('District => ' + JSON.stringify(district));

        Service.createDistrict(district).then((res) => {
            this.props.history.push('/district');
        });


    }


    render() {
        return (
            <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3">
                    <form className="form-card sign-up-form bg-light">
                        <h2 className="text-center">Add District Masters</h2>
		                <p className="text-center">Please fill in these details</p>
                        <hr />
                        <div className="mb-3">
                            
                                
                            <div className="fgroup"><input type="text" className="form-control" name="name" placeholder="District Name" required="required" value = {this.state.name} onChange = {this.changeNameHandler} /></div>
                            <div className="fgroup"><input type="text" className="form-control" name="code" placeholder="District Code"
                                        required="required" value = {this.state.code} onChange = {this.changeCodeHandler} /></div>
                                
                            
                                <div className="fgroup">
                                    <input type="text" className="form-control" name="description" placeholder="Description" required="required" value = {this.state.description} onChange = {this.changeDescriptionHandler} />
                                </div>
                                <div className="fgroup">
                                    <input type="text" className="form-control" name="activeStatus" placeholder="Active Status" required="required" value = {this.state.activeStatus} onChange = {this.changeStatusHandler} />
                                </div>
                                
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-secondary " onClick={this.saveDistrict} >Add</button>
                                </div>
                                
                        </div>

                    </form>

                </div>

            </div>
        </div>
        );
    }
}

export default AddDis;