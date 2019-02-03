
  import React, { Component } from 'react';
  import axios from 'axios'

  class Scroll extends Component {
    constructor() {
      super();
      
      this.state = {
        showMenu: false,
        articles:[]
      
      
      
      
      }
      
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
    }
    
    showMenu(event) {
      event.preventDefault();
      
      this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    }
    
    closeMenu() {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  
   
   getNews(){

    axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa")
         .then(response => {
            
             
            this.setState({
                articles: response.data.articles
            })
        })
   }
   
   
   
  render() {
      return (
        <div className = "menu1">
          <button onClick={this.showMenu}>
            Show menu
          </button>
          
          {
            this.state.showMenu
              ? (
                <div className="menu">
                  <button onClick = {this.getNews}> Menu item 1 </button>
                  <button> Menu item 2 </button>
                  <button> Menu item 3 </button>
                  <button> Menu item 4 </button>
                  <button> Menu item 5 </button>
                  <button> Menu item 6 </button>
                  <button> Menu item 2 </button>
                  <button> Menu item 3 </button>
                  <button> Menu item 4 </button>
                  <button> Menu item 5 </button>
                  <button> Menu item 6 </button>
                </div>
              )
              : (
                null
              )
          }
        </div>
      );
    }
  }

  export default Scroll