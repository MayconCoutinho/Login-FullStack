import { expect, describe, it } from "vitest"
import { HashManager } from "../../src/services/HashManager"

describe("Generator password bcrypt", () => {
	it("Should return a passoword true", async () => {
		const password = "maycon123"
		const response = await new HashManager().hash(password)
		expect(response).toBeTruthy()
	})
	it("should generate different hashes for the same password", async () => {
		const password = "maycon123"
		const hashes: string[] = []
		for (let i = 0; i < 20; i++) {
			const response = await new HashManager().hash(password)
			hashes.push(response)
		}
		expect(hashes).toHaveLength(new Set(hashes).size)
	})
	it("should generate different hashes for different passwords", async () => {
		const password1 = "maycon123"
		const password2 = "maycon456"
		const hash1 = await new HashManager().hash(password1)
		const hash2 = await new HashManager().hash(password2)
		expect(hash1).not.toBe(hash2)
	})
})

describe("Conference password is bcrypt", () => {
	it("should generate a hash that can be verified with bcrypt.compare", async () => {
		const password = "maycon123"
		const hash = await new HashManager().hash(password)
		const isMatch = await new HashManager().compare(password, hash)

		expect(isMatch).toBe(true)
	})
})
