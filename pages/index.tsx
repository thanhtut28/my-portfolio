import { Container } from '@mui/material'
import Main from '@components/home/Main'
import AboutMe from '@components/home/AboutMe'
import Skills from '@components/home/Skills'
import Projects from '@components/home/Projects'

export default function Home() {
   return (
      <Container>
         <Main />
         <AboutMe />
         <Skills />
         <Projects />
      </Container>
   )
}
