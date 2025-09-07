import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import type { TISODateString } from "./types"

dayjs.extend(utc)

export const dateUtils = {
  now: (): TISODateString => {
    return dayjs.utc().toISOString() as TISODateString
  },
  isValid: (v: string): v is TISODateString => {
    return dayjs(v).isValid()
  }
}
