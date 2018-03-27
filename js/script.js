(function() {
// ====================
//  GLOBAL
// ====================
  var _document = document,
    _window = window;

  var popUp = _document.getElementById("popup"),
    popUpTitle = _document.getElementById("popupTitle"),
    popUpText = _document.getElementById("popupText"),
    popUpCode = _document.getElementById("couponCode"),
    popUpImg = _document.getElementById("popupBunny");


// ====================
//  OPEN POP UP [js-popupOpen]
// ====================
  var btnOpenPopup = _document.querySelectorAll("[js-popupOpen]");

  btnOpenPopup.forEach(function(elem) {
    elem.addEventListener("click", function(){
      popUpTitle.innerHTML = elem.dataset.title;
      popUpText.innerHTML = elem.dataset.text;
      popUpCode.innerHTML = elem.dataset.code;
      popUpImg.src = elem.dataset.img;

      popUp.classList.add("is-active");
    });
  });


// ====================
//  CLOSE POP UP [js-popupClose]
// ====================
  var btnClosePopup = _document.querySelector("[js-popupClose]");
  var overlayPopup = _document.querySelector(".popup__overlay");

  btnClosePopup.addEventListener("click", function(){
    popUp.classList.remove("is-active");
  });
  overlayPopup.addEventListener("click", function(){
    popUp.classList.remove("is-active");
  });
  _window.addEventListener("keyup", function(e){
    if (e.keyCode === 27) {
      popUp.classList.remove("is-active");
    }
  });
})();