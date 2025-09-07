import { IHeartbeat } from "./interfaces";

export type TISODateString = string & { __brand: "ISODateString" };

export type TSocketEventMap = {
  heartbeat: IHeartbeat;
}

export type TSocketServiceEmitArg<E extends keyof TSocketEventMap> = {
  event: E;
  data: TSocketEventMap[E];
};
