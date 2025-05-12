import Link from 'next/link';

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Campaigns</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover all our campaigns and find ways to get involved in creating sustainable change.
          </p>
        </header>
        
        <div className="mb-12 text-center">
          <p className="text-2xl">Coming Soon!</p>
          <p className="mt-4 text-gray-300">
            We're working on a comprehensive listing of all our campaigns.
            Check back soon or return to the homepage to see our featured campaigns.
          </p>
          
          <Link 
            href="/home" 
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-all"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
} 