import React from 'react';


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

  export default BoilingVerdict;
// class BoilingVerdict extends React.Component{
//     constructor(props){
//         super(props)
//         console.log(props)
//         // this.state = {
//         //     res : ''
//         // }
//         // if(props.celsius< 100){
//         //     this.setState({
//         //         res : res = <h4>Water will not boil</h4>
//         //     })
//         // }
//         // else{
//         //     this.setState({
//         //         res : res = <h4>Water will boil</h4>
//         //     })
//         // }
//     }
//     render(){
//         return <h4>hghhghfgj</h4>
//     }
// }
// export default BoilingVerdict;