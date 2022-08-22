"use scrict";

document.addEventListener("DOMContentLoaded", () => {


  const headerProfileBtn = document.querySelector('.header-profile__btn');
  const headerProfileMenu = document.querySelector('.header-profile__menu');  
  const toggleMenu = function () {
    headerProfileMenu.classList.toggle('header-profile__menu--shown')
}

headerProfileBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == headerProfileMenu || headerProfileMenu.contains(target);
  const its_btnMenu = target == headerProfileBtn;
  const menu_is_active = headerProfileMenu.classList.contains("header-profile__menu--shown");

  if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
  }
});
  

//Функция для очистки зачения инпута при нажатии на крестик
function cleanInputIcon(inputValueId, iconId) {
  const inputValue = document.getElementById(inputValueId).value;
  const icon = document.getElementById(iconId);

  if (inputValue <= 0) icon.classList.remove("active");
  else icon.classList.add("active");

  icon.addEventListener("click", () => {
    document.getElementById(inputValueId).value = "";
    icon.classList.remove("active");
  });
}

//Функция для показа/скрытия символов в поле Пароль
function togglePassword(event, inputId, showEyeId, hideEyeId, evt) {
  event.preventDefault();
  const input = document.getElementById(inputId);
  const showEye = document.getElementById(showEyeId);
  const hideEye = document.getElementById(hideEyeId);

  if (input.type === 'password') {
    input.type = 'text';
    hideEye.classList.add('active')
    showEye.classList.remove('active')
  } else {
    input.type = 'password';
    hideEye.classList.remove('active')
    showEye.classList.add('active')
  }
}

//маска для инпута с датой рождения
var dateMask = IMask(
  document.getElementById('date-mask'),
  {
    mask: Date,
    min: new Date(1900, 0, 1),
    max: new Date(2050, 0, 1),
    lazy: true,
  });

const fff = () => {
  const rr = document.getElementById('date-mask-group');

  rr.addEventListener('click', () => {
    var newMask = IMask(
      document.getElementById('date-mask'),
      {
        mask: Date,
        min: new Date(1900, 0, 1),
        max: new Date(2050, 0, 1),
        lazy: false,
        placeholderChar: "_"
      });
  })
};

fff()

var phoneMask = IMask(document.getElementById('phone-mask'), {
  mask: '+{7}(000)000-00-00',
  lazy: true,
});

const ddd = () => {
  const rr = document.getElementById('phone-mask-group');

  rr.addEventListener('click', () => {
    var newphoneMask = IMask(document.getElementById('phone-mask'), {
      mask: '+{7}(000)000-00-00',
      lazy: false,
      placeholderChar: '_'
    });
  })
};

ddd()

function onlyOne(checkbox) {
  var checkboxes = document.querySelectorAll('input[type=checkbox]')
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
  })
}


})