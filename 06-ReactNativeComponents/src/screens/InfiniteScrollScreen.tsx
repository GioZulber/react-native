import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {useState} from 'react';
import {FadeInImage} from '../components/FadeInImage';
import {styles} from '../theme/appTheme';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/200/300`}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };

  return (
    <View style={stylesLocal.container}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={styles.globalMargin}>
            <HeaderTitle title="InfiniteScroll" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={stylesLocal.loader}>
            <ActivityIndicator size={20} color="#5856d6" />
          </View>
        )}
      />
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  container: {
    flex: 1,
  },
  textItem: {
    height: 150,
  },
  loader: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
