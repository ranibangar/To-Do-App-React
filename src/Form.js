import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    const {handleAdd,newToDo,handleChange}=this.props;
    return (
      <div className="form">
        <input
          onChange={handleChange}
          value={newToDo}
          placeholder="Whats on your mind?"
          required
        />
        {/* Add onclick event on the button to add the todos */}
        <button onClick={handleAdd}>Add</button>
      </div>
    );
  }
}
