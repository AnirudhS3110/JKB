import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo({ title, description }) {
  // Custom styles to override defaults in the Timeline component
  const customStyles = {
    bg: "bg-black",
    yearColor: "text-[#FF8E16] drop-shadow-md",
  };

  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 font-normal text-base md:text-[20px] text-white font-paragraph">
            Launched innovative environmental and educational initiatives across rural communities, focusing on sustainable development and technology integration.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Environmental initiative"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1610500795224-fb86b02926d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Educational initiative"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 font-normal text-base md:text-[20px] text-white font-paragraph">
            Established the Jaskaran Bothra Foundation with a vision to create lasting change through sustainable initiatives and community empowerment.
          </p>
          <p className="mb-8 font-normal text-base md:text-[20px] text-white font-paragraph">
            Created partnerships with local organizations and global agencies to extend our reach and amplify our impact in key areas of focus.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Foundation launch"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Partnerships"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-8 font-normal text-base md:text-[20px] text-white font-paragraph">
            Conducted extensive research and community assessments to identify the most pressing needs in target regions. Formulated strategic plans and gathered support from key stakeholders.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {/* <img
              src="https://images.unsplash.com/photo-1598965402089-897c69f4b143?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Community research"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Strategic planning"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    // {
    //   title: "2021",
    //   content: (
    //     <div>
    //       <p className="mb-8 font-normal text-base md:text-[20px] text-white">
    //         Jaskaran Bothra conceptualized the foundation after witnessing firsthand the challenges faced by underserved communities. Initial networking and fundraising efforts began to transform this vision into reality.
    //       </p>
    //       <div className="grid grid-cols-2 gap-4">
    //         <img
    //           src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           alt="Foundation concept"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <img
    //           src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           alt="Initial networking"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
    {
      title: "Vision",
      content: (
        <div className="font-paragraph">
          <p className="mb-4 font-normal text-base md:text-[20px] text-white">
            Our future roadmap focuses on 5 key areas:
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-[#FF8E16] md:text-[18px]">
              <div className="[&_path]:stroke-[#fbfbfb]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8.99995 13.8C11.6509 13.8 13.8 11.651 13.8 9.00001C13.8 6.34905 11.6509 4.20001 8.99995 4.20001C6.34898 4.20001 4.19995 6.34905 4.19995 9.00001C4.19995 11.651 6.34898 13.8 8.99995 13.8Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8.9999 10.6C9.88356 10.6 10.5999 9.88362 10.5999 8.99996C10.5999 8.11631 9.88356 7.39996 8.9999 7.39996C8.11625 7.39996 7.3999 8.11631 7.3999 8.99996C7.3999 9.88362 8.11625 10.6 8.9999 10.6Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              Green Energy Implementation in Rural Communities
            </div>
            <div className="flex items-center gap-2 text-xs text-[#FF8E16] md:text-[18px]">
              <div className="[&_path]:stroke-[#fbfbfb]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8.99995 13.8C11.6509 13.8 13.8 11.651 13.8 9.00001C13.8 6.34905 11.6509 4.20001 8.99995 4.20001C6.34898 4.20001 4.19995 6.34905 4.19995 9.00001C4.19995 11.651 6.34898 13.8 8.99995 13.8Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8.9999 10.6C9.88356 10.6 10.5999 9.88362 10.5999 8.99996C10.5999 8.11631 9.88356 7.39996 8.9999 7.39996C8.11625 7.39996 7.3999 8.11631 7.3999 8.99996C7.3999 9.88362 8.11625 10.6 8.9999 10.6Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              Clean Water Access for 500,000 people by 2026
            </div>
            <div className="flex items-center gap-2 text-xs text-[#FF8E16] md:text-[18px]">
              <div className="[&_path]:stroke-[#fbfbfb]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8.99995 13.8C11.6509 13.8 13.8 11.651 13.8 9.00001C13.8 6.34905 11.6509 4.20001 8.99995 4.20001C6.34898 4.20001 4.19995 6.34905 4.19995 9.00001C4.19995 11.651 6.34898 13.8 8.99995 13.8Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8.9999 10.6C9.88356 10.6 10.5999 9.88362 10.5999 8.99996C10.5999 8.11631 9.88356 7.39996 8.9999 7.39996C8.11625 7.39996 7.3999 8.11631 7.3999 8.99996C7.3999 9.88362 8.11625 10.6 8.9999 10.6Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              Educational Technology in 1,000 Schools
            </div>
            <div className="flex items-center gap-2 text-xs text-[#FF8E16] md:text-[18px]">
              <div className="[&_path]:stroke-[#fbfbfb]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8.99995 13.8C11.6509 13.8 13.8 11.651 13.8 9.00001C13.8 6.34905 11.6509 4.20001 8.99995 4.20001C6.34898 4.20001 4.19995 6.34905 4.19995 9.00001C4.19995 11.651 6.34898 13.8 8.99995 13.8Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8.9999 10.6C9.88356 10.6 10.5999 9.88362 10.5999 8.99996C10.5999 8.11631 9.88356 7.39996 8.9999 7.39996C8.11625 7.39996 7.3999 8.11631 7.3999 8.99996C7.3999 9.88362 8.11625 10.6 8.9999 10.6Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              Women&apos;s Empowerment through Skills Development
            </div>
            <div className="flex items-center gap-2 text-xs text-[#FF8E16] md:text-[18px]">
              <div className="[&_path]:stroke-[#fbfbfb]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8.99995 13.8C11.6509 13.8 13.8 11.651 13.8 9.00001C13.8 6.34905 11.6509 4.20001 8.99995 4.20001C6.34898 4.20001 4.19995 6.34905 4.19995 9.00001C4.19995 11.651 6.34898 13.8 8.99995 13.8Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8.9999 10.6C9.88356 10.6 10.5999 9.88362 10.5999 8.99996C10.5999 8.11631 9.88356 7.39996 8.9999 7.39996C8.11625 7.39996 7.3999 8.11631 7.3999 8.99996C7.3999 9.88362 8.11625 10.6 8.9999 10.6Z" stroke="#00521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              Healthcare Accessibility in Remote Areas
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* <img
              src="https://images.unsplash.com/photo-1612351924866-470473723803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Rural energy"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
            <img
              src="https://images.unsplash.com/photo-1540151812223-c30b3fab58e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Women empowerment"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025-2030",
      content: (
        <div>
          <p className="mb-8 font-normal text-base md:text-[20px] text-white font-paragraph">
            Our five-year expansion plan includes establishing regional offices across three continents, launching our flagship carbon neutrality program, and extending our educational initiatives to reach over one million students worldwide.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Global expansion"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Future education"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline 
        data={data} 
        title={title || "Milestones in Our Journey"}
        description={description || "From humble beginnings to ambitious future plans - tracing the growth of the Jaskaran Bothra Foundation and its impact."}
        customStyles={customStyles}
      />
    </div>
  );
} 