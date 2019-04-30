import React, { Component } from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import RandomNumber from '../Topics/RandomNumber'

class TopicBrowser extends Component {
    render(){
        return(
        <div>  
         <EvenAndOdd />
         <FilterObject />
         <FilterString />
         <Palindrome />
         <Sum /> 
         <RandomNumber />   
        </div> 
        )
    }
}

export default TopicBrowser