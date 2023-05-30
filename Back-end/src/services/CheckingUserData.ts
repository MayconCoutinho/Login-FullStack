import { ParamsError } from "../errors/ParamsError"
import { HashManager } from "./HashManager"
import { Authenticator } from "./Authenticator"
import { PrismaClient } from "@prisma/client"

export class CheckingUserData {
	// constructor(hashManager: HashManager) {}

	private GetInfoUser = async (
		email: string,
		password: string
	): Promise<{ id: string } | undefined> => {
		await this.CheckiIsEmailNotAlreadyExists(email)

		const prisma = new PrismaClient()
		const decrypt = new HashManager()

		const resultData = await prisma.userPublic.findFirst({
			where: { email },
		})

		const passwordHash = resultData?.password

		if (passwordHash) {
			const decryptResult = await decrypt.compare(password, passwordHash)

			if (!decryptResult) {
				throw new ParamsError("A senha esta errada!")
			}
			return { id: resultData.id }
		}
	}

	public CheckinName = async (name: string): Promise<void> => {
		if (typeof name !== "string") {
			throw new ParamsError("Parâmetro 'name' inválido: deve ser uma string")
		}
		if (name.length < 3) {
			throw new ParamsError("Parâmetro 'name' inválido: mínimo de 3 caracteres")
		}
	}
	public CheckinEmail = async (email: string): Promise<void> => {
		if (typeof email !== "string") {
			throw new ParamsError("Parâmetro 'email' inválido: deve ser uma string")
		}
		if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
			throw new ParamsError("Parâmetro 'email' inválido")
		}
	}
	public CheckiPassword = async (password: string): Promise<void> => {
		if (typeof password !== "string") {
			throw new ParamsError("Parâmetro 'password' inválido: deve ser uma string")
		}
		if (password.length < 6) {
			throw new ParamsError("Parâmetro 'password' inválido: mínimo de 6 caracteres")
		}
	}

	public CheckiIsEmailAlreadyExists = async (email: string): Promise<void> => {
		const prisma = new PrismaClient()

		const IsEmail = await prisma.userPublic.findFirst({
			where: { email },
		})

		if (IsEmail) {
			throw new ParamsError("O email já existe!")
		}
	}

	public CheckiIsEmailNotAlreadyExists = async (email: string): Promise<void> => {
		const prisma = new PrismaClient()

		const IsEmail = await prisma.userPublic.findFirst({
			where: { email },
		})

		if (!IsEmail) {
			throw new ParamsError("O email não existe!")
		}
	}
	public CheckiIsUserAlreadyExists = async (email: string, password: string): Promise<Boolean> => {
		this.CheckinEmail(email)
		this.CheckiPassword(password)

		const prisma = new PrismaClient()

		// O banco de dado não deveria ser aqui
		const IsEmail = await prisma.userPublic.findFirst({
			where: { email },
		})
		return !!IsEmail
	}
	public CheckingSignup = async (name: string, email: string, password: string): Promise<void> => {
		await this.CheckinName(name)
		await this.CheckinEmail(email)
		await this.CheckiPassword(password)
		await this.CheckiIsEmailAlreadyExists(email)
	}
	public CheckingLogin = async (email: string, password: string): Promise<string | false> => {
		const IsLogin = await this.GetInfoUser(email, password)

		if (IsLogin) {
			const authenticator = new Authenticator()
			const token = authenticator.generateToken(IsLogin)
			return token
		}
		return false
	}
}
