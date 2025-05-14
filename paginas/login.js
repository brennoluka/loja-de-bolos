// trocar formulário
function toggleForm() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
}

// data
function formatDate(event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, "");
  if (value.length <= 2) {
    input.value = value;
  } else if (value.length <= 4) {
    input.value = value.substring(0, 2) + "/" + value.substring(2);
  } else {
    input.value =
      value.substring(0, 2) +
      "/" +
      value.substring(2, 4) +
      "/" +
      value.substring(4, 8);
  }
}

// viacep
function limpa_formulário_cep() {
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("uf").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("uf").value = conteudo.uf;
  } else {
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  var cep = valor.replace(/\D/g, "");

  if (cep != "") {
    var validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {
      document.getElementById("rua").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("uf").value = "...";

      var script = document.createElement("script");

      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      document.body.appendChild(script);
    } else {
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } else {
    limpa_formulário_cep();
  }
}

// confirmar senha
var password = document.getElementById("password"),
  confirm_password = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
  } else {
    confirm_password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// localstorage
document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("register-name").value;
    const dob = document.getElementById("dob").value;
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value;
    const nameMae = document.getElementById("register-mae").value;
    const cpf = document.getElementById("register-cpf").value;
    const celular = document.getElementById("register-cel").value;
    const telefone = document.getElementById("register-tel").value;
    const cep = document.getElementById("cep").value;
    const rua = document.getElementById("rua").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const uf = document.getElementById("uf").value;
    const login = document.getElementById("register-login").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    localStorage.setItem("name", name);
    localStorage.setItem("dob", dob);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("nameMae", nameMae);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("celular", celular);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("cep", cep);
    localStorage.setItem("rua", rua);
    localStorage.setItem("bairro", bairro);
    localStorage.setItem("cidade", cidade);
    localStorage.setItem("uf", uf);
    localStorage.setItem("login", login);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);

    console.log(localStorage);

  });

// pagina inicial
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const email = document.getElementById('login-email').value;

  localStorage.setItem('userLogin', email);

  window.location.href = '../index.html'; 
});

const userLogin = localStorage.getItem('userLogin');

if (userLogin) {
 const message = document.getElementById('popup-message');
  message.innerText = `Usuário logado: ${userLogin}`;
 const popup = document.getElementById('popup');
  popup.style.display = 'block';
 document.getElementById('popup-close').addEventListener('click', function() {
    popup.style.display = 'none';
  });
} else {
  console.log('Nenhum usuário logado.');
}

// CPF
function formatCPF(event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, "");
  if (value.length <= 3) {
    input.value = value;
  } else if (value.length <= 6) {
    input.value = value.substring(0, 3) + "." + value.substring(3); 
  } else if (value.length <= 9) {
    input.value =
      value.substring(0, 3) +
      "." +
      value.substring(3, 6) +
      "." +
      value.substring(6); 
  } else {
    input.value =
      value.substring(0, 3) +
      "." +
      value.substring(3, 6) +
      "." +
      value.substring(6, 9) +
      "-" +
      value.substring(9, 11);
  }
}