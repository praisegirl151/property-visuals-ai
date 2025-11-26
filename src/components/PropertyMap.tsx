import { useState } from 'react';
import { properties } from '../lib/data';
import { Card, CardContent } from './ui/card';
import { MapPin } from 'lucide-react';

const PropertyMap = () => {
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);

  // Find bounds to normalize coordinates
  const latitudes = properties.map(p => p.lat);
  const longitudes = properties.map(p => p.lng);
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

  const getPosition = (lat, lng) => {
    const top = ((maxLat - lat) / (maxLat - minLat)) * 100;
    const left = ((lng - minLng) / (maxLng - minLng)) * 100;
    return { top: `${top}%`, left: `${left}%` };
  };

  return (
    <Card className="h-[600px] w-full relative overflow-hidden">
        <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/fc3553ad-f970-4f06-b58d-79a1e8f0db55/neighborhood-kilimani-sohq4ll-1764181987696.webp" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
      {properties.map(p => (
        <div 
          key={p.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={getPosition(p.lat, p.lng)}
          onMouseEnter={() => setSelectedProperty(p)}
        >
          <MapPin className={`h-8 w-8 transition-all ${selectedProperty.id === p.id ? 'text-blue-500 scale-125' : 'text-white'}`} />
        </div>
      ))}

      {selectedProperty && (
          <div className='absolute bottom-4 left-4 right-4'>
            <Card className='bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm'>
                <CardContent className='p-3 flex gap-3'>
                    <img src={selectedProperty.image} className='h-24 w-24 rounded-md object-cover' />
                    <div>
                        <h3 className='font-bold'>{selectedProperty.title}</h3>
                        <p className='text-sm text-gray-600 dark:text-gray-300'>{selectedProperty.location}</p>
                        <p className='font-semibold text-blue-600 mt-1'>{selectedProperty.price}</p>
                    </div>
                </CardContent>
            </Card>
          </div>
      )}
    </Card>
  );
};

export default PropertyMap;