import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: '/images/team/john.jpg',
    description: 'Full-stack developer with 10+ years of experience in web technologies.',
    social: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe'
    }
  },
  {
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: '/images/team/jane.jpg',
    description: 'Frontend specialist focused on creating beautiful and accessible user interfaces.',
    social: {
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith'
    }
  },
  {
    name: 'Mike Johnson',
    role: 'Technical Lead',
    image: '/images/team/mike.jpg',
    description: 'Backend expert with deep knowledge in system architecture and cloud solutions.',
    social: {
      github: 'https://github.com/mikejohnson',
      linkedin: 'https://linkedin.com/in/mikejohnson',
      twitter: 'https://twitter.com/mikejohnson'
    }
  }
];

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '100+' },
  { label: 'Clients Worldwide', value: '50+' },
  { label: 'Team Members', value: '10+' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-[#442781] to-[#61459C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="font-raleway font-bold text-4xl md:text-5xl mb-6">
              About K.A Tech
            </h1>
            <p className="font-rubik text-lg text-white/90">
              We're passionate about creating innovative solutions and sharing knowledge 
              with the developer community. Our mission is to make technology more 
              accessible and development more efficient.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-8 py-20">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-raleway font-bold text-4xl text-[#442781] mb-2">
                {stat.value}
              </div>
              <div className="font-rubik text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-raleway font-bold text-2xl text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="font-rubik text-gray-600">
              To be the leading platform for developers, providing cutting-edge tools 
              and resources that empower the creation of exceptional digital experiences.
            </p>
          </div>
          <div>
            <h2 className="font-raleway font-bold text-2xl text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="font-rubik text-gray-600">
              To streamline development workflows and foster a community of knowledge 
              sharing, making technology more accessible to developers worldwide.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <section>
          <h2 className="font-raleway font-bold text-3xl text-gray-800 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-gray-200" />
                  {/* Uncomment when you have actual images */}
                  {/* <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  /> */}
                </div>
                <h3 className="font-raleway font-semibold text-xl text-gray-800 mb-1">
                  {member.name}
                </h3>
                <div className="text-[#442781] font-rubik text-sm mb-3">
                  {member.role}
                </div>
                <p className="font-rubik text-gray-600 text-sm mb-4">
                  {member.description}
                </p>
                <div className="flex justify-center gap-4">
                  <a 
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a 
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 