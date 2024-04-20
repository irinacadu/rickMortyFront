export interface RickMorty {
    results: RickMortyCharacter[];
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
  }
  
  export interface RickMortyCharacter {
    id: number;
    name: string;
    
    imageUrl: string;
   
    created: string;
  }
  