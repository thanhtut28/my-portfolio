import { Styles } from './typeStyle'
import { alpha } from '@mui/material'

export const styles: Styles = {
   root: {
      py: 10,
   },
   header: {
      textAlign: 'center',
   },
   hightlightText: {
      color: (theme) => theme.palette.primary.main,
      display: 'inline-block',
   },
   aboutWrapper: {
      py: 5,
   },
   row: {
      py: 2,
   },
   checkBox: {
      display: 'none',
      opacity: 0,
      position: 'absolute',
   },
   container: {
      p: 1,
      my: 5,
      bgcolor: (theme) => alpha(theme.palette.common.white, 0.05),
      borderRadius: 2,
      width: 200,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'relative',
      cursor: 'pointer',
      mx: 'auto',
   },
   switch: {
      position: 'absolute',
      content: `''`,
      bottom: '10%',
      width: '48%',
      height: '80%',
      bgcolor: (theme) => theme.palette.primary.main,
      borderRadius: 1,
      transition: (theme) =>
         theme.transitions.create('left', {
            duration: theme.transitions.duration.standard,
         }),
      zIndex: 10,
      // boxShadow: (theme) => `0px 0px 2px 3px ${theme.palette.primary.main}`,

      '&:hover': {
         boxShadow: (theme) => `0px 0px 8px 0.5px ${theme.palette.primary.main}`,
      },
   },
   switchTitle: {
      zIndex: 20,
   },
}
