# auth0-react-node-ts

This is a minimal starter repo for a full-stack React+node.js with Auth0.

## Demo

Let's take a look at it in action!

> 👉 [Authentication Demo](https://auth0-react-node-ts-domv.vercel.app) 👈

This demo covers simple authenticated communication between a client and a server, using Auth0 to provide an authentication token.

## Quick Start

1. [Fork this repo](https://github.com/DomVinyard/auth0-react-node-ts/fork) and open it locally.

2. Visit [Auth0](https://manage.auth0.com) and set up a free account. Once you are set up, click `+ Create Application`. Give your application a name and make a note of your `Domain` and your `Client ID`. Look for the fields, `Allowed Callback URLs` and `Allowed Web Origins`. Set **both** of these to:

```
http://localhost:3000, https://add_url_here_once_deployed.com
```

3. In your local copy of this repository open `/.env.example` . Set the Domain and Client ID to your new values. Don't forget to rename the file to just `.env` (remove the `.example` extension).

4. Visit the [api hosted on Replit](https://replit.com/@DomVinyard/checkauth#index.js) and fork the project. Replit will assign you a url, open your .env file and set `REACT_APP_API_URL` to this value. Back inside your new Replit click on 'Secrets' and add the following:

```
key: AUTH0_DOMAIN
value: <your Auth0 Domain> (example: dom.eu.auth0.com)
```

## How does it all work?

Diagram, etc.
