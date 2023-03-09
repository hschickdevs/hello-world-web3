
//Save the address of the contract actually deployed
const contractAddress = "0x09AE791F1Dc099aa9E155c8adc3c4222c41D4CA1";

//Copy the ABI from the smart contract in Remix
const abiInfo = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "message",
                "type": "string"
            }
        ],
        "name": "updateMessage",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "theMessage",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];