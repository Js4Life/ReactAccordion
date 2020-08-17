import React, { useState } from 'react';
import './App.css';

import Accordion from './components/Accordion';
import Search from './components/search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route'
import Header from './components/header'
const items = [

  {
    title : 'what is react?',
    content:'React is frontend js framework'
  },
  {
    title:'why use react?',
    content:'React is fav'


  },
  {
    title:'how u use it?',
    content:'using components'
  }
]

const options = [

  {
      label:'the color red',
      value : 'red'
  },
  {
      label:'the color yellow',
      value : 'yellow'
  },
  {
      label:'the color blue',
      value : 'blue'
  }

];


// const showAccordion = () => {
//   if(window.location.pathname === '/') {
//     return <Accordion items={items} />
//   }
// }

// const showList = () => {
//   if(window.location.pathname === '/list') {
//     return <Search/>
//   }
// }

// const showDropdowns = () => {
//   if(window.location.pathname === '/dropdown') {
//     return <Dropdown/>
//   }
// }

// const showTranslate = () => {
//   if(window.location.pathname === '/translate') {
//     return <Translate/>
//   }
// }



export default () => {

  const [selected,setSelected]=useState(options[0]);
  const [showDropdown,setShowDropdown]=useState(true)


  return (
    
    <div>
      <Header/>

      <Route path="/">
        <Accordion items={items}></Accordion>
      </Route>

      <Route path="/list">
       <Search/>
      </Route>

      <Route path="/dropdown">
       <Dropdown
       label="select a color"
       options={options}
       selected={selected}
       onSelectChange={setSelected}
       />
      </Route>

      <Route path="/translate">
       <Translate/>
      </Route>


      {/* <button onClick={()=>setShowDropdown(!showDropdown)}>toggle</button>
     {showDropdown ? 
     <Dropdown 
     selected={selected} 
     onSelectChange={setSelected}
     options={options}
     /> : null
     } */}
    
       {/* <Accordion items={items}/> */}
    </div>
  );
}

// export default App;
