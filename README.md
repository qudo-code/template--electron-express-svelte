# template--electron-express-svelte
A template for when you need a native desktop UI and also a server.


## Scripts
`npm run build`: Builds all Electron platforms.
`npm run build:system`: Builds Electron app but only for your OS (saves time).
`npm run build:ui`: Builds UI only.
`npm run dev`: Starts `nodemon` and tells it to restart Electron and rebuild the UI upon code changes in `.js`, `.scss` and `.svelte` files.

## App (Electron)
Main Electron thigns are in `main.js`. This also handles kicking off the Express server as a child process.

## Server (Express)
A very basic Express boilerplate exists in `server.js`.

## UI (Svelte)
The UI is a Svelte project in `/src` that builds to `/ui` fo Electron to pickup.

### Styles
I includes the the styles I use for [snifty.space](https://snifty.space) as an example of working SCSS.