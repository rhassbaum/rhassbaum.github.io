const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox_logo_new.png") {
        myImage.setAttribute("src", "images/firefox_logo_old.png");
    }
    else {
        myImage.setAttribute("src", "images/firefox_logo_new.png");
    }
})

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

function initialize() {
    if (!localStorage.getItem("name")) {
        setUserName();
    }
    else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
    }
}

myButton.addEventListener('click', () => setUserName());

initialize();