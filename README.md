# MyStory
A platform to create, reminisce, and share stories.<br />
**Link** - **http://mystory11.herokuapp.com/**

## Motivation
I was very interested in building a potentially scalable full stack application. Out of the many project ideas that I had filtered out, I decided to build a story sharing web app where users can perform CRUD operations on their stories/posts and can view stories of other users.

## Built With
- `Node.js`
- `Express`
- `MongoDB`
- `Passport.js`
- `Materialize`

## Features
- Enables Google authentication using `Passport.js` and `Google OAuth 2.0 protocol`.
- Allows users to perform CRUD operations on their stories.
- Grants users to view the public stories of other users.

## Local Installation
- `git pull https://github.com/abhiktech/my-story.git`
- Install dependencies by looking at `package.json`.
- *Note* : I had `nodemon` as a global dependency and I would recommend you to install it using npm.
- Create a `config.env` file in the `config` folder. This file is meant to define environment variables -> `PORT`, `MONGO_URI`, `GOOGLE_CLIENT_ID`, and `GOOGLE_CLIENT_SECRET`.
  - Set `PORT` to  `process.env.PORT` or `3000`.
  - Create a new Collection in [MongoDB Atlas](https://account.mongodb.com/account/login) and set `MONGO_URI` to the Cluster URI. Follow the docs [here](https://docs.atlas.mongodb.com/getting-started) if you're new to this. You can even use a locally installed version of MongoDB if you want!
  - Setup Google OAuth 2.0 by following the docs [here](https://support.google.com/googleapi/answer/6158849?hl=en). Set the redirect URI to http://localhost:3000/auth/google/callback (the number 3000 represents your port number, it is not necessarily 3000). Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to the credentials that you obtain.
- Run the server using `npm run dev`

## License
**MIT**

For any suggestions/bugs, feel free to contact me at **abhikmaz@umich.edu**



