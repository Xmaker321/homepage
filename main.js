
const age = 14;

const firstName = 'Franek';


console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector('.page-header__heading--js')

header.innerHTML = `Nazywam się ${firstName} i mam ${age} lat`

console.log(header.style)

header.style.color = 'red';