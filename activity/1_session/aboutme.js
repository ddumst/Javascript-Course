console.log("hello world");

const fullname = 'Diego Becerra';
const proffesion = 'Software Engineer';
const position = 'Full Stack Developer';

const personalDescription = `Hola, me llamo ${fullname} y me dedico a ${proffesion}. Estoy cursando este Máster porque me gustaría trabajar en ${position}`

console.log(personalDescription);

console.log("later");



const formatter = {
  prefix: "Hello ",

  append(cadena) {
    console.log(this.prefix + cadena);
  },
};

formatter.append("World")

formatter.prototype.toLowerString = function(cadena) {
  console.log(cadena.toLowerCase());
};