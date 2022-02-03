import { Styles } from './typeStyle'

export const styles: Styles = {
   // first column
   root: {
      pt: 5,
      pb: 5,
   },
   grid: {
      py: { xs: 2, md: 4, lg: 5 },
   },
   wrapper: { py: 3, maxWidth: { xs: 300, sm: 450, md: 1000 }, mx: { xs: 'auto', md: '' } },
   name: { color: 'primary.main', fontWeight: 'bold' },
   bar: { bgcolor: 'primary.main', width: 15, height: 'auto', mr: 2 },
   job: {},
   // second column
   imageWrapper: {
      width: 1,
      maxWidth: 400,
      mx: 'auto',
      px: { xs: 3, sm: 5 },
   },
}
