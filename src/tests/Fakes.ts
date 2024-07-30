import {User} from "../app/data/schema/user";
import {GameRecord} from "../app/data/schema/stats";

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

  static createGameRecord(): GameRecord {
    return {
      "gameId": "11456b69-d27a-4976-b726-de40b4fcc135",
      "title": "Weekly_Cup_44-2",
      "description": "到鎖定模式不分勝負，最後Blue5人對方堡壘",
      "videoUrl": "",
      "date": "2023-04-08T13:29:26.046+00:00",
      "duration": 2104.073,
      "arenaId": "arenaSnow",
      "maxCoreHealth": 650,
      "timers": [
        {
          "name": "PVP_ALLOWED",
          "toggleTiming": 300
        },
        {
          "name": "CORE_SPAWNED",
          "toggleTiming": 420
        },
        {
          "name": "LOCK_MODE",
          "toggleTiming": 1500
        },
        {
          "name": "DEATH_MATCH",
          "toggleTiming": 3000
        }
      ],
      "bonusDamageChanges": [
        {
          "bonusDamage": 8,
          "gameTime": 1500.008
        }
      ],
      "periodDamageChanges": [],
      "teamStats": [
        {
          "color": "RED",
          "members": [
            "336c736a-a721-417e-a51a-e22b862e4c06",
            "f35427e5-a58e-4ddf-ae5a-0aa6fd6e6b25",
            "f50f712d-58b6-4618-b409-b22fd6a36e31",
            "9254fe37-2d0b-4813-b9d1-f02e0dc62d69",
            "b9c65ecf-e4c4-447d-9f13-262c2b748786"
          ],
          "bankBalance": 1026,
          "customName": "",
          "customLogoUrl": "none",
          "healthLeft": 0,
          "abilityPurchasedCount": {
            "REVOLUTION": 2,
            "QUICK_RESPAWN": 2,
            "TRAP": 7
          }
        },
        {
          "color": "BLUE",
          "members": [
            "ec37a1b1-9eab-4eec-af4f-55ea5749ad55",
            "a78ff8ec-a2e7-4640-a4d8-7290ad421c87",
            "e5bdf2a2-1b9b-499b-ba44-10669f302ce4",
            "058f0ac7-cd36-46ae-aa7c-bb7b97c30a8f",
            "3c94c197-7d3d-4489-a6a5-374d674656f6"
          ],
          "bankBalance": 766,
          "customName": "",
          "customLogoUrl": "none",
          "healthLeft": 227.24999999995327,
          "abilityPurchasedCount": {
            "REVOLUTION": 1,
            "TRAP": 15
          }
        }
      ],
      "playerStats": [
        {
          "owner": "336c736a-a721-417e-a51a-e22b862e4c06",
          "kills": 2,
          "deaths": 10,
          "coreDamages": 24,
          "playerDamages": 1601.56524806679,
          "potionSplashed": 253,
          "potionTotalAcc": 195.87805818942235,
          "earnedCoins": {
            "MINE": 6058,
            "NONE": 5817,
            "KILL": 1963
          },
          "kitChanges": [
            {
              "kit": "diamond",
              "gameTime": 282.605
            }
          ]
        },
        {
          "owner": "f35427e5-a58e-4ddf-ae5a-0aa6fd6e6b25",
          "kills": 3,
          "deaths": 6,
          "coreDamages": 16.5,
          "playerDamages": 404.2955487831683,
          "potionSplashed": 125,
          "potionTotalAcc": 93.66120828011238,
          "earnedCoins": {
            "MINE": 8963,
            "NONE": 4003
          },
          "kitChanges": [
            {
              "kit": "rogue",
              "gameTime": 289.254
            },
            {
              "kit": "bard",
              "gameTime": 890.329
            }
          ]
        },
        {
          "owner": "f50f712d-58b6-4618-b409-b22fd6a36e31",
          "kills": 0,
          "deaths": 3,
          "coreDamages": 0,
          "playerDamages": 376.08900845289173,
          "potionSplashed": 118,
          "potionTotalAcc": 94.05659523776801,
          "earnedCoins": {
            "MINE": 20098,
            "NONE": 4747
          },
          "kitChanges": [
            {
              "kit": "builder",
              "gameTime": 304.016
            }
          ]
        },
        {
          "owner": "9254fe37-2d0b-4813-b9d1-f02e0dc62d69",
          "kills": 6,
          "deaths": 6,
          "coreDamages": 64.25,
          "playerDamages": 958.1282096993931,
          "potionSplashed": 190,
          "potionTotalAcc": 142.587326835111,
          "earnedCoins": {
            "MINE": 1052,
            "NONE": 13514,
            "KILL": 223
          },
          "kitChanges": [
            {
              "kit": "jumper",
              "gameTime": 330.666
            }
          ]
        },
        {
          "owner": "b9c65ecf-e4c4-447d-9f13-262c2b748786",
          "kills": 0,
          "deaths": 4,
          "coreDamages": 44.5,
          "playerDamages": 444.81935435980625,
          "potionSplashed": 74,
          "potionTotalAcc": 60.1600745623886,
          "earnedCoins": {
            "MINE": 8664,
            "NONE": 3722
          },
          "kitChanges": [
            {
              "kit": "builder",
              "gameTime": 284.405
            },
            {
              "kit": "archer",
              "gameTime": 1153.497
            }
          ]
        },
        {
          "owner": "ec37a1b1-9eab-4eec-af4f-55ea5749ad55",
          "kills": 7,
          "deaths": 1,
          "coreDamages": 50.5,
          "playerDamages": 1399.5365295779743,
          "potionSplashed": 90,
          "potionTotalAcc": 72.69529414238981,
          "earnedCoins": {
            "MINE": 14350,
            "NONE": 3592,
            "KILL": 1325
          },
          "kitChanges": [
            {
              "kit": "diamond",
              "gameTime": 240.002
            }
          ]
        },
        {
          "owner": "a78ff8ec-a2e7-4640-a4d8-7290ad421c87",
          "kills": 6,
          "deaths": 3,
          "coreDamages": 12,
          "playerDamages": 505.86709941625645,
          "potionSplashed": 83,
          "potionTotalAcc": 63.3277545229707,
          "earnedCoins": {
            "MINE": 2340,
            "NONE": 8544,
            "KILL": 970
          },
          "kitChanges": [
            {
              "kit": "archer",
              "gameTime": 289.055
            },
            {
              "kit": "bard",
              "gameTime": 1642.208
            },
            {
              "kit": "rogue",
              "gameTime": 1927.66
            }
          ]
        },
        {
          "owner": "e5bdf2a2-1b9b-499b-ba44-10669f302ce4",
          "kills": 6,
          "deaths": 6,
          "coreDamages": 234.85000228881836,
          "playerDamages": 1432.5863557493667,
          "potionSplashed": 148,
          "potionTotalAcc": 114.68367337876654,
          "earnedCoins": {
            "MINE": 3158,
            "NONE": 10178,
            "KILL": 50
          },
          "kitChanges": [
            {
              "kit": "jumper",
              "gameTime": 267.999
            }
          ]
        },
        {
          "owner": "058f0ac7-cd36-46ae-aa7c-bb7b97c30a8f",
          "kills": 1,
          "deaths": 0,
          "coreDamages": 26.25,
          "playerDamages": 518.2227982643238,
          "potionSplashed": 20,
          "potionTotalAcc": 16.45236062282224,
          "earnedCoins": {
            "MINE": 13219,
            "NONE": 2578
          },
          "kitChanges": [
            {
              "kit": "builder",
              "gameTime": 273.605
            }
          ]
        },
        {
          "owner": "3c94c197-7d3d-4489-a6a5-374d674656f6",
          "kills": 7,
          "deaths": 3,
          "coreDamages": 52.25,
          "playerDamages": 1187.0256442868704,
          "potionSplashed": 158,
          "potionTotalAcc": 119.86334122399685,
          "earnedCoins": {
            "MINE": 10020,
            "NONE": 16447,
            "KILL": 1699
          },
          "kitChanges": [
            {
              "kit": "builder",
              "gameTime": 240.844
            },
            {
              "kit": "builder",
              "gameTime": 240.895
            },
            {
              "kit": "bard",
              "gameTime": 974.594
            },
            {
              "kit": "jumper",
              "gameTime": 1196.172
            }
          ]
        }
      ]
    }

  }
}

