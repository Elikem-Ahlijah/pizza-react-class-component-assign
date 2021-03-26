import {Component} from 'react';
import Pizza from './Pizza'

class Types extends Component{
  render(){
  return (
    <div>
    <Pizza title='Vegetable Pizza' img='images/matteo-vistocco-V2gzuCVlRhc-unsplash.jpg'/>
    <Pizza title='Meat Deluxe Pizza' img='images/getulio-moraes-Wz3u9_GtkWc-unsplash.jpg'/>
    <Pizza title='Cheese Pizza' img='images/amirali-mirhashemian-w1iMfs6yxuo-unsplash.jpg'/>
    <Pizza title='Peperroni Pizza' img='images/sheri-silver-A4EtgLN1_Fw-unsplash.jpg'/>
</div>

    
  );}
}

export default Types;
