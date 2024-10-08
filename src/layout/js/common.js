window.addEventListener('load', function () {
  // 햄버거버튼
  const allMenubtn = document.querySelector("#hd_allBtn_ksh");
  allMenubtn.addEventListener('click', function(){
    document.body.classList.toggle('menuOpen');
  });

  this.addEventListener("scroll", scrollTops);
  function scrollTops(){
    console.log("Scroll position", this.scrolltop || window.scrollY, window.innerHeight, typeof window.innerHeight);
    const pagetop = this.scrollTop || window.scrollY; //웹표준
    const targetscrolleffect = window.innerHeight / 2; //화면의 절반

    if(pagetop > targetscrolleffect) {
      document.body.classList.add("scrolldown")
    }else{
      document.body.classList.remove("scrolldown")
    }
  }
});
