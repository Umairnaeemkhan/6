document.getElementById("div-bg").addEventListener("mouseenter", () => {
    document.getElementById("div-bg").style.backgroundColor = "red";
  });
  document.getElementById("div-bg").addEventListener("mouseout", () => {
    document.getElementById("div-bg").style.backgroundColor = "white";
  });
  document.getElementById("clicked").addEventListener("click", () => {
    alert("Button is clicked!");
  });