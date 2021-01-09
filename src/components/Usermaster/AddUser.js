import React, {Component} from 'react';
import { Modal, Button,Select,Avatar,Row,Col,Input,Alert} from 'antd';
import axios from 'axios';
import {UserOutlined 
} from '@ant-design/icons';
import SendInvite from './SendInvite';
const { Option } = Select;



//for selection member
function handleChange(value) {
    console.log(`selected ${value}`);
  }

//for select tags
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











class AddUser extends Component {

    state = { 
        visible: false,
            phoneno: '',
            mobileno:'',
            email: '',
            users: [],
        
    
    };

    
    constructor(props) 
      {
          super(props);
        }


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
        
          handleChange = ({target}) => {
            const {name,value} = target;
            this.setState({[name]: value})
        };


        //reset new Asset form
         resetNweusertInput = () => {
       this.setState({
         phoneno:'',
            mobileno:'',
            email:'',
  })
}

        submit =  (event)=> {
            event.preventDefault();
            const payload = {
              
           phoneno:this.state. phoneno,
            mobileno:this.state.mobileno,
          
           email:this.state.email
            }
        
        axios({
          url: '/api/addusersave',
          method: 'POST',
          data: payload
        })
        .then(()=>{
          console.log('New user has been sent to server')
          this.resetNweusertInput();
          //this. getAssets();
          
        
        })
        
        
        //window.location = '/assetonboard';
        }












          
        render() {
            console.log('State:', this.state)
          return (
           
           
          
           <>
            <Button  shape="round" style={{ background: "#95d6c7", borderColor: "black" }} onClick={this.showModal}>
         Add User
        </Button>

        <Modal
          title="Add User"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        {/* <div class="alert alert-success">
  <strong>Success!</strong> 
</div> */}
         <b>Unit</b><br></br>
         <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a unit"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">A-112</Option>
    <Option value="lucy">A-113</Option>
    <Option value="tom">a-114</Option>
    <Option value="tom">a-115</Option>
    <Option value="tom">a-116</Option>
    <Option value="tom">a-117</Option>
  </Select><br></br><br></br>


 <b>Owner</b><br></br>
  <Select mode="multiple"
    style={{ width: '100%' }}
    placeholder="Select tenent name"
    defaultValue={['AmandaChavez']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="AmandaChavez" label="AmandaChavez">
      <div className="demo-option-label-item">
        <span role="img" aria-label="AmandaChavez">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </span>
       Amanda Chavez
      </div>
    </Option>
    <Option value="JasminePalmer" label="JasminePalmer">
      <div className="demo-option-label-item">
        <span role="img" aria-label="JasminePalmer">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </span>
        Jasmine Palmer
      </div>
    </Option>
    <Option value="FionnaWade" label="FionnaWade">
      <div className="demo-option-label-item">
        <span role="img" aria-label="FionnaWade">
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        </span>
        Fionna Wade
      </div>
    </Option>
    <Option value="BeatriceCarrol" label="BeatriceCarrol">
      <div className="demo-option-label-item">
        <span role="img" aria-label="BeatriceCarrol">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </span>
        Beatrice Carrol
      </div>
    </Option>
  </Select><br></br><br></br>

<b>Type</b><br></br>
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
    <Option value="jack">Sub-Tenent</Option>
    <Option value="lucy">Sub-Front Desk person</Option>
    <Option value="tom">Owner</Option>
    <Option value="tom">Guest</Option>
    
  </Select><br></br><br></br>
  <Row>
           <Col>
           <b>Phone Number</b><br></br>
           <Input size="large" name="phoneno" style={{ background:"#D8D8D8",borderRadius: '5px'}} placeholder="Enter phone no" value={this.state.phoneno} onChange={this.handleChange} />
    </Col>&nbsp;&nbsp;&nbsp;
    <Col>
    <b>Home Phone</b><br></br>
           <Input size="large" name="mobileno" style={{ background:"#D8D8D8",borderRadius: '5px'}} placeholder="Enter home-phone no" value={this.state.mobileno} onChange={this.handleChange}/>
</Col>
</Row><br></br>
<b>Email</b><br></br>
           <Input size="large" name="email" style={{ background:"#D8D8D8",borderRadius: '5px'}} placeholder="Enter mail"  value={this.state.email} onChange={this.handleChange}/><br></br><br></br>

 <center><SendInvite/></center><br></br>

<center><Button shape="round" style={{ background: "black", color: "#FF1493" }}  onClick={this.submit}>Add User</Button></center>





        </Modal>
        </>
                
            
         
           
          );
        }
      }
      
  export default AddUser;