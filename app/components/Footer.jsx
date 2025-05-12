import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-lg font-semibold">
            <span className="text-[#F4A261]">Jaskaran Bothra</span>
            <span className="ml-2 text-white">Foundation</span>
          </h1>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="#" className="hover:text-gray-400">Donate</Link>
          <Link href="#" className="hover:text-gray-400">LinkedIn</Link>
          <Link href="#" className="hover:text-gray-400">YouTube</Link>
          <Link href="#" className="hover:text-gray-400">Instagram</Link>
          <Link href="#" className="hover:text-gray-400">Privacy Policy</Link>
        </div>
        <div className="text-sm text-gray-400">
          © Jaskaran Bothra Foundation 2025
        </div>
      </div>
    </footer>
  );
} 