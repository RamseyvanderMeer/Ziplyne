import React from 'react'
import { Container, Box, Button } from '@material-ui/core'

class guide extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Box lineHeight={3} fontWeight="fontWeightBold" textAlign="center" fontSize={50} >Guide users through an applicatins ins and outs</Box>
                </Container>
            </div>
        )
    }
}

export default guide