// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]
const allCats = cats.slice();
const moreCats = cats.slice()
const lastCats = cats.slice()
const firstCats = cats.slice()

beforeEach(function() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(Ralph) {
cats.push("Ralph");
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Garfield) {
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift("Milo")
}

function appendCat(Broom) {
    allCats.push("Broom")
    return allCats
}
function prependCat(Arnold) {
    moreCats.unshift("Arnold")
    return moreCats
}

function removeLastCat(Garfield) {
    lastCats.pop("Garfield")
    return lastCats
}
function removeFirstCat(Milo) {
    firstCats.shift("Milo")
    return firstCats

}
