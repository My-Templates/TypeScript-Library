import {
  Callable,
  CallableByCallee,
  CallableByClosure,
  CallableByProxy
} from "../src/callable";

describe("Base tests", () => {
  it("should create Callable", () => {
    class ChildCallable extends Callable<string> {
      _call(...args: any[]): string {
        return `Test 1 ${args[0]}`;
      }
    }

    let x = new ChildCallable();
    let actual = x("Arg 1");
    expect(actual).toBe("Test 1 Arg 1");
  });

  it("should create CallableByBind", () => {
    class ChildCallable extends CallableByCallee<string> {
      _call(...args: any[]): string {
        return `Test 2 ${args[0]}`;
      }
    }

    let x = new ChildCallable();
    let actual = x("Arg 1");
    expect(actual).toBe("Test 2 Arg 1");
  });

  it("should create CallableByClosure", () => {
    class ChildCallable extends CallableByClosure<string> {
      _call(...args: any[]): string {
        return `Test 3 ${args[0]}`;
      }
    }

    let x = new ChildCallable();
    let actual = x("Arg 1");
    expect(actual).toBe("Test 3 Arg 1");
  });

  it("should create CallableByProxy", () => {
    class ChildCallable extends CallableByProxy<string> {
      _call(...args: any[]): string {
        return `Test 4 ${args[0]}`;
      }
    }

    let x = new ChildCallable();
    let actual = x("Arg 1");
    expect(actual).toBe("Test 4 Arg 1");
  });
});
