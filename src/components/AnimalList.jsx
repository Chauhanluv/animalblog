import React,{Component} from 'react'
// import PropType from 'prop-types'
import {  Link} from 'react-router-dom';
// import axios from "axios"
import './AnimalList.css'


export class AnimalList extends Component {
      render(){
            const {title,excerpt,id}= this.props.animal;

            return (
                  
                        <div className='box1'>
                             
                              
                                    <div className='box2'>
                                 <li>
                                    <h2>{title.rendered}</h2>
                                    <p dangerouslySetInnerHTML={{__html:excerpt.rendered}}/>
                                    </li> 

                                    </div>
                                    <div className="box3">
                                   <Link to= {`/animal/${id}`}  key={id} style={{textDecoration:"none",color:"#c8e3c8", borderBottom:"2px solid "}} >Read More</Link>
                                          </div> 
                                   
                                         
                                    
                              
                             
                        </div>
                 
            );
      }

}

export default AnimalList;