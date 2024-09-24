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

  console.log(family.familysite[0].atext, family.familysite[0].href);

  const mytag = `<a href="${family.familysite[0].href}">${family.familysite[0].atext}</a>`;
  
  console.log(mytag);