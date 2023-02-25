import { useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

const Box = (props) => {
  const [value, setValue] = useState('');
  const handlePress = ()=> {
    if (value !== '') return;
    setValue(props.oTurn ? 'O' : 'X');
    props.handleTouch(props.value);
  }
  return(
    <TouchableNativeFeedback onPress={handlePress}>
      <View 
        style={{
          width: 80,
          height: 80,
          margin: 3,
          borderRadius: 3,
          backgroundColor: (value === '' ? (props.oTurn ? '#FF0035' : '#6ef5ff') : value === 'O' ? '#FF0035' : '#6ef5ff'),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 65,
            height: 65,
            backgroundColor: (value === '' ? (props.oTurn ? '#FF0035' : '#6ef5ff') : 'rgba(20, 20, 20, 0.7)'),
            borderRadius: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold'
            }}
          >
            {value}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default Box;