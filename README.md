# auth0-react-node-ts

This is a **minimal example of authenticated communication** between a React app and a node.js server using Auth0.

### 👉 [Full-stack Demo](https://auth0-react-node-ts-domv.vercel.app) 👈

(The demo connects to an [api](https://replit.com/@DomVinyard/auth0-react-node-ts-server) hosted on Replit).

## Workshop

The Quick Start below will get you up and running quickly but for a deep dive we recommend working through the official [Auth0 React Workshop](https://github.com/jamesqquick/auth0-react-workshop).

## Quick Start

1.  [Fork this repo](https://github.com/DomVinyard/auth0-react-node-ts/fork) and open it up in an editor. Run `yarn` to install dependencies.

2.  Visit [Auth0](https://manage.auth0.com) and set up a free account. Click `+ Create Application` and set the application name to `auth0-react-node-ts`. Find the fields `Allowed Callback URLs` and `Allowed Web Origins` and set **both** to:

```
http://localhost:3000, https://add_production_url_here_once_deployed.com
```

3. You will see that Auth0 has provided you with a `Domain` and a `Client ID`. Inside your app open `/.env.example` , rename it `.env` and set the Domain and Client ID.

4. Next, we need an API to connect to. Visit the [demo API hosted on Replit](https://replit.com/@DomVinyard/auth0-react-node-ts-server) and fork the project. Inside your new forked Replit project, click on 'Secrets' and add the following.

```#
key: AUTH0_DOMAIN
value: <your Auth0 Domain> (example: dom.eu.auth0.com)
```

5. Now both your app and the API are configured to use Auth0. Finally we need to connect the app to the API. Back in your app repo, open your .env file and set `REACT_APP_API_URL` to your forked Replit URL (it will look something like `https://auth0-react-node-ts-server--your_username.repl.co`).

That's it, the app and the API can now communicate securely. Start your Replit API and run `yarn start` in your app to start the demo.

## What's happening here?
This is a high level flow diagram of how the app, the API and the auth server work together to allow secure communication using token-based authentication.

![auth2](https://user-images.githubusercontent.com/1271197/129446099-d03711e9-5458-43c8-bb72-1959b1a8caa7.png)


## Common Issues

### Can I use this in my other projects
Keep in mind this is just the simplest example of a token being consumed by an API. There is no database, we are not storing our users or dealing with permissions. For a more complete solution check the [Official Auth0 React Workshop repo](https://github.com/jamesqquick/auth0-react-workshop).

### I want the user to stay logged in when they refresh the page
Refer to the [Auth0 docs section on Sessions](https://auth0.com/docs/sessions).

### My app doesn't work when it's deployed

You have deployed your app to Netlify or Vercel but it throws an error when it tries to fetch the token? This is because you haven't told Auth0 where your application is deployed. Login to [Auth0](https://manage.auth0.com) and edit your Auth0 Application. In Quick Start Step 2 we set `Allowed Callback URLs` and `Allowed Web Origins` to be:

```
http://localhost:3000, https://add_production_url_here_once_deployed.com
```

Edit both of these fields and replace `https://add_production_url_here_once_deployed.com` with the URL of your deployed app (aka `https://myapp.netlify.com`).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4Mzk3MTI0MDAsMTk5OTAzMjEzOCwtMT
k5OTY3MTk1MSwxNzc4ODczNTY4LC0xOTU0MjAzNzc5LC04MTM3
ODQ5MzksLTE2ODI3NTE4ODgsLTY5OTYxNDQxOCwtMjA5OTA1OT
gwNl19
-->