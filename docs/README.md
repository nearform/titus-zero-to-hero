![Logo][logo-img]

Titus is a production grade, end-to-end, project stack created for modern web application development. It comes with dev-ops and auth pre-configured. We designed Titus to be a supremely useful walking skeleton that can get you to deployed in "sprint one".

It is an opinionated approach for starting a new application, but it's flexible enough to be tuned to match personal preferences.

It's different from application generators like [create-react-app]() (in fact, it builds on top of it), because the purpose of Titus is to get to deployed, useful features, rather than a bare-bones application skeleton alone.

## Overview
Titus is a Monorepo project that represents a full stack application. The primary constituent parts are,

- [titus-kitchen-sink](): A client-side app generated using [create-react-app]()
- [titus-kitchen-sink-backend](): A server side app built using [hapi]()
- [titus-noise](): A deployment pipeline, using [noise]() that enables continious cloud delivery
- [titus-components](): A collection of various useful components for use (or deletion)

On top of these services Titus also provides some common sense infrastructure,

- A [PostgreSql]() database with and [adminer]() management frontend
- A [Redis]() deployment
- An [S3]() Faker service

It looks a little something like this,

![diagram b][]

## Why we built this
Content should go here.

- [Considerations for building Titus]()

## Getting started
The quickest way to get started is to view our quick start guide. It covers, forking, cloning, and pulling Titus local. From there it will walk you through configuration and deployment. All you need installed is the latest stable versions of [Docker]() and [Node]().

- Go to the [Quick start](/quick-start)


[logo-img]: img/logo-pos.svg
[docs]:https://nearform.github.io/titus
[noise]:https://nearform.github.io/noise
[titus]:https://nearform.github.io/titus


[diagram b]: img/diagram-b.svg