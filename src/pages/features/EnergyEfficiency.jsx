import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wind, Sun, Zap, Battery, Activity, AlertTriangle, ServerCog } from 'lucide-react'; // Import Activity for graph and AlertTriangle for AI, ServerCog for optimization tips.
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; //For Graph

const EnergyEfficiency = () => {
  // Mock Real-time Data (Replace with API calls in a real application)
  const [currentEnergyUsage, setCurrentEnergyUsage] = useState(70); // Percentage
  const [prediction, setPrediction] = useState("Good efficiency. Maintaining current practices."); //AI text
  const [detailedMetrics, setDetailedMetrics] = useState({
    solarOutput: 0.6, //Example - Percentage of max possible
    windTurbineEfficiency: 0.7, // Example - Percentage
    gridLoad: 65, // Percentage
    batteryLevel: 80 // Percentage
  });
  const [optimizationTip, setOptimizationTip] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate Fluctuating Energy Usage and Detailed Metrics (AI would drive this in reality)
      const usageChange = (Math.random() - 0.5) * 5;  // +/- 2.5%
      const newUsage = Math.max(0, Math.min(100, currentEnergyUsage + usageChange)); // Clamp between 0 and 100
      setCurrentEnergyUsage(newUsage);

      // Simulate AI-Driven Detailed Metrics Changes
      setDetailedMetrics(prev => ({
        solarOutput: Math.max(0, Math.min(1, prev.solarOutput + (Math.random() - 0.5) * 0.1)), // Between 0 and 1
        windTurbineEfficiency: Math.max(0, Math.min(1, prev.windTurbineEfficiency + (Math.random() - 0.5) * 0.05)), // Between 0 and 1
        gridLoad: Math.max(0, Math.min(100, prev.gridLoad + (Math.random() - 0.5) * 3)), // Between 0 and 100
        batteryLevel: Math.max(0, Math.min(100, prev.batteryLevel + (Math.random() - 0.5) * 4)) // Between 0 and 100
      }));

      // Simulate AI-Driven Prediction and Actionable Tips

      if (newUsage < 30) {
        setPrediction("Outstanding efficiency. Potential for further optimization.");
        setOptimizationTip("Explore opportunities to sell excess energy back to the grid.");
      } else if (newUsage < 60) {
        setPrediction("Good efficiency. Maintaining current practices.");
        setOptimizationTip("Continue to monitor and maintain current renewable energy systems.");
      } else if (newUsage < 80) {
        setPrediction("Moderate efficiency. Consider implementing upgrades.");
        setOptimizationTip("Schedule maintenance for wind turbines to improve efficiency by 5-10%.");
      } else {
        setPrediction("High energy usage. Immediate action needed to reduce waste.");
        setOptimizationTip("Investigate high-demand areas and consider load balancing strategies.");
      }
    }, 3000); // Update every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentEnergyUsage]);

    // Mock graph
    const generateMockData = () => {
      const now = new Date();
      const data = [];
  
      for (let i = 0; i < 24; i++) {
          const time = new Date(now);
          time.setHours(now.getHours() - i);
          const hours = time.getHours().toString().padStart(2, '0'); // Ensure two-digit format
          const minutes = time.getMinutes().toString().padStart(2, '0'); // Ensure two-digit format
          const timeLabel = `${hours}:${minutes}`;
          const value = Math.floor(Math.random() * 80) + 20;
          data.unshift({ time: timeLabel, value }); // Add to the beginning
      }
  
      return data;
  };
  
  const sampleData = generateMockData(); // Ensure data is always fresh


  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Wind className="h-16 w-16 text-teal-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Energy Efficiency</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our integrated approach to energy management combines renewable sources with smart
            technologies to optimize consumption and reduce environmental impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Renewable Solutions</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Sun className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Solar Power Integration</h3>
                  <p className="text-gray-600">Large-scale solar installations for daytime operations.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Wind className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Wind Energy Systems</h3>
                  <p className="text-gray-600">Strategic placement of wind turbines for continuous power generation.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Battery className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Energy Storage</h3>
                  <p className="text-gray-600">Advanced battery systems for reliable power supply.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
              alt="Renewable Energy"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Smart Grid Integration</h3>
              <p className="text-gray-600">
                Our intelligent power distribution system optimizes energy usage across all port
                operations, reducing waste and maximizing efficiency.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="bg-teal-700 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Energy Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "70%",
                title: "Renewable Energy",
                description: "Of total power from renewable sources"
              },
              {
                metric: "45%",
                title: "Energy Savings",
                description: "Reduction in energy consumption"
              },
              {
                metric: "24/7",
                title: "Smart Monitoring",
                description: "Real-time energy optimization"
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

        {/* New Section: Real-time Monitoring */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Real-Time Energy Monitoring</h2>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">Current Energy Usage:</h3>
              <p className="text-4xl font-bold text-teal-600">{currentEnergyUsage.toFixed(1)}%</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-500">Solar Output: {(detailedMetrics.solarOutput * 100).toFixed(1)}%</p>
                <p className="text-sm text-gray-500">Wind Efficiency: {(detailedMetrics.windTurbineEfficiency * 100).toFixed(1)}%</p>
                <p className="text-sm text-gray-500">Grid Load: {detailedMetrics.gridLoad.toFixed(1)}%</p>
                <p className="text-sm text-gray-500">Battery Level: {detailedMetrics.batteryLevel.toFixed(1)}%</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ResponsiveContainer width="100%" height={200}>
                 <LineChart data={sampleData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2} />
                   </LineChart>
                </ResponsiveContainer>
            </motion.div>
          </div>

          {/* AI Integration and Optimization Tips */}
          <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-xl">
            <ServerCog className="h-6 w-6 text-blue-500" />  {/* Change icon to server cog */}
            <div>
              <h3 className="font-semibold">AI-Driven Insight & Tip:</h3>
              <p className="text-gray-700">{prediction}</p>
              {optimizationTip && (
                <p className="mt-2 text-sm text-blue-600">
                  <Zap className="h-4 w-4 inline-block mr-1" />
                  {optimizationTip}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyEfficiency;