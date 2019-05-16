$(document).foundation()

window.tdiff = [];
fred = function(a, b) {
  return a - b;
};

window.onload = function(e) {
  // console.log("window.onload", e, Date.now(), window.tdiff,
  //   (window.tdiff[1] = Date.now()) && window.tdiff.reduce(fred));


} // END onload()


$(".nav .menu .feather-menu").on("click", function() {
  console.log("HA");
  navFunction();
});


// ----- M E N U    C O N T R O L L E R -----
// Add icons based on title attribute of list a element

// list items
const navMenu = document.querySelectorAll('.nav .menubar li');

navMenu.forEach((item, i) => {
  // log position in loop
  console.log(`Num: ${i}`);

  // get title attribute
  let titleAttr = item.title;

  // if item has a title
  if (titleAttr) {
    // create titleAttr to send to li a
    let iconCont = `<i data-feather="${titleAttr}"></i>`;

    // send with icon to html
    console.log("added");
    item.innerHTML = iconCont + item.innerHTML;
  } else {
    // send without icon to html
    console.log("not added");
    item.innerHTML = item.innerHTML;
  }

  // console.log(item); // li item
  // console.log(iconCont); // icon content
  // console.log(titleAttr); // tittle attribute
  // console.log(li_i); // li a item
});

feather.replace();






// N A V   C O N T R O L L E R

$('.menu .feather-menu, .menubar li, .nav .menubar').click(function(e) {
  // e.preventDefault();
  console.log(`nav click ${e}`);
  // get the menu
  let menu = document.querySelector('.nav .menubar');

  // if menu is opened
  if (menu.classList.contains("opened")) {
    $('.menubar')
      .removeClass("opened")
      .animate({
        opacity: 0
      }, 500)
      .slideUp(500);


    $(".menubar")
      .removeClass("opened");

  } else {
    $('.menubar')
      .css('height', '100vh')
      .addClass("opened")
      .animate({
        opacity: 1
      }, 500)
      .slideDown(500);


    $(".menubar")
      .addClass("opened");

  }

});
