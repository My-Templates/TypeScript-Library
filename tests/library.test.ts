import sampleLibrary from "../src/library";

describe("Base tests", () => {
  it("should create Library", () => {
    expect(sampleLibrary()).toBe("Hello World!");
  });
});
