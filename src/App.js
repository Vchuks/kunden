import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/molecules/Navbar';
import FormM from './components/organisms/multimedia/FormM';
import BookHall from './components/organisms/services/BookHall';
import Footer from './components/organisms/services/Footer';
import Home from './components/pages/Home';
import Infotech from './components/pages/Infotech';
import Multi from './components/pages/Multi';
import OnlineRadio from './components/pages/OnlineRadio';
import Print from './components/pages/Print';
import Services from './components/pages/Services';
import ScrolltoTop from './components/molecules/ScrolltoTop';

function App() {
  return (
    <div className="">
      <Navbar />
      <ScrolltoTop>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="services" element={<Services />}/>
        <Route path="infotech" element={<Infotech />}/>
        <Route path="multimedia" element={<Multi />}/>
        <Route path="printing-press" element={<Print />}/>
        <Route path="online-radio" element={<OnlineRadio />}/>
        <Route path="session" element={<FormM />}/>
        <Route path="book-hall" element={<BookHall />}/>
      </Routes>
      </ScrolltoTop>
      <Footer/>
    </div>
  );
}

export default App;
