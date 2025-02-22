import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Fish, Anchor, Shield, Signal, Globe, AlertTriangle, ServerCog } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MarineProtection = () => {
    const [biodiversityLevel, setBiodiversityLevel] = useState(65);
    const [threatDetected, setThreatDetected] = useState(false);
    const [pollutionLevel, setPollutionLevel] = useState(20);
    const [solutionSuggestion, setSolutionSuggestion] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const levelChange = (Math.random() - 0.5) * 5;
            const newLevel = Math.max(0, Math.min(100, biodiversityLevel + levelChange));
            setBiodiversityLevel(newLevel);

            const newThreat = Math.random() < 0.2;
            setThreatDetected(newThreat);

            const changePollution = (Math.random() - 0.5) * 3;
            const newPollution = Math.max(0, Math.min(100, pollutionLevel + changePollution));
            setPollutionLevel(newPollution);

            if (newThreat) {
                setSolutionSuggestion("Deploy deep-sea drones to evaluate for damages.");
            } else if (newPollution > 75) {
                setSolutionSuggestion("Initiate emergency protocol: deploy oil containment boom");
            } else if (biodiversityLevel < 25) {
                setSolutionSuggestion("AI predicts population drops, increase aquatic conservation efforts.");
            }
            else {
                setSolutionSuggestion("No immediate threat detected. Maintain monitoring.");
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [biodiversityLevel, pollutionLevel]);

    const sampleBiodiversityData = [
        { time: '00:00', level: 55 },
        { time: '03:00', level: 60 },
        { time: '06:00', level: 50 },
        { time: '09:00', level: 75 },
        { time: '12:00', level: 80 },
        { time: '15:00', level: 70 },
        { time: '18:00', level: 65 },
        { time: '21:00', level: 55 },
        { time: '24:00', level: 60 },
    ];

    const pollutionData = [
        { time: '00:00', value: 10 },
        { time: '03:00', value: 15 },
        { time: '06:00', value: 20 },
        { time: '09:00', value: 25 },
        { time: '12:00', value: 30 },
        { time: '15:00', value: 25 },
        { time: '18:00', value: 20 },
        { time: '21:00', value: 15 },
        { time: '24:00', value: 10 },
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
                    <Droplets className="h-16 w-16 text-teal-600 mx-auto mb-6" />
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Marine Protection</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Advanced eco-friendly solutions leveraging AI, IoT, and sustainable engineering to protect marine ecosystems while optimizing port efficiency.
                    </p>
                </motion.div>

                {/* Content Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* AI-Driven Monitoring */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-xl overflow-hidden shadow-lg"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80"
                            alt="Marine Ecosystem"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-3">AI-Driven Marine Monitoring</h3>
                            <p className="text-gray-600">
                                Using AI and real-time data analytics, we track biodiversity levels, detect ecosystem changes, and predict potential threats to marine life.
                            </p>
                            {/* Biodiversity Graph */}
                            <h4 className="font-semibold mt-4 mb-2">Biodiversity Level Over Time</h4>
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={sampleBiodiversityData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="time" />
                                    <YAxis domain={[0, 100]} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="level" stroke="#22c55e" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                            <p className="text-3xl font-bold text-teal-600 mt-4">{biodiversityLevel.toFixed(1)}%</p>
                        </div>
                    </motion.div>

                    {/* Protection Measures */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-xl p-8 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold mb-6">Smart Conservation Technologies</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <Fish className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold">AI-Based Marine Life Protection</h3>
                                    <p className="text-gray-600">Machine learning models detect threats and optimize conservation efforts.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Anchor className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Sustainable Port Infrastructure</h3>
                                    <p className="text-gray-600">Bio-engineered breakwaters that promote coral growth and marine biodiversity.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Shield className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold">IoT-Powered Pollution Control</h3>
                                    <p className="text-gray-600">Smart sensors detect and mitigate oil spills, chemical leaks, and water pollution.</p>
                                </div>
                            </li>
                        </ul>

              {/* Suggestion Panel */}
                            <div className="mt-6">
                              <h4 className="text-xl font-semibold mb-3">Real-time Threat Assessment</h4>
                                <div className="flex items-center space-x-4">
                                  <AlertTriangle className={`h-6 w-6 ${threatDetected ? 'text-red-600 animate-pulse' : 'text-gray-500'}`} />
                                  <p className={threatDetected ? "text-red-600 font-semibold" : "text-gray-600"}>
                                    {threatDetected ? "Potential Threat Detected!" : "No immediate threats."}
                                      </p>
                                </div>
                                {solutionSuggestion && (
                                  <div className="mt-4 bg-gray-100 p-4 rounded-md">
                                     <h4 className="font-semibold">Suggested Action:</h4>
                                       <p className="text-gray-700">{solutionSuggestion}</p>
                                     </div>
                                  )}
                             </div>
          
                   </motion.div>
                     </div>

        {/* Conservation Impact */}
        <div className="bg-teal-700 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Conservation Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "300+",
                title: "Marine Species Monitored",
                description: "AI tracks biodiversity in real-time"
              },
              {
                metric: "60%",
                title: "Reduction in Pollution",
                description: "IoT sensors detect and prevent contamination"
              },
              {
                metric: "100%",
                title: "Sustainable Infrastructure",
                description: "Built with eco-friendly, renewable materials"
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
         {/* Python Model simulation  Section*/}
          <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-xl p-8 shadow-lg"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-center">Python-Powered Threat Assessment: Model Suggestion</h2>
                        <div className="flex items-center justify-center">
                            <ServerCog className="h-12 w-12 text-blue-500 mr-4" />
                            <div className="text-left">
                                <h3 className="text-xl font-semibold">Biodiversity Risk Score:</h3>
                                <p className="text-2xl font-bold">{threatDetected ? 'High' : 'Low'}</p>
                                <p className="mt-2 text-gray-600">
                                    {threatDetected
                                        ? "High risk detected; take immediate action to save lives."
                                        : "Optimal conditions; continue standard monitoring procedures."}
                                </p>
                            </div>

                        </div>
                    </motion.div>
            </div>
    </div>
       
    );
};

export default MarineProtection;