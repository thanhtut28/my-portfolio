import { Styles } from './typeStyle'

export const styles: Styles = {
   eduWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      py: {
         xs: 5,
         md: 10,
      },
   },
   bodyWrapper: {
      pr: 3,
   },
   schoolWrapper: {
      py: 2,
   },
   uniTitle: {
      fontSize: {
         xs: '3.5vmin',
         sm: '4vmin',
         md: '4.5vmin',
      },
      py: 1,
   },
   chip: {
      ml: 1,
   },
   titleWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      fontSize: '9vmin',
      textAlign: 'center',
   },
   divider: {
      height: '20vmin',
      mr: {
         xs: 1,
         md: 2,
      },
      width: 15,
      bgcolor: (theme) => theme.palette.primary.main,
   },

   body: {
      fontSize: '3.5vmin',
   },
}
