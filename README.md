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

  const renderItem = ({item, row, col}) => {
    <Text>{item}</Text>
  }

  const keyExtractor = (item, row, col) => item 
 
  return (
    <HorizontalFlatList
      data={data}
      numRows={2}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  )
}
```

## Props

Props are inherited form FlatListProps, but with the following changes:
- **renderItem** - Overidden to include the column number
``` ts
({ item: ItemT, row: number, col: number}) => JSX.Element
```

- **keyExtractor** - Overidden to include the column number
``` ts
(item: ItemT, row: number, col: number) => string
```
   
- **numRows** - Number of items in each column
- **columnStyle** - ViewStyle  for the column view
 
- **horizontal** - Removed
- **numColumns** - Removed
 
[npm-image]: https://img.shields.io/npm/v/@idiosync/horizontal-flatlist
[npm-url]: https://www.npmjs.com/package/@idiosync/horizontal-flatlist
