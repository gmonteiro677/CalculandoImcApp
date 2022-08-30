import React, { useState } from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messagemImc, setMessagemImc] = useState('Preencha o peso e a altura')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2))
  }

  function validationImc() {
    try {
      if (weight != null && height != null) {
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessagemImc('Seu imc é igual:')
        setTextButton('Calcular Novamente')
        return
      }
      setImc()
      setTextButton('Calcular')
      setMessagemImc('Preencha o peso e a altura')
    } catch (error) {
      console.log('erro: ', error)
    }
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.36"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75.565"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => {
            validationImc()
          }}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messagemResultImc={messagemImc} resultImc={imc} />
    </View>
  )
}
