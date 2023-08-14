import React,{ Component } from "react";
import { MenuData} from "./MenuData";
import {Link} from 'react-router-dom';
import "./NavbarStyles.css";

class Navbar extends Component{
    state = {
        clicked: false,
        activeMenuItem: "Malinga's"
      };
    
      handleClick = () => {
        this.setState({
          clicked: !this.state.clicked
        });
      };
    
      handleMenuItemClick = (title) => {
        this.setState({
          activeMenuItem: title,
          clicked: false 
        });
      };


    render(){
        return(
            <nav className="NavbarItems">
                <h6 className= "page">{this.state.activeMenuItem} Page</h6> 

                <div className={`overlay ${this.state.clicked ? 'active' : ''}`}
                onClick={this.handleClick}>
                </div>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
                </div>
                
                <ul className={this.state.clicked ?"nav-menu active" :"nav-menu"}>
                    {MenuData.map((item, index)=>{
                        return(
                            <li key={index}
                            className={
                                this.state.activeMenuItem === item.title ? "active" : ""
                              }>
                                <Link 
                                to={item.url} 
                                className={item.cName}
                                onClick={()=>this.handleMenuItemClick(item.title)}>
                                <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                
            </nav>
        );
    }
}

export default Navbar