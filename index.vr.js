import React, { Component } from 'react';
import { View, Text, Pano, AppRegistry, asset, VrAnimated } from 'react-vr';

const api_key = "d6b214d96073dceff7b10962989323fd";

class WeatherSimulator extends Component {
  constructor() {
    super();

    this.state = {
      weatherObject: {}
    }
  }
  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({ weatherObject: json }));
  }
  render() {
    return (
      <View>
        <Pano source={asset('lombard-vr.jpg')}></Pano>
      </View>
    )
  }
}

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);