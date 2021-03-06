import weightToGrams from "./weightToGrams";
import { expect } from "chai";

describe("weightToGrams", function() {
  it("should convert properly", async () => {
    const tests = [
      {
        toConvert: "1",
        expected: 453
      },
      {
        toConvert: "1lb",
        expected: 453
      },
      {
        toConvert: "1kg",
        expected: 1000
      },
      {
        toConvert: "1stone",
        expected: 6350
      },
      {
        toConvert: "20 stone",
        expected: 127005
      }
    ];
    for (let i = 0; i < tests.length; i++) {
      const converted = await weightToGrams(tests[i].toConvert);
      expect(converted).to.equal(tests[i].expected);
    }
  });
});
