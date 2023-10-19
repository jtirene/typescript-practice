import { describe, expect, test } from "@jest/globals";
import { greeter } from "./hello-world";

describe("Hello world", () => {
  test("greeter", () => {
    expect(greeter("Jane User")).toBe("Hello, Jane User");
  });
});
