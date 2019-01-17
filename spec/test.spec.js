import { square } from "../src/foo.js";

describe("square", () => {
  it("square", () => {
    expect(square(3)).toEqual(9);
  });
});
