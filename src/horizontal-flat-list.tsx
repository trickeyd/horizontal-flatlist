import React, { Fragment } from 'react'
import { HorizontalListColumn } from './horizontal-list-column'
import { FlatListProps, FlatList, StyleProp, ViewStyle } from 'react-native'
import { chunk } from 'lodash.chunk'

interface Props<ItemT>
  extends Omit<
    FlatListProps<ItemT>,
    'horizontal' | 'numColumns' | 'renderItem' | 'keyExtractor'
  > {
  numRows: number
  renderItem: ({
    item,
    row,
    col,
  }: {
    item: ItemT
    row: number
    col: number
  }) => JSX.Element
  keyExtractor: (item: ItemT, row: number, col: number) => string
  columnStyle?: StyleProp<ViewStyle>
}

export const HorizontalFlatList = <ItemT extends any>(
  props: Props<ItemT>,
): JSX.Element => {
  const renderItems = ({ item: items, index: col }) => {
    const keys = items.map((item, row) => props.keyExtractor(item, row, col))
    return (
      <HorizontalListColumn
        key={keys.join('-')}
        constainerStyle={props.columnStyle}
        items={items.map((item: ItemT, row) => (
          <Fragment key={keys[row]}>
            {props.renderItem({ item, row, col })}
          </Fragment>
        ))}
      />
    )
  }

  return (
    <FlatList
      {...props}
      data={chunk(props.data, props.numRows)}
      renderItem={renderItems}
      keyExtractor={undefined}
      horizontal
    />
  )
}
