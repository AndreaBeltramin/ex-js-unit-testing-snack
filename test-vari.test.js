const { getInitials, createSlug, average } = require("./funzioni.js");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
	expect(getInitials("Mario Rossi")).toEqual(["M", "R"]);
	expect(getInitials("aldo moro")).toEqual(["a", "m"]);
	expect(getInitials("Sara bianchi")).toEqual(["S", "b"]);
});

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
	expect(createSlug("Ciao")).toBe("ciao");
	expect(createSlug("ADDIO")).toBe("addio");
	expect(createSlug("bUoNaNoTTe")).toBe("buonanotte");
});

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
	expect(average([2, 4, 6])).toBe(4);
	expect(average([5, 10, 8, 1])).toBe(6);
});
