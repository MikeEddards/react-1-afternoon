import React, { Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super()

        this.state = {
            array: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],

            userInput: '',

            filteredArray: ''

        }
    }
    handleChange(val){
        this.setState({ userInput: val})
    }
    filter(prop) {
        let unFilter = this.state.array
        let filtered = []

        for(let i = 0; i < unFilter.length; i++){
            if(unFilter[i].hasOwnProperty(prop)){
                filtered.push(unFilter[i])
            }
        }
        this.setState({filteredArray: filtered})
    }
    render(){
        return (
            <div className="puzzleBox filterObjectPB">

            <h4>Filter Object</h4>

            <span className="puzzleText"> Original: { JSON.stringify(this.state.array, null, 10)}</span>
            
            <input 
            className="inputLine"
             type="text"
             onChange={ (e) => this.handleChange(e.target.value)}
             />
            <button className="confirmationButton" 
            onClick={ () => this.filter(this.state.userInput)}>Filter</button>

            <span className="resultsBox filterObjectRB"> Filtered: {
                JSON.stringify(this.state.filteredArray,null,10)
            }</span>
            </div>

        )
    }
}
export default FilterObject
