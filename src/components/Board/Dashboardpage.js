import React, {Component} from 'react';
import { Layout, Menu,  Card, Typography, Avatar, message,Col, Row,Dropdown, Select,Button, Tabs, Table,Tag, Space, Divider, Pagination,Popover} from 'antd';
import logo1 from '../../logo1.png';
import searchIcon from '../../search-icon.png';
import { Link,BrowserRouter, Route, Switch } from "react-router-dom";
import "../Home/./Sidebar.css";
import "./Board.css";
import ModalComp from './ModalComp';
import Complaint from './Complaint';
import ServiceBooking from './ServiceBooking';
import ResolveComp from './ResolveComp';
import DeclineComp from './DeclineComp';
import ServicesGuest from './ServicesGuest';
import GsAcceptbooking from './GsAcceptbooking';
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
  DownOutlined,
  RiseOutlined,
  FallOutlined,
  PlusOutlined 
} from '@ant-design/icons';

import PrimarySearchAppBar from '../Home/PrimarySearchAppBar';


const { TabPane } = Tabs;
const { Option } = Select;

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

//action menu
function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
    Resolved
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      Reply
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
     Differed
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
    Forward
    </Menu.Item>
  </Menu>
);


//popup
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

//Table
const columns = [
  {
    title: 'Details',
    dataIndex: 'Details',
    key: 'Details',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Details',
    dataIndex: 'Details1',
    key: 'Details1',
  },
  {
    title: 'Person',
    dataIndex: 'Person',
    key: 'Person',
  },
  {
    title: 'Flags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'Important') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Date of Entry',
    dataIndex: 'DOE',
    key: 'DOE',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        
        <Dropdown overlay={menu}>
      <Button>
        Actions <DownOutlined />
      </Button>
    </Dropdown>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    Details: 'Postal & Courier',
    Details1: '159KB',
    Person: 'Mattie Blooman',
    DOE:'21 January 2021',
    tags: ['Important'],
  },
  {
    key: '2',
    Details: 'Availability of parking',
    Details1: '9KB',
    Person: 'Alfie Wood',
    DOE:'12 February 2020',
    tags: ['Not Important'],
  },
  {
    key: '3',
    Details: 'Cab Services',
    Details1: '170KB',
    
    Person: 'Chinmay Sarasvati',
    DOE:'11 April 2020',
    tags: ['Not Important'],
  },
  {
    key: '3',
    
    Details: 'Maid Services',
    Person: 'Doug Goerge',
    Details1: '5.5MB',
    DOE:'16 June 2020',
   
    tags: [],
  },
];



//for selection 
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










//tab 
function callback(key) {
  console.log(key);
}

class Dashboard extends Component {
  state = {
    collapsed: false,
    data: "",
    posts: []
    
  };
    
  constructor(props) 
    {
      super();
      this.state = {
        showForm: false
      }
      }
      //Sidebar Component
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
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
              <h4><b>Quick stats</b></h4>
              <Row>
      <Col span={6}>Total Bookings</Col>
      <Col span={6}>Pending Approval</Col>
      <Col span={6}>New Requests This Month</Col>
      <Col span={6}>Returning Clients</Col>
    </Row>
    <Row>
      <Col span={6}><h2><b>28,345</b></h2></Col>
      <Col span={6}>
    
      <h2  className="textColor" ><b>120</b></h2>
  
      </Col>
      <Col span={6}><h2><b>89&nbsp;<RiseOutlined style={{ color: '#32CD32' }}/></b></h2></Col>
      <Col span={6}><h2><b>46%&nbsp;<FallOutlined  style={{ color: '#FF0000' }} /></b></h2></Col>
    </Row>
 

<Tabs defaultActiveKey="1" onChange={callback} size="large" centered="true" >
    <TabPane  key="1" tab=  {<span style={{ color: "#009999" }}>Bookings</span>}>

    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
         Sam Joe
         <Divider></Divider>
         <Row>
           <Col>
         <Button type="link" block tab=  {<span style={{ color: "#009999" }}>Bookings</span>}>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
         Robbert Half
         <Divider></Divider>
         <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
    </Row>
   <br></br>
   <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
    </Row>
  
    </TabPane>


    <TabPane key="2" tab=  {<span style={{ color: "#009999" }}>Enquires</span>}>
      <Row>
           <Col>
         
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
    <Option value="v1"><b>Report to Supervisor</b></Option>
    <Option value="v2"><b>Report to Owner</b></Option>
    <Option value="v3"><b>Report to MAnagement</b></Option>
    <Option value="v4"><b>Resolve Now</b></Option>
  </Select><br></br><br></br>
    
    </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Col>
   
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
    <Option value="v1"><b>Report to Supervisor</b></Option>
    <Option value="v2"><b>Report to Owner</b></Option>
    <Option value="v3"><b>Report to MAnagement</b></Option>
    <Option value="v4"><b>Resolve Now</b></Option>
  </Select><br></br><br></br>
    
</Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Col>
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
    <Option value="v1"><b>Report to Supervisor</b></Option>
    <Option value="v2"><b>Report to Owner</b></Option>
    <Option value="v3"><b>Report to MAnagement</b></Option>
    <Option value="v4"><b>Resolve Now</b></Option>
  </Select><br></br><br></br>
   
</Col>
</Row><br></br>

<Table  columns={columns} dataSource={data}  />
    </TabPane>
    <TabPane  key="3" tab=  {<span style={{ color: "#009999" }}>My Services</span>}>
    
    <Row>
           <Col>
           <ServiceBooking />
    </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Col>
    <div class="box">Schedule Deliveries</div>
</Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Col>
<div class="box">Emergency Services</div>
</Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Col>
<div class="box">Asset Booking</div>
</Col>
</Row><br></br><br></br>


<Row>


           <Col>
           <div class="box">Receive Deliveries</div>
    </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Col>
    <div class="box">Maintanance Service</div>
</Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Col>
<div class="box">Lift Booking</div>
</Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Col>
<div class="box">Postal Service</div>
</Col>
</Row><br></br><br></br>



<Row>
           <Col>
           <div class="box">Alert Notifications</div>
    </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Col>
    <div class="box">Room Booking</div>
</Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Col>
<div class="box">Other Services</div>
</Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Col>
<div class="box1">Tenet Notifications</div>
</Col>
</Row>
    
    </TabPane>


    
    <TabPane tab=  {<span style={{ color: "#009999" }}>Vendors</span>} key="4">
     
    <Row>
           <Col>
         
           <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Pending Bookings"
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
    
    </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Col>
   
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="All Services"
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
    
</Col> &nbsp;&nbsp; &nbsp;&nbsp; 
<Col>

<ModalComp 
onResult={posts => {
  this.setState({ posts });
}}/>
{this.state.posts}

</Col>
</Row><br></br>

<Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
         Sam Joe
         <Divider></Divider>
         <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
         Robbert Half
         <Divider></Divider>
         <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button> 
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
    </Row>
   <br></br>
   <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
    </Row>



    </TabPane>
    <TabPane tab=  {<span style={{ color: "#009999" }}>Complaints</span>} key="5">
     
    <Row>
           <Col>
         
           <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Unsolved"
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
    
    </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Col>
   
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="All Categories"
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
</Col> &nbsp;&nbsp; &nbsp;&nbsp; 
<Col>

<Complaint />


</Col>
</Row><br></br>

<Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
         Sam Joe
         <Divider></Divider>
         <Row>
           <Col>
        <ResolveComp />
       </Col>
    <Col>
    
     <DeclineComp />
    
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
         Robbert Half
         <Divider></Divider>
         <Row>
           <Col>
         <Button type="link" block>
         Resolve
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
         Resolve
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
    </Row>
   <br></br>
   <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
         Resolve
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
         Resolve
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
         Resolve
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
    </Row>
</TabPane>
    <TabPane tab=  {<span style={{ color: "#009999" }}>Guest Services</span>}key="6">
    <Row>
           <Col>
         
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
    
    </Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Col>
   
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
    
</Col> &nbsp;&nbsp; &nbsp;&nbsp; 
<Col>
<ServicesGuest />

</Col>
</Row><br></br>

<Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
         Sam Joe
         <Divider></Divider>
         <Row>
           <Col>
         <GsAcceptbooking />
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
         Robbert Half
         <Divider></Divider>
         <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button> 
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
    </Row>
   <br></br>
   <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false} hoverable={true}>
          Card content
          <Divider></Divider>
          <Row>
           <Col>
         <Button type="link" block>
     Accept Booking
    </Button>
    </Col>
    <Col>
    <Button type="link" block>
     Decline
    </Button>
</Col>
</Row>
        </Card>
      </Col>
    </Row>

    </TabPane>
    <TabPane tab=  {<span style={{ color: "#009999" }}>Others</span>} key="7">
      Others
    </TabPane>
  </Tabs>



              </Content>
            </Layout>
              
            </Layout>
       
        
         </div>
         </body>         
          
       
         
        );
      }
    }
   
    
export default Dashboard;