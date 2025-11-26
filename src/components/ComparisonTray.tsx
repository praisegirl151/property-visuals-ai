import { useComparison } from '../contexts/ComparisonContext';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';

const ComparisonTray = () => {
  const { comparisonList, removeFromCompare, clearCompare } = useComparison();

  if (comparisonList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-2xl z-50 p-4 border-t dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold">Compare Properties ({comparisonList.length}/3)</h3>
          <div className="flex gap-2">
            {comparisonList.map(p => (
              <div key={p.id} className="relative">
                <img src={p.image} alt={p.title} className="w-16 h-16 rounded-md object-cover"/>
                <Button size="icon" variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 rounded-full" onClick={() => removeFromCompare(p.id)}>
                  <X className="h-4 w-4"/>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
            <Button asChild disabled={comparisonList.length < 2}>
                <Link to="/compare">Compare Now <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
            <Button variant="outline" onClick={clearCompare}>Clear</Button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTray;