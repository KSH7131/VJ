const family = {
  d1text : "패밀리사이트",
  familysite : [
    {
      atext : "GIT",
      href : "http://www.github.com/ksh7131"
  },
  {
    atext : "Notion",
    href : "http://www.notion.io/gimsh7131"
},
{
  atext : "Figma",
  href : "http://www.figma.com/gimsh7131"
},
    ]
  }

  let familytag = "";

  for(x of family.familysite){
    familytag += `<li>$(x.atext)</li>`
  }
  
  window.addEventListener('load', function(){
    this.document.querySelector("#family h2")
    .innerHTML = family.d1text;

    this.document.querySelector("#family ul")
    .innerHTML = familytag
  })
  
  // {
  //   this.document.querySelector("#family h2").innerHTML += family.d1text;
  //   // 특정 태그 안에 태그를 삽입하기
  //   this.document.querySelector("#family ul")
  //   .innerHTML = `<li>$(family.familysite[0].atext)</li>`;
  //   this.document.querySelector("#family ul")
  //   .innerHTML = `<li>$(family.familysite[1].atext)</li>`;
  //   this.document.querySelector("#family ul")
  //   .innerHTML = `<li>$(family.familysite[2].atext)</li>`;
  // })