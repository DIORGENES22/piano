const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input")

const keyCheck = document.querySelector(".keys-check input")

let audio = new Audio("tune/a.wav");

const playtune = (key) =>  {
    audio.src = `tune/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
    clickedKey.classList.remove("active");
    },150)
   
};



pianoKeys.forEach((key) =>{
   console.log(key.dataset.key);
   key.addEventListener("click",() =>playtune(key.dataset.key));
});


document.addEventListener("keydown", (e) => {
    playtune(e.key);
  
});

const handleVolume = (e)=>{
    audio.volume = e.target.value;
    console.log(e.target.value);
}

const showHideKeys = () =>{
    pianoKeys.forEach(key =>key.classList.toggle("hide"))
}


volumeSlider.addEventListener("input", handleVolume)

keyCheck.addEventListener("click", showHideKeys)