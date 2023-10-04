import axios from "axios";

export const ApiServices = (url: string) => {
	const headers = {
		Accept: "application/json",
		"Content-Type": "application/json",
	};

	const axiosToken = axios.create({
		baseURL: url,
		headers,
	});

	axiosToken.interceptors.request.use(
		async (config) => {
			//if (token !== null) config.headers.Authorization = `Bearer ${token}`;
			return config;
		},
		(error) => {
			Promise.reject(error);
		}
	);

	return axiosToken;
};
