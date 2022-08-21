[![NPM Version][npm-image]][npm-url]

# React Native Horizontal FlatList 

<h3>Improved horizontal FlatList for React Native - by  <a href="https://www.npmjs.com/~idiosync"><img width="100px" height="31px" valign="middle" src="https://storage.googleapis.com/idiosync-web-images/telescope/idiosync_very_small_white_bg.png"></a></h3>

Provides the ability to specify number of rows to a horizontal React Native FlatList

## Installation

yarn:

```bash
$ yarn add @idiosync/horizontal-flatlist
```

npm:

```bash
$ npm i @idiosync/horizontal-flatlist
```
 
## Usage

```js
import { HorizontalFlatList } from '@idiosync/horizontal-flatlist'

const SomeComponent = () => {
  const data = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six'
  ]

  const renderItem = () => {

  }
 
  return (
    <HorizontalFlatList numRows={2} data={data} />
  )
}
```

## Props

Props are inherited form FlatListProps, but with the following changes:
- renderItem - overidden to include the column number
  ({ item: ItemT row: number col: number}) => JSX.Element

- keyExtractor - overidden to include the column number
  (item: ItemT row: number col: number) => string

- numRows - Number of items in each column
- columnStyle - ViewStyle  for the column view
 
- horizontal - removed
- numColumns - removed
 
In addition, the following props have been added:

[npm-image]: https://img.shields.io/npm/v/@idiosync/horizontal-flatlise
[npm-url]: https://www.npmjs.com/package/@idiosync/horizontal-flatlise
 
