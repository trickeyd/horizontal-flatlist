import * as React from 'react'
import { Fragment } from 'react'
import {
  FlatListProps,
  FlatList,
  StyleProp,
  ViewStyle,
  ListRenderItem,
  View,
} from 'react-native'
import chunk from 'lodash.chunk'

export interface HorizontalFlatListProps<ItemT>
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
  props: HorizontalFlatListProps<ItemT>,
): JSX.Element => {
  const renderItems: ListRenderItem<ItemT[]> = ({
    item: items,
    index: col,
  }) => {
    const keys = items.map((item: ItemT, row: number) =>
      props.keyExtractor(item as ItemT, row, col),
    )
    return (
      <View key={keys.join('-')} style={props.columnStyle}>
        {items.map((item: ItemT, row) => (
          <Fragment key={keys[row]}>
            {props.renderItem({ item, row, col })}
          </Fragment>
        ))}
      </View>
    )
  }

  const convertedProps = {
    ...props,
    data: chunk(props.data, props.numRows),
    renderItem: renderItems,
    keyExtractor: undefined,
    horizontal: true,
  } as FlatListProps<ItemT[]>

  return <FlatList {...convertedProps} />
}
