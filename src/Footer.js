import React, { Component } from 'react';

//Styles
const bodyStyle={
    backgroundColor:'#172B4D' 
};
const writeStyle={
    color:'#009F95'
};

export default class Footer extends Component {
    render() {
        return (
            <div>
               <footer className="main-footer" style={bodyStyle}>
                <strong>Copyright © 2019-2020 <a href="DareDev.dz" style={writeStyle}>DareDev.dz</a>.</strong>
                All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 1.0.0
                </div>
                </footer>

            </div>
        )
    }
}
