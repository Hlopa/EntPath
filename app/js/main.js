"use scrict";

document.addEventListener("DOMContentLoaded", () => {


  //появление модалок

  const btnProfileAboutTraektolog = document.querySelector('.btn-profile__about-traektolog');
  const modalProfileAboutTraektolog = document.querySelector('.profile__about-traektolog-modal');

  const modalGradeTraektory = document.querySelector('.profile__grade-traektory-modal');
  const btnGradeTraektory = document.querySelectorAll('.btn-grade-traektory-modal');

  const modalHelpRestore = document.querySelector('.help-restore-modal');
  const btnHelpRestore = document.querySelector('.btn-help-restore');

  const modalClose = document.querySelectorAll('.modal-close');

  if (btnProfileAboutTraektolog) {
    btnProfileAboutTraektolog.addEventListener('click', function (e) {
      modalProfileAboutTraektolog.classList.add('modal--open');
    })
    modalClose.forEach((item) => {
      item.addEventListener('click', function (e) {
        modalProfileAboutTraektolog.classList.remove('modal--open');
      })
    })
  }

  if (btnGradeTraektory) {
    btnGradeTraektory.forEach((item) => {
      item.addEventListener('click', function (e) {
        modalGradeTraektory.classList.add('modal--open');
      })
    })
    modalClose.forEach((item) => {
      item.addEventListener('click', function (e) {
        modalGradeTraektory.classList.remove('modal--open');
      })
    })
  }

  if (btnHelpRestore) {
    btnHelpRestore.addEventListener('click', function (e) {
      modalHelpRestore.classList.add('modal--open');
    })
    modalClose.forEach((item) => {
      item.addEventListener('click', function (e) {
        modalHelpRestore.classList.remove('modal--open');
      })
    })
  }


  //star rating

  $(".comments-ratind").starRating({
    totalStars: 5,
    emptyColor: '#E0E0E6',
    activeColor: '#FFE318',
    starSize: 16,
    strokeWidth: 0,
    useGradient: false,
    readOnly: true
  });

  $(".grade-traektory-rating").starRating({
    totalStars: 5,
    emptyColor: '#E0E0E6',
    activeColor: '#FFE318 !important',
    ratedColor: '#FFE318 !important',
    hoverColor: '#FFF083',
    starSize: 48,
    strokeWidth: 0,
    useGradient: false,
    starShape: 'rounded',
    useFullStars: true,
  });



  //Открытие/закрытие бургер меню

  $(function () {
    $('.header__burger').on('click', function () {
      $('.header__nav-list').slideToggle();
      $('.header__burger').toggleClass("header__burger--active");
    });

  });

  //=============Открытие и  закрытие меню в xедере====================//

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
  const appointmentFounderBtn = document.querySelector('.appointment__founder-btn');

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

  if (appointmentFounderBtn) {

    const firstStepTab = document.getElementById('appointment__firstStep'),
      secondStepTab = document.getElementById('appointment__secondStep'),
      firstStepBlock = document.querySelector('.appointment__traektologies'),
      secondStepBlock = document.querySelector('.appointment__selected-traektolog');
    appointmentFounderBtn.addEventListener('click', () => {
      firstStepTab.classList.remove('active');
      firstStepTab.classList.add('success');
      secondStepTab.classList.add('active');
      firstStepBlock.classList.add('transition-left');
      secondStepBlock.classList.add('active')
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


//==========================Air Datepicker===============================//
const chooseDay = document.getElementById('choose-day-datepicker');
const width = window.innerWidth;
const isMobile = width < 600 ? true : false;


if (chooseDay) {
  const chooseDayPicker = new AirDatepicker(chooseDay, { isMobile: isMobile });
}

