import React from 'react';
class Square extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: ""
    }
  }



    render(){
      return (
        <button 
        className="bg-gray-100 w-24 h-24 -mr-1 -mt-1 float-left outline-black hover:bg-purple-200" 
        onClick={() => this.setState({value: 'X'})} 
        >
          {this.state.value}</button>
      );
    }
  }

export default Square;