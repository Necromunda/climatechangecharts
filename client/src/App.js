import React, { useState } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import Frontpage from './pages/Frontpage'
import Navbar from './components/Navbar';
import N2 from './pages/N2';
import V1 from './components/V1'
import V4 from './components/V4'
import V5 from './components/V5';
import V6 from './components/V6';
import V7 from './components/V7';
import V8 from './components/V8';
import V9 from './components/V9';
import Editor from './pages/Editor';
import N3 from './pages/N3';
import {Alert, Snackbar} from '@mui/material';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// import './styles/App.css';

// https://stackoverflow.com/questions/66289122/how-to-create-a-protected-route/66289280#66289280


export default function App() {

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  return (
    <div>
      <Navbar>
        <Login>
          <SignUp setSnackbarOpen={setSnackbarOpen}/>
        </Login>
      </Navbar>
      <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/v1" element={<V1/>}/>
        <Route path="/v4" element={<V4 />} />
        <Route path="/v5" element={<V5/>}/>
        <Route path="/v6" element={<V6 />} />
        <Route path="/v7" element={<V7 />} />
        <Route path="/v8" element={<V8/>}/>
        <Route path="/v9" element={<V9/>}/>
        <Route path="/n2" element={<N2 />} />
        <Route path="/myview" element={<N3 />}/>
        <Route path="/editor" element={<Editor />}/>
        <Route path='*' element={<Navigate to ='/'/>}/>
      </Routes>
      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={() => setSnackbarOpen(false)}>
        <Alert variant="filled" severity="success">Registration successful!</Alert>
      </Snackbar>

    </div>
  );
}
