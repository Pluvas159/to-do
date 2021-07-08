import React from 'react';
class Task extends React.Component{
    constructor(props){
        super(props)
        this.onRender = this.onRender.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.state = {
            value: props.value,
            deleted: 0,
            completed: 0
        }
      }
    render(){
        return(
            <>
            {this.onRender()}
            </>
        )
    }
    deleteTask(){
        this.setState({deleted: 1})
        this.props.onComplete(this.state.value, this.props.number)
    }

    completeTask(){
        this.setState({completed:1})
    }



    onRender(){
        if (this.state.deleted==0 && this.state.completed==0){
            return(<div className="break-words pl-1 text-white font-semibold">Task#{this.props.number}: <br />{this.state.value}<br/> <button onClick = {() => this.deleteTask()}  className = "p-px pl-1 pr-1 rounded-lg text-black float-right mr-4 bg-red-500 font-semibold">delete</button>
            <button onClick = {() => this.completeTask()}  className = "pl-1 pr-1 p-px font-semibold rounded-lg text-black bg-green-500 float-right mr-2">complete</button>  <br /></div>)
        } else if (this.state.completed==1 && this.state.deleted==0){
            return(<div className="break-word font-bold pl-1 text-yellow-400 text-opacity-100 mb-7">Task#{this.props.number}: <br />{this.state.value}<br/><button onClick = {() => this.deleteTask()}  className = "p-px pl-1 pr-1 rounded-lg text-black float-right mr-4 bg-red-500 font-semibold">delete</button>
            <p className = "text-black p-px pl-1 pr-1 float-right rounded-lg bg-yellow-400 mr-2">completed</p></div>)
        }
    }
}

export default Task