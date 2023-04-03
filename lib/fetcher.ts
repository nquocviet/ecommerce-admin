import { AxiosProxyConfig } from 'axios'

import axiosInstance from './axios'

const fetcher = (url: string, config?: AxiosProxyConfig) => {
	return axiosInstance.get(url, config).then((res) => res.data)
}

export default fetcher
