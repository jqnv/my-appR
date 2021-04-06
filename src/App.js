import './App.css';
import React,{Component} from 'react';
import tasks from "./sample/task"
import Tasks from "./components/Tasks";
/*class Helloworld extends React.Component{

  state={
    show:true
  }

  toggleShow=()=>{
      this.setState({show:!this.state.show})
  }
  render(){
    if(this.state.show){
      return(<div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.myText}
        <button onClick={this.toggleShow}>Toggle Show</button>
      </div>)}
    else{
      return (
          <h1>There is no elements
          <button onClick={this.toggleShow}>Toggle Show</button></h1>
      )
    }
  }
}*/


/*function Helloworld(props){
  console.log(props)
  return(
      <div id="hello">
        <h3>{props.subtitle}</h3>
        {props.myText}
      </div>
  )
}*/

//const App=()=> <div>This is my component: <Helloworld/></div>
/*
class App extends React.Component{
  render(){
    <div>This is my component: <Helloworld/></div>
  }
}


function App() {
  return (
{    <div>
      This is my component:
      <Helloworld myText={"Hello Fast"} subtitle={"Lorem Ip"}/>
      <Helloworld myText={"Hola Mundo"} subtitle={"Component Two"}/>
      <Helloworld myText={"Hello"} subtitle={"Component 3"}/>
    </div>}
  );
}*/

class App extends Component {
  state={
    tasks:tasks
  }
  render() {
    return(
    <div>
      <Tasks tasks={this.state.tasks}/>

    </div>)
  }
}

export default App;
