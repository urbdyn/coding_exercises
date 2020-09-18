# Coding Exercise: Linux Port Visibility

> "Ideas are easy. Execution is everything." - John Doerr

## Overview

You work as an SRE at your employer.
And there's an unusual problem in production: Sometimes the application web servers don't exit during failure or restart scenarios and thus hold on to the standard address & port (`127.0.0.1:3000`).
This results in the silent failure scenario where the web server then grabs the next available port (`127.0.0.1:3001` for first iteration of this) causing the system to report being healthy but actually not being operational.
In some cases this can cycle endlessly, causing many ports to be held open and even potentially crashing the machine.
All of this is very bad.
After a heated call a few hours ago, the development team for the application web server has made it very clear that it will, sadly, take some number of weeks to fix this.
So, for the foreseeable future, this problem falls to your SRE organization to deal with.
As per standard SRE practices, one of the first steps to fixing a problem is measuring it.
You've been tasked with accomplishing this.
Your company runs a standard monitoring solution ([node_exporter](https://github.com/prometheus/node_exporter)) on all machines (Centos 8 and Ubuntu 20.04 LTS), however it is not well suited to provide visibility for this problem as it doesn't provide specific port information.

You are to build a light weight agent which provides open port information to provide visibility into this so it never happens again in the future.


## Deliverables

Provide a Github repository which contains your agent to monitor system port information to make this problem visible in the future.
This agent should provide an API as well as a human viewable web page to easily view the details for a particular machine.


## Additional Details

1. Please refer to the [*How To Approach These Problems*](../README.md#how-to-approach-these-problems) section of this repo's README file for more information on how to approach this work.
