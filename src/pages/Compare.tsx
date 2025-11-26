import { useComparison } from '../contexts/ComparisonContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { X } from 'lucide-react';

const ComparePage = () => {
  const { comparisonList, removeFromCompare, clearCompare } = useComparison();

  if (comparisonList.length === 0) {
    return <div className="text-center py-20">No properties selected for comparison.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Compare Properties</h1>
        <Button variant="outline" onClick={clearCompare}>Clear All</Button>
      </div>
      <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-${comparisonList.length}`}>
        {comparisonList.map(property => (
          <Card key={property.id} className="relative">
            <Button size="icon" variant="ghost" className="absolute top-2 right-2 h-8 w-8" onClick={() => removeFromCompare(property.id)}><X className="h-4 w-4" /></Button>
            <CardHeader>
              <img src={property.image} alt={property.title} className="rounded-lg h-48 w-full object-cover"/>
              <CardTitle className="mt-4">{property.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg font-semibold text-blue-600">{property.price}</p>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Type:</strong> {property.type}</p>
              <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
              <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
              <p><strong>Sqft:</strong> {property.sqft}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ComparePage;