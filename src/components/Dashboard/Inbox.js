import React, {Component} from 'react';

import Sidebar from '../Home/Sidebar';
import PrimarySearchAppBar from '../Home/PrimarySearchAppBar';

/* 
Login component 
- Display login form 
*/
class Inbox extends Component {
    
  constructor(props) 
    {
        super(props);
      }
    
      render() {
        return (
          <body>
         
        
          <div>
          <PrimarySearchAppBar />
         <Sidebar />
         </div>
         </body>         
          
       
         
        );
      }
    }
    
export default Inbox;