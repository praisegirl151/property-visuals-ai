import { useParams } from 'react-router-dom';
import { neighborhoods } from '../lib/data';
import { MapPin, Building, Coffee, ShoppingCart, Sun, BarChart } from 'lucide-react';

const NeighborhoodDetail = () => {
  const { id } = useParams();
  const neighborhood = neighborhoods.find(n => n.id === id);

  if (!neighborhood) {
    return <div className="text-center py-20">Neighborhood not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative rounded-lg overflow-hidden mb-8 h-[400px]">
        <img src={neighborhood.image} alt={neighborhood.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h1 className="absolute bottom-8 left-8 text-5xl font-bold text-white">{neighborhood.name}</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold mb-4">Welcome to {neighborhood.name}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{neighborhood.description}</p>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">Key Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <BarChart className="mx-auto h-8 w-8 text-blue-500 mb-2" />
                <p className="font-semibold">Avg. Price</p>
                <p className="text-gray-600 dark:text-gray-400">{neighborhood.avgPrice}</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <Sun className="mx-auto h-8 w-8 text-yellow-500 mb-2" />
                <p className="font-semibold">Vibe</p>
                <p className="text-gray-600 dark:text-gray-400">{neighborhood.vibe}</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <MapPin className="mx-auto h-8 w-8 text-green-500 mb-2" />
                <p className="font-semibold">Commute</p>
                <p className="text-gray-600 dark:text-gray-400">{neighborhood.commuteTime}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Local Amenities</h3>
          <ul className="space-y-4">
            {neighborhood.amenities.map(amenity => (
              <li key={amenity} className="flex items-center">
                {amenity.includes('Apartment') && <Building className="h-5 w-5 mr-3 text-gray-500" />}
                {amenity.includes('Cafe') && <Coffee className="h-5 w-5 mr-3 text-gray-500" />}
                {amenity.includes('Mall') && <ShoppingCart className="h-5 w-5 mr-3 text-gray-500" />}
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodDetail;