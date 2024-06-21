'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import coin from '../../../public/coins.png';

type Reward = {
    day: number;
    coins: number;
};

const dailyRewards: Reward[] = [
    { day: 1, coins: 500 },
    { day: 2, coins: 1000 },
    { day: 3, coins: 2500 },
    { day: 4, coins: 5000 },
    { day: 5, coins: 15000 },
    { day: 6, coins: 25000 },
    { day: 7, coins: 100000 },
    { day: 8, coins: 500000 },
    { day: 9, coins: 1000000 },
    { day: 10, coins: 5000000 },
];

type LastCollectedTimes = {
    [key: number]: number;
};

const formatCoins = (coins: number): string => {
    if (coins >= 1000000) {
        return (coins / 1000000).toFixed(1) + 'M';
    } else if (coins >= 1000) {
        return (coins / 1000).toFixed(1) + 'K';
    } else {
        return coins.toString();
    }
};

const DailyReward = () => {
    const [balance, setBalance] = useState<number>(0);
    const [lastCollectedTimes, setLastCollectedTimes] = useState<LastCollectedTimes>({});


    return (
        <div className=" text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
                Daily reward :
                <div className="text-2xl font-bold ml-2">{formatCoins(balance)} Coins</div>
            </h2>
            <p className="mb-8">Accrue coins for logging into the game daily without skipping</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {dailyRewards.map((reward) => {
                    return (
                        <div
                            key={reward.day}
                            className={`relative px-10 py-4 rounded-lg flex flex-col items-center justify-center gap-4 bg-gray-800`}
                        >
                            <div className="text-xl font-bold">{`Day ${reward.day}`}</div>
                            <Image src={coin} alt="coin" className="w-12 h-12" />
                            <div className="text-xl font-bold">{formatCoins(reward.coins)}</div>
                            <button
                                className={`bg-gray-900 text-white text-md px-5 py-2 rounded-md shadow-lg font-medium `}
                            >
                                Check
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DailyReward;
