const body = document.querySelector('body');


const button_banana = document.createElement('button')
button_banana.innerText = 'Banana'

const button_morango = document.createElement('button')
button_morango.innerText = 'Morango'


const button_goiaba = document.createElement('button')
button_goiaba.innerText = 'Goiaba'


const button_pessego = document.createElement('button')
button_pessego.innerText = 'Pêssego'

const form = document.querySelector('form')
form.id = 'form_fruits'


const article = document.createElement('article');

form.appendChild(button_banana);
form.appendChild(button_morango);
form.appendChild(button_goiaba);
form.appendChild(button_pessego);