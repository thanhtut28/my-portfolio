import { SxProps, Theme } from '@mui/system'

interface Styles {
   [prop: string]: SxProps<Theme>
}

export const styles: Styles = {
   // first column
   grid: {
      py: { xs: 5, md: 7, lg: 10 },
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
