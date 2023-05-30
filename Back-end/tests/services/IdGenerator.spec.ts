import { expect, describe, it } from "vitest"
import { IdGenerator } from "../../src/services/IdGenerator"

describe("Generate UUID v4", () => {
	it("Should return a string with length 36 and correct format", () => {
		const response = new IdGenerator().generate()
		expect(response).toHaveLength(36)
		expect(response).toMatch(/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/)
	})
	it("Should generate different UUIDs consistently", () => {
		const uuids: string[] = []
		for (let i = 0; i < 20; i++) {
			const response = new IdGenerator().generate()

			uuids.push(response)
		}
		expect(uuids).toHaveLength(new Set(uuids).size)
	})
})
