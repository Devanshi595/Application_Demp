import React, {Component} from 'react';

import { Table, Tag, Space,Modal,Button,Input,TreeSelect,Row,Col } from 'antd';
import {UserOutlined,HomeFilled,DeleteFilled} from '@ant-design/icons';
import axios from 'axios';

const { TreeNode } = TreeSelect;
class Newasset extends Component {
  state = { 
      visible: false,
      value: undefined,
    
 };
 state = {
    AssetId: '',
    Address:'',
    Tags: '',
   RTSP:'',
    assets: []
  };
  componentDidMount() {
    this.getAssets();
  };
  
  handleChange = ({target}) => {
    const {name,value} = target;
    this.setState({[name]: value})
};


submit =  (event)=> {
    event.preventDefault();
    const payload = {
      
    AssetId:this.state. AssetId,
    Address:this.state.Address,
  
    RTSP:this.state.RTSP
    }

axios({
  url: '/api/assetsave',
  method: 'POST',
  data: payload
})
.then(()=>{
  console.log('Asset Data has been sent to server')
  this.resetAssetInput();
  this. getAssets();

})
.catch(()=>{
  console.log('Errorr')
})

window.location = '/assetonboard';
}

//get data from db
getAssets = () => {
    axios.get('/api')
    .then((response)=>{
      const data = response.data;
      this.setState({ assets: data});
      console.log('Asset Data has been recieved')
      this.resetAssetInput();
    })
    .catch(()=>{
      alert('Error retriving data')
    })
    
  }

//reset new Asset form
resetAssetInput = () => {
  this.setState({
    AssetId:'',
    Address:'',
  
    RTSP:''
    
  })
}
 //treeselector
 onChange = value => {
    console.log(value);
    this.setState({ value });
  };
  
  showModal = () => {
    this.setState({
      visible: true,
      
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
      
    console.log('State:', this.state)
    return (
      <>
        <Button type="primary" onClick={this.showModal}  style={{ background: "#4B0082", borderColor: "black" }}>
          NEW
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <Row>
           <Col>
           <b>Asset ID</b><br></br>
           <Input size="large" name="AssetId" style={{background:"#D8D8D8",borderRadius: '5px'}}placeholder="Enter your name" value={this.state.AssetId} onChange={this.handleChange}/>
             </Col>&nbsp;&nbsp;&nbsp;
             <Col>
               <b>Address</b><br></br>
           <Input size="large" name="Address"  placeholder="Enter your address" style={{background:"#D8D8D8",borderRadius: '5px'}} value={this.state.Address} onChange={this.handleChange} />
         </Col>
          </Row><br></br>

    <b>Tags</b><br></br>
    <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto',background:"#D8D8D8",borderRadius: '5px'}} 
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={this.onChange}
      >
        <TreeNode value="Parking-1" title="Parking-1">
        </TreeNode>
        <TreeNode value="Basement" title="Basement">
       </TreeNode>
      </TreeSelect><br></br><br></br>
           &nbsp;&nbsp;
           <b>RTSP Link</b><br></br>
           <Input size="large" name="RTSP"  placeholder="eg:'http://170.369411'" style={{background:"#D8D8D8",borderRadius: '5px'}}value={this.state.RTSP} onChange={this.handleChange}/><br></br><br></br>
           
          <Button type="primary" style={{ background: "#4B0082", borderColor: "black" }}  onClick={this.submit}>Add Asset</Button>
      
        </Modal>
      </>
    );
  }
}
export default Newasset;