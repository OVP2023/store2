import { Component } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function CardView(props) {
  const {product} = props;
  return (
    <div>
      <img
        className="CardView"
        src={product.img}
      /> 
      <div className="Name">{product.name}</div>
      <div className="Price">${product.price}</div>
      <div className="Color">{product.color}</div>
    </div>
  );  
}

function ListView(props) {
  const {product} = props;
  return (
    <div>
      <div key={product.name}  className="List"> {product.name } ,  $ {product.price} ,    {product.color}</div>
    </div>
  );  
}

function IconSwitch(props) {
  return (
    <div>
      <button onClick={props.onSwitch}>
        {props.icon}
      </button>
    </div>
  );
}

class Store extends Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true}
    
    this.products = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
    }];
  }

  render() { 
    if (this.state.isToggleOn){ 
      return (
        <div>      
          <IconSwitch 
            icon={"card_list"} 
            onSwitch={()=>{this.setState(state => ({
              isToggleOn: !state.isToggleOn
            }))}}
          />
          {this.products.map(product => (                                   
            <CardView product = {product} />                                   
          ))} 
        </div>
      );  
    }else{
      return (
        <div>      
          <IconSwitch 
            icon={"view_list"} 
            onSwitch={()=>{this.setState(state => ({
              isToggleOn: !state.isToggleOn
            }))}} 
          />  
          {this.products.map(product => (                                   
            <ListView product = {product} />
          ))}   
        </div>
      );
    }
  }
}
export default Store