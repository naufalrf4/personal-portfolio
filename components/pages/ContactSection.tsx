"use client";
import React, { SyntheticEvent, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";
import Image from "next/image";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setSubmitting(true);
  
    try {
      const response = await fetch("https://formspree.io/f/mknlbkwj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast("Message sent successfully");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast("Failed to send message");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 pt-12 xl:h-[480px] mb-6">
          <div className="flex flex-col justify-center">
            
            <div className="flex items-center gap-x-4 text-primary text-sm mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <h2 className="">Get in Touch</h2>
            </div>
            <h3 className="text-3xl font-bold mb-4">Let&apos;s Work Together.</h3>
            <p className="text-sm text-muted-foreground">
              I&apos;m currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I&apos;ll try
              my best to get back to you!
            </p>
            <div className="hidden md:flex justify-start mt-8">
              <Image
                src="/images/contact.png"
                alt="Contact Illustration"
                width={300}
                height={300}
                className="w-[200px] h-[200px]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm">
                  Name<span className="text-red-600"> *</span>
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                  placeholder="Naufal RF"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm">
                  Email<span className="text-red-600"> *</span>
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="yourname@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm">
                  Message<span className="text-red-600"> *</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className="input"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleMessageChange}
                  required
                />
              </div>
              <Button className="button" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
