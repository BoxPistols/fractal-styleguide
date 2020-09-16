# frractal

## About

This is styleguide

## start

```
npm run fr
```

## run for css

```
npm run sass
```

## build

```
npm run build
```

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

Add notes about how to use the system.


---

## file

### theme styling

compile

`node_modules/@frctl/mandelbrot/dist/css/origin.scss`

load theme

`node_modules/@frctl/mandelbrot/dist/css/origin.css`

run theme css compile

```js
  sass --watch node_modules/@frctl/mandelbrot/dist/css/.
```

---

## tree

```
frractal
├─ .gitignore
├─ README.md
├─ assets
│  ├─ css
│  │  ├─ components
│  │  │  └─ _header.sass
│  │  ├─ style.css
│  │  ├─ style.css.map
│  │  ├─ style.sass
│  │  └─ utility
│  │     └─ _base.sass


│  └─ js
│     └─ app.js
├─ favicon.ico
├─ fractal.config.js
├─ package-lock.json
├─ package.json
├─ src
│  ├─ components
│  │  ├─ _preview.hbs
│  │  └─ header.hbs
│  └─ docs
│     └─ index.md
└─ yarn.lock

```