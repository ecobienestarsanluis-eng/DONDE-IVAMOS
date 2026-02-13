
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
  NORTH_AMERICA = 'Norteamérica',
  SOUTH_AMERICA = 'Suramérica',
  EUROPE = 'Europa',
  ASIA = 'Asia',
  AFRICA = 'África',
  OCEANIA = 'Oceanía',
  MIDDLE_EAST = 'Medio Oriente',
  BOTH_AMERICAS = 'Ambas Américas'
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
