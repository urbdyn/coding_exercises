# Coding Exercise: API Server for Lunch Buddies

> "One of the very nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating." ― Luciano Pavarotti


## Overview

Your employer, MegaCorp, has tasked you with a very important project, Lunch Buddies, which they beleive is critical to their internal culture and success ~in world domination~ as a business.
Or, to be more specific, they have tasked you with delivering the server side application for Lunch Buddies.
And, of course, Lunch Buddies is a scheduling application for employees to eat lunch with other random people at the office.
You will need to design and implement web API application on top of a storage layer to allow for the following:

1. A user can set their location to an office code from a predefined list.
2. A user can request lunch with a random other user in a given office for a particular day.
3. A user can view their "lunch buddy" booking details (the date of the appointment, who it's with, and at what office).
4. A user can cancel a given booking.

Of important note, bookings should only be able to be made:

1. Monday through Friday
2. Not conflict with an existing booking

All other details are up to you to decide - you've been given *carte blanche* to make Lunch Buddies the application that MegaCorp needs.
Once you're done implementing the server code, the UI team will be building a single page application (SPA) on top of it so people can use it!
Feel free to use open source libraries in building this application.

## Deliverables

Provide a Github repository which contains your Lunch Buddy server application as specified above.
To avoid having to deal with user passwords and logins, this service will run in front of a reverse proxy that will handle authentication via the company SSO.
All requests will have a `USER_NAME` header and a `USER_EMAIL` header which you can identify them with.

## Additional Details

1. Please refer to the [*How To Approach These Problems*](../README.md#how-to-approach-these-problems) section of this repo's README file for more information on how to approach this work.
