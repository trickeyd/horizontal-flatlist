"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorizontalFlatList = void 0;
const react_1 = __importStar(require("react"));
const horizontal_list_column_1 = require("./horizontal-list-column");
const react_native_1 = require("react-native");
const lodash_chunk_1 = __importDefault(require("lodash.chunk"));
const HorizontalFlatList = (props) => {
    const renderItems = ({ item: items, index: col, }) => {
        const keys = items.map((item, row) => props.keyExtractor(item, row, col));
        return (<horizontal_list_column_1.HorizontalListColumn key={keys.join('-')} constainerStyle={props.columnStyle} items={items.map((item, row) => (<react_1.Fragment key={keys[row]}>
            {props.renderItem({ item, row, col })}
          </react_1.Fragment>))}/>);
    };
    const convertedProps = Object.assign(Object.assign({}, props), { data: (0, lodash_chunk_1.default)(props.data, props.numRows), renderItem: renderItems, keyExtractor: undefined, horizontal: true });
    return <react_native_1.FlatList {...convertedProps}/>;
};
exports.HorizontalFlatList = HorizontalFlatList;
//# sourceMappingURL=horizontal-flat-list.js.map