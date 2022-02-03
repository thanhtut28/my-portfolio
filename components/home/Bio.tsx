import { Grid, Typography, Box } from '@mui/material'
import { styles } from '@styles/bioStyles'

interface BioProps {
   show: boolean
}

export default function Bio({ show }: BioProps) {
   return (
      <>
         {show && (
            <Grid container alignItems="center" sx={styles.bioWrapper}>
               <Grid item xs={3} sx={styles.titleWrapper}>
                  <Typography component="h4" sx={styles.title}>
                     Bio
                  </Typography>
                  <Box component="span" sx={styles.divider}></Box>
               </Grid>
               <Grid item xs={9} sx={styles.bodyWrapper}>
                  <Typography sx={styles.body}>
                     I&apos;m a Front-End Developer located in Myanmar. I have a serious passion for
                     UI effects, animations and creating intuitive, dynamic user experiences.
                     <br />
                     <br />
                     Interested in the frontend development and working on challenging projects with
                     positive people.
                  </Typography>
               </Grid>
            </Grid>
         )}
      </>
   )
}
