const header = document.querySelector("header");
const loginBtn = document.querySelector("header .login p");
const logSig = document.querySelector(".login-signup");
const login = document.querySelector(".login-signup .login");
const signup = document.querySelector(".login-signup .signup");
const exit = document.querySelectorAll(".login-signup .fa-xmark");
const haventAccount = document.querySelector(".login .last-elem span");
const aleadyAccount = document.querySelector(".signup .last-elem span");
const passOneEye = document.getElementById("passInp");
const passTwoEye = document.getElementById("passInpTwo");
const passThreeEye = document.getElementById("passInpThree");
const allEyes = document.querySelectorAll(".login-signup .password .fa-regular");

let passArray = [passOneEye, passTwoEye, passThreeEye];

allEyes.forEach((e) => {
  e.classList.add("fa-eye");
  e.addEventListener('click', showAndHidePass);
})

document.addEventListener("scroll", () => {
	if (scrollY >= 300) {
		header.classList.add("done");
	} else {
		header.classList.remove("done");
	}
});

loginBtn.onclick = function () {
	logSig.classList.add("hello");
	login.classList.add("hello");
  emptyInp();
};

exit.forEach((e) => {
	e.onclick = function () {
		logSig.classList.remove("hello");
		login.classList.remove("hello");
		signup.classList.remove("hello");
    emptyInp();
	};
});

haventAccount.onclick = function () {
	login.classList.remove("hello");
	signup.classList.add("hello");
  emptyInp();
};

aleadyAccount.onclick = function () {
	login.classList.add("hello");
	signup.classList.remove("hello");
  emptyInp();
};

function showAndHidePass(test) {
  let catching = test.target;
  if (catching.classList.contains("fa-eye")) {
		catching.classList.remove("fa-eye");
		catching.classList.add("fa-eye-slash");
    catching.previousElementSibling.type = 'text';
	} else if (catching.classList.contains("fa-eye-slash")) {
    catching.classList.add("fa-eye");
		catching.classList.remove("fa-eye-slash");
    catching.previousElementSibling.type = 'password';
	}
}


function emptyInp() {
  document.querySelectorAll('.login-signup input').forEach((e) => {
    e.value = "";
  })
}
