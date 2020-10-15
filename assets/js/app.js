'use strict'
{
  // ja Move Timing is after loading
  window.onload = function () {
    /* for Preview Design Darkmode <=> LightMode */
    /*
     * preview is Global use
     * 1: DarkLightMode
     * 2: ResizeView
     */
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
      // TODO: refact
      const windowSizeView = document.getElementById('windowSizeView')
      // first view size
      const w = preview.clientWidth
      windowSizeView.innerHTML = w + 'px'
      // Size View UI on CSS
      const classes = ['min', 'sm', 'md', 'lg', 'xl']
      // preview size view
      // let sizeView = windowSizeView.innerHTML
      // on Resizing
      window.addEventListener('resize', function (event) {
        let clientWidth = preview.clientWidth
        /* for Resize, SetTimer for Performance  */
        let resizeTimer
        const value = (x) => {
          return clientWidth + x
        }
        // reset classList
        windowSizeView.classList.remove(...classes)
        // View Styling & Change Device
        if (clientWidth > 1440) {
          windowSizeView.classList.add('xl')
          windowSizeView.innerHTML = value('px DeskTop-PC')
        } else if (clientWidth > 1024) {
          windowSizeView.classList.add('lg')
          windowSizeView.innerHTML = value('px Note-PC')
        } else if (clientWidth > 768) {
          windowSizeView.classList.add('md')
          windowSizeView.innerHTML = value('px SP~Tablet')
        } else if (clientWidth > 480) {
          windowSizeView.classList.add('sm')
          windowSizeView.innerHTML = value('px SP')
        } else if (clientWidth < 481) {
          windowSizeView.classList.add('min')
          windowSizeView.innerHTML = value('px Small SP')
        } else {
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
