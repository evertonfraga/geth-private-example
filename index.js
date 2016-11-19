

const geth = require('geth-private');

const inst = geth({
    balance: 1e6,
    verbose: true,
    gethOptions: {
        networkid: 83817,
    },
    genesisBlock: {
        nonce: '0x0102030508013021',
        difficulty: '0x400000',
    },
    logger: {
        debug: (e) => {
            // console.log(e);
        },
        info: (e) => {
            console.info(e);
        },
        error: (e) => {
            console.error(e);
        },
    },
});

inst.start();
