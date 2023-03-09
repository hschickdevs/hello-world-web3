//Define the provider of web3, either locally or injected
this.web3 = new Web3(
    (window.web3 && window.web3.currentProvider) ||
    new Web3.providers.HttpProvider(this.Contract.endpoint));

//output the current provider to ensure it is working
console.log(web3.currentProvider);

//Enable the Ethereum Package   
window.ethereum.enable();

//Output console information
console.log("enabled ethereum");
console.log("web3::::");
console.log(this.web3);

//output the accounts tied to MetaMask to verify connection
web3.eth.getAccounts().then(console.log);

//Save the accounts from MetaMask into an "theAccounts" variable
web3.eth.getAccounts().then(function (acc) { theAccounts = acc })

//Copy the ABI from the smart contract in Remix
console.log(abiInfo);
//Save the address of the contract actually deployed
console.log(contractAddress);


//Define the new contract and set the network to ropsten
var HelloWorldContract = new web3.eth.Contract(abiInfo, contractAddress);
// HelloWorldContract.defaultChain = 'ropsten';

//Outputing the full details of the contract to explore
console.log('Created contract connection');
console.log(HelloWorldContract);

//function to retreive the public variable from the contracts methods
async function getMessage() {
    //code to get theMessage variable from contract
    var myMessage = await window.HelloWorldContract.methods.theMessage().call();
    console.log(myMessage);

    //Update the DIV where the message will go using simple javascript
    const theMessageHolder = document.getElementById('theMessage');
    theMessageHolder.innerHTML = myMessage;
}

//function to update the message using the contracts method
async function setMessage(newMessage) {
    window.HelloWorldContract.methods.updateMessage(newMessage).send({ from: theAccounts[0] });
    console.log("Sent: ", newMessage);
}

//function to update the message using the contracts method and textbox
async function setMessageBox() {
    //Get the input box value
    var newMessage = document.getElementById('newMessage');
    var messageString = newMessage.value;
    window.HelloWorldContract.methods.updateMessage(messageString).send({ from: theAccounts[0] });
    console.log("Sent: ", messageString);
}

setInterval(function() {
    if (typeof web3 !== 'undefined') {
        getMessage();
    }
}, 2000);