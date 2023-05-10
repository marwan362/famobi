import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

interface Game {
  id: string;
  title: string;
  thumbnail: string;
  platform: string;
  genre: string;
}

interface Props {
  games: Game[];
}

const GameList: React.FC<Props> = ({games}) => {
  const renderItem = ({item}: {item: Game}) => (
    <View style={styles.gameContainer}>
      <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.platform}>{item.platform}</Text>
        <Text style={styles.genre}>{item.genre}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={games}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  gameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 5,
    margin: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  platform: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#666',
  },
  genre: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
});

export default GameList;
