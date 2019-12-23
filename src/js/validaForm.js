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
const nomeErro = document.getElementById("nome-erro");

const email = document.getElementById("email");
const emailErro = document.getElementById("email-erro");

const assunto = document.getElementById("assunto");
const assuntoErro = document.getElementById("assunto-erro");

const mensagem = document.getElementById("mensagem");
const mensagemErro = document.getElementById("mensagem-erro");

const inputs = document.querySelectorAll(".input-field");

inputs.forEach(input => {
  input.addEventListener("blur", validaForm);
});

function validaForm() {
  // Nome
  if (nome.value == "" || nome.value === null) {
    nome.style.borderColor = "red";
    nomeErro.innerHTML = "Campo obrigatório";
    temErro = true;
  } else if (nome.value.length < 3) {
    nomeErro.innerHTML = "Nome deve ter mais que 3 caracteres";
  } else {
    nome.style.borderColor = "#805ad5";
    nomeErro.innerHTML = "";
    temErro = false;
  }

  // Email
  const regexEmail = /\S+@\S+\.\S+/;
  if (email.value === "" || email.value === null) {
    email.style.borderColor = "red";
    emailErro.innerHTML = "Campo obrigatório";
    temErro = true;
  } else if (!regexEmail.test(email.value)) {
    emailErro.innerHTML = "Email inválido";
  } else {
    email.style.borderColor = "#805ad5";
    emailErro.innerHTML = "";
    temErro = false;
  }

  // Assunto
  if (assunto.value == "" || assunto.value === null) {
    assunto.style.borderColor = "red";
    assuntoErro.innerHTML = "Campo obrigatório";
    temErro = true;
  } else {
    assunto.style.borderColor = "#805ad5";
    assuntoErro.innerHTML = "";
    temErro = false;
  }

  //  Mensagem
  if (mensagem.value == "" || mensagem.value === null) {
    mensagem.style.borderColor = "red";
    mensagemErro.innerHTML = "Campo obrigatório";
    temErro = true;
  } else if (mensagem.value.length < 20) {
    mensagemErro.innerHTML = "Mensagem deve ter pelo menos 20 caracteres";
  } else {
    mensagem.style.borderColor = "#805ad5";
    mensagemErro.innerHTML = "";
    temErro = false;
  }
}
