
export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  type: 'apartment' | 'house' | 'land' | 'commercial';
  status: 'for-sale' | 'for-rent' | 'sold';
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  features: string[];
  images: string[];
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury 3-Bedroom Apartment in Almadies',
    price: '150,000,000 FCFA',
    location: 'Almadies, Dakar',
    type: 'apartment',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    description: 'Beautiful modern apartment with ocean views, featuring high-end finishes, spacious rooms, and access to premium amenities. Located in the prestigious Almadies area with easy access to beaches, restaurants, and shopping centers.',
    features: [
      'Ocean view',
      'Modern kitchen',
      'Air conditioning',
      'Parking space',
      'Security system',
      'Balcony',
      'Swimming pool access'
    ],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    address: 'Rue de Almadies, Dakar, Senegal',
    coordinates: { lat: 14.7645, lng: -17.4692 }
  },
  {
    id: '2',
    title: 'Spacious 4-Bedroom Villa in Point E',
    price: '250,000,000 FCFA',
    location: 'Point E, Dakar',
    type: 'house',
    status: 'for-sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    description: 'Elegant villa in the heart of Point E, featuring a large garden, modern architecture, and premium finishes throughout. Perfect for families seeking luxury and comfort in a prime location.',
    features: [
      'Private garden',
      'Garage for 2 cars',
      'Modern design',
      'Security gate',
      'Terrace',
      'Guest room',
      'High ceilings'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    address: 'Point E, Dakar, Senegal'
  },
  {
    id: '3',
    title: 'Modern 2-Bedroom Apartment for Rent',
    price: '400,000 FCFA/month',
    location: 'Plateau, Dakar',
    type: 'apartment',
    status: 'for-rent',
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    description: 'Contemporary apartment in the business district of Plateau. Fully furnished with modern amenities, perfect for professionals and expatriates. Walking distance to offices, restaurants, and cultural sites.',
    features: [
      'Fully furnished',
      'High-speed internet',
      'Air conditioning',
      'Elevator',
      'Nearby metro',
      'City center location',
      'Balcony'
    ],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    address: 'Plateau, Dakar, Senegal'
  },
  {
    id: '4',
    title: 'Commercial Space in Sandaga Market Area',
    price: '75,000,000 FCFA',
    location: 'Sandaga, Dakar',
    type: 'commercial',
    status: 'for-sale',
    bedrooms: 0,
    bathrooms: 2,
    area: 150,
    description: 'Prime commercial space in the bustling Sandaga market area. Ideal for retail business, restaurant, or office space. High foot traffic location with excellent visibility and accessibility.',
    features: [
      'High foot traffic',
      'Street-level access',
      'Large windows',
      'Storage space',
      'Parking nearby',
      'Public transport access',
      'Flexible layout'
    ],
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    address: 'Sandaga Market, Dakar, Senegal'
  },
  {
    id: '5',
    title: 'Beachfront Land for Development',
    price: '500,000,000 FCFA',
    location: 'Saly, Thiès',
    type: 'land',
    status: 'for-sale',
    bedrooms: 0,
    bathrooms: 0,
    area: 2000,
    description: 'Exceptional beachfront land perfect for resort development or luxury residential project. Located in the popular tourist destination of Saly with direct beach access and stunning ocean views.',
    features: [
      'Beachfront access',
      'Development permits available',
      'Tourism zone',
      'Utilities available',
      'Road access',
      'Investment opportunity',
      'Ocean views'
    ],
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    address: 'Coastal Road, Saly, Thiès, Senegal'
  },
  {
    id: '6',
    title: 'Charming 5-Bedroom Family Home',
    price: '180,000,000 FCFA',
    location: 'Fann, Dakar',
    type: 'house',
    status: 'for-sale',
    bedrooms: 5,
    bathrooms: 3,
    area: 250,
    description: 'Traditional Senegalese home with modern updates, featuring spacious rooms, a beautiful courtyard, and mature gardens. Located in the quiet residential area of Fann, close to universities and hospitals.',
    features: [
      'Traditional architecture',
      'Large courtyard',
      'Mature gardens',
      'Quiet neighborhood',
      'Near universities',
      'Parking for 3 cars',
      'Maid quarters'
    ],
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600573472556-e636b99bc1a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    address: 'Fann Residence, Dakar, Senegal'
  }
];
