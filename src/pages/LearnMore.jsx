import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplets, Wind, Recycle } from 'lucide-react';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sustainable Port Development</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how L&T is revolutionizing port development with sustainable practices and 
            innovative solutions that protect our marine environment while ensuring operational excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1615818499660-30bb5816e1c7?auto=format&fit=crop&q=80" 
              alt="Sustainable Development"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                We envision ports that not only serve as efficient maritime gateways but also as 
                exemplars of environmental stewardship and sustainable development.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?auto=format&fit=crop&q=80" 
              alt="Innovation"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Innovation & Technology</h3>
              <p className="text-gray-600 mb-4">
                Leveraging cutting-edge technology and innovative design principles to create 
                sustainable port infrastructure that sets new industry standards.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Renewable Materials",
                description: "Sustainable construction materials and methods",
                link: "/features/renewable-materials"
              },
              {
                icon: Droplets,
                title: "Marine Protection",
                description: "Ecosystem preservation and enhancement",
                link: "/features/marine-protection"
              },
              {
                icon: Wind,
                title: "Energy Efficiency",
                description: "Renewable energy integration",
                link: "/features/energy-efficiency"
              },
              {
                icon: Recycle,
                title: "Waste Management",
                description: "Advanced waste handling systems",
                link: "/features/waste-management"
              }
            ].map((feature, index) => (
              <Link key={index} to={feature.link}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 bg-teal-50 rounded-xl h-full"
                >
                  <feature.icon className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-teal-600 font-semibold">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;