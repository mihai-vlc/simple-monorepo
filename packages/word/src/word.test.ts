import { it, expect } from "vitest";
import { wordWrap } from "./word";

it("should return the word back if the the size is larger", () => {
    expect(wordWrap(10, "abc")).toStrictEqual(["abc"]);
});

it("should break the word in 2 pieces if the size is half the word", () => {
    expect(wordWrap(2, "abcd")).toStrictEqual(["ab", "cd"]);
});

it("should break by each character if the row size is 1", () => {
    expect(wordWrap(1, "abcd")).toStrictEqual(["a", "b", "c", "d"]);
});

it("should throw an error if the row size is 0", () => {
    expect(() => wordWrap(0, "abcd")).toThrowError();
});
