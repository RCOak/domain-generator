pronoun.forEach(function(elemento) {
  adj.forEach(function(elemento1) {
    noun.forEach(function(elemento2) {
      dominio.forEach(function(elemento3) {
        console.log(elemento + elemento1 + elemento2 + elemento3);
      });
    });
  });
});
// for(let elemento of pronoun){
//     for(let elemento1 of adj)
//     {
//         for(let elemento2 of noun)
//             {for(let elemento3 of dominio)
//                 {
//                 console.log(elemento+ elemento1 + elemento2 + elemento3);
//                 };

//         };
//     };
// };
