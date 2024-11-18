import Image from "next/image";

const About = () => {
  return (
    <div
      data-testid="about"
      className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-blue-500"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="https://placehold.co/400x500"
                alt="Profile"
                className="object-cover"
                width={400}
                height={500}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Full Stack Developer & UI/UX Enthusiast
            </h3>
            <div className="space-y-4 text-gray-600">
              <p data-testid="bio-intro">
                Hi! I&apos;m a passionate developer with 3+ years of experience
                in creating modern web applications. I specialize in React,
                Node.js, and cloud technologies.
              </p>
              <p data-testid="bio-detail">
                My journey in tech started with a curiosity about how things
                work on the web. Today, I&apos;m dedicated to building
                user-centric applications that solve real-world problems while
                maintaining clean, efficient code.
              </p>
              <p data-testid="bio-interests">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge through technical writing.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold text-gray-900">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-3" data-testid="skills-list">
                {["React", "Node.js", "TypeScript", "MongoDB", "Docker"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
