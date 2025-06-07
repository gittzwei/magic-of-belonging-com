import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button,
  Box,
  Chip,
  Avatar
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { CalendarToday, Person, Place } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  boxShadow: theme.shadows[2],
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[6],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  position: 'relative',
  height: '220px',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
  },
});

const MetaInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    fontSize: '1rem',
    marginRight: theme.spacing(0.5),
    color: theme.palette.text.secondary,
  },
}));

const MetaItem = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.75rem',
  color: theme.palette.text.secondary,
}));

const StoryCard = ({ story }) => {
  return (
    <StyledCard>
      {story.image && (
        <StyledCardMedia>
          <Image
            src={story.image}
            alt={story.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
          <Box sx={{ 
            position: 'absolute', 
            bottom: 16, 
            left: 16,
            zIndex: 1 
          }}>
            {story.category && (
              <Chip 
                label={story.category}
                size="small"
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  fontWeight: '600',
                }}
              />
            )}
          </Box>
        </StyledCardMedia>
      )}
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="h3"
          sx={{ 
            fontWeight: 600,
            lineHeight: 1.3,
            mb: 1.5
          }}
        >
          {story.title}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {story.excerpt || story.content?.substring(0, 150) + '...'}
        </Typography>
        
        <MetaInfo>
          {story.author && (
            <MetaItem variant="caption">
              <Person fontSize="inherit" />
              {story.author.name || 'Anonymous'}
            </MetaItem>
          )}
          {story.location && (
            <MetaItem variant="caption">
              <Place fontSize="inherit" />
              {story.location}
            </MetaItem>
          )}
          {story.date && (
            <MetaItem variant="caption">
              <CalendarToday fontSize="inherit" />
              {new Date(story.date).toLocaleDateString()}
            </MetaItem>
          )}
        </MetaInfo>
      </CardContent>
      
      <Box sx={{ p: 2, pt: 0 }}>
        <Link href={`/stories/${story._id}`} passHref legacyBehavior>
          <Button 
            variant="outlined"
            size="small" 
            color="primary"
            fullWidth
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 500,
              py: 1,
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px'
              }
            }}
          >
            Read Full Story
          </Button>
        </Link>
      </Box>
    </StyledCard>
  );
};

export default StoryCard;