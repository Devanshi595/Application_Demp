import React, {Component} from 'react';
import { Layout, Menu,  Card, Typography, Avatar, Col, Row,Dropdown, Button,Divider} from 'antd';
import logo1 from '../../logo1.png';
import searchIcon from '../../search-icon.png';
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Link,BrowserRouter, Route, Switch } from "react-router-dom";
import { Player, PosterImage, BigPlayButton } from 'video-react';
import HLSSource from './HLSSource';
import Mychart from './Mychart';
import Mypiechart from './Mypiechart';
import "./Sidebar.css";
import "../../../node_modules/video-react/dist/video-react.css"
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
  LeftOutlined,
  DownOutlined
} from '@ant-design/icons';
import "./Sidebar.css";
import PrimarySearchAppBar from './PrimarySearchAppBar'
import { color } from '@material-ui/system';

import axios from 'axios';



const Login = props => (
  <tr>
    <td>{props.login.username}</td>
   </tr>
)

//Dropdwon menu in summary assests 
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
const { Title } = Typography;
const { Header, Sider, Content } = Layout;

class HomePage extends Component {
  state = {
    collapsed: false,
    
  };
    
  constructor(props) 
    {
      super();
      this.state = {logins: []};
      this.state = {
        showForm: false
        
      }
      }

      //logout
      onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };//logout

      
     //Sidebar Component
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
      render() {
        const { user } = this.props.auth;
        return (
          <body>
           <div>
            <PrimarySearchAppBar />
           
            
            <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
             <Menu className="menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}style={{  background: "black"}}>
              <Menu.Item key="1"  icon={<HomeOutlined />} className="customclass"  >
              <Link to="/homepage"  /> Home
                </Menu.Item>
              <Menu.Item key="2"  icon={<BarChartOutlined />} className="customclass" >
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
                <Link to="/assetonboard" /> Assest Onboarding
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
                <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
                
               <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >


             {/* <b>Hey there,</b> {user.name.split(" ")[0]}  */}
             <h3>Camera Overview </h3>
              
              <Row gutter={66}>
                <Col span={16}>
               <Card hoverable={true} style={{ width: 700, height: 400}}>
                 <p>
                 <div class="video">
      <Player fluid={false}
       
        width={480}
        
        height={272}>
              <BigPlayButton position="center" />

      <HLSSource
        isVideoChild
        src="https://media.publit.io/file/ToriiGates.m3u8"/>

       
 </Player>
    </div>
                    </p>
                     
                               </Card>,
                               </Col>
                               <Col span={580}>
                               
                <Card hoverable={true} style={{ width: 300, height: 400}}>
                 <center><b> Summary of Assests</b></center>
                 <Divider></Divider>
                <center>
                       <p><Dropdown overlay={menu} placement="bottomCenter" arrow>
                          <Button>Highest entries<DownOutlined /></Button>
                           </Dropdown></p>
                       </center>
                         <p>Camera Id:22899999</p>
                         <p>Camera Id:22899999</p>
                         <p>Camera Id:22899999</p>
                         <p>Camera Id:22899999</p>
                         <p>Camera Id:22899999</p>
                         <p>Camera Id:22899999</p>
                         <p>Camera Id:22899999</p>
                               </Card>,
                               </Col>
                               </Row>

                               <Row gutter={405}>
                                <Col span={10} >
                               <Card hoverable={true} bordered={true} style={{ width: 600, height: 350}}>
                               <b> Incident Summary</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               <Dropdown overlay={menu} placement="bottomCenter" arrow>
                                <Button>Canada<DownOutlined /></Button>
                                   </Dropdown>
                                    
                                   <Mychart/>
                               
                                </Card>,
                                </Col>
                               <Col span={300}>
                               
                <Card hoverable={true} style={{ width: 425, height: 350}}>
                <b> Summary of Actions</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                               <Dropdown overlay={menu} placement="bottomCenter" arrow>
                                <Button>Canada<DownOutlined /></Button>
                                   </Dropdown><br></br><br></br><br></br>
                                   <Mypiechart />  
                      
                         <p></p>
                        
                               </Card>,
                               </Col>
                               </Row>
              </Content>
            </Layout>
              
            </Layout>
       
        
         </div>
         </body>         
          
       
         
        );
      }
    }
    
HomePage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(HomePage);