import axios from "axios";
const BASIC_AUTHENTICATION_CLIENT_ID = "oas-app";
const BASIC_AUTHENTICATION_CLIENT_SECRET = "oas@123";

// Dev
const BASE_HOST = "172.16.10.225";
export const BASE_URL = "http://" + BASE_HOST + ":8091/";
export const ADMIN_URL = "http://" + BASE_HOST + ":8091/";

const headers = {
	"Content-Type": "multipart/form-data"
};
const instance = axios.create({
	baseURL: BASE_URL,
	headers: headers
});

instance.interceptors.request.use(
	function(request) {
		request.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjM4MzY5NTksInVzZXJfaWQiOjUsInVzZXJfbmFtZSI6ImF3YWlzIiwianRpIjoiMTE1MzAxMTAyOTMzMDgyODM2NCIsImNsaWVudF9pZCI6Im9hcy1hcHAiLCJzY29wZSI6WyJ3ZWJjbGllbnQiXX0.l-CdSMRyuhFIHGHkj6vGmrwXYxVXK70dbsWkgfaoCIQ`;
		request.auth = {
			username: BASIC_AUTHENTICATION_CLIENT_ID,
			password: BASIC_AUTHENTICATION_CLIENT_SECRET
		};
		request.config = {
			headers: { "Content-Type": "multipart/form-data" }
		};
		return request;
	},
	function(error) {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	function(response) {
		return response;
	},
	function(error) {
		return Promise.reject(error);
	}
);

export default instance;
