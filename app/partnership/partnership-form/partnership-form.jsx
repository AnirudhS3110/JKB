"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const partnershipTypes = [
  "Knowledge & Research Collaboration",
  "Technology & Innovation Partnership",
  "Media & Communication Support",
  "Volunteer & Capacity Building",
  "Government & Civic Engagement",
  "Institutional & Infrastructure Support",
]

export default function PartnershipForm() {
  const [selectedPartnershipTypes, setSelectedPartnershipTypes] = useState([])
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    partnershipReason: ""
  })
  const [isHovered, setIsHovered] = useState(false)

  const handlePartnershipTypeChange = (type, checked) => {
    if (checked) {
      setSelectedPartnershipTypes([...selectedPartnershipTypes, type])
    } else {
      setSelectedPartnershipTypes(selectedPartnershipTypes.filter((t) => t !== type))
    }
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log({ ...formData, partnershipTypes: selectedPartnershipTypes })
    // Add your form submission logic here
  }

  return (
    <div className="min-h-screen bg-[#fbfbfb]">
      <div className="max-w-5xl md:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-lg transform hover:scale-[1.01] transition-all duration-300">
          {/* Left Column - Form Title and Info */}
          <div className="md:w-1/3 p-8 hidden md:block bg-[#F4720B] text-white rounded-l-lg relative z-10 shadow-[inset_-10px_0px_20px_rgba(0,0,0,0.1)]">
            <h1 className="text-4xl md:text-5xl font-title font-light mb-6">
              Collaborate for <span className="">Social Impact</span>
            </h1>
            
            <p className="text-base font-paragraph mb-12 md:text-[19px]">
              Every collaboration inquiry helps us build a more inclusive, empowered, and sustainable society. We'll get back to you within 24 hours.
            </p>
            
            <div className="bg-[#F4720B]/80 p-6 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
              <h3 className="text-xl font-title font-light mb-4 md:text-[24px]">Before You Write Us...</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-2 mt-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We seek Collaborators who share our commitment to dignity, inclusion, and social innovation.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-2 mt-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Our collaborations are designed for real, measurable impact in communities.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-2 mt-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We value transparency, mutual respect, and a shared vision for a better future.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:w-2/3 bg-white p-8 rounded-r-lg shadow-md relative z-0">
            <h2 className="text-2xl font-title font-light text-center mb-8">Let's Create Change Together</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 font-regular text-[20px]">
              {/* Name Field */}
              <div className="space-y-2 text-[25px]">
                    <Input
                      id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="border-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#F4720B] transition-colors"
                      required
                    />
                  </div>

              {/* Email Field */}
                  <div className="space-y-2">
                    <Input
                      id="email"
                      type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="border-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#F4720B] transition-colors"
                      required
                    />
                </div>

              {/* Phone Field */}
                <div className="space-y-2">
                  <Input
                    id="phone"
                    type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number (for WhatsApp)"
                  className="border-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#F4720B] transition-colors"
                />
              </div>

              {/* Organization Field */}
                <div className="space-y-2">
                  <Input
                    id="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Organization / Institution"
                  className="border-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#F4720B] transition-colors"
                    required
                  />
                </div>

              {/* Partnership Type Dropdown */}
                  <div className="space-y-2">
                <Select>
                  <SelectTrigger className="border-0 border-b-2 border-gray-200 rounded-none px-0 focus:ring-0 focus-visible:ring-0 focus-visible:border-[#F4720B] transition-colors">
                    <SelectValue placeholder="Select the area you wish to collaborate on" />
                  </SelectTrigger>
                  <SelectContent>
                    {partnershipTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message Field */}
                <div className="space-y-2">
                <Textarea
                  id="partnershipReason"
                  value={formData.partnershipReason}
                  onChange={handleInputChange}
                  placeholder="Tell us about your organization, your goals, or how you'd like to collaborate with JKBF"
                  className="min-h-[120px] border-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#F4720B] resize-none"
                    />
                  </div>

              {/* Submit Button with Slide Animation */}
              <div className="pt-4">
                <button 
                  type="submit"
                  className="group w-full bg-[#F4720B] hover:bg-[#F4720B]/90 text-white py-3 rounded-md transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="flex items-center justify-center">
                    <span className={`inline-block transition-transform duration-300 ${isHovered ? '-translate-x-3' : 'translate-x-0'}`}>
                  Submit Collaboration Inquiry
                    </span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 inline-block transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
