import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Explore.css' 

const Explore = () => {
  const academicTracks = [
    {
      title: 'Engineering and Technology',
      category: 'STEM',
      duration: '4 years',
      format: 'On campus',
      text: 'Project-based learning, labs, and industry partnerships that prepare students for modern technical careers.',
      highlights: ['Lab-based coursework', 'Industry mentorship', 'Capstone projects'],
      outcomes: ['Software engineer', 'Systems analyst', 'Product developer'],
    },
    {
      title: 'Business and Management',
      category: 'Business',
      duration: '3-4 years',
      format: 'Hybrid',
      text: 'Courses built around leadership, entrepreneurship, finance, and real-world case studies.',
      highlights: ['Case study learning', 'Startup support', 'Leadership workshops'],
      outcomes: ['Business analyst', 'Operations manager', 'Founder'],
    },
    {
      title: 'Arts, Media, and Humanities',
      category: 'Creative',
      duration: '3 years',
      format: 'On campus',
      text: 'A creative academic environment that supports communication, design thinking, and cultural studies.',
      highlights: ['Studio-based learning', 'Portfolio support', 'Public showcases'],
      outcomes: ['Content strategist', 'Designer', 'Communications lead'],
    },
    {
      title: 'Sciences and Health',
      category: 'Science',
      duration: '4 years',
      format: 'On campus',
      text: 'Research-oriented programs with strong foundations in lab work, inquiry, and student mentorship.',
      highlights: ['Research mentorship', 'Clinical exposure', 'Lab analysis'],
      outcomes: ['Lab technologist', 'Research assistant', 'Health educator'],
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProgram, setSelectedProgram] = useState(academicTracks[0])

  const categories = ['All', ...new Set(academicTracks.map((track) => track.category))]

  const filteredTracks = academicTracks.filter((track) => {
    const matchesCategory = activeCategory === 'All' || track.category === activeCategory
    const normalizedQuery = searchTerm.trim().toLowerCase()
    const matchesSearch =
      normalizedQuery === '' ||
      track.title.toLowerCase().includes(normalizedQuery) ||
      track.text.toLowerCase().includes(normalizedQuery) ||
      track.category.toLowerCase().includes(normalizedQuery)

    return matchesCategory && matchesSearch
  })

  const campusExperiences = [
    'Modern classrooms, labs, and study spaces designed for focused learning.',
    'Residential life, clubs, and events that help students build community quickly.',
    'Advising, career support, and wellbeing services that stay with students throughout their journey.',
  ]

  const admissionsSteps = [
    {
      step: '01',
      title: 'Discover your program',
      text: 'Review the available pathways, compare requirements, and see where each course can lead.',
    },
    {
      step: '02',
      title: 'Submit your application',
      text: 'Prepare transcripts, personal statements, and supporting documents with a clear checklist.',
    },
    {
      step: '03',
      title: 'Connect with admissions',
      text: 'Speak with our team about scholarships, deadlines, and the next step in the process.',
    },
  ]

  const spotlight = [
    { value: '12+', label: 'academic pathways' },
    { value: '98%', label: 'student support reach' },
    { value: '24/7', label: 'digital access and services' },
  ]

  return (
    <div className="explore-page">
      <section className="explore-hero container">
        <div className="explore-copy">
          <p className="explore-kicker">Explore the university experience</p>
          <h1>A university destination built around learning, growth, and opportunity.</h1>
          <p className="explore-lead">
            Discover the programs, campus culture, and support services that shape the student experience from the first application to graduation day.
          </p>
          <div className="explore-actions">
            <Link to="/" className="btn">Back to home</Link>
            <a href="#admissions" className="explore-secondary-link">View admissions</a>
          </div>

          <div className="explore-spotlight">
            {spotlight.map((item) => (
              <div key={item.label} className="spotlight-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="explore-panel">
          <span className="panel-label">Campus snapshot</span>
          <div className="panel-card panel-card-large">
            <p className="panel-eyebrow">Student experience</p>
            <h3>Everything a modern university page should help visitors understand quickly.</h3>
            <p>
              Programs, support, research, and student life are organized so parents, applicants, and partners can scan the essentials fast.
            </p>
          </div>
          <div className="panel-card panel-card-grid">
            <div>
              <span className="panel-mini-label">Scholarships</span>
              <strong>Merit and need-based aid</strong>
            </div>
            <div>
              <span className="panel-mini-label">Student services</span>
              <strong>Advising and wellbeing</strong>
            </div>
            <div>
              <span className="panel-mini-label">Career outcomes</span>
              <strong>Internships and placement support</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="explore-section container">
        <div className="section-heading">
          <p>Academic pathways</p>
          <h2>Study options that mirror how a real university organizes its schools.</h2>
        </div>
        <div className="program-controls">
          <label className="search-box" htmlFor="program-search">
            <span>Search programs</span>
            <input
              id="program-search"
              type="text"
              placeholder="Try business, science, or media"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <div className="filter-pills" role="tablist" aria-label="Program categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="program-browser">
          <div className="program-grid">
            {filteredTracks.length > 0 ? filteredTracks.map((item) => (
              <button
                key={item.title}
                type="button"
                className={`program-card ${selectedProgram.title === item.title ? 'selected' : ''}`}
                onClick={() => setSelectedProgram(item)}
              >
                <span className="card-tag">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="card-meta">
                  <span>{item.duration}</span>
                  <span>{item.format}</span>
                </div>
              </button>
            )) : (
              <div className="no-results">
                <h3>No programs match your search.</h3>
                <p>Try a broader term or clear the category filter to see all academic pathways again.</p>
                <button type="button" className="filter-pill reset" onClick={() => {
                  setSearchTerm('')
                  setActiveCategory('All')
                  setSelectedProgram(academicTracks[0])
                }}>
                  Reset filters
                </button>
              </div>
            )}
          </div>

          <aside className="program-detail">
            <span className="panel-label">Featured program</span>
            <h3>{selectedProgram.title}</h3>
            <p>{selectedProgram.text}</p>
            <div className="detail-meta">
              <span>{selectedProgram.category}</span>
              <span>{selectedProgram.duration}</span>
              <span>{selectedProgram.format}</span>
            </div>

            <div className="detail-block">
              <h4>Program highlights</h4>
              <ul>
                {selectedProgram.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="detail-block">
              <h4>Career outcomes</h4>
              <ul>
                {selectedProgram.outcomes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <Link to="/" className="btn program-cta">Talk to admissions</Link>
          </aside>
        </div>
      </section>

      <section className="explore-section container explore-dual">
        <div className="explore-card explore-life">
          <div className="section-heading">
            <p>Campus life</p>
            <h2>A place where students learn outside the classroom too.</h2>
          </div>
          <ul className="feature-list">
            {campusExperiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="explore-card explore-research">
          <div className="section-heading">
            <p>Research and innovation</p>
            <h2>Built to show curiosity, progress, and real-world impact.</h2>
          </div>
          <p className="section-copy">
            A strong university page should also communicate discovery. Highlight faculty projects, student-led initiatives, and partnerships that connect learning to the wider world.
          </p>
          <div className="research-points">
            <span>Faculty-led projects</span>
            <span>Industry collaboration</span>
            <span>Student innovation labs</span>
          </div>
        </div>
      </section>

      <section id="admissions" className="explore-section container explore-roadmap">
        <div className="section-heading">
          <p>Admissions journey</p>
          <h2>A clear path from first interest to enrolment.</h2>
        </div>
        <ol className="timeline-list admissions-list">
          {admissionsSteps.map((item) => (
            <li key={item.step}>
              <span>{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default Explore