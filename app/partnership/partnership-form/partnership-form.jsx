"use client"



import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, Mail, Building, User, Lightbulb } from "lucide-react"

const partnershipTypes = [
  "Knowledge & Research Partnerships",
  "Technology & Innovation Collaboration",
  "Media & Communication Partnerships",
  "Volunteer & Capacity-Building Engagements",
  "Government & Civic Partnerships",
  "Institutional & Infrastructure Support",
]

export default function PartnershipForm() {
  const [selectedPartnershipTypes, setSelectedPartnershipTypes] = useState([])
  const [uploadedFiles, setUploadedFiles] = useState([])

  const handlePartnershipTypeChange = (type , checked) => {
    if (checked) {
      setSelectedPartnershipTypes([...selectedPartnershipTypes, type])
    } else {
      setSelectedPartnershipTypes(selectedPartnershipTypes.filter((t) => t !== type))
    }
  }

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files || [])
    setUploadedFiles([...uploadedFiles, ...files])
  }

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-[#fbfbfb] py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-light text-[#121212] mb-2 font-title">Partnership Inquiry</CardTitle>
            <CardDescription className="text-lg text-gray-600 font-paragraph">
              Let's explore how we can work together to create something amazing
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            <form className="space-y-6">
              {/* Personal Information Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-5 w-5 text-[#f4720b]" />
                  <h3 className="text-lg font-light text-[#121212] font-heading">Personal Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-[#121212] font-medium font-paragraph">
                      Full Name <span className="text-[#f4720b]">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="border-gray-300 focus:border-[#f4720b] focus:ring-[#f4720b] font-paragraph"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#121212] font-medium font-paragraph">
                      Email Address <span className="text-[#f4720b]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-gray-300 focus:border-[#f4720b] focus:ring-[#f4720b] font-paragraph"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#121212] font-medium font-paragraph">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="border-gray-300 focus:border-[#f4720b] focus:ring-[#f4720b] font-paragraph"
                  />
                </div>
              </div>

              {/* Organization Information Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Building className="h-5 w-5 text-[#f4720b]" />
                  <h3 className="text-lg font-light text-[#121212] font-light font-heading">Organization Details</h3>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-[#121212] font-medium font-paragraph">
                    Organization / Institution Name <span className="text-[#f4720b]">*</span>
                  </Label>
                  <Input
                    id="organization"
                    placeholder="Your organization name"
                    className="border-gray-300 focus:border-[#f4720b] focus:ring-[#f4720b] font-paragraph"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="designation" className="text-[#121212] font-medium font-paragraph">
                      Designation / Role
                    </Label>
                    <Input
                      id="designation"
                      placeholder="Your role or title"
                      className="border-gray-300 focus:border-[#f4720b] focus:ring-[#f4720b] font-paragraph"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-[#121212] font-medium font-paragraph">
                      Location / Country
                    </Label>
                    <Input
                      id="location"
                      placeholder="City, Country"
                      className="border-gray-300 focus:border-[#f4720b] focus:ring-[#f4720b] font-paragraph"
                    />
                  </div>
                </div>
              </div>

              {/* Partnership Details Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-[#f4720b]" />
                  <h3 className="text-lg font-light text-[#121212] font-heading">Partnership Details</h3>
                </div>

                <div className="space-y-2">
                  <Label className="text-[#121212] font-medium font-paragraph">
                    Type of Partnership <span className="text-[#f4720b]">*</span>
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {partnershipTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={type}
                          checked={selectedPartnershipTypes.includes(type)}
                          onCheckedChange={(checked) => handlePartnershipTypeChange(type, checked)}
                          className="border-gray-300 data-[state=checked]:bg-[#f4720b] data-[state=checked]:border-[#f4720b]"
                        />
                        <Label htmlFor={type} className="text-sm text-[#121212] cursor-pointer font-paragraph">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-[#121212] font-medium font-paragraph">
                    Why are you interested in this partnership?
                  </Label>
                  <Textarea
                    id="interest"
                    placeholder="Tell us about your goals and what you hope to achieve through this partnership..."
                    className="min-h-[100px] border-gray-300 focus:border-[#f4720b] focus:ring-[#f4720b] resize-none font-paragraph"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="proposal" className="text-[#121212] font-medium font-paragraph">
                    Do you have a project idea / proposal?
                  </Label>
                  <Textarea
                    id="proposal"
                    placeholder="Share your project ideas, proposals, or specific collaboration concepts..."
                    className="min-h-[100px] border-gray-300 focus:border-[#f4720b] focus:ring-[#f4720b] resize-none font-paragraph"
                  />
                </div>
              </div>

              {/* Contact Preferences Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="h-5 w-5 text-[#f4720b]" />
                  <h3 className="text-lg  font-light text-[#121212] font-heading">Contact Preferences</h3>
                </div>

                <div className="space-y-3">
                  <Label className="text-[#121212] font-medium font-paragraph">Preferred mode of contact</Label>
                  <RadioGroup defaultValue="email" className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-contact" className="border-gray-300 text-[#f4720b]" />
                      <Label htmlFor="email-contact" className="text-[#121212] cursor-pointer font-paragraph">
                        Email
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-contact" className="border-gray-300 text-[#f4720b]" />
                      <Label htmlFor="phone-contact" className="text-[#121212] cursor-pointer font-paragraph">
                        Phone
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="either" id="either-contact" className="border-gray-300 text-[#f4720b]" />
                      <Label htmlFor="either-contact" className="text-[#121212] cursor-pointer font-paragraph">
                        Either Email or Phone
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* File Upload Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-[#f4720b]" />
                  <h3 className="text-lg font-light text-[#121212] font-light font-heading">Supporting Documents</h3>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="documents" className="text-[#121212] font-medium font-paragraph">
                    Upload Supporting Documents (Proposal, CV, etc.)
                  </Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#f4720b] transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <Label htmlFor="documents" className="cursor-pointer font-paragraph">
                      <span className="text-[#f4720b] font-medium">Click to upload</span>
                      <span className="text-gray-600"> or drag and drop</span>
                    </Label>
                    <p className="text-sm text-gray-500 mt-1 font-paragraph">PDF, DOC, DOCX up to 10MB</p>
                    <Input
                      id="documents"
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                          <span className="text-sm text-[#121212]">{file.name}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Consent Section */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    required
                    className="border-gray-300 data-[state=checked]:bg-[#f4720b] data-[state=checked]:border-[#f4720b] mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm text-[#121212] leading-relaxed cursor-pointer font-paragraph">
                    I agree to be contacted regarding this partnership inquiry and consent to the processing of my
                    personal data in accordance with the privacy policy. <span className="text-[#f4720b]">*</span>
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-[#f4720b] hover:bg-[#e5650a] text-white font-semibold py-3 text-lg transition-colors font-heading"
                >
                  Submit Partnership Inquiry
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
