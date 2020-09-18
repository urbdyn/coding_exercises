# Coding Exercise: CentOS RPM for Node.js Web Server

> "Ease of use may be invisible, but its absence sure isn’t." - IBM

## Overview

Packages are an important way that software is distributed and used.
In this exercise you will create a Centos RPM package of a Node.js project which runs a small web server.
This package provides the web server and is part of a larger software solution which is sold to and used by paying customers, mostly enterprise businesses.


## Deliverables

Provide a Github repository which contains all files for packaging.
This repo should use a CI system (Github Actions, etc) to build and publish the RPM as a release to the Github repo.
The package should follow Centos standards where possible for packaging a web server but strive to preserve the confidentiality of the source code.


## Additional Details

1. Please refer to the [*How To Approach These Problems*](../README.md#how-to-approach-these-problems) section of this repo's README file for more information on how to approach this work.
2. This web server is available as a standard NPM package archive in [`additional_material/nodejs-webserver-1-1.4.2.tgz`](../additional_material/nodejs-webserver-1-1.4.2.tgz).
