import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
 
const state = {
  labels: ['Aug-27', 'Aug-28', 'Aug-29',
           'Aug-30', 'Aug-31'],
  datasets: [
    {
      label: 'Critical',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}


class Mychart extends Component {
  

  render() {
   
    return (
      
      <>
      
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
             
              fontSize:10
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
       
      </>
    );
  }
}

export default Mychart;