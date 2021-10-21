import axios from "axios";

const instance = axios.create({
	// API of cloud function URL
	baseURL: "http://localhost:5001/clone-5943a/us-central1/api",
});

export default instance;
