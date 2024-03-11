import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { headers } from '../Services.js/header';
import { workerauth } from '../Services.js/WorkerApi';
import { useNavigate } from 'react-router-dom';

const Publicroutes = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkWorker = async () => {
      try {
        const res = await axios.post(workerauth, {}, { headers });
        console.log(res.data.success,"success public")
        if (!res.data.success) {
         navigate('/login')
        } else {
          navigate('/home');
        }
      } catch (error) {
        console.error('Error:', error);
        navigate('/login');
      }
    };

    checkWorker();

  }, [navigate]);

  return authenticated ? navigate("/home") : props.children;
};

export default Publicroutes;
