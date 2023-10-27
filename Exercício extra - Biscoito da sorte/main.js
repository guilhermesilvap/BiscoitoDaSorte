const firstScreen = document.querySelector(".first-screen")
const secondScreen = document.querySelector(".second-screen")
const fortuneCookie = document.querySelector(".fortune-cookie")
const openOtherCookie = document.querySelector(".btn-open-other")
const phrases = ["Viva como se fosse morrer amanhã, aprendar como se fosse viver para sempre", "Aquilo que te pertence jamais erra o caminho para te encontrar", "Toda sensação de perda vem da falsa sensação de posse", "Paz não é a ausência de conflitos. É administrar os conflitos em paz", "O que você foca cresce, o que você esquece desaparece", "É melhor conquistar a si mesmo do que vencer mil batalhas","Não há esperança sem medo e nem medo sem esperança", "Felicidade é a compreensão lógica do mundo e da vida", "Não importa o que as pessoas pensam. Se você acredita que vale a pena, lute por isso.", "Quando você sabe quem é não precisa provar nada a ninguém"]




fortuneCookie.addEventListener('click', openCookie)
openOtherCookie.addEventListener('click', openOther)



function openCookie(){
    let phrasesWindow = document.querySelector("#phrases")
    phrasesWindow.innerHTML =`${phrases[Math.round(Math.random()*9)]}`
    firstScreen.classList.add('hide')
    secondScreen.classList.remove('hide') 
}

function openOther(){
    firstScreen.classList.remove('hide')
    secondScreen.classList.add('hide') 
}