/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const nomi = ['Anna', 'FRANCESCO', 'alessandro']

//trasformo tutti i nomi in lowercase 
const newNomi = nomi.map((nome) => {
    return nome.toLocaleLowerCase()
});

console.log(newNomi);

