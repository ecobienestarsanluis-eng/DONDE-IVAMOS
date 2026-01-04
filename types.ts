
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
  NORTH_AMERICA = 'Norte América',
  SOUTH_AMERICA = 'La Nueva Sur América',
  BOTH = 'Ambas Américas'
}

export interface TravelPreferences {
  region: Region;
  duration: number;
  style: 'Luxury' | 'Adventure' | 'Cultural' | 'Gourmet';
  enthusiasm: number; // For that "1000000000 stars" vibe
}
