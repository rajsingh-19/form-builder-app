import { useEffect, useState } from 'react';
import axios from 'axios';

const Navbar = () => {
    const [workspaceName, setWorkspaceName] = useState('');
    const [isShared, setIsShared] = useState(false);

    useEffect(() => {
        const fetchDashboard = async () => {
            const token = localStorage.getItem('authToken'); // Or get the token via another method
            if (token) {
                try {
                    const response = await axios.get(`/api/dashboard/invite/${token}`);
                    const { sharedUserName, dashboard } = response.data;

                    // If the dashboard is shared, set the shared user's name
                    if (sharedUserName) {
                        setWorkspaceName(`${sharedUserName}'s Workspace`);
                        setIsShared(true);
                    } else {
                        setWorkspaceName(`${dashboard.owner.userName}'s Workspace`);
                    }
                } catch (error) {
                    console.error('Error fetching dashboard:', error);
                }
            }
        };

        fetchDashboard();
    }, []);

    return (
        <nav>
            <div className="workspace-name">
                {isShared ? workspaceName : 'Your Workspace'}
            </div>
        </nav>
    );
};

export default Navbar;
