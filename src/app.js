let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dominio = [".com", ".es", ".eu"];

pronoun.forEach(function(elemento) {
  adj.forEach(function(elemento1) {
    noun.forEach(function(elemento2) {
      dominio.forEach(function(elemento3) {
        console.log(elemento + elemento1 + elemento2 + elemento3);
      });
    });
  });
});
