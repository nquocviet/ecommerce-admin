import { promises as fs } from 'fs'
import path from 'path'

import { sleep } from '@/utils'

export default async function handler(req, res) {
	const type = req.query?.type
	const loading = req.query?.loading !== 'false'

	await sleep(loading ? 1000 : 0)

	const jsonDirectory = path.join(process.cwd(), 'data')
	const response = await fs.readFile(jsonDirectory + `/${type}.json`, 'utf8')
	const { data } = JSON.parse(response)
	res.status(200).json(data)
}
