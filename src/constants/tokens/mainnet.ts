import { createTokenUtils } from "../../utils";

// prettier-ignore
export default createTokenUtils([
  { key: 'eth', type: 'token', symbol: 'ETH', name: 'Ethereum', address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', decimals: 18, isStableCoin: false },
  { key: 'inst', type: 'token', symbol: 'INST', name: 'Instadapp Token', address: '0x6f40d4A6237C257fff2dB00FA0510DeEECd303eb', decimals: 18, isStableCoin: false },
  { key: 'ieth', type: 'token', symbol: 'iETH', name: 'Instadapp ETH', address: '0xc383a3833A87009fD9597F8184979AF5eDFad019', decimals: 18, isStableCoin: false },
  { key: 'iwbtc', type: 'token', symbol: 'iWBTC', name: 'Instadapp WBTC', address: '0xEC363faa5c4dd0e51f3D9B5d0101263760E7cdeB', decimals: 8, isStableCoin: false },
  { key: 'iusdc', type: 'token', symbol: 'iUSDC', name: 'Instadapp USDC', address: '0xc8871267e07408b89aA5aEcc58AdCA5E574557F8', decimals: 6, isStableCoin: true },
  { key: 'idai', type: 'token', symbol: 'iDAI', name: 'Instadapp DAI', address: '0x40a9d39aa50871Df092538c5999b107f34409061', decimals: 18, isStableCoin: true },
  { key: 'dai', type: 'token', symbol: 'DAI', name: 'DAI Stable', address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', decimals: 18, isStableCoin: true },
  { key: 'usdc', type: 'token', symbol: 'USDC', name: 'USD Coin', address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', decimals: 6, isStableCoin: true },
  { key: 'usdt', type: 'token', symbol: 'USDT', name: 'Tether USD Coin', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', decimals: 6, isStableCoin: true },
  { key: 'weth', type: 'token', symbol: 'WETH', name: 'Wrapped Ethereum', address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', decimals: 18, isStableCoin: false },
  { key: 'mkr', type: 'token', symbol: 'MKR', name: 'MakerDAO', address: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', decimals: 18, isStableCoin: false },
  { key: 'comp', type: 'token', symbol: 'COMP', name: 'Compound', address: '0xc00e94Cb662C3520282E6f5717214004A7f26888', decimals: 18, isStableCoin: false },
  { key: 'rai', type: 'token', symbol: 'RAI', name: 'Rai Reflex Index', address: '0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919', decimals: 18, isStableCoin: false },
  { key: 'lusd', type: 'token', symbol: 'LUSD', name: 'Liquity USD', address: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0', decimals: 18, isStableCoin: true },
  { key: 'zrx', type: 'token', symbol: 'ZRX', name: '0x Protocol', address: '0xE41d2489571d322189246DaFA5ebDe1F4699F498', decimals: 18, isStableCoin: false },
  { key: 'rep', type: 'token', symbol: 'REP', name: 'Augur', address: '0x1985365e9f78359a9B6AD760e32412f4a445E862', decimals: 18, isStableCoin: false },
  { key: 'tusd', type: 'token', symbol: 'TUSD', name: 'TrueUSD', address: '0x0000000000085d4780B73119b644AE5ecd22b376', decimals: 18, isStableCoin: true },
  { key: 'usdp', type: 'token', symbol: 'USDP', name: 'Paxos Standard Coin', address: '0x8E870D67F660D95d5be530380D0eC0bd388289E1', decimals: 18, isStableCoin: true },
  { key: 'bat', type: 'token', symbol: 'BAT', name: 'Basic Attention', address: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF', decimals: 18, isStableCoin: false },
  { key: 'knc', type: 'token', symbol: 'KNC', name: 'Kyber Network', address: '0xdd974D5C2e2928deA5F71b9825b8b646686BD200', decimals: 18, isStableCoin: false },
  { key: 'wbtc', type: 'token', symbol: 'WBTC', name: 'Wrapped BTC', address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', decimals: 8, isStableCoin: false },
  { key: 'susd', type: 'token', symbol: 'SUSD', name: 'Synthetix USD', address: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51', decimals: 18, isStableCoin: false },
  { key: 'sbtc', type: 'token', symbol: 'SBTC', name: 'Synthetix BTC', address: '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6', decimals: 18, isStableCoin: false },
  { key: 'ren', type: 'token', symbol: 'REN', name: 'Republic Token', address: '0x408e41876cCCDC0F92210600ef50372656052a38', decimals: 18, isStableCoin: false },
  { key: 'renbtc', type: 'token', symbol: 'renBTC', name: 'Ren BTC', address: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D', decimals: 8, isStableCoin: false },
  { key: 'busd', type: 'token', symbol: 'BUSD', name: 'Binance USD', address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53', decimals: 18, isStableCoin: true },
  { key: 'lend', type: 'token', symbol: 'LEND', name: 'ETH LEND', address: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03', decimals: 18, isStableCoin: false },
  { key: 'aave', type: 'token', symbol: 'AAVE', name: 'Aave Token', address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9', decimals: 18, isStableCoin: false },
  { key: 'link', type: 'token', symbol: 'LINK', name: 'ChainLink Token', address: '0x514910771AF9Ca656af840dff83E8264EcF986CA', decimals: 18, isStableCoin: false },
  { key: 'mana', type: 'token', symbol: 'MANA', name: 'Decentraland', address: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942', decimals: 18, isStableCoin: false },
  { key: 'snx', type: 'token', symbol: 'SNX', name: 'Synthetix Network Token', address: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F', decimals: 18, isStableCoin: false },
  { key: 'uni', type: 'token', symbol: 'UNI', name: 'Uniswap Token', address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', decimals: 18, isStableCoin: false },
  { key: 'yfi', type: 'token', symbol: 'YFI', name: 'YEARN', address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', decimals: 18, isStableCoin: false },
  { key: 'lrc', type: 'token', symbol: 'LRC', name: 'Loopring Coin V2', address: '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD', decimals: 18, isStableCoin: false },
  { key: 'enj', type: 'token', symbol: 'ENJ', name: 'Enjin Coin', address: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c', decimals: 18, isStableCoin: false },
  { key: 'bal', type: 'token', symbol: 'BAL', name: 'Balancer', address: '0xba100000625a3754423978a60c9317c58a424e3D', decimals: 18, isStableCoin: false },
  { key: 'gusd', type: 'token', symbol: 'GUSD', name: 'Gemini Dollar', address: '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd', decimals: 2, isStableCoin: true },
  { key: 'dpi', type: 'token', symbol: 'DPI', name: 'DefiPulse Index', address: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b', decimals: 18, isStableCoin: false },
  { key: '1inch', type: 'token', symbol: '1INCH', name: '1INCH Token', address: '0x111111111117dC0aa78b770fA6A738034120C302', decimals: 18, isStableCoin: false },
  { key: 'sushi', type: 'token', symbol: 'SUSHI', name: 'Sushiswap Token', address: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2', decimals: 18, isStableCoin: false },
  { key: 'xsushi', type: 'token', symbol: 'xSUSHI', name: 'Sushibar', address: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272', decimals: 18, isStableCoin: false },
  { key: 'crv', type: 'token', symbol: 'CRV', name: 'Curve DAO Token', address: '0xD533a949740bb3306d119CC777fa900bA034cd52', decimals: 18, isStableCoin: false },
  { key: 'stkaave', type: 'token', symbol: 'stkAAVE', name: 'Staked Aave', address: '0x4da27a545c0c5B758a6BA100e3a049001de870f5', decimals: 18, isStableCoin: false },
  { key: 'matic', type: 'token', symbol: 'MATIC', name: 'Matic Token', address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0', decimals: 18, isStableCoin: false },
  { key: 'lqty', type: 'token', symbol: 'LQTY', name: 'Liquity Protocol', address: '0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D', decimals: 18, isStableCoin: false },
  { key: 'ampl', type: 'token', symbol: 'AMPL', name: 'Ampleforth', address: '0xD46bA6D942050d489DBd938a2C909A5d5039A161', decimals: 9, isStableCoin: false },
  { key: 'renfil', type: 'token', symbol: 'renFIL', name: 'renFIL', address: '0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5', decimals: 18, isStableCoin: false },
  { key: 'frax', type: 'token', symbol: 'FRAX', name: 'Frax Protocol', address: '0x853d955aCEf822Db058eb8505911ED77F175b99e', decimals: 18, isStableCoin: true },
  { key: 'fei', type: 'token', symbol: 'FEI', name: 'Fei Protocol', address: '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', decimals: 18, isStableCoin: true },
  { key: 'steth', type: 'token', symbol: 'stETH', name: 'Lido stETH Token', address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84', decimals: 18, isStableCoin: false },
  { key: 'wsteth', type: 'token', symbol: 'wstETH', name: 'Lido Wrapped stETH Token', address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0', decimals: 18, isStableCoin: false },
  { key: 'ape', type: 'token', symbol: 'APE', name: 'ApeCoin Token', address: '0x4d224452801ACEd8B2F0aebE155379bb5D594381', decimals: 18, isStableCoin: false },
  { key: 'ust', type: 'token', symbol: 'UST', name: 'UST (Wormhole)', address: '0xa693B19d2931d498c5B318dF961919BB4aee87a5', decimals: 6, isStableCoin: true },
  { key: 'note', type: 'token', symbol: 'NOTE', name: 'Notional Token', address: '0xCFEAead4947f0705A14ec42aC3D44129E1Ef3eD5', decimals: 8, isStableCoin: false },
  { key: 'euroc', type: 'token', symbol: 'EUROC', name: 'EURO Coin', address: '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c', decimals: 6, isStableCoin: true },
  { key: 'ldo', type: 'token', symbol: 'LDO', name: 'Lido DAO Token', address: '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32', decimals: 18, isStableCoin: false },
  { key: 'shib', type: 'token', symbol: 'SHIB', name: 'SHIBA INU', address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce', decimals: 18, isStableCoin: false },
  { key: 'rbn', type: 'token', symbol: 'RBN', name: 'Ribbon', address: '0x6123b0049f904d730db3c36a31167d9d4121fa6b', decimals: 18, isStableCoin: false },
  { key: 'perp', type: 'token', symbol: 'PERP', name: 'Perpetual', address: '0xbc396689893d065f41bc2c6ecbee5e0085233447', decimals: 18, isStableCoin: false },
  { key: 'axs', type: 'token', symbol: 'AXS', name: 'Axie Infinity Shard', address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b', decimals: 18, isStableCoin: false },
  { key: 'osqth', type: 'token', symbol: 'OSQTH', name: 'Opyn Squeeth', address: '0xf1b99e3e573a1a9c5e6b2ce818b617f0e664e86b', decimals: 18, isStableCoin: false },
  { key: 'cvx', type: 'token', symbol: 'CVX', name: 'Convex Token', address: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b', decimals: 18, isStableCoin: false },
  { key: 'ageur', type: 'token', symbol: 'agEUR', name: 'agEUR', address: '0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8', decimals: 18, isStableCoin: false },
  { key: 'ens', type: 'token', symbol: 'ENS', name: 'Ethereum Name Service', address: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72', decimals: 18, isStableCoin: false },
  { key: 'eul', type: 'token', symbol: 'EUL', name: 'Euler Finance', address: '0xd9Fcd98c322942075A5C3860693e9f4f03AAE07b', decimals: 18, isStableCoin: false },
  { key: 'morpho', type: 'token', symbol: 'MORPHO', name: 'Morpho Protocol', address: '0x9994E35Db50125E0DF82e4c2dde62496CE330999', decimals: 18, isStableCoin: false },
  { key: 'cbeth', type: 'token', symbol: 'cbETH', name: 'Coinbase Wrapped Staked ETH', address: '0xBe9895146f7AF43049ca1c1AE358B0541Ea49704', decimals: 18, isStableCoin: false },
  { key: 'reth', type: 'token', symbol: 'rETH', name: 'Rocket Pool ETH', address: '0xae78736Cd615f374D3085123A210448E74Fc6393', decimals: 18, isStableCoin: false },
  { key: 'sdai', type: 'token', symbol: 'sDAI', name: 'Savings Dai', address: '0x83F20F44975D03b1b09e64809B757c47f942BEeA', decimals: 18, isStableCoin: true},
  { key: 'gho', type: 'token', symbol: 'GHO', name: 'Gho Token', address: '0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f', decimals: 18, isStableCoin: true},
  { key: 'sfrxeth', type: 'token', symbol: 'sfrxETH', name: 'Staked Frax Ether', address: '0xac3E018457B222d93114458476f3E3416Abbe38F', decimals: 18, isStableCoin: false},
  { key: 'tbtc', type: 'token', symbol: 'tBTC', name: 'tBTC v2', address: '0x18084fba666a33d37592fa2633fd49a74dd93a88', decimals: 18, isStableCoin: false},
  { key: 'crvusd', type: 'token', symbol: 'crvUSD', name: 'Curve.Fi USD Stablecoin', address: '0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E', decimals: 18, isStableCoin: true},
  { key: 'bbeth', type: 'token', symbol: 'bbETH', name: 'Flagship ETH', address: '0x38989BBA00BDF8181F4082995b3DEAe96163aC5D', decimals: 18, isStableCoin: false},
  { key: 'steakusdc', type: 'token', symbol: 'steakUSDC', name: 'Steakhouse USDC', address: '0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB', decimals: 18, isStableCoin: true},
  { key: 'bbusdt', type: 'token', symbol: 'bbUSDT', name: 'Flagship USDT', address: '0x2C25f6C25770fFEC5959D34B94Bf898865e5D6b1', decimals: 18, isStableCoin: true},
  { key: 're7weth', type: 'token', symbol: 'Re7WETH', name: 'Re7 WETH', address: '0x78Fc2c2eD1A4cDb5402365934aE5648aDAd094d0', decimals: 18, isStableCoin: false},
  { key: 'steakusdt', type: 'token', symbol: 'steakUSDT', name: 'Steakhouse USDT', address: '0xbEef047a543E45807105E51A8BBEFCc5950fcfBa', decimals: 18, isStableCoin: true},
  { key: 'steakusdt', type: 'token', symbol: 'steakUSDT', name: 'Steakhouse USDT', address: '0xbEef047a543E45807105E51A8BBEFCc5950fcfBa', decimals: 18, isStableCoin: true},
  { key: 'weeth', type: 'token', symbol: 'weETH', name: 'Wrapped eETH', address: '0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee', decimals: 18, isStableCoin: false},
  { key: 'oseth', type: 'token', symbol: 'osETH', name: 'Staked ETH', address: '0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38', decimals: 18, isStableCoin: false},
])
