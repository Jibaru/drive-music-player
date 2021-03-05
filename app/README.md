# Drive Music Player - Web App

Web application

## Project setup

```
npm install
```

Change VUE_APP_API_BASE value into `.env.development` if you use a different api host.

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

Clone `.env.development` and rename to `.env.local`. Then, change VUE_APP_API_BASE value into `.env.local` to your api host. If you use same host as the server in this repo, change to nothing:

```
VUE_APP_API_BASE=
```

After this changes, build for production.

```
npm run build
```

Finally, if you set nothing into VUE_APP_API_BASE, copy the generated `dist` folder into `server/public/`.

```
cp -r app/dist/ server/public/dist/
```

### Lints and fixes files

```
npm run lint
```

### Dependencies

- [Vue FontAwesome](https://github.com/FortAwesome/vue-fontawesome)
- [Vue Router](https://next.router.vuejs.org/)
- [Vuex](https://next.vuex.vuejs.org/)