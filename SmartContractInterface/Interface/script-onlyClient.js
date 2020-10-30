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
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
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
    }
]);

var demoUser = demoContract.at('0x1dc3F241D93d296a54EadaBDfB64C0b3a02a00fA');

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

document.getElementById('trans').addEventListener('click', function () {
    demoUser.Transfer()
});

document.getElementById('sendProp').addEventListener('click', function () {
    demoUser.ProposalSend()
});

