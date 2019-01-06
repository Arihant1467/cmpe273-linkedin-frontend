import React, { Component } from 'react';
class JobListCard extends Component {
    
    constructor(props){
        super(props);
    }

    cardClicked = (e)=>{
        this.props.onCardClicked(this.props.position);
    }

    render() { 
        
        const {data,show} = this.props;

        return ( 
            // <div className="row joblist-row justify-content-center" onClick={this.cardClicked} style={{display:show?'block':'none'}} >
            //     <div className="col-md-2">
            //         <img className="w-100 contain" id="logo-company-img" src={data.CompanyLogo} alt={data.CompanyName} />
            //     </div>
            //     <div className="col-md-9" >
            //         <p className="position-name" style={{color:'#0073b1',fontSize:'16px'}}> {data.JobTitle} {data.JobFunction} </p>
            //         <p className="company-name" style={{fontSize:'14px',color:'black'}} > {data.CompanyName} </p>
            //         <p className="location" style={{fontSize:'13px',color:'grey',fontStyle:'bold'}} > {data.JobLocation} </p>
            //         <p className="description" style={{fontSize:'14px'}} > {data.description.substring(0, data.description.length>100?100:data.description.length)}... </p>
            //         <p className="apply" style={{fontSize:'12px',color:'grey'}} ><b>Posted On: {new Date(data.postingDate).toDateString()}</b></p>
            //         <div style={{display:data.easyApply?'block':'none'}}>
            //             <p className="apply" style={{fontSize:'12px',color:'grey'}} ><img src="https://img.icons8.com/color/100/5e6d77/linkedin.png" height="20px" width="20px"/><b>Easy Apply</b></p>
		    //         </div>
            //     </div>
            // </div>

            <div className="row joblist-row justify-content-center" onClick={this.cardClicked} style={{ display: show ? '' : 'none' }} >
                <div className="col-md-2">
                    <img className="w-100 contain" id="logo-company-img" src={data.CompanyLogo} alt={data.CompanyName} />
                </div>
                <div className="col-md-8">
                    <p className="position-name" style={{ color: '#0073b1', fontSize: '16px' }}> {data.JobTitle} {data.JobFunction} </p>
                    <p className="company-name" style={{ fontSize: '14px', color: 'black' }} > {data.CompanyName} </p>
                    <p className="location" style={{ fontSize: '13px', color: 'grey', fontStyle: 'bold' }} > {data.JobLocation} </p>
                    <p className="description" style={{ fontSize: '14px' }} > {data.description.substring(0, data.description.length > 100 ? 100 : data.description.length)}... </p>
                    <p className="apply" style={{ fontSize: '12px', color: 'grey' }} ><b>Posted On: {new Date(data.postingDate).toDateString()}</b></p>
                    <div style={{ display: data.easyApply ? 'block' : 'none' }}>
                        <p className="apply" style={{ fontSize: '12px', color: 'grey' }} ><img src="https://img.icons8.com/color/100/5e6d77/linkedin.png" height="20px" width="20px" /><b>Easy Apply</b></p>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default JobListCard;