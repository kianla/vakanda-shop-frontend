// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link to="/">SignIn</Link>
      <Link to="/SignUp">SignUp</Link>
    </nav>
  );
};

export default Navigation;
