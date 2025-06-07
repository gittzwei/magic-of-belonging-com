import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { motion } from 'framer-motion';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required').min(20, 'Message should be at least 20 characters')
});

const inputAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post('/api/contact', values);
        setSubmitted(true);
        resetForm();
        setTimeout(() => setSubmitted(false), 5000);
      } catch (err) {
        setError(err.response?.data?.msg || 'Something went wrong');
        setTimeout(() => setError(''), 5000);
      }
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center px-4 py-2 bg-indigo-100 rounded-full mb-4"
          >
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Let's Connect
            </span>
          </motion.div>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Get in Touch
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-2xl mx-auto"
          >
            <p className="text-xl text-gray-600">
              Have questions or want to share your story? We'd love to hear from you.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden p-8 sm:p-10 border border-white/20"
        >
          {submitted && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 text-green-700 shadow-sm"
            >
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            </motion.div>
          )}
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 rounded-lg bg-gradient-to-r from-red-50 to-pink-50 border border-red-200/50 text-red-700 shadow-sm"
            >
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            </motion.div>
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-8">
            <motion.div variants={inputAnimation}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`block w-full px-4 py-3 rounded-xl border-2 ${formik.touched.name && formik.errors.name ? 'border-red-300 focus:ring-2 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'} focus:outline-none transition bg-white/70 backdrop-blur-sm shadow-sm`}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                {formik.touched.name && formik.errors.name && (
                  <p className="mt-2 text-sm text-red-600">{formik.errors.name}</p>
                )}
              </div>
            </motion.div>

            <motion.div variants={inputAnimation}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`block w-full px-4 py-3 rounded-xl border-2 ${formik.touched.email && formik.errors.email ? 'border-red-300 focus:ring-2 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'} focus:outline-none transition bg-white/70 backdrop-blur-sm shadow-sm`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
                )}
              </div>
            </motion.div>

            <motion.div variants={inputAnimation}>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`block w-full px-4 py-3 rounded-xl border-2 ${formik.touched.message && formik.errors.message ? 'border-red-300 focus:ring-2 focus:ring-red-200 focus:border-red-500' : 'border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'} focus:outline-none transition bg-white/70 backdrop-blur-sm shadow-sm`}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className="absolute top-3 right-3 pr-3 flex items-start pointer-events-none">
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                {formik.touched.message && formik.errors.message && (
                  <p className="mt-2 text-sm text-red-600">{formik.errors.message}</p>
                )}
              </div>
            </motion.div>

            <motion.div 
              variants={inputAnimation}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full px-6 py-4 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 hover:shadow-xl"
              >
                {formik.isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Message
                  </span>
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center"
        >
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/20">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
            <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/20">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-gray-600">hello@example.com</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/20">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Location</h3>
            <p className="mt-2 text-gray-600">San Francisco, CA</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}