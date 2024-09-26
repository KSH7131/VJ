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
  ]
}

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
