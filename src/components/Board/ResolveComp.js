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
  

class ResolveComp extends Component {
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
            Resolve
          </Button>
          <Modal
            title="Complain Resolve"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
         
       
           <b>Category</b><br></br>
           <Input size="default" style={{ background:"#D8D8D8",borderRadius: '5px'}} name="Category" placeholder="Home Cleaning" value={this.state.VendorName} onChange={this.handleChange}/><br></br><br></br>
           <b>Tenent</b><br></br>
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

   <b>Action</b><br></br>


  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select option"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="v1">Report to Supervisor</Option>
    <Option value="v2">Report to Owner</Option>
    <Option value="v3">Report to MAnagement</Option>
    <Option value="v4">Resolve Now</Option>
  </Select><br></br><br></br>

  <b>Message</b><br></br>
           <TextArea placeholder="" style={{ background:"#D8D8D8",borderRadius: '5px'}}name="message" value={this.state.Notes} onChange={this.handleChange}/><br></br><br></br>
           
           <Row>
               <Col>
           <Button type="primary" shape="round"  style={{ background:"#050505" }} > Date:26/05/2020</Button><br></br><br></br>
           </Col> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
           <Col>
           <Button   style={{ background:"#3CB371",borderRadius: '5px' }} block> &nbsp;&nbsp;&nbsp;&nbsp;Resolve&nbsp;&nbsp;&nbsp;&nbsp;</Button><br></br>
           </Col>
           </Row>
          </Modal>
        </>
      );
    }
  }
  
export default ResolveComp;



