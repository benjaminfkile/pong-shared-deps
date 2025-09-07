"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateUtils = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
exports.dateUtils = {
    now: () => {
        return dayjs_1.default.utc().toISOString();
    },
    isValid: (v) => {
        return (0, dayjs_1.default)(v).isValid();
    }
};
