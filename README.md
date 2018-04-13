# Project Lintol - Challenge 1

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-blue.svg?style=flat-square)](#contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](http://makeapullrequest.com)

> A open source submission to the Lintol Challenge to identify [Personally Identifiable Information](https://mailchi.mp/a5d4c7d57918/challenge-1-personally-identifiable-information) within CSV files.

## Getting Started

These instructions will enable you to setup and run the project on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

* [Docker](https://docs.docker.com/install/)
* [Node](https://rometools.github.io/rome/)

### Setting up local development

The following steps will checkout the repository, install the dependencies needed for the React frontend and run the service on `http://localhost`.

```bash
$ git clone https://github.com/robertwpaul/lintol-challenge-1
$ cd lintol-challenge-1
$ docker-compose up
```

And to tear down the local development stack, simply run:

```
$ docker-compose down
```

### Output

The output will be written to [data/output.json](data/output.json); running this script with `docker-compose up` or `node index.js` will overide the output in the `/data` folder.

[![asciicast](https://asciinema.org/a/176136.png)](https://asciinema.org/a/176136)

## Available Processors

The following is a list of the available processors:

* [Email Address](docs/processors/email)
* [MAC Address](docs/processors/mac-address)
* [IP Address](docs/processors/ip)
* [National Insurance](docs/processors/national-insurance)
* [Phone Number](docs/processors/phone-number)
* [Vehicle Registration](docs/processors/vehicle-registration)

## Adding a processor

Adding a new processor couldn't be easier.

* Create a new directory under `/src/processors` with your processor name
* Add processor implementation within the new created directory
* Add the processor as an export within `/src/processors/index.js`
* Run your processor using `docker-compose up`

## Running Tests

Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated "zero-configuration" experience. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in more stable and healthy code bases.

```bash
docker-compose run test
```

## Code style

This codebase is formatted with Prettier. Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

To ensure code consistency within this repository you should run the following command before committing code:

```bash
docker-compose run task npm run format
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/robertwpaul/lintol-challenge-1/issues)

## Contributors

A list of contributors who participated in this project.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/1443700?v=4" width="100px;"/><br /><sub><b>Kyle Harrison</b></sub>](http://www.kyleharrison.co.uk)<br />[💻](https://github.com/robertwpaul/lintol-challenge-1/commits?author=apoclyps "Code") | [<img src="https://avatars3.githubusercontent.com/u/25768210?v=4" width="100px;"/><br /><sub><b>Robert Paul</b></sub>](https://github.com/robertwpaul)<br />[💻](https://github.com/robertwpaul/lintol-challenge-1/commits?author=robertwpaul "Code") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

Licensed under the [Unlicense](#LICENSE).

***
