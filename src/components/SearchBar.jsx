import { useState } from "react";

// styles
import "./SearchBar.css";

const SearchBar = ({ handleSubmit }) => {
	const [term, setTerm] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();

		handleSubmit(term);
	};

	const handleChange = (e) => {
		setTerm(e.target.value);
	};

	return (
		<div className="search-bar">
			<form onSubmit={handleFormSubmit}>
				<label>Enter Search Term</label>
				<input onChange={handleChange} value={term} />
			</form>
		</div>
	);
};

export default SearchBar;
