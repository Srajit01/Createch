import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Shield, TreePine, Factory, Cpu, Database, Gauge, FileCheck } from 'lucide-react';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sustainable Port Infrastructure</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to sustainable port development combines innovative engineering, 
            environmental responsibility, and cutting-edge technology to create the ports of tomorrow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/12/Sustainable-Construction-Materials-09-0103020001.jpg" 
              alt="Sustainable Construction"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Eco-friendly Infrastructure</h3>
              <p className="text-gray-600">
                Our sustainable port structures are designed to minimize environmental impact while 
                enhancing marine biodiversity. We utilize renewable materials and innovative 
                construction techniques to reduce carbon footprint and energy consumption.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80" 
              alt="Marine Protection"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Environmental Integration</h3>
              <p className="text-gray-600">
                Our designs incorporate features that protect and enhance marine ecosystems while 
                ensuring efficient port operations, creating a harmonious balance between 
                infrastructure and environment.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Technological Innovation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cpu,
                title: "IoT Monitoring",
                description: "Smart sensors and real-time monitoring systems for infrastructure health"
              },
              {
                icon: Database,
                title: "AI Analytics",
                description: "Predictive maintenance powered by artificial intelligence"
              },
              {
                icon: Gauge,
                title: "Carbon Capture",
                description: "Advanced solutions for reducing carbon emissions"
              },
              {
                icon: FileCheck,
                title: "Digital Twin",
                description: "Virtual modeling for optimized operations"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <feature.icon className="h-12 w-12 mx-auto text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Sustainable Practices</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <TreePine className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Renewable Materials</h3>
                  <p className="text-gray-600">
                    Implementation of low-carbon materials and sustainable construction techniques 
                    to minimize environmental impact.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Ship className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Marine Infrastructure</h3>
                  <p className="text-gray-600">
                    Eco-friendly designs that protect and enhance marine ecosystems while supporting 
                    efficient port operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Factory className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Energy Management</h3>
                  <p className="text-gray-600">
                    Integration of renewable energy systems and optimization of energy consumption 
                    throughout port operations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Regulatory Compliance</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Environmental Standards</h3>
                  <p className="text-gray-600">
                    Adherence to international and national environmental regulations for sustainable 
                    port development.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FileCheck className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Quality Assurance</h3>
                  <p className="text-gray-600">
                    Rigorous quality control measures ensuring compliance with industry standards 
                    and best practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Database className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Data Management</h3>
                  <p className="text-gray-600">
                    Comprehensive monitoring and reporting systems for environmental impact assessment 
                    and compliance tracking.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-teal-700 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Impact Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "40%",
                title: "Carbon Reduction",
                description: "Lower emissions through sustainable practices"
              },
              {
                metric: "100%",
                title: "Compliance",
                description: "Meeting environmental regulations"
              },
              {
                metric: "24/7",
                title: "Monitoring",
                description: "Real-time environmental impact tracking"
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

export default Solutions;