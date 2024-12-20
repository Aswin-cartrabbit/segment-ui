const data = [
  {
    id: 1,
    name: "subject",
    isChained:true
  },
  {
    id: 2,
    name: "body",
    isChained:true

  },
  {
    id: 3,
    name: "prewiew",
    isChained:false
  },
];
let res = {}
let bool = true

data.forEach((item) => {
  if (bool) {
    //resd
    res[item.name] = ""
    res = item
    bool = false
  }else{

  }
})