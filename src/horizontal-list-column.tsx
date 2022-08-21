import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

interface Props {
  items: JSX.Element[]
  constainerStyle?: StyleProp<ViewStyle>
}

export const HorizontalListColumn = ({ items, constainerStyle }: Props) => (
  <View style={constainerStyle}>{items}</View>
)
