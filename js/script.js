"use strict";

window.addEventListener("load", windowLoad);

function windowLoad() {
  document.documentElement.classList.add("loaded");
  createPosition();

  window.addEventListener("scroll", createPosition);

  function createPosition() {
    const contentElement = document.querySelector(".content__container");
    const windowHeight = window.innerHeight;

    const finalPos = (scrollY / (contentElement.offsetTop - windowHeight)) * 60;

    finalPos < 100 ? forestAnimation(finalPos) : forestAnimation(100);
  }
  function forestAnimation(finalPos) {
    const mountains = document.querySelector(".main-screen__mountains");
    const trees = document.querySelectorAll(".main-screen__trees");
    const birds = document.querySelectorAll(".main-screen__birds");

    const mountainsTranslate = (170 / 100) * finalPos;
    const mountainsScale = 1 + (2 / 100) * finalPos;

    mountains.style.cssText = `
      transform:
      translate3d(0, ${mountainsTranslate}%,0)
      scale(${mountainsScale})
      `;

    trees.forEach((tree, index) => {
      const treeTranslate = ((20 * (trees.length - index)) / 100) * finalPos;
      const treeScale = 1 + (1.5 / 100) * finalPos;

      tree.style.cssText = `
      transform:
      translate3d(0, ${treeTranslate}%,0)
      scale(${treeScale})
      `;
    });

    const birdsTranslate = (190 / 100) * finalPos;
    const birdsScale = 1 + (2 / 100) * finalPos;

    birds[0].style.cssText = `
      transform:
      translate3d( -${birdsTranslate}%,0,0)
      scale(${birdsScale})
      `;

    birds[1].style.cssText = `
      transform:
      translate3d( ${birdsTranslate}%,0,0)
      scale(${birdsScale})
      `;
  }
}
