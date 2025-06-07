import axios from 'axios';

// Add proper error handling and fallback
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const getStories = async () => {
  try {
    const res = await axios.get(`${API_URL}/stories`, {
      timeout: 5000 // 5 second timeout
    });
    return res.data || []; // Always return an array
  } catch (err) {
    console.error('API Error:', err.message);
    // Return mock data when API fails
    return [
      {
        _id: '1',
        title: 'Sample Story',
        content: 'This is a sample story content...',
        excerpt: 'Sample excerpt',
        createdAt: new Date().toISOString()
      }
    ];
  }
};