'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NewsPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/news/latest');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F4720B]"></div>
        <p className="mt-4 text-lg text-gray-600">Redirecting to latest news...</p>
      </div>
    </div>
  );
} 