import { PrismaClient } from "@prisma/client"
import { Authenticator } from "./Authenticator"
import { ParamsError } from "../errors/ParamsError"
import { UserLoading } from "../models/User"

export class GetInfoUser {
	private DescryptToken = async (token: string): Promise<string | void> => {
		const authenticator = new Authenticator()
		const result = authenticator.getTokenDecrypt(token)
		return result?.id
	}
	public InfoUser = async (token: string): Promise<UserLoading | void> => {
		const id = await this.DescryptToken(token)

		if (!id) {
			throw new ParamsError("Token inválido!")
		}
		const prisma = new PrismaClient()
		const resultData = await prisma.userPublic.findFirst({
			where: { id },
		})

		if (resultData) {
			const data: UserLoading = {
				imgPerfil: resultData?.imgPerfil,
				name: resultData?.name,
				rgb: resultData?.rgb,
			}
			return data
		}
		throw new ParamsError("Deu Algum problema no banco de dados")
	}
}
