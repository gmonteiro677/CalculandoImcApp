import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 30,
    alignItems: 'center',
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },

  form: {
    width: '100%'
  },
  formLabel: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20
  },
  input: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#eeeeee',
    height: 40,
    margin: 12,
    paddingLeft: 10,
    marginHorizontal: 22
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#0288d1',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30
  },
  textButtonCalculator: {
    fontSize: 20,
    color: '#ffffff'
  },
  errorMessagem: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20
  },
  exhibitionResultImc: {
    width: '100%',
    height: '50%'
  },
  listImc: {
    marginTop: 20
  },
  resultItem: {
    fontSize: 22,
    color: '#000',
    height: 50,
    width: '100%',
    paddingRight: 20
  },
  textresultItemList: {
    fontSize: 16
  },
  textButtonLimpar: {
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    backgroundColor: '#0288d1',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginTop: 50,
    marginBottom: 20
  }
})

export default styles
