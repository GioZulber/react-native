import React from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefresghing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefresghing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefresghing(false);
      setData('Hola Mundo');
    }, 1500);
  };

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          tintColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

// const stylesScreen = StyleSheet.create({});
