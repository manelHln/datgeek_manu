import { describe, test, expect } from "@jest/globals";
import add from "../utils/add";


describe("testing add function", () => {
  test("adding 1 to 2", () => {
    expect(add(1, 2)).toBe(3);
  });
});
