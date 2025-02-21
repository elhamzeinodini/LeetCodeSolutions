const { bendingSnake } = require("./script");

describe("bendingSnake", () => {
  test("moves length must be equal to 7", () => {
    moves = "FFFFFFF"
    expect(moves.length).toBe(7)
  })

  test("snake keeps going forward without dying", () => {
    expect(bendingSnake("FFFFFFF")).toBe("00000000\n11111111");
  });

  test("snake goes forward , turns left and then keeps forward", () => {
    expect(bendingSnake("FFLFFFF")).toBe("00011111\n11100000");
  });

  test("snake rambles around", () => {
    expect(bendingSnake("FLFRFLF")).toBe("00110011\n11001100");
  });

  test("snake is out having fun but dies", () => {
    expect(bendingSnake("FRFFFFF")).toBe("DEATH");
  })

  test("snake rambles around, hahaha", () => {
    expect(bendingSnake("FLFFFFF")).toBe("00111111\n11000000");
  });

  test("poor snake dies", () => {
    expect(bendingSnake("FRFRFFF")).toBe("DEATH");
  });

  test("snake keeps forward then dies", () => {
    expect(bendingSnake("FFFFFFR")).toBe("DEATH");
  });
});
