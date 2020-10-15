'use strict'
{
  /* for Preview Design Darkmode <=> LightMode */
  window.onload = function () {
    /* Global use 1: DarkLightMode 2:ResizeView */

    const preview = document.getElementById('previewArea')
    /* Dark/Light Toggle */
    {
      const toggleMode = document.getElementById('toggleMode')
      toggleMode.addEventListener('click', () => {
        preview.classList.toggle('onColorLight')
        toggleMode.classList.toggle('on')
        if (toggleMode.innerHTML === 'Dark') {
          toggleMode.innerHTML = 'Light'
        } else {
          toggleMode.innerHTML = 'Dark'
        }
      })
    }
    /* End Dark/Light Toggle */

    /* Get Resize on Preview-Window for BreakPoint */
    {
      const windowSizeView = document.getElementById('windowSizeView')
      let clientWidth = preview.clientWidth
      windowSizeView.innerHTML = clientWidth + 'px'
      /* for Resize, SetTimer for Performance  */
      const classes = ["min", "sm", "md", "lg", "xl"];
      window.addEventListener('resize', function (event) {
        let clientWidth = preview.clientWidth
        let resizeTimer
        windowSizeView.innerHTML = clientWidth + 'px'
        windowSizeView.classList.remove(...classes)
        if (clientWidth > 1440) {
          windowSizeView.classList.add('xl')
          windowSizeView.innerHTML = clientWidth + 'px DeskTop-PC'
        } else if (clientWidth > 1024) {
          windowSizeView.classList.add('lg')
          windowSizeView.innerHTML = clientWidth + 'px NotePC'
        } else if (clientWidth > 768) {
          windowSizeView.classList.add('md')
          windowSizeView.innerHTML = clientWidth + 'px SP~Tablet'
        } else if (clientWidth > 480) {
          windowSizeView.classList.add('sm')
          windowSizeView.innerHTML = clientWidth + 'px SP'
        } else if (clientWidth < 481) {
          windowSizeView.classList.add('min')
          windowSizeView.innerHTML = clientWidth + 'px Small SP'
        } else{
          windowSizeView.classList.remove(...classes)
        }

        // console.log(clientWidth)
        if (!resizeTimer) {
          clearTimeout(resizeTimer)
        }
        resizeTimer = setTimeout(function () {
          onResize()
        }, 500)
      })
      // リサイズ後の処理 = 0.5秒後にクリア
      function onResize() {}
    }
  }
  /* End Get Resize  */
}
