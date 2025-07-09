
import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Bed, Bath, Square, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { sampleProperties, Property } from '@/data/properties';
import PropertyCard from './PropertyCard';
import PropertyDetailModal from './PropertyDetailModal';

const PropertyListings = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priceFilter, setPriceFilter] = useState<string>('all');

  const filteredProperties = useMemo(() => {
    return sampleProperties.filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === 'all' || property.type === typeFilter;
      const matchesStatus = statusFilter === 'all' || property.status === statusFilter;
      
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [searchTerm, typeFilter, statusFilter, priceFilter]);

  return (
    <section id="properties" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated collection of premium properties across Senegal. 
            From modern apartments to luxury villas, find your perfect match.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-12 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by location or property name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500"
                />
              </div>

              {/* Type Filter */}
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="h-12 border-gray-200">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-12 border-gray-200">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="for-sale">For Sale</SelectItem>
                  <SelectItem value="for-rent">For Rent</SelectItem>
                  <SelectItem value="sold">Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Summary */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-gray-600">
                Showing {filteredProperties.length} of {sampleProperties.length} properties
              </p>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Filters applied</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewDetails={() => setSelectedProperty(property)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Properties Found</h3>
            <p className="text-gray-600 mb-8">
              Try adjusting your search criteria or browse all available properties.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setTypeFilter('all');
                setStatusFilter('all');
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          isOpen={!!selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
};

export default PropertyListings;
