import { expect, describe, it } from "vitest"
import { GetInfoUser } from "../../src/services/GetInfoUser"

describe("Should get user information", () => {
	it("must return an object", async () => {
		const token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4NzQxMWM0LTkzOGUtNDI4MS05NTZmLTY0OTAwYWMyNjhmZSIsImlhdCI6MTY4NDg3MTI0Nn0.ErGWCQy-xFyWAa1upmB3bUWUKFgQxBT-HioTa0_UXiE"

		const getInfoUser = new GetInfoUser()
		const result = await getInfoUser.InfoUser(token)

		expect(typeof result).toBe("object")
	})
})
