import {
  Send,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      {/* WIP Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70">
        <div className="text-center">
          <div className="text-8xl font-extrabold text-yellow-500 mb-4">
            WORK IN PROGRESS
          </div>
          <p className="text-2xl text-white mb-8">
            Contact form is currently under development
            <div>
              Use this instead{" "}
              <a href="mailto:adarshkunwarofficial@gmail.com">
                <span className="text-blue-500">
                  adarshkunwarofficial@gmail.com
                </span>
              </a>
            </div>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl relative z-0 opacity-30">
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
                Social Connections
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/adarshkunwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adarsh-kunwar-614557268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com/your_instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com/your_facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/your_twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 pointer-events-none">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled
              className="inline-flex items-center rounded-md border border-transparent bg-gray-300 px-6 py-3 text-base font-medium text-gray-500 opacity-50 cursor-not-allowed"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
