const {
	getInitials,
	createSlug,
	average,
	findPostById,
} = require("./funzioni.js");

const objects = [
	{ id: 1, title: "Guida a JavaScript", slug: "guida-a-javascript" },
	{ id: 2, title: "Introduzione a React", slug: "introduzione-a-react" },
	{ id: 3, title: "Come usare Node.js", slug: "come-usare-nodejs" },
	{ id: 4, title: "SEO per principianti", slug: "seo-per-principianti" },
	{ id: 5, title: "SEO per principianti" },
];

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
	expect(getInitials("Mario Rossi")).toBe("MR");
	expect(getInitials("aldo moro")).toBe("am");
	expect(getInitials("Sara bianchi")).toBe("Sb");
});

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
	expect(createSlug("Ciao")).toBe("ciao");
	expect(createSlug("ADDIO")).toBe("addio");
	expect(createSlug("bUoNaNoTTe")).toBe("buonanotte");
});

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
	expect(average([2, 4, 6])).toBe(4);
	expect(average([5, 10, 8, 1])).toBe(6);
	expect(() => average([5, "ciao"])).toThrow();
});

test("La funzione createSlug sostituisce gli spazi con -.", () => {
	expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
});

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
	expect(() => isPalindrome("Anna").toBeTruthy());
});

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
	expect(() => createSlug("").toThrow("Titolo non valido"));
	expect(() => createSlug(null).toThrow("Titolo non valido"));
});

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
	expect(() =>
		findPostById(objects, 2).toEqual({
			id: 2,
			title: "Introduzione a React",
			slug: "introduzione-a-react",
		})
	);
	expect(() => findPostById(objects, "a")).toThrow(
		"Id non valido, deve essere un numero"
	);
	expect(() => findPostById(objects, 5)).toThrow(
		"Il post deve contenere le chiavi id, title e slug"
	);
});
