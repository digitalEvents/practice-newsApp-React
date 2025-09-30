import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import React from 'react';
import App from './App';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
