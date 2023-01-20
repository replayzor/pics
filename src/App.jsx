import { useState } from "react";

// components
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
	const [images, setImages] = useState([]);

	const handleSubmit = async (term) => {
		const result = await searchImages(term);

		setImages(result);
	};

	return (
		<div>
			<SearchBar handleSubmit={handleSubmit} />
			<ImageList images={images} />
		</div>
	);
}

export default App;
