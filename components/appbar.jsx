import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class AppBarTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div>
        <AppBar
          title="Checklist App"
          onLeftIconButtonClick={this.toggleDrawer.bind(this)}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
       </div>
    )
  }
}