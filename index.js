const url="https://official-joke-api.appspot.com/random_joke";

(async () => {
  const data = await fetch(url);
  const res = await data.json();
  console.log(res.setup + "-" + res.punchline );


  //randon fuck
  const testing = async() => {
    const d1 = await fetch(url);
    const d2 = await d1.json();
    console.log(d2.setup + "..." + d2.punchline);
  }

  testing();

//another fuck chillll
  const add = (a,b) => console.log(a+b);
  add(5,5);


  var space = document.getElementById("ko");
  space.value = `${res.setup} - ${res.punchline}`;
  space.style.color = "blue";
  space.style.border = "2px solid blue";
  space.style.padding = "10px";
})();









