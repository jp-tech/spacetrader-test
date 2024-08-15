export const BASE_API_URL = 'https://api.spacetraders.io/v2/'; // Move this to config file

export const ENDPOINTS = {
    GET_USER: 'register',
    REGISTER_AGENT: 'my/agent',
    CONTRACTS: 'my/contracts',
    ACCEPT_CONTRACT: (contractId: string) => `my/contracts/${contractId}/accept`
}