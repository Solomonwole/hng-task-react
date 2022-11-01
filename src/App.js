import './App.css';
import Navbar from './components/Navbar/Navbar'
import Avatar from './components/Avatar/Avatar'
import Link from './components/Links/Link'
import Social from './components/Social/Social'
import './Container.css'
import FooterSection from './components/Footer/FooterSection';


function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <Navbar />
        <Avatar/>
        <Link/>
        <Social/>
       <FooterSection/>
      </header>
    </div>
  );
}

export default App;
