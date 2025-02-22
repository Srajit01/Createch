import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Sun, Recycle, TreePine, Shield, Target, BarChart } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Environmental Commitment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive sustainability strategy focuses on reducing environmental impact, 
            promoting biodiversity, and ensuring long-term ecological balance through innovative 
            port development solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-8 shadow-lg h-full"
            >
              <h2 className="text-2xl font-bold mb-6">Environmental Impact Initiatives</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Leaf className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Carbon Footprint Reduction</h3>
                    <p className="text-gray-600">
                      Our comprehensive carbon reduction strategy includes:
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Implementation of renewable energy systems</li>
                        <li>Energy-efficient equipment and operations</li>
                        <li>Green building practices and materials</li>
                        <li>Carbon capture and storage solutions</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Droplets className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Water Resource Management</h3>
                    <p className="text-gray-600">
                      Advanced water conservation initiatives including:
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Rainwater harvesting systems</li>
                        <li>Wastewater treatment and recycling</li>
                        <li>Smart water monitoring technology</li>
                        <li>Marine ecosystem protection measures</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <TreePine className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biodiversity Conservation</h3>
                    <p className="text-gray-600">
                      Comprehensive programs for protecting and enhancing local ecosystems:
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Marine habitat restoration projects</li>
                        <li>Native species protection programs</li>
                        <li>Green corridor development</li>
                        <li>Sustainable landscaping practices</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" 
              alt="Marine Ecosystem"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Sustainable Innovation</h3>
              <p className="text-gray-600">
                Our commitment to innovation drives the development of sustainable solutions that 
                protect marine ecosystems while ensuring efficient port operations.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center text-teal-600">
                  <Shield className="h-5 w-5 mr-2" />
                  <span>Environmental Protection Systems</span>
                </div>
                <div className="flex items-center text-teal-600">
                  <Target className="h-5 w-5 mr-2" />
                  <span>Zero-Emission Goals</span>
                </div>
                <div className="flex items-center text-teal-600">
                  <BarChart className="h-5 w-5 mr-2" />
                  <span>Performance Monitoring</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Renewable Energy Integration</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Sun className="h-6 w-6 text-teal-600" />
                <span className="text-gray-700">Solar Power Systems</span>
              </div>
              <div className="pl-9">
                <p className="text-gray-600">
                  Large-scale solar installations providing clean energy for port operations, 
                  reducing reliance on conventional power sources.
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-6">
                <Leaf className="h-6 w-6 text-teal-600" />
                <span className="text-gray-700">Wind Energy Solutions</span>
              </div>
              <div className="pl-9">
                <p className="text-gray-600">
                  Strategic placement of wind turbines to harness natural wind resources for 
                  sustainable power generation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Waste Management Excellence</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Recycle className="h-6 w-6 text-teal-600" />
                <span className="text-gray-700">Circular Economy Approach</span>
              </div>
              <div className="pl-9">
                <p className="text-gray-600">
                  Implementation of comprehensive recycling programs and waste-to-resource 
                  initiatives across port operations.
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-6">
                <Shield className="h-6 w-6 text-teal-600" />
                <span className="text-gray-700">Zero Waste Vision</span>
              </div>
              <div className="pl-9">
                <p className="text-gray-600">
                  Striving towards zero waste to landfill through innovative waste reduction 
                  and management strategies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-teal-700 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Sustainability Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                metric: "40%",
                title: "Carbon Reduction",
                description: "Decrease in carbon emissions through renewable energy integration"
              },
              {
                metric: "60%",
                title: "Water Recycled",
                description: "Of port water is recycled and reused in operations"
              },
              {
                metric: "85%",
                title: "Waste Recovery",
                description: "Of operational waste recovered or recycled"
              },
              {
                metric: "100%",
                title: "Compliance",
                description: "With international environmental standards"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{item.metric}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-teal-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;