import { useState } from "react";

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
		<div>
			<form onSubmit={handleFormSubmit}>
				<input onChange={handleChange} value={term} />
			</form>
		</div>
	);
};

export default SearchBar;
