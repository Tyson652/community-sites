import React, { ReactNode } from "react";
import Helmet from "react-helmet";
import SiteYamlType from "../../types/siteYaml";
import FrontmatterType from "../../types/frontmatter";

export interface HeadProps {
  siteYaml: SiteYamlType;
  frontmatter: FrontmatterType;
  children: ReactNode;
}

export const Head = ({ frontmatter, siteYaml, children }: HeadProps) => {
  const { title, defaultImage, description, siteUrl } = siteYaml;
  const {
    path,
    title: eventTitle,
    description: frontmatterDescription,
    mainImage,
    startDate,
    endDate,
    location
  } = frontmatter;
  const { name, streetAddress, city, latitude, longitude } = location;
  const seo = {
    title: eventTitle || title,
    description: frontmatterDescription || description,
    url: path ? siteUrl + path : siteUrl,
    image: mainImage ? siteUrl + mainImage.childImageSharp.fluid.src : defaultImage
  };

  return (
    <div>
      <Helmet defaultTitle={title} titleTemplate={`%s &mdash; ${title}`}>
        >
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#1B1B38" />
        <link rel="canonical" href={seo.url} />
        <meta name="description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={seo.image} />
        <script type="application/ld+json">
          {`{
        "@context": "http://schema.org",
        "@type": "Event",
        "name": ${seo.title},
        "url": ${seo.url},
        "description": ${seo.description},
        "startDate": ${startDate},
        "endDate": ${endDate},
        "location": {
          "@type": "Place",
          "name": ${name},
          "address": {
            "@type": "PostalAddress",
            "streetAddress": ${streetAddress},
            "addressLocality": ${city},
            "addressCountry": "Australia"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": ${latitude},
            "longitude": ${longitude}
          }
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "organizer": {
          "@type": "Organization",
          "name": ${title},
          "url": ${siteUrl}
          }
        }`}
        </script>
      </Helmet>
      {children}
    </div>
  );
};
