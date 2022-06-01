export interface IToken {
    key: string,
    root?: string,
    type: string,
    symbol: string,
    name: string,
    address: string,
    decimals: number,
    isStableCoin?: boolean,
    id?: string,
    factor?: number,
    logoURI?: string,

    [key: string]: any,
}

type VaultTokenType = "token" | "guniLPT" | "uniLPT"

export interface IVault {
    type: string,
    token: string,
    key: string,
    ratio: number,
    joinAddr: string,
    addr: string,
    stabiltyRate: number,
    price: number,
    typeBytes: string,
    disabled: boolean,
    vaultTokenType: VaultTokenType,
    logoURI: string,
}


const symbolToLogoURI = {
    'INST': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6f40d4A6237C257fff2dB00FA0510DeEECd303eb/logo.png',
    'DAI': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    'WETH': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    'ETH': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    'USDC': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    'USDC.e': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    'USDT': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    'USDT.e': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    'MKR': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png',
    'COMP': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png',
    'RAI': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919/logo.png',
    'LUSD': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0/logo.png',
    'ZRX': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xE41d2489571d322189246DaFA5ebDe1F4699F498/logo.png',
    'REP': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1985365e9f78359a9B6AD760e32412f4a445E862/logo.png',
    'TUSD': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0000000000085d4780B73119b644AE5ecd22b376/logo.png',
    'USDP': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8E870D67F660D95d5be530380D0eC0bd388289E1/logo.png',
    'BAT': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0D8775F648430679A709E98d2b0Cb6250d2887EF/logo.png',
    'KNC': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202/logo.png',
    'WBTC': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    'BTC': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    'SUSD': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51/logo.png',
    'SBTC': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x309013d55fB0E8C17363bcC79F25d92f711A5802/logo.png',
    'REN': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png',
    'renBTC': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D/logo.png',
    'BUSD': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4Fabb145d64652a948d72533023f6E7A623C7C53/logo.png',
    'AAVE': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9/logo.png',
    'LINK': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    'MANA': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0F5D2fB29fb7d3CFeE444a200298f468908cC942/logo.png',
    'SNX': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F/logo.png',
    'UNI': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png',
    'YFI': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png',
    'LRC': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD/logo.png',
    'ENJ': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c/logo.png',
    'BAL': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png',
    'GUSD': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd/logo.png',
    'DPI': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b/logo.png',
    '1INCH': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x111111111117dC0aa78b770fA6A738034120C302/logo.png',
    'SUSHI': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png',
    'xSUSHI': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272/logo.png',
    'CRV': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png',
    'stkAAVE': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4da27a545c0c5B758a6BA100e3a049001de870f5/logo.png',
    'MATIC': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
    'WMATIC': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
    'LQTY': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D/logo.png',
    'AMPL': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD46bA6D942050d489DBd938a2C909A5d5039A161/logo.png',
    'FRAX': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png',
    'FEI': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png',
    'stETH': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84/logo.png',
    'APE': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4d224452801ACEd8B2F0aebE155379bb5D594381/logo.png',
    'GHST': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x3F382DbD960E3a9bbCeaE22651E88158d2791550/logo.png',
    'EURS': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdB25f211AB05b1c97D595516F45794528a807ad8/logo.png',
    'FTM': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4E15361FD6b4BB609Fa63C81A2be19d873717870/logo.png',
    'UST': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xa693B19d2931d498c5B318dF961919BB4aee87a5/logo.png',
    'OP': 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x4200000000000000000000000000000000000042/logo.png',
}

const keyToLogoURI = {
    'aave': 'https://cdn.instadapp.io/icons/tokens/aave.svg',
    '1inch': 'https://cdn.instadapp.io/icons/tokens/1inch.svg',
    'ageur': 'https://cdn.instadapp.io/icons/tokens/ageur.svg',
    'ampl': 'https://cdn.instadapp.io/icons/tokens/ampl.svg',
    'ape': 'https://cdn.instadapp.io/icons/tokens/ape.svg',
    'avax': 'https://cdn.instadapp.io/icons/tokens/avax.svg',
    'bal': 'https://cdn.instadapp.io/icons/tokens/bal.svg',
    'bat': 'https://cdn.instadapp.io/icons/tokens/bat.svg',
    'bnb': 'https://cdn.instadapp.io/icons/tokens/bnb.svg',
    'btc2xfli': 'https://cdn.instadapp.io/icons/tokens/btc2xfli.svg',
    'busd': 'https://cdn.instadapp.io/icons/tokens/busd.svg',
    'cbat': 'https://cdn.instadapp.io/icons/tokens/cbat.svg',
    'cbtc': 'https://cdn.instadapp.io/icons/tokens/cbtc.svg',
    'cdai': 'https://cdn.instadapp.io/icons/tokens/cdai.svg',
    'ceth': 'https://cdn.instadapp.io/icons/tokens/ceth.svg',
    'comp': 'https://cdn.instadapp.io/icons/tokens/comp.svg',
    'crep': 'https://cdn.instadapp.io/icons/tokens/crep.svg',
    'crv': 'https://cdn.instadapp.io/icons/tokens/crv.svg',
    'csai': 'https://cdn.instadapp.io/icons/tokens/csai.svg',
    'cusdc': 'https://cdn.instadapp.io/icons/tokens/cusdc.svg',
    'cusdt': 'https://cdn.instadapp.io/icons/tokens/cusdt.svg',
    'custom': 'https://cdn.instadapp.io/icons/tokens/custom.svg',
    'czrx': 'https://cdn.instadapp.io/icons/tokens/czrx.svg',
    'dai': 'https://cdn.instadapp.io/icons/tokens/dai.svg',
    'dgx': 'https://cdn.instadapp.io/icons/tokens/dgx.svg',
    'dpi': 'https://cdn.instadapp.io/icons/tokens/dpi.svg',
    'enj': 'https://cdn.instadapp.io/icons/tokens/enj.svg',
    'ens': 'https://cdn.instadapp.io/icons/tokens/ens.svg',
    'eth': 'https://cdn.instadapp.io/icons/tokens/eth.svg',
    'eth2xfli': 'https://cdn.instadapp.io/icons/tokens/eth2xfli.svg',
    'eurs': 'https://cdn.instadapp.io/icons/tokens/eurs.svg',
    'fei': 'https://cdn.instadapp.io/icons/tokens/fei.svg',
    'frax': 'https://cdn.instadapp.io/icons/tokens/frax.svg',
    'ftm': 'https://cdn.instadapp.io/icons/tokens/ftm.svg',
    'fusdt': 'https://cdn.instadapp.io/icons/tokens/fusdt.svg',
    'ghst': 'https://cdn.instadapp.io/icons/tokens/ghst.svg',
    'gunidaiusdc': 'https://cdn.instadapp.io/icons/tokens/gunidaiusdc.svg',
    'gusd': 'https://cdn.instadapp.io/icons/tokens/gusd.svg',
    'inst': 'https://cdn.instadapp.io/icons/tokens/inst.svg',
    'ieth': 'https://cdn.instadapp.io/icons/tokens/ieth.svg',
    'iwbtc': 'https://cdn.instadapp.io/icons/tokens/iwbtc.svg',
    'idai': 'https://cdn.instadapp.io/icons/tokens/idai.svg',
    'iusdc': 'https://cdn.instadapp.io/icons/tokens/iusdc.svg',
    'jeur': 'https://cdn.instadapp.io/icons/tokens/jeur.svg',
    'knc': 'https://cdn.instadapp.io/icons/tokens/knc.svg',
    'lend': 'https://cdn.instadapp.io/icons/tokens/lend.svg',
    'link': 'https://cdn.instadapp.io/icons/tokens/link.svg',
    'looks': 'https://cdn.instadapp.io/icons/tokens/looks.svg',
    'lqty': 'https://cdn.instadapp.io/icons/tokens/lqty.svg',
    'lrc': 'https://cdn.instadapp.io/icons/tokens/lrc.svg',
    'lusd': 'https://cdn.instadapp.io/icons/tokens/lusd.svg',
    'mana': 'https://cdn.instadapp.io/icons/tokens/mana.svg',
    'matic': 'https://cdn.instadapp.io/icons/tokens/matic.svg',
    'mkr': 'https://cdn.instadapp.io/icons/tokens/mkr.svg',
    'note': 'https://cdn.instadapp.io/icons/tokens/note.svg',
    'omg': 'https://cdn.instadapp.io/icons/tokens/omg.svg',
    'poly': 'https://cdn.instadapp.io/icons/tokens/poly.svg',
    'qi': 'https://cdn.instadapp.io/icons/tokens/qi.svg',
    'rai': 'https://cdn.instadapp.io/icons/tokens/rai.svg',
    'ren': 'https://cdn.instadapp.io/icons/tokens/ren.svg',
    'renbtc': 'https://cdn.instadapp.io/icons/tokens/renbtc.svg',
    'renfil': 'https://cdn.instadapp.io/icons/tokens/renfil.svg',
    'rep': 'https://cdn.instadapp.io/icons/tokens/rep.svg',
    'sai': 'https://cdn.instadapp.io/icons/tokens/sai.svg',
    'salt': 'https://cdn.instadapp.io/icons/tokens/salt.svg',
    'sbtc': 'https://cdn.instadapp.io/icons/tokens/sbtc.svg',
    'snt': 'https://cdn.instadapp.io/icons/tokens/snt.svg',
    'snx': 'https://cdn.instadapp.io/icons/tokens/snx.svg',
    'steth': 'https://cdn.instadapp.io/icons/tokens/steth.svg',
    'stkaave': 'https://cdn.instadapp.io/icons/tokens/stkaave.svg',
    'stmatic': 'https://cdn.instadapp.io/icons/tokens/stmatic.svg',
    'susd': 'https://cdn.instadapp.io/icons/tokens/susd.svg',
    'sushi': 'https://cdn.instadapp.io/icons/tokens/sushi.svg',
    'tusd': 'https://cdn.instadapp.io/icons/tokens/tusd.svg',
    'uni': 'https://cdn.instadapp.io/icons/tokens/uni.svg',
    'uniaaveeth': 'https://cdn.instadapp.io/icons/tokens/uniaaveeth.svg',
    'unidaieth': 'https://cdn.instadapp.io/icons/tokens/unidaieth.svg',
    'unidaiusdt': 'https://cdn.instadapp.io/icons/tokens/unidaiusdt.svg',
    'uniwbtcdai': 'https://cdn.instadapp.io/icons/tokens/unidaiwbtc.svg',
    'unidaiyfi': 'https://cdn.instadapp.io/icons/tokens/unidaiyfi.svg',
    'unilinketh': 'https://cdn.instadapp.io/icons/tokens/unilinketh.svg',
    'uniunieth': 'https://cdn.instadapp.io/icons/tokens/uniunieth.svg',
    'unidaiusdc': 'https://cdn.instadapp.io/icons/tokens/uniusdcdai.svg',
    'uniusdceth': 'https://cdn.instadapp.io/icons/tokens/uniusdceth.svg',
    'uniethusdt': 'https://cdn.instadapp.io/icons/tokens/uniusdteth.svg',
    'uniwbtceth': 'https://cdn.instadapp.io/icons/tokens/uniwbtceth.svg',
    'usdc': 'https://cdn.instadapp.io/icons/tokens/usdc.svg',
    'usdce': 'https://cdn.instadapp.io/icons/tokens/usdce.svg',
    'usdp': 'https://cdn.instadapp.io/icons/tokens/usdp.svg',
    'usdt': 'https://cdn.instadapp.io/icons/tokens/usdt.svg',
    'usdte': 'https://cdn.instadapp.io/icons/tokens/usdte.svg',
    'ust': 'https://cdn.instadapp.io/icons/tokens/ust.svg',
    'wavax': 'https://cdn.instadapp.io/icons/tokens/wavax.svg',
    'wbtc': 'https://cdn.instadapp.io/icons/tokens/wbtc.svg',
    'weth': 'https://cdn.instadapp.io/icons/tokens/weth.svg',
    'wftm': 'https://cdn.instadapp.io/icons/tokens/wftm.svg',
    'wmatic': 'https://cdn.instadapp.io/icons/tokens/wmatic.svg',
    'wsteth': 'https://cdn.instadapp.io/icons/tokens/wsteth.svg',
    'xsushi': 'https://cdn.instadapp.io/icons/tokens/xsushi.svg',
    'yfi': 'https://cdn.instadapp.io/icons/tokens/yfi.svg',
    'zil': 'https://cdn.instadapp.io/icons/tokens/zil.svg',
    'zrx': 'https://cdn.instadapp.io/icons/tokens/zrx.svg',
    'op': 'https://cdn.instadapp.io/icons/tokens/op.svg',
}

export function createTokenUtils(tokens: IToken[]) {

    tokens = tokens.map(token => {

        if (!token.logoURI && keyToLogoURI[token.key]) {
            token.logoURI = keyToLogoURI[token.key]
        }

        if (!token.logoURI && symbolToLogoURI[token.symbol]) {
            token.logoURI = symbolToLogoURI[token.symbol]
        }

        return token;
    })

    const getTokenByAddress = (address) => tokens.find((token) => token.address.toLowerCase() === address.toLowerCase())
    const getTokenByKey = (key) => tokens.find((token) => token.key === key)
    const tokenKeys = tokens.map((token) => token.key)
    const rootTokens = tokens.map((token) => token.root)

    return { allTokens: tokens, tokenKeys, getTokenByAddress, getTokenByKey, rootTokens, toJSON: () => tokens }
}

export function createVaultUtils(vaults: IVault[]) {
    vaults = vaults.map(vault => {
        vault.logoURI = keyToLogoURI[vault.key] ?? ''
        return vault;
    })

    return {  
        allVaults: vaults,
        types: vaults.map((vault) => vault.type),
        getVaultByType: (type: string) => vaults.find((vault) => vault.type === type),
        toJSON: () => vaults, 
    }
}

export function createNetworkList(networks) {
    return {
        mainnet: networks.mainnet || [],
        polygon: networks.polygon || [],
        avalanche: networks.avalanche || [],
        optimism: networks.optimism || [],
        arbitrum: networks.arbitrum || [],
        fantom: networks.fantom || [],
    }
}
