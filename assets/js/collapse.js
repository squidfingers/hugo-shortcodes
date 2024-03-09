/*
  **This script is not in use.**
  The collapse shortcode currently has a version of this script embedded with
  the html. Alternatively, you could remove that script in the shortcode and
  include this script in the head, which will configure all of the collapse
  shortcodes at once.
*/
window.addEventListener(
  "DOMContentLoaded",
  function (event) {
    const checkHeight = () => {
      const collapseList = document.querySelectorAll(".collapse");
      if (collapseList) {
        for (let collapse of collapseList) {
          const input = collapse.querySelector(".collapse__input");
          if (input) {
            input.checked = false;
            const content = collapse.querySelector(".collapse__content");
            if (content) {
              if (content.scrollHeight > 0 && content.offsetHeight > 0) {
                if (content.scrollHeight == content.offsetHeight) {
                  collapse.classList.add("collapse--disabled");
                } else {
                  collapse.classList.remove("collapse--disabled");
                }
              }
            }
          }
        }
      }
    };
    window.addEventListener("resize", checkHeight, false);
    checkHeight();
  },
  false,
);
