import React, {Component} from 'react';
import {Button, Modal, Select,Row,Col,Input, Avatar} from 'antd';
import Divider from 'rc-menu/lib/Divider';
import {UserOutlined 
} from '@ant-design/icons';
import "./Board.css";
const { Option } = Select;
const { TextArea } = Input;

//for selection tab tenent
function handleChange(value) {
    console.log(`selected ${value}`);
  }

//for Action tab tab
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
  

class DeclineComp extends Component {
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
          <Button type="link" block onClick={this.showModal}>
           Decline
          </Button>
          <Modal
            title="Decline Complaint"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
         
       
           <b>Reason*</b><br></br>
           <Input size="default" name="Reason" style={{background:"#D8D8D8",borderRadius: '5px'}} placeholder="Double entry, Accidental entry, False Complaint" value={this.state.VendorName} onChange={this.handleChange}/><br></br><br></br>
           <b>Member</b><br></br>
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

   

<b>Explanation for Ignoring the complaint*</b><br></br>
           <TextArea placeholder="" style={{background:"#D8D8D8",borderRadius: '5px'}} name="message" value={this.state.Notes} onChange={this.handleChange}/><br></br><br></br>
           
           <Row>

           <Col>
           <Button  style={{ background:"#e60000",borderRadius: '5px' }} block> &nbsp;&nbsp;&nbsp;&nbsp;Decline&nbsp;&nbsp;&nbsp;&nbsp;</Button><br></br>
           </Col>
           </Row>
          </Modal>
        </>
      );
    }
  }
  
export default DeclineComp;



