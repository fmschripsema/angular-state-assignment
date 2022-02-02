# Angular State Assessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0, Typescript 4.5.5.

### Some notes

- I've been trying to learn Tailwind, so I choose to use it within this project as well. The goal was to not use custom
  styling. I only added some for the animation of the flipping tiles.
- I retrieve the posts by using the httpClient
  - Within the main branch I chose to retrieve the posts in the post component(smart), to be able to pass the posts to
    the tile component(s)(view/dumb)
  - Within the state branch I chose to set the state on app load.
  - I use async pipe for all the subscriptions to handle unsubscribe when needed or watch for changes.
- I haven't worked with state services in my professional career (yet) so I've tried a few solutions for this
  assignment.
  - I ended up with keeping it small and simple: only a getter and a setter by using a BehaviourSubject
  - I rather refactor the service to handle more events when the situation asks for it -> for example: a new feature(
    add, edit, remove)

Thank you for your time!

# How to run the client locally

## Install dependencies

Run `npm install` to install the required dependencies.

## Client server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## The generic questions

# 1. JWT

There are two things that I noticed: the email address and the admin flag. I can toggle the admin flag to true. I don't
think that should be possible, imagine what someone can do with all that power. Luckily the token expired many years
ago (1969). Secondly when decoding the JWT-token you can retrieve an email address, I think that is a privacy issue and
that should never happen.

One other thing I thought of was the algorithm HS256. I googled it, and it seems that it's a symmetric algorithm where
you authenticate with a shared secret key. Although it's recommended to use the algorithm ES256 which is an asymmetric
algorithm where you should upload the public key and authenticate the requests with the private key. I think this would
improve security.

# 2. Security Risks

Cross-site scripting (XSS). This happens when the web application receives incorrect processed data (such as cookie,
url, request parameters) and therefore ends up in the output to the end user. Malicious code can be injected through
this bug in the website. This allows, among other things, to view session cookies, to take over a user's session, to
enrich the functionality of a website or to perform unintended actions for a user.

And how would you mitigate these vectors? I would love to learn more about this.

# 3. Mutable and Immutable objects

A mutable object can have their state changed after they have been created. An immutable object cannot be changed. When
you want to change an Immutable object you create a new object. It helps us to keep the current state.

a. Strings are immutable. Every time you change a string with some operation, you actually create a new one.

b1. Pros

No unexpected behaviour. With mutable objects, it can happen that your object changes as a side effect of some process,
and it is difficult to see in the code. You pass the object along to some function, and after that you continue working
with it. But its state might have changed in that function, and you can't see that from looking at the code. So I'd say
it helps code readability, decreases side effects, and helps enforce encapsulation, because you're not allowed to change
something from the outside.

b2. Cons

If you're following good principles of writing code you won't have any. That's a challenge then, to write it well and
not resort too hacks. Memory should not be an issue, since unused objects are periodically garbage collected.

c. That depends on the language. Basic JavaScript can't help much here, apart from primitive types everything in it is
mutable, even if you use 'const' you can still change the object internally, the only thing 'const' prevents is
reassigning it to the same variable.

You can use TypeScript, enforce some eslint rules and make everything 'readonly', encapsulate state changes to their
classes instead of passing objects around and changing them. So for example instead of
having `changeTheNameOfUser(user)` you would have `user.changeName(name)`.

You can also use either `Object.assign()` or `Object.freeze()` or the spread operator.

# 4. Speed

Some steps I would take

- Single page apps (Angular) are slower because they have to load everything at once. I would improve that by
  implementing lazy loading, paginating large queries and caching (images for example, and other content that is
  unlikely to change often).
  - It's a bit more difficult when allowing users to upload images, but if it's an app that uses a lot of images I would
    try to convert them to `webp`, this really improves loading speed.
- Check network calls. If they are slow on the server side I would implement async requests.
- Does the App have large Angular modules(and when working with Nx -> Nx modules) -> split them up in smaller modules.
  Especially the large shared ones.
- Bundle size, does the app really need all the dependencies? Are there large dependencies that can be replaced or even
  written by ourselves to reduce size?
- Lastly I would use some devTools to analyze and test the app.

# 5. New job

Both depend on what you're working on. As a designer you need both a choice in hardware and software, as a developer you
have different requirements based on the stack you work with. Next to that, I've noticed that working in the same
environment as your teammates really improves communication and collaboration. That's why I would choose for option A.

