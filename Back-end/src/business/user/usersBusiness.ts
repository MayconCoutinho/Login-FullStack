import { UsersDataBase } from "../../dataBase/user/usersDataBase"
import {
	ILoginInputDTO,
	ILoginOutputDTO,
	ISignupInputDTO,
	ISignupOutputDTO,
	User,
	UserLoading,
	UserToken,
} from "../../models/User"
import { Authenticator, AuthenticatorData } from "../../services/Authenticator"
import { HashManager } from "../../services/HashManager"
import { IdGenerator } from "../../services/IdGenerator"
import { RGBGenerator } from "../../services/RGBGenarator"
import { CheckingUserData } from "../../services/CheckingUserData"
import { GetInfoUser } from "../../services/GetInfoUser"
import { ParamsError } from "../../errors/ParamsError"

export class UsersBusiness {
	constructor(
		private usersDataBase: UsersDataBase,
		private rgbGenerator: RGBGenerator,
		private idGenerator: IdGenerator,
		private hashManager: HashManager,
		private authenticator: Authenticator,
		private checkingUserData: CheckingUserData,
		private getInfoUser: GetInfoUser
	) {}

	public signup = async (input: ISignupInputDTO): Promise<ISignupOutputDTO> => {
		const { name, email, password } = input

		await this.checkingUserData.CheckingSignup(name, email, password)

		const hashedPassword = await this.hashManager.hash(password)

		const rgb: any = this.rgbGenerator.generateRGB()
		const imgPerfil = null
		const friends = null
		const postUser = null

		const user = new User(name, email, hashedPassword, rgb, imgPerfil, friends, postUser)

		await this.usersDataBase.createUser(user)

		const id = this.idGenerator.generate()

		const payload: AuthenticatorData = { id }

		const token = this.authenticator.generateToken(payload)

		const response: ISignupOutputDTO = {
			message: "Cadastro realizado com sucesso",
			token,
		}

		return response
	}
	public login = async (input: ILoginInputDTO): Promise<ILoginOutputDTO> => {
		const { email, password } = input

		const isToken = await this.checkingUserData.CheckingLogin(email, password)

		if (isToken) {
			const response: ILoginOutputDTO = {
				message: "Login realizado com sucesso",
				token: isToken,
			}
			return response
		}
		const error: ILoginOutputDTO = {
			message: "Confira ",
			token: "false",
		}
		return error
	}
	public info = async (input: UserToken): Promise<UserLoading | void> => {
		const { token } = input

		if (!token) {
			throw new ParamsError("Não existe um token")
		}
		if (typeof token === "string") {
			const response = await this.getInfoUser.InfoUser(token)

			if (!response) {
				throw new ParamsError("Deu algo de errado")
			}
			return response
		}
	}
}
