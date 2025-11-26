import { properties } from '../lib/data';
import PropertyCard from '../components/PropertyCard';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const featuredProperties = properties.filter(p => p.featured);

  return (
    <div>
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599806112354-67f8b5425a06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Find Your Dream Home in Nairobi</h1>
            <p className="mt-4 text-xl">The best properties in Kenya, curated for you.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Properties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;