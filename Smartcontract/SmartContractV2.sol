pragma solidity ^0.6.0;

contract SignalAt2PartyConfirmation {
    enum StateClient { PROPOSAL_SEND, PROPOSAL_AGREED, PROPOSAL_DENIED, AWAITING_TRANSFER, AWAITING_DELIVERY, COMPLETE }
    enum StateDeliverer { PROPOSAL_SEND, PROPOSAL_AGREED, PROPOSAL_DENIED, AWAITING_TRANSFER, AWAITING_DELIVERY, COMPLETE }
    StateClient private currentStateClient;
    StateDeliverer private currentStateDeliverer;
    address payable client;
    address payable deliverer;
    modifier onlyClient() {
        require(msg.sender == client, "Only customer can call this method");
        _;
    }
    modifier onlyDeliverer() {
        require(msg.sender == deliverer, "Only deliverer can call this method");
        _;
    }
    constructor(address payable _client, address payable _deliverer) public {
        client = _client;
        deliverer = _deliverer;
    }
    
    function ProposalSend() onlyClient public {
        currentStateClient = StateClient.PROPOSAL_SEND;
    }
    
    function ProposalReply(bool agreed) onlyDeliverer public {
        require(currentStateClient == StateClient.PROPOSAL_SEND);
        if (agreed) {
            currentStateDeliverer = StateDeliverer.PROPOSAL_AGREED;
        }
        currentStateDeliverer = StateDeliverer.PROPOSAL_DENIED;
    }
    
    function SignalAmount() onlyClient public payable {
        require(currentStateDeliverer == StateDeliverer.PROPOSAL_AGREED);
        currentStateClient = StateClient.AWAITING_DELIVERY;
    }
    function WorkDelivered() onlyDeliverer external {
        currentStateDeliverer = StateDeliverer.COMPLETE;
    }
    function SatisfiedCustomer() onlyClient external {
        currentStateClient = StateClient.COMPLETE;
    }
    function Transfer() payable public {
        require(currentStateClient == StateClient.COMPLETE && currentStateDeliverer == StateDeliverer.COMPLETE,
                "Disagreement on project completion");
        deliverer.transfer(address(this).balance);
    }
}
