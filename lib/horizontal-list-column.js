"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorizontalListColumn = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const HorizontalListColumn = ({ items, constainerStyle }) => (<react_native_1.View style={constainerStyle}>{items}</react_native_1.View>);
exports.HorizontalListColumn = HorizontalListColumn;
//# sourceMappingURL=horizontal-list-column.js.map