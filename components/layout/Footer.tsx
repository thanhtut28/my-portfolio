import { Box, Link, Typography } from '@mui/material'
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { styles } from '@styles/footerStyles'
export default function Footer() {
   return (
      <Box sx={styles.root}>
         <Typography variant="subtitle2">
            &copy; 2022 Than Htut Aung. All Rights Reserved.
         </Typography>
         <Box sx={styles.container}>
            <Box sx={styles.icon}>
               <Link href="" underline="none" target="_blank" color="inherit">
                  <AiFillLinkedin />
               </Link>
            </Box>
            <Box sx={styles.icon}>
               <Link
                  href="https://github.com/thanhtut28"
                  underline="none"
                  target="_blank"
                  color="inherit"
               >
                  <AiFillGithub />
               </Link>
            </Box>

            <Box sx={styles.icon}>
               <Link
                  href="mailto: oreo2k19@gmail.com"
                  underline="none"
                  target="_blank"
                  color="inherit"
               >
                  <AiFillMail />
               </Link>
            </Box>

            <Box sx={styles.icon}>
               <Link href="tel:+959777578239" underline="none" target="_blank" color="inherit">
                  <AiFillPhone />
               </Link>
            </Box>
         </Box>
      </Box>
   )
}
