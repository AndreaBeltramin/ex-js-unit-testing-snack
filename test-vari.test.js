const {
	getInitials,
	createSlug,
	average,
	isPalindrome,
	findPostById,
	addPost,
	removePost,
} = require("./funzioni.js");

let posts;

beforeEach(() => {
	posts = [
		{ id: 1, title: "Guida a JavaScript", slug: "guida-a-javascript" },
		{ id: 2, title: "Introduzione a React", slug: "introduzione-a-react" },
		{ id: 3, title: "Come usare Node.js", slug: "come-usare-nodejs" },
		{ id: 4, title: "SEO per principianti", slug: "seo-per-principianti" },
	];
});

afterEach(() => {
	posts = [];
});

describe("Test per manipolare le stringhe", () => {
	test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
		expect(getInitials("Mario Rossi")).toBe("MR");
		expect(getInitials("aldo moro")).toBe("am");
		expect(getInitials("Sara bianchi")).toBe("Sb");
	});

	test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
		expect(isPalindrome("anna")).toBeTruthy();
		expect(isPalindrome("ciao")).toBeFalsy();
		expect(isPalindrome(" anna ")).toBeTruthy();
	});
});

describe("Test per manipolare gli array", () => {
	test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
		expect(average([2, 4, 6])).toBe(4);
		expect(average([5, 10, 8, 1])).toBe(6);
		expect(() => average([5, "ciao"])).toThrow();
	});

	test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
		expect(findPostById(posts, 2)).toEqual({
			id: 2,
			title: "Introduzione a React",
			slug: "introduzione-a-react",
		});
		expect(() => findPostById(posts, "a")).toThrow(
			"Id non valido, deve essere un numero"
		);
		expect(() => findPostById([2, 40, 14], 2)).toThrow(
			"L' array di post non è nel formato corretto"
		);
		expect(findPostById(posts, 10)).toBe(null);
	});
});

describe("Creazione di slug", () => {
	test("La funzione createSlug restituisce una stringa in lowercase.", () => {
		expect(createSlug("Ciao")).toBe("ciao");
		expect(createSlug("ADDIO")).toBe("addio");
		expect(createSlug("bUoNaNoTTe")).toBe("buonanotte");
	});

	test("La funzione createSlug sostituisce gli spazi con -.", () => {
		expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
	});

	test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
		expect(() => createSlug("")).toThrow("Titolo non valido");
		expect(() => createSlug(null)).toThrow("Titolo non valido");
	});
});

test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
	addPost(posts, {
		id: 6,
		title: "HTML e CSS",
		slug: "html-css-per-principianti",
	});
	expect(posts).toHaveLength(5);
});

test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
	removePost(posts, 2);
	expect(posts).toHaveLength(3);
});

test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.", () => {
	expect(() =>
		addPost(posts, {
			id: 2,
			title: "HTML e CSS",
			slug: "html-css-per-principianti",
		})
	).toThrow("Post con id già esistente");
	expect(() =>
		addPost(posts, {
			id: 10,
			title: "Typescript",
			slug: "come-usare-nodejs",
		})
	).toThrow("Post con slug già esistente");
});

test("Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già.", () => {
	expect(createSlug("Introduzione a React", posts)).toBe(
		"introduzione-a-react-1"
	);
});
