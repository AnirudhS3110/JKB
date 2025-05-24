import React from "react";

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-[#151419] text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Success Stories</h1>
        <p className="text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto">
          Real stories of impact and transformation from our community.
        </p>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Story 1 */}
          <div className="bg-[#1e1d24] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Community Development in Rural Areas</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                [Image Placeholder]
              </div>
              <div className="md:w-2/3">
                <p className="mb-4">
                  This success story showcases how our initiatives have transformed rural communities,
                  providing access to education, healthcare, and economic opportunities.
                </p>
                <p>
                  Through collaborative efforts with local leaders and organizations,
                  we've helped establish sustainable development programs that continue to benefit
                  residents long after our direct involvement.
                </p>
              </div>
            </div>
          </div>
          
          {/* Story 2 */}
          <div className="bg-[#1e1d24] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Educational Empowerment Program</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                [Image Placeholder]
              </div>
              <div className="md:w-2/3">
                <p className="mb-4">
                  Our educational programs have helped students overcome barriers to learning
                  and achieve their academic goals despite challenging circumstances.
                </p>
                <p>
                  By providing resources, mentorship, and support systems, we've seen remarkable
                  improvements in educational outcomes and career prospects for program participants.
                </p>
              </div>
            </div>
          </div>
          
          {/* Story 3 */}
          <div className="bg-[#1e1d24] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Health Initiative Success</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                [Image Placeholder]
              </div>
              <div className="md:w-2/3">
                <p className="mb-4">
                  Through our health awareness campaigns and medical outreach programs,
                  we've been able to improve health outcomes in underserved communities.
                </p>
                <p>
                  This story highlights the impact of preventative care education and
                  accessible health services in creating healthier, more resilient communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 