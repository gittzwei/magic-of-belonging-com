import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Avatar, 
  Menu, 
  MenuItem, 
  IconButton, 
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  InputBase,
  Paper,
  Stack,
  alpha,
  styled,
  useTheme
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  AutoStories as StoriesIcon,
  Dashboard as DashboardIcon,
  People as UsersIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  Schedule as PendingIcon,
  Verified as ApprovedIcon,
  Search as SearchIcon,
  Public as DiasporaIcon,
  Palette as IdentityIcon,
  Business as BusinessIcon,
  School as LearningIcon,
  Article as NewsroomIcon,
  Event as EventsIcon,
  Map as MapIcon,
  Podcasts as PodcastIcon,
  Theaters as VideoIcon,
  PhotoLibrary as PhotoIcon,
  Storefront as MarketplaceIcon,
  Groups as MentorshipIcon,
  SwapHoriz as ExchangeIcon,
  Gavel as AdvocacyIcon,
  VolunteerActivism as GivingIcon,
  LocalLibrary as LibraryIcon,
  ContactMail as ContactIcon,
  AccountCircle as ProfileIcon,
  ExitToApp as LogoutIcon,
  Brightness4 as DarkModeIcon,
  Translate as LanguageIcon,
  Favorite as HeartIcon,
  TravelExplore as ExploreIcon,
  Diversity3 as CommunityIcon,
  HistoryEdu as HeritageIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const slideIn = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { x: 20, opacity: 0, transition: { duration: 0.2 } }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  exit: { scale: 0.95, opacity: 0, transition: { duration: 0.2 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

// Custom styled components
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.primary.main),
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.9),
  },
  transition: 'all 0.3s ease',
}));

const SearchPaper = styled(Paper)(({ theme }) => ({
  p: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: 300,
  borderRadius: '24px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.9rem',
  padding: '8px 12px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  '& .MuiButton-startIcon': {
    color: theme.palette.primary.main,
  },
}));

export default function Navbar() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [expandedMenu, setExpandedMenu] = React.useState(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const theme = useTheme();

  const isAdmin = session?.user?.role === 'admin';

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuToggle = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  // Navigation items structure with enhanced icons
  const navItems = [
    { 
      title: 'Home', 
      href: '/',
      icon: <HomeIcon sx={{ color: theme.palette.primary.main }} />
    },
    { 
      title: 'About', 
      href: '/about',
      icon: <ExploreIcon sx={{ color: theme.palette.primary.main }} />,
      subItems: [
        { title: 'Mission & Vision', href: '/about/mission', icon: <ExploreIcon fontSize="small" /> },
        { title: 'Founder\'s Note', href: '/about/founder', icon: <HeartIcon fontSize="small" /> },
        { title: 'Our Team', href: '/about/team', icon: <CommunityIcon fontSize="small" /> },
        { title: 'Press Kit', href: '/about/press', icon: <NewsroomIcon fontSize="small" /> }
      ]
    },
    { 
      title: 'Diaspora Stories', 
      href: '/diaspora-stories',
      icon: <StoriesIcon sx={{ color: theme.palette.primary.main }} />,
      subItems: [
        { title: 'Recent Stories', href: '/diaspora-stories', icon: <StoriesIcon fontSize="small" /> },
        { title: 'Submit Your Story', href: '/diaspora-stories/submit', icon: <PendingIcon fontSize="small" /> },
        { title: 'Popular Stories', href: '/diaspora-stories/popular', icon: <ApprovedIcon fontSize="small" /> },
        { title: 'By Region', href: '/diaspora-stories/region', icon: <DiasporaIcon fontSize="small" /> }
      ]
    },
    { 
      title: 'Identity & Heritage', 
      href: '/identity-heritage',
      icon: <HeritageIcon sx={{ color: theme.palette.primary.main }} />,
      subItems: [
        { title: 'Cultural Insights', href: '/identity-heritage/culture', icon: <IdentityIcon fontSize="small" /> },
        { title: 'Historical Context', href: '/identity-heritage/history', icon: <LibraryIcon fontSize="small" /> },
        { title: 'Personal Journeys', href: '/identity-heritage/journeys', icon: <UsersIcon fontSize="small" /> }
      ]
    },
    { 
      title: 'Business & Innovation', 
      href: '/business-innovation',
      icon: <BusinessIcon sx={{ color: theme.palette.primary.main }} />
    },
    { 
      title: 'Learning & Opportunities', 
      href: '/learning-opportunities',
      icon: <LearningIcon sx={{ color: theme.palette.primary.main }} />,
      subItems: [
        { title: 'Courses', href: '/learning-opportunities/courses', icon: <LearningIcon fontSize="small" /> },
        { title: 'Workshops', href: '/learning-opportunities/workshops', icon: <MentorshipIcon fontSize="small" /> },
        { title: 'Career Resources', href: '/learning-opportunities/careers', icon: <BusinessIcon fontSize="small" /> }
      ]
    },
    { 
      title: 'Community', 
      icon: <CommunityIcon sx={{ color: theme.palette.primary.main }} />,
      subItems: [
        { title: 'Diaspora Map', href: '/community/map', icon: <MapIcon fontSize="small" /> },
        { title: 'Podcast', href: '/community/podcast', icon: <PodcastIcon fontSize="small" /> },
        { title: 'Video Gallery', href: '/community/videos', icon: <VideoIcon fontSize="small" /> },
        { title: 'Photo Chronicles', href: '/community/photos', icon: <PhotoIcon fontSize="small" /> },
        { title: 'Marketplace', href: '/community/marketplace', icon: <MarketplaceIcon fontSize="small" /> },
        { title: 'Mentorship Circle', href: '/community/mentorship', icon: <MentorshipIcon fontSize="small" /> },
        { title: 'Cultural Exchange', href: '/community/exchange', icon: <ExchangeIcon fontSize="small" /> },
        { title: 'Advocacy & Policy', href: '/community/advocacy', icon: <AdvocacyIcon fontSize="small" /> }
      ]
    },
    { 
      title: 'Resources', 
      icon: <LibraryIcon sx={{ color: theme.palette.primary.main }} />,
      subItems: [
        { title: 'Scholarships & Grants', href: '/resources/scholarships', icon: <LearningIcon fontSize="small" /> },
        { title: 'Giving & Impact', href: '/resources/giving', icon: <GivingIcon fontSize="small" /> },
        { title: 'Voices of Belonging', href: '/resources/blog', icon: <NewsroomIcon fontSize="small" /> },
        { title: 'Library & Archives', href: '/resources/library', icon: <LibraryIcon fontSize="small" /> }
      ]
    },
    { 
      title: 'Events', 
      href: '/events',
      icon: <EventsIcon sx={{ color: theme.palette.primary.main }} />
    },
    { 
      title: 'Contact', 
      href: '/contact',
      icon: <ContactIcon sx={{ color: theme.palette.primary.main }} />
    }
  ];

  const renderDesktopMenu = () => {
    return (
      <Stack 
        direction="row" 
        spacing={1} 
        sx={{ 
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          ml: 4
        }}
      >
        {navItems.map((item) => (
          <Box key={item.title} position="relative">
            {item.subItems ? (
              <>
                <NavButton
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMenuToggle(item.title)}
                  startIcon={item.icon}
                  endIcon={expandedMenu === item.title ? <ExpandLess /> : <ExpandMore />}
                  sx={{
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    }
                  }}
                >
                  {item.title}
                </NavButton>
                <AnimatePresence>
                  {expandedMenu === item.title && (
                    <Menu
                      component={motion.div}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={scaleUp}
                      anchorEl={anchorEl}
                      open={expandedMenu === item.title}
                      onClose={() => handleMenuToggle(item.title)}
                      MenuListProps={{ 
                        onMouseLeave: () => handleMenuToggle(item.title),
                        sx: {
                          py: 0,
                          borderRadius: '12px',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        }
                      }}
                      PaperProps={{
                        elevation: 4,
                        sx: {
                          mt: 1,
                          borderRadius: '12px',
                          overflow: 'hidden',
                          minWidth: '240px',
                        }
                      }}
                    >
                      {item.subItems.map((subItem) => (
                        <MenuItem 
                          key={subItem.title} 
                          component={motion.div}
                          variants={staggerItem}
                          component={Link} 
                          href={subItem.href}
                          onClick={() => handleMenuToggle(item.title)}
                          sx={{
                            py: 1.5,
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            }
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: '36px' }}>{subItem.icon}</ListItemIcon>
                          <ListItemText 
                            primary={subItem.title} 
                            primaryTypographyProps={{ 
                              variant: 'body2',
                              fontWeight: 500 
                            }} 
                          />
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link href={item.href} passHref>
                <NavButton 
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  startIcon={item.icon}
                  sx={{
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    }
                  }}
                >
                  {item.title}
                </NavButton>
              </Link>
            )}
          </Box>
        ))}
      </Stack>
    );
  };

  const renderMobileMenu = () => {
    return (
      <List sx={{ py: 0 }}>
        {navItems.map((item, index) => (
          <motion.div
            key={item.title}
            variants={staggerItem}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.05 }}
          >
            {item.subItems ? (
              <>
                <ListItem 
                  button 
                  onClick={() => handleMenuToggle(item.title)}
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  sx={{
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '40px' }}>{item.icon}</ListItemIcon>
                  <ListItemText 
                    primary={item.title} 
                    primaryTypographyProps={{ fontWeight: 500 }} 
                  />
                  {expandedMenu === item.title ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={expandedMenu === item.title} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <Link href={subItem.href} passHref key={subItem.title}>
                        <ListItem 
                          button 
                          component={motion.div}
                          whileHover={{ x: 5 }}
                          sx={{ 
                            pl: 4,
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            }
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: '36px' }}>{subItem.icon}</ListItemIcon>
                          <ListItemText 
                            primary={subItem.title} 
                            primaryTypographyProps={{ variant: 'body2' }} 
                          />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <Link href={item.href} passHref>
                <ListItem 
                  button
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  sx={{
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '40px' }}>{item.icon}</ListItemIcon>
                  <ListItemText 
                    primary={item.title} 
                    primaryTypographyProps={{ fontWeight: 500 }} 
                  />
                </ListItem>
              </Link>
            )}
          </motion.div>
        ))}
        
        {/* Search in mobile */}
        <motion.div variants={staggerItem}>
          <ListItem 
            button 
            onClick={handleSearchToggle}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            sx={{
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: '40px' }}><SearchIcon /></ListItemIcon>
            <ListItemText primary="Search" primaryTypographyProps={{ fontWeight: 500 }} />
          </ListItem>
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeIn}
              >
                <ListItem>
                  <SearchPaper 
                    component="form" 
                    onSubmit={handleSearchSubmit}
                  >
                    <InputBase
                      sx={{ ml: 2, flex: 1 }}
                      placeholder="Search stories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }}>
                      <SearchIcon />
                    </IconButton>
                  </SearchPaper>
                </ListItem>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Admin section if logged in as admin */}
        {isAdmin && (
          <>
            <Divider sx={{ my: 1 }} />
            <List>
              <ListItem 
                button 
                onClick={() => handleMenuToggle('admin')}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: '40px' }}><DashboardIcon /></ListItemIcon>
                <ListItemText primary="Admin" primaryTypographyProps={{ fontWeight: 500 }} />
                {expandedMenu === 'admin' ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={expandedMenu === 'admin'} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link href="/admin/dashboard" passHref>
                    <ListItem 
                      button 
                      component={motion.div}
                      whileHover={{ x: 5 }}
                      sx={{ 
                        pl: 4,
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: '36px' }}><DashboardIcon fontSize="small" /></ListItemIcon>
                      <ListItemText primary="Dashboard" primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItem>
                  </Link>
                  <Link href="/admin/stories" passHref>
                    <ListItem 
                      button 
                      component={motion.div}
                      whileHover={{ x: 5 }}
                      sx={{ 
                        pl: 4,
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: '36px' }}><StoriesIcon fontSize="small" /></ListItemIcon>
                      <ListItemText primary="Stories" primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItem>
                  </Link>
                  <Link href="/admin/users" passHref>
                    <ListItem 
                      button 
                      component={motion.div}
                      whileHover={{ x: 5 }}
                      sx={{ 
                        pl: 4,
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: '36px' }}><UsersIcon fontSize="small" /></ListItemIcon>
                      <ListItemText primary="Users" primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItem>
                  </Link>
                  <Link href="/admin/settings" passHref>
                    <ListItem 
                      button 
                      component={motion.div}
                      whileHover={{ x: 5 }}
                      sx={{ 
                        pl: 4,
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: '36px' }}><SettingsIcon fontSize="small" /></ListItemIcon>
                      <ListItemText primary="Settings" primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItem>
                  </Link>
                </List>
              </Collapse>
            </List>
          </>
        )}
      </List>
    );
  };

  return (
    <>
      <AppBar 
        position="static" 
        elevation={0} 
        sx={{ 
          backgroundColor: 'background.paper', 
          color: 'text.primary',
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: 1
        }}
        component={motion.header}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Toolbar sx={{ 
          justifyContent: 'space-between',
          maxWidth: 'xl',
          mx: 'auto',
          width: '100%',
          px: { xs: 2, md: 4 }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                mr: 2, 
                display: { md: 'none' },
                color: 'text.primary'
              }}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" passHref>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': { 
                    opacity: 0.8 
                  }
                }}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Typography 
                  variant="h5" 
                  component="div" 
                  sx={{ 
                    fontWeight: 'bold', 
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.5px'
                  }}
                >
                  Magic of Belonging
                </Typography>
              </Box>
            </Link>
          </Box>

          {/* Desktop Navigation */}
          {renderDesktopMenu()}

          {/* Search bar for desktop */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            ml: 2,
            flexGrow: 1,
            maxWidth: '400px'
          }}>
            <SearchPaper 
              component={motion.form}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 300 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSearchSubmit}
            >
              <InputBase
                sx={{ ml: 2, flex: 1 }}
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <IconButton 
                type="submit" 
                sx={{ p: '10px' }}
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SearchIcon />
              </IconButton>
            </SearchPaper>
          </Box>

          {/* User Auth Section */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            ml: 2,
            gap: 1
          }}>
            <IconButton 
              color="inherit" 
              sx={{ color: 'text.primary' }}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <LanguageIcon />
            </IconButton>
            <IconButton 
              color="inherit" 
              sx={{ color: 'text.primary' }}
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <DarkModeIcon />
            </IconButton>
            
            {session ? (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  onClick={handleMenu}
                  color="inherit"
                  sx={{ color: 'text.primary' }}
                  component={motion.button}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Avatar 
                    alt={session.user?.name} 
                    src={session.user?.image} 
                    sx={{ 
                      width: 36, 
                      height: 36,
                      border: `2px solid ${theme.palette.primary.main}`
                    }}
                    component={motion.div}
                    whileHover={{ rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </IconButton>
                <AnimatePresence>
                  {Boolean(anchorEl) && (
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      component={motion.div}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={scaleUp}
                      PaperProps={{
                        elevation: 4,
                        sx: {
                          mt: 1.5,
                          borderRadius: '12px',
                          overflow: 'hidden',
                          minWidth: '220px',
                          py: 0,
                          '& .MuiMenuItem-root': {
                            py: 1.5,
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            }
                          }
                        }
                      }}
                    >
                      <MenuItem disabled>
                        <Typography variant="body2" color="text.secondary">
                          Signed in as {session.user?.name}
                        </Typography>
                      </MenuItem>
                      <Divider />
                      {isAdmin && (
                        <MenuItem 
                          component={Link} 
                          href="/admin/dashboard"
                          onClick={handleClose}
                          component={motion.div}
                          variants={staggerItem}
                        >
                          <ListItemIcon><DashboardIcon fontSize="small" /></ListItemIcon>
                          Admin Dashboard
                        </MenuItem>
                      )}
                      <MenuItem 
                        component={Link} 
                        href="/profile"
                        onClick={handleClose}
                        component={motion.div}
                        variants={staggerItem}
                      >
                        <ListItemIcon><ProfileIcon fontSize="small" /></ListItemIcon>
                        Your Profile
                      </MenuItem>
                      <MenuItem 
                        onClick={() => {
                          handleClose();
                          signOut();
                        }}
                        component={motion.div}
                        variants={staggerItem}
                      >
                        <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>
                        Sign out
                      </MenuItem>
                    </Menu>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <ColorButton 
                variant="contained"
                onClick={() => signIn()}
                sx={{ 
                  borderRadius: '24px',
                  px: 3,
                  py: 1,
                  ml: 1,
                  textTransform: 'none',
                  fontWeight: 500,
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }
                }}
                component={motion.button}
                whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Sign in
              </ColorButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            borderRight: `1px solid ${theme.palette.divider}`,
            backgroundColor: 'background.paper'
          },
        }}
      >
        <Box 
          sx={{ 
            p: 2, 
            borderBottom: `1px solid ${theme.palette.divider}`,
            textAlign: 'center'
          }}
          component={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" passHref>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 'bold', 
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              Magic of Belonging
            </Typography>
          </Link>
        </Box>
        {renderMobileMenu()}
      </Drawer>
    </>
  );
}     