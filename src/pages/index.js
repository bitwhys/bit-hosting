import React from 'react'
import { ThemeProvider } from 'styled-components'
import Sticky from 'react-stickynode'
import { hostingTheme } from '@/theme'
import { GlobalStyle, ContentWrapper } from '@/theme/hosting.style'
import { ResetCSS } from '@/assets/css/style'
import Navbar from '@/components/Navbar'
import FeatureSection from '@/components/sections/Features'
import InfoSection from '@/components/sections/Info'
import DomainSection from '@/components/sections/Domain'
import PaymentSection from '@/components/sections/Payment'
import GuaranteeSection from '@/components/sections/Guarantee'
import FaqSection from '@/components/sections/Faq'
import ServicesSection from '@/components/sections/Services'
import BannerSection from '@/components/sections/Banner'
import PricingSection from '@/components/sections/Pricing'
import TestimonialSection from '@/components/sections/Testimonials'
import ContactSection from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import { DrawerProvider } from '@/contexts/DrawerContext'
import { ParallaxProvider } from 'react-scroll-parallax'
import SEO from '@/components/seo'

export default () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        <SEO title="Hosting | A react next landing page" />

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          <BannerSection />
          <FeatureSection />
          <InfoSection />
          <PricingSection />
          <DomainSection />
          <ServicesSection />
          <PaymentSection />
          <TestimonialSection />
          <GuaranteeSection />
          <FaqSection />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  )
}
