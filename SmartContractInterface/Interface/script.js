if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
    console.log(web3);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    console.log(web3);
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var demoContract = web3.eth.contract([
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_client",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "_deliverer",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "agreed",
                "type": "bool"
            }
        ],
        "name": "ProposalReply",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ProposalSend",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SatisfiedClient",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SignalAmount",
        "outputs": [],
        "payable": true,
        "type": "function"
    },
    {
        "inputs": [],
        "name": "Transfer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "WorkDelivered",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]);

var demoUser = demoContract.at('0xDfF4e073936525323C6785FDB4182CCF940F604F');

var STATE = false

document.getElementById('sendButton').addEventListener('click', function () {
    demoUser.SignalAmount({
        from: web3.eth.accounts[0],
        value: document.getElementById('Signalamount').value,
    })
});

document.getElementById('confrec').addEventListener('click', function () {
    demoUser.SatisfiedClient({
        from: web3.eth.accounts[0]
    })
});

document.getElementById('confdel').addEventListener('click', function () {
    demoUser.WorkDelivered({
        from: web3.eth.accounts[1]
    })
});

document.getElementById('trans').addEventListener('click', function () {
    demoUser.Transfer()
});

document.getElementById('Accept').addEventListener('click', function () {
    STATE = true
});

document.getElementById('Deny').addEventListener('click', function () {
    STATE = false
});

document.getElementById('reply').addEventListener('click', function () {
    demoUser.ProposalReply(STATE)
});

document.getElementById('sendProp').addEventListener('click', function () {
    demoUser.ProposalSend()
});
