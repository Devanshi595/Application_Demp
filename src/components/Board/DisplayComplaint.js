import React, {Component} from 'react';

import Sidebar from '../Home/Sidebar';
import PrimarySearchAppBar from '../Home/PrimarySearchAppBar';

import {Link} from 'react-router-dom';
import axios from 'axios';
import {Button, Row, Col} from 'antd';
const Complaint = props => (
    <tr>
      <td>{props.complaint.ComplaintName}</td>
      <td>{props.complaint.ComplaintId}</td>
      <td>{props.complaint.Note}</td>
      <td>
      <a href="#" >Accept</a> | <a href="#" onClick={() => { props.deleteComplaint(props.complaint._id) }}>Decline</a>
    </td>
      
     
    </tr>
  )
  
/* 
Login component 
- Display login form 
*/
class DisplayComplaint extends Component {
    
  constructor(props) 
    {
        super(props);
        this.deleteComplaint = this.deleteComplaint.bind(this)

        this.state = {array: []};
      }

      componentDidMount() {
        axios.get('/api/comp')
        .then((response)=>{
          const data = response.data;
          this.setState({ array: data});
          console.log('comp Data has been recieved')
          this.resetComplaintInput();
        })
        .catch(()=>{
          //alert('Error retriving data')
        })
      }
//to delete vendors from db
      deleteComplaint(id) {
        axios.delete('/api'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          array: this.state.array.filter(el => el._id !== id)
        })
      }
    
      
      complaintList() {
        return this.state.array.map(currentcomp => {
          return <Complaint complaint={currentcomp} deleteComplaint={this.deleteComplaint} key={currentcomp._id}/>;
        })
      }
    
      render() {
        return (
          <body>
         
        
          <div>
              <PrimarySearchAppBar />
              <br></br>
              <Row>
                  <Col>
          <h3>Logged Complanits</h3>
          </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Col>
          <Link to="/dashboard"><Button type="primary" shape="round"  style={{ background: "#e60000", borderColor: "black" }}>
          Back to Add complaints
          </Button>
          </Link>
          </Col>
          </Row>
          <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Complaint Name</th>
              <th>Complaint ID</th>
              <th>Notes</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            { this.complaintList() }
          </tbody>
        </table>  
        </div>
        </body>       
          
       
         
        );
      }
    }
    
export default DisplayComplaint ;