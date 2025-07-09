
import React from 'react';
import { Search, MapPin, Home, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Find Your Dream Property
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
            Discover premium real estate opportunities in Senegal's most desirable locations. 
            Your perfect home or investment awaits.
          </p>

          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Enter location (e.g., Almadies, Dakar)" 
                  className="pl-10 h-12 bg-white/90 border-white/30 text-gray-900"
                />
              </div>
              <div className="flex-1 relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Property type" 
                  className="pl-10 h-12 bg-white/90 border-white/30 text-gray-900"
                />
              </div>
              <Button className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium">
                <Search className="w-5 h-5 mr-2" />
                Search Properties
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Properties Listed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 col-span-2 md:col-span-1">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
