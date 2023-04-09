export interface GameRecord {
  gameId: string;
  title: string;
  description: string;
  videoUrl: string;
  date: string;
  duration: number;

  arenaId: string;
  maxCoreHealth: number;
  timers: MatchStateTimerSettings[];
  bonusDamageChanges: BonusDamageChange[];
  periodDamageChanges: PeriodDamageSettings[];

  teamStats: TeamStats[];
  playerStats: PlayerStats[];
}

export interface MatchStateTimerSettings {
  name: string;
  toggleTiming: number;
}

export interface PeriodDamageSettings {
  gameState: string;
  damagePerSecond: number;
}

export interface BonusDamageChange {
  bonusDamage: number;
  gameTime: number;
}

export interface TeamStats {
  color: string;
  members: string[];
  bankBalance: number;
  customName: string;
  customLogoUrl: string;
  healthLeft: number;
  abilityPurchasedCount: any
}

export interface PlayerStats {
  owner: string;
  kills: number;
  deaths: number;
  coreDamages: number;
  playerDamages: number;
  potionSplashed: number;
  potionTotalAcc: number;
  earnedCoins: any;
  kitChanges: KitChangeRecord[];
}

export interface KitChangeRecord {
  kit: string;
  gameTime: number;
}


export interface TeamAbility {
  name: string;
  displayName: string;
}
