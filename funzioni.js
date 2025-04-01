const getInitials = (nome) => {
	const name = nome.split(" ", 2);
	const initials = name.map((p) => p.charAt(0));
	return initials;
};

const createSlug = (str) => {
	return str.toLowerCase();
};

const average = (arr) => {
	const average = arr.reduce((acc, num) => acc + num, 0) / arr.length;
	return average;
};

module.exports = {
	getInitials,
	createSlug,
	average,
};
