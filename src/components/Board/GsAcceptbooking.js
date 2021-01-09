import React, {Component} from 'react';
import { Modal, Button,Select,Row,Col,Input } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import "./Board.css";
const { Option } = Select;
const { TextArea } = Input;





//for select tab
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
  
class  GsAcceptbooking extends Component {
    state = { visible: false };
  
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
      return (
        <>
         
          <Button type="link" onClick={this.showModal}>
         Accept Booking
        </Button>
          <Modal
            title="Add Services"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width={900}
          >
          <b>Service</b><br></br>
           <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Booking"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select><br></br><br></br>
  <Row>
      
      <Col>
      <b>Guest Name</b><br></br>
      <Input size="large" name="GuestName" placeholder="Enter your name"
      style={{ background:"#D8D8D8",borderRadius: '5px'}}/>
      </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Col>
      <b>Guest Number</b><br></br>
      <Input size="large" name="GuestNumber" placeholder="Enter your no"
      style={{ background:"#D8D8D8",borderRadius: '5px'}}/>
      </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Col>
      <b>Guest Email</b><br></br>
      <Input size="large" name="GuestEmail" placeholder="Enter your Email"
      style={{ background:"#D8D8D8",borderRadius: '5px'}}/>
      </Col>
      </Row><br></br>

      <Row>
      <Col>
      <b>Tenent Name</b><br></br>
      <Input size="large" name="TenentName"  placeholder="Enter your name"
      style={{ background:"#D8D8D8",borderRadius: '5px'}}/>
      
      
      
     
      </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Col>
      <b>Tenent Flat No</b><br></br>
      <Input size="large" name="FlatNo" size="15px" placeholder="Enter your flat-no"
      style={{ background:"#D8D8D8",borderRadius: '5px'}}/>
      </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Col>
      <b>Booking Id</b><br></br>
      <Input size="large" name="BookingId" size="15px" placeholder="Enter your BookingId"
      style={{ background:"#D8D8D8",borderRadius: '5px'}}/>
      </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Col>
      <b>Parking Space No</b><br></br>

      <Select
    showSearch
    style={{ width: 200, background:"#D8D8D8", borderRadius: '5px'}} 
    placeholder="Booking"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="p1">G-106</Option>
    <Option value="p2">G-107</Option>
    <Option value="p3">G-108</Option>
  </Select>
<br></br>
  </Col>
      </Row><br></br>
      <b>Notes</b><br></br>
           <TextArea placeholder="" name="message" style={{ background:"#D8D8D8",borderRadius: '5px'}} /><br></br><br></br>
          <center> <Button   style={{ background:"#3CB371", borderRadius: '5px' }}> &nbsp;&nbsp;&nbsp;&nbsp;Book Space&nbsp;&nbsp;&nbsp;&nbsp;</Button></center><br></br>
            
          </Modal>
        </>
      );
    }
  }

  export default GsAcceptbooking;
