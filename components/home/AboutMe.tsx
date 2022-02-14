import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { styles } from '@styles/aboutMeStyles'
import Bio from './Bio'
import Education from './Eductaion'

export default function AboutMe() {
   const [isBio, setIsBio] = useState(true)

   const left = `${isBio ? '2%' : '50%'}`

   const handleChange = async () => {
      setIsBio((prev) => !prev)

      // for tracking people who clicked my website xD
      await fetch('https://tracker-9644a-default-rtdb.firebaseio.com/clicks.json', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify({ date: new Date() }),
      })
   }

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
               onChange={handleChange}
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
