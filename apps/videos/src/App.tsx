import React from 'react';
import MainPage from './_shared/components/mainpage'
import './App.css';
import Navigation from './_shared/routes';


function App() {
  return (
      <MainPage>
         <Navigation />
      </MainPage>
  );
}

export default App;
