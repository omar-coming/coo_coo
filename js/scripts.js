function changeScaleUp(){
    document.getElementById("grid-container").style.maxWidth = "100%";
  }

function changeScaleDown(){
    document.getElementById("grid-container").style.maxWidth = "1200px";
  }

  function changeDark() {
    document.documentElement.style.setProperty('--color1', '#fff');
    document.documentElement.style.setProperty('--color2', '#000');
  }

  function changeLight() {
    document.documentElement.style.setProperty('--color1', '#000');
    document.documentElement.style.setProperty('--color2', '#fff');
  }