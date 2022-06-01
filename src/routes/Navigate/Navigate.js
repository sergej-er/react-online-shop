import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigate = ({ to }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, []);

  return <div>Loading</div>;
};

export default Navigate;
