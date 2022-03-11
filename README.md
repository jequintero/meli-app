# meli-app
## _technical challenge for mercado libre_

![Logo](https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo-6.png)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
## Test Deployment
https://cryptic-earth-37530.herokuapp.com/
## Features

- Server side rendering
- Server-side data fetching and client-side hydration
- Dev server with hot reloading styles
- Sass and autoprefixer
- Node.js clusters for improved performance under load
- Prettier and ESLint run on commit
- Auto deploy on heroku using docker and github actions

## Init setup 👨‍💻

Install dependencies  using **yarn**.
- `yarn install`

For development:
- `yarn start`
  - Start dev server at [http://localhost:3000](http://localhost:3000)
- `yarn test`
  - Start `jest` in watch mode for server & client
 
## Production 📈

- `yarn run build && yarn run start:prod`
  - Bundle the JS and run the Express server for production
Install the dependencies and devDependencies and start the server.

## Deployment 🚀
It's configured to deploy after a merge on main branch. Check *.github/main.yml*:
```
name: Deploy to heroku.
# Run workflow on every push to master branch.
on:
  push:
    branches: main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Build, Push and Release a Docker container to Heroku. # Your custom step name
        uses: gonuit/heroku-docker-deploy@v1.3.3 # GitHub action name
        with:
          email: ${{ secrets.HEROKU_EMAIL }}
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: ${{ secrets.HEROKU_APP_NAME }}
          dockerfile_directory: ./
          dockerfile_name: Dockerfile
          docker_options: "--no-cache"
          process_type: web
```

Boilerplate based on [Cullen Jett repo](https://github.com/cullenjett/react-ssr-boilerplate)
