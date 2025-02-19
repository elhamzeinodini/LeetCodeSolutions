const { findValidString } = require("./script");

describe("findValidString", () => {
  test("include s and exclude t", () => {
    const s = "abc";
    const t = "xyz";
    const len = 10;
    const result = findValidString(s, t, len);

    expect(result).not.toBe(-1);
    expect(result.includes(s)).toBe(true);
    expect(result.includes(t)).toBe(false);
    expect(result.length).toBe(len);
  });

  test("returns -1 when len < s.length", () => {
    const result = findValidString("hello", "xyz", 3);
    expect(result).toBe(-1);
  });

  test("returns s when len === s.length", () => {
    const result = findValidString("cod", "xyz", 3);
    expect(result).toBe("cod");
  });

  test("performance check for large input", () => {
    const start = Date.now();
    findValidString("code", "xyz", 1000);
    const end = Date.now();
    expect(end - start).toBeLessThan(500);
  });
});


// npx jest findValidString.test.js