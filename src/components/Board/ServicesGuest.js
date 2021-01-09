import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import {PlusOutlined} from '@ant-design/icons';

class ServicesGuest extends Component {
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
         
          <Button type="primary" shape="round"  style={{ background:  "#e65c00" }} onClick={this.showModal}>
          Add Services<PlusOutlined />
        </Button>
          <Modal
            title="Add Services"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </>
      );
    }
  }

  export default ServicesGuest;
