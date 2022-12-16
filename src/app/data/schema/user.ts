export interface User {
  id: string,
  mcProfile: McProfile
  discordProfile: DiscordProfile
  isAdmin: boolean
}

export interface McProfile {
  uuid: string,
  username: string,
}

export interface DiscordProfile {
  id: string,
  username: string,
}
