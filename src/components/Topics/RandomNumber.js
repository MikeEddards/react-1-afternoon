import React, { Component } from 'react'

class RandomNumber extends Component {
    constructor(){
        super()
        this.state = {
           random: '',
           guess: '',
           winner: '' 
        }

    }
    handleChange(num){
        this.setState({guess: num})
    }
    getNumber(num){
        let number = Math.floor(Math.random()*10)
        console.log(num)
        if(+num === +number){
            this.setState({winner: 'You Win!!!'})
        }else if(+num !== +number){
            this.setState({winner: 'Try again'})
        }
        
        this.setState({random: number})
        this.setState({guess: ''})
        

    }


    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Guess a number from 0-10</h4>
                <input placeholder="Guess what Number it will be" className="inputLine" type="text" onChange={(e)=>this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={ () => this.getNumber(this.state.guess)}> Guess Number</button>
                <span className="resultsBox">Number: {this.state.random}</span>
                <span className="resultsBox">Winner?    {this.state.winner}</span>
            </div>

        )
    }
}

export default RandomNumber