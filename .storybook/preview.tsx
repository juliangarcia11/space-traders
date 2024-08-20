import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import "primeicons/primeicons.css";
import Tailwind from "primereact/passthrough/tailwind";
import { ThemeProvider } from "~/providers/theme";
import { PrimeReactProvider } from "primereact/api";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
          <div style={{ margin: "3em" }}>
            {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
            <Story />
          </div>
        </PrimeReactProvider>
      </ThemeProvider>
    ),
  ],
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
