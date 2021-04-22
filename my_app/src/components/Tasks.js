import React, { Component } from "react";
import axios from "axios";

class Tasks extends Component {
  state = { todos: [] };



  async componentDidMount() {
    let result = await axios.get("http://jsonplaceholder.typicode.com/todos");
    this.setState({ todos: result.data });
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {

    const newItem = this.state.todos;
    console.log(newItem);
  }
  render() {
    const deleteItem = id => this.setState({ todos: this.state.todos.filter(item => item.id !== id) });
    //  const deleteItem = id => this.setState({todos: this.state.todos.filter(item => item.id !== id)});
    console.log(deleteItem)

    return (
      <div className="container">
        <h1 style={{ 'text-align': 'center', 'margin-top': '20px' }}>Tasks</h1>
        <button className="tasks" onClick={() => this.addItem(() => deleteItem())}
          style={{
            'font-size': '17px', 'margin-left': '100px', 'padding': '6px', 'font-weight': '700',
            'background-color': '#2b4dba', 'color': 'white', 'border': 'none',
            'border-radius': '6px'
          }}>Add Tasks</button>
        {this.state.todos.length > 0 ? (
          <div style={{ width: '80%', margin: '0 auto', 'margin-top': '10px', 'margin-bottom': '10px' }}>{this.state.todos.map(todo => (
            <ul className="list-group list-group-horizontal  ">
              <li className="list-group-item    align-items-center  " style={{
                display: 'flex', 'flex-direction': 'row', 'justify-content': 'space-between', width: '100%', 'font-family': 'auto', 'font-weight': '500',
                'font-size': '19px'
              }}>
                <div style={{ display: 'flex', 'flex-direction': 'row', width: '80%' }}>
                  <div>
                    {todo.id}
                  </div>
                  <div style={{ marginLeft: '15px' }}>
                    {todo.title}
                  </div>
                </div>
                <div style={{ display: 'flex', 'flex-direction': 'row', 'justify-content': 'space-between', width: '24%' }}>
                  <div>
                    {'' + todo.completed + ''}
                  </div>
                  <div>
                    <button style={{
                      marginLeft: '15px', 'padding-left': '10px', 'padding-right': '10px', 'background-color': '#ff1212', 'border': 'none', 'border-radius': '5px',
                      'color': 'black'
                    }} onClick={() => deleteItem(todo.id)}>Delete</button>
                  </div>


                </div>

              </li>
            </ul>

          ))}
          </div>
        ) : (
          <div className="spinner-border text-primary" role="status">

          </div>
        )
        }
      </div>
    )
  }
}
export default Tasks;