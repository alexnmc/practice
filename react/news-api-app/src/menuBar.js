import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';


const list = [
  { name: 'BBC',
     url:'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa'},
  { name: 'BUSINESS',
     url: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa"},
  { name: 'WASHINGTON JOURNAL',
     url: "https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-03&sortBy=publishedAt&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa"},
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' },
  { name: 'item10' },
  { name: 'item11' },
  { name: 'item12' },
  { name: 'item13' }
]
 

const MenuItem = ({ text, selected, url }) => {
  return (
    
    <div
      className="menu-item"
      onClick = {()=>console.log(url)}
    >
    
    {text}
    </div>
  )
}
 

export const Menu = (list) => list.map(el => {
  const { name, url } = el;
 
  return (
    <MenuItem
      text={name}
      key={name}
      url={url}
    />
    
  )
})
 
 
const Arrow = ({ text, className }) => {
  return (
    <div className={className}>{text}</div>
  )
}
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' })
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' })
 




class MenuBar extends Component {
  state = {
    selected: 'item1'
  };
  
  
  
  
  onSelect = key => {
    this.setState({ selected: key })
    
  }
 
  
  render() {
    const { selected } = this.state;
    
    const menu = Menu(list, selected);
 
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
        
      </div>
    )
  }
}
 export default MenuBar