import { Box, Typography } from '@mui/material'
import { styles } from '@styles/projectStyles'
import { projects, Project } from '@utils/projects'
import ProjectCard from '@utils/Card'

export default function Projects() {
   return (
      <Box sx={styles.root} id="projects">
         <Typography variant="h3" sx={styles.title}>
            My&nbsp;
            <Box component="span" sx={styles.hightlightText}>
               Projects
            </Box>
         </Typography>
         <Box sx={styles.cardsContainer}>
            {projects.map((project: Project) => (
               <ProjectCard key={project.title} project={project} />
            ))}
         </Box>
      </Box>
   )
}
