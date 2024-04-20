import React , {Component}from 'react'
import axios from 'axios'
// import  { useState} from 'react';
// import {Link} from 'react-router-dom'
import AnimalList from './AnimalList'
import './animals.css'

export class Animals extends Component{
    state={
        animals:[],
        isLoaded:false
    }
    componentDidMount(){

        axios.get('http://localhost/wordpress/wp-json/wp/v2/bigcats')
        .then(res=> this.setState({
            animals:res.data,
            isLoaded:true
        }))
        .catch(err=>console.log(err))
    }
    
    
    render(){
    const {animals , isLoaded}= this.state;
    if(isLoaded){

        return(

           
            <div className='box'>
            <h1>Animals</h1>
            <ul className='ul'>
                  {animals.map(animal => (
                       <AnimalList key={animal.id} animal={animal}/>
                  ))}
            </ul>
           
      </div>
        )
    }
    return <h3>Loading..</h3>

}
    }


export default Animals
