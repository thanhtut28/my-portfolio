import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import MainNavigation from './MainNavigation'
import Footer from './Footer'

const PREFIX = 'Layout'

const classes = {
   offset: `${PREFIX}-offset`,
}

const Root = styled('div')(({ theme }) => ({
   [`& .${classes.offset}`]: theme.mixins.toolbar,
}))

interface LayoutProps {
   children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
   return (
      <Root>
         <MainNavigation />
         <Box className={classes.offset}></Box>
         {/* offset will delete later */}
         {children}
         <Footer />
      </Root>
   )
}
