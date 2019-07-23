import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            flower:''
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.submitform = this.submitform.bind(this);
        this.flowerChange = this.flowerChange.bind(this);
    }
    nameHandler(e){
        this.setState({
            name : e.target.value
        })
    }
    submitform(e){
        console.log(this.state.name,this.state.flower);
        alert(this.state.name+"-"+this.state.flower);
        e.preventDefault();
    }
    flowerChange(e){
        this.setState({
            flower : e.target.value
        })
    }
    render(){
        return (
            <form>
                <label>
                    Name : 
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.nameHandler}/>
                </label>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.flower} onChange={this.flowerChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    </label>
                <input
                    type="submit"
                    value="SAVE"
                    onClick={this.submitform}/>
            </form>
        )
    }
}
export default Form;