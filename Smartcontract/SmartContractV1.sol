pragma solidity ^0.6.0;

contract SignalAt2PartyConfimation {
    enum State { AWAITING_TRANSFER, AWAITING_DELIVERY, COMPLETE }
    enum State2 { AWAITING_TRANSFER, AWAITING_DELIVERY, COMPLETE }
    
    State private currentState;
    State2 private currentState2;
    
    address payable Client;
    address payable deliverer;

    modifier onlyClient() {
        require(msg.sender == Client, "Only customer can call this method");
        _;
    }
    
    modifier onlyDeliverer() {
        require(msg.sender == deliverer, "Only deliverer can call this method");
        _;
    }
    
    constructor(address payable _Client, address payable _deliverer) public {
        Client = _Client;
        deliverer = _deliverer;
    }
    
    function SignalAmount()onlyClient public payable {
        currentState = State.AWAITING_DELIVERY;
        
    }
    
    function WorkDeliverd() onlyDeliverer external {
        currentState2 = State2.COMPLETE;
    }
    
    function SatisfiedCustomer() onlyClient external {
        currentState = State.COMPLETE;
    
    }
    function transfer() payable public {
        require(currentState == State.COMPLETE && currentState2 == State2.COMPLETE, "Disagreement on project completion");
        if (currentState == State.COMPLETE && currentState2 == State2.COMPLETE) {
             deliverer.transfer(address(this).balance);
        }   
    }
    function Balans() public view returns (uint256){
        return address(this).balance;
    }
}
