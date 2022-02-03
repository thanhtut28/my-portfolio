import { Styles } from './typeStyle'
import { alpha } from '@mui/material'

export const styles: Styles = {
   root: {
      bgcolor: (theme) => alpha(theme.palette.common.white, 0.03),
      color: (theme) => theme.palette.text.disabled,
      pt: 3,
      textAlign: 'center',
   },
   container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   icon: {
      fontSize: (theme) => theme.typography.h6.fontSize,
      m: 3,
   },
}
