import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './card.jsx'
import Name from './input.jsx'
import TestingInput from './testingInput.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <TestingInput />
  </StrictMode>
);
