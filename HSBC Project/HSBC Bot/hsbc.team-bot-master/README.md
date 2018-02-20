**Dev Dependencies**
- npm
- typescript (`npm install -g typescript`)
- ngrok (https://ngrok.com/)
- grunt-cli (`npm install -g grunt-cli`)

**Local Development**

Clone the repo, `cd` into the desired service, and run `npm install`. There are several options for running
and developing the service.:

1) `npm run start` will launch the service on the default port (8080)
(you may specify a different port, but do not version it - all services have to run on 8080 by default in
the production environment for the AppEngine deployment model to work)

2) `grunt serve` (recommended) will launch the service on the port specified under the *nodemon* task in the
service's *gruntfile.js*, listen for changes in Typescript source code, and recompile and relaunch the
service as the changes occur. The code updates are very fast in practice. This is very useful for rapid prototyping -
especially in combination with a tool like Postman. Since both services are stateless, restarting them should have
no functional effects.

There is a README under each service for service-specific instructions.

**Running tests**

You must have the following npm modules installed globally to run the tests:
- ts-node

To run functional tests from command line:
- `mocha -r ts-node/register test/functional/**Test.ts`

To run API tests:
- `grunt serve` or `npm start` in one terminal
- `mocha -r ts-node/register test/api/**Test.ts` in another terminal

You may also use IntelliJ's run configuration:
- Run -> Edit Configurations -> + Mocha
- Add "-r ts-node/register" to the Mocha parameters
- Add "test\functional\**Test.ts"
