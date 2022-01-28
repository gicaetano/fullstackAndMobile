import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//Ignorar mensagens de warning
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
//LogBox.ignoreAllLogs();//Ignore all log notifications


import Home from './src/views/Home';
import Task from './src/views/Task';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task
  })
);

export default function App() {
  return  <Routes />   
  
}
