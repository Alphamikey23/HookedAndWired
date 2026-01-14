describe("Recursive Function: sumOfDigits", () => {


  it("should return 6 for input 123", () => {
    expect(sumOfDigits(123)).toBe(6); // 1 + 2 + 3 = 6
  });

  it("should return 15 for input 456", () => {
    expect(sumOfDigits(456)).toBe(15); // 4 + 5 + 6 = 15
  });

  it("should return 2 for input 1001", () => {
    expect(sumOfDigits(1001)).toBe(2); // 1 + 0 + 0 + 1 = 2
  });

  it("should return 0 for input 0", () => {
    expect(sumOfDigits(0)).toBe(0); // Base case
  });

  it("should return 9 for input 9 (single digit)", () => {
    expect(sumOfDigits(9)).toBe(9); // Single-digit input
  });

  it("should handle large numbers like 987654321 and return 45", () => {
    expect(sumOfDigits(987654321)).toBe(45); // 9 + 8 + 7 + ... + 1 = 45
  });

  it("should handle edge case of input 1", () => {
    expect(sumOfDigits(1)).toBe(1); // Single-digit edge case
  });

  it("should handle input with multiple zeroes like 100000 and return 1", () => {
    expect(sumOfDigits(100000)).toBe(1); // 1 + 0 + 0 + ... = 1
  });
});
