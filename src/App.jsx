import './App.css';
import AboutMe from './components/AboutMe';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <AboutMe />
      </div>
    </>
  );
}

export default App;
