import axios from "axios";

const searchImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos/", {
		headers: {
			Authorization: "Client-ID BSuA-l1kuQYl8EC2r8JvWDpDhTi-cSNrdXwM3Ripvkc",
		},
		params: {
			query: term,
		},
	});

	return response.data.results;
};

export default searchImages;
