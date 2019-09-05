export default interface Frontmatter {
  path: string;
  date: string;
  time: string;
  title: string;
  location: Location;
  organisers: Organisers[];
  sponsors: Sponsors[];
  talks: Talks[];
  description: string;
  mainImage: Image;
  images: Image[];
  startDate: string;
  endDate: string;
}

interface Image {
  publicURL: string
  childImageSharp: ChildImageSharp
}

interface ChildImageSharp {
  fluid: Fluid
}

interface Fluid {
  src: string
}

interface Location {
  id: string;
  name: string;
  mapUrl: string;
  address: string;
  instructions: string;
  streetAddress: string;
  city: string;
  latitude: string;
  longitude: string;
}

interface Organisers {
  id: string;
  name: string;
  avatarUrl: string;
  meetupUrl: string;
  websiteUrl: string;
  twitter: string;
  company: string;
  companyUrl: string;
}

interface Sponsors {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  twitter: string;
}

interface Talks {
  speaker: string;
  title: string;
  description: string;
  photos: string;
  slides: string;
  video: string;
}
