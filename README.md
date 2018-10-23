# chore-tinder-api
A super-hacky NodeJS API for the Chore Tinder iOS application

![Chore Tinder API](https://i.imgur.com/2CSGK5S.png)


## Description

A super-hacky NodeJS API for assigning people to chores on a weekly basis. Built as the bare minimum I needed in order to get an API running that [`chore-tinder-objc`](https://github.com/phillfarrugia/chore-tinder-objc) could consume. Think of it what you will, the purpose here was to have some fun and write some Objective C.

## Routes

`GET /schedule/:id`
<br>Retrieves the weekly schedule form the database with the given identifier. If no schedules are found in the database, it is seeded with default values.

`PUT /schedule/:id`
<br>Updates the weekly schedule with the given identifier in the database.

`GET /clear`
<br>Clears all of the weekly schedules from the database.


## Contributions

I have no immediate plans to actively work on this experiment any further. However this source code is licensed under the [MIT license](https://github.com/phillfarrugia/swipeable-view-stack/blob/master/LICENSE) which permits anyone to fork this repository and make modifications under the same license.
