import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Wind, Recycle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/api/placeholder/1920/1080")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-teal-900/80">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.1),transparent_50%)]"
          />
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-white max-w-3xl"
            >
              <motion.div 
                variants={fadeInUp}
                className="flex items-center space-x-2 mb-8"
              >
                <div className="h-1 w-12 bg-teal-400 rounded" />
                <span className="text-teal-400 font-medium tracking-wider">INNOVATIVE SOLUTIONS</span>
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="text-7xl font-bold mb-8 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-300">
                  Sustainable Port
                </span>
                <br />
                Development
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl mb-12 text-slate-300 leading-relaxed"
              >
                Pioneering eco-friendly, sustainable port infrastructures that enhance marine biodiversity 
                and ensure long-term resilience for India's maritime future.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex space-x-6">
                <Link 
                  to="/learn-more"
                  className="group bg-gradient-to-r from-teal-500 to-emerald-400 px-8 py-4 rounded-lg
                    shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-300 
                    font-semibold inline-flex items-center transform hover:-translate-y-1"
                >
                  Explore Solutions
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
            
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-teal-400 font-medium tracking-wider">FEATURES</span>
            <h2 className="text-4xl font-bold mt-4 text-white">
              Our Sustainable Approach
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Leaf,
                title: "Renewable Materials",
                description: "Implementing cutting-edge sustainable and low-carbon materials in construction to minimize environmental impact.",
                route: "/features/renewable-materials"
              },
              {
                icon: Droplets,
                title: "Marine Protection",
                description: "Developing advanced eco-friendly infrastructure that preserves and enhances marine ecosystems.",
                route: "/features/marine-protection"
              },
              {
                icon: Wind,
                title: "Energy Efficiency",
                description: "Pioneering renewable energy solutions and smart systems for optimized energy consumption.",
                route: "/features/energy-efficiency"
              },
              {
                icon: Recycle,
                title: "Waste Management",
                description: "State-of-the-art systems for responsible water treatment and waste management solutions.",
                route: "/features/waste-management"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl cursor-pointer
                  border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300"
                onClick={() => navigate(feature.route)}
              >
                <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 p-4 rounded-xl 
                  w-16 h-16 flex items-center justify-center mb-6 group-hover:from-teal-500/30 
                  group-hover:to-emerald-500/30 transition-colors">
                  <feature.icon className="h-8 w-8 text-teal-400 group-hover:text-teal-300 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;