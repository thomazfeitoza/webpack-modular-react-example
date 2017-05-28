# Webpack Modular React Example

This example demonstrate an approach of using Webpack code splitting in a ReactJS app. It allows server-side rendering with asynchronous component loading on client-side in a manner that avoid the famous React checksum warning.

Here you will find the following features:
- Code splitting with `import()` function
- Isomorphic code
- Async component loading
- Server-side rendering with preload of required frontend chunks

### Install dependencies

```
npm install -g babel-cli gulp
npm install
```

`yarn` can also be used as your dependencies manager.

### Run it

Just type `gulp` to run the project. The server will be listening at port 4000.