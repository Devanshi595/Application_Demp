import React, {Component} from 'react';

import PrimarySearchAppBar from '../Home/PrimarySearchAppBar';

import logo1 from '../../logo1.png';
import searchIcon from '../../search-icon.png';
import AddUser from './AddUser';


import { Link,BrowserRouter, Route, Switch } from "react-router-dom";
import {Divider, Layout, Menu, Avatar, Card, Typography,Row,Col,Button,Table,Space } from 'antd';
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
  LeftOutlined ,
  DeleteFilled,
  EditFilled,
  SaveFilled,
  SyncOutlined,   
} from '@ant-design/icons';
import "../Home/./Sidebar.css";
import Sidebar from '../Home/Sidebar';

import { height } from '@material-ui/system';

import axios from 'axios';


const { Title } = Typography;
const { Header, Sider, Content } = Layout;

/* 
Login component 
- Display login form 
*/


//tabel col
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Tenent Details',
    dataIndex: 'td',
  },
  {
    title: 'Owner Details',
    dataIndex: 'od',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a> <EditFilled/></a>
        <a> <DeleteFilled/></a>
        <a> <SaveFilled/></a>
      </Space>
      
      
    ),
  },
  
];

const data = [
  {
    key: '1',
    id: 'A112-TE',
    unit: 'A-112',
    status:'Blocked',
    td: 'Full Name:  Debbie S Coleman',
         
    od:'',
    action:'',
  },
  {
    key: '2',
    id: 'John Brown',
    unit: 32,
    status:'',
    td: 'New York No. 1 Lake Park',
    od:'',
    action:'',
  },
  {
    key: '3',
    id: 'John Brown',
    unit: 32,
    status:'',
    td: 'New York No. 1 Lake Park',
    od:'',
    action:'',
  },
];











class UserMaster extends Component {
    
  constructor(props) 
    {
        super(props);
        this.state = {
          showForm: false
        }
      }

      state = {
        collapsed: false,
        
      };
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
      render() {
        return (
          <body>
         
         
          <div>
          <PrimarySearchAppBar />
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
              margin: '24px 24px',
              padding: 30,
              minHeight: 300,
              boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" 
            }}
          >
        <Row>
  <Col>
  <h4>User Master</h4>
  </Col>
      <Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;                       
               <AddUser />
              </Col>&nbsp;&nbsp;&nbsp;&nbsp;
               <Col>
               <SyncOutlined style={{ fontSize: '30px', color: '#08c' }} />&nbsp;&nbsp;Reload
                </Col>
             </Row>
       <Divider></Divider>
       
              <Row>
                  <Col>
         
          </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Row>
          <Table columns={columns} dataSource={data} size="middle" />
         
  
          </Content>
        </Layout>
          
        </Layout>
         </div>
         </body>         
          
       
         
        );
      }
    }
    
export default UserMaster;