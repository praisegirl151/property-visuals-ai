export const properties = [
  {
    id: '1',
    title: 'Modern Apartment in Kilimani',
    price: 'KES 85,000/mo',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: 'Apartment',
    location: 'Kilimani, Nairobi',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
    lat: -1.286389,
    lng: 36.817223,
  },
  {
    id: '2',
    title: 'Spacious Villa in Lavington',
    price: 'KES 250,000/mo',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 3500,
    type: 'Villa',
    location: 'Lavington, Nairobi',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
    lat: -1.28333,
    lng: 36.78333,
  },
  {
    id: '3',
    title: 'Cozy Townhouse in Westlands',
    price: 'KES 150,000/mo',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2000,
    type: 'Townhouse',
    location: 'Westlands, Nairobi',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
    lat: -1.26667,
    lng: 36.8,
  },
  {
    id: '4',
    title: 'Luxury Penthouse with City Views',
    price: 'KES 350,000/mo',
    bedrooms: 3,
    bathrooms: 4,
    sqft: 2800,
    type: 'Penthouse',
    location: 'Kilimani, Nairobi',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: false,
    lat: -1.2921,
    lng: 36.8219,
  },
];

export const agents = [
  { id: '1', name: 'Amina Mohamed', properties: 12, image: '/path-to-amina.jpg' },
  { id: '2', name: 'David Kimani', properties: 8, image: '/path-to-david.jpg' },
];

export const neighborhoods = [
  {
    id: 'kilimani',
    name: 'Kilimani',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fc3553ad-f970-4f06-b58d-79a1e8f0db55/neighborhood-kilimani-sohq4ll-1764181987696.webp',
    description: 'Kilimani is a vibrant and cosmopolitan neighborhood known for its lively mix of residential and commercial properties. It offers a dynamic lifestyle with numerous restaurants, cafes, and shopping centers, making it a popular choice for expatriates and young professionals.',
    avgPrice: 'KES 90,000',
    vibe: 'Dynamic & Urban',
    commuteTime: '15 mins to CBD',
    amenities: ['Modern Apartments', 'Trendy Cafes', 'Yaya Centre Mall'],
  },
  {
    id: 'lavington',
    name: 'Lavington',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fc3553ad-f970-4f06-b58d-79a1e8f0db55/neighborhood-lavington-23viats-1764181996012.webp',
    description: 'Lavington is a serene, upscale residential area characterized by its lush greenery and spacious homes. It is a family-friendly neighborhood with prestigious schools and quiet streets, offering a peaceful retreat from the city hustle.',
    avgPrice: 'KES 200,000',
    vibe: 'Serene & Family-Friendly',
    commuteTime: '25 mins to CBD',
    amenities: ['Large Villas', 'International Schools', 'Lavington Mall'],
  },
  {
    id: 'westlands',
    name: 'Westlands',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fc3553ad-f970-4f06-b58d-79a1e8f0db55/neighborhood-westlands-8groxcb-1764182003394.webp',
    description: 'Westlands is one of Nairobi’s most dynamic and bustling hubs, offering a vibrant mix of commercial, retail, and entertainment options. It is the go-to place for nightlife, shopping, and fine dining, attracting a young and energetic crowd.',
    avgPrice: 'KES 120,000',
    vibe: 'Energetic & Modern',
    commuteTime: '10 mins to CBD',
    amenities: ['Skyscrapers', 'Sarit Centre Mall', 'Vibrant Nightlife'],
  },
];

export const testimonials = [
  {
    name: 'Amina Yusuf',
    location: 'Kilimani, Nairobi',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fc3553ad-f970-4f06-b58d-79a1e8f0db55/testimonial-avatar-amina-9elup1a-1764182011492.webp',
    quote: 'The team at Zuri Homes made finding our dream apartment so easy! Their knowledge of the Kilimani area was impressive and we couldn’t be happier.'
  },
  {
    name: 'Jelani Okoro',
    location: 'Lavington, Nairobi',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fc3553ad-f970-4f06-b58d-79a1e8f0db55/testimonial-avatar-jelani-peah3wk-1764182018160.webp',
    quote: 'As an investor, I rely on expert advice. Zuri Homes provided deep market insights that helped me secure a profitable property in Lavington. Truly professional.'
  },
  {
    name: 'Zola Naidoo',
    location: 'Westlands, Nairobi',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fc3553ad-f970-4f06-b58d-79a1e8f0db55/testimonial-avatar-zola-68x877f-1764182024387.webp',
    quote: 'I was new to Nairobi and had no idea where to start. The neighborhood guides were a lifesaver, and the agents were incredibly patient and helpful.'
  }
];