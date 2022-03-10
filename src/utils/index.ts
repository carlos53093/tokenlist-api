export function createTokenUtils(tokens) {
    const getTokenByAddress = (address) => tokens.find((token) => token.address.toLowerCase() === address.toLowerCase())
    const getTokenByKey = (key) => tokens.find((token) => token.key === key)
    const tokenKeys = tokens.map((token) => token.key)
    const rootTokens = tokens.map((token) => token.root)

    return { allTokens: tokens, tokenKeys, getTokenByAddress, getTokenByKey, rootTokens, toJSON: () => tokens }
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