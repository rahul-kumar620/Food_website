import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

 const App: React.FC = () => {
  return (
    <div className="App">
      <>
         {/* <BrowserRouter>
            <Routes>
              <Route path=''/>
            </Routes>
         </BrowserRouter> */}
         <Navbar/>
         <Header/>
         
      </>
    </div>
  );
}

export default App;
