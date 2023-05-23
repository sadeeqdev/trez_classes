import { useState } from 'react';
import './App.css';
import AppBar from './components/app-bar';
import Tabs from './components/tabs';

function App() {

  return (
    <div className="App">
      <div className='flex w-screen  h-screen justify-center items-center'>
        <div className='w-96 h-[500px] border-2 border-gray-600 rounded-xl'>
          <AppBar/>
          <div className='p-5 flex flex-col space-y-3'>
            <Tabs message="First text"/>
            <Tabs message="Second text"/>
            <Tabs message="Third text"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
