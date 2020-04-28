import React from 'react'
import { Container, Box, Button } from '@material-ui/core'

class title extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Box lineHeight={3} fontWeight="fontWeightBold" textAlign="center" fontSize={50} >In App Guidence for Users</Box>
                    <Box textAlign="center" ><Button size="large" variant="outlined" color='secondary'>View Product</Button></Box>
                </Container>
            </div>
        )
    }
}

export default title