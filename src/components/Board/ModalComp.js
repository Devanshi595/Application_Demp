import React, {Component} from 'react';

import { Modal, Button,Menu, Dropdown,Row,Col,Input,TreeSelect,Select  } from 'antd';
import {
  PlusOutlined,DownOutlined,UserOutlined,HomeFilled,EditFilled 
} from '@ant-design/icons';
import axios from 'axios';
import "./Board.css";
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
    title: 'Maid Services',
    value: '0-0',
    key: '0-0',
   
  },
  {
    title: 'Home cleaning',
    value: '0-1',
    key: '0-1',
    
  },
  {
    title: 'Maintanance',
    value: '0-2',
    key: '0-2',
    
  },
];

class ModalComp extends Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };

  state = {
    Service: '',
    VendorName: '',
    Address:'',
    Tags: '',
    Notes:'',
    posts: []
  };

  componentDidMount() {
    this.getVendors();
  };
  

//frching data from database
  getVendors = () => {
    axios.get('/api')
    .then((response)=>{
      const data = response.data;
      this.setState({ posts: data});
      console.log('Data has been recieved')
      this.resetVendorInputs();
    })
    .catch(()=>{
      alert('Error retriving data')
    })
    
  }

  //display data on page
  displayVendors = (posts) => {

    if(!posts.lehgth) return null;

    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.VendorName}</h3>
        <p>{post.Address}</p>
        <p>{post.Notes}</p>
      </div>
    ));
  };


  handleChange = ({target}) => {
    const {name,value} = target;
    this.setState({[name]: value})
};

  submit =  (event)=> {
    event.preventDefault();
    const payload = {
    
    VendorName:this.state.VendorName,
    Address:this.state.Address,
  
    Notes:this.state.Notes
    }

axios({
  url: '/api/save',
  method: 'POST',
  data: payload
})
.then(()=>{
  console.log('Data has been sent to server')
  this.resetVendorInputs();
  this. getVendors();

})
.catch(()=>{
  console.log('Errorr')
})

window.location = '/displayvendor';
}


//reset vendor form
resetVendorInputs = () => {
  this.setState({
    VendorName:'',
    Address:'',
  
    Notes:''
    
  })
}


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
        
        <Button type="primary" shape="round"  style={{ background: "#3c9ae8" }} onClick={() => this.setModal2Visible(true)}>
          Add Vendors<PlusOutlined />
        </Button>
        
        <Modal
          title="Add Vendors"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <b>Service</b><br></br>
          <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Maid Services</Option>
    <Option value="lucy">Swimming Pool Cleaning</Option>
    <Option value="tom">Plumber Services</Option>
  </Select><br></br><br></br>
          <form>
            <Row>
              
           <Col>
           <b>Vendor Name</b><br></br>
           <Input size="large" style={{background:"#D8D8D8",borderRadius: '5px'}}name="VendorName" placeholder="Enter your name" value={this.state.VendorName} onChange={this.handleChange}/>
             </Col>&nbsp;&nbsp;&nbsp;
             <Col>
               <b>Address</b><br></br>
           <Input size="large" style={{background:"#D8D8D8",borderRadius: '5px'}}name="Address"  placeholder="Enter your address" value={this.state.Address} onChange={this.handleChange}/>
         </Col>
          </Row><br></br>

    <b>Tags</b><br></br>
    <TreeSelect {...tProps}   />  <br></br><br></br>
           <b>Notes</b><br></br>
           <TextArea placeholder="Controlled autosize"style={{background:"#D8D8D8",borderRadius: '5px'}} name="Notes" value={this.state.Notes} onChange={this.handleChange}/><br></br><br></br>
           &nbsp;&nbsp;
          <Button type="primary" style={{borderRadius: '5px'}}onClick={this.submit} >Add Vendor</Button><br></br>
      </form>
      <div>
          {this.displayVendors(this.state.posts)}
          </div>
          
        </Modal>
       
        
      </>
    );
  }
}

export default ModalComp;