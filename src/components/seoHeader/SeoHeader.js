import React from "react";
import { Helmet } from "react-helmet";
import { seo } from "../../portfolio.js";

function SeoHeader() {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta
        name="I'm a passionate Full Stack Developer and Penetration Tester with expertise in web development, ethical hacking, and data structures. Currently pursuing a BBA, I'm proficient in HTML, JS, PHP, MongoDB, Linux, and Google Cloud Terminal. I've contributed to Internet Archive.org and the Tor Project through Google Summer of Code 2023. I hold the CEH certification from IIT Kharagpur and completed courses in JavaScript, Python, reverse engineering, and ethical hacking. CISSP certified. I enjoy reading and cooking, and aspire to teach coding and cybersecurity. Let's collaborate on exciting projects! Reach out to me."
        content={seo.description}
      />
      <meta
        property="Samarth Mishra, Stackdevsamarth"
        content={seo?.og?.title}
      />
      <meta property="Samarth Mishra Website" content={seo?.og?.type} />
      <meta property="Samarthmishra.in" content={seo?.og?.url} />
    </Helmet>
  );
}

export default SeoHeader;
