import React from 'react'
import Wave from 'react-wavify'

const footer = () => (
    <div>
        <Wave fill='#5e35b1'
            paused={false}
            options={{
                height: 90,
                amplitude: 10,
                speed: .25,
                points: 10,
            }}
            style={{ backgroundColor: "white"}}
        >
        </Wave>
    </div>
)

export default footer