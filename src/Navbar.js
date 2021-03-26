import {Component} from 'react'

class Navbar extends Component{
  render(){
  return (
    <nav class="navbar navbar-default navbar-home">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">PIZZAMANIA</a>
              </div>
          
            
             
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About pizza</a></li>
                  <li><a href="#">Pizza Types</a></li>
                 
                </ul>
              
            </div>
    </nav>
  );}
}

export default Navbar;
