export const contact = {
  phoneDisplay: "+1(765)276-3342",
  phoneHref: "tel:+17652763342",
  email: "info@localbusinessmediagrowth.com",
  emailDisplay: "info@LocalBusinessMediaGrowth.com",
  emailHref: "mailto:info@localbusinessmediagrowth.com",
};

/** Free consultation booking page — used by every "book" CTA. Opens in a new tab. */
export const bookingLink = {
  href: "https://calendly.com/growth-marketing-consultation-meeting/30-min-free-marketing-consultation",
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const avatars = [
  { src: "/images/avatar-1.jpg", bg: "#f26b3a", alt: "Team strategist" },
  { src: "/images/avatar-2.jpg", bg: "#b48be6", alt: "Team designer" },
  { src: "/images/avatar-3.jpg", bg: "#6ab8e8", alt: "Team storyteller" },
];

export type ClientLogo = "emblem" | "florist" | "monogram" | "msg";

export const clientLogos: { id: ClientLogo; name: string }[] = [
  { id: "emblem", name: "Wellness Collective" },
  { id: "florist", name: "Calgary Florist" },
  { id: "monogram", name: "BD Studio" },
  { id: "msg", name: "MSG Canada Insurance" },
];

export const stats = [
  { value: "500+", label: "Local Businesses Served Nationwide" },
  { value: "200K+", label: "Community Impressions Generated Monthly" },
  { value: "16K+", label: "Pieces of Content Created for Small Businesses" },
];

export const aboutImages = [
  { src: "/images/about-1.jpg", alt: "Local shop owner reviewing his phone", position: "50% 20%" },
  { src: "/images/about-2.jpg", alt: "Business owner checking social media engagement", position: "50% 30%" },
  { src: "/images/about-3.jpg", alt: "Customer scrolling a local business feed", position: "50% 55%" },
  { src: "/images/about-4.jpg", alt: "Small business owner working on content", position: "40% 40%" },
];

export type Service = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  illustration?: "gmb";
};

export const services: Service[] = [
  {
    title: "Social Media Marketing",
    description:
      "Your customers are on Facebook and Instagram every single day. We create posts, run your pages, and keep your business in front of your community — so when they need what you offer, they think of you first. Done for you, every month.",
    image: "/images/service-social.jpg",
    imageAlt: "3D Instagram icon on a vivid gradient",
  },
  {
    title: "Search Engine Optimization",
    description:
      "SEO is how Google decides who shows up first when people search for your type of business in your town. We do all the behind-the-scenes work so your shop climbs higher in search results — bringing in more customers every month, for free.",
    image: "/images/service-seo.jpg",
    imageAlt: "Close-up of a keyboard",
  },
  {
    title: "Website Development",
    description:
      "Your website is your digital front door. We build you a clean, fast, mobile-friendly site that shows your hours, menu or services, location, and makes it easy for customers to call or visit. You don't need to touch a single line of code — ever.",
    image: "/images/service-web.jpg",
    imageAlt: "Retro computer lit in purple neon",
  },
  {
    title: "Google My Business Optimization",
    description:
      "When someone nearby types “pizza near me” or “nail salon open now” — your Google profile decides if they call you or your competitor. We set it up correctly, keep it updated, and make sure you show up at the top of local search results.",
    illustration: "gmb",
  },
];

export const features = [
  {
    title: "Trend-Savvy Team",
    description:
      "We keep up with the latest trends so your brand always feels fresh, relevant, and engaging.",
    icon: "badge" as const,
  },
  {
    title: "On-Time Delivery",
    description:
      "We follow strict schedules for planning, approval, and publishing—no last-minute rushes.",
    icon: "clock" as const,
  },
];

export const caseStudies = [
  {
    title: "Coffee Shop",
    description:
      "We turned a small local coffee shop into a local favorite with daily Reels and community-driven UGC content on Instagram.",
    metric: "+420%",
    result: "IG engagement in 3 months",
    image: "/images/case-coffee.jpg",
    imageAlt: "Bright coffee shop with plants by the window",
  },
  {
    title: "Glow Skincare",
    description:
      "We built a soft-minimalist brand voice and aesthetic through carousel posts and story details tailored to Gen Z skincare trends.",
    metric: "+48%",
    result: "organic followers in 6 weeks",
    image: "/images/case-skincare.jpg",
    imageAlt: "Skincare serum bottle with eucalyptus",
  },
  {
    title: "StudioLoop",
    description:
      "From zero to hero—StudioLoop's launch campaign went viral with audio-focused storytelling across TikTok & Instagram.",
    metric: "1.3M",
    result: "video views in 1 week",
    image: "/images/case-studio.jpg",
    imageAlt: "Photo studio with lights set up for a shoot",
  },
  {
    title: "GreenBox Market",
    description:
      "We positioned this eco startup as a sustainable lifestyle brand using motion graphics, copy, and values-led copywriting.",
    metric: "8x CTR",
    result: "from Instagram to website",
    image: "/images/case-greenbox.jpg",
    imageAlt: "Shop owner tending a vertical plant garden",
  },
];

export const faqs = [
  {
    question: "Which Platforms Do You Manage?",
    answer:
      "We support Instagram, Facebook, TikTok, LinkedIn, X (Twitter), Pinterest, and YouTube depending on your package.",
  },
  {
    question: "What Does a Social Media Management Package Include?",
    answer:
      "Every package includes a monthly content plan, custom-designed posts and Reels, captions and hashtags, scheduling and publishing, community management, and a simple monthly performance report.",
  },
  {
    question: "Can I Approve Content Before It's Posted?",
    answer:
      "Absolutely. You'll receive your content calendar ahead of time and nothing goes live until you've approved it. Request changes anytime — we'll handle the revisions.",
  },
  {
    question: "How Long Does It Take To See Results?",
    answer:
      "Most clients see engagement improve within the first 30 days. Steady follower growth, more calls, and more foot traffic typically build over 60–90 days of consistent posting.",
  },
  {
    question: "What If I Don’t Have Any Content?",
    answer:
      "No problem. We can create graphics, write copy, source on-brand imagery, and guide you through quick phone shoots so your feed always looks professional.",
  },
  {
    question: "Do You Run Ads Too?",
    answer:
      "Yes. We run targeted Facebook, Instagram, and Google ads for local audiences, so your budget reaches people in your area who are ready to buy.",
  },
];
