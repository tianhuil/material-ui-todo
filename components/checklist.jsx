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
import {Card, CardTitle, CardText} from 'material-ui/Card';

// const Item = () => (

//   <TextField
//     hintText="Hint Text"
//   />
// )

const todos = [
  { name: "foo", done: true },
  { name: "bar", done: false }
]

export default () => (
  <Card style={{margin: "24px" }}>
    <CardTitle title="Todos" subtitle="Todo List" />
    <CardText>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Done</TableHeaderColumn>
            <TableHeaderColumn>Item</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          { todos.map(todo =>
          <TableRow>
            <TableRowColumn>
              <Checkbox
                checked={todo.done}
              />
            </TableRowColumn>
            <TableRowColumn>{todo.name}</TableRowColumn>
          </TableRow>
          )}
        </TableBody>
      </Table>
    </CardText>
  </Card>
);