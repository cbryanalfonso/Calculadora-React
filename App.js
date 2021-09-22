/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { tSImportEqualsDeclaration } from '@babel/types';
import React, { Component } from 'react';
//import type {Node} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Dimensions,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends Component {

  constructor() {
    super()
    this.state = {
      resultTxt: ""
    }
  }

  calculateResult() {
    const text = this.state.resultTxt


  }

  buttonPresionado(text) {
    console.log(text);
    if (text == '=') {
      return this.calculateResult()
    }

    this.setState({
      resultTxt: this.state.resultTxt + text
    })
  }

  operar(operaciones) {
    switch (operaciones) {
      case 'C':

        let text = this.state.resultTxt.split('')
        text.pop()
        //text.join('')
        this.setState({
          resultTxt: text.join('')
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
        
        
    }
  }


  render() {
    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for (let i = 0; i < 4; i++) {
      let row = []

      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity style={styles.btn} onPress={() => this.buttonPresionado(nums[i][j])}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }

      rows.push(<View style={styles.renglon}>{row}</View>)


    }
    let operaciones = ['C', '+', '-', '*', '/']
    let ops = []
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity style={styles.btn} onPress={() => this.operar(operaciones[i])}>
          <Text style={styles.btnText}>{operaciones[i]}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.resultado}>
          <Text style={styles.resultadoTxt}>{this.state.resultTxt}</Text>

        </View>
        <View style={styles.calculos}>
          <Text style={styles.calculosTxt}>324as</Text>

        </View>
        <View style={styles.botones}>
          <View style={styles.numeros}>
            {rows}

          </View>
          <View style={styles.operaciones}>
            {ops}

          </View>
        </View>


      </View>

    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultado: {
    flex: 2,
    backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  calculos: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  botones: {
    flex: 7,
    flexDirection: 'row'

  },
  numeros: {
    flex: 3,
    backgroundColor: 'purple'
  },
  operaciones: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  renglon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  resultadoTxt: {
    fontSize: 70,
    color: '#7f8c8d',
    fontWeight: 'bold',
  },
  calculosTxt: {
    fontSize: 40,
    color: '#7f8c8d',
    fontWeight: 'bold',

  },
  btn: {
    width: 106,
    height: 146,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',

  },

  btnText: {
    fontSize: 40,
    color: '#7f8c8d',
    fontWeight: 'bold',
  },



});

export default App;
