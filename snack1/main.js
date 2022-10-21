/* Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const automobili = [
    {
        marca: 'marca1',
        modello: 'modello1',
        alimentazione: 'benzina'
    },
    {
        marca: 'marca2',
        modello: 'modello2',
        alimentazione: 'diesel'
    }, {
        marca: 'marca3',
        modello: 'modello3',
        alimentazione: 'gpl'
    }, {
        marca: 'marca4',
        modello: 'modello4',
        alimentazione: 'benzina'
    }, {
        marca: 'marca5',
        modello: 'modello5',
        alimentazione: 'gpl'
    }, {
        marca: 'marca6',
        modello: 'modello6',
        alimentazione: 'benzina'
    }, {
        marca: 'marca7',
        modello: 'modello7',
        alimentazione: 'diesel'
    }, {
        marca: 'marca8',
        modello: 'modello8',
        alimentazione: 'benzina'
    }, {
        marca: 'marca9',
        modello: 'modello9',
        alimentazione: 'diesel'
    },
    {
        marca: 'marca10',
        modello: 'modello10',
        alimentazione: 'gpl'
    }

]


const autoBenzina = automobili.filter(automobile => {
    if (automobili.alimentazione === 'benzina') {
        return true
    }
});
console.log(autoBenzina);
