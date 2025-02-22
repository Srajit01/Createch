import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, PackageCheck, Ruler, Recycle, FlaskConical, Globe, ShieldCheck, BarChart2, AlertTriangle, ServerCog } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RenewableMaterials = () => {
  const [sustainabilityScore, setSustainabilityScore] = useState(85);
  const [emissionsReduction, setEmissionsReduction] = useState(40);  //Example usage for reducing emissions
  const [materialCost, setMaterialCost] = useState(150); // Mock cost
  const [recyclabilityRate, setRecyclabilityRate] = useState(90);

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate AI Model to fluctuate Marine level
            const scoreChange = (Math.random() - 0.5) * 2;  // Fluctuate up or down a bit
            const newscore = Math.max(0, Math.min(100, sustainabilityScore + scoreChange));
            setSustainabilityScore(newscore);
            // Simulate Fluctuating Emission value
            const emissionChange = (Math.random() - 0.5) * 3;  // Fluctuate up or down a bit
            const newEmissions = Math.max(0, Math.min(60, emissionsReduction + emissionChange)); // Cap it at 60
            setEmissionsReduction(newEmissions)

            const newCost=  Math.max(100, Math.min(200, materialCost + (Math.random() - 0.5) * 20));
            setMaterialCost(newCost)

             // Fluctuate recyclability value
             const newRecyclability = Math.max(60, Math.min(100, recyclabilityRate + (Math.random() - 0.5) * 5)); // Cap it at 60
             setRecyclabilityRate(newRecyclability)


        }, 4000); // Run every 4 seconds

        return () => clearInterval(interval);
    }, [sustainabilityScore, emissionsReduction]);

    const sustainabilityData = [
        { time: '00:00', score: 80 },
        { time: '03:00', score: 85 },
        { time: '06:00', score: 90 },
        { time: '09:00', score: 88 },
        { time: '12:00', score: 92 },
        { time: '15:00', score: 85 },
        { time: '18:00', score: 80 },
        { time: '21:00', score: 75 },
        { time: '24:00', score: 80 },
    ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Leaf className="h-16 w-16 text-teal-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Renewable Materials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging AI, nanotechnology, and sustainable materials to revolutionize the future of 
            eco-friendly construction.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Sustainable Materials */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Next-Gen Sustainable Materials</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <PackageCheck className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">AI-Optimized Low-Carbon Concrete</h3>
                  <p className="text-gray-600">AI-driven mixture analysis ensures durability while reducing CO₂ emissions.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Ruler className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Recycled Smart Steel</h3>
                  <p className="text-gray-600">Blockchain-verified ethical sourcing for structural integrity and sustainability.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Recycle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Self-Healing Concrete</h3>
                  <p className="text-gray-600">Nanotech-infused concrete that repairs itself, reducing maintenance costs.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FlaskConical className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Biodegradable Composites</h3>
                  <p className="text-gray-600">Materials that naturally break down without harming the environment.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Environmental Benefits */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
              alt="Sustainable Construction"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Smart Environmental Impact</h3>
              <p className="text-gray-600">
                AI-powered sustainability tracking ensures a {emissionsReduction}% lower carbon footprint while exceeding durability benchmarks.
              </p>
            </div>
          </motion.div>
        </div>
        {/* Real-time Monitoring Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
                   <h2 className="text-3xl font-bold mb-8 text-center">AI-Driven Sustainable Material Assessment</h2>
                  

                     <div className="flex items-center justify-around">
                        <div>
                            <h3 className="text-xl font-semibold">Sustainability Score:</h3>
                             <p className="text-3xl font-bold text-teal-600">{sustainabilityScore}%</p>
                        </div>
        
                      </div>
  {/* graph code portion */ }

  <motion.div
        whileHover={{ scale: 1.02 }}
          className="text-center">
<ResponsiveContainer width="100%" height={200}>
  
        <LineChart data={sustainabilityData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[50, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
    </ResponsiveContainer>
    </motion.div>
        </div>

       <div className="bg-teal-700 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Sustainability Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: `${emissionsReduction}%`,
                title: "Carbon Reduction",
                description: "Lower carbon footprint compared to traditional materials"
              },
              {
                metric: `${recyclabilityRate}%`,
                title: "Recyclable",
                description: "Of materials can be recycled or repurposed"
              },
              {
                metric: "100%",
                title: "Compliance",
                description: "Meets international sustainability standards"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: 5 }}
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

export default RenewableMaterials;