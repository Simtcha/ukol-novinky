/* Manipulace s DOMem 
Pomocí document.querySelector vyberte element body a uložte si jej do proměnné bodyElement. 
Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí na bílou a maximální šířku na 60rem.
Vyberte element h1 a nastavte mu (v JavaScriptu) třídu na news__title. Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
Pomocí atributu id vyberte element obsahující první zprávu. Přidejte do jeho atributu class třídu post--main. 
První zpráva by tak měla mírně změnit svůj styl.
Pomocí CSS selektoru vyberte obrázek ve třetí zprávě (id zprávy je zprava3) a změňte jeho atribut src na obrázek images/zprava3-novy.jpg. */



const bodyElement = document.querySelector("body")
const zpravy = document.querySelector("news")
const nadpis = document.querySelector("h1")
const prvniZprava = document.querySelector("#zprava1")
const obrazek = document.querySelector("#zprava3 img")


bodyElement.style.backgroundColor = "#e9e9e9"
zpravy.style.backgroundColor = "white" 
zpravy.style.maxWidth = "60rem"

nadpis.classList.add('news__title')
nadpis.textContent = "Aktualni novinky"
prvniZprava.classList.add("post--main")
obrazek.src = "images/zprava3-novy.jpg."

