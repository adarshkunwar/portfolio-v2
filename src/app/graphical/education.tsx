import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor in Cmputer Application",
      institution: "Tribhuwan University",
      location: "Nepal",
      duration: "2020 - present",
      gpa: "-",
      highlights: [
        "Data Structures & Algorithms",
        "Web Development",
        "Computer Networking",
        "Database Management",
      ],
    },
    {
      degree: "Higher Secondary Education",
      institution: "Kalika Manavyan Secondary School",
      location: "Butwal, Nepal",
      duration: "2018-2020",
      gpa: "A+",
      highlights: ["Computer Science", "Mathematics", "Physics"],
    },
  ];

  return (
    <div
      data-testid="education"
      className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-gray-900 sm:text-5xl">
            <GraduationCap className="h-10 w-10" />
            Education
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-blue-500"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              data-testid={`education-item-${index}`}
              className="relative rounded-lg bg-gray-50 p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                {/* Left Column - Timeline */}
                <div className="lg:col-span-1">
                  <div className="mb-2 flex items-center text-gray-600">
                    <Calendar className="mr-2 h-5 w-5" />
                    <span data-testid={`duration-${index}`}>
                      {edu.duration}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="mr-2 h-5 w-5" />
                    <span data-testid={`location-${index}`}>
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-3">
                  <h3
                    className="mb-2 text-2xl font-semibold text-gray-900"
                    data-testid={`degree-${index}`}
                  >
                    {edu.degree}
                  </h3>
                  <h4
                    className="mb-4 text-xl text-gray-700"
                    data-testid={`institution-${index}`}
                  >
                    {edu.institution}
                  </h4>
                  <p
                    className="mb-4 text-gray-600"
                    data-testid={`gpa-${index}`}
                  >
                    GPA: {edu.gpa}
                  </p>
                  <div>
                    <h5 className="mb-2 font-medium text-gray-900">
                      Key Courses
                    </h5>
                    <div
                      className="flex flex-wrap gap-2"
                      data-testid={`highlights-${index}`}
                    >
                      {edu.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
