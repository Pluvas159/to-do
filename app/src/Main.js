import React from 'react';
import Tasks from './Tasks.js'
import DeletedTask from './DeletedTask.js';
import Task from './Task.js';

class MainC extends React.Component{
    constructor(props){
        super(props)
        this.onCompleteTask = this.onCompleteTask.bind(this)
        this.onAddTask = this.onAddTask.bind(this)
        this.onVanishTask = this.onVanishTask.bind(this)
        this.state = {
            DeletedTasks: [],
            Tasks: []
        }
    }
    render(){


        return (
        <div className = "bg-gray-800 h-screen">
            <div className = "w-2/5 h-screen float-left bg-gray-900">
            <p className = "text-center bg-green-500 h-1"></p>
            {this.state.Tasks.map(task => task.task)}
            </div>
            <div className = "w-1/5 float-left">
            <div className = "text-center text-black bg-yellow-400 pb-3 font-bold">TO-DO LIST</div>
            <div>
                    <Tasks onComplete = {this.onCompleteTask} onAdd = {this.onAddTask}/>
            </div>
            </div>

            <div className = "w-2/5 h-screen float-right bg-gray-900">
                <p className = "text-center bg-red-500 h-1"></p>
                {this.state.DeletedTasks.map(task => task)}
            </div>
        </div>)}

    onCompleteTask(text, number){
        this.setState({DeletedTasks: [...this.state.DeletedTasks, <DeletedTask value={text} number = {this.state.DeletedTasks.length} onVanish = {this.onVanishTask} />]})
        let ts = this.state.Tasks.filter(item => item.id !== number);
        this.setState({ Tasks: ts });

    }

    onVanishTask(task){
       let Tasks = [...this.state.DeletedTasks]
        Tasks.splice(task, 1)
        this.setState({DeletedTasks: Tasks})
    }

    onAddTask(text){
        this.setState({Tasks: [...this.state.Tasks,{task: <Task number = {this.state.Tasks.length} value={text} onComplete = {this.onCompleteTask} key ={this.state.Tasks.length+text}/>,id: this.state.Tasks.length}]})
    }

}

export default MainC