'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: '12:00 AM', northbound: 45, southbound: 52, eastbound: 48, westbound: 41 },
  { time: '4:00 AM', northbound: 32, southbound: 38, eastbound: 35, westbound: 28 },
  { time: '8:00 AM', northbound: 78, southbound: 65, eastbound: 72, westbound: 85 },
  { time: '12:00 PM', northbound: 92, southbound: 88, eastbound: 95, westbound: 78 },
  { time: '4:00 PM', northbound: 85, southbound: 92, eastbound: 88, westbound: 95 },
  { time: '8:00 PM', northbound: 65, southbound: 72, eastbound: 68, westbound: 62 },
  { time: '11:59 PM', northbound: 42, southbound: 48, eastbound: 45, westbound: 38 },
];

export default function TrafficMap() {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
          <XAxis dataKey="time" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#0f172a', 
              border: '1px solid #3b82f6',
              borderRadius: '8px'
            }}
            labelStyle={{ color: '#ffffff' }}
          />
          <Legend />
          <Line type="monotone" dataKey="northbound" stroke="#3b82f6" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="southbound" stroke="#8b5cf6" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="eastbound" stroke="#ec4899" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="westbound" stroke="#0ea5e9" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
