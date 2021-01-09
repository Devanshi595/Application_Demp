import React, {Component} from 'react';
import { Modal, Button,Input, Card } from 'antd';
const { TextArea } = Input;

class SendInvite extends Component {
    
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
      
        render() {
          return (
            
           
           
            <>
            <Button shape="round" style={{ background: "black", color: "#FF1493" }}  onClick={this.showModal}>
          Send Link
        </Button>
        <Modal
          title="Send Invite"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <b>Note</b><br></br>
        <Card style={{ width: 450, height:100 }}>
   <b>The newly registered user will recieve an Email with link to register to this application. Select the  user to send the invite link</b>
   
  </Card><br></br><br></br><br></br>
  <Button shape="round" block  style={{ background: "black", color: "white" }}>
      Send Owner Registration Details
    </Button><br></br><br></br>
    <Button shape="round" block  style={{ background: "#4B0082", color: "white" }}>
      Send Tenent Registration Details
    </Button>
         
        </Modal>
            </>
            
         
           
          );
        }
      }
      
  export default SendInvite;