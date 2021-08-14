# auth0-react-node-ts

This is a minimal starter for a full-stack React+node.js with Auth0, written in TypeScript to provide simple authenticated communication between a client and a server, using Auth0 to provide an authentication token.

> ## 👉 [Demo](https://auth0-react-node-ts-domv.vercel.app) 👈

## Quick Start

1.  [Fork this repo](https://github.com/DomVinyard/auth0-react-node-ts/fork) and open it up in an editor. Run `yarn` to install dependencies.

2.  Visit [Auth0](https://manage.auth0.com) and set up a free account. Click `+ Create Application`. Set the name to `auth0-react-node-ts ` and look for the fields, `Allowed Callback URLs` and `Allowed Web Origins`. Set **both** of these to:

```
http://localhost:3000, https://add_production_url_here_once_deployed.com
```

3. You will see that Auth0 has provided you with a `Domain` and a `Client ID`. In your forked repo open `/.env.example` , rename it `.env` and set these two values. Your app is now configured to fetch tokens from Auth0.

4. Finally, we need an api to fetch from. Visit the [demo api hosted on Replit](https://replit.com/@DomVinyard/checkauth#index.js) and fork the project. Inside your new forked Replit project, click on 'Secrets' and add the following.

```
key: AUTH0_DOMAIN
value: <your Auth0 Domain> (example: dom.eu.auth0.com)
```

5. Replit has assigned you a url for your api. Back in your client repo, open your .env file and set `REACT_APP_API_URL` to this value (it will look something like `https://auth0-react-node-ts-server--your_username.repl.co`). Your app is now configured to talk to the api.

That's it, we have Auth0 configured for both your client (hosted locally) and your server (hosted on Replit). The two can now communicate securely.

## How does it all work?

TODO:

- Annotated Diagram
- Common issues
- Anatomy of a token (high level)
