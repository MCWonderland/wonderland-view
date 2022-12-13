import {User} from "../app/data/schema/user";

export default class Fakes {

  static createUser(): User {
    return {
      discordId: "discord_id",
      discordUsername: "discord_Username",
      id: "id",
      isAdmin: false,
      mcId: "mcId",
      mcUsername: "mcUsername"
    }
  }
}
