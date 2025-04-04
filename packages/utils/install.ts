import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;
//安装一个插件
export function makeInstaller(components: Plugin[]) {
  const install = (app: App,) => {
    each(components, (c) => {
      // console.log("c", c)
      app.use(c);
     
    });
   
  };
  return install;
}
// ast  转化为抽象语法树  将组件抽象
export const withInstall = <T>(component: T) => {
  // console.log("utlis WI", (component));  
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || "UnnamedComponent";
    app.component(name, component as SFCWithInstall<T>);
  };
  return component as SFCWithInstall<T>;
};


export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    app.config.globalProperties[name] = fn;
  };
  return fn as SFCWithInstall<T>;
};
