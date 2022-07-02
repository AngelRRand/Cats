import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { Provider } from 'react-redux';
import store from './src/redux/store';

import Navigation from './Navigation';



export default function App() {
  return (
//
    <Provider store={store}>

      <Navigation/>

    </Provider>
    
    );
  }

