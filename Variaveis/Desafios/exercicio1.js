const myName = "Link";

const birthCity = "Hyrule";

let birthYear = 1986;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;
console.log(birthYear);;

birthCity = "The Sky";
console.log(birthCity);
// TypeError: Assignment to constant variable.

//Recebemos esse erro porque tentamos mudar o valor de uma constante e isso não é permitido, visto que elas sempre devem manter sua atribuição original - caso contrário, não deveriam ser constantes.

