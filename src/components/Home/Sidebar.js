import { Layout, Menu } from 'antd';
import React, {Component} from 'react';
import logo1 from '../../logo1.png';
import searchIcon from '../../search-icon.png';
import { Avatar } from 'antd';
import { Link,BrowserRouter, Route, Switch } from "react-router-dom";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
  BarChartOutlined,
  MailOutlined,
  FormOutlined,
  HistoryOutlined,
  CalendarOutlined,
  FileTextOutlined ,
  CreditCardOutlined,
  CompassOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  RightOutlined,
  LeftOutlined 
} from '@ant-design/icons';
import "./Sidebar.css";
import { Typography } from 'antd';
const { Title } = Typography;
const { Header, Sider, Content } = Layout;

//side bar component

class Sidebar extends Component {
  state = {
    collapsed: false,
    
  };
constructor() {
  super();
  this.state = {
    showForm: false
  }
}

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
   
return (
        <Layout>
            
     
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          
          <Menu className="menu" theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{  background: "black"}}>
          <Menu.Item key="1"  icon={<HomeOutlined />} className="customclass">
              <Link to="/homepage" /> Home
                </Menu.Item>
              <Menu.Item key="2"  icon={<BarChartOutlined />} className="customclass">
              <Link to="/dashboard" /> Dashboard
                </Menu.Item>
                <Menu.Item key="3" icon={<MailOutlined />} className="customclass">
                <Link to="/inbox" /> Inbox
                </Menu.Item>
                <Menu.Item key="4" icon={<CompassOutlined />} className="customclass">
                <Link to="/map" /> Map
                </Menu.Item>
                <Menu.Item key="5" icon={<FormOutlined />} className="customclass">
                <Link to="/reports" /> Reports
                </Menu.Item>
                <Menu.Item key="6" icon={<UserOutlined />} className="customclass">
                <Link to="/usermaster" />User Master
                </Menu.Item>
                <Menu.Item key="7" icon={<HistoryOutlined />} className="customclass">
                <Link to="/incidentlogged" /> Incident Logged
                </Menu.Item>
                <Menu.Item key="8" icon={<CalendarOutlined />} className="customclass">
                <Link to="/activitycalender" />Activity Calender
                </Menu.Item>
                <Menu.Item key="9" icon={<FileTextOutlined />} className="customclass">
                <Link to="/assetonboard" />Assest Onboarding
                </Menu.Item>
                <Menu.Item key="10" icon={<UploadOutlined />} className="customclass">
                <Link to="/trainassets" /> Train Assets
                </Menu.Item>
                <Menu.Item key="11" icon={<CreditCardOutlined />} className="customclass">
                Payment & Billing
                </Menu.Item>
                <Menu.Item key="12" icon={<QuestionCircleOutlined />} className="customclass">
                <Link to="/help" /> Help Center
                </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
        <div style={{ padding: 0 }}>
             {React.createElement(this.state.collapsed ?  RightOutlined :   LeftOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            </div>
           <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
          <h1> Coming Soon </h1>
          </Content>
        </Layout>
          
        </Layout>
   
    
    );
  }
}
export default Sidebar;