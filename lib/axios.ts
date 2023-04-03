import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig as AxiosRequestConfig,
} from 'axios'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
	return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
	return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
	return Promise.reject(error)
}

const API_BASE_URL = process.env.API_BASE_URL

const axiosInstance = axios.create({
	baseURL: API_BASE_URL,
})

axiosInstance.interceptors.request.use(onRequest, onRequestError)
axiosInstance.interceptors.response.use(onResponse, onResponseError)

export default axiosInstance
