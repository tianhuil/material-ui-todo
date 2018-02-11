import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, name: "foo", done: true },
        { id: 1, name: "bar", done: false }
      ]
    }
  }

  toggleTodo(id) {
    const index = this.state.todos.findIndex((todo) => todo.id == id)
    const todo = this.state.todos[index]
    const newTodos = this.state.todos
    newTodos[index] = Object.assign({}, todo, {done: !todo.done})
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Done</TableHeaderColumn>
            <TableHeaderColumn>Item</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          { this.state.todos.filter(this.props.filterFunc).map(todo =>
          <TableRow key={todo.id}>
            <TableRowColumn>
              <Checkbox
                checked={todo.done}
                onCheck={this.toggleTodo.bind(this, todo.id)}
              />
            </TableRowColumn>
            <TableRowColumn>
              <div style={todo.done ? {textDecoration: "line-through"} : {} }>
                {todo.name}
              </div>
            </TableRowColumn>
          </TableRow>
          )}
        </TableBody>
      </Table>
    )
  }
}
