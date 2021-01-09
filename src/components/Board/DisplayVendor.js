import React, {Component} from 'react';

import Sidebar from '../Home/Sidebar';
import PrimarySearchAppBar from '../Home/PrimarySearchAppBar';

import {Link} from 'react-router-dom';
import axios from 'axios';
import {Button, Row, Col} from 'antd';
const Vendor = props => (
    <tr>
      <td>{props.vendor.VendorName}</td>
      <td>{props.vendor.Address}</td>
      <td>{props.vendor.Notes}</td>
      <td>
      <a href="#" >Accept</a> | <a href="#" onClick={() => { props.deleteVendor(props.vendor._id) }}>Decline</a>
    </td>
      
     
    </tr>
  )
  
/* 
Login component 
- Display login form 
*/
class DisplayVendor extends Component {
    
  constructor(props) 
    {
        super(props);
        this.deleteVendor = this.deleteVendor.bind(this)

        this.state = {posts: []};
      }

      componentDidMount() {
        axios.get('/api')
        .then((response)=>{
          const data = response.data;
          this.setState({ posts: data});
          console.log('Data has been recieved')
          this.resetVendorInputs();
        })
        .catch(()=>{
          //alert('Error retriving data')
        })
      }
//to delete vendors from db
      deleteVendor(id) {
        axios.delete('/api'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          posts: this.state.posts.filter(el => el._id !== id)
        })
      }
    
      
      vendorList() {
        return this.state.posts.map(currentvendor => {
          return <Vendor vendor={currentvendor} deleteVendor={this.deleteVendor} key={currentvendor._id}/>;
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
          <h3>Logged Vendors</h3>
          </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Col>
          <Link to="/dashboard"><Button type="primary" shape="round">
          Back to Add vendors
          </Button>
          </Link>
          </Col>
          </Row>
          <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Vendor Name</th>
              <th>Address</th>
              <th>Notes</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            { this.vendorList() }
          </tbody>
        </table>  
        </div>
        </body>       
          
       
         
        );
      }
    }
    
export default DisplayVendor ;