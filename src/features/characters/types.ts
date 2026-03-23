export interface Character {
  id: number;              
  name: string;            
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;         
  type: string;            
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown'; 
  origin: LocationInfo;    
  location: LocationInfo;  
  image: string;           
  episode: string[];       
  url: string;             
  created: string;         
}


export interface LocationInfo {
  name: string;            
  url: string;             
}

export interface ApiResponse {
  info: {
    count: number;         
    pages: number;         
    next: string | null;   
    prev: string | null;   
  };
  results: Character[];   
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
