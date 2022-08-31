import React from 'react'
import { View, Text, TouchableOpacity, Share } from 'react-native'
import styles from './style'

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: 'Meu imc hoje é: ' + props.resultImc
    })
  }

  return (
    <View style={styles.resultImc}>
      <View style={styles.boxSharebutton}>
        <Text style={styles.information}>{props.messagemResultImc}</Text>
        <Text style={styles.numberImc}>{props.resultImc}</Text>
        <TouchableOpacity style={styles.shared} onPress={onShare}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
