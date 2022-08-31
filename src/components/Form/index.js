import React, { useState } from 'react'
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList
} from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messagemImc, setMessagemImc] = useState('Preencha o peso e a altura')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')
  const [errorMessagem, setErrorMessagem] = useState(null)
  const [imcList, setImcList] = useState([])

  function imcCalculator() {
    let heightFormat = height.replace(',', '.')
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2)
    setImcList(arr => [...arr, { id: new Date().getTime(), imc: totalImc }])
    setImc(totalImc)
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate()
      setErrorMessagem('Campo obrigatório*')
    }
  }

  function limparListImc() {
    setImcList([])
    setImc(null)
    setTextButton('Calcular')
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessagemImc('Seu imc é igual:')
      setTextButton('Calcular Novamente')
      setErrorMessagem(null)
    } else {
      verificationImc()
      setImc(null)
      setTextButton('Calcular')
      setMessagemImc('Preencha o peso e a altura')
    }
  }
  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessagem}>{errorMessagem}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.36"
            keyboardType="numeric"
          />
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessagem}>{errorMessagem}</Text>
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
        </Pressable>
      ) : (
        <View style={styles.exhibitionResultImc}>
          <ResultImc messagemResultImc={messagemImc} resultImc={imc} />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => {
              validationImc()
            }}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImc}
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.resultItem}>
              <Text style={styles.textresultItemList}>Resultado IMC =</Text>
              {item.imc}
            </Text>
          )
        }}
        keyExtractor={item => {
          item.id
        }}
      />
      <TouchableOpacity
        style={styles.textButtonLimpar}
        onPress={() => {
          limparListImc()
        }}
      >
        <Text style={styles.textButtonCalculator}>Limpar</Text>
      </TouchableOpacity>
    </View>
  )
}
