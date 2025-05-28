import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import TitleHeader from '../components/TitleHeader';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { projectsData } from '../constants';


gsap.registerPlugin(ScrollTrigger);

const ProjectsDetail = () => {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState('overview');
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projectHeaderRef = useRef(null); // Ref for the project header

  useEffect(() => {
    const fetchProject = () => {
      try {
        setLoading(true);

        const projectId = id ? parseInt(id) : 1;
        const foundProject = projectsData.find((p) => p.id === projectId);

        if (!foundProject) {
          setError('Project not found');
          return;
        }

        setProject(foundProject);
        setError(null);
      } catch (error) {
        setError('Error loading project');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  // Scroll to project header on load
  useEffect(() => {
    if (project && projectHeaderRef.current) {
      projectHeaderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [project]);

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'features', title: 'Features' },
    { id: 'challenges', title: 'Challenges' },
    { id: 'outcomes', title: 'Results' },
  ];

  useGSAP(() => {
    if (project) {
      gsap.from('#project-card', {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '#project-detail',
          start: 'top center',
        },
      });

      gsap.from('#animated-text', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '#project-detail',
          start: 'top center',
          end: 'top 60%',
        },
      });
    }
  }, [project]);

  if (loading) {
    return (
      <section className="flex-center relative md:p-0 px-5 min-h-screen bg-black-primary">
        <div className="text-white-50 text-xl">Loading project...</div>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="flex-center relative md:p-0 px-5 min-h-screen bg-black-primary">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">{error || 'Project not found'}</div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-50 hover:text-white-50 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="project-detail" className="flex-center relative md:p-0 px-5 overflow-hidden">
      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        {/* Back Button */}
        <div className="mb-10" id="animated-text">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-50 hover:text-white-50 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Project Header - Added ref here */}
        <div className="mb-20" id="animated-text" ref={projectHeaderRef}>
          <TitleHeader title={project.title} number="01" text={project.subtitle} />
        </div>

        {/* Project Hero Section */}
        <div className="grid grid-cols-12 gap-5 mb-20">
          {/* Main Project Info */}
          <div className="md:col-span-8 col-span-12" id="project-card">
            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[350px] md:h-[450px] object-cover rounded-xl"
                  onError={(e) => {
                    e.target.src = '/images/placeholder.png';
                  }}
                />
              </div>
              <div>
                <p className="md:text-xl text-lg leading-relaxed text-white-50">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50/10 text-blue-50 rounded-full text-sm font-medium border border-blue-50/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Sidebar */}
          <div className="md:col-span-4 col-span-12 space-y-5">
            <div className="bg-black-300 rounded-2xl p-6" id="project-card">
              <h3 className="gradient-title text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Duration</p>
                  <p className="text-white-50 font-medium">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Client</p>
                  <p className="text-white-50 font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Year</p>
                  <p className="text-white-50 font-medium">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Category</p>
                  <p className="text-white-50 font-medium">{project.category}</p>
                </div>
              </div>
            </div>

            <div className="bg-black-300 rounded-2xl p-6" id="project-card">
              <h3 className="gradient-title text-xl font-semibold mb-4">Links</h3>
              <div className="space-y-3">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-blue-50 hover:text-white-50 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-blue-50 hover:text-white-50 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="mb-10" id="project-card">
          <div className="flex flex-wrap gap-4 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveSection(section.id);
                  }
                }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-50 text-black-300 font-semibold'
                    : 'bg-black-300 text-white-50 hover:bg-blue-50/10 border border-blue-50/20'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Sections */}
        <div className="mb-20" id="project-card">
          {activeSection === 'overview' && (
            <div className="bg-black-300 rounded-2xl p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-white-50 text-lg leading-relaxed mb-6">{project.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white-50 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50/10 text-blue-50 rounded-full text-sm font-medium border border-blue-50/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white-50 mb-3">Project Stats</h3>
                  <div className="space-y-2">
                    <p className="text-white-50">
                      <span className="text-blue-50">Duration:</span> {project.duration}
                    </p>
                    <p className="text-white-50">
                      <span className="text-blue-50">Category:</span> {project.category}
                    </p>
                    <p className="text-white-50">
                      <span className="text-blue-50">Year:</span> {project.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'features' && (
            <div className="bg-black-300 rounded-2xl p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-blue-50/5 rounded-lg border border-blue-50/10"
                  >
                    <div className="w-2 h-2 bg-blue-50 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white-50">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'challenges' && (
            <div className="bg-black-300 rounded-2xl p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">Challenges & Solutions</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="p-6 bg-blue-50/5 rounded-lg border border-blue-50/10">
                    <h3 className="text-xl font-semibold text-blue-50 mb-3">{challenge.title}</h3>
                    <p className="text-white-50 mb-4">{challenge.description}</p>
                    <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <p className="text-green-400 font-medium">Solution: {challenge.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'outcomes' && (
            <div className="bg-black-300 rounded-2xl p-8">
              <h2 className="gradient-title text-2xl font-bold mb-6">Project Outcomes</h2>
              <div className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-green-500/5 rounded-lg border border-green-500/10"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white-50">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetail;