// document.body.innerHTML += 'daniela'.length;
// document.body.innerHTML += '<p></p>';
// document.body.innerHTML += 'martin'.toUpperCase();
// document.body.innerHTML += '<p></p>';
// document.body.innerHTML += '12'.padStart(4, '0'); // ⟶ '0012'
// document.body.innerHTML += '<p></p>';
// const den = 5 + 9;

// document.body.innerHTML += `
// <p> tohle je hezký text </p>
// <h1>Ahoj</h1>
// ${den}
// <p> ahoj </p>
// `;

/*
// CVIČENÍ - Vlastnosti a metody - Vyzkoušejte si vlastnosti a metody řetězců.
const title = 'Forrest Gump';
document.body.innerHTML += title.length;
document.body.innerHTML += '<p></p>';
document.body.innerHTML += title.toUpperCase();
document.body.innerHTML += '<p></p>';
document.body.innerHTML += title.slice(0, 5);
document.body.innerHTML += '<p></p>';
document.body.innerHTML += title.slice(7, 12);


// CVIČENÍ - E-maily - Vyzkoušejte si práci s řetězci obsahující e-mailové adresy.

const email = prompt('Zadejte svůj e-mail.');
const atIndex = email.indexOf('@');
const user = email.slice(0, atIndex);
const domain = email.slice(atIndex);
document.body.innerHTML += `
<p> ${user} </p>
<p> ${domain} </p>


// cvičení - Registrace na očkování - Zkontrolujte, zda je uživatel starší 65 let a zda má silné heslo.
const name = prompt('Zadej své jméno.');
const age = prompt('Zadej svůj věk.');
const password = prompt('Zadej heslo.');
if (age >= 65) {
  if (password.length > 8) {
    document.body.innerHTML = 'Heslo je v pořádku.';
  } else {
    document.body.innerHTML = 'Máte slabé heslo!';
  }
} else {
  document.body.innerHTML = 'Nízký věk.';
}


// cvičení - Cena vstupenky - Spočítejte cenu vstupenky do divadla.
const age2 = Number(prompt('Zadej věk.'));
const plnaCena = 12;
let cena = '';
if (age2 > 64) {
  cena = plnaCena / 2;
} else if (age2 > 26) {
  cena = plnaCena;
} else if (age2 >= 6) {
  cena = (plnaCena / 100) * 65;
} else {
  cena = 0;
}

document.body.innerHTML = `
<p>Tvá cena vstupenky bude
${Math.round(cena)}
EUR.</p>
`;
*/

// CVIČENÍ - Doručování - Vytvořte jednoduchý objednávkový systém.
const adresa = {
  street: prompt('Zadejte svou ulici.'),
  cislo: prompt('Zadejte číslo domu.'),
  town: prompt('Zadejte město.'),
  psc: prompt('Zadejte PSČ.'),
};

const content = `
<address>
  <p> ${adresa.street} ${adresa.cislo} </p>
  <p> ${adresa.psc} ${adresa.town}</p>
</address>
`;

document.body.innerHTML += content;
