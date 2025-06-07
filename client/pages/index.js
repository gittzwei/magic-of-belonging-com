import { getSession } from 'next-auth/react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Button,
  Stack,
  Paper,
  Divider,
  Avatar,
  IconButton,
  InputBase
} from '@mui/material';
import {
  Search as SearchIcon,
  Public as DiasporaIcon,
  AccountTree as IdentityIcon,
  Business as BusinessIcon,
  School as LearningIcon,
  Event as EventsIcon,
  Groups as CommunityIcon,
  MenuBook as LibraryIcon,
  Favorite as HeartIcon,
  SwapHoriz as ExchangeIcon,
  Diversity3 as DiversityIcon,
  HistoryEdu as HeritageIcon
} from '@mui/icons-material';
import StoryCard from '../components/StoryCard';
import { getStories } from '../utils/api';

export default function Home({ stories = [], session }) {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            textAlign: { xs: 'center', md: 'left' },
            mb: 6,
            position: 'relative',
            zIndex: 1
          }}>
            <Typography 
              variant="overline" 
              color="primary.main" 
              sx={{ 
                fontWeight: 'medium', 
                letterSpacing: 2,
                display: 'block',
                mb: 2
              }}
            >
              Welcome to
            </Typography>
            <Typography 
              variant="h2" 
              component="h1"
              sx={{
                fontWeight: 'bold',
                color: 'text.primary',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Magic of Belonging
            </Typography>
            <Typography 
              variant="h5" 
              component="p"
              sx={{
                maxWidth: 'md',
                mx: { xs: 'auto', md: 0 },
                color: 'text.secondary',
                mb: 4
              }}
            >
              Connecting the Kenyan diaspora through stories of identity, heritage, and community.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Button 
                variant="contained" 
                size="large" 
                color="primary"
                href="/stories"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem'
                }}
              >
                Explore Stories
              </Button>
              {!session && (
                <Button 
                  variant="outlined" 
                  size="large" 
                  color="primary"
                  href="/auth/signup"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1.1rem'
                  }}
                >
                  Join Community
                </Button>
              )}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* About Teaser */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 6,
            textAlign: 'center'
          }}
        >
          About Magic of Belonging
        </Typography>
        
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
              height: '100%',
              minHeight: 300,
              backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Vision for the Kenyan Diaspora
            </Typography>
            <Typography paragraph>
              Magic of Belonging was founded to address the unique challenges and opportunities faced by second-generation Kenyans living abroad. We create spaces for cultural connection, professional networking, and personal growth.
            </Typography>
            <Typography paragraph>
              Our platform brings together Kenyans from across the globe to share their experiences, celebrate their heritage, and build meaningful connections.
            </Typography>
            
            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={6} sm={3}>
                <Paper elevation={0} sx={{ 
                  p: 2, 
                  textAlign: 'center',
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2
                }}>
                  <DiversityIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">Celebrate</Typography>
                  <Typography variant="body2">Our shared Kenyan heritage</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper elevation={0} sx={{ 
                  p: 2, 
                  textAlign: 'center',
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2
                }}>
                  <HeartIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">Cultivate</Typography>
                  <Typography variant="body2">Skills and opportunities</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper elevation={0} sx={{ 
                  p: 2, 
                  textAlign: 'center',
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2
                }}>
                  <CommunityIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">Congregate</Typography>
                  <Typography variant="body2">Build community</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper elevation={0} sx={{ 
                  p: 2, 
                  textAlign: 'center',
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2
                }}>
                  <ExchangeIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">Circulate</Typography>
                  <Typography variant="body2">Knowledge and resources</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Stories Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 6
        }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold',
              mb: { xs: 2, sm: 0 }
            }}
          >
            Featured Stories
          </Typography>
          <Paper component="form" sx={{ 
            p: '2px 4px', 
            display: 'flex', 
            alignItems: 'center',
            width: { xs: '100%', sm: 300 },
            borderRadius: 2
          }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search stories..."
              inputProps={{ 'aria-label': 'search stories' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        
        {stories.length > 0 ? (
          <Grid container spacing={4}>
            {stories.map((story) => (
              <Grid item xs={12} sm={6} md={4} key={story._id}>
                <StoryCard story={story} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              textAlign: 'center',
              py: 4
            }}
          >
            No stories available yet. Check back soon!
          </Typography>
        )}
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="outlined" 
            href="/stories"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none'
            }}
          >
            View All Stories
          </Button>
        </Box>
      </Container>

      {/* Events Section */}
      <Box sx={{ 
        py: 8,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 6,
              textAlign: 'center'
            }}
          >
            Upcoming Diaspora Events
          </Typography>
          
          <Grid container spacing={4}>
            {[1, 2, 3].map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event}>
                <Paper elevation={3} sx={{ 
                  borderRadius: 2,
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Box sx={{ 
                    height: 160,
                    backgroundImage: 'url(https://source.unsplash.com/random/600x400?event)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                  <Box sx={{ p: 3, flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Kenyan Cultural Festival {event}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <EventsIcon color="primary" fontSize="small" />
                      <Typography variant="body2">June {10 + event}, 2023</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                      <DiasporaIcon color="primary" fontSize="small" />
                      <Typography variant="body2">{event === 1 ? 'London' : event === 2 ? 'New York' : 'Nairobi'}</Typography>
                    </Stack>
                    <Typography variant="body2" paragraph>
                      Join us for a celebration of Kenyan culture with food, music, and networking opportunities.
                    </Typography>
                  </Box>
                  <Box sx={{ px: 3, pb: 3 }}>
                    <Button 
                      variant="contained" 
                      fullWidth
                      href={`/events/${event}`}
                    >
                      Register Now
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button 
              variant="outlined" 
              href="/events"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none'
              }}
            >
              View All Events
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Community Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 6,
            textAlign: 'center'
          }}
        >
          Faces of Our Community
        </Typography>
        
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6].map((member) => (
            <Grid item xs={6} sm={4} md={2} key={member}>
              <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <Avatar 
                  src={`https://randomuser.me/api/portraits/${member % 2 === 0 ? 'women' : 'men'}/${member}0.jpg`}
                  sx={{ 
                    width: 100, 
                    height: 100,
                    mb: 2,
                    border: '3px solid',
                    borderColor: 'primary.main'
                  }}
                />
                <Typography variant="subtitle1" fontWeight="medium">
                  {member % 2 === 0 ? 'Jane' : 'John'} Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member === 1 ? 'Engineer, USA' : 
                   member === 2 ? 'Doctor, UK' : 
                   member === 3 ? 'Teacher, Canada' : 
                   member === 4 ? 'Entrepreneur, Kenya' : 
                   member === 5 ? 'Artist, Germany' : 'Developer, Australia'}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="outlined" 
            href="/community"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none'
            }}
          >
            Meet More Members
          </Button>
        </Box>
      </Container>

      {/* Newsletter Section */}
      <Box sx={{ 
        py: 8,
        bgcolor: 'primary.main',
        color: 'primary.contrastText'
      }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 2
            }}
          >
            Stay Connected
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Subscribe to our newsletter for the latest stories, events, and opportunities.
          </Typography>
          
          <Paper component="form" sx={{ 
            p: '2px 4px', 
            display: 'flex', 
            alignItems: 'center',
            maxWidth: 500,
            mx: 'auto'
          }}>
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Enter your email address"
              inputProps={{ 'aria-label': 'subscribe to newsletter' }}
            />
            <Button 
              variant="contained" 
              color="secondary"
              sx={{
                px: 3,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 'bold'
              }}
            >
              Subscribe
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let stories = [];
  
  try {
    stories = await getStories();
  } catch (error) {
    console.error('Failed to fetch stories:', error);
    // Fallback data
    stories = [
      {
        _id: '1',
        title: 'Finding My Kenyan Roots',
        content: 'This is placeholder content when the API is unavailable.',
        excerpt: 'A journey of rediscovering my heritage as a second-generation Kenyan in the diaspora',
        image: '/placeholder-story.jpg',
        category: 'Identity',
        author: 'Wanjiku Mwangi',
        date: 'May 15, 2023'
      },
      {
        _id: '2',
        title: 'Building a Business Across Borders',
        content: 'This is placeholder content when the API is unavailable.',
        excerpt: 'How I leveraged my dual cultural perspective to create a successful import business',
        image: '/placeholder-story.jpg',
        category: 'Entrepreneurship',
        author: 'Jamal Otieno',
        date: 'April 28, 2023'
      },
      {
        _id: '3',
        title: 'Preserving Traditions Abroad',
        content: 'This is placeholder content when the API is unavailable.',
        excerpt: 'Teaching my children Swahili and Kenyan customs while living in Europe',
        image: '/placeholder-story.jpg',
        category: 'Culture',
        author: 'Amina Hassan',
        date: 'March 10, 2023'
      }
    ];
  }
  
  return {
    props: { 
      session: session || null,
      stories 
    }
  };
}