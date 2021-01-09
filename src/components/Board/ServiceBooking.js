import React, {Component} from 'react';

import { Modal, Button,Menu, Dropdown,Row,Col,Input,DatePicker, Space,Select } from 'antd';
import {
  PlusOutlined,DownOutlined,UserOutlined,HomeFilled,EditFilled 
} from '@ant-design/icons';
import "./Board.css";
import { color } from '@material-ui/system';
const { TextArea } = Input;
const { RangePicker } = DatePicker;

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




class ServiceBooking extends Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    return (
      <>
        <div class="box">
        <Button ghost onClick={() => this.setModal2Visible(true)}>
        Service Bookings
        </Button>
        </div>
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
    <Option value="tom">Uber</Option>
  </Select>
          <br></br><br></br>

                  <Row>
           <Col>
           <b>Tenent</b><br></br>
           <Input size="large" style={{ background:"#D8D8D8",borderRadius: '5px'}} placeholder="Select Tenent Name"  />
    </Col>&nbsp;&nbsp;&nbsp;
    <Col>
    <b>Vendor/Person</b><br></br>
           <Input size="large" style={{ background:"#D8D8D8",borderRadius: '5px'}} placeholder="Select Vendor/Person Name"  />
</Col>
</Row>


<b>Message</b><br></br>
           <TextArea style={{ background:"#D8D8D8",borderRadius: '5px'}} placeholder="Type message you want to send to vendor services/booking etc" /><br></br><br></br>
           &nbsp;&nbsp;




<Row>
    <Col>
           <b>Pick the date</b>&nbsp;&nbsp;
           <DatePicker/>
    </Col>&nbsp;&nbsp;
    <Col>
    <Button type="primary" style={{ background: "#009999", borderColor: "black" }}>Book</Button>
</Col>
</Row>













    
        </Modal>
      </>
    );
  }
}

export default ServiceBooking;
