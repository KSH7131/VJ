window.addEventListener('load', function () {
  // 햄버거버튼
  const allMenubtn = document.querySelector("#hd_allBtn_ksh");
  allMenubtn.addEventListener('click', function(){
    document.body.classList.toggle('menuOpen');
  });
});
