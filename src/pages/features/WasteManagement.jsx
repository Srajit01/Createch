import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Recycle, Trash2, Filter, RotateCcw } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Index = () => {
  const [wasteRecycled, setWasteRecycled] = useState(70);
  const [waterTreated, setWaterTreated] = useState(85);
  const [landfillDiversion, setLandfillDiversion] = useState(95);
  const [aiOptimizationTip, setAiOptimizationTip] = useState("No immediate optimization needed.");

  useEffect(() => {
    const interval = setInterval(() => {
      const recycleChange = (Math.random() - 0.5) * 5;
      const newRecycleLevel = Math.max(60, Math.min(95, wasteRecycled + recycleChange));
      setWasteRecycled(Number(newRecycleLevel.toFixed(1)));

      const waterChange = (Math.random() - 0.5) * 4;
      const newWaterTreated = Math.max(70, Math.min(100, waterTreated + waterChange));
      setWaterTreated(Number(newWaterTreated.toFixed(1)));

      const landfillChange = (Math.random() - 0.5) * 3;
      const newLandfill = Math.max(80, Math.min(99, landfillDiversion + landfillChange));
      setLandfillDiversion(Number(newLandfill.toFixed(1)));

      if (newRecycleLevel < 70) {
        setAiOptimizationTip("AI suggests optimizing segregation process");
      } else if (newWaterTreated < 80) {
        setAiOptimizationTip("AI suggests checking efficiency of filtration.");
      } else {
        setAiOptimizationTip("No immediate optimization needed.");
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [wasteRecycled, waterTreated, landfillDiversion]);

  const generateMockData = () => {
    const now = new Date();
    const data = [];

    for (let i = 0; i < 24; i++) {
      const time = new Date(now);
      time.setHours(now.getHours() - i);
      const hours = time.getHours().toString().padStart(2, '0');
      const minutes = time.getMinutes().toString().padStart(2, '0');
      const timeLabel = `${hours}:${minutes}`;
      const recycleValue = Math.floor(Math.random() * 35) + 60;
      data.unshift({ time: timeLabel, value: recycleValue });
    }

    return data;
  };

  const wasteRecyclingData = generateMockData();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Recycle className="h-16 w-16 text-teal-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Waste Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive waste management system ensures responsible handling of all port waste,
            maximizing recycling and minimizing environmental impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
              alt="Waste Management"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Advanced Processing</h3>
              <p className="text-gray-600">
                State-of-the-art waste processing facilities ensure maximum resource recovery
                and minimal environmental impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Management Systems</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Trash2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Segregation Systems</h3>
                  <p className="text-gray-600">Advanced waste sorting and categorization processes.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Filter className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Water Treatment</h3>
                  <p className="text-gray-600">Comprehensive water filtration and recycling systems.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <RotateCcw className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Circular Economy</h3>
                  <p className="text-gray-600">Converting waste into valuable resources.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Real-time Performance Analytics</h3>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={wasteRecyclingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={[50, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#0D9488" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16 bg-white rounded-xl p-6 shadow-lg text-center"
        >
          <h3 className="text-xl font-semibold mb-4">AI Optimization Insights</h3>
          <p className="text-lg text-gray-700">{aiOptimizationTip}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-teal-700 text-white rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Waste Management Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: `${wasteRecycled}%`,
                title: "Waste Recycled",
                description: "Of port waste successfully recycled"
              },
              {
                metric: `${waterTreated}%`,
                title: "Water Treated",
                description: "Of water recycled and reused"
              },
              {
                metric: `${landfillDiversion}%`,
                title: "Landfill Impact",
                description: "Waste to landfill target"
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
        </motion.div>
      </div>
    </div>
  );
};

export default Index;