const input = document.querySelector("main input");
const img = document.querySelector(".img img");
const imgdiv = document.querySelector(".img ");
const button = document.querySelector("button");



let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=kaushal"

function createQrCode() {
  let inputValue = input.value;
  if (inputValue.length > 0) {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    imgdiv.classList.add("height")
  }else{
    input.classList.add("anim")
    setTimeout(() => {
      input.classList.remove("anim")
    }, 2000);
  }


}

button.addEventListener("click", createQrCode);