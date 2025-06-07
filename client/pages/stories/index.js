import StoryCard from '../../components/StoryCard';
import { getStories } from '../../utils/api';
import { motion } from 'framer-motion';
import Head from 'next/head';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function StoriesPage({ stories }) {
  return (
    <>
      <Head>
        <title>Diaspora Stories | Kenyan Global Narratives</title>
        <meta name="description" content="Heartfelt stories from second-generation Kenyans worldwide sharing their cultural experiences" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="block">Diaspora</span>
              <span className="block text-indigo-600 mt-2">Stories</span>
            </h1>
            <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-600">
              Voices from the global Kenyan community sharing their unique cultural journeys
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
            </div>
          </motion.div>
          
          {/* Stories Grid */}
          {stories.length > 0 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            >
              {stories.map(story => (
                <motion.div key={story._id} variants={item}>
                  <StoryCard story={story} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium text-gray-500">
                No stories yet. Be the first to share your experience!
              </h3>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h3 className="text-lg font-medium text-gray-900">
              Have your own story to share?
            </h3>
            <button className="mt-4 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const stories = await getStories();
  return {
    props: { stories },
  };
}