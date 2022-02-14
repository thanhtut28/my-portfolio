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
      fontSize: (theme) => ({
         xs: theme.typography.body1.fontSize,
         md: theme.typography.h6.fontSize,
         lg: theme.typography.h4.fontSize,
      }),
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
      fontSize: (theme) => ({
         xs: theme.typography.h3.fontSize,
         md: theme.typography.h1.fontSize,
      }),
      textAlign: 'center',
   },
   divider: {
      height: 150,
      mr: {
         xs: 1,
         md: 2,
      },
      width: 15,
      bgcolor: (theme) => theme.palette.primary.main,
   },

   body: {
      fontSize: (theme) => ({
         xs: theme.typography.body2.fontSize,
         sm: theme.typography.body1.fontSize,
         lg: theme.typography.h6.fontSize,
         xl: theme.typography.h5.fontSize,
      }),
   },
}
