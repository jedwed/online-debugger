"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = void 0;
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
const util_1 = __importDefault(require("util"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const paths_1 = require("../config/paths");
const execPromise = util_1.default.promisify(child_process_1.exec);
function compile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.body.code) {
            return res.status(400).json({ error: 'No code given' });
        }
        const newFile = (0, uuid_1.v4)();
        fs_1.default.writeFileSync(path_1.default.resolve(paths_1.codeDir, `${newFile}.c`), req.body.code);
        // const timer = setTimeout(() => {
        //   execPromise(`docker kill ${container}`);
        // }, 5000);
        try {
            const { stdout } = yield execPromise(`cd ${paths_1.codeDir} && gcc -ggdb ${newFile}.c -o ${newFile} && ./${newFile}`);
            execPromise(`cd ${paths_1.codeDir} && rm ${newFile}.c ${newFile}`);
            // clearTimeout(timer);
            res.status(200).json({ stdout });
        }
        catch (error) {
            execPromise(`cd ${paths_1.codeDir} && rm -f ${newFile}.c ${newFile}`);
            res.status(400).json(error);
        }
    });
}
exports.compile = compile;
