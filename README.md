# Definition of roles
### **Identities custodian**
The semi trusted third party is a role that controls the contract. The semi trusted third party will be a third party that is hosting the smart contract. This will probably be Odyssey. This semi trusted third party will be theh owner of the contract and can moderate the contract if necessary.

### **The Client**
The client is the party that offers the smart contract. The client wants a problem solved and are looking for people solving that problem. The client can put in a description of the problem, what kind of solution they are expecting and the amount of money/tokens they are willing to pay.

### **The Deliverers**
The deliverers are the people that will accept the smart contracts offered by the client. These people are looking for jobs and tasks on the platform.

# The use case
In this use case the semi trusted third party will have set up the smart contract on their platform, a client will set up a listing for a certain price in order to solve a certain problem, which can be described.

The deliverers can accept the smart contract and post their solution in the smart contract. After the client accepts the solution to the smart contract, the deliverers will receive their payment via a signal amount that will initiate a transfer in for example another smart contract.

# What the smart contract is supposed to do:
- [ ] Client X defines what task he wants completed/what problem solved.
- [ ] Client X and (multiple) deliverers decide on price and input to complete the task.
- [ ] Client sets signal amount for each deliverer and their wallet address
- [ ] Client X deposits the signal amount on the smart contract
- [ ] Deliverers complete contract
- [ ] Client X and deliverers Y validate completion
- [ ] Contract Z Pays each deliverer

# What other tasks will have to be completed:
- [ ] Separate interfaces for each of the roles
- [ ] Identities custodian/guardian can overwrite both sides.
- [ ] 
- [ ] 

# The 5 major steps
Cooporate through note consule, ganazi.cli

Disclaimer: Node_modules are not included in the files.

## Smart Contract in solidity
- [x] SignalAmount: Client can activate the smart contract.
- [x] WorkDelivered: Deliverers can confirm delivery of work.
- [x] SatisifiedCustomer: Client can confirm satisfaction of delivery
- [x] Transfer: Deliverers and clients can tranfer the funds one the Client and the Deliverers have both confirmed delivery and satisfaction.
- [ ] SetPrice: Client can set a price.
- [ ] AcceptPrice: Deliverers can acccept the price.
- [ ] Decription of task/problem can be added.

## Smart Contract in HTML & JavaScript + wallet = Interface for clients
- [ ] Clients can acces this portal using their self soverign identity. (or web2)
- [ ] Clients can sent signalamount to the smart contract.
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
