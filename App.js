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


const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values:[0,0],
  current:0,
}


export default class App extends Component {

  state ={ ...initialState}

  addDigit = n =>{
    if(n === "." && this.state.displayValue.includes(".")){
      return 
    }

    const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay
    const currentValue = clearDisplay ? "" : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay:false})


    if(n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }


  }

  clearMemory = () =>{
    this.setState({...initialState})
  }
  setOperation = operation =>{
    if(this.state.current === 0){
      this.setState({operation,current:1, clearDisplay:true})
    }
  }





  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.button}>
          <Button buttonDouble  label='AC' onClick={this.clearMemory} />
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


