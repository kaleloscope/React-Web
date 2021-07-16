import React, { Component } from 'react';
import Service from '../services/Service'


class DisMasComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            districts : []
        }
        this.goToAddDis = this.goToAddDis.bind(this);
        this.editDistrict = this.editDistrict.bind(this);
    }

    editDistrict(id){
        this.props.history.push(`/update-district/${id}`);
    }

    goToAddDis(){
        this.props.history.push('/add-district')
    }

    componentDidMount() {
        Service.getDistrict().then((res) => {
            this.setState({districts: res.data })
        });
    }

    render() {
        return (
            <div className="container ">
                
                <hr/>
                {/* <h1 className = "text-center text-muted">District Masters</h1> */}
                <div>
                <div class="p-3 bg-secondary text-light">
                    <div>
                    <h4 className = "text-center" >DISTRICT MASTER</h4>
                    </div>
                    <div className = "text-end">
                    <button type="button" className="btn btn-warning" onClick = {this.goToAddDis} >Add</button>
                  </div>
                </div>
                

                <div class="p-3 mb-2 bg-white text-dark">
                <table class="table">
                        <thead class="thead-dark">
                            <tr>
                               
                                <th scope="col">District Name</th>
                                <th scope="col">District Code</th>
                                <th scope="col">Description</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.districts.map(
                                    district =>
                                    <tr key ={district.id}>
                                            
                                            <td>{district.name}</td>
                                            <td>{district.code}</td>
                                            <td>{district.description}</td>
                                            <td>{district.activeStatus?'true':'false'}</td>
                                            <td>
                                            <button type="button" class="btn btn-success btn-sm" onClick = {() => this.editDistrict(district.id)}>Update</button>
                                            </td>
                                    </tr>
                                )
                            }
                           
                        </tbody>
                    </table>

                    </div>
                    </div>
                </div>
            
        );
    }
}

export default DisMasComp;