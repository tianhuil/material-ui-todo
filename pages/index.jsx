import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBarTop from '../components/appbar'
import FilterCard from '../components/filtercard'
import {blueGrey500, blueGrey700, blueGrey100} from 'material-ui/styles/colors';
import Head from 'next/head'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    primary3Color: blueGrey100,
  },
}, {
  avatar: {
    borderColor: null,
  }
});


export default () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Head>
      <title>Todo App</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>
      <AppBarTop/>
      <FilterCard />
      <style jsx global>{`
        body {
          margin: 0
        }
      `}</style>
    </div>
  </MuiThemeProvider>
);
