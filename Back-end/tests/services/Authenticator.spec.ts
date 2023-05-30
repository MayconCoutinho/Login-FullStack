import { expect, describe, it } from "vitest"
import { Authenticator } from "../../src/services/Authenticator"

describe("Generator Token", () => {
	it.skip("should generate and decode a token", async () => {
		const input = { id: "testando" }
		const resultToken = new Authenticator().generateToken(input)
		const resultDecrypt = new Authenticator().getTokenDecrypt(resultToken)

		expect(resultDecrypt?.id).toBe("testando")
	})
})
