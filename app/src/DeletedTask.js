import React from 'react';

class DeletedTask extends React.Component{
    constructor(props){
        super(props)
        this.onRender = this.onRender.bind(this)
        this.onVanish = this.onVanish.bind(this)
        this.state = {
            vanished: 0

        }
    }
    render(){
        return(
            <>
        {this.onRender()}
        </>)
    }

    onRender(){
        if (this.state.vanished==0){
            return(<div className="text-red-500 font-semibold break-words pl-2 mb-7">Task#{this.props.number}: <br />{this.props.value}<br/>
            <button onClick = {this.onVanish} className = "float-right bg-red-600 text-black p-px pl-1 pr-1 rounded-lg font-semibold">vanish</button>
            <p className="float-right mr-2 bg-red-600 text-black rounded-lg p-px pl-1 pr-1">Deleted</p></div>)

        }

    }

    onVanish(event){
        //event.preventDefault()
        this.setState({vanished:1})
        this.props.onVanish(this)
    }
}



export default DeletedTask