import type { App } from "vue";
import { ElementPlusContainer } from "vitepress-preview-components";
import DefaultTheme from "vitepress/theme";
import xidaUi from "xida-ui";

import "vitepress-preview-components/style.css";
import "xida-ui/dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(xidaUi);
  },
};
