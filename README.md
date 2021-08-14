# auth0-react-node-ts

This is a minimal example of simple authenticated communication between a React app and a node.js server using Auth0.

### 👉 [Full-stack Demo](https://auth0-react-node-ts-domv.vercel.app) 👈

(The demo connects to an [api](https://replit.com/@DomVinyard/auth0-react-node-ts-server) hosted on Replit).

## Quick Start

1.  [Fork this repo](https://github.com/DomVinyard/auth0-react-node-ts/fork) and open it up in an editor. Run `yarn` to install dependencies.

2.  Visit [Auth0](https://manage.auth0.com) and set up a free account. Click `+ Create Application` and set the application name to `auth0-react-node-ts `. Find the fields `Allowed Callback URLs` and `Allowed Web Origins` and set **both** to:

```
http://localhost:3000, https://add_production_url_here_once_deployed.com
```

3. You will see that Auth0 has provided you with a `Domain` and a `Client ID`. Inside your app open `/.env.example` , rename it `.env` and set these two values.

4. Next, we need an api to connect to. Visit the [demo api hosted on Replit](https://replit.com/@DomVinyard/auth0-react-node-ts-server) and fork the project. Inside your new forked Replit project, click on 'Secrets' and add the following.

```#
key: AUTH0_DOMAIN
value: <your Auth0 Domain> (example: dom.eu.auth0.com)
```

5. Now both the app and the api are configured to use Auth0. Finally we need to connect the app to the api. Back in your app repo, open your .env file and set `REACT_APP_API_URL` to your forked Replit URL (it will look something like `https://auth0-react-node-ts-server--your_username.repl.co`).

That's it, the app and the api can now communicate securely. Start your Replit api and run `yarn start` in your app to run the demo.

## How does it all work?

TODO:

- Annotated Diagram
- Anatomy of a token (high level)

## Common Issues

### My app doesn't work when it's deployed

You have deployed your app to Netlify or Vercel but it throws an error when it tries to fetch the token? This is because you haven't told Auth0 where your application is deployed to. Login to [Auth0](https://manage.auth0.com) and open up your Auth0 Application. In Quick Start Step 2 we set `Allowed Callback URLs` and `Allowed Web Origins` to be:

```
http://localhost:3000, https://add_production_url_here_once_deployed.com
```

Edit both of these fields to replace `https://add_production_url_here_once_deployed.com` with the URL of your deployed app (aka `https://myapp.netlify.com`). .
