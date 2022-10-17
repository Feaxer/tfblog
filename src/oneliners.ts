import { strict as assert } from "node:assert";
import { log } from "node:console";

export const randomBoolean = () => Math.random() >= 0.5;
export const isEven = (value: number) => value % 2 === 0;
export const isOdd = (value: number) => value % 2 === 0;
export const unique = (arr: Array<any>) => [...new Set(arr)];
export const isWeekend = (date: Date) => [0, 6].indexOf(date.getDay()) !== -1;
export const isArray = (arr: Array<any>) => Array.isArray(arr);
export const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
export const randomString = () => Math.random().toString(36).slice(2);
export const diffDates = (date: Date, date2: Date, denominator: number) => Math.floor(Math.abs(date.getTime() - date2.getTime()) / denominator);
export const diffWeeks = (date: Date, date2: Date) => diffDates(date, date2, 7 * 24 * 60 * 60 * 1000);
export const diffDays = (date: Date, date2: Date) => diffDates(date, date2, 24 * 60 * 60 * 1000);
export const diffHours = (date: Date, date2: Date) => diffDates(date, date2, 60 * 60 * 1000);
export const diffMinutes = (date: Date, date2: Date) => diffDates(date, date2, 60 * 1000);
export const diffSeconds = (date: Date, date2: Date) => diffDates(date, date2, 1000);

function test() {
    log(diffWeeks(new Date(2022, 5, 10), new Date(2022, 5, 12)));
    log(diffDays(new Date(2022, 5, 10), new Date(2022, 5, 12)));
    log(diffHours(new Date(2022, 5, 10), new Date(2022, 5, 12)));
    log(diffMinutes(new Date(2022, 5, 10), new Date(2022, 5, 12)));
    log(diffSeconds(new Date(2022, 5, 10), new Date(2022, 5, 12)));
}

test();
