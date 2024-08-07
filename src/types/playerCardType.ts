export interface Card {
    status: number;
    data:   Datum[];
}

export interface Datum {
    uuid:               string;
    displayName:        string;
    isHiddenIfNotOwned: boolean;
    themeUuid:          null | string;
    displayIcon:        string;
    smallArt:           string;
    wideArt:            string;
    largeArt:           string;
    assetPath:          string;
}
