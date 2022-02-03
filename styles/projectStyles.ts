import { Styles } from './typeStyle'

export const styles: Styles = {
   root: {
      py: 5,
   },
   title: {
      textAlign: 'center',
   },
   hightlightText: {
      color: (theme) => theme.palette.primary.main,
      display: 'inline-block',
   },
   cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center',
      flexWrap: 'wrap',
      py: 5,
   },
}
