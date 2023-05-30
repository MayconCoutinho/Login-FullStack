import request from "supertest"
import { expect, describe, it } from "vitest"
import { app } from "../../src"

// Teste com a plicação funcionando por completo e dando retorno (Teste de integração)

describe("GET /users", () => {
	it.skip("should get the ping", async () => {
		const response = await request(app).get("/users/perfil")
		expect(response.status).toBe(200)
		expect(response.body).toHaveProperty("message")
		expect(response.body.message).toEqual("Pong!")
	})
})

describe("POST /user/...", () => {
	it.skip("should post database of user", async () => {
		const response: any = await request(app).post("/user/create").send({
			user: "Maycon",
			email: "mayconteste@gmail.com",
			passaword: "123456",
		})
		expect(response).toBe(200)
		expect(response.body).toHaveProperty("user")
	})
})
