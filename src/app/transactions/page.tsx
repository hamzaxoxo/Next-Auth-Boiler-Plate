'use client'

import { useEffect, useState } from 'react';

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState<any[]>([]); // Assuming transaction data structure

    useEffect(() => {
        // Fetch user transactions from backend API
        const fetchTransactions = async () => {
            try {
                const response = await fetch('/api/transactions', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming token stored in localStorage
                    },
                });
                const transactionData = await response.json();
                setTransactions(transactionData);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Transactions</h1>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {/* Display transaction details */}
                        <p>{transaction.amount} - {transaction.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionsPage;
