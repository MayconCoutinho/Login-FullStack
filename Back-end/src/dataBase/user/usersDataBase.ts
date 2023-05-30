import { IUserDB, User } from "../../models/User"
import { PrismaClient } from "@prisma/client"

export class UsersDataBase {
	public toUserDBModel = (user: User): IUserDB => {
		return {
			name: user.getName(),
			email: user.getEmail(),
			password: user.getPassword(),
			rgb: user.getRGB(),
			imgPerfil: user.getImgPerfil(),
			friends: user.getFriends(),
			postUser: user.getPostUser(),
		}
	}
	public createUser = async (user: any) => {
		const { email, name, rgb, password } = this.toUserDBModel(user)

		const prisma = new PrismaClient()

		await prisma.userPublic.create({
			data: {
				email,
				name,
				imgPerfil: "",
				rgb: `${rgb}`,
				password,
			},
		})
	}
}
