import { Suspense } from "react";
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

import { http, HttpResponse } from "msw";
import { api_urls, MockGetStatusResponse } from "~/api";

import "../src/styles/globals.css";
import "primeicons/primeicons.css";
import Tailwind from "primereact/passthrough/tailwind";
import { ThemeProvider } from "~/providers/theme";
import { PrimeReactProvider } from "primereact/api";

import { Inter } from "next/font/google";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
          <Suspense fallback="Loading...">
            <div className={`mx-auto w-fit ${inter.className}`}>
              {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
              <Story />
            </div>
          </Suspense>
        </PrimeReactProvider>
      </ThemeProvider>
    ),
  ],
  loaders: [mswLoader], // 👈 Add the MSW loader to all stories
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: [
        http.get(api_urls.get_status, () => {
          return HttpResponse.json(MockGetStatusResponse); // 👈 Return the mocked data
        }),
      ],
    },
    nextjs: {
      appDirectory: true,
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Pages", "*"],
        locales: "",
      },
    },
  },
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
};

export default preview;
