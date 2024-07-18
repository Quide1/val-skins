export interface Weapon {
  status: number;
  data: Daum[];
}

export interface Daum {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats?: WeaponStats | null;
  shopData?: ShopData | null;
  skins: Skin[];
}

export interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  equipTimeSeconds: number;
  reloadTimeSeconds: number;
  firstBulletAccuracy: number;
  shotgunPelletCount: number;
  wallPenetration: string;
  feature?: string | null;
  fireMode?: string | null;
  altFireType?: string | null;
  adsStats?: AdsStats | null;
  altShotgunStats?: AltShotgunStats | null;
  airBurstStats?: AirBurstStats | null;
  damageRanges: DamageRange[];
}

export interface AdsStats {
  zoomMultiplier: number;
  fireRate: number;
  runSpeedMultiplier: number;
  burstCount: number;
  firstBulletAccuracy: number;
}

export interface AltShotgunStats {
  shotgunPelletCount: number;
  burstRate: number;
}

export interface AirBurstStats {
  shotgunPelletCount: number;
  burstDistance: number;
}

export interface DamageRange {
  rangeStartMeters: number;
  rangeEndMeters: number;
  headDamage: number;
  bodyDamage: number;
  legDamage: number;
}

export interface ShopData {
  cost: number;
  category: string;
  shopOrderPriority: number;
  categoryText: string;
  gridPosition?: GridPosition | null;
  canBeTrashed: boolean;
  image: string;
  newImage: string;
  newImage2: string;
  assetPath: string;
}

export interface GridPosition {
  row: number;
  column: number;
}

export interface Skin {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid?: string | null;
  displayIcon?: string | null;
  wallpaper?: string | null;
  assetPath: string;
  chromas: Chroma[];
  levels: Level[];
}

export interface Chroma {
  uuid: string;
  displayName: string;
  displayIcon?: string | null;
  fullRender: string | null;
  swatch?: string | null;
  streamedVideo?: string | null;
  assetPath: string;
}

export interface Level {
  uuid: string;
  displayName: string;
  levelItem?: string | null;
  displayIcon?: string | null;
  streamedVideo?: string | null;
  assetPath: string;
}

/** Custom interface */
export type InterfaceWeaponList = Pick<Daum, "uuid" | "displayName" | "category">;
