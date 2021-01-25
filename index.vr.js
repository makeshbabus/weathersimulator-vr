import React, { Component } from 'react';
import { View, Text, Pano, AppRegistry, asset, VrAnimated } from 'react-vr';

const api_key = "d6b214d96073dceff7b10962989323fd";

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