import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { connect } from 'react-redux';
//import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import {UPDATED_JOB_SEARCH_CRITERIA} from './../constants/reduxActionConstants.js';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      CompanyName : null,
      date : "",//YYYY-MM-DD
      seniorityLevel : null,
      location : null
    };

    this.filterByLocation = this.filterByLocation.bind(this);
    this.filterByDate = this.filterByDate.bind(this);
    this.filterBySeniorityLevel = this.filterBySeniorityLevel.bind(this);
    this.updateJobSearchCriteria = this.updateJobSearchCriteria.bind(this);
  }

  
  filterByLocation =(e)=>{
    console.log("Location :" + e.target.value);
    this.setState({location : e.target.value});
  }

  filterByDate =(e)=>{
    //var d =new Date(e).toISOString().substring(0,10);
    //console.log("Date :" + d);
    console.log("Date :"+e.target.value);
    this.setState({date : e.target.value});
  }

  filterBySeniorityLevel =(e)=>{
    console.log("Seniority Level :" + e.target.value);
    this.setState({seniorityLevel : e.target.value});
  }

  updateJobSearchCriteria = (e)=>{
    const criteria = {
      //CompanyName : this.state.CompanyName,
      date : this.state.date=="" ? "" : new Date(this.state.date).toISOString().substring(0,10) ,//YYYY-MM-DD
      seniorityLevel : this.state.seniorityLevel,
      location : this.state.location
    }
    console.log("job criteria "+JSON.stringify(criteria));
    this.props.updateJobSearchCriteriaRedux(criteria);
  }

  render() {
    return (
      <React.Fragment>
        <nav
          style={{
            height: 55,
            "box-shadow": "0 0 0 0 rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)"
          }}
        >
          <span style={{ padding: 10 }}>Filters: </span>
          <div style={{ display: "inline-block", padding: 10 }}>
            <input
              onChange={this.filterByLocation}
              style={{
                height: 34,
                width: 300,
                marginBottom: 20
              }}
              role="combobox"
              autocomplete="off"
              spellcheck="false"
              aria-autocomplete="list"
              aria-owns="nav-search-artdeco-typeahead-results"
              aria-expanded="false"
              placeholder="Location"
              type="text"
            />
          </div>
          <div style={{ display: "inline-block", padding: 10 }}>
            
            <div className="form-group form-control">
              {/* <DatePicker selected={this.state.date} onChange={this.filterByDate} /> */}
              <input type="date" onChange={this.filterByDate} placeholder="YYYY-MM-DD" />
            </div>

          </div>
          <button
            id="login-btn"
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.seniorityLevel==null ? "Seniority Level": this.state.seniorityLevel }
          </button>
          <div
            className="dropdown-menu" data-toggle="dropdown" aria-labelledby="dropdownMenuButton">
            <input type="button" onClick={this.filterBySeniorityLevel} className="dropdown-item" value="Internship" />
            <input type="button" onClick={this.filterBySeniorityLevel} className="dropdown-item" value="Mid Level" />
            <input type="button" onClick={this.filterBySeniorityLevel} className="dropdown-item" value="Senior Level"/>
            <input type="button" onClick={this.filterBySeniorityLevel} className="dropdown-item" value="Director" />
          </div>

          <div style={{ display: "inline-block", padding: 10 }}>
            <button onClick={this.updateJobSearchCriteria} className="btn btn-secondary rounded-0" >Search</button>
          </div>

        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state)=>{
  return{}
}

const mapDispatchToProps = (dispatch) =>{
  return{
    updateJobSearchCriteriaRedux : (jobSearchCriteria)=>{
        dispatch({
          type : UPDATED_JOB_SEARCH_CRITERIA,
          payload : jobSearchCriteria
        })
    }
  }
}
//export default SearchBar;
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);