import React, { Component } from "react";
//import axios from "axios";

class Tasks extends Component {
  constructor() {
    super();
    this.state = { todos: [], newTaskTitle: "" };
    this.addTask = this.addTask.bind(this);
  }

  async componentDidMount() {
    let result;
    result = {
      data: [
        {
          id: 1,
          title: "Title One",
          completed: true
        },
        {
          id: 2,
          title: "Title Two",
          completed: false
        },
        {
          id: 3,
          title: "Title Three",
          completed: true
        },
        {
          id: 4,
          title: "Title Four",
          completed: true
        },
        {
          id: 5,
          title: "Title Five",
          completed: false
        },
        {
          id: 6,
          title: "Title Six",
          completed: true
        }
      ]
    };

    // result = await axios.get("http://jsonplaceholder.typicode.com/todos/");
    this.setState({ todos: result.data });
  }

  addTask() {
    console.log(this.state);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos[this.state.todos.length - 1].id + 1,
          title: this.state.newTaskTitle,
          completed: false
        }
      ],
      newTaskTitle: ""
    });
  }

  render() {
    const deleteItem = (id) =>
      this.setState({
        todos: this.state.todos.filter((item) => item.id !== id)
      });
    //  const deleteItem = id => this.setState({todos: this.state.todos.filter(item => item.id !== id)});
    // console.log(deleteItem)

    return (
      <div className="container">
        <h1 style={{ "text-align": "center", "margin-top": "20px" }}>Tasks</h1>
        <button
          className="tasks"
          onClick={this.addTask}
          style={{
            "font-size": "17px",
            "margin-left": "100px",
            padding: "6px",
            marginRight: "30px",
            "font-weight": "700",
            "background-color": "#2b4dba",
            color: "white",
            border: "none",
            "border-radius": "6px"
          }}
        >
          Add Task
        </button>
        <input
          style={{
            padding: "3px"
          }}
          type="text"
          value={this.state.newTaskTitle}
          onChange={(e) => this.setState({ newTaskTitle: e.target.value })}
        />
        {this.state.todos.length > 0 ? (
          <div
            style={{
              width: "80%",
              margin: "0 auto",
              "margin-top": "20px",
              "margin-bottom": "10px"
            }}
          >
            {this.state.todos.map((todo) => (
              <ul className="list-group list-group-horizontal  ">
                <li
                  className="list-group-item    align-items-center  "
                  style={{
                    display: "flex",
                    "flex-direction": "row",
                    "justify-content": "space-between",
                    width: "100%",
                    "font-family": "auto",
                    "font-weight": "500",
                    "font-size": "19px"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      "flex-direction": "row",
                      width: "80%"
                    }}
                  >
                    <div>{todo.id}</div>
                    <div style={{ marginLeft: "15px" }}>{todo.title}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      "flex-direction": "row",
                      "justify-content": "space-between",
                      width: "40%"
                    }}
                  >
                    <div>{"" + todo.completed + ""}</div>
                    <div>
                      <button
                        style={{
                          marginLeft: "15px",
                          "padding-left": "10px",
                          "padding-right": "10px",
                          "background-color": "#ff1212",
                          border: "none",
                          "border-radius": "5px",
                          color: "black"
                        }}
                        onClick={() => deleteItem(todo.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        ) : (
          <div className="spinner-border text-primary" role="status"></div>
        )}
      </div>
    );
  }
}
export default Tasks;
