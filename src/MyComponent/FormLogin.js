import React from 'react'
import { Link } from 'react-router-dom'

export const FormLogin = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3">
                    <form className="form-card sign-up-form bg-light">
                        <h2 className="text-center">Login</h2>
                        <hr />
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label" >Username/Email Address </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder ="name@example.com" required="required"></input>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder ="password123" required="required"/>
                           
                        </div>
                        <div className="fgroup">
                        <label className="form-check-label">
                            <input type="checkbox" required="required"/> 
                            Remember me
                        </label>


                        </div>
                        <div className="mb-3 form-text">
                            
                            <a href="">Forgot password?</a>
                        </div>
                        <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-dark ">Submit</button>
                        </div>
                        <div className="hint-text login">Do not have an account?  <Link to ="/" className="nav-link " >Sign Up</Link>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}
