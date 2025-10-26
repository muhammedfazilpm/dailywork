import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { workerauth } from '../Services.js/WorkerApi';

const ProtectedRoutes = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const checkWorker = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/');
          return;
        }

        const response = await axios.get(workerauth, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.data.success) {
          setAuthenticated(true);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    checkWorker();
  }, [navigate]);

  if (loading) {
    return <div >Loading...</div>; 
  }

  return authenticated ? props.children : null;
};

export default ProtectedRoutes;