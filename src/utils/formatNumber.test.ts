import { describe, expect, it } from "vitest";

import { formatNumber } from "@/utils/formatNumber";

describe("formatNumber", () => {
  it("should format numbers in billions", () => {
    expect(formatNumber(1000000000)).toBe("1B");
    expect(formatNumber(2500000000)).toBe("2B");
  });

  it("should format numbers in millions", () => {
    expect(formatNumber(1000000)).toBe("1M");
    expect(formatNumber(7500000)).toBe("7M");
  });

  it("should format numbers in thousands", () => {
    expect(formatNumber(1000)).toBe("1K");
    expect(formatNumber(5400)).toBe("5K");
  });

  it("should format numbers below 1000 as is", () => {
    expect(formatNumber(500)).toBe("500");
    expect(formatNumber(999)).toBe("999");
  });

  it("should handle edge cases properly", () => {
    expect(formatNumber(0)).toBe("0");
    expect(formatNumber(999999)).toBe("999K");
    expect(formatNumber(1000000000 - 1)).toBe("999M");
  });
});
