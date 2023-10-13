import { Component } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

class CardView extends Component{
  constructor(props) {
    super(props);
  } 
  render() { 
    return (
      <div key={"df"+`${this.props.product.id}`}>
        <img
          key={"i"+`${this.props.product.id}`}
          className="CardView"
          src={this.props.product.img}
        /> 
        <div   key={"da"+`${this.props.product.id}`} className="Name">{this.props.product.name}</div>
        <div key={"db"+`${this.props.product.id}`} className="Price">${this.props.product.price}</div>
        <div key={"dc"+`${this.props.product.id}`} className="Color">{this.props.product.color}</div>
      </div>
    );
  }  
}

class ListView extends Component{
  constructor(props) {
    super(props);
  } 

  render(){
    return (
      <div key={"dl"+`${this.props.product.id}`}>
        <div  key={"de"+`${this.props.product.id}`} className="List"> {this.props.product.name } ,  $ {this.props.product.price} ,    {this.props.product.color}</div>
      </div>
    );
    }  
}

class IconSwitch extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <button  onClick={this.props.onSwitch}>
          {this.props.icon}
        </button>
      </div>
    );
  }
}

class Store extends Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true}
    
    this.products = [{
      id:"1",
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
      id:"2",
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
      id:"3",
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      id:"4",
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      id:"5",
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      id:"6",
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
          {this.products.map((product,index) => (                                   
            <CardView key={index} product = {product} />                                   
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
          {this.products.map((product,index) => (                                   
            <ListView key={index} product = {product} />
          ))}   
        </div>
      );
    }
  }
}
export default Store