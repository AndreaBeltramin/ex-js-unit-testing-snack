const getInitials = (nomeCompleto) => {
	const [nome, cognome] = nomeCompleto
		.split(" ")
		.filter((string) => string !== "");
	return `${nome.charAt(0)}${cognome.charAt(0)}`;
};

const createSlug = (title, arr) => {
	if (!title) {
		throw new Error("Titolo non valido");
	}
	let slug = title.toLowerCase().replaceAll(" ", "-");
	if (arr) {
		for (let i = 0; i < arr.length; i++) {
			const post = arr[i];
			if (post.slug === slug) {
				return slug + "-1";
			}
		}
		return slug;
	}
	return slug;
};

const average = (arr) => {
	arr.forEach((numero) => {
		if (isNaN(numero))
			throw new Error("La funzione average accetta solo numeri!");
	});

	return arr.reduce((acc, num) => acc + num, 0) / arr.length;
};

const isPalindrome = (str) => {
	const reverseStr = [...str.trim()].reverse().join("");
	return str.trim() === reverseStr;
};

function findPostById(arr, id) {
	if (isNaN(id)) throw new Error("Id non valido, deve essere un numero");
	arr.forEach((post) => {
		if (
			post.id === undefined ||
			post.title === undefined ||
			post.slug === undefined
		)
			throw new Error("L' array di post non è nel formato corretto");
	});
	return arr.find((post) => post.id === id) || null;
}

function addPost(arr, post) {
	const ids = arr.map((p) => p.id);
	const slugs = arr.map((p) => p.slug);
	if (ids.includes(post.id)) throw new Error("Post con id già esistente");
	if (slugs.includes(post.slug)) throw new Error("Post con slug già esistente");

	arr.push(post);
}

function removePost(arr, id) {
	const index = arr.findIndex((post) => post.id === id);
	arr.splice(index, 1);
}

module.exports = {
	getInitials,
	createSlug,
	average,
	isPalindrome,
	findPostById,
	addPost,
	removePost,
};
