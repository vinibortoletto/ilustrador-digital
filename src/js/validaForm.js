const form = document.getElementById("form");
const msgEnviada = document.getElementById("mensagem-enviada");
const bg = document.getElementById("menu-bg");
const btnEnviar = document.getElementById("btn-enviar");

let temErro = false;

form.addEventListener("submit", e => {
  e.preventDefault();

  validaForm();

  if (!temErro) {
    btnEnviar.innerHTML = "enviando";

    setTimeout(() => {
      btnEnviar.innerHTML = "enviar";
      msgEnviada.style.display = "flex";

      bg.style.display = "block";
      bg.style.opacity = ".8";
    }, 1000);
    setTimeout(() => {
      msgEnviada.style.display = "none";

      bg.style.display = "none";
      bg.style.opacity = "0";

      form.reset();
    }, 4000);
  }
});

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");
const inputs = document.querySelectorAll(".input-field");

inputs.forEach(input => {
  input.addEventListener("blur", validaForm);
});

function validaForm() {
  // Nome
  if (nome.value == "" || nome.value === null) {
    nome.style.borderColor = "red";
    temErro = true;
  } else {
    nome.style.borderColor = "#805ad5";
    temErro = false;
  }

  // Email
  const regexEmail = /\S+@\S+\.\S+/;
  if (
    email.value === "" ||
    email.value === null ||
    !regexEmail.test(email.value)
  ) {
    email.style.borderColor = "red";
    temErro = true;
  } else {
    email.style.borderColor = "#805ad5";
    temErro = false;
  }

  // Assunto
  if (assunto.value == "" || assunto.value === null) {
    assunto.style.borderColor = "red";
    temErro = true;
  } else {
    assunto.style.borderColor = "#805ad5";
    temErro = false;
  }

  //  Mensagem
  if (
    mensagem.value == "" ||
    mensagem.value === null ||
    mensagem.value.length < 20
  ) {
    mensagem.style.borderColor = "red";
    temErro = true;
  } else {
    mensagem.style.borderColor = "#805ad5";
    temErro = false;
  }
}
