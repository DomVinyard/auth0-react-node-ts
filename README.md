# auth0-react-node-ts

This is a minimal starter repo for a full-stack React+node.js with Auth0.

## Demo

Let's take a look at it in action!

> 👉 [Authentication Demo](https://auth0-react-node-ts-domv.vercel.app) 👈

This demo covers simple authenticated communication between a client and a server, using Auth0 to provide an authentication token.

## Quick Start

1. [Fork this repo](https://github.com/DomVinyard/auth0-react-node-ts/fork) and open it up. Run `yarn` to install the dependencies.

2. Visit [Auth0](https://manage.auth0.com) and set up a free account. Click `+ Create Application` and give your application a name. Look for the fields, `Allowed Callback URLs` and `Allowed Web Origins`. Set **both** of these to.

```
http://localhost:3000, https://add_url_here_once_deployed.com
```

3. You will see that Auth0 has provided you with a `Domain` and a `Client ID`. In your local copy of this repository open `/.env.example` and set these values. Rename the file `.env`. Your app is now configured to use Auth0.

4. Finally we need a server. Visit the [demo api hosted on Replit](https://replit.com/@DomVinyard/checkauth#index.js) and fork the project. Replit will assign you a new url, open your .env file and set `REACT_APP_API_URL` to this value.

5. Inside your new Replit click on 'Secrets' and add the following:

```
key: AUTH0_DOMAIN
value: <your Auth0 Domain> (example: dom.eu.auth0.com)
```

We now have Auth0 configured with both your client and your server pointing at it.

## How does it all work?

Diagram, etc.
