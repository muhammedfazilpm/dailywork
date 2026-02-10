import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { providerauth } from '../Services.js/WorkerApi';

const ProtectedRoutespro = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const checkWorker = async () => {
      try {
        const token = localStorage.getItem('providertoken');
        if (!token) {
          navigate('/');
          return;
        }

        const response = await axios.get(providerauth, {
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

export default ProtectedRoutespro;