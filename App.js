import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { useState } from 'react'
import StudentList from './src/screens/Lists'

export default function App() {
  const [showStatus, setShowStatus] = useState(false)

  // Hàm hiển thị nội dung theo mong muốn
  function showData(label = '', value = '') {
    return label + ': ' + value
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{showData('Họ và Tên: ', 'Đỗ Xuân Hiếu')}</Text>
      <Text style={styles.text}>{showData('MSSV: ', 'PH21411')}</Text>

      <Button
        style={styles.button}
        title={'Thêm mới'}
        onPress={() => setShowStatus(!showStatus)}
      />
      {showStatus ? (
        <>
          <TextInput style={styles.input} placeholder="Tên" />
          <TextInput style={styles.input} placeholder="Mô tả" />
          <TextInput style={styles.input} placeholder="Link" />

          <Button title={'Hủy'} onPress={() => setShowStatus(!showStatus)} />
          {showStatus ? (
            <>
              <StudentList />
            </>
          ) : null}

          <Button title={'Lưu'} />
        </>
      ) : null}

      {/* <StudentList /> */}

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  // input: {
  //   margin: 15,
  //   height: 40,
  //   borderColor: '#7a42f4',
  //   borderWidth: 1,
  // },
})
