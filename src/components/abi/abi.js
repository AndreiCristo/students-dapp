export const studentContract = [
  {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "SetData",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "Owner",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_IdentityCard",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_FathersInitial",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_DateOfBirth",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_MailingAddress",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_PhoneNumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_Country",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_Nationality",
          "type": "string"
        }
      ],
      "name": "setData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "setNewName",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_MailingAddress",
          "type": "string"
        }
      ],
      "name": "setNewMail",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "studentID",
          "type": "uint256"
        }
      ],
      "name": "getStudent",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "IdentityCard",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "FathersInitial",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "DateOfBirth",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "MailingAddress",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "PhoneNumber",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "Country",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Nationality",
              "type": "string"
            }
          ],
          "internalType": "struct StudentContract.StudentInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]
