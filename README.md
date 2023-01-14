# Games Qualifier API

## Summary

In this project, an API is developed to manage the control of a video game review app.

## Features

### Auth Endpoints

Endpoints are exposed to be able to register a user, log in and obtain a user's profile using JWT.

### Games CRUD

Endpoints are exposed to perform a crud of games, which have the following data structure:

`{
  id: number;
  title: string;
  description: string;
  rating: number;
  allRatings: number;
  images: Array<string>;
  comments: Array<Comment>;
  categories: Array<string>;
}`

### Comments CRUD

Endpoints are exposed to perform a crud of comment, which have the following data structure:

 `{
  id: number;
  description: string;
  rating: number;
  user: User;
  status: boolean;
}`

## How to Run

### Clone the repo

`$ git clone https://github.com/JimmyCamus/qualifier-api.git`

### Install dependencies

`$ pnpm install`

### Run project

`$ pnpm run start:dev`
