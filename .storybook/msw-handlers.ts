import { http, HttpResponse, RequestHandler } from "msw";
import {
  api_urls,
  MockGetAgentResponse,
  MockGetContractsResponse,
  MockGetShipsResponse,
  MockGetStatusResponse,
  MockPostAgentResponse,
} from "~/api";

type MswParameter = {
  handlers:
    | RequestHandler[]
    | Record<string, RequestHandler | RequestHandler[]>;
};

/**
 * Mock Service Worker handlers for the API routes.
 * MSW will intercept the requests and respond with the mock data.
 *
 * Handlers can be overridden by providing a custom handler in the story.
 * @see https://storybook.js.org/addons/msw-storybook-addon
 */
export const mswHandlers: MswParameter["handlers"] = {
  root: [
    http.get(api_urls.get_status, () => {
      return HttpResponse.json(MockGetStatusResponse);
    }),
    http.post(api_urls.register, () => {
      return HttpResponse.json(MockPostAgentResponse);
    }),
  ],
  agents: [
    http.get(api_urls.get_my_agent, () => {
      return HttpResponse.json(MockGetAgentResponse);
    }),
  ],
  contracts: [
    http.get(api_urls.get_contracts, () => {
      return HttpResponse.json(MockGetContractsResponse);
    }),
  ],
  factions: [
    http.get(
      api_urls.get_faction(MockPostAgentResponse.data.agent.startingFaction),
      () => {
        return HttpResponse.json({ data: MockPostAgentResponse.data.faction });
      },
    ),
  ],
  fleet: [
    http.get(api_urls.fleet.get_my_ships, () => {
      return HttpResponse.json(MockGetShipsResponse);
    }),
  ],
};
