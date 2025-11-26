import { Mail, Phone } from 'lucide-react';

const agents = [
    {
        name: 'Amina Hassan',
        title: 'Lead Real Estate Agent',
        imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
        email: 'amina.hassan@makaohomes.com',
        phone: '+254 712 345 678',
    },
    {
        name: 'David Okello',
        title: 'Senior Property Consultant',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
        email: 'david.okello@makaohomes.com',
        phone: '+254 723 456 789',
    },
    {
        name: 'Fatima Ibrahim',
        title: 'Rental Specialist',
        imageUrl: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1974&auto=format&fit=crop',
        email: 'fatima.ibrahim@makaohomes.com',
        phone: '+254 734 567 890',
    },
];

export function Agents() {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Meet Our Expert Agents</h1>
                    <p className="text-lg text-gray-600 mt-2">Dedicated professionals to help you find your perfect property.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agents.map((agent) => (
                        <div key={agent.name} className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                            <img src={agent.imageUrl} alt={agent.name} className="w-full h-80 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900">{agent.name}</h3>
                                <p className="text-blue-600 font-semibold mb-4">{agent.title}</p>
                                <div className="space-y-2">
                                    <a href={`mailto:${agent.email}`} className="flex items-center justify-center text-gray-600 hover:text-blue-600">
                                        <Mail size={16} className="mr-2" />
                                        <span>{agent.email}</span>
                                    </a>
                                    <a href={`tel:${agent.phone}`} className="flex items-center justify-center text-gray-600 hover:text-blue-600">
                                        <Phone size={16} className="mr-2" />
                                        <span>{agent.phone}</span>
                                    </a>
                                </div>
                                 <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors w-full">View Listings</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}