import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export interface AuthenticatorData {
	id: string
}

export class Authenticator {
	public generateToken = (input: AuthenticatorData): string => {
		const token = jwt.sign(input, process.env.JWT_KEY as string)
		return token
	}
	public getTokenDecrypt = (token: string): AuthenticatorData | null => {
		try {
			const decrypt = jwt.verify(token, process.env.JWT_KEY as string)
			return decrypt as AuthenticatorData
		} catch (error) {
			return null
		}
	}
}
