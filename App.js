import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Button from './src/components/Button';
import Display from './src/components/Display';


export default class App extends Component {

  state ={
    displayValue: '0',
  }

  addDigit = n =>{
    this.setState({displayValue: n});
  }

  clearMemory = () =>{
    this.setState({displayValue:0})
  }





  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.button}>
          <Button buttonOne  label='AC' onClick={this.clearMemory} />
          <Button buttonOne label='%' onClick={this.addDigit} />
          <Button buttonOperation label='/' onClick={this.addDigit} />
          <Button label='7' onClick={this.addDigit} />
          <Button label='8' onClick={this.addDigit} />
          <Button label='9' onClick={this.addDigit} />
          <Button buttonOperation label='*' onClick={this.addDigit} />
          <Button label='4' onClick={this.addDigit}/>
          <Button label='5' onClick={this.addDigit} />
          <Button label='6' onClick={this.addDigit} />
          <Button buttonOperation label='-' onClick={this.addDigit} />
          <Button label='1' onClick={this.addDigit} />
          <Button label='2' onClick={this.addDigit} />
          <Button label='3' onClick={this.addDigit} />
          <Button buttonOperation label='+' onClick={this.addDigit} />
          <Button  buttonOne label='.' onClick={this.addDigit} />
          <Button buttonOne label='0' onClick={this.addDigit} />
          <Button buttonOperation label='=' onClick={this.addDigit} />
        </View>
      </View>
    )
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  }

});


