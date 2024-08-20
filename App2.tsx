import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import {fetchData, toggleList} from './components/Redux/action';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.items);
  const showList = useSelector(state => state.data.showList);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <View style={styles.main}>
      <View style={!showList ? styles.showBtn : styles.hideBtn}>
        <Button
          title={showList ? 'Hide List' : 'Show List'}
          onPress={() => dispatch(toggleList())}
          color={showList ? 'blue' : ''}
        />
      </View>
      {showList && (
        <View>
          <Text style={styles.heading}>API List</Text>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showBtn: {},
  hideBtn: {
    marginTop: 30,
    marginLeft: 330,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 5,
    margin: 5,
    backgroundColor: 'skyblue',
    borderRadius: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  body: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import Component1 from './components/Component1';
// import Component2 from './components/Component2';

// const App2 = () => {
//   const data = [
//     {
//       id: 1,
//       name: 'sujan',
//       color: 'blue',
//       price: '100',
//       image: '../assets/dp.png',
//     },
//   ];
//   return (
//     <View style={styles.main}>
//       <Component1 />
//       {data.map(item => (
//         <Component2 item={item} />
//       ))}
//     </View>
//   );
// };

// export default App2;

// const styles = StyleSheet.create({
//   main: {},
// });
