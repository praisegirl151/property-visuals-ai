import { useState } from 'react';
import { properties } from '../lib/data';
import PropertyCard from '../components/PropertyCard';
import PropertyMap from '../components/PropertyMap';
import { Button } from '../components/ui/button';
import { List, Map } from 'lucide-react';

const PropertiesPage = () => {
  const [view, setView] = useState('list'); // 'list' or 'map'

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">All Properties</h1>
        <div className="flex items-center gap-2">
            <Button variant={view === 'list' ? 'default' : 'outline'} onClick={() => setView('list')}><List className='mr-2 h-4 w-4'/>List View</Button>
            <Button variant={view === 'map' ? 'default' : 'outline'} onClick={() => setView('map')}><Map className='mr-2 h-4 w-4'/>Map View</Button>
        </div>
      </div>

      {view === 'list' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <PropertyMap />
      )}
    </div>
  );
};

export default PropertiesPage;