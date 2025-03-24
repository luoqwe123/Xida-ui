

import { Message } from "./method.ts";

import { withInstallFunction } from "@xida-ui/utils"; 


export const xidaMessage = withInstallFunction(Message,'$message')

export * from "./type.ts"