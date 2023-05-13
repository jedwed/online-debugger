"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeDir = exports.rootDir = void 0;
const path_1 = __importDefault(require("path"));
const rootDir = path_1.default.resolve(__dirname, '..', '..');
exports.rootDir = rootDir;
const codeDir = path_1.default.resolve(rootDir, 'code');
exports.codeDir = codeDir;
