# Coding Exercise: API Server for Lunch Buddies (Simple Version)

> "One of the very nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating." ― Luciano Pavarotti


## Overview

Your employer, MegaCorp, has tasked you with a very important project, Lunch Buddies, which they beleive is critical to their internal culture and success ~in world domination~ as a business.
Or, to be more specific, they have tasked you with delivering the server side application for Lunch Buddies.
And, of course, Lunch Buddies is a scheduling application for employees to eat lunch with other random people at the office.
You will need to design and implement web API application to allow for the following:

1. A user can request lunch with a random other user for a particular day.
2. A user can view their "lunch buddy" booking details (the date of the appointment and who it's with).
3. A user can cancel a given booking.

Of important note, bookings should only be able to be made:

1. Monday through Friday
2. Not conflict with an existing booking for either person

All other details are up to you to decide - you've been given *carte blanche* to make Lunch Buddies the application that MegaCorp needs.
Once you're done implementing the server code, the UI team will be building a single page application (SPA) on top of it so people can use it!
Feel free to use open source libraries in building this application.

## Deliverables

Provide a Github repository which contains your Lunch Buddy server application as specified above.
To avoid having to deal with user passwords and logins, this service will run in front of a reverse proxy that will handle authentication via the company SSO.
All requests will have a `USER_NAME` header and a `USER_EMAIL` header which you can identify them with.
The application should have 10 default users which can be used to demo it.
Note that bookings are for days, not times! This means that you just need to record that "users A and B are having lunch on YYYY-MM-DD" (ex: 2021-06-24). 

## Additional Details

1. Please refer to the [*How To Approach These Problems*](../README.md#how-to-approach-these-problems) section of this repo's README file for more information on how to approach this work.
