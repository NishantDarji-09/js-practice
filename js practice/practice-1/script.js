var allSentances = document.querySelectorAll("h1");

  let submitButton = document.querySelectorAll("input");
  submitButton.forEach(function(click){
    click.addEventListener('click', () => {
      if(click.type === "submit"){
        for (let i = 0; i < allSentances.length; i += 1) {
          setTimeout(() => {
            document.getElementById("sentence1").style.cssText = "opacity: 1; transition-duration: 1.7s; color: darkred";
          }, 1000);
          setTimeout(() => {
            document.getElementById("sentence2").style.cssText = "opacity: 1; transition-duration: 1.7s; color: blue";
          }, 2000);
          setTimeout(() => {
            document.getElementById("sentence3").style.cssText = "opacity: 1; transition-duration: 1.7s; color: crimson";
          }, 3000);
          setTimeout(() => {
            document.getElementById("sentence4").style.cssText = "opacity: 1; transition-duration: 1.7s; color: blueviolet";
          }, 4000);
        }
      }
      else if(click.type === "reset"){
        setTimeout(() => {
          document.getElementById("sentence4").style.cssText = "opacity: 0; transition-duration: 2s";
        }, 500);
        setTimeout(() => {
          document.getElementById("sentence3").style.cssText = "opacity: 0; transition-duration: 2s";
        }, 1000);
        setTimeout(() => {
          document.getElementById("sentence2").style.cssText = "opacity: 0; transition-duration: 2s";
        }, 1500);
        setTimeout(() => {
          document.getElementById("sentence1").style.cssText = "opacity: 0; transition-duration: 2s";
        }, 2000);
      }
      else{
        return console.error("something went wrong!");
      }
    })
  });
