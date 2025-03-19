import { makeInstaller } from "@xida-ui/utils";
import components from "./components";
import '@xida-ui/theme/index.css';

const installer = makeInstaller(components); //返回一个app.use(com)的函数

export * from "@xida-ui/components";
export default installer;
