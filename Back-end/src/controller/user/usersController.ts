import { Request, Response } from "express"
import { UsersBusiness } from "../../business/user/usersBusiness"
import { BaseError } from "../../errors/BaseError"
import { ILoginInputDTO, ISignupInputDTO, UserToken } from "../../models/User"

export class UsersController {
	constructor(private usersBusiness: UsersBusiness) {}

	public signup = async (req: Request, res: Response) => {
		try {
			const input: ISignupInputDTO = {
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			}
			const response = await this.usersBusiness.signup(input)

			res.status(200).send(response)
		} catch (error) {
			console.log(error)
			if (error instanceof BaseError) {
				return res.status(error.statusCode).send({ message: error.message })
			}
			res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
		}
	}
	public login = async (req: Request, res: Response) => {
		try {
			const input: ILoginInputDTO = {
				email: req.body.email,
				password: req.body.password,
			}
			const response = await this.usersBusiness.login(input)
			res.status(200).send(response)
		} catch (error) {
			console.log(error)
			if (error instanceof BaseError) {
				return res.status(error.statusCode).send({ message: error.message })
			}
			res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
		}
	}
	public infoUser = async (req: Request, res: Response) => {
		try {
			const input = req.headers.authorization

			const token: UserToken = {
				token: input,
			}
			const response = await this.usersBusiness.info(token)
			res.status(200).send(response)
		} catch (error) {
			console.log(error)
			if (error instanceof BaseError) {
				return res.status(error.statusCode).send({ message: error.message })
			}
			res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
		}
	}
}
