import React, { Component } from 'react';
import { Model, View, asset } from 'react-vr';

export default class WindCloudObject extends Component {
    render() {
        return (
            <View
                style={{
                    transform: [
                        { translate: [0, 10, -150] },
                        {rotateX: -90},
                        {rotateZ: this.props.wind.deg}
                    ]
                }}
            >
                <Model
                    scale={1}
                    source={{
                        obj: asset('uploads_files_61540_cloud.obj')
                    }}
                />
            </View>
        )
    }
}