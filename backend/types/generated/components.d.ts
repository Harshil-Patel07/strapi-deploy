import type { Schema, Attribute } from '@strapi/strapi';

export interface AtomsButton extends Schema.Component {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'Button';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    kind: Attribute.Enumeration<
      [
        'violet with arrow',
        'violet',
        'transparent',
        'transparent with tiled-arrow',
        'violet with star',
        'transparent with border with tild-icon'
      ]
    >;
    size: Attribute.Enumeration<['small', 'medium']>;
    isExternal: Attribute.Boolean;
  };
}

export interface AtomsEventsSection extends Schema.Component {
  collectionName: 'components_atoms_events_sections';
  info: {
    displayName: 'Events Section';
    icon: 'exit';
    description: '';
  };
  attributes: {
    subTitle: Attribute.String;
    title: Attribute.String;
    image: Attribute.Media;
    buttonLabel: Attribute.String;
    buttonLink: Attribute.String;
  };
}

export interface AtomsFooterLink extends Schema.Component {
  collectionName: 'components_atoms_footer_links';
  info: {
    displayName: 'Footer Link';
    icon: 'attachment';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean;
  };
}

export interface AtomsHeaderLinks extends Schema.Component {
  collectionName: 'components_atoms_header_links';
  info: {
    displayName: 'Header Link';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean;
    subNav: Attribute.Component<'menu.dropdown', true>;
  };
}

export interface AtomsImageTextList extends Schema.Component {
  collectionName: 'components_atoms_image_text_lists';
  info: {
    displayName: 'Image Text List';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface AtomsKeepUpListItem extends Schema.Component {
  collectionName: 'components_atoms_keep_up_list_items';
  info: {
    displayName: 'Keep Up List Item';
    icon: 'filter';
  };
  attributes: {
    image: Attribute.Media;
    content: Attribute.Text;
  };
}

export interface AtomsLabelLink extends Schema.Component {
  collectionName: 'components_atoms_label_links';
  info: {
    displayName: 'Label Link';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean;
  };
}

export interface AtomsOurStoryListItem extends Schema.Component {
  collectionName: 'components_atoms_our_story_list_items';
  info: {
    displayName: 'Our-Story List Item';
    icon: 'crown';
    description: '';
  };
  attributes: {
    content: Attribute.String;
    backgroundImage: Attribute.Media;
  };
}

export interface AtomsPartnerLogoList extends Schema.Component {
  collectionName: 'components_atoms_partner_logo_lists';
  info: {
    displayName: 'PartnerLogo List';
    icon: 'crown';
  };
  attributes: {
    link: Attribute.String;
    partnerLogo: Attribute.Media;
  };
}

export interface AtomsPreviousConferencesList extends Schema.Component {
  collectionName: 'components_atoms_previous_conferences_lists';
  info: {
    displayName: 'Previous Conferences List';
    icon: 'cog';
    description: '';
  };
  attributes: {
    bannerImage: Attribute.Media;
    category: Attribute.Enumeration<['IN PERSON']>;
    title: Attribute.String;
    buttonLabel: Attribute.String;
    buttonLink: Attribute.String;
    fromDate: Attribute.Date;
    toDate: Attribute.Date;
  };
}

export interface AtomsPrimaryHeroContent extends Schema.Component {
  collectionName: 'components_atoms_primary_hero_contents';
  info: {
    displayName: 'Primary Hero Content';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    readMoreLabel: Attribute.String;
    readMoreLink: Attribute.String;
    isExternal: Attribute.Boolean;
    mainHeading: Attribute.Blocks;
    factSheetLabel: Attribute.String;
    factSheetLink: Attribute.String;
    dateIcon: Attribute.Media;
    locationIcon: Attribute.Media;
    backgroundImage: Attribute.Media;
    backgroundColorImage: Attribute.Media;
    fromDate: Attribute.Date;
    toDate: Attribute.Date;
    locationName: Attribute.String;
  };
}

export interface AtomsPublicationListItems extends Schema.Component {
  collectionName: 'components_atoms_publication_list_items';
  info: {
    displayName: 'Publication List Items';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    publicationImage: Attribute.Media;
    publishDate: Attribute.Date;
    Category: Attribute.Enumeration<
      [
        'Information',
        'Press Release',
        'Thought Leadership',
        'Publication',
        'Insights',
        '\u0645\u0639\u0644\u0648\u0645\u0629',
        '\u0628\u064A\u0627\u0646 \u0635\u062D\u0641\u064A',
        '\u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0641\u0643\u0631',
        '\u0627\u0644\u0646\u0634\u0631',
        '\u0623\u0641\u0643\u0627\u0631'
      ]
    >;
    publicationTitle: Attribute.String;
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface AtomsSpeakersSection extends Schema.Component {
  collectionName: 'components_atoms_speakers_sections';
  info: {
    displayName: 'Speakers List';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    position: Attribute.String;
    speakerBioTitle: Attribute.String;
    speakerBioDescription: Attribute.Blocks;
    speakerSession: Attribute.String;
    thumbnailImage: Attribute.Media;
    video: Attribute.Media;
    bottomText: Attribute.String;
  };
}

export interface AtomsStatsBlockSection extends Schema.Component {
  collectionName: 'components_atoms_stats_block_sections';
  info: {
    displayName: 'Stats Blocks List';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    numbers: Attribute.String;
  };
}

export interface AtomsTitleDescriptionDownloadCard extends Schema.Component {
  collectionName: 'components_atoms_title_description_download_cards';
  info: {
    displayName: 'Title Description Download Card';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    downloadLabel: Attribute.String;
    pdf: Attribute.Media;
  };
}

export interface AtomsTitleDescription extends Schema.Component {
  collectionName: 'components_atoms_title_descriptions';
  info: {
    displayName: 'Title Description';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface ComponentsAboutGlmc extends Schema.Component {
  collectionName: 'components_components_about_glmcs';
  info: {
    displayName: 'About GLMC';
    icon: 'clock';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface ComponentsContactUsSection extends Schema.Component {
  collectionName: 'components_components_contact_us_sections';
  info: {
    displayName: 'Contact Us Section';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    titleDescription: Attribute.Component<'atoms.title-description'>;
    ctaButton: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsDownloadSection extends Schema.Component {
  collectionName: 'components_components_download_section_s';
  info: {
    displayName: 'Download Section ';
    description: '';
  };
  attributes: {
    downloadCard: Attribute.Component<
      'atoms.title-description-download-card',
      true
    >;
  };
}

export interface ComponentsEventsSection extends Schema.Component {
  collectionName: 'components_components_events_sections';
  info: {
    displayName: 'Events Section';
    icon: 'envelop';
  };
  attributes: {
    eventsList: Attribute.Component<'atoms.events-section', true>;
  };
}

export interface ComponentsFaqSection extends Schema.Component {
  collectionName: 'components_components_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    faqs: Attribute.Relation<
      'components.faq-section',
      'oneToMany',
      'api::faq.faq'
    >;
    heading: Attribute.String;
  };
}

export interface ComponentsFeaturedVideo extends Schema.Component {
  collectionName: 'components_components_featured_videos';
  info: {
    displayName: 'Featured Video';
    icon: 'feather';
  };
  attributes: {
    video_lists: Attribute.Relation<
      'components.featured-video',
      'oneToMany',
      'api::video-list.video-list'
    >;
  };
}

export interface ComponentsGenevaSection extends Schema.Component {
  collectionName: 'components_components_geneva_sections';
  info: {
    displayName: 'Geneva Section';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    backgroundImage: Attribute.Media;
    date: Attribute.Date;
    title: Attribute.String;
    description: Attribute.Text;
    ctaButton: Attribute.Component<'atoms.button', true>;
  };
}

export interface ComponentsHeroSection extends Schema.Component {
  collectionName: 'components_components_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    heroImage: Attribute.Media;
    backgroundImage: Attribute.Media;
    location: Attribute.String;
    usedFor: Attribute.Enumeration<
      [
        'Events',
        'GLMC Geneva',
        'Press Center Inner',
        'Meet RYAN',
        'Our Conference',
        'About Us',
        'Travel Information'
      ]
    >;
    button: Attribute.Component<'atoms.button', true>;
    video: Attribute.Media;
    thumbnail: Attribute.Media;
    title: Attribute.Blocks;
    fromDate: Attribute.Date;
    toDate: Attribute.Date;
    isTwoDate: Attribute.Boolean;
    content: Attribute.Blocks;
  };
}

export interface ComponentsImageTextBlock extends Schema.Component {
  collectionName: 'components_components_image_text_blocks';
  info: {
    displayName: 'Image Text Block';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    imageTextBlock: Attribute.Component<'atoms.image-text-list', true>;
    heading: Attribute.String;
    backgroundImage: Attribute.Media;
  };
}

export interface ComponentsInTheNewsSection extends Schema.Component {
  collectionName: 'components_components_in_the_news_sections';
  info: {
    displayName: 'In the News Section';
    icon: 'book';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    press_blogs: Attribute.Relation<
      'components.in-the-news-section',
      'oneToMany',
      'api::press-blog.press-blog'
    >;
  };
}

export interface ComponentsInquirieSection extends Schema.Component {
  collectionName: 'components_components_inquirie_sections';
  info: {
    displayName: 'inquirieSection';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    ctaButton: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsInsightHero extends Schema.Component {
  collectionName: 'components_components_insight_heroes';
  info: {
    displayName: 'Featured Insights Section';
    icon: 'crown';
    description: '';
  };
  attributes: {
    insight_blogs: Attribute.Relation<
      'components.insight-hero',
      'oneToMany',
      'api::insight-blog.insight-blog'
    >;
  };
}

export interface ComponentsInsightSection extends Schema.Component {
  collectionName: 'components_components_insight_sections';
  info: {
    displayName: 'Insight Section';
    icon: 'crop';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    backgroundImage: Attribute.Media;
    ctaButton: Attribute.Component<'atoms.button'>;
    insight_blogs: Attribute.Relation<
      'components.insight-section',
      'oneToMany',
      'api::insight-blog.insight-blog'
    >;
  };
}

export interface ComponentsInternationalVisitorSection
  extends Schema.Component {
  collectionName: 'components_components_international_visitor_sections';
  info: {
    displayName: 'International Visitor Section';
    icon: 'bold';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    ctaButton: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsKeepUpSection extends Schema.Component {
  collectionName: 'components_components_keep_up_section_s';
  info: {
    displayName: 'Keep Up Section ';
    icon: 'layout';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    keepUpListItem: Attribute.Component<'atoms.keep-up-list-item', true>;
    title: Attribute.String;
  };
}

export interface ComponentsLogosSection extends Schema.Component {
  collectionName: 'components_components_logos_sections';
  info: {
    displayName: 'Logos Section';
    icon: 'repeat';
    description: '';
  };
  attributes: {
    logos: Attribute.Media;
    heading: Attribute.String;
  };
}

export interface ComponentsMetRyanSection extends Schema.Component {
  collectionName: 'components_components_met_ryan_sections';
  info: {
    displayName: 'Met RYAN Section';
    icon: 'crop';
    description: '';
  };
  attributes: {
    backgroundImage: Attribute.Media;
    heading: Attribute.String;
    description: Attribute.Text;
    ctaButton: Attribute.Component<'atoms.button', true>;
    imageLogo: Attribute.Media;
  };
}

export interface ComponentsMoreInsight extends Schema.Component {
  collectionName: 'components_components_more_insights';
  info: {
    displayName: 'More Insight';
    icon: 'crop';
  };
  attributes: {
    heading: Attribute.String;
    insight_blogs: Attribute.Relation<
      'components.more-insight',
      'oneToMany',
      'api::insight-blog.insight-blog'
    >;
  };
}

export interface ComponentsMorePublication extends Schema.Component {
  collectionName: 'components_components_more_publications';
  info: {
    displayName: 'More Publication Section';
    icon: 'book';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    publishings: Attribute.Relation<
      'components.more-publication',
      'oneToMany',
      'api::publishing.publishing'
    >;
  };
}

export interface ComponentsMoreVideoSection extends Schema.Component {
  collectionName: 'components_components_more_video_sections';
  info: {
    displayName: 'More Video Section';
    icon: 'file';
  };
  attributes: {
    heading: Attribute.String;
    video_lists: Attribute.Relation<
      'components.more-video-section',
      'oneToMany',
      'api::video-list.video-list'
    >;
  };
}

export interface ComponentsNewsletterSection extends Schema.Component {
  collectionName: 'components_components_newsletter_sections';
  info: {
    displayName: 'Newsletter Section';
    icon: 'file';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    ctaButton: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsOurStorySection extends Schema.Component {
  collectionName: 'components_components_our_story_section_s';
  info: {
    displayName: 'Our-Story Section ';
    icon: 'filePdf';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    ourStoryListItems: Attribute.Component<'atoms.our-story-list-item', true>;
  };
}

export interface ComponentsPartnersSection extends Schema.Component {
  collectionName: 'components_components_partners_sections';
  info: {
    displayName: 'Partners Section';
    icon: 'code';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    partners_logos: Attribute.Relation<
      'components.partners-section',
      'oneToMany',
      'api::partners-logo.partners-logo'
    >;
  };
}

export interface ComponentsPressReleasesSection extends Schema.Component {
  collectionName: 'components_components_press_releases_sections';
  info: {
    displayName: 'Press Releases Section';
    icon: 'crown';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface ComponentsPressSocialIcons extends Schema.Component {
  collectionName: 'components_components_press_social_icons';
  info: {
    displayName: 'Common Social Icons';
    icon: 'cog';
    description: '';
  };
  attributes: {
    social: Attribute.Component<'social.links', true>;
  };
}

export interface ComponentsPreviousConferencesSection extends Schema.Component {
  collectionName: 'components_components_previous_conferences_sections';
  info: {
    displayName: 'Previous Conferences Section';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    previousConferencesList: Attribute.Component<
      'atoms.previous-conferences-list',
      true
    >;
    ctaButton: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsPrimaryHeroSection extends Schema.Component {
  collectionName: 'components_components_primary_hero_section_s';
  info: {
    displayName: 'Primary Hero Section ';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heroContent: Attribute.Component<'atoms.primary-hero-content', true>;
    backgroundColorImage: Attribute.Media;
    backgroundImage: Attribute.Media;
    heroTitle: Attribute.String;
  };
}

export interface ComponentsPrivacyPolicy extends Schema.Component {
  collectionName: 'components_components_privacy_policies';
  info: {
    displayName: 'Privacy Policy';
    icon: 'envelop';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface ComponentsPublicationHero extends Schema.Component {
  collectionName: 'components_components_publication_heroes';
  info: {
    displayName: 'Featured Publication Section';
    description: '';
  };
  attributes: {
    publishings: Attribute.Relation<
      'components.publication-hero',
      'oneToMany',
      'api::publishing.publishing'
    >;
  };
}

export interface ComponentsPublicationsSection extends Schema.Component {
  collectionName: 'components_components_publications_sections';
  info: {
    displayName: 'Publications Section';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    backgroundImage: Attribute.Media;
    ctaButton: Attribute.Component<'atoms.button'>;
    isInsightsGLMCSection: Attribute.Boolean;
    publishings: Attribute.Relation<
      'components.publications-section',
      'oneToMany',
      'api::publishing.publishing'
    >;
  };
}

export interface ComponentsSaudiSection extends Schema.Component {
  collectionName: 'components_components_saudi_sections';
  info: {
    displayName: 'Saudi Section';
    icon: 'connector';
    description: '';
  };
  attributes: {
    saudi_positions: Attribute.Relation<
      'components.saudi-section',
      'oneToMany',
      'api::saudi-position.saudi-position'
    >;
    loadMore: Attribute.Component<'atoms.button'>;
  };
}

export interface ComponentsSeeMoreSection extends Schema.Component {
  collectionName: 'components_components_see_more_sections';
  info: {
    displayName: 'See More Section';
    icon: 'crop';
  };
  attributes: {
    title: Attribute.String;
    backgroundImage: Attribute.Media;
  };
}

export interface ComponentsSpeakersSection extends Schema.Component {
  collectionName: 'components_components_speakers_sections';
  info: {
    displayName: 'Speakers Section';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    speakers: Attribute.Component<'atoms.speakers-section', true>;
    heading: Attribute.String;
  };
}

export interface ComponentsStatsBlockSection extends Schema.Component {
  collectionName: 'components_components_stats_block_sections';
  info: {
    displayName: 'Stats Block Section';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    statsBlock: Attribute.Component<'atoms.stats-block-section', true>;
    noticeText: Attribute.String;
  };
}

export interface ComponentsTitleContentSection extends Schema.Component {
  collectionName: 'components_components_title_content_section_s';
  info: {
    displayName: 'Title Content Section ';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    backgroundImage: Attribute.Media;
  };
}

export interface ComponentsUpcomingConferencesSection extends Schema.Component {
  collectionName: 'components_components_upcoming_conferences_section_s';
  info: {
    displayName: 'Upcoming Conferences Section ';
    icon: 'command';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    bannerImage: Attribute.Media;
    fromDate: Attribute.Date;
    category: Attribute.Enumeration<['IN PERSON', 'PUBLICATION']>;
    title: Attribute.String;
    ctaButton: Attribute.Component<'atoms.button'>;
    toDate: Attribute.Date;
  };
}

export interface ComponentsVideoSection extends Schema.Component {
  collectionName: 'components_components_video_sections';
  info: {
    displayName: 'Video Section';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    video: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
    isAlign: Attribute.Enumeration<['Left', 'Right']>;
    thumbnail: Attribute.Media;
  };
}

export interface ComponentsVisaRequirementsSection extends Schema.Component {
  collectionName: 'components_components_visa_requirements_sections';
  info: {
    displayName: 'Visa Requirements Section';
    icon: 'dashboard';
  };
  attributes: {
    bannerImage: Attribute.Media;
    heading: Attribute.String;
    content: Attribute.Text;
    buttonLabel: Attribute.Component<'atoms.button'>;
    description: Attribute.Text;
  };
}

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

export interface SocialLinks extends Schema.Component {
  collectionName: 'components_social_links';
  info: {
    displayName: 'links';
    icon: 'earth';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    isExternal: Attribute.Boolean;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'atoms.button': AtomsButton;
      'atoms.events-section': AtomsEventsSection;
      'atoms.footer-link': AtomsFooterLink;
      'atoms.header-links': AtomsHeaderLinks;
      'atoms.image-text-list': AtomsImageTextList;
      'atoms.keep-up-list-item': AtomsKeepUpListItem;
      'atoms.label-link': AtomsLabelLink;
      'atoms.our-story-list-item': AtomsOurStoryListItem;
      'atoms.partner-logo-list': AtomsPartnerLogoList;
      'atoms.previous-conferences-list': AtomsPreviousConferencesList;
      'atoms.primary-hero-content': AtomsPrimaryHeroContent;
      'atoms.publication-list-items': AtomsPublicationListItems;
      'atoms.speakers-section': AtomsSpeakersSection;
      'atoms.stats-block-section': AtomsStatsBlockSection;
      'atoms.title-description-download-card': AtomsTitleDescriptionDownloadCard;
      'atoms.title-description': AtomsTitleDescription;
      'components.about-glmc': ComponentsAboutGlmc;
      'components.contact-us-section': ComponentsContactUsSection;
      'components.download-section': ComponentsDownloadSection;
      'components.events-section': ComponentsEventsSection;
      'components.faq-section': ComponentsFaqSection;
      'components.featured-video': ComponentsFeaturedVideo;
      'components.geneva-section': ComponentsGenevaSection;
      'components.hero-section': ComponentsHeroSection;
      'components.image-text-block': ComponentsImageTextBlock;
      'components.in-the-news-section': ComponentsInTheNewsSection;
      'components.inquirie-section': ComponentsInquirieSection;
      'components.insight-hero': ComponentsInsightHero;
      'components.insight-section': ComponentsInsightSection;
      'components.international-visitor-section': ComponentsInternationalVisitorSection;
      'components.keep-up-section': ComponentsKeepUpSection;
      'components.logos-section': ComponentsLogosSection;
      'components.met-ryan-section': ComponentsMetRyanSection;
      'components.more-insight': ComponentsMoreInsight;
      'components.more-publication': ComponentsMorePublication;
      'components.more-video-section': ComponentsMoreVideoSection;
      'components.newsletter-section': ComponentsNewsletterSection;
      'components.our-story-section': ComponentsOurStorySection;
      'components.partners-section': ComponentsPartnersSection;
      'components.press-releases-section': ComponentsPressReleasesSection;
      'components.press-social-icons': ComponentsPressSocialIcons;
      'components.previous-conferences-section': ComponentsPreviousConferencesSection;
      'components.primary-hero-section': ComponentsPrimaryHeroSection;
      'components.privacy-policy': ComponentsPrivacyPolicy;
      'components.publication-hero': ComponentsPublicationHero;
      'components.publications-section': ComponentsPublicationsSection;
      'components.saudi-section': ComponentsSaudiSection;
      'components.see-more-section': ComponentsSeeMoreSection;
      'components.speakers-section': ComponentsSpeakersSection;
      'components.stats-block-section': ComponentsStatsBlockSection;
      'components.title-content-section': ComponentsTitleContentSection;
      'components.upcoming-conferences-section': ComponentsUpcomingConferencesSection;
      'components.video-section': ComponentsVideoSection;
      'components.visa-requirements-section': ComponentsVisaRequirementsSection;
      'menu.dropdown': MenuDropdown;
      'social.links': SocialLinks;
    }
  }
}
