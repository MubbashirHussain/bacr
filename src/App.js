import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import LoadScreen from './components/LoadScreen';
import { useSelector } from 'react-redux';
import { selectImage } from './Redux/imageSlice';
// import AboutSec from './components/AboutSec/AboutSec';

import Sldierr from './PoductSlider'
function App() {
  const selectedImage = useSelector(selectImage);
  // console.log(selectImage);
  const [timerId, setTimerId] = useState(false);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimerId(true);
    }, 3500);


  }, []);
  // console.log(timerId);

  return (








    <section className={`custom-section`} style={{ backgroundImage: `url(${selectedImage})` }} >
      <LoadScreen dis_none={timerId} />
      <Navbar />
      <Home />

    </section>





  )
}
export default App;
