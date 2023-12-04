import React from "react";
import { Helmet } from "react-helmet";
import { seo } from "../../portfolio.js";

function SeoHeader() {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>
        Samarth Mishra - Full Stack Developer and Penetration Tester
      </title>
      <meta
        name="description"
        content="I'm a passionate Full Stack Developer and Penetration Tester with expertise in web development, ethical hacking, and data structures. Currently pursuing a BBA, I'm proficient in HTML, JS, PHP, MongoDB, Linux, and Google Cloud Terminal. I've contributed to Internet Archive.org and the Tor Project through Google Summer of Code 2023. I hold the CEH certification from IIT Kharagpur and completed courses in JavaScript, Python, reverse engineering, and ethical hacking. CISSP certified. I enjoy reading and cooking, and aspire to teach coding and cybersecurity. Let's collaborate on exciting projects! Reach out to me."
      />
      <meta property="og:title" content="Samarth Mishra" />
      <meta
        property="og:description"
        content="I'm a passionate Full Stack Developer and Penetration Tester with expertise in web development, ethical hacking, and data structures."
      />
      <meta property="" content={seo?.og?.type} />
      <meta property="Samarthmishra.xyz" content={seo?.og?.url} />
    </Helmet>
  );
}

export default SeoHeader;
