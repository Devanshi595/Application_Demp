import React, {Component} from 'react';
import { Modal, Button,Table, Tag, Space,Input,TreeSelect } from 'antd';
import {PaperClipOutlined } from '@ant-design/icons';
const { TextArea } = Input;

/* 
Login component 
- Display login form 

*/

//tags

const { SHOW_PARENT } = TreeSelect;
const treeData = [
    {
      title: 'Gill Half',
      value: '0-0',
      key: '0-0',
     
    },
    {
      title: 'Chinmay Shrivastava',
      value: '0-1',
      key: '0-1',
      
    },
    
  ];
class Ignorealert extends Component {
    
  constructor(props) 
    {
        super(props);
      }

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
    
 //tag
onChange = value => {
console.log('onChange ', value);
this.setState({ value });
};
//tag





      render() {
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

<Button  onClick={this.showModal}   shape="round" style={{ background: "#189c7e", color: "black" }}>
          Ignore alert
        </Button>
        <Modal
          title="Ignore an alert"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <b>Name</b><br></br>
           <Input size="large" style={{ background:"#D8D8D8",borderRadius: '5px'}} placeholder="Eg Parking 3 Lockdown,Pool MAintanance"  /><br></br>
           <b>Members</b><br></br>
         <TreeSelect {...tProps} />  <br></br>
         <b>Message</b><br></br>
           <TextArea style={{ background:"#D8D8D8",borderRadius: '5px'}} placeholder="Type message you want to send" /><br></br><br></br>
           &nbsp;&nbsp;
            <Button type="link"    ><PaperClipOutlined style={{ fontSize: '25px', color: 'black' }} /></Button><br></br><br></br>
       <center> <Button block shape="round" style={{  size: '50px',background: "#189c7e", color: "black" }} >Ignore alert</Button></center>





        </Modal>








          
          </>       
          
       
         
        );
      }
    }
    
export default Ignorealert;