console.log("Open the console to see the test message!");

const btnJs = document.getElementById("btn-js");

btnJs.addEventListener("click", (event) => {
  console.log("You clicked the button!!", event);
  console.log("Delete this and write your own code here!!");
  alert("You clicked the button!!");
});

//  adding the typewriter effect to the id typewriter


new Typewriter("#typewriter", {
  strings: ["Programming with style"],
  autoStart: true,
});
