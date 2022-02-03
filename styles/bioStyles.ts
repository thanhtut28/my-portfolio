import { Styles } from './typeStyle'

export const styles: Styles = {
   bioWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      py: {
         xs: 5,
         md: 10,
      },
   },
   titleWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      fontSize: '11vmin',
      textAlign: 'center',
   },
   divider: {
      height: '20vmin',
      ml: {
         xs: 1,
         md: 2,
      },
      width: 15,
      bgcolor: (theme) => theme.palette.primary.main,
   },
   bodyWrapper: {
      pl: 3,
   },
   body: {
      fontSize: '3.5vmin',
   },
}
