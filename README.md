# Bpdts App

API client which calls the API at https://bpdts-test-app.herokuapp.com/ and returns people who are listed as either living in London, or whose current coordinates are within 50 miles of London

## Requirements

Node v14.5.0

## Dependencies

- axios
- chai
- body-parser
- dotenv
- express
- geolib
- nock
- underscore
- mocha"

## Installation

Setup
```
npm install
```

## Usage

Run
```
npm start
```

Postman (GET) or browser
```
localhost:3000/usersController/London
```
Curl

## Tests

Run
```
$ npm test
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
