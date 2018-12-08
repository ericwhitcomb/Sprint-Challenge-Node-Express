# Review Questions

## What is Node.js?

Node.js is a javascript runtime engine that generally runs on servers, allowing Javascript
the functionality of other programming languages. Node allows javascript files to be run from
the command line, has a package manager, and can access the computer's filesystem. It is
cross platform and runs on popular Operating Systems like Windows, Mac OS X, and Linux.

## What is Express?

Express is a web framework that runs on Node.js. It turns a Node environment into a web server
with full REST capabilities. It can be added through the node package manager (npm) or yarn.

## Mention two parts of Express that you learned about this week.

Server and Router.

## What is Middleware?

Middleware is software that can be injected to act upon code in the middle of its various
operations. It generally works as a function with custom code that adds additional
functionality. Uses for middleware can include authentication, protection, logging, and
many more features.

## What is a Resource?

Resources are essentially data objects. In REST APIs, resources can be created, read, updated,
or destroyed (CRUD). Resources are accessible via the API's endpoints. Resources can also be
thought of as collections of data objects. For instance, with a GET request, you could access
the endpoint to return a collection of data objects or provide and id and get only one data
object.

## What can the API return to help clients know if a request was successful?

Generally response codes in the 200s are used. The two I am most familiar with are-
    
    200 - OK
    201 - Created

## How can we partition our application into sub-applications?

Express Router makes partitioning easier as it operates as middleware, which allows for us
to include a file for a particular group of router endpoint operations. This allows us to
partition our endpoints by resource type. We can include all the CRUD operations into one
file for a particular resource type and then use it as middleware in our server, like so-

    server.use('/api/resource', resourceRouter);

## What is express.json() and why do we need it?

It is a middleware that parses the request body into json from plain text. This allows us
to use any data in the body of the request as json without first having to convert it.
