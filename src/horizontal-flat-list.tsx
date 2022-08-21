import React, { Fragment } from 'react'
import { HorizontalListColumn } from './horizontal-list-column'
import {
  FlatListProps,
  FlatList,
  StyleProp,
  ViewStyle,
  ListRenderItem,
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

  const convertedProps = {
    ...props,
    data: chunk(props.data, props.numRows),
    renderItem: renderItems,
    keyExtractor: undefined,
    horizontal: true,
  } as FlatListProps<ItemT[]>

  return <FlatList {...convertedProps} />
}
