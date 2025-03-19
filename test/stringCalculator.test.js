const StringCalculator = require("../src/string_calculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.Add("")).toBe(0);
  });

  test("should return the number itself when one number is provided", () => {
    expect(calculator.Add("1")).toBe(1);
  });

  test("should return the sum of two numbers separated by a comma", () => {
    expect(calculator.Add("1,2")).toBe(3);
  });

  test("should handle an unknown amount of numbers", () => {
    expect(calculator.Add("1,2,3,4,5")).toBe(15);
  });

  test("should handle new lines between numbers", () => {
    expect(calculator.Add("1\n2,3")).toBe(6);
  });

  test("should support different custom delimiters", () => {
    expect(calculator.Add("//;\n1;2")).toBe(3);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => calculator.Add("1,-2,3")).toThrow("negatives not allowed: -2");
  });

  test("should ignore numbers greater than 1000", () => {
    expect(calculator.Add("2,1001")).toBe(2);
  });

  test("should support delimiters of any length", () => {
    expect(calculator.Add("//[***]\n1***2***3")).toBe(6);
  });

  test("should support multiple delimiters", () => {
    expect(calculator.Add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("should support multiple delimiters with length longer than one character", () => {
    expect(calculator.Add("//[***][%%%]\n1***2%%%3")).toBe(6);
  });
});
