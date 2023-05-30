import { expect, describe, it } from "vitest"
import { RGBGenerator } from "../../src/services/RGBGenarator"

describe("Generator an array with random numbers RGB", () => {
	it("should return a number between 0 and 255", () => {
		for (let i = 0; i < 20; i++) {
			const response = new RGBGenerator().generateRGB()[0]
			expect(response).toBeGreaterThanOrEqual(0)
			expect(response).toBeLessThanOrEqual(255)
		}
	})
})
