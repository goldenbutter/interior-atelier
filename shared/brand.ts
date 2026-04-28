/**
 * Single source of truth for studio identity.
 *
 * When forking this monorepo for a real customer, this is the ONLY identity
 * file that needs editing — components import `brand` from `@shared/brand`
 * and never hard-code studio details inline.
 */

export const brand = {
  // Identity
  name: "Lysning Studio",
  monogram: "L", // single character used in the circular nav logo
  tagline: "Stille rom som husker.", // "Quiet rooms that remember."
  founded: 2018,

  // People
  founder: {
    name: "Ingvild Lysne",
    role: "Grunnlegger & kreativ leder", // founder & creative director
  },

  // Address (Norwegian)
  address: {
    street: "Orkdalsveien 47",
    postalCode: "7300",
    city: "Orkanger",
    region: "Trøndelag",
    country: "Norge",
  },

  // Contact
  contact: {
    email: "studio@lysning.no",
    pressEmail: "presse@lysning.no",
    phone: "+47 412 80 947",
    hoursLine1: "Mandag – fredag, 10 – 17",
    hoursClosed: "Stengt i juli",
  },

  // Social
  social: {
    instagram: "https://instagram.com/lysningstudio",
    pinterest: "https://pinterest.com/lysningstudio",
  },

  // Domains
  domains: {
    classic: "demo-lysning-classic.ibithun.com",
    premium: "demo-lysning-premium.ibithun.com",
  },

  // Stripe hook — null until a real client wires payments in.
  // To enable: set { productId, mode } and uncomment the Stripe Checkout
  // integration in <BookingForm /> per the per-client engagement.
  payments: {
    stripeProductId: null as string | null,
    consultationFeeNok: null as number | null, // e.g. 1500 if charging for intake call
  },

  // Feature flags per tier — components branch on these
  features: {
    languageToggle: false, // set true on premium tier
    pressMarquee: false, // premium-tier signature
    materialLibrary: false,
    testimonialsWall: false,
    serviceAreaMap: false,
    moodBoardLeadMagnet: false, // deferred; per-client decision
  },
} as const;

export type Brand = typeof brand;
