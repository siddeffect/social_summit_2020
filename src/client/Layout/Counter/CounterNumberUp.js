import React, { Component } from 'react'

class CounterNumberUp extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
             count: 0
        }
    }
    
    countup=()=> {
        let end=1000

        if(end>this.state.count){
            this.setState(prevState => ({
                count: prevState.count+1
            }))     
        }else{
            this.setState(prevState => ({
                count: end
            }))   
        }
    }

    

    render(){
        let count=50
        
        count = count + setTimeout(this.countup,10)

        return (
            <div>
                {this.state.count}+
            </div>
        )
    }
}

export default CounterNumberUp

