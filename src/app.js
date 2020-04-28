import React from 'react'
import { Header, Footer, Title, Guide, Create, Canvas } from './components'

class App extends React.Component {

    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
            >
                <Header />
                <Canvas />
                <div
                    style={{
                        position: "absolute",
                        top: 40,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <Title />
                    <Guide />
                    <Create />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App