import React, { Component } from "react";
import Particles from "react-particles-js";

class Canvas extends Component {
    render() {
        return (
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 1.5
                        },
                        "move": {
                            "speed": 0.45,
                            "out_mode": "out",
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 115,
                            "shadow": {
                                enable: true,
                                color: "#ffab40",
                                blur: 35
                            }
                        },
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    }
                }}
            />
        );
    }
}

export default Canvas;

