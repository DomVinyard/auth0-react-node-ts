
# auth0-react-node-ts

This is a **minimal example**  of authenticated communication between a React app and a node.js API using Auth0.

### 👉 [Full-stack Demo](https://auth0-react-node-ts-domv.vercel.app) 👈

(The demo connects to an [api](https://replit.com/@DomVinyard/auth0-react-node-ts-api) hosted on Replit).

## Workshop

The Quick Start below will get you up and running quickly but for a deep dive we recommend working through the official [Auth0 React Workshop](https://github.com/jamesqquick/auth0-react-workshop).

## Quick Start

1.  [Fork this repo](https://github.com/DomVinyard/auth0-react-node-ts/fork) and open it up in an editor. Run `yarn` to install dependencies.

2.  Visit [Auth0](https://manage.auth0.com) and set up a free account. Click `+ Create Application` set the Application type to `SPA` set the application name to `auth0-react-node-ts`. Find the fields `Allowed Callback URLs` and `Allowed Web Origins` and set **both** to:

```
http://localhost:3000, https://add_production_url_here_once_deployed.com
```

3. Save your changes in this Auth0 settings page!

4. You will see that Auth0 has provided you with a `Domain` and a `Client ID`. Inside your app open `/.env.example`  and set the Domain and Client ID. Rename the file `.env` (remove the `.example` extension).

5. Next, we need an API to connect to. Visit the [demo API hosted on Replit](https://replit.com/@DomVinyard/auth0-react-node-ts-api) and fork the project. Inside your new forked Replit project, click on 'Secrets' and add the following.

```#
key: AUTH0_DOMAIN
value: <your Auth0 Domain>
```

6. Finally we need to connect the app to the API. Open your `.env` file and set `REACT_APP_API_URL` to point at your forked Replit URL (it will look something like `https://auth0-react-node-ts-api--your_username.repl.co`).

That's it, the app and the API can now communicate securely. Start your Replit API and run `yarn start` in your app to start the demo.

## What's happening here?
This is a high level flow diagram of how the app, the API and the authentication server work together to allow secure communication using tokens.

![auth6](https://user-images.githubusercontent.com/1271197/129472005-a2211de9-3b2b-4026-b49f-8a5d644331e0.png)



## Questions and Issues

### Can I use this in my other projects
Keep in mind this is just the simplest example of a token being consumed by an API. There is no sign up flow, no database at all, we are not remembering our users or dealing with permissions. For a more complete solution check the [Official Auth0 React Workshop repo](https://github.com/jamesqquick/auth0-react-workshop).

### I want the user to stay logged in when they refresh the page
Look at the [Auth0 docs section on Sessions](https://auth0.com/docs/sessions).

### My app doesn't work when it's deployed

You have deployed your app to Netlify or Vercel but it throws an error when it tries to fetch the token? This is because you haven't told Auth0 where your application is deployed. Login to edit your [Auth0 application settings](https://manage.auth0.com).  In the Quick Start we set `Allowed Callback URLs` and `Allowed Web Origins` to be:

```
http://localhost:3000, https://add_production_url_here_once_deployed.com
```

Edit these to replace `https://add_production_url_here_once_deployed.com` with the URL of your deployed app (aka `https://myapp.netlify.com`).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgwMDc1OTkzNywtNzUzODQxMDEsLTMwMT
IxMTAzMywtMTc0MTcyMzE4NCwtNjk1ODI2ODA4LC0xOTU2ODc2
MzU5LC0yMTE4OTM3NTYxLC0yMDQ4OTkzMDM1LC03ODc4ODc5Mz
MsNTc5NDY5ODEyLDY0Nzc0ODU0NiwxOTk5MDMyMTM4LC0xOTk5
NjcxOTUxLDE3Nzg4NzM1NjgsLTE5NTQyMDM3NzksLTgxMzc4ND
kzOSwtMTY4Mjc1MTg4OCwtNjk5NjE0NDE4LC0yMDk5MDU5ODA2
XX0=
-->
