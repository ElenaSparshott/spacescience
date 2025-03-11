document.getElementById("button").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => { 
    document.getElementById("ideas").textContent = data.activity
  })
})

const spinning = [
  { transform: "rotate(0) scale(0.5)" },
  { transform: "rotate(360deg) scale(0.5)" },
];

const timing = {
  duration: 2000,
  iterations: 1,
};

const spinningRobot = document.getElementById("robot");

document.addEventListener("click", () => {
  spinningRobot.animate(spinning, timing);
});

 

