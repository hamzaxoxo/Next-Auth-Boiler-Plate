'use client'

import React from "react";


const ProfilePage = () => {
    const [user, setUser] = React.useState<any>(null);

    React.useEffect(() => {
        // Fetch user profile data from backend API
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('/api/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming token stored in localStorage
                    },
                });
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div className="container mx-auto mt-10">
            {user ? (
                <div>
                    <h1 className="text-2xl font-bold mb-4">Profile</h1>
                    <p><strong>Email:</strong> {user.email}</p>
                    {/* Display more user profile details as needed */}
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default ProfilePage;
