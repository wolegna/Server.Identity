# Definition of roles
### **The Custodian**
This trusted third party controls and hosts the smart contract. Also, it maintains the identities of other parties, such as the client and the deliverers. The custodian will probably be Odyssey. In this way, Odyssey will be the owner of the contract and is able to moderate it, if necessary.

### **The Client**
The client is the party that offers the smart contract. The client has a problem that needs to be solved. Therefore, the client will send a proposal to people who can solve that problem. The client can put in a description of what needs to be solved, what kind of solution they are expecting, and the amount of money or tokens they are willing to pay.

### **The Deliverers**
The deliverers are the party who will accept or deny the proposal that is offered by the client. They are looking for jobs and tasks to complete to earn money or tokens.

# The use case
The custodian will set up the smart contract on its platform. A client will set up a listing for a certain price in order to solve a certain problem, which can be described. This proposal is then send to the deliverers.

The deliverers can accept the proposal and post their solution in the smart contract. After the client accepts the posted solution in the smart contract, the deliverers will receive their payment via a signal amount that will initiate a transfer, in, for example, another smart contract.

# What the smart contract is supposed to do:
- [ ] Client defines what problem needs to be solved.
- [x] Client sends a proposal of this problem to the smart contract.
- [ ] Deliverers receives the proposal description.
- [x] Deliverers accepts or denies this proposal.
- [x] Client sets a signal amount for the deliverers.
- [x] Client deposits the signal amount to the smart contract.
- [x] Deliverers confirm the delivery of their solution.
- [x] Client confirms the receivement of the delivery.
- [x] Smart contract transfers the deposit to the deliverers.

# What other tasks will have to be completed:
- [ ] Separate interfaces for each of the roles
- [ ] Identities custodian/guardian can overwrite both sides.
- [ ] 
- [ ] 

# The 5 major steps
Cooporate through note consule, ganazi.cli

Disclaimer: Node_modules are not included in the files.

## Smart Contract's functions in solidity
- [ ] ProposalDescription: Client can set the description of the proposal (task/problem).
- [x] ProposalSend: Client can send its proposal.
- [x] ProposalReply: Deliverers can accept or deny that proposal.
- [x] SignalAmount: Client can deposit the signal amount.
- [x] WorkDelivered: Deliverers can confirm delivery of work.
- [x] SatisfiedClient: Client can confirm satisfaction of delivery
- [x] Transfer: Deliverers and clients can tranfer the deposit after they have confirmed the delivery and satisfaction of the delivery.
- [ ] SetPrice: Client can set a price.
- [ ] AcceptPrice: Deliverers can acccept the price.

## Smart Contract in HTML & JavaScript + wallet = Interface for clients
- [ ] Clients can access this portal using their self soverign identity. (or web2)
- [ ] Clients can send signalamount to the smart contract.
- [ ] Clients can add a description of task/problem.
- [ ] Clients can set the price they want to pay to each deliverer.
- [ ] Clients can confirm satisfaction of delivered material.
- [ ] Client can activate payment of the contract

- [ ] index.html file = web interface. 

## Smart Contract in HTML & JavaScript + wallet = Interface for deliverers
- [ ] Deliverers can acces this portal using their self soverign identity. (or web2)
- [ ] Deliverers can accept and decline set price by client
- [ ] Deliverers can confirm delivery
- [ ] Deliverers can activate payment of the contract


## Self Sovereign Identities
- [ ] Issuue with Jolocom-lib
- [ ] Can't acces it.

## Idenitites guardian whom can overwrite both clients and deliverers
- [ ] Need to add overwrite function to client and deliverer interface.
