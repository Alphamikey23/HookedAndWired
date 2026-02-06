describe("fetchUserData", () => {
  const mockUserData = {
      1: { name: "Alice", age: 25, city: "New York" },
      2: { name: "Bob", age: 30, city: "Los Angeles" },
      3: { name: "Charlie", age: 35, city: "Chicago" }
  };

  it("should return user data for a valid userId", (done) => {
      fetchUserData(1, (error, data) => {
          expect(error).toBeNull();
          expect(data).toEqual(mockUserData[1]);
          done(); // Notify Jasmine that the async test is complete
      });
  });

  it("should return an error message for an invalid userId", (done) => {
      fetchUserData(5, (error, data) => {
          expect(error).toBe("User not found");
          expect(data).toBeNull();
          done(); // Notify Jasmine that the async test is complete
      });
  });

  it("should simulate async behavior with a delay", (done) => {
      const startTime = Date.now();
      fetchUserData(1, (error, data) => {
          const elapsedTime = Date.now() - startTime;
          expect(elapsedTime).toBeGreaterThanOrEqual(2000); // Expect delay of at least 2 seconds
          done();
      });
  });
});

describe("displayUserData", () => {
  it("should log user details when data is provided", () => {
      spyOn(console, "log"); // Spy on console.log
      const userData = { name: "Alice", age: 25, city: "New York" };

      displayUserData(null, userData);

      expect(console.log).toHaveBeenCalledWith("Name: Alice, Age: 25, City: New York");
  });

  it("should log an error message when an error is provided", () => {
      spyOn(console, "log"); // Spy on console.log
      const errorMessage = "User not found";

      displayUserData(errorMessage, null);

      expect(console.log).toHaveBeenCalledWith("Error:", errorMessage);
  });
});
