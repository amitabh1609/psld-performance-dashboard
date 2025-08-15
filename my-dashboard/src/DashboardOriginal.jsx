import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { CheckCircle, Clock, Target, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  // Data for BCD progress
  const bcdProgressData = [
    { category: 'Completed BCDs', count: 9, color: '#10b981' },
    { category: 'In-Progress BCDs', count: 6, color: '#f59e0b' },
    { category: 'LeanBIQ Completed', count: 3, color: '#3b82f6' },
    { category: 'Incidents', count: 5, color: '#ef4444' }
  ];

  // Data for project impact visualization
  const impactData = [
    { name: 'GLAD BCD', impact: 'High', technical: 'Data Integration', status: 'Completed' },
    { name: 'SAS → SQL Migration', impact: 'High', technical: 'Legacy Modernization', status: 'Completed' },
    { name: 'ILS SharePoint', impact: 'Medium', technical: 'Automation', status: 'Completed' },
    { name: 'LeanBIQ Projects', impact: 'Medium', technical: 'Process Optimization', status: 'Completed' }
  ];

  // Pie chart data for overall completion
  const completionData = [
    { name: 'Completed', value: 9, color: '#10b981' },
    { name: 'In Progress', value: 6, color: '#f59e0b' }
  ];

  const COLORS = ['#10b981', '#f59e0b'];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Performance Overview</h1>
        <p className="text-lg text-gray-600">7-Month Performance Summary - PSLD Analytics</p>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-8 mb-8">
        {/* Bar Chart */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">BCD Progress Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bcdProgressData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="category" 
                angle={-45}
                textAnchor="end"
                height={80}
                fontSize={12}
              />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#f9fafb',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                {bcdProgressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>


      </div>

      {/* Notable Projects Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Some Notable Projects I Have Worked On</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project Name
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  GLAD BCD
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  SAS → SQL Migration
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  ILS Digital CI Cards SharePoint
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  LeanBIQ Projects
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Work on Production Incidents
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Current Learning & Development */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Learning & Upskilling Initiatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h4 className="font-semibold text-purple-900">Machine Learning</h4>
              <p className="text-sm text-purple-600">Predictive Analytics & Models</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h4 className="font-semibold text-purple-900">Artificial Intelligence</h4>
              <p className="text-sm text-purple-600">AI-Driven Solutions</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h4 className="font-semibold text-purple-900">Visualization</h4>
              <p className="text-sm text-purple-600">Advanced Data Storytelling</p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Outlook */}
      <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Future Outlook</h3>
        <div className="bg-white rounded-lg p-4 border border-orange-200 shadow-sm">
          <p className="text-sm text-gray-700">"What industry or technology trends should I be paying attention to that might impact our work in the next 2–3 years?"</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
