"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Instagram, MessageCircle, X } from "lucide-react"

// FAQ data
const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Please contact our customer service team to initiate a return.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-5 business days within the continental US. International shipping can take 7-14 business days depending on the destination country.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can see the shipping options during checkout.",
  },
  {
    question: "Are your products covered by warranty?",
    answer:
      "Most of our products come with a manufacturer's warranty. The warranty period varies by product and brand. Details can be found on the product page or in the documentation included with your purchase.",
  },
  {
    question: "Can I modify or cancel my order?",
    answer:
      "Orders can be modified or canceled within 1 hour of placement. Please contact our customer service team immediately if you need to make changes to your order.",
  },
]

export default function ContactSection() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    {
      text: "Hello! How can I help you today?",
      isUser: false,
    },
  ])

  const sendMessage = () => {
    if (message.trim() === "") return

    // Add user message
    setChatMessages((prev) => [...prev, { text: message, isUser: true }])

    // Simulate response after a short delay
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! Our team will get back to you shortly.",
          isUser: false,
        },
      ])
    }, 1000)

    setMessage("")
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Contact Us</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Left Column - Contact Form */}
        <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="mb-6 text-xl font-semibold">Send Us a Message</h3>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="order">Order Status</SelectItem>
                  <SelectItem value="returns">Returns & Exchanges</SelectItem>
                  <SelectItem value="product">Product Information</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" rows={5} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the privacy policy and terms of service
              </Label>
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>

        {/* Right Column - Contact Information */}
        <div>
          <div className="mb-8 rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">
                    123 Travel Street, Suite 100
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@travelgear.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 6pm
                    <br />
                    Saturday: 10am - 4pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="mb-3 font-medium">Connect With Us</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-64 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-sm">
            <div className="h-full w-full bg-gray-300 p-4 text-center">
              <p className="pt-16 text-gray-600">Interactive Map Would Be Embedded Here</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h3 className="mb-6 text-center text-2xl font-semibold">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Live Chat Widget */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isChatOpen ? "translate-y-0" : "translate-y-16 opacity-90"
        }`}
      >
        <div
          className={`overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ${
            isChatOpen ? "h-96 w-80" : "h-14 w-14"
          }`}
        >
          {isChatOpen ? (
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between bg-primary p-4 text-white">
                <h3 className="font-medium">Customer Support</h3>
                <button onClick={() => setIsChatOpen(false)} className="text-white" aria-label="Close chat">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-3 max-w-[80%] rounded-lg p-3 ${
                      msg.isUser ? "ml-auto bg-primary text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 p-3">
                <div className="flex">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") sendMessage()
                    }}
                  />
                  <Button onClick={sendMessage} className="ml-2" aria-label="Send message">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsChatOpen(true)}
              className="flex h-full w-full items-center justify-center rounded-full bg-primary text-white"
              aria-label="Open chat"
            >
              <MessageCircle className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}