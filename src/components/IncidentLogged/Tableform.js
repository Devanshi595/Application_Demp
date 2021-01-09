import React, {Component} from 'react';

import { Table, Tag, Space, Dropdown,Button, message,Menu } from 'antd';
import { DownOutlined,UserOutlined } from '@ant-design/icons';
import FileReport from './FileReport';
import Escalate from './Escalate';
import Ignorealert from './Ignorealert';


//dropdown menu

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}
const menu = (
  <Menu>
    <Menu.Item key="1" >
    <FileReport />
    </Menu.Item>
    <Menu.Item key="2" >
      <Escalate />
    </Menu.Item>
    <Menu.Item key="3" >
      <Ignorealert />
    </Menu.Item>
  </Menu>
);

//table
const columns = [
    {
      title: 'Image',
      dataIndex: 'data',
      key: 'data',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'incident',
      key: 'incident',
    },
    {
      title: 'Size',
      dataIndex: 'datasize',
      key: 'datasize',
    },
    {
      title: 'Incident Owner',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'Critical') {
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
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
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
      data: 'PDF',
      incident: 'Brief.pdf',
      datasize: '159 KB',
      owner: 'Gill Half',
      tags: ['Critical'],
      date: '23/05/2020'
    },
    {
      key: '2',
      data: 'ZIP',
      incident: 'All files.zip',
      datasize: '15 KB',
      owner: 'Chinmay Shastri',
      tags: ['Alert'],
      date: '29/05/2020'
    },
    {
      key: '1',
      data: 'PDF',
      incident: 'Brief.pdf',
      datasize: '159 KB',
      owner: 'Gill Half',
      tags: ['Critical'],
      date: '23/05/2020'
    },
    {
      key: '2',
      data: 'ZIP',
      incident: 'All files.zip',
      datasize: '15 KB',
      owner: 'Chinmay Shastri',
      tags: ['Alert'],
      date: '29/05/2020'
    },
    {
      key: '1',
      data: 'PDF',
      incident: 'Brief.pdf',
      datasize: '159 KB',
      owner: 'Gill Half',
      tags: ['Critical'],
      date: '23/05/2020'
    },
    {
      key: '2',
      data: 'ZIP',
      incident: 'All files.zip',
      datasize: '15 KB',
      owner: 'Chinmay Shastri',
      tags: ['Alert'],
      date: '29/05/2020'
    },
    {
      key: '1',
      data: 'PDF',
      incident: 'Brief.pdf',
      datasize: '159 KB',
      owner: 'Gill Half',
      tags: ['Critical'],
      date: '23/05/2020'
    },
    {
      key: '2',
      data: 'ZIP',
      incident: 'All files.zip',
      datasize: '15 KB',
      owner: 'Chinmay Shastri',
      tags: ['Alert'],
      date: '29/05/2020'
    },
    
  ];


class Tableform extends Component {
   
  
    render() {
 
     
      return (
        <>
          <Table columns={columns} dataSource={data} />
          
        </>
      );
    }
  }
  
  export default Tableform ;