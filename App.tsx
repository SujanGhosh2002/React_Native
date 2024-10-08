import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [showList, setShowList] = useState(false);

  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const result = await fetch(url);
    const results = await result.json();
    setData(results);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.main}>
      <View style={!showList ? styles.showBtn : styles.hideBtn}>
        <Button
          title={showList ? 'Hide List' : 'Show List'}
          onPress={() => setShowList(!showList)}
          color={showList ? 'blue' : ''}
        />
      </View>
      {showList && (
        <View>
          <Text style={styles.heading}>APIList</Text>
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
    // position: 'absolute',
    // top: 0,
    // right: 5,
    // zIndex: 1,
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
