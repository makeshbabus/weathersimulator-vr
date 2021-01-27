import React, { Component } from 'react';
import { View, Text, Pano, AppRegistry, asset, VrAnimated } from 'react-vr';

import WeatherCard from './vr/components/WeatherCard';

const api_key = "d6b214d96073dceff7b10962989323fd";

class WeatherSimulator extends Component {
  constructor() {
    super();

    this.state = {
      weatherObject: {
        name: '',
        main: {
          temp: 0
        },
        weather: [
          { description: '' }
        ],
        wind: {
          deg: 1,
          speed: 1,
        }
      }
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
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Pano source={asset('lombard-vr.jpg')}></Pano>
        <WeatherCard weatherObject={this.state.weatherObject} />
      </View>
    )
  }
}

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);