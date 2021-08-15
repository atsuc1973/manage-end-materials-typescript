import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';

function App(): JSX.Element {
  return (
    <Grid container direction="column">
      <Header />
      <div style={{ padding: 30 }}>
        <Content />
      </div>
    </Grid>
  );
}

export default App;
