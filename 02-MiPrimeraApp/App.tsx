import React from 'react';
import {SafeAreaView} from 'react-native';
// import {FlexScreen} from './src/screens/FlexScreen';
import {TareaScreen} from './src/screens/TareaScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen />  */}
      <TareaScreen />
    </SafeAreaView>
  );
};
