const API_BASE = "https://api.spacetraders.io/v2/";

/**
 * D.R.Y. Reference to all endpoints from the Space Traders API that are used in the app
 */
export const api_urls = {
  base: API_BASE,
  cookie: "st-api-token",
  get_status: API_BASE,
  register: `${API_BASE}register`,
  get_my_agent: `${API_BASE}my/agent`,
  get_agent: (agentSymbol: string) => `${API_BASE}agents/${agentSymbol}`,
  get_agents: `${API_BASE}agents`,
  contracts: {
    get_contracts: `${API_BASE}my/contracts`,
    get_contract: (contractId: string) =>
      `${API_BASE}my/contracts/${contractId}`,
    accept_contract: (contractId: string) =>
      `${API_BASE}my/contracts/${contractId}/accept`,
    deliver_contract: (contractId: string) =>
      `${API_BASE}my/contracts/${contractId}/deliver`,
    fulfill_contract: (contractId: string) =>
      `${API_BASE}my/contracts/${contractId}/fulfill`,
    negotiate_contract: (contractId: string) =>
      `${API_BASE}my/contracts/${contractId}/negotiate`,
  },
  get_faction: (factionId: string) => `${API_BASE}factions/${factionId}`,
  get_factions: `${API_BASE}factions`,

  fleet: {
    get_my_ships: `${API_BASE}my/ships`,
    get_my_ship: (shipId: string) => `${API_BASE}my/ships/${shipId}`,
  },
};
