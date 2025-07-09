
import React from 'react';
import { MapPin, Bed, Bath, Square, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
  onViewDetails: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'for-sale':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'for-rent':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'sold':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'for-sale':
        return 'For Sale';
      case 'for-rent':
        return 'For Rent';
      case 'sold':
        return 'Sold';
      default:
        return status;
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        <Badge className={`absolute top-4 left-4 ${getStatusColor(property.status)} font-medium`}>
          {getStatusText(property.status)}
        </Badge>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-lg font-bold text-gray-900">{property.price}</span>
        </div>

        {/* Favorite Button */}
        <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>

      <CardContent className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2 text-blue-500" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
          {property.bedrooms > 0 && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1 text-blue-500" />
              <span>{property.bedrooms} bed</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1 text-blue-500" />
              <span>{property.bathrooms} bath</span>
            </div>
          )}
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1 text-blue-500" />
            <span>{property.area} m²</span>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={onViewDetails}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium h-12 group-hover:shadow-lg transition-all duration-300"
        >
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
