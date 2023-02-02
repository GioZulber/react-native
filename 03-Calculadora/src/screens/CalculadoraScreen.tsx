import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
    lastNumber,
    number,
    cleanup,
    positiveNegative,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    buildNumber,
    calculate,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {lastNumber !== '0' && (
        <Text style={styles.smallResult}>{lastNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.rowButtons}>
        <ButtonCalc text="C" color="#9b9b9b" action={cleanup} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={positiveNegative} />
        <ButtonCalc text="del" color="#9b9b9b" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={btnDividir} />
      </View>
      <View style={styles.rowButtons}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={btnMultiplicar} />
      </View>
      <View style={styles.rowButtons}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnRestar} />
      </View>
      <View style={styles.rowButtons}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnSumar} />
      </View>
      <View style={styles.rowButtons}>
        <ButtonCalc text="0" buttonWidth action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
// grisOscuro: #2D2D2D
// NARANJA:#FF9427
// Gris claro; #9b9b9b
