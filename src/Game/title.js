import React, { Component } from 'react';


class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            position: {
                x:300,
                y:500
            },

        }
    }
}