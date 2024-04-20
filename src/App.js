
import React, { Component } from 'react'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import './App.css'

import Animals from './components/Animals';
import AnimalDetail from './components/AnimalDetail';

class App extends Component{
      

      render(){

            return (
                
            <Router>
                 
               <Routes>
      
               <Route path='/' Component ={Animals}/>
               <Route exact path="/animal/:id" Component={AnimalDetail} />
               </Routes>
            
            </Router>
         
            );
      }
}

export default App;

