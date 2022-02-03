import { Styles } from './typeStyle'

export const styles: Styles = {
   root: {},
   logo: {
      color: (theme) => theme.palette.primary.main,
      fontWeight: 800,
   },

   toolbarWrapper: {
      maxWidth: (theme) => theme.breakpoints.values.lg,
      mx: 'auto',
      width: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   menuWrapper: {
      flexGrow: 1,
      display: { xs: 'flex', md: 'none' },
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   menu: {
      display: { xs: 'block', md: 'none' },
   },
   navs: {
      flexGrow: 1,
      display: { xs: 'none', md: 'flex' },
      justifyContent: 'flex-end',
      px: 3,
      alignItems: 'center',
   },
   navButton: { m: 2, color: 'white', display: 'block', p: 1 },
}
