const mainnav = document.querySelector( '.navigation');
const hambuttom = document.querySelector('#menu');

hambuttom.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambuttom.classList.toggle('show');
})

const year = document.querySelector("#currentyear")
const lastModifiedElement = document.getElementById("lastModified");

const today = new Date();


const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });


const parsedDateTime = formatter.format(today);


currentyear.innerHTML = `<span >${today.getFullYear()}</span>`;
lastModifiedElement.innerHTML = `<span class="lastModified">Last Modified: ${parsedDateTime}</span>`;
