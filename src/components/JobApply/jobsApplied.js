import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './apply.css';
import axios from 'axios';
import {BASE_URL} from './../../components/constants/constants.js';
import Navbar from './../navbar/Navbar.jsx';
import { connect } from 'react-redux';
import {history} from "../../util/utils";
class jobsApplied extends Component {
    constructor(props){
        super(props);

        this.state = {
            results:[]
        }
    }

    componentWillMount(){

        console.log("inside componentdidmount of applied jobs")
        let ID = this.props.user._id;
         axios.get(`${BASE_URL}/applications/applied/`+ID)
             .then((response) => {

            if(response.status == 200) {
                console.log("response data : " + response.data);

                this.setState({
                    results : this.state.results.concat(response.data),
                });
            }
            else{
                alert("Oops! Something went wrong. Login again")
            }
        });
    }
    render() {
      if(!localStorage.getItem('servertoken'))
      {
        history.push('/')
      }
        let jobItem = this.state.results.map(item =>{
            return(
                <div className="row appliedjobs">
                    <div className="col-md-1">
                    <img className="clogo" src={item.CompanyLogo}/>&nbsp;
                     </div>
                     <div className="col-md-11" >
                     <h3 className="jobtitle">{item.JobTitle}</h3>
                    <h4 className="companyname">{item.CompanyName}</h4>
                    <h5 className="joblocation">{item.JobLocation}</h5>
                    <h5 className="joblocation">Applied On: {new Date(item.appliedDate).toDateString()}</h5>
                    <hr/>
                    </div>

                </div>
            )
        })
        return (
            <div className="back">
            <Navbar />
                <div className="headBar">
                <ul className="navDash">
                <li ><Link to= "/jobs" className="jobTypes" >Saved Jobs</Link></li>
                <li className="jobTypes">Applied Jobs</li>
                </ul>
                </div>

                <div className="dashjob">
                <br/>
                <h4 style={{'margin-top':'30px','margin-left':'100px'}}>Applied Jobs({this.state.results.length})</h4>
                <hr/>
                {jobItem}
                </div>


            </div>
         );
    }
}
const mapStateToProps = (state) =>{
    return {
        user : state.LoginReducer.currentUserDetails
    }
}

export default connect(mapStateToProps)(jobsApplied);
