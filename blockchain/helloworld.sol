pragma solidity ^0.4.0;   

contract HelloWorld {   

  string public theMessage;
 
  constructor() public { 
    theMessage = 'Hello World!';   
  }
 
  function updateMessage(string message) public { 
    theMessage = message;
  }
  
}