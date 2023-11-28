/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Defino las matrices de pronombres, adjetivos y sustantivos. He sustituido 'the', 'our', 'great', 'big' y 'jogger', 'racoon' por otros
  let pronoun = ["la", "nuestra"];
  let adj = ["mejor", "gran"];
  let noun = ["combinacion", "urlimaginaria"];
  let extensions = [".com", ".net", ".us", ".io", ".org", ".es"]; // Creo nuevas extensiones, incluyendo .es

  // Array para almacenar los nombres de dominio generados
  let domains = [];

  // Bucle para recorrer cada elemento de cada matriz y crear las combinaciones
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          // Nuevo bucle para las extensiones
          let domain = pronoun[i] + adj[j] + noun[k] + extensions[l];
          domains.push(domain);
          // Genero "domain hacks" donde la extensión pued es parte del dominio
          if (extensions[l] === ".es") {
            let hackDomain =
              pronoun[i] + adj[j] + noun[k] + "pued" + extensions[l];
            domains.push(hackDomain);
          }
        }
      }
    }

    // Muestro los nombres de dominio generados en la consola
    domains.forEach(domain => {
      console.log(domain);
    });
  }
};
