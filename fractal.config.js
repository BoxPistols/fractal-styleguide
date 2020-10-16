'use strict'

/* Fractalのインスタンスの作成とエクスポート */
const fractal = (module.exports = require('@frctl/fractal').create())

/* プロジェクト・タイトルの設定 */
fractal.set('project.title', 'SEKAI DESIGN-SYSTEM')

/* componentsディレクトリの指定 */
fractal.components.set('path', __dirname + '/src/components')

/* documentationディレクトリの指定 */
fractal.docs.set('path', __dirname + '/src/documents')

// browsersync設定
fractal.web.set('server.sync', true)
fractal.web.set('server.syncOptions', { open: true })

// 静的ファイル読み込み
fractal.web.set('static.path', __dirname + '/assets')

/* 静的ファイルの書き出し場所 */
fractal.web.set('builder.dest', __dirname + '/docs')

// Staus
fractal.components.set('default.status', 'wip'); // default is 'ready'

/*
 * Theme
 */
const mandelbrot = require('@frctl/mandelbrot')
const myCustomisedTheme = mandelbrot({
    nav: ['docs', 'search', 'components', 'information'],
    //skin: 'theme-name',
    styles: ['', '/theme/origin.css', ''],
    highlightStyles: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/monokai.min.css',
    lang: 'ja',
    labels: {
        search: {
            placeholder: 'Search...',
        },
    },
    favicon: '/theme/img/favicon.png'
    //panels: ['html', 'view', 'context', 'notes', 'info'],
})

// myCustomisedTheme.addLoadPath(__dirname + '/src/theme-overrides')
fractal.web.theme(myCustomisedTheme)
