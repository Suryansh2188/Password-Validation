let pass = document.getElementById('password')
let s = document.getElementById('display')

let icon = document.getElementById('image')
icon.addEventListener('mouseover', show)
icon.addEventListener('mouseout', hide)

function show(e) {
  var type = 'password' ? 'text' : 'password'
  pass.setAttribute('type', type)
  icon.src = 'vi.png'
}

function hide(e) {
  var type = 'password' ? 'password' : 'text'
  pass.setAttribute('type', type)
  icon.src = 'hide.png'
}


pass.addEventListener('focus', display)
function no_display() {
  s.classList.add('lists')
}

pass.addEventListener('blur', no_display)
function display() {
  s.classList.remove('lists')
}



pass.addEventListener('keyup', validPass)
function validPass(e) {


  //Length of the password check
  let len = document.getElementById('length')
  if (pass.value.length > 6) {
    len.classList.remove("invalid");
    len.classList.add("valid");
  } else {
    len.classList.remove("valid");
    len.classList.add("invalid");
  }



  //Uppercase Letter Check
  var upper_case = document.getElementById('UpperCase')
  var u_cs = /[A-Z]/;
  if (pass.value.match(u_cs)) {
    upper_case.classList.remove("invalid");
    upper_case.classList.add("valid");
  } else {
    upper_case.classList.remove("valid");
    upper_case.classList.add("invalid");
  }


  //Lowercase Letters Check
  var lower_case = document.getElementById('lowercase')
  var l_cs = /[a-z]/;
  if (pass.value.match(l_cs)) {
    lower_case.classList.remove("invalid");
    lower_case.classList.add("valid");
  } else {
    lower_case.classList.remove("valid");
    lower_case.classList.add("invalid");
  }


  //Numbers Check
  var number = document.getElementById('num')
  var numbers = /[0-9]/;
  if (pass.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  //Special Character Check
  var special_char = document.getElementById('sc')
  var s_cs = /[!@#$%^&*]/;
  if (pass.value.match(s_cs)) {
    special_char.classList.remove("invalid");
    special_char.classList.add("valid");
  } else {
    special_char.classList.remove("valid");
    special_char.classList.add("invalid");
  }

}