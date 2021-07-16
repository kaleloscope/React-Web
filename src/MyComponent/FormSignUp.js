import { render } from '@testing-library/react'
import React, {Component} from 'react'
import Service from '../services/Service'
import { Link } from 'react-router-dom'

export class FormSignUp extends Component{
    constructor(props){
        super(props)

        this.state = {
            users: [],
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    // componentDidMount(){
    //     Service.createUser().then((res) => {
    //         this.setState({users: res.data});
    //     });
    // }

    saveUser = (e) => {
        e.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, password: this.state.password};
        console.log('User => ' + JSON.stringify(user));
        Service.createUser(user).then((res) => {
            this.setState({users: res.data});
        });
    }



    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value})
    }

    



render() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3">
                    <form className="form-card sign-up-form bg-light">
                        <h2 className="text-center">Sign Up</h2>
		                <p className="text-center">Please fill in this form to create an account!</p>
                        <hr />
                        <div className="mb-3">
                            <div className="fgroup">
                                <div className="row">
                                    <div className="col"><input type="text" className="form-control" name="first_name" placeholder="First Name"
                                        required="required" value={this.state.firstName} onChange = {this.changeFirstNameHandler} /></div>
                                    <div className="col"><input type="text" className="form-control" name="last_name" placeholder="Last Name"
                                        required="required" value={this.state.lastName} onChange = {this.changeLastNameHandler} /></div>
                                </div>
                            </div>
                                <div className="fgroup">
                                    <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" value={this.state.emailId} onChange = {this.changeEmailIdHandler} />
                                </div>
                                <div className="fgroup">
                                    <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={this.state.password} onChange = {this.changePasswordHandler} />
                                </div>
                                
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-dark " onClick={this.saveUser} >Register</button>
                                </div>
                                <div className="hint-text login">Already have an account?  
                                <Link to ="/login" className="nav-link " >Login</Link>
                                </div>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}
}



