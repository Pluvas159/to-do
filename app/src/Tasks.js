import React from 'react';
import Task from './Task.js'

class Tasks extends React.Component{
    constructor(props){
        super(props)
        this.onAddChild = this.onAddChild.bind(this)
        this.onCompleteTask = this.onCompleteTask.bind(this)
        this.state = {
            numOfTasks: 0,
            text: null
        }
      }
    render(){
        return (
            <div className = "">
            <form onSubmit={this.onAddChild} className ="self-center pb-px">
                <input type="text" placeholder="Tasks" value={this.state.text} onChange = {this.taskChangeHandler} 
                className = "mb-1 w-full text-white font-semibold bg-gray-700 float-left outline-black pb-px"></input>
                <button onClick = {this.onAddChild} 
                className=" w-28 inline-flex items-center   ml-1 pl-4 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-gray-700 pb-px text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
                 >Add Task</button> 
                 
            </form>
            </div>
        )
    }

    onCompleteTask(text, number){
        this.props.onComplete(text, number)
    }
 
    onAddChild = event => {
        event.preventDefault()
        if (this.state.text!='' && this.state.text!=null){
            this.setState({numOfTasks: this.state.numOfTasks+1})
        this.props.onAdd(this.state.text)
        this.setState({text: ""})
    }}

    taskChangeHandler = event => {
        event.preventDefault()
        this.setState({text: event.target.value})
    }
}


export default Tasks