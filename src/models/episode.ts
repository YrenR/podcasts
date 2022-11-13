export interface Episodes {
  resultCount: number;
  results: Episode[];
}

export interface Episode {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency?: string;
  primaryGenreName?: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds?: string[];
  genres: Genres[];
  previewUrl?: string;
  closedCaptioning?: string;
  artistIds?: number[];
  episodeGuid?: string;
  description?: string;
  shortDescription?: string;
  episodeUrl?: string;
  artworkUrl160?: string;
  episodeFileExtension?: string;
  episodeContentType?: string;
}

interface Genres {
  name: string;
  id: string;
}
