import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
    
  }




  render() {
      return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">CodeKul</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className="nav-link " aria-current="page" href="#" onClick = {this.loginUser} >Login</a> */}
            
            <Link to ="/login" className="nav-link " >Login</Link>
            
          </li>
          <li className="nav-item">
          <Link to ="/" className="nav-link " >Sign Up</Link>
          </li>
                  {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Masters
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><Link to ="/login" className="nav-link " >Country</Link></li>
                      <li><Link to ="/login" className="nav-link " >State</Link></li>
                      <li><Link to ="/login" className="nav-link " >District</Link></li>
                    </ul>
                  </li> */}
          
          <li className="nav-item">
          <Link to ="/masters" className="nav-link " >Masters</Link>
          </li>
          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light" type="submit">Search</button>
          
        </form>
      </div>
    </div>
  </nav> 
        </div>
    )
}
}

