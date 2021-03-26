import './App.css';
import {Component} from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import About from './About';
import Types from './Types';
import Footer from './Footer';

class App extends Component{
  render(){
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <About/>
      <Types/>
      <Footer/>
      
    </div>
  );}
}

export default App;
