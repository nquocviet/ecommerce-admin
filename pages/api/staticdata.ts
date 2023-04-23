import { promises as fs } from 'fs'
import path from 'path'

export default async function handler(req, res) {
	const type = req.query?.type
	const jsonDirectory = path.join(process.cwd(), 'data')
	const response = await fs.readFile(jsonDirectory + `/${type}.json`, 'utf8')
	const { data } = JSON.parse(response)
	res.status(200).json(data)
}
