import { Box, Typography } from '@mui/material'
import { styles } from '@styles/skillStyles'
import { DiVisualstudio, DiReact, DiJavascript1, DiGit } from 'react-icons/di'
import { SiTypescript, SiMaterialui } from 'react-icons/si'

export default function Skills() {
   return (
      <Box sx={styles.root} id="skills">
         <Box sx={styles.titleWrapper}>
            <Typography variant="h3" sx={styles.title}>
               Professional&nbsp;
               <Box component="span" sx={styles.hightlightText}>
                  Skillset
               </Box>
            </Typography>
         </Box>
         <Box sx={styles.skillsWrapper}>
            <Box sx={styles.iconsWrapper}>
               <Box sx={styles.icon}>
                  <DiJavascript1 />
               </Box>
               <Box sx={styles.icon}>
                  <SiTypescript />
               </Box>
               <Box sx={styles.icon}>
                  <DiReact />
               </Box>
               <Box sx={styles.icon}>
                  <SiMaterialui />
               </Box>
               <Box sx={styles.icon}>
                  <DiGit />
               </Box>
               <Box sx={styles.icon}>
                  <DiVisualstudio />
               </Box>
            </Box>
         </Box>
      </Box>
   )
}
