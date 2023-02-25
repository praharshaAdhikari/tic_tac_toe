import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Box from './Box';

export default function App() {
  const [gameOver, setGameOver] = useState(false);
  const [gameState, setGameState] = useState(['-','-','-','-','-','-','-','-','-']);
  const [gameWinner, setGameWinner] = useState('');
  const [oTurn, setOTurn] = useState(true);

  const isGameOver = ()=> {
    let count = 0;
    for (let i = 0; i < gameState.length; i++) if (gameState[i] === '-') count++;
    if (count === 0 || gameWinner !== '') return true;
    return false;
  }

  const checkWinner = ()=> {
    if (gameState[0] === 'O' && gameState[1] === 'O' && gameState[2] === 'O') setGameWinner('O');
    if (gameState[3] === 'O' && gameState[4] === 'O' && gameState[5] === 'O') setGameWinner('O');
    if (gameState[6] === 'O' && gameState[7] === 'O' && gameState[8] === 'O') setGameWinner('O');
    if (gameState[0] === 'O' && gameState[3] === 'O' && gameState[6] === 'O') setGameWinner('O');
    if (gameState[1] === 'O' && gameState[4] === 'O' && gameState[7] === 'O') setGameWinner('O');
    if (gameState[2] === 'O' && gameState[5] === 'O' && gameState[8] === 'O') setGameWinner('O');
    if (gameState[0] === 'O' && gameState[4] === 'O' && gameState[8] === 'O') setGameWinner('O');
    if (gameState[2] === 'O' && gameState[4] === 'O' && gameState[6] === 'O') setGameWinner('O');

    if (gameState[0] === 'X' && gameState[1] === 'X' && gameState[2] === 'X') setGameWinner('X');
    if (gameState[3] === 'X' && gameState[4] === 'X' && gameState[5] === 'X') setGameWinner('X');
    if (gameState[6] === 'X' && gameState[7] === 'X' && gameState[8] === 'X') setGameWinner('X');
    if (gameState[0] === 'X' && gameState[3] === 'X' && gameState[6] === 'X') setGameWinner('X');
    if (gameState[1] === 'X' && gameState[4] === 'X' && gameState[7] === 'X') setGameWinner('X');
    if (gameState[2] === 'X' && gameState[5] === 'X' && gameState[8] === 'X') setGameWinner('X');
    if (gameState[0] === 'X' && gameState[4] === 'X' && gameState[8] === 'X') setGameWinner('X');
    if (gameState[2] === 'X' && gameState[4] === 'X' && gameState[6] === 'X') setGameWinner('X');
  }

  const touchFunction = (value) => {
    let tempGameState = [...gameState];
    tempGameState[value] = oTurn ? 'O' : 'X';
    setGameState(tempGameState);
    setOTurn(state => !state);
  }

  useEffect(()=> {
    checkWinner();
    setGameOver(isGameOver);
  }, [gameState, gameWinner]);

  const handleReset = ()=> {
    setGameOver(false);
    setGameState(['-','-','-','-','-','-','-','-','-']);
    setGameWinner('');
    setOTurn(true);
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      padding: 50,
      borderWidth: 8,
      borderColor: (gameOver ? '#faffa1' : oTurn ? '#FF0035' : '#6ef5ff'),
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    gameOver: {
      color: '#ffffff',
      fontSize: 60,
      marginVertical: 40,
    }
  });

  if (!gameOver)
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.row}>
          <Box oTurn={oTurn} handleTouch={touchFunction} value={0}/>
          <Box oTurn={oTurn} handleTouch={touchFunction} value={1}/>
          <Box oTurn={oTurn} handleTouch={touchFunction} value={2}/>
        </View>
        <View style={styles.row}>
          <Box oTurn={oTurn} handleTouch={touchFunction} value={3}/>
          <Box oTurn={oTurn} handleTouch={touchFunction} value={4}/>
          <Box oTurn={oTurn} handleTouch={touchFunction} value={5}/>
        </View>
        <View style={styles.row}>
          <Box oTurn={oTurn} handleTouch={touchFunction} value={6}/>
          <Box oTurn={oTurn} handleTouch={touchFunction} value={7}/>
          <Box oTurn={oTurn} handleTouch={touchFunction} value={8}/>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
  else 
  return(
    <View style={styles.container}>
      <Text style={styles.gameOver}>{`${gameWinner === '' ? 'GAME OVER' : `${gameWinner} WON!`}`}</Text>
      <View style={styles.playAgain}>
        <Button
          title='PLAY AGAIN'
          onPress={handleReset}
        >
        </Button>
      </View>
    </View>
  );
};
