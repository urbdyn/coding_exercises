# Coding Exercise: High Performance Java API for Logs 

> "Extraordinary claims require extraordinary evidence." ― Carl Sagan

## Overview

You work as a Software Engineer at your employer.
Recently they had a security incident and in the middle of it their SaaS log service went down for multiple hours.
This means all the logs send to it were dropped and thus the business lost critical information from their production environment during the security incident!
To prevent this in the future, the business has decided to build an internal "Log Reciever Agent" which will recieve a duplicate of all logs via a HTTP API and write them to disk as a backup to the SaaS log service.
This will allow them to "backfill" logs in the case that their SaaS log service goes down in the future.
As you can guess, you've been given the task of building this fast and reliable Log Reciever Agent!
Another team owns the existing Log Uploader Agent and will update it to work with the HTTP API you implement.
Since the entire software business is staffed by Java engineers, the solution should be written in an LTS version of Java.
Feel free to use open source libraries in building this agent.

## Deliverables

Provide a Github repository which contains your Log Reciever Agent to recieve logs and write them to disk thus solving this problem.
All logs written to disk should have two basic metadata additions: the datetime the log was recieved and the IP address it came from.
Also, since this is a performance critical application, there should be some way to easily run a basic performance benchmark of the agent.

## Additional Details

1. Please refer to the [*How To Approach These Problems*](../README.md#how-to-approach-these-problems) section of this repo's README file for more information on how to approach this work.
