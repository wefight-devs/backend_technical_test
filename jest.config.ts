import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    transform: {
      "^.+\\.(t|j)s$": "ts-jest",
    },
    reporters: ["default", "jest-junit"],
    testEnvironment: "node"
  };
};
