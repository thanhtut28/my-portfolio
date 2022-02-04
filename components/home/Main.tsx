import { Grid, Box, Typography, Button } from '@mui/material'
import { styles } from '@styles/mainStyles'
import Image from 'next/image'
import programming from '@assets/programming_pic.svg'
import { NextLinkComposed } from '@components/ui/Link'

export default function Main() {
   return (
      <Box sx={styles.root} id="main">
         <Grid container alignItems="center" sx={styles.grid}>
            <Grid item xs={12} md={6} py={2}>
               <Box sx={styles.wrapper}>
                  <Box py={0.5}>
                     <Typography variant="h3">Hello ...!</Typography>
                  </Box>
                  <Box py={1} display="flex">
                     <Box sx={styles.bar}></Box>
                     <Typography variant="h3">
                        I
                        <Box component="span" color="primary.main">
                           &apos;
                        </Box>
                        m
                        <Box component="strong" sx={styles.name} pl={1}>
                           Than Htut Aung
                        </Box>
                     </Typography>
                  </Box>
                  <Box py={3}>
                     <Typography variant="h4" sx={styles.job}>
                        Frontend Developer
                     </Typography>
                  </Box>
                  <Box>
                     <Button
                        variant="contained"
                        color="primary"
                        component={NextLinkComposed}
                        to="https://github.com/thanhtut28/my-portfolio"
                        target="_blank"
                     >
                        Source Code
                     </Button>
                  </Box>
               </Box>
            </Grid>
            <Grid item xs={12} md={6} py={2}>
               <Box px={1}>
                  <Box sx={styles.imageWrapper}>
                     <Box
                        borderRadius={1}
                        component={Image}
                        src={programming}
                        layout="responsive"
                        width={1}
                        height={1}
                        alt="profile"
                        quality={100}
                        priority
                     />
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}
