import React, { Component } from 'react';
import { View, Text, Pano, AppRegistry, asset, VrAnimated } from 'react-vr';

class WeatherSimulator extends Component {
  render(){
    return(
      <View>
        <Pano source={asset('lombard-vr.jpg')}></Pano>
      </View>
    )
  }
}

AppRegistry.registerComponent('WeatherSimulator', ()=>WeatherSimulator);