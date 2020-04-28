import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#5e35b1',
      },
      secondary: {
        main: '#ffab40',
      },
   },
   typography: { 
      useNextVariants: true
   }
});


ReactDOM.render(
    <MuiThemeProvider theme = { theme }>
        <App />
    </MuiThemeProvider>,
    document.getElementById("root")
)