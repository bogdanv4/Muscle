// Validacija forme
$.validator.addMethod(
  "regex",
  function (value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
  },
  "Only numbers [0-9]"
);
$("#form").validate({
  rules: {
    firstname: {
      required: true,
      minlength: 3,
    },
    adress: {
      required: true,
      email: true,
    },
    tel: {
      required: true,
      regex: "[0-9]",
    },
    password: {
      required: true,
      minlength: 8,
    },
  },
  messages: {
    firstname: {
      required: "Please enter your nickname!",
      minlength: "Nickname must have min 3 characters!",
    },
    adress: {
      required: "Please enter your e-mail!",
      email: "E-mail must be valid - @ is required!",
    },
    tel: {
      required: "Please enter your phone number!",
    },
    password: {
      required: "Please enter your password!",
      minlength: "Password must have min 8 characters!",
    },
  },
});

// Ispis podataka pokupljenih iz formi
function popUp() {
  let ime = document.forms["form"]["firstname"].value;
  let mail = document.forms["form"]["adress"].value;
  let sifra = document.forms["form"]["password"].value;
  let telefon = document.forms["form"]["tel"].value;
  alert(ime + "\n" + mail + "\n" + sifra + "\n" + telefon);
}

// Trenutno vreme u levom uglu menija
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
