const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaDeTodosOsNumeros = lista.reduce((previus, curremt) => {
   //console.log(previus, curremt)
    return previus + curremt
})

console.log(somaDeTodosOsNumeros)

/*const lista = []

const somaDeTodosOsNumeros = lista.reduce((previus, curremt) => {
   //console.log(previus, curremt)
    return previus + curremt
}, 0)

console.log(somaDeTodosOsNumeros)*/