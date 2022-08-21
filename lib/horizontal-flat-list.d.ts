import { FlatListProps, StyleProp, ViewStyle } from 'react-native';
export interface HorizontalFlatListProps<ItemT> extends Omit<FlatListProps<ItemT>, 'horizontal' | 'numColumns' | 'renderItem' | 'keyExtractor'> {
    numRows: number;
    renderItem: ({ item, row, col, }: {
        item: ItemT;
        row: number;
        col: number;
    }) => JSX.Element;
    keyExtractor: (item: ItemT, row: number, col: number) => string;
    columnStyle?: StyleProp<ViewStyle>;
}
export declare const HorizontalFlatList: <ItemT extends unknown>(props: HorizontalFlatListProps<ItemT>) => JSX.Element;
