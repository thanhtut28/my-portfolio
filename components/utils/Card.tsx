import { Box, Card, CardContent, Typography, Link } from '@mui/material'
import Image from 'next/image'
import { Project } from '@utils/projects'
import { styles } from '@styles/cardStyles'

interface CardProps {
   project: Project
}

export default function ProjectCard({ project }: CardProps) {
   return (
      <Card sx={styles.card} component={Link} href={project.link} target="_blank" underline="none">
         <Box sx={styles.imageWrapper}>
            <Image
               src={project.image}
               layout="responsive"
               width={16}
               height={9}
               alt="profile"
               quality={100}
            />
         </Box>

         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={styles.cardContent}>
               {project.body}
            </Typography>
         </CardContent>
      </Card>
   )
}
