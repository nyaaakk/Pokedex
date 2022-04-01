"use strict";

const verifEmail = (email) => {

  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

};

const verifPassword = (password) => {

  return password.match(/(?=.{8,})/);

};

async function verifForm(){

  let champEmail = document.getElementById("email");
  let champPassw = document.getElementById("password");
  let champPassw2 = document.getElementById("password-confirm");
  let boite = document.getElementById("terms");
  let progressBar = document.getElementsByClassName("progress-bar");

  let chat1 = document.getElementById("k1");
  let chat2 = document.getElementById("k2");
  let chat3 = document.getElementById("k3");
  let chien1 = document.getElementById("p1");
  let chien2 = document.getElementById("p2");
  let chien3 = document.getElementById("p3");
  let autre1 = document.getElementById("o1");
  let autre2 = document.getElementById("o2");
  let autre3 = document.getElementById("o3");

  let res = true;

  if(!verifEmail(champEmail.value)){
    res = false;
    alert("Entrer un email valide");
  }
  if(!verifPassword(champPassw.value)){
    res = false;
    alert("Entrer un mot de passe valide");
  }
  if(champPassw.value != champPassw2.value){
    res = false;
    alert("Le mot de passe de confirmation ne corresponde pas");
  }
  if(boite.checked != true){
    res = false;
    alert("Vous etes un robot !");
  }
  if(chien1.checked == true || chien2.checked == true || chien3.checked == true || autre1.checked == true || autre1.checked == true || autre1.checked == true){
    res = false;
    alert("Le captcha n est pas valide");
  }
  if(chat1.checked == false || chat2.checked == false || chat3.checked == false){
    res = false;
    alert("le captcha n est pas valide");
  }

  switch (force()){
    case 0 :
      progressBar.style.width = '0%';
      progressBar.style.backgroundColor = 'grey';
      progressBar.innerHTML = 'nul';
    case 1 :
      progressBar.style.width = '33%';
      progressBar.style.backgroundColor = 'red';
      progressBar.innerHTML = 'faible';
    case 2 :
      progressBar.style.width = '66%';
      progressBar.style.backgroundColor = 'yellow';
      progressBar.innerHTML = 'bon';
    case 3 :
      progressBar.style.width = '100%';
      progressBar.style.backgroundColor = 'green';
      progressBar.innerHTML = 'tres puissant';
    default :

  }
  
};

async function force(){

  let champPassw = document.getElementById("password");
  let points = 0;

  if(champPassw.value.includes(/[a-z]/)){
    points++;
  }
  if(champPassw.value.includes(/[A-Z]/)){
    points++;
  }
  if(champPassw.value.includes(/[0-9]/)){
    points++;
  }
  if(champPassw.value.includes(/[&#@$?!]/)){
    points++;
  }

  return points;
}