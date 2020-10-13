'use strict'
{
  window.onload = function () {
    const preview = document.getElementById('previewArea')
    const toggleMode = document.getElementById('toggleMode')

    toggleMode.addEventListener('click', () => {
      preview.classList.toggle('onColorLight')
      toggleMode.classList.toggle('on')
      if (toggleMode.innerHTML === "Dark") {
        toggleMode.innerHTML = "Light";
      } else {
        toggleMode.innerHTML = "Dark";
      }
      // FIXME: don't move
      // toggleMode.innerHTML == "Dark" ? "Light" : "Dark";
      // console.log(toggleMode.innerHTML)
    })
  }
}
