// start

document.querySelector("body").addEventListener("mousemove", function () {
  document.querySelector(".wrapper_form").style.top = "0";
  document.querySelector(".wrapper_form").style.transition = "2s";
});

document.querySelector(".change_theme").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("dark_other");
  //select input
  document.querySelector(".input_name").classList.toggle("dark_input");
  document.querySelector(".input_password").classList.toggle("dark_input");
  // select btn
  document.querySelector(".change_theme").classList.toggle("dark_btn");
  document.querySelector(".btn_submit").classList.toggle("dark_btn");
  document.querySelector(".btn_reset").classList.toggle("dark_btn");
  //change bg
  document.querySelector(".formes").classList.toggle("background-dark");
});
