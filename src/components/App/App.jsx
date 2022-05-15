import { useState } from 'react';
import Aside from '../Aside';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  const initialHeight = { height: `${(window.innerHeight - 150)}px` };
  const [style, setStyle] = useState(initialHeight);
  
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      const headerHeight = document.querySelector('.Header').clientHeight;
      const footerHeight = document.querySelector('.Footer').clientHeight;
      const containerHeight = { height: `${(window.innerHeight - headerHeight - footerHeight)}px` };
      setStyle(containerHeight);
      alert('Page loaded');
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="Container" style={style}>
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
