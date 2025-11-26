import { Link } from 'react-router-dom';
import { neighborhoods } from '../lib/data';
import { Card } from '../components/ui/card';

const NeighborhoodsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Explore Nairobi's Neighborhoods</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">Find the perfect community to call home.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {neighborhoods.map(neighborhood => (
          <Link to={`/neighborhoods/${neighborhood.id}`} key={neighborhood.id}>
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="relative h-64">
                <img src={neighborhood.image} alt={neighborhood.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{neighborhood.name}</h3>
                  <p className="text-gray-200">{neighborhood.vibe}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NeighborhoodsPage;