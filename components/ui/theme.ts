import { createTheme } from '@mui/material/styles'
import { responsiveFontSizes } from '@mui/material'

let theme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: '#ff0083',
      },
      background: {
         default: '#171717',
      },
   },
   typography: {
      // fontFamily: `'Righteous', cursive`,
      fontFamily: `'M PLUS Rounded 1c', sans-serif`,
      fontSize: 14,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 700,
      fontWeightBold: 800,
   },
})

theme = responsiveFontSizes(theme)

export default theme
