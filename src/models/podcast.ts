export interface TopPodcast {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: PodcastInfo[];
  updated: Updated;
  rights: Rights;
  title: Title;
  icon: Icon;
  link: Link[];
  id: IdFeed;
}

export interface Author {
  name: Name;
  uri: Uri;
}

export interface Name {
  label: string;
}

export interface Uri {
  label: string;
}

export interface PodcastInfo {
  "im:name": ImName;
  "im:image": ImImage[];
  summary: Summary;
  "im:price": ImPrice;
  "im:contentType": ImContentType;
  rights: Rights;
  title: Title;
  link: Link;
  id: Id;
  "im:artist": ImArtist;
  category: Category;
  "im:releaseDate": ImReleaseDate;
}

export interface ImName {
  label: string;
}

export interface ImImage {
  label: string;
  attributes: Attributes;
}

export interface Attributes {
  height: string;
}

export interface Summary {
  label: string;
}

export interface ImPrice {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
}

export interface ImContentType {
  attributes: { term: string; label: string };
}

export interface Rights {
  label: string;
}

export interface Title {
  label: string;
}

export interface Link {
  attributes: { rel: string; type?: string; href: string };
}

export interface Id {
  label: string;
  attributes: {
    "im:id": string;
  };
}

export interface ImArtist {
  label: string;
  attributes: {
    href: string;
  };
}

export interface Category {
  attributes: {
    "im:id": string;
    term: string;
    scheme: string;
    label: string;
  };
}

export interface ImReleaseDate {
  label: string;
  attributes: {
    label: string;
  };
}

export interface Updated {
  label: string;
}

export interface Icon {
  label: string;
}

export interface IdFeed {
  label: string;
}
