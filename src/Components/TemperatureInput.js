import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.tempHandler = this.tempHandler.bind(this);
    }
    tempHandler(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>
                    Enter Temperature in  {scaleNames[scale]}: 
                </legend>
                <input
                        type="text"
                        value={temperature}
                        onChange={this.tempHandler}/>
            </fieldset>
        )
    }
}
export default TemperatureInput;