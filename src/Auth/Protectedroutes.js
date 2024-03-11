import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { headers } from '../Services.js/header';
import { workerauth } from '../Services.js/WorkerApi';
import { useNavigate } from 'react-router-dom';

const Protectedroutes = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkWorker = async () => {
      try {
        const res = await axios.post(workerauth, {}, { headers });
        if (res.data.success) {
          setAuthenticated(true);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error:', error);
        navigate('/login');
      }
    };

    checkWorker();

  }, [navigate]);

  return authenticated ? props.children : null;
};

export default Protectedroutes;
