import React from 'react';
import { resultLabel } from './result.js';
export default function App() {
  console.log('Temporary review example');
  return <main><h1>React Quality Lab</h1><p>{resultLabel(85)}</p></main>;
}

