import type { TISODateString } from "./types";
export declare const dateUtils: {
    now: () => TISODateString;
    isValid: (v: string) => v is TISODateString;
};
