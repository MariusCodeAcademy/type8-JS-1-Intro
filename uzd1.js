'use strict';
// 1. susikurti kintamuosius vardas, salis, megstamiausiasSkaicius, megstamiausia savaites diena
// 1 - 7
let vardas = 'Marius';
let salis = 'Thailand';
let megSk = 777;
let savDn = 6;

// 2. isvedam i konsole visus savo kintamiuosiu atskairai
console.log(vardas);
console.log(salis);

// 3. atspausdinam konsoleje savo megstamiausio skaiciau ir dienos daugyba
const daugyba = megSk * savDn;
console.log(daugyba);

// 4. atspausdinam konsoleje savo megstamiausio skaiciau is dienos sudeti

// 5. atspausdinam konsoleje naudodami kintamuosius "as esu John. noreciau keliausi i Jamaika. mano megstamiausias skaicius yra 777"
const sakinys = 'As esu ' + vardas + '. ';
const sak2 = 'Noreciau keliauti i ' + salis + '. ';
const sak3 = 'Mano megstamiausias skaicius yra ' + megSk;
console.log(sakinys + sak2 + sak3);

// render el nusitaikom i render el
const paraEl = document.getElementById('render');
// console.log(paraEl);
// pakeiciam jo texkta
paraEl.textContent = sakinys + sak2 + sak3;
// paraEl.innerHTML = sakinys + sak2 + sak3;

let y5 = 50;

// camel case
const patsMegstamiausiasManoSkaiciusYra = 777;
// snakeCase
const pats_megstamiausias_mano_Skaicius_Yra = 777;
