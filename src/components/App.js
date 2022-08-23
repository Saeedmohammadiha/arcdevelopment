import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Footer from './ui/Footer';
import { useState } from 'react';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps'
import Websites from './Websites'
import About from './About'
import Revolution from './Revolution';
import Contact from './Contact'
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Routes>
          <Route exact path='/' element={<LandingPage setValue={setValue}  setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/services' element={<Services setValue={setValue}  setSelectedIndex={setSelectedIndex}/>} />
         <Route exact path='/customsoftware' element={<CustomSoftware setValue={setValue}  setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/mobileapp' element={<MobileApps setValue={setValue}  setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/websites' element={<Websites  setValue={setValue}  setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/revolution' element={<Revolution  setValue={setValue}  setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path='/about' element={<About  setValue={setValue}  setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/contact' element={<Contact setValue={setValue}  setSelectedIndex={setSelectedIndex}/>} />
         <Route exact path='/estimate' component={() => <div>estimate</div>} /> 
        </Routes>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
