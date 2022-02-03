import { Box, Grid, Typography, Chip } from '@mui/material'
import { styles } from '@styles/educationStyles'

interface EduProps {
   show: boolean
}

export default function Education({ show }: EduProps) {
   return (
      <>
         {show && (
            <Grid container alignItems="center" sx={styles.eduWrapper}>
               <Grid item xs={9} sx={styles.bodyWrapper}>
                  <Box sx={styles.schoolWrapper}>
                     <Typography variant="h6" sx={styles.uniTitle}>
                        BEHS(3) - Myitkyina
                        <Chip label="2005 - 2015" sx={styles.chip}></Chip>
                     </Typography>
                     <Typography variant="subtitle2" color="textSecondary">
                        High School
                     </Typography>
                  </Box>
                  <Box sx={styles.schoolWrapper}>
                     <Typography variant="h6" sx={styles.uniTitle}>
                        University of Technology(Yatanarpon Cyber City)
                        <Chip label="2015 - Now" sx={styles.chip}></Chip>
                     </Typography>
                     <Typography variant="subtitle2" color="textSecondary">
                        5TH BE (Information and Communication Technology)
                     </Typography>
                  </Box>
               </Grid>
               <Grid item xs={3} sx={styles.titleWrapper}>
                  <Box component="span" sx={styles.divider}></Box>
                  <Typography component="h4" sx={styles.title}>
                     Edu
                  </Typography>
               </Grid>
            </Grid>
         )}
      </>
   )
}
