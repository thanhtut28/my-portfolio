import { useState } from 'react'
import {
   AppBar,
   Toolbar,
   Typography,
   useScrollTrigger,
   Slide,
   Box,
   Menu,
   MenuItem,
   IconButton,
   Button,
} from '@mui/material'
import { styles } from '@styles/navigationStyles'
import { navTabs } from '@utils/navTabs'
import { FiMenu } from 'react-icons/fi'
import Link, { NextLinkComposed } from '@components/ui/Link'

interface Props {
   /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */

   children: React.ReactElement
}

function HideOnScroll(props: Props) {
   const { children } = props
   const trigger = useScrollTrigger()

   return (
      <Slide appear={false} direction="down" in={!trigger}>
         {children}
      </Slide>
   )
}

export default function MainNavigation() {
   const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null)

   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorNav(event.currentTarget)
   }

   const handleCloseNavMenu = () => {
      setAnchorNav(null)
   }

   return (
      <>
         <HideOnScroll>
            <AppBar>
               <Toolbar>
                  <Box sx={styles.toolbarWrapper}>
                     {/**
                      * @logo
                      */}
                     <Link href="/#main" scroll={false} underline="none">
                        <Typography variant="h4" sx={styles.logo}>
                           Tha
                        </Typography>
                     </Link>

                     {/**
                      *
                      * @menuButton
                      */}
                     <Box sx={styles.menuWrapper}>
                        <IconButton
                           size="large"
                           aria-label="account of current user"
                           aria-controls="menu-appbar"
                           aria-haspopup="true"
                           onClick={handleOpenNavMenu}
                           color="inherit"
                        >
                           <FiMenu />
                        </IconButton>
                        <Menu
                           id="menu-appbar"
                           anchorEl={anchorNav}
                           anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                           }}
                           keepMounted
                           transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                           }}
                           open={Boolean(anchorNav)}
                           onClose={handleCloseNavMenu}
                           sx={styles.menu}
                        >
                           {navTabs.map((navTab) => (
                              <MenuItem
                                 key={navTab.name}
                                 component={NextLinkComposed}
                                 to={navTab.path}
                                 scroll={false}
                                 onClick={handleCloseNavMenu}
                              >
                                 <Typography textAlign="center">{navTab.name}</Typography>
                              </MenuItem>
                           ))}
                        </Menu>
                     </Box>
                     {/**
                      *
                      * @Navs
                      */}
                     <Box sx={styles.navs}>
                        {navTabs.map((navTab) => (
                           <Button
                              key={navTab.name}
                              component={NextLinkComposed}
                              to={navTab.path}
                              scroll={false}
                              onClick={handleCloseNavMenu}
                              sx={styles.navButton}
                           >
                              {navTab.name}
                           </Button>
                        ))}
                     </Box>
                  </Box>
               </Toolbar>
            </AppBar>
         </HideOnScroll>
         <Toolbar />
      </>
   )
}
