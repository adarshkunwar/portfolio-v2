import React, { useState, ChangeEvent } from "react";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Updated to handle both input and textarea changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Simulating email send - replace with actual email service
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  return (
    <div
      data-testid="contact"
      className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Have a question or want to work together?
          </p>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-blue-500"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div
                  className="flex items-center text-gray-700"
                  data-testid="email-info"
                >
                  <Mail className="mr-3 h-6 w-6" />
                  <a
                    href="mailto:youremail@example.com"
                    className="hover:text-blue-600"
                  >
                    youremail@example.com
                  </a>
                </div>
                <div
                  className="flex items-center text-gray-700"
                  data-testid="phone-info"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  <a href="tel:+1234567890" className="hover:text-blue-600">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200"
                  data-testid="github-link"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200"
                  data-testid="linkedin-link"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            data-testid="contact-form"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                data-testid="name-input"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                data-testid="email-input"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                data-testid="subject-input"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                data-testid="message-input"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              data-testid="submit-button"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </button>

            {status && (
              <div
                data-testid="status-message"
                className={`mt-4 rounded-md p-4 ${
                  status === "success"
                    ? "bg-green-50 text-green-800"
                    : status === "error"
                      ? "bg-red-50 text-red-800"
                      : "bg-blue-50 text-blue-800"
                }`}
              >
                {status === "sending"
                  ? "Sending message..."
                  : status === "success"
                    ? "Message sent successfully!"
                    : "Failed to send message. Please try again."}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
