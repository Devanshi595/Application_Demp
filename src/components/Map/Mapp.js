import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { ImLocation2 } from "react-icons/im";
import IconButton from "@material-ui/core/IconButton";
import { Select } from 'antd';
const { Option } = Select;


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const LocationPin = ({ text }) => (
  <IconButton size="medium" color="inherit" style={{ color: "red" }}>
    <ImLocation2 />
  </IconButton>
);
const getMapOptions = () => {
  return {
    scaleControl: true,
    fullscreenControl: true,
    disableDefaultUI: true,
    mapTypeControl: true,
  };
};


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
 
class Mapp extends Component {
  static defaultProps = {
    center: {
      lat: 	43.651070,
      lng:	-79.347015
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{ lat: 43.651070, lng: -79.347015 }}
          defaultZoom={15}
          options={getMapOptions}
        >
         
          <LocationPin lat={43.651070} lng={-79.347015} text="Toronto" />
          <LocationPin lat={43.651070} lng={-79.347015} text="Toronto" />
         
        </GoogleMapReact>
        
      </div>
    );
  }
}
 
export default Mapp;