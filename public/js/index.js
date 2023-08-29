/**
 * Main JavaScript file
 * Author: James Stomberg
 */
"use strict";

window.onload = init;

function init() {
    new HamburgerMenu();
}

class HamburgerMenu {
    constructor() {
        this.menuButton = document.getElementById("menuButton");
        this.navMenu = document.getElementById("navMenu");

        this.initMenu();
    }

    initMenu() {
        this.menuButton.addEventListener("click", (event) => {
            this.toggleMenu(event);
        });
    }

    toggleMenu(event) {
        const clickedButton = event.currentTarget;
        clickedButton.classList.contains("scale-110") ? clickedButton.classList.remove("scale-110") : clickedButton.classList.add("scale-110");
        this.navMenu.classList.contains("hidden") ? this.navMenu.classList.remove("hidden") : this.navMenu.classList.add("hidden");
    }

}