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
      fontFamily: `'Righteous', cursive`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
   },
})

theme = responsiveFontSizes(theme)

export default theme
