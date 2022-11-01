import './App.css';
import Navbar from './components/Navbar/Navbar'
import Avatar from './components/Avatar/Avatar'
import Link from './components/Links/Link'
import Social from './components/Social/Social'
import './Container.css'


function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <Navbar />
        <Avatar/>
        <Link/>
        <Social/>
       
      </header>
    </div>
  );
}

export default App;
