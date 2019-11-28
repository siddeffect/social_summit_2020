import React, { Component } from 'react'

class CounterNumberUp extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
             count: 0,
        }
    }
    
    countup=(props)=> {
        let end=this.props.endValue;
        let endTime=this.props.time;

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
        
        count = count + setTimeout(this.countup,this.props.time)

        return (
            <div>
                {this.state.count}+
            </div>
        )
    }
}

export default CounterNumberUp

