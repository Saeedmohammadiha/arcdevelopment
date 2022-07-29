import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Footer from './ui/Footer';
import { useState } from 'react';
import LandingPage from './LandingPage';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Routes>
          <Route exact path='/' element={<LandingPage/>} />
          {/* <Route exact path='/services' component={() => <div>services</div>} />
          <Route exact path='/customsoftware' component={ () => <div>customsoftware</div>} />
          <Route exact path='/mobileapp' component={() => <div>mobileapp</div>} />
          <Route exact path='/websites' component={() => <div>websites</div>} />
          <Route exact path='/revolution' component={() => <div>revolution</div>} />
          <Route exact path='/about' component={() => <div>about</div>} />
          <Route exact path='/contact' component={() => <div>contact</div>} />
          <Route exact path='/estimate' component={() => <div>estimate</div>} /> */}
        </Routes>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
