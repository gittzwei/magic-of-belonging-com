import { Box, Container, Typography, Link as MuiLink, Stack, IconButton, Grid } from '@mui/material';
import Link from 'next/link';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
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
  Palette as IdentityIcon,
  Public as DiasporaIcon,
  Schedule as PendingIcon,
  Verified as ApprovedIcon,
  TravelExplore as ExploreIcon,
  Favorite as HeartIcon,
} from '@mui/icons-material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FacebookIcon />, url: "https://facebook.com/MagicOfBelonging" },
    { icon: <TwitterIcon />, url: "https://twitter.com/MagicBelonging" },
    { icon: <InstagramIcon />, url: "https://instagram.com/MagicOfBelonging" },
    { icon: <YouTubeIcon />, url: "https://youtube.com/MagicOfBelonging" },
    { icon: <LinkedInIcon />, url: "https://linkedin.com/company/MagicOfBelonging" },
  ];

  const footerSections = [
    {
      title: "Explore",
      links: [
        { title: "About Us", url: "/about", icon: <ExploreIcon fontSize="small" /> },
        { title: "Mission & Vision", url: "/about/mission", icon: <HeartIcon fontSize="small" /> },
        { title: "Our Team", url: "/about/team", icon: <DiasporaIcon fontSize="small" /> },
        { title: "Press Kit", url: "/about/press", icon: <NewsroomIcon fontSize="small" /> },
      ]
    },
    {
      title: "Stories",
      links: [
        { title: "Recent Stories", url: "/diaspora-stories", icon: <PendingIcon fontSize="small" /> },
        { title: "Submit Your Story", url: "/diaspora-stories/submit", icon: <ApprovedIcon fontSize="small" /> },
        { title: "Popular Stories", url: "/diaspora-stories/popular", icon: <DiasporaIcon fontSize="small" /> },
        { title: "By Region", url: "/diaspora-stories/region", icon: <MapIcon fontSize="small" /> },
      ]
    },
    {
      title: "Resources",
      links: [
        { title: "Business & Innovation", url: "/business-innovation", icon: <BusinessIcon fontSize="small" /> },
        { title: "Learning & Opportunities", url: "/learning-opportunities", icon: <LearningIcon fontSize="small" /> },
        { title: "Scholarships & Grants", url: "/resources/scholarships", icon: <LibraryIcon fontSize="small" /> },
        { title: "Giving & Impact", url: "/resources/giving", icon: <GivingIcon fontSize="small" /> },
      ]
    },
    {
      title: "Community",
      links: [
        { title: "Events", url: "/events", icon: <EventsIcon fontSize="small" /> },
        { title: "Podcast", url: "/community/podcast", icon: <PodcastIcon fontSize="small" /> },
        { title: "Video Gallery", url: "/community/videos", icon: <VideoIcon fontSize="small" /> },
        { title: "Marketplace", url: "/community/marketplace", icon: <MarketplaceIcon fontSize="small" /> },
      ]
    },
    {
      title: "Connect",
      links: [
        { title: "Contact Us", url: "/contact", icon: <ContactIcon fontSize="small" /> },
        { title: "Newsletter", url: "/newsletter", icon: <NewsroomIcon fontSize="small" /> },
        { title: "Privacy Policy", url: "/privacy", icon: <AdvocacyIcon fontSize="small" /> },
        { title: "Terms of Service", url: "/terms", icon: <AdvocacyIcon fontSize="small" /> },
      ]
    }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 6, 
        backgroundColor: 'primary.main', 
        color: 'white',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Brand Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Magic of Belonging
            </Typography>
            <Typography variant="body2" paragraph>
              Connecting second-generation Kenyans worldwide through stories, resources, and community.
            </Typography>
            {/* Social Links */}
            <Box sx={{ mt: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  sx={{ mr: 1 }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Footer Links Sections */}
          {footerSections.map((section, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Typography variant="subtitle1" gutterBottom>
                {section.title}
              </Typography>
              <Stack spacing={1}>
                {section.links.map((link, idx) => (
                  <Link key={idx} href={link.url} passHref>
                    <MuiLink 
                      color="inherit" 
                      underline="hover" 
                      variant="body2"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      {link.icon}
                      {link.title}
                    </MuiLink>
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Copyright */}
        <Box sx={{ 
          borderTop: '1px solid',
          borderColor: 'divider',
          pt: 4,
          mt: 4,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="body2">
            © {currentYear} Magic of Belonging. All rights reserved.
          </Typography>
          <Typography variant="body2">
            Made with ❤️ for the Kenyan diaspora
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}