const objects = [
	{ id: 1, title: "Guida a JavaScript", slug: "guida-a-javascript" },
	{ id: 2, title: "Introduzione a React", slug: "introduzione-a-react" },
	{ id: 3, title: "Come usare Node.js", slug: "come-usare-nodejs" },
	{ id: 4, title: "SEO per principianti", slug: "seo-per-principianti" },
];

const getInitials = (nomeCompleto) => {
	const [nome, cognome] = nomeCompleto
		.split(" ")
		.filter((string) => string !== "");
	return `${nome.charAt(0)}${cognome.charAt(0)}`;
};

const createSlug = (title) => {
	if (!title) {
		throw new Error("Titolo non valido");
	}
	return title.toLowerCase().replaceAll(" ", "-");
};

const average = (arr) => {
	arr.forEach((numero) => {
		if (isNaN(numero))
			throw new Error("La funzione average accetta solo numeri!");
	});

	return arr.reduce((acc, num) => acc + num, 0) / arr.length;
};

const isPalindrome = (str) => {
	const reverseStr = [...str].reverse().join("");
	return str === reverseStr;
};

function findPostById(arr, id) {
	if (isNaN(id)) throw new Error("Id non valido, deve essere un numero");
	const post = arr.find((post) => post.id === id);
	if (!post.id || !post.title || !post.slug)
		throw new Error("Il post deve contenere le chiavi id, title e slug");
	console.log(post);

	return post;
}

module.exports = {
	getInitials,
	createSlug,
	average,
	isPalindrome,
	findPostById,
};
