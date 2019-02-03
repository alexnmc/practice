import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

 
// list of items
const list = [
  { name: 'BBC' },
  { name: 'BBC Sport' },
  { name: 'item3' },
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
];
 

const MenuItem = ({ text, selected }) => {
  return (
    <div
      className="menu-item"
      onClick = {()=>{console.log({text})}}
    >
      {text}
    </div>
  );
};
 

export const Menu = (list) => list.map(el => {
  const { name } = el;
 
  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
class MenuBar extends Component {
  state = {
    selected: 'item1'
  };
  
  onSelect = key => {
    this.setState({ selected: key });
  }
 
  
  render() {
    const { selected } = this.state;
    // Create menu from items
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
    );
  }
}
 export default MenuBar