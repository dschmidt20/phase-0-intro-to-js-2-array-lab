// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
]
function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const appended = [...cats, "Broom"]
    return appended
}
function prependCat(name){
    const prepended = ["Arnold", ...cats]
    return prepended
}
function removeLastCat(){
    const removedLast = cats.slice(0,2)
    return removedLast
}


function removeFirstCat(){
    const removedFirst = cats.slice(1)

 
   return removedFirst
}