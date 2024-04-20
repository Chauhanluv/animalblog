import React , {Component, Fragment}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './AnimalDetail.css'


 

   
    export class AnimalDetail extends Component {
      state={
        animal:{},
        isLoaded:false
      }
      componentDidMount(){
        // const {match}= this.props;
        // const{id}= match.params;
        // this.fetchDetails(id);
  
          axios.get(`http://localhost/wordpress/wp-json/wp/v2/bigcats/24`)
          .then(res=> this.setState({
              animal : res.data,
              isLoaded:true
            }))
            .catch(err=>console.log(err))
          }
        // }
        
        
        
        
        render(){
          const {animal , isLoaded}= this.state;
          console.log(animal)
       if(isLoaded){
   
           return (
              <Fragment>
                <div className="box4">

               <h2>{animal.title.rendered}</h2>
               <div className='box5' dangerouslySetInnerHTML={{__html:(animal.content.rendered)}}/>
                <Link to='/' style={{textDecoration:"none"}}> <button className='btn'>Go Back</button> </Link>
                </div>
              </Fragment>
           )
       }
       return <h3>Loading..</h3>
       }
      
     }
     
   
   
    
    export default AnimalDetail





