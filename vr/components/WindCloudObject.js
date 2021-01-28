import React, { Component } from 'react';
import { Model, View, asset, Animated } from 'react-vr';

export default class WindCloudObject extends Component {
    constructor() {
        super();
        this.state = {
            xValue: new Animated.Value(100)
        }
        //loop animation
        setInterval(() => this.animateCloud(), 5000)
    }




    componentDidMount() {
        this.animateCloud();
    }

    animateCloud() {
        //For loop
        if(this.state.xValue._value<0){
            console.log("this.state.xValue._value",this.state.xValue._value)
            this.setState({xValue:new Animated.Value(100)})
        }else{
            console.log("this.state.xValue.d",this.state.xValue._value)
            Animated.timing(this.state.xValue, {
                toValue: -100,
                duration: 30000/this.props.wind.speed
            }).start();
        }
    }

    render() {
        return (
            <Animated.View
                style={{
                    transform: [
                        { translate: [0, 10, -150] },
                        { rotateX: -90 },
                        { rotateZ: this.props.wind.deg },
                        { translateX: this.state.xValue }
                    ]
                }}
            >
                <Model
                    scale={1}
                    source={{
                        obj: asset('uploads_files_61540_cloud.obj')
                    }}
                />
            </Animated.View>
        )
    }
}