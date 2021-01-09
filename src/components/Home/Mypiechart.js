import React, {Component} from 'react';
import { Doughnut} from 'react-chartjs-2';
 
const state = {
  labels: ['Area Breach', 'Critical Incident Reported', 'Hazzard Complinace',
           'Activity With No Action', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}



class Mypiechart extends Component {
  

  render() {
   
    return (
      
      <>
      
      <div>
      <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'2900 New Entries',
              fontSize:20
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

export default Mypiechart;