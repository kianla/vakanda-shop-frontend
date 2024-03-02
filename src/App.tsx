import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import axios from 'axios';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/profile';
import Shop from './components/Shop';
import ChangeAddress from './components/ChangeAddress';
import ChangePassword from './components/ChangePassword';


const App: React.FC = () => {
  return (
    <Router> 
  
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/SignIn" element={<SignIn />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/Shop" element={<Shop />} />
    <Route path="/ChangePassword" element={<ChangePassword/>} />
    <Route path="/ChangeAddress" element={<ChangeAddress />} />

  </Routes>
</Router>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));