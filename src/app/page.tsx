"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="large"
        background="circleGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Tarrafal 360"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Explore Tarrafal in 360°"
      description="Discover the stunning vistas and hidden corners of Tarrafal with our immersive virtual tour experience."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiley-woman-with-backpack_23-2148518190.jpg",
          alt: "Visitor 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-woman-posing-outdoors_23-2149726435.jpg",
          alt: "Visitor 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/kids-having-fun-as-boy-scouts_23-2149657076.jpg",
          alt: "Visitor 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/water-sky-hotel-view-resort_1203-3803.jpg",
          alt: "Visitor 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/view-south-pass-fakarawa-island_181624-42874.jpg",
          alt: "Visitor 5",
        },
      ]}
      avatarText="Join 1,000+ travelers exploring with us"
      buttons={[
        {
          text: "Start Virtual Tour",
          href: "#",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "Panoramic Views",
        },
        {
          type: "text",
          text: "Interactive Mapping",
        },
        {
          type: "text",
          text: "HD Quality",
        },
        {
          type: "text",
          text: "Easy Navigation",
        },
        {
          type: "text",
          text: "Virtual Exploration",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Why Experience Tarrafal?"
      description={[
        "Tarrafal is known for its breathtaking coastlines, vibrant culture, and unforgettable landscapes. Our 360-degree tour brings the magic directly to your screen, allowing you to walk the paths before you even arrive.",
        "Whether you are planning your next trip or simply dreaming of paradise, experience every corner in high definition.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      features={[
        {
          title: "Precision Mapping",
          description: "Navigate easily with interactive markers and precise location tracking.",
          imageSrc: "http://img.b2bpic.net/free-vector/admin-dashboard-template-with-flat-design_23-2147866451.jpg",
          imageAlt: "Mapping Icon",
        },
        {
          title: "HD Visuals",
          description: "Crystal-clear images capture the vibrant colors and intricate details of our landscapes.",
          imageSrc: "http://img.b2bpic.net/free-photo/wide-angle-shot-mount-johnston-surrounded-by-water-hong-kong_181624-26843.jpg",
          imageAlt: "Camera Icon",
        },
        {
          title: "Interactive Tour",
          description: "Step into the scene with full control for a truly immersive experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-sitting-sofa-wearing-virtual-reality-glasses_23-2148152794.jpg",
          imageAlt: "VR Icon",
        },
      ]}
      title="Immersive Features"
      description="State-of-the-art tools to help you navigate and enjoy your virtual journey."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15+",
          title: "Locations Mapped",
          items: [
            "Beach zones",
            "Mountain trails",
            "Village views",
          ],
        },
        {
          id: "m2",
          value: "5k+",
          title: "Annual Visitors",
          items: [
            "Virtual travelers",
            "Trip planners",
            "Curious explorers",
          ],
        },
        {
          id: "m3",
          value: "100%",
          title: "Immersive Clarity",
          items: [
            "High definition",
            "Smooth transitions",
            "Panoramic view",
          ],
        },
      ]}
      title="Tour Statistics"
      description="Our numbers reflect the growing interest in our virtual experiences."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Elena M.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-modern-woman-with-hat-her-head-standing-near-beach-rocks_23-2148222001.jpg",
        },
        {
          id: "2",
          name: "Marcus R.",
          imageSrc: "http://img.b2bpic.net/free-photo/mid-shot-girl-with-hat-camera_23-2148752373.jpg",
        },
        {
          id: "3",
          name: "Sophia L.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-hat-posing_23-2148601988.jpg",
        },
        {
          id: "4",
          name: "David K.",
          imageSrc: "http://img.b2bpic.net/free-photo/hiker-traveler-pauses-admire-panoramic-mountain-scenery-hill-top_482257-117823.jpg",
        },
        {
          id: "5",
          name: "Sarah W.",
          imageSrc: "http://img.b2bpic.net/free-photo/extreme-sports-healthy-lifestyle-concept-close-up-view-happy-smiling-young-bearded-surfer-carrying-surfboard-his-head-his-way-ocean_273609-1543.jpg",
        },
      ]}
      cardTitle="Traveler Experiences"
      cardTag="What People Say"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Is the tour free?",
          content: "Yes, our virtual tour is completely free to access for everyone.",
        },
        {
          id: "2",
          title: "Do I need VR gear?",
          content: "No, it works seamlessly on your desktop, tablet, or smartphone.",
        },
        {
          id: "3",
          title: "Can I save locations?",
          content: "You can bookmark your favorite spots for easy reference later.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/telemarketing-sales-worker-answering-client-call-headset-talking-people-remote-helpline-support-young-telework-operator-using-customer-care-service-equipment-close-up_482257-43024.jpg"
      title="Common Questions"
      description="Have questions about your virtual trip? Check our answers."
      faqsAnimation="slide-up"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Need More Information?"
      description="Send us your questions, and we will get back to you shortly."
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-checking-map-new-destination-with-copy-space_23-2148631340.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Tarrafal 360"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Contact Support",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
