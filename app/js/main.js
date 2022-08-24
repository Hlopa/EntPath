"use scrict";

document.addEventListener("DOMContentLoaded", () => {

  //=============Открытие и  закрытие меню в зедере====================//

  const headerProfileBtn = document.querySelector('.header-profile__btn');

  if (headerProfileBtn) {
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
  }


  //=============Переход к оплате====================//

  const goToPayBtn = document.querySelectorAll('.goToPay');

  goToPayBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      location.href = "pay-modul.html";
    })
  })


  //=============Логика переключения шагов при записи к траектологу====================//

  const appointment__steps = document.querySelector('.appointment__steps');

  if (appointment__steps) {
    const traektologies = document.querySelectorAll('.appointment__traektolog-item'),
      firstStepTab = document.getElementById('appointment__firstStep'),
      secondStepTab = document.getElementById('appointment__secondStep'),
      firstStepBlock = document.querySelector('.appointment__traektologies'),
      secondStepBlock = document.querySelector('.appointment__selected-traektolog');

    traektologies.forEach(traektolog => {
      traektolog.addEventListener("click", () => {
        firstStepTab.classList.remove('active');
        firstStepTab.classList.add('success');
        secondStepTab.classList.add('active');
        firstStepBlock.classList.add('transition-left');
        secondStepBlock.classList.add('active')
      })
    })
  }


  //========================= маска для инпута Дата рождения ====================//

  const dateInput = document.getElementById('date-mask');
  const dateInputGroup = document.getElementById('date-mask-group');

  if (dateInput) {
    var dateMask = IMask(
      dateInput,
      {
        mask: Date,
        min: new Date(1900, 0, 1),
        max: new Date(2050, 0, 1),
        lazy: true
      });

    dateInputGroup.addEventListener('click', () => {
      var newMask = IMask(
        dateInput,
        {
          mask: Date,
          min: new Date(1900, 0, 1),
          max: new Date(2050, 0, 1),
          lazy: false,
          placeholderChar: "_"
        });
    })
  }


  //========================= маска для инпута Номер телефона ====================//


  const phoneInput = document.getElementById('phone-mask');
  const phoneInputGroup = document.getElementById('phone-mask-group');

  if (phoneInput) {
    var phoneMask = IMask(phoneInput, {
      mask: '+{7}(000)000-00-00',
      lazy: true,
    });

    phoneInputGroup.addEventListener('click', () => {
      var newphoneMask = IMask(phoneInput, {
        mask: '+{7}(000)000-00-00',
        lazy: false,
        placeholderChar: '_'
      });
    })
  }
})


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

//======================Функция чтобы выбирался всегда только один чекбокс==============//

  function onlyOne(checkbox) {
    var checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
  }