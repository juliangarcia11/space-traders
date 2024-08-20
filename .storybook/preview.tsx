import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import "../src/styles/globals.css";
import "primeicons/primeicons.css";
import Tailwind from "primereact/passthrough/tailwind";
import { ThemeProvider } from "~/providers/theme";
import { PrimeReactProvider } from "primereact/api";
import { Suspense } from "react";

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
            <div style={{ margin: "3em" }}>
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
    nextjs: {
      appDirectory: true,
    },
  },
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
};

export default preview;
