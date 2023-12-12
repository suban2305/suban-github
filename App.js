
import './App.css';
import Home from '.pages/Home';
import About from '.Pages/About';
import Header from './Pages/Header';
function App() {
  return (
    <div className="App">
  <Router>
    <Link to ="/">Header</Link>&nbsp;&nbsp;
    <Link to="/">Home</Link>&nbsp;&nbsp;
    <Link to="/">About</Link>&nbsp;&nbsp;
    <Routes>
      <Route path= "/" element={<Header/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      

    </Routes>
  </Router>
    </div>
  );
}

export default App;
