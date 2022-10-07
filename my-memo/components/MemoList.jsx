import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import MemoItem from './MemoItem';

const MemoList = ({ myMemo, onRemove, onDone }) => {
  const renderItem = ({item}) => (
    <MemoItem 
      id={item.id} 
      content={item.content} 
      dt={item.dt} 
      done={item.done}
      onRemove={onRemove}
      onDone={onDone} />
  )
  return (
    <FlatList 
      data={myMemo}
      style={styles.list}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});

export default MemoList