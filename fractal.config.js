'use strict'

/* Fractalのインスタンスの作成とエクスポート */
const fractal = (module.exports = require('@frctl/fractal').create())

/* プロジェクト・タイトルの設定 */
fractal.set('project.title', 'SEKAI DEIGN-SYSTEM')

/* componentsディレクトリの指定 */
fractal.components.set('path', __dirname + '/src/components')

/* documentationディレクトリの指定 */
fractal.docs.set('path', __dirname + '/src/docs')

// browsersync設定
fractal.web.set('server.sync', true)
fractal.web.set('server.syncOptions', { open: true })

/* 静的ファイルの書き出し場所 */
fractal.web.set('builder.dest', __dirname + '/docs')

// 静的ファイル読み込み
fractal.web.set('static.path', __dirname + '/assets')

// Staus
// fractal.components.set('default.status', 'wip'); // default is 'ready'

/*
 * Theme
 */
const mandelbrot = require('@frctl/mandelbrot')

// specify a directory to hold the theme override skines

const myCustomisedTheme = mandelbrot({
    nav: ['docs', 'search', 'components', 'information'],
    //skin: 'origin',
    styles: ['', '/theme/origin.css', ''],
    highlightStyles: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/monokai.min.css',
    lang: 'ja',
    labels: {
        search: {
            placeholder: 'コンポネント検索',
        },
    },
    //panels: ['html', 'view', 'context', 'notes', 'info'],
})

// myCustomisedTheme.addLoadPath(__dirname + '/src/theme-overrides')
fractal.web.theme(myCustomisedTheme)
