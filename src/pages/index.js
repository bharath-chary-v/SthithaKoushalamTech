import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/customer-support';
import HowWeWork from 'sections/video-one';
import AboutUs from 'sections/aboutUs';
import TechStack from 'sections/call-to-action';
import Testimonials from 'sections/testimonials';
import Contact from 'sections/feature';

export default function IndexPage() {
  return (
    <>
      <SEO title="SthithaKoushalam.Tech — India's Next-Gen Tech Startup" />
      <Layout>
        <Banner />
        <Services />
        <HowWeWork />
        <AboutUs />
        <TechStack />
        <Testimonials />
        <Contact />
      </Layout>
    </>
  );
}
