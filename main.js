const container = document.getElementsByClassName("container");
console.log(container);

for (let i = 0; i <= 50; i++) {
  const element = document.createElement("h1");
  const text = document.createTextNode("");
  element.appendChild(text);
  element.classList.add("block");
  container[0].appendChild(element);
}

const animateBlocks = () => {
  anime({
    targets: ".box.red",

    translateY: [
      {
        value: 300,
        duration: 1000},
      { value: 0, duration: 1000 },
    ],
    rotate:[{value:"1turn",duration: 5000}]
  });
};
anime({
  targets: ".box.green",

  translateY: [
    {
      value: 300,duration: 1000, delay:2000 },
    { value: 0, duration: 1000 },
  ], rotate:[{value:"3turn",duration: 3000, delay:3000 }]
});

anime({
  targets: ".box.black",

  translateY: [
    {
      value: 300,
      duration: 1000,delay:4000
    },
    { value: 0, duration:1000, delay:2000 },
  ],
  rotate:[{value:"3turn",duration: 3000, delay:5000 }]
 
});

anime({
  targets: ".box.blue",

  translateY: [
    {
      value: 300,
      duration: 3000, delay:6000
    },
    { value: 0, duration: 3000 },
  ],
  rotate:[{value:"3turn",duration: 3000, delay:7000 }]
});

animateBlocks();
