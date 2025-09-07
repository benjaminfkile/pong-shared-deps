import type { TISODateString } from "./types"

export interface IHeartbeat {
  user_id: number | null
  created_at: TISODateString
}

export interface IUser {
  user_id: number
  email: string
  created_at: TISODateString
}

