import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { styles } from '@styles/aboutMeStyles'
import Bio from './Bio'
import Education from './Eductaion'

export default function AboutMe() {
   const [isBio, setIsBio] = useState(false)

   const left = `${isBio ? '2%' : '50%'}`

   return (
      <Box sx={styles.root} id="about">
         <Typography variant="h3" sx={styles.header}>
            About&nbsp;
            <Box component="span" sx={styles.hightlightText}>
               Me
            </Box>
         </Typography>
         <Box sx={styles.aboutWrapper}>
            <Box
               component="input"
               type="checkbox"
               checked={isBio}
               onChange={() => setIsBio((prev) => !prev)}
               id="aboutToggle"
               sx={styles.checkBox}
            ></Box>
            <Box component="label" htmlFor="aboutToggle">
               <Box sx={styles.container}>
                  <Typography variant="h6" sx={styles.switchTitle}>
                     Bio
                  </Typography>
                  <Typography variant="h6" sx={styles.switchTitle}>
                     Edu
                  </Typography>
                  <Box sx={[styles.switch, { left }]}></Box>
               </Box>
            </Box>
            <Box sx={styles.row}>
               <Bio show={isBio} />
               <Education show={!isBio} />
            </Box>
         </Box>
      </Box>
   )
}
