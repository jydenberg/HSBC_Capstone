# HSBC API Service 
This service serves the role of a prototype for a public HSBC API, purposed as a business back-end for a [Google Assistant
/ Dialogflow chat-bot application](https://github.com/CPSC319-2017w1/hsbc.team-bot). The service supports the following endpoints, each of which may be encapsulated in an individual
microservice in scaled production as features are added:

1) *xrates*: exchange rates and conversion
2) *calculate/loans*: loan-related calculations
3) *content*: product specific information
4) *atm*: geolocational listings of HSBC ATMs in the GVA
5) *appointments*: requesting apppoinments with

In place of an API authentication and authorization system, the service employs the basic authentication mechanism with a single valid user-password pair, specified in the *HSBC_USER* and *HSBC_PASS environment* variables, and should thus be deployed via HTTPS (see sections below for details on the runtime, development dependencies and deployment). The service is implemented in TypeScript, and targets ES6 (see [`src/tsconfig.json`](https://github.com/CPSC319-2017w1/hsbc.team-bot/blob/master/src/tsconfig.json) for configuration).

The service implements a debug switch via environment variables: if there is a variable `DEBUG=1` in the service's process runtime environment, authentication is not required (the authorization headers of incoming requests are ignored). 

# Service Dependencies
### Third Party API Credentials
The service implements the appointment endpoint via an e-mail client via the *nodemailer* module. The intention of the endpoint is that, when a POST request is made to book an appointment, an e-mail is sent to a predetermined mailbox (that of a customer service representative) with booking information, and the booking reference is sent back to the client. Thus the service requires access to a mailbox (e.g. a GMail account) via its username and password pair. These are loaded into the service at launch time (see the *Create Environment Configuration* section for setting details). 

### Runtime
- NodeJS (>=6.0.0) with bundled package manager *npm* (>=5.5.1) for the target OS
- MongoDB (=3.4)
- *.env* file with all the required environment variables in the project root folder (see Environment section)
- Node modules dependecies (see [`package.json`](https://github.com/CPSC319-2017w1/hsbc.team-bot/blob/master/package.json))
- TypeScript source files in the `src` directory compiled into the `out` directory

### Build and Development
A Bash shell is required for all scripting purposes. On Windows, the recommended solution is [Git Bash](todo). All other development dependencies besides the MongoDB are installed as project-local Node modules. Please refer to the *devDependencies* field in [`package.json`](https://github.com/CPSC319-2017w1/hsbc.team-bot/blob/master/package.json) for the full list and version of these dependencies. For rapid development cycles, it is highly recommended that the following Node modules are installed globally on any given development machine:

| Module                 | Purpose                                                 |
| -----------------------| ------------------------------------------------------- |
| *typescript* (>=2.5.3) | IDE- and CLI- integrated compilation}                   |
| *mocha* (>=3.5.3)      | IDE- and CLI- integrated testing                        |
| *ts-node* (>=3.3.0)    | running mocha tests directly on TypeScript source files |
| *grunt-cli* (>=1.2.0)  | IDE- and CLI-i integrated task management               |

### Deployment Tools
There are numerous deployment models for web APIs such as the current HSBC API prototype. Due to its self-contained yet lgihtweight architecture, this service supports the containerization model via Docker, as well as affordances for continuous integration via the tools listed below. Which of these tools is required depends on the target deployment model. Since the primary client of this service is a [Google Assistant / Dialogflow applcation](https://github.com/CPSC319-2017w1/hsbc.team-bot), the toolset is specified with the Google Cloud Platform in mind. Minimally, operators require a local installation of Docker and access to a hosting platform via its GUI (AWS, GCP, Heroku) for manual containerized deployment. For ease-of-use, operating on Linux is recommended, but not required (specifically, Docker requiers an additional virtualization layer on Windows for hosting containers, which rely on the Unix host file and permission systems). Bare-metal or VM-based server deployment (e.g. Tomcat, Apache) are not discussed here due to their widespead use and available extensive literature. For all the tools, install the latest available stable version.

- [Docker Community Edition](https://store.docker.com/editions/community/docker-ce-desktop-windows)
- Docker-machine (required for Windows, included in above installer, used to host Docker containers clusters via VirtualBox)
- VirtualBox (required for Windows, used to create local VM to act as docker engine hosts)
- [Google Cloud SDK](https://cloud.google.com/sdk/) (for managing deployment on GCP via CLI)

If you aren't able to install Docker locally for one reason or another, see the 'Google Cloud Platform Note' under the *Deploying on the GCP* Section for how to use the Google Cloud Console Shell as a build environment for Docker images.

**Windows Note**

> Docker on Windows has a number of complicating requirements, discussed in detail on the [Docker website](https://docs.docker.com/docker-for-windows/install/#what-to-know-before-you-install). A brief overview is presented for consideration below, which may be necessary to follow the instructions in the "Deploying to GCP section below". However it is assumed that the final production operator of this service will have the sufficient expertise in Docker to counter any potential problems.

> Docker Community Edition for Windows 10 Home, or earlier versions of Windows, requires that docker-machine is installed, which in turn requires that VirtualBox is installed. VirtualBox is a commonly used virtualization tool. Docker-machine uses VirtualBox to create a Linux instance to host the docker-engine - the application used to create container images, and to orchestrate their deployment on the (Linux) host. Docker-engine accomplishes this through very clever Unix- based file system and namespace manipulation, and thus cannot be used on Windows systems as of this writing (27-1-2017). Thus a Windows-local Docker deployment has the following 10,000 ft view:

> Windows (VM host) -> docker-machine -> VirtualBox -> Linux VM (host) -> docker-engine ->>> Docker instances

> To start docker-machine after running the Docker Community Edition installer, run the `docker-machine start default` command. If you get a *host does not exist* message, create one with `docker-machine create default`, and run the start command once the creation is complete.

> For docker to function via docker-machine, a number of environment variables must be set. You may get a listing of the required variables and their values by calling `docker-machine env default` in the Windows command line. The output of this command also includes the shortcut command to load them into the shell process's environment. You may have to run this command on every restart, or add them to the startup configuration. On certain systems and installations, there is a known bug which causes misconfiguration of the VirtualBox network adapters, causing port-forwarding and networking functions to be inaccessible by Docker.

> To test that docker is functioning correctly, run the `docker ps` command, which lists the Docker images in your local Docker repository.

### Optional Tools

**Ngrok**
In addition to the above, the developer may choose to install [*ngrok*](https://ngrok.com/) to safely expose a local port on a temporary static public address over HTTPS and/or HTTP. Once the *ngrok* binary is downloaded, this is accomplished simply by running the `ngrok http [PORT]` command (platfrom-independent). The tool is useful for rapidly prototyping webhooks and APIs. An example scenario is when it may be useful to temporarily route a staged client of this service to a version running locally in order to test a hotfix. See the tool website for implementation and usage details.

**Swagger**
The service uses [Swagger](swagger.io) - an online API development and maintenance tool - to document its API. The Swagger Editor tool may be used to load the swagger.yaml spec into a pleasant human-readable view. Meanwhile, the Swagger Codegen tool can be used to generate a client library in a target language from the swagger.yaml spec file. If you intend to use this functionality, special care must be taken to maintain consistency between the Swagger specification and actual API versions until the service implements full integration with the tool (i.e. when the server code is also generated by the Swagger Codegen).

# Installing and Running the Service Locally
Follow the instructions below to configure the local infrastructure required to build and run the application locally. The latest installers as of the time of this writing (27-11-2017) are included in the Dependencies directory of the installation disk.

#### 1. Configure NodeJS
- [Download](https://nodejs.org/en) the latest LTS version of NodeJS and select all default options during installation
- Add the NodeJS installation directory to the system PATH environment variable
- Check that installation was successful with `node --version` and `npm --version`

#### 2. Install global development modules
- `npm install -g typescript grunt-cli ts-node mocha`
  
#### 3. Configure MongoDB
- [Download](https://www.mongodb.com/download-center?jmp=nav#community) MongoDB Community Edition for your platform and following the default installation instructions
- Add the MongoDB installation path to the system PATH environment variable
- Check that the installation was successful by running `mongod --version` and `mongo --version`
- Launch the MongoDB service if it isn't running with `mongod` (typically this is not required as the installer will launch it on completion, and add the daemon to the startup configuration)
- In a terminal, connect to the running MongoDB instance (conventionally on port 27017) with the `mongo` command and use the following commands to configure database and authentication:
    * `use DB_NAME # e.g. DB_NAME=hsbc-service-db. DB_NAME must end with 'db'`
    * `db.createUser({user:'USER',pwd:'PASS',roles:['readWrite']})`
- Restore the local database to the latest dev dump (provided in the Dumps directory of the installation disk ):
    * `mongorestore --db=DB_NAME --d=DUMP_DIR # e.g. DUMP_DIR=D:/Dumps/27-11-2017`
- Check that the restore was successful:
    * In a terminal, start a MongoDB client with `mongo`, then:
    * `use DB_NAME`
    * `show collections # should list fxrates, atms and contents`
    * `db.atms.find() # should list all ATM objects in the 'atms' collection`

#### 4. Build service
```bash
# Clone the repository (or use the provided version in the `hsbc-service` directory on disk)
git clone https://github.com/CPSC319-2017w1/hsbc.team-bot-service.git
cd hsbc.team-bot-service # (or navigate to `hsbc-service` instead if using version on installation disk)
npm install # install package-local dependencies
grunt build # compile project
```
**Aside**
Under the hood, the *grunt-ts* module is used to run the typescript compiler (*tsc*), since it features smarter module resolution with respect to type definitions compared to npm. Notably, compiling directly with `tsc src/**/*.ts` may give warnings about unresolved type definitions for Promise modules used in the project.

#### 5. Create Environment Configuration
HSBC API uses the [*dotenv*](https://www.npmjs.com/package/dotenv) module to load the environment configuration. Dotenv fetches variables from a *.env* file in the project root directory, and loads them into the `process.env` NodeJS process object. It is important that this file is NOT VERSIONED, as it will contain secrets and various configuration data that should be hidden from clients or project contributors. Developers and operators may swap the contents of file between local, testing, production and other environments. This file may also be used to set the port the service will listen on, and to set the DEBUG switch to 1 to disable basic authentication.

**Environment Variables**
The required environement variables are listed below, with example values for local deployment. For the MONGO_* vars, use those set in step 3 above. Provide the HSBC_USER and HSBC_PASS tokens to the clients of this service (to be deprecated when a production authentication mechanism such as OAuth2 is implemented). An .env file with null values is provided in the Environment directory of the installation disk).

```bash
DEBUG=1 # use in development only - disables authentication
PORT=8080
MONGO_DB_HOST=localhost # from step 3
MONGO_DB_NAME=hsbc-db # from step 3
MONGO_DB_USER=hsbc-db-username # from step 3
MONGO_DB_PASS=astrongpassword # from step 3
HSBC_USER=hsbc-client # provide to service clients
HSBC_PASS=agreatpassword # provide to service clients
HSBC_EMAIL_ACCOUNT=mailbox-name # see Third Party API Credentials
HSBC_EMAIL_PASS=mailbox-pass # see Third Party API Credentials
```

#### 6. Launch the application
The project comes with two launch options preconfigured via `npm` and `grunt` tasks:
1) Launching in production, or launching locally for debugging: `node out/www.js`
Assumes project has been built with `grunt build`. Launching the service directly in a NodeJS process allows for attaching a debugger process (e.g by an IDE).

2) Lauching for rapid development: `grunt serve`
This command will start a watcher to track file changes, which will in turn recompile and restart the service on the fly as the changes are saved to disk. This flow is extremely useful for rapid debugging and prototyping, especially in conjunction with tools like [Postman](getpostman.com). However, since the actual Node runtime hosting the application is launched in staggered child processes (to support low-latency hotloading), this means a debugger will not be able to attach to it non-trivially.

### 7. Testing the application
Once the service has been started, run the functional and API tests in a separate terminal with `mocha -r ts-node\register test\**.ts`

# Deploying on the Google Cloud Platform (GCP)
Currently, HSBC API is deployed via the App Engine service of the GCP, using Docker to build a custom runtime image. This section describes how to accomplish this simplified deployment model. Note that App Engine is a fully automated / managed deployment solution, which may over-provision resources and will abstract away most details of the deployment. For a deployment model with tighter infrastructure constraints, consider using the Google Cloud Kubernetes Engine. Due to its somewhat steep learning curve, and advanced intended use cases, the Kubernetes model is left out of scope of the current document. Also note that while this deployment model follows rudimentary security practices, the final release model must take greater care to isolate individual resources via subnets and tightly control intra-project authorization rules via [Google Service Accounts](https://cloud.google.com/iam/docs/understanding-service-accounts). 

## Manual deployment
Before proceeding, pleasure make sure you have created a Google account, and 1) installed all the tools specified for your platform in *Deployment Tools*, and have followed the instructions above to build the project locally OR 2) have a reliable network connection and access to the Google Cloud Console Shell. The scripting commands may be run in a Bash shell (such as *git bash* on Windows or the default shell on Linux distributions), or via the Windows Command Line (*cmd*). The behaviour of these commands in PowerShell has not been tested.

**Prepare the GCP project**

- [Create a GCP Project](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
- [Enable billing for the project](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_new_project)
- Configure Google Cloud SDK
`gcloud auth login # login when prompted, and allow all requested permissions on the following page`
`gcloud config set project PROJECT_ID # where PROJECT_ID is the name of the project created in step 1`
- Create a *production* network in the project
`gcloud compute network create production --subnet-mode=auto`
- Allow all internal traffic within the network
    - Open the project page in the [Google Cloud Console](https://console.cloud.google.com)
    - Click the burger button on the top left
    - Select VPC Network -> Firewall rules
    - Select 'Create Firewall Rule'
    - Enter an appropriate name for the rule (e.g. 'production-allow-all-internal')
    - Select 'production' in the 'Network' drop-down
    - Select 'All instances in this network' in 'Targets drop-down
    - Enter the internal network address mask in CIDR notation (10.128.0.0/9) in the Source IP Ranges' field
    - Allow all Protocols and Networks
    - Create

**Deploy a MongoDB solution**

In final production, the operations and database teams will want to specify the infrastructure, replication, persistance and consistency aspects of the database, which requires considerable expertise and is thus outside the scope of this document.

To that end, the current deployment model uses 'MongoDB by Bitnami' - one of ready-made MongoDB solutions for the GCP available via the Google Cloud Launcher - due to its ease of use and quick setup time. You may use these instructions to create several database versions (staging, develop, etc), though in final production it is recommended the full infrastructure configuration is codified by and provisioned via a Kubernetes or [Terraform](https://www.terraform.io/) script (again, outside the scope of this documentation).

From the project dashboard:
- Burger -> Cloud Launcher -> Search Solutions -> MongoDB
- Select 'MongoDB Certified by Bitnami' from result
- Select 'Launch on compute engine'
- Select 'production' in the 'network' drop-down, and click 'Deploy'. You will be taken to the Deployment Manager service page for the created Compute Engine instance.
- [Promote the ephemeral external address of the instance to static](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address)
- [Configure SSH access into the instance](https://docs.bitnami.com/google/faq/#obtaining-your-ssh-credentials-from-the-google-cloud-launcher).
In particular, make sure to create an SSH firewall rule from a reliable source (for example, you may follow the instructions for creating the 'production-allow-all-internal' firewall rule above, replacing Target with the Service Account created for the instance by this solution, the source filter with your static IP, and the allowed protocols with "tcp:22"). Then connect to the instance with `ssh -i bitnami_rsa bitnami@[STATIC_ADDRESS]`, where *bitnami-rsa*  points to your local copy of the RSA SSH key you added for the instance.
- [Change the root password](https://docs.bitnami.com/google/infrastructure/mongodb/#how-to-change-the-mongodb-root-password)
- [Create a database](https://docs.bitnami.com/google/infrastructure/mongodb/#how-to-create-a-database-for-a-custom-application)
- [Create a user for the database with read and write permissions](https://docs.bitnami.com/google/infrastructure/mongodb/#how-to-create-a-user-with-restricted-privileges-in-an-existing-database)
- From a host with access to the latest database dump (such as one provided on installation disk), copy the dump to the MongoDB instance with *scp*
- Back in the MongoDB instance, restore the database with
 `mongorestore --host localhost --port 27017 --db DB_NAME --authenticationDatabase admin --dir DUMP_DIR`
- (Optional) If you wish to connect to this database from an instance of the service running locally, or outside the 'production' network more generally, use the instructions above to create a firewall rule allowing traffic to tcp:27017 from all source IPs (0.0.0.0/0).

**Build Docker Image and Deploy to App Engine**

First, follow the steps above to Create an Environment Configuration, using the 1) username-password pair of your deployment Google Mail account, 2) the username-password pair, external static address and name of the MongoDB instance you deployed in previous steps and 3) username-password pair of your choice for the service itself to populate the corresponding variables in an .env file. Make sure the .env file does not contain the DEBUG or PORT variables.

***Google Cloud Platform Note***
> The Google Cloud Console Shell (available by clicking the leftmost square button with the ">" character on the top right of a project dashboard page) comes preconfigured with NodeJS and Docker. If you are having difficulties with installing and using Docker locally, you may use this Cloud Shell as the image build environment. Note however, that, the Docker registry local to the shell instance will be cleared periodically, and thus you will not have the advantage of using Docker's layering feature for quick iterative builds.

With a Docker configuration available, and the `.env` file present in the project root directory, set the PROJECT_ID environment variable with `export PROJECT_ID=[PROJECT_NAME]` in a shell terminal, make sure that the project version is set correctly in the BUILD_VERSION file in the project root directory, and run the provided *deploy.sh* script. You will be prompted for confirmation. The initial build may take up to 1 minute depending on your network connection, though consecutive builds typically complete within seconds if your local Docker repository lists at least on previously built image.

To perform the steps in the script manually, run the following commands to build an image of the service targeting App Engine:

```bash
cd project dir
npm install
grunt build
export IMAGE_TAG=gcr.io/PROJECT_NAME/hsbc-service:PROJECT_VERSION
docker build -t $IMAGE_TAG .
gcloud docker -- push $IMAGE_TAG
```

You may start the container with `docker run -p 8080:8080 $IMAGE_TAG`, and run the mocha API tests against it to confirm that the build is stable. To deploy the service, or to perform a rolling update of an already deployed version of the service, use the following command in the project working directory (where the app.yaml configuration file is located):

`gcloud app deploy --promote --stop-previous-version --image-url=$IMAGE_TAG`

You will be prompted for some vertification steps, which will vary depending on whether this is your first deployment or an update. In either case, GCP typically takes at least 10 minutes or longer (depending on service instance cluster size) to deploy and promote the given version of the service. Once complete, details about the deployment will be printed. Note that GCP imposes certain quotas on static addresses and other resources in a project. If you ever get an error during deployment that the IN_USE_ADDRESS quota was exceeded, you may request to increase the quotas for your project, or by deleting previous in the GCP project dasboard via *Burger -> App Engine -> Versions -> [select service name from drop-down] -> [check versions to remove] -> Delete*.
