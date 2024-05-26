
# Trades parser

This contains APIs for Trades parser and Balance calculator




## APIs

### Trades Parser

```http
  POST /api/trades/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `file` | `.csv file` | **Required**. Upload as form-data |

### Balance Calculator

```http
  GET /api/trades/getBalance
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `timestamp`      | `time` | **Required**. Time for which Balance needs to be calculated|

## Steps for Setup

#### Prerequisites:
Node version: v18.17.0 +
Note: The setup instructions are provided for Windows systems. Commands must be executed in PowerShell. For other operating systems, commands may vary accordingly.
```bash
  node --version
```
#### Step 1: 
In the terminal go the project directory and install the dependencies
```bash
  npm i
```
#### Step 2: 
create a file .env in the root folder and copy the .env-examples in it.

#### Step 3:
create a mongoDB cluster and paste the MONGODB_URI in the .env file.

#### Step 4:
Use the start command to start the server.
```bash
  npm start
```
Now the server is running on http://localhost:3000 you can access the endpoints on this.

## Tech Stack

**Server:** Node, Express

**Libraries:** multer, csv-parser, body-parser, fs, mongoose

**Database:** MongoDB





