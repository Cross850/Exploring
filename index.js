//variaveis
//inputs
//outputs
const questionInput = document.querySelector("#questionInput")
const answerElement = document.querySelector("#answer")
const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]
function questionButton() {
  if (questionInput.value == "") {
    alert("Digite sua pergunta")
  return 
  }
  
  const random = Math.floor(Math.random() * 19)
  answerElement.innerHTML = answers[random]

  answerElement.style.opacity = 1;

  setTimeout(function() {
    answerElement.style.opacity = 0;
  }, 3000)
  return
}