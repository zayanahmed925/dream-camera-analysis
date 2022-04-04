import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [chart, setChart] = useState([])
    useEffect(() => {
        fetch('Chart.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return (
        <div className='chart-container mt-5 row'>
            <div className="stacked-bar col-md-6 col-12 d-flex justify-content-center">
                <div className='chart'>
                    <h2 className='text-primary text-center my-4'>Investment Vs Revenue</h2>
                    <BarChart
                        width={500} height={300} data={chart} margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />

                    </BarChart>
                </div>
            </div>
            <div className="line-chart col-md-6 col-12 d-flex justify-content-center">
                <div className='chart'>
                    <h2 className='text-primary text-center my-4'>Month Wise Sell</h2>
                    <LineChart width={500} height={200} data={chart} syncId="anyId" margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />

                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;