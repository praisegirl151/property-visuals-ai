import { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from 'sonner';

interface Property {
  id: string;
  [key: string]: any;
}

interface ComparisonContextType {
  comparisonList: Property[];
  addToCompare: (property: Property) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [comparisonList, setComparisonList] = useState<Property[]>([]);

  const addToCompare = (property: Property) => {
    if (comparisonList.length >= 3) {
      toast.error('You can only compare up to 3 properties at a time.');
      return;
    }
    if (comparisonList.find(p => p.id === property.id)) {
      toast.info('This property is already in your comparison list.');
      return;
    }
    setComparisonList(prev => [...prev, property]);
    toast.success(`${property.title} added to comparison list!`);
  };

  const removeFromCompare = (id: string) => {
    setComparisonList(prev => prev.filter(p => p.id !== id));
    toast.success('Property removed from comparison list.');
  };

  const clearCompare = () => {
    setComparisonList([]);
    toast.info('Comparison list cleared.');
  };

  return (
    <ComparisonContext.Provider value={{ comparisonList, addToCompare, removeFromCompare, clearCompare }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};