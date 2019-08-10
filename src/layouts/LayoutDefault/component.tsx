import React, { FunctionComponent } from 'react';
import { Header } from '~components/Header';
import { Footer } from '~components/Footer';
import { Theme } from '~components/Theme';
import { SEO } from '~components/SEO';
import '~assets/css/reset.css';
import '~assets/css/variables.css';
import '~assets/css/fonts.css';
import '~assets/css/global.css';

const LayoutDefault: FunctionComponent = ({ children }) => (
  <Theme>
    <SEO />
    <Header />
    {children}
    <Footer />
  </Theme>
);

export default LayoutDefault;
