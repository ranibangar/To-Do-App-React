import "./styles.css";
import { Component } from "react";
import { List } from "./List.js";
import { Form } from "./Form.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ],
      newToDo:""
    };
  }

  // handleAdd = this.handleAdd.bind(this);

  handleAdd = () => {
    // complete the function to add a new Todo to the list
    if (this.state.newToDo.trim() === "") return;
    this.setState((prevState) => ({
      todos: [...prevState.todos, { text: prevState.newToDo }],
      newToDo: ""
    }));
  };

  handleChange = (event) => {
    this.setState({ newToDo: event.target.value });
  };

  handleRemove = (index) => {
    // complete the function to remove the Todo from the list
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo, i) => i !== index)
    }));
  };
  render() {
    const {todos,newToDo} =this.state;
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        
        <Form handleAdd={this.handleAdd} newToDo={newToDo} handleChange={this.handleChange}/>
        <List todos={todos} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
