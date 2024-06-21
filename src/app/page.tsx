'use client'
import React from 'react';
import DailyReward from './components/DailyReward';

export default function Home() {
  const [balance, setBalance] = React.useState(5000);
  const handleCheck = (coins: any) => {
    // Convert coins string to number
    const coinValue = parseFloat(coins.replace(/[^\d.-]/g, ''));
    setBalance(balance + coinValue);
  };

  return (  
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <DailyReward/>
    </div>
  );
}
