var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(Ralph){kittens.push(Ralph);return kittens}
function destructivelyPrependKitten(Bob){kittens.unshift(Bob);return kittens}
function destructivelyRemoveLastKitten(Ralph){kittens.pop(Ralph);return kittens}
function destructivelyRemoveFirstKitten(Bob){kittens.shift(Bob);return kittens}
function appendKitten