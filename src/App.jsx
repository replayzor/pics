import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";
import SearchBar from "./components/SearchBar";

function App() {
	const handleSubmit = (term) => {
		console.log("Do a search with", term);
	};

	return (
		<div>
			<SearchBar handleSubmit={handleSubmit} />
		</div>
	);
}

export default App;
