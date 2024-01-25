import {Search as SearchIcon} from '@assets/Icons';
import {colors} from '@theme/colors';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import EveIconText from './EveIconText';
import EveLayanaText from './EveLayanaText/EveLayanaText';

interface ISearchBar {}

const SearchBar: FC<ISearchBar> = () => {
  return (
    <View style={styles.searchBarContainer}>
      <EveIconText icon={<SearchIcon width={20} height={20} color="#64748B" />}>
        <EveLayanaText fontColors={'#64748B'}>Search here</EveLayanaText>
      </EveIconText>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.blueContainer2,
  },
});

export default SearchBar;
