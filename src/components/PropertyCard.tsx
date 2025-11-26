import { Card, CardContent } from './ui/card';
import { Bed, Bath, Square, Plus } from 'lucide-react';
import { useComparison } from '../contexts/ComparisonContext';
import { Button } from './ui/button';

interface Property {
  id: string;
  title: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  location: string;
  image: string;
  [key: string]: any;
}

const PropertyCard = ({ property }: { property: Property }) => {
  const { addToCompare } = useComparison();

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
      <div className="relative">
        <img src={property.image} alt={property.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
        <Button size="sm" className="absolute top-3 right-3" onClick={() => addToCompare(property)}>
          <Plus className="mr-2 h-4 w-4"/> Compare
        </Button>
      </div>
      <CardContent className="p-4">
        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{property.price}</p>
        <h3 className="text-xl font-semibold mt-1 truncate">{property.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{property.location}</p>
        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center"><Bed className="h-4 w-4 mr-1" /> {property.bedrooms} Beds</div>
          <div className="flex items-center"><Bath className="h-4 w-4 mr-1" /> {property.bathrooms} Baths</div>
          <div className="flex items-center"><Square className="h-4 w-4 mr-1" /> {property.sqft} sqft</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;