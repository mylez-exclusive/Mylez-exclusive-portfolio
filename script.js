console.log("Mylez Exclusive Loaded Successfully!");

const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
    `© ${year} Mylez Exclusive. All rights reserved.`;

const projectLink = document.querySelector(
    '#home a'
);

projectLink.addEventListener("click", function() {
    console.log("Visitor is exploring my projects!");
});

// TYPING ANIMATION

const heading = document.querySelector("#typing-heading");

const headingText = "Mylez Exclusive";

let characterIndex = 0;

function typeHeading() {

    if (characterIndex < headingText.length) {

        heading.textContent += headingText.charAt(characterIndex);

        characterIndex++;

        setTimeout(typeHeading, 150);
    }
}

typeHeading();