import React, {Component} from 'react';

import { Modal, Button,Menu, Dropdown,Row,Col,Input,TreeSelect,Select  } from 'antd';
import {
  PlusOutlined,DownOutlined,UserOutlined,HomeFilled,EditFilled,TagFilled  
} from '@ant-design/icons';
import axios from 'axios';
const { TextArea } = Input;
const { SHOW_PARENT } = TreeSelect;
const { Option } = Select;


//Select menu
function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}












//tags
const treeData = [
    {
      title: 'Noise Issue',
      value: '0-0',
      key: '0-0',
     
    },
    {
      title: 'Lobby Dirt',
      value: '0-1',
      key: '0-1',
      
    },
    {
      title: 'Parking-spot issues',
      value: '0-2',
      key: '0-2',
      
    },
  ];

//menu items
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Neigbhour issue
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Cleaning issues
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Noise Complaint
      </a>
    </Menu.Item>
  </Menu>
);






class Complaint extends Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };
//tag
onChange = value => {
    console.log('onChange ', value);
    this.setState({ value });
  };
//tag
  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  state = {
    Service: '',
    ComplaintName: '',
   ComplaintId:'',
    Tags: '',
    Note:'',
    array: []
  };
  componentDidMount() {
    this.getComplaints();
  };
  
  //feching data from database
  getComplaints = () => {
    axios.get('/api/comp')
    .then((response)=>{
      const data = response.data;
      this.setState({ array: data});
      console.log('Comp Data has been recieved')
      this.resetVendorInputs();
    })
    .catch(()=>{
      //alert('Error retriving data')
    })
    
  }


  handleChange = ({target}) => {
    const {name,value} = target;
    this.setState({[name]: value})
  };
  onChange = value => {
    console.log('onChange ', value);
    this.setState({ value });
  };
  submit =  (event)=> {
    event.preventDefault();
    const payload = {
    
    ComplaintName:this.state.ComplaintName,
    ComplaintId:this.state.ComplaintId,
  
    Note:this.state.Note
    }
    axios({
      url: '/api/compsave',
      method: 'POST',
      data: payload
    })
    .then(()=>{
      console.log('Comp Data has been sent to server')
      this.resetComplaintInput();
      
    })
    .catch(()=>{
      console.log('Errorr')
    })
    
    window.location = '/displaycomp';
  
  }

  //reset complaint form
resetComplaintInput = () => {
  this.setState({
    ComplaintName:'',
    ComplaintId:'',
  
    Note:''
    
  })
}
  render() {

    console.log('State:', this.state)
      //tags
    const tProps = {
        treeData,
        value: this.state.value,
        onChange: this.onChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Please select',
        style: {
          width: '100%',
        },
      };
      //tags
    return (
      <>
        
        <Button type="primary" shape="round" style={{ background: "#e60000", borderColor: "black" }} onClick={() => this.setModal2Visible(true)}>
          Add Complaints<PlusOutlined />
        </Button>
        <Modal
          title="Add Complaints"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <b>Service</b><br></br>
          <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Neigbhour issue"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Noise issues</Option>
    <Option value="lucy">Lobby dirt</Option>
    <Option value="tom">Neigbhour issues</Option>
  </Select>
          <br></br><br></br>

                  <Row>
           <Col>
           <b>Complaint Name</b><br></br>
           <Input size="large" name="ComplaintName" style={{background:"#D8D8D8",borderRadius: '5px'}} value={this.state.ComplaintName} onChange={this.handleChange} placeholder="Enter your complaint"  />
    </Col>&nbsp;&nbsp;&nbsp;
    <Col>
    <b>ID/Tag</b><br></br>
           <Input size="large" style={{background:"#D8D8D8",borderRadius: '5px'}} name="ComplaintId" value={this.state.ComplaintId} onChange={this.handleChange} placeholder="Enter Tag ID"  />
</Col>
</Row><br></br>

    <b>Tags</b><br></br>
    <TreeSelect {...tProps}  />  <br></br>  <br></br>
           <b>Notes</b><br></br>
           <TextArea  name="Note" style={{background:"#D8D8D8",borderRadius: '5px'}}value={this.state.Note} onChange={this.handleChange} placeholder="Controlled autosize" /><br></br><br></br>
           &nbsp;&nbsp;
          <Button type="primary" onClick={this.submit} style={{ background: "#e60000", borderRadius: '5px' }}>Add Complaint</Button><br></br>
        </Modal>
      </>
    );
  }
}

export default Complaint;