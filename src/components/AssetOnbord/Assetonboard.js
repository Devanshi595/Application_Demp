import React, {Component} from 'react';
import logo1 from '../../logo1.png';
import searchIcon from '../../search-icon.png';


import { Link,BrowserRouter, Route, Switch } from "react-router-dom";
import {Divider, Layout, Menu, Avatar, Card, Typography,Row,Col,Button } from 'antd';
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
import PrimarySearchAppBar from '../Home/PrimarySearchAppBar';
import { height } from '@material-ui/system';
import Newasset from './Newasset';
import axios from 'axios';


const { Title } = Typography;
const { Header, Sider, Content } = Layout;



/* 
Login component 
- Display login form 
*/
const Asset = props => (
  <tr>
    <td>{props.asset.AssetId}</td>
    <td>{props.asset.Address}</td>
    <td>{props.asset.RTSP}</td>
    <td>
    <EditFilled />  <DeleteFilled  onClick={() => { props.deleteAsset(props.asset._id) }}/>  <SaveFilled />
  </td>
    
 
  </tr>
)

class Assetonboard extends Component {
    
    state = {
        collapsed: false,
        
        
      };
    constructor() {
      super();
      this.deleteAsset = this.deleteAsset.bind(this)

     
      
      this.state = {
        showForm: false,
        assets: []
      }

      
    }
    componentDidMount() {
      axios.get('/api/asset')
      .then((response)=>{
        const data = response.data;
        this.setState({ assets: data});
        console.log('Asset Data has been recieved')
        this.resetAssetInput();
      })
      .catch(()=>{
        //alert('Error retriving data')
      })
    }
    //to delete asset from db
    deleteAsset(id) {
      axios.delete('/api'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        assets: this.state.assets.filter(el => el._id !== id)
      })
    }
    assetList() {
      return this.state.assets.map(currentasset => {
        return <Asset asset={currentasset} deleteAsset={this.deleteAsset} key={currentasset._id}/>;
      })
    }
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
                <Link to="/assetonboard" />  Assest Onboarding
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
  <h4>Assets</h4>
  </Col>
      <Col>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;                       
           <Newasset />
              </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Col>
               <SyncOutlined style={{ fontSize: '30px', color: '#08c' }} />&nbsp;&nbsp;Reload
                </Col>
             </Row>
       <Divider></Divider>
       
              <Row>
                  <Col>
          <h3>Logged Assets</h3>
          </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Row>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Asset Name</th>
              <th>Address</th>
              <th>RTSP Link
              </th>
              <th>Action
              </th>
              
            </tr>
          </thead>
          <tbody>
            { this.assetList() }
          </tbody>
        </table>  
  
          </Content>
        </Layout>
          
        </Layout>
         </div>
         </body>         
          
       
         
        );
      }
    }
    
export default Assetonboard;