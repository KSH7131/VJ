const family = {
  d1text: "관련사이트",
  familysite: [
    {
      atext: "GIT",
      href: "http://www.github.com/ksh7131"
    },
    {
      atext: "Notion",
      href: "http://www.notion.io/gimsh7131"
    },
    {
      atext: "Figma",
      href: "http://www.figma.com/gimsh7131"
    },

    {
      atext: "instargram",
      href: "http://www.figma.com/gimsh7131"
    },

  ]
}

const mynavi = [
  {
    title: {
      text: "첫번째",
      link: "" 
    },
    submenus: [
      { text: "소메뉴", link: "" }, 
      { text: "소메뉴", link: "" }, 
      { text: "소메뉴", link: "" }  
    ]
  },
  {
    title: {
      text: "대메뉴",
      link: "" 
    },
    submenus: [
      { text: "찾아오는길", link: "" }, 
      { text: "소메뉴", link: "" },      
      { text: "소메뉴", link: "" }       
    ]
  },
  {
    title: {
      text: "유튜브",
      link: "https://www.youtube.com/" 
    },
    submenus: [
      { text: "소메뉴", link: "" }, 
      { text: "소메뉴", link: "" }, 
      { text: "소메뉴", link: "" }  
    ]
  },
  {
    title: {
      text: "네이버",
      link: "https://www.naver.com/" 
    },
    submenus: [
      { text: "소메뉴", link: "" }, 
      { text: "소메뉴", link: "" }, 
      { text: "소메뉴", link: "" }  
    ]
  },
  {
    title: {
      text: "연락",
      link: "#contact" 
    },
    submenus: [
      { text: "소메뉴", link: "" }, 
      { text: "소메뉴", link: "" }, 
      { text: "소메뉴", link: "" }  
    ]
  }
];



let familytag = "";
familytag += `<h2>${family.d1text}</h2><ul>`;

for (x of family.familysite) {
  familytag += `<li>${x.atext}</li>`
}

familytag += '</ul>';

window.addEventListener('load', function () {
  this.document.querySelector("#family")
    .innerHTML = familytag
})

