
export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

export interface ItineraryResponse {
  content: string;
  sources: GroundingChunk[];
}

export enum Region {
  AMERICAS = 'Americas',
  EUROPE = 'Europe',
  ASIA = 'Asia',
  AFRICA = 'Africa',
  OCEANIA = 'Oceania',
  ANTARCTIC = 'Antarctic'
}

export interface TravelPreferences {
  region: Region;
  country: string;
  state: string;
  town: string;
  duration: number;
  style: 'Luxury' | 'Adventure' | 'Cultural' | 'Gourmet';
  enthusiasm: number;
}
