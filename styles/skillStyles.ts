import { Styles } from './typeStyle'

export const styles: Styles = {
   root: {
      py: 10,
   },

   titleWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      textAlign: 'center',
   },
   hightlightText: {
      color: (theme) => theme.palette.primary.main,
      display: 'inline-block',
   },

   skillsWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 800,
      marginX: 'auto',
      py: {
         xs: 5,
         md: 7,
      },
   },
   iconsWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
   },
   icon: {
      fontSize: {
         xs: '2.5rem',
         md: '4.5rem',
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: (theme) => `2px solid ${theme.palette.primary.main}`,
      borderRadius: 3,
      p: {
         xs: 3,
         md: 5,
      },
      m: {
         xs: 2,
         md: 3,
      },
      cursor: 'pointer',
      transition: (theme) =>
         theme.transitions.create('transform', {
            duration: theme.transitions.duration.standard,
         }),
      '&:hover': {
         transform: 'scale(1.05)',
      },
   },
}
