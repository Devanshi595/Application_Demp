import React, {Component} from 'react';

import { Table, Tag, Space } from 'antd';


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    
    {
      title: 'Data Size',
      dataIndex: 'datasize',
      key: 'datasize',
    },
    {
      title: 'Incident Owner',
      dataIndex: 'owner',
      key: 'owner',
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
        
          <a>Report filled</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
     name: 'Incident Report',
      datasize: '189 KB',
      owner: 'Gill Half',
     date: '23/05/2020'
    },
    {
      key: '2',
      name: 'Hourly Report',
      datasize: '129 KB',
      owner: 'Chinmay Shrivastav Half',
     date: '29/05/2020'
    },
    
  ];


class ManualReport extends Component {
   
  
    render() {
 
     
      return (
        <>
          <Table columns={columns} dataSource={data} />
          
        </>
      );
    }
  }
  
  export default ManualReport;