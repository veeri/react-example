import React from 'react';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            temperature: '',
        }
        this.tempHandler = this.tempHandler.bind(this);
    }
    tempHandler(e){
        this.setState({
            temperature: e.target.value
        })
    }
    render(){
        const temperature = this.state.temperature;
        return(
            <fieldset>
                <label>
                    Enter Temperature : 
                    <input
                        type="text"
                        value={temperature}
                        onChange={this.tempHandler}/>
                </label>
                <BoilingVerdict 
                    celsius={temperature}
                />
        </fieldset>
        );
    }
}
export default Calculator;