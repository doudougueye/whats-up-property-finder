
import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Square, MessageCircle, Phone, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Property } from '@/data/properties';

interface PropertyDetailModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  isOpen,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in the property: ${property.title} (ID: ${property.id}). Can you provide more information?`;
    const phoneNumber = "221123456789"; // Replace with actual agency WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-y-auto p-0 bg-white">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Image Gallery */}
          <div className="relative h-96 md:h-[500px] overflow-hidden bg-gray-100">
            <img
              src={property.images[currentImageIndex]}
              alt={`${property.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {property.images.length}
            </div>

            {/* Status and Price */}
            <Badge className={`absolute top-4 left-4 ${getStatusColor(property.status)} font-medium`}>
              {getStatusText(property.status)}
            </Badge>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-2xl font-bold text-gray-900">{property.price}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {property.title}
                </h1>

                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="text-lg">{property.address}</span>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {property.bedrooms > 0 && (
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <Bed className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                      <div className="text-sm text-gray-600">Bedrooms</div>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <Bath className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                      <div className="text-sm text-gray-600">Bathrooms</div>
                    </div>
                  )}
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <Square className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                    <div className="text-sm text-gray-600">m² Area</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <Star className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">4.8</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {property.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 sticky top-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Agent</h3>
                  
                  {/* Agent Info */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">PA</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">PropConnect Agency</div>
                      <div className="text-sm text-gray-600">Licensed Real Estate Agent</div>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="space-y-3">
                    <Button 
                      onClick={handleWhatsAppContact}
                      className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg font-medium"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full h-12 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg font-medium"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </div>

                  {/* Property Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex justify-between">
                        <span>Property ID:</span>
                        <span className="font-medium">{property.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-medium capitalize">{property.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="font-medium">{getStatusText(property.status)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailModal;
