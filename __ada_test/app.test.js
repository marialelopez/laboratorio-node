import chalk from "chalk";

import { add, showResult } from "../add";

test("Export of add function", () => {
  expect(add.name).toBe("add");
});

test("Add of two numbers work", () => {
  expect(add(2, 5)).toBe(7);
});

test("Using chalk to create green message if number >= 5", () => {
  expect(showResult(2, 5)).toBe(chalk.green(7));
});

test("Using chalk to create red message if number < 5", () => {
  expect(showResult(2, 1)).toBe(chalk.red(3));
});
