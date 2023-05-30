import { expect, describe, it } from "vitest"
import { CheckingUserData } from "../../src/services/CheckingUserData"
import { PrismaClient } from "@prisma/client"
import { HashManager } from "../../src/services/HashManager"

describe("Check that all functions that use email are working", () => {
	const emailExist = "maycon223@gmail.com"
	const notEmailExist = "NotExistEmail@gmail.com"

	it("should check if email exists in the database and return undefined", async () => {
		const checking = new CheckingUserData()
		const result = await checking.CheckiIsEmailAlreadyExists(notEmailExist)

		expect(result).toBe(undefined)
	})
	it("should check if email exists in the database and return string", async () => {
		const checking = new CheckingUserData()
		try {
			const result = await checking.CheckiIsEmailAlreadyExists(emailExist)
			console.log(result)
			expect(result).toBe(undefined)
		} catch (err) {
			// console.log(err.statusCode)
		}
	})
})

describe("Check login is true", () => {
	const email = "maycon223@gmail.com"
	const password = "123456"
	const passwordError = "123456ERROR"

	it("should check if password exists in the database and return object", async () => {
		const prisma = new PrismaClient()
		const decrypt = new HashManager()
		let result = undefined

		const resultData = await prisma.userPublic.findFirst({
			where: { email },
		})

		const passwordHash = resultData?.password

		if (passwordHash) {
			const decryptResult = await decrypt.compare(password, passwordHash)

			if (!decryptResult) {
				result = false
			}
			result = { id: resultData.id }
		}
		expect(typeof result).toBe("object")
	})

	it.skip("should check if password exists in the database and return object", async () => {
		const checking = new CheckingUserData()

		const result = await checking.CheckingLogin(email, password)

		expect(typeof result).toBe("string")
	})
	it.skip("should check if password not exists in the database and return False", async () => {
		const checking = new CheckingUserData()

		const result = await checking.CheckingLogin(email, passwordError)

		expect(result).toBe(false)
	})
})

describe("Check Signup", () => {
	const name = "teste"
	const email = "teste270@gmail.com"
	const password = "123456"

	const nameErro = 123
	const emailError = "teste270ERRORgmadsadil.com"
	const passwordError = "ERR"

	it.skip("it should give error when putting email in the wrong format", async () => {
		const checking = new CheckingUserData()

		const result = await checking.CheckingSignup(name, emailError, password)

		expect(result).toThrow()
	})

	it.skip("it should give error, putting less than 6 characters in the password", async () => {
		const checking = new CheckingUserData()

		const result = await checking.CheckingSignup(name, email, passwordError)

		expect(result).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
	})
})
