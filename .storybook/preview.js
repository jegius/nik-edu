import { ButtonComponent } from '../src/components/button/button-component.js';
import { LinkComponent } from '../src/components/link/link-component.js';
import { LogoHeaderComponent } from '../src/components/logo-header/logo-header-component.js';
import { HeaderComponent } from '../src/components/header/header-component.js';
import { TextHeaderComponent } from '../src/components/text-header/text-header-component.js';
import { TextComponent } from '../src/components/text/text-component.js';
import { HomeFaceComponent } from '../src/components/home-face/home-face-component.js';
import { HomeSocialComponent } from '../src/components/home-social/home-social-component.js';
import { HomeSocialItemComponent } from '../src/components/home-social-item/home-social-item-component.js';
import { HomeInfoComponent } from '../src/components/home-info/home-info-component.js';
import { HomeComponent } from '../src/components/home/home-component.js';
import { MainSiteComponent } from '../src/components/main-site/main-site-component.js';
import { IconComponent } from '../src/components/icon/icon-component.js';
import { BlockComponent } from '../src/components/block/block-component.js';
import { BlockListComponent } from '../src/components/block-list/block-list-component.js';
import { MyServicesComponent } from '../src/components/my-services/my-services-component.js';
import { ServicesItemElementComponent } from '../src/components/services-item-element/services-item-element-component.js';
import { ServicesItemListComponent } from '../src/components/services-item-list/services-item-list-component.js';
import { ServicesItemButtonComponent } from '../src/components/services-item-button/services-item-button-component.js';
import { ServicesItemHeaderComponent } from '../src/components/services-item-header/services-item-header-component.js';
import { ServicesItemComponent } from '../src/components/services-item/services-item-component.js';
import { ServicesListComponent } from '../src/components/services-list/services-list-component.js';
import { ServicesInfoComponent } from '../src/components/services-info/services-info-component.js';
import { ByServicesComponent } from '../src/components/by-services/by-services-component.js';
import { ServicesComponent } from '../src/components/services/services-component.js';
import { PortfolioImgComponent } from '../src/components/portfolio-img/portfolio-img-component.js';
import { PortfolioComponent } from '../src/components/portfolio/portfolio-component.js';
import { SectionHeaderComponent } from '../src/components/section-header/section-header-component.js';
import { CaseStudiesComponent } from '../src/components/case-studies/case-studies-component.js';
import { SelectorOptionComponent } from '../src/components/selector-option/selector-option-component.js';
import { SelectorComponent } from '../src/components/selector/selector-component.js';
import { SentenceComponent } from '../src/components/sentence/sentence-component.js';
import { BlockHeaderComponent } from '../src/components/block-header/block-header-component.js';
import { AuthorImgComponent } from '../src/components/author-img/author-img-component.js';
import { AuthorInfoComponent } from '../src/components/author-info/author-info-component.js';
import { AuthorComponent } from '../src/components/author/author-component.js';
import { BlockQuoteComponent } from '../src/components/block-quote/block-quote-component.js';
import { BlogBlockComponent } from '../src/components/blog-block/blog-block-component.js';
import { BlogBlockListComponent } from '../src/components/blog-block-list/blog-block-list-component.js';
import { BlogComponent } from '../src/components/blog/blog-component.js';
import { ClientImgComponent } from '../src/components/client-img/client-img-component.js';
import { ClientListComponent } from '../src/components/client-list/client-list-component.js';
import { ClientInfoComponent } from '../src/components/client-info/client-info-component.js';
import { ClientsComponent } from '../src/components/clients/clients-component.js';
import { FooterSocialLinksComponent } from '../src/components/footer-social-links/footer-social-links-component.js';
import { FooterSocialComponent } from '../src/components/footer-social/footer-social-component.js';
import { FooterEmalInputComponent } from '../src/components/footer-email-input/footer-email-input-component.js';
import { FooterEmailComponent } from '../src/components/footer-email/footer-email-component.js';
import { FooterInfoComponent } from '../src/components/footer-info/footer-info-component.js';
import { FooterComponent } from '../src/components/footer/footer-component.js';
import { ContactComponent } from '../src/components/contact/contact-component.js';

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'site',
      values: [
        {
          name:'site',
          value: '#101010',
        },
        {
          name: 'gray',
          value: '#808080'
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

[
  ButtonComponent,
  LinkComponent,
  IconComponent,
  LogoHeaderComponent,
  HeaderComponent,
  NavigationComponent,
  TextHeaderComponent,
  BlockHeaderComponent,
  TextComponent,
  SectionHeaderComponent,
  HomeFaceComponent,
  HomeSocialComponent,
  HomeSocialItemComponent,
  HomeInfoComponent,
  HomeComponent,
  BlockComponent,
  BlockListComponent,
  MyServicesComponent,
  MainSiteComponent,
  ServicesItemElementComponent,
  ServicesItemListComponent,
  ServicesItemButtonComponent,
  ServicesItemHeaderComponent,
  ServicesItemComponent,
  ServicesListComponent,
  ServicesInfoComponent,
  ByServicesComponent,
  ServicesComponent,
  PortfolioImgComponent,
  PortfolioComponent,
  CaseStudiesComponent,
  SelectorOptionComponent,
  SelectorComponent,
  SentenceComponent,
  AuthorImgComponent,
  AuthorInfoComponent,
  AuthorComponent,
  BlockQuoteComponent,
  BlogBlockComponent,
  BlogBlockListComponent,
  BlogComponent,
  ClientImgComponent,
  ClientListComponent,
  ClientInfoComponent,
  ClientsComponent,
  FooterSocialLinksComponent,
  FooterSocialComponent,
  FooterEmalInputComponent,
  FooterEmailComponent,
  FooterInfoComponent,
  FooterComponent,
  ContactComponent,
].map((component) => customElements.define(component.name, component));

export default preview;
