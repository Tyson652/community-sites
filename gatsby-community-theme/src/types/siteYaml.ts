import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";

export default interface UseSiteYaml {
  title: string;
  logo: string;
  nextEventLine: string;
  aboutTitle: string;
  eventsTitle: string;
  organisersTitle: string;
  sponsorsTitle: string;
  footer: Footer;
  iconButton: IconButton;
  talks: Talks;
  headerNav: HeaderNav[];
  defaultImage: string;
  description: string;
  siteUrl: string;
  pageInformation: PageInformation;
  heroEvent: HeroEvent;
  paginationButtons: PaginationButtons;
  location: Location;
}

interface Location {
  name: string;
  mapUrl: string;
  address: string;
  instructions: string;
  streetAddress: string;
  city: string;
  latitude: string;
  longitude: string;
}

interface PaginationButtons {
  previous: string;
  next: string;
}

interface PageInformation {
  heading1: string;
  paragraph1: string;
}

interface Footer {
  message1: string;
  message2: string;
  copyright: string;
  iconType: string;
  iconKeyword1: string;
  iconLink1: string;
  iconKeyword2: string;
  iconLink2: string;
  iconKeyword3: string;
  iconLink3: string;
}

interface IconButton {
  buttonText: string;
  buttonHref: string;
  buttonImage: string;
  buttonIconName: IconName;
  buttonIconPrefix: IconPrefix;
}

interface Talks {
  title: string;
  email: string;
  line1: string;
  line2: string;
}

interface HeaderNav {
  description: string;
  href: string;
}

interface HeroEvent {
  subHeading1: string;
  subHeading2: string;
}
