import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import CheckList from './checklist'

export default class FilterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterFunc: (todo) => true
    }
  }

  setFilter(event, value) {
    console.log(value)
    switch(value) {
      case "all":
        this.setState({
          filterFunc: (todo) => true
        })
        break
      case "notDone":
        this.setState({
          filterFunc: (todo) => ! todo.done
        })
        break;
      case "done":
        this.setState({
          filterFunc: (todo) => todo.done
        })
        break;
    }
  }

  render() {
    return (
      <Card style={{margin: "24px" }}>
        <CardTitle title="Todos" subtitle="Todo List" />
        <CardText>
          <RadioButtonGroup
            name="filterFunc"
            defaultSelected="all"
            onChange={this.setFilter.bind(this)}
          >
            <RadioButton
              value="notDone"
              label="Not Done"
            />
            <RadioButton
              value="done"
              label="Done"
            />
            <RadioButton
              value="all"
              label="All"
            />
          </RadioButtonGroup>
          <CheckList filterFunc={this.state.filterFunc}/>
        </CardText>
      </Card>
    )
  }
}

