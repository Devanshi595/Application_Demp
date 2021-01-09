import React, {Component} from 'react';

import { Table, Tag, Space } from 'antd';


const columns = [
    {
      title: 'Data',
      dataIndex: 'data',
      key: 'data',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Incident Type',
      dataIndex: 'incident',
      key: 'incident',
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
        
          <a>Report filled</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      data: 'PDF',
      incident: 'Accident',
      datasize: '159 KB',
      owner: 'Gill Half',
      tags: ['Critical'],
      date: '23/05/2020'
    },
    {
      key: '2',
      data: 'ZIP',
      incident: 'Fail Detected',
      datasize: '15 KB',
      owner: 'Chinmay Shastri',
      tags: ['Alert'],
      date: '29/05/2020'
    },
    
  ];


class AutomatedAlerts extends Component {
   
  
    render() {
 
     
      return (
        <>
          <Table columns={columns} dataSource={data} />
          
        </>
      );
    }
  }
  
  export default AutomatedAlerts;