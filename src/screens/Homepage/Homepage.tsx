import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Filter from '../../components/Filter/Filter';
import GameList from '../../components/GameList/GameList';
import Header from '../../components/Header/Header';
import api from '../../api/api';
import * as Constants from '../../Common/constants';

const Homepage = (): React.JSX.Element => {
  const [platform, setPlatform] = useState<undefined | string>(undefined);
  const [category, setCategory] = useState<undefined | string>(undefined);
  const [sortBy, setSortBy] = useState<undefined | string>(undefined);
  const [games, setGames] = useState([]);

  useEffect(() => {
    api
      .get('', {
        params: {
          platform,
          category,
          'sort-by': sortBy,
        },
      })
      .then(response => {
        setGames(response.data);
      })
      .catch(e => {
        console.log({e});
      });
  }, [platform, category, sortBy]);

  const onPlatformChange = useCallback((p: string) => {
    setPlatform(p === 'all' ? undefined : p);
  }, []);
  const onCategoryChange = useCallback((c: string) => {
    setCategory(c === 'all' ? undefined : c);
  }, []);
  const onSortChange = useCallback((s: string) => {
    setSortBy(s === 'all' ? undefined : s);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="famobi" />
      <Filter
        title="platform"
        options={Constants.platforms}
        onFilterSelected={onPlatformChange}
      />
      <Filter
        title="category"
        options={Constants.categories}
        onFilterSelected={onCategoryChange}
      />
      <Filter
        title="sort"
        options={Constants.sortBy}
        onFilterSelected={onSortChange}
      />
      <GameList games={games} />
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
