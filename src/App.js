import React from 'react';
import './App.css'; // Apni custom styling ke liye
// import './index.css'; // Agar index.css mein koi global styles hain, toh use bhi rakh sakte hain

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <nav>
          {/* Navigation links will go here later */}
          {/* For now, maybe just a company name */}
          <h1>OnePersonAI</h1>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="home-section">
        <h1>OnePersonAI: Your Digital Edge, Crafted by Akshat Raj</h1>
        <h2>AI-Powered Solutions & Creative Digital Services for Every Budget in India.</h2>
        <p>Welcome to OnePersonAI, where cutting-edge AI meets dedicated human expertise. As a single-person powerhouse, led by Akshat Raj, I deliver high-quality, affordable digital solutions tailored for small businesses, startups, and individuals. Get ready to amplify your online presence and streamline your work, all without breaking the bank.</p>
        <div className="cta-buttons">
          <a href="#services" className="btn primary-btn">Explore Services</a>
          <a href="#contact" className="btn secondary-btn">Get a Free Quote</a>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="what-we-do-section">
        <h2>Our Core Strengths</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Smart Web Solutions</h3>
            <p>From single-page websites to dynamic web apps, we build your online presence with speed and precision.</p>
          </div>
          <div className="service-card">
            <h3>AI Automation & Prompts</h3>
            <p>Leverage the power of AI for content generation, task automation, and intelligent chatbots.</p>
          </div>
          <div className="service-card">
            <h3>Creative Content Design</h3>
            <p>Eye-catching visuals for social media, YouTube thumbnails, and impactful digital assets.</p>
          </div>
          <div className="service-card">
            <h3>Digital Strategy</h3>
            <p>Get insights and basic consultation to boost your online growth.</p>
          </div>
        </div>
      </section>

      {/* Why Choose OnePersonAI Section */}
      <section id="why-choose-us" className="why-choose-us-section">
        <h2>Why Partner with OnePersonAI?</h2>
        <ul>
          <li><strong>Affordable Excellence:</strong> High-quality services that fit your budget, starting from just ₹299.</li>
          <li><strong>Dedicated Focus:</strong> As a single person, you get undivided attention and direct communication.</li>
          <li><strong>AI-Powered Efficiency:</strong> We use advanced AI tools to deliver results faster and smarter.</li>
          <li><strong>Versatile Skills:</strong> A wide range of digital services under one roof – no need to juggle multiple freelancers.</li>
          <li><strong>Results-Driven:</strong> Your success is my priority. I focus on delivering tangible value.</li>
        </ul>
      </section>

      {/* Services Page Content - Will be on /services route later, but for now, add here */}
      <section id="services" className="services-page-section">
        <h2>Our Affordable Digital & AI Services by OnePersonAI</h2>
        <h3>High-Quality Solutions Designed for Every Need and Budget, Powered by Akshat Raj's Expertise.</h3>

        <h4>Web Presence & Design Services</h4>
        <div className="service-items-grid">
          <div className="service-item-card">
            <h4>"OnePage Express" Website</h4>
            <p>A professional single-page website (landing page) to establish your online presence. Mobile-friendly and ready in days.</p>
            <p className="price">Price: ₹1499</p>
          </div>
          <div className="service-item-card">
            <h4>Google My Business Optimization</h4>
            <p>Boost your local visibility on Google Maps & Search. We'll set up/optimize your profile, add photos, and highlight your services.</p>
            <p className="price">Price: ₹599</p>
          </div>
          <div className="service-item-card">
            <h4>YouTube "Click-Magnet" Thumbnails (Pack of 3)</h4>
            <p>Get 3 eye-catching, high-resolution thumbnails designed to increase your video's click-through rate.</p>
            <p className="price">Price: ₹399</p>
          </div>
          <div className="service-item-card">
            <h4>Instagram "Instant-Post" Design (Pack of 3)</h4>
            <p>3 stunning, custom-designed Instagram post images to elevate your brand's social media presence.</p>
            <p className="price">Price: ₹499</p>
          </div>
        </div>

        <h4>AI & Automation Services</h4>
        <div className="service-items-grid">
          <div className="service-item-card">
            <h4>"AI Brainstorm Buddy" Prompt Pack (5 Prompts)</h4>
            <p>Receive 5 expertly crafted AI prompts to generate ideas, content outlines, or creative text for your specific needs.</p>
            <p className="price">Price: ₹499</p>
          </div>
          <div className="service-item-card">
            <h4>"AI Content Booster" Prompt (1 Customized)</h4>
            <p>One in-depth, tailored AI prompt for complex content generation – perfect for detailed articles, scripts, or email series drafts.</p>
            <p className="price">Price: ₹799</p>
          </div>
          <div className="service-item-card">
            <h4>"Basic Q&A Chatbot" (Website/WhatsApp)</h4>
            <p>A simple automated chatbot to answer 5-7 of your most common customer questions, available 24/7.</p>
            <p className="price">Price: ₹1299</p>
          </div>
        </div>

        <h4>Content & Consulting Services</h4>
        <div className="service-items-grid">
          <div className="service-item-card">
            <h4>Social Media "Bio Blast" Optimization</h4>
            <p>Get a powerful, keyword-rich, and engaging bio for your Instagram, LinkedIn, or Facebook profile that captures attention.</p>
            <p className="price">Price: ₹299</p>
          </div>
          <div className="service-item-card">
            <h4>"Content Idea Spark" (10 Ideas)</h4>
            <p>Receive 10 fresh, engaging content ideas tailored to your niche, perfect for blogs, videos, or social media campaigns.</p>
            <p className="price">Price: ₹599</p>
          </div>
        </div>
      </section>

      {/* Portfolio Page Content - Will be on /portfolio route later */}
      <section id="portfolio" className="portfolio-page-section">
        <h2>Our Work: See OnePersonAI in Action</h2>
        <h3>A Glimpse into the Digital Magic We Create, Powered by Akshat Raj.</h3>
        <p>As the driving force behind OnePersonAI, I, Akshat Raj, leverage my expertise in Full Stack Development and AI/ML to deliver impactful digital solutions. Here are some highlights of my work:</p>

        <div className="portfolio-items-grid">
          <div className="portfolio-item-card">
            <h4>Multimodal AI Assistant</h4>
            <p>A revolutionary AI assistant accepting image, text, and voice inputs, built with React, Flask, and advanced AI models. Showcases seamless integration of AI with modern web technologies.</p>
            <a href="https://github.com/AkshatRaj00/Multimodal-AI-Assistant" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="portfolio-item-card">
            <h4>AkshaBot Pro</h4>
            <p>A smart chatbot demonstrating advanced Natural Language Processing (NLP) capabilities for intelligent conversations and user interaction.</p>
            <a href="https://github.com/AkshatRaj00/AkshaBot-Pro" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="portfolio-item-card">
            <h4>NextGen AI</h4>
            <p>A futuristic assistant project integrating multiple cutting-edge AI modules, designed for next-level automation and intelligence.</p>
            <a href="https://github.com/AkshatRaj00/NextGen-AI" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="portfolio-item-card">
            <h4>AI Voice Assistant</h4>
            <p>A Python-based voice-controlled AI assistant that processes and responds to voice commands, showcasing basic AI automation.</p>
            <a href="https://github.com/AkshatRaj00/AIvoice-Assistant" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="portfolio-item-card">
            <h4>Spam Detector</h4>
            <p>An effective Machine Learning project built to accurately identify and filter out spam messages, ensuring cleaner communication.</p>
            <a href="https://github.com/AkshatRaj00/Spam-Detector" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>
        <p>
          *More portfolio items for website designs, thumbnails, and AI prompts will be added as we complete client projects.
        </p>
      </section>

      {/* About Us Page Content - Will be on /about route later */}
      <section id="about" className="about-page-section">
        <h2>Behind OnePersonAI: My Story</h2>
        <h3>Dedicated to Empowering Your Digital Journey with Akshat Raj.</h3>
        <p>Hello! I'm <strong>Akshat Raj</strong>, the founder and sole force behind OnePersonAI. My mission is simple: to make high-quality digital and AI-powered solutions accessible and affordable for everyone.</p>
        <p>With a strong background in <strong>Full Stack Web Development, Artificial Intelligence & Machine Learning, and Data Structures & Algorithms</strong>, I've always believed that technology should empower, not intimidate. OnePersonAI was born from the idea that even a single individual, armed with the right knowledge and cutting-edge AI tools, can deliver immense value to businesses and personal brands. My passion lies in <strong>building meaningful AI products</strong> and <strong>helping others uplift their digital presence.</strong></p>
        <p>My core skills include <strong>Programming (Python, C++, JavaScript), Frameworks (ReactJS, Node.js, Flask), Tools (Git, GitHub, VS Code, Postman), AI/ML (Scikit-Learn, OpenCV, TensorFlow Basics), and others (Firebase, Next.js, TailwindCSS).</strong> Every project at OnePersonAI receives my personal attention, dedication, and a commitment to excellence. I leverage advanced AI to boost efficiency, ensuring you get top-notch results without the hefty agency price tag.</p>
        <p>When you work with OnePersonAI, you're not just getting a service; you're getting a dedicated partner who genuinely cares about your success and is focused on building meaningful AI products and launching his own startup vision.</p>
        {/* Optional: <img src="/your-professional-photo.jpg" alt="Akshat Raj" className="akshat-photo" /> */}
        <div className="connect-links">
          <h4>Connect with Akshat:</h4>
          {/* Corrected email ID */}
          <p>Email: <a href="mailto:onepersonai.service@gmail.com">onepersonai.service@gmail.com</a></p>
          {/* Corrected phone number */}
          <p>Phone: +91 91423 41588</p>
          {/* Corrected WhatsApp link - removed nested <p> tag */}
          <p>WhatsApp: <a href="https://wa.me/919142341588" target="_blank" rel="noopener noreferrer">Message Akshat Raj on WhatsApp</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/akshat-raj-73ba41233" target="_blank" rel="noopener noreferrer">linkedin.com/in/akshat-raj-73ba41233</a></p>
          <p>GitHub: <a href="https://github.com/AkshatRaj00" target="_blank" rel="noopener noreferrer">github.com/AkshatRaj00</a></p>
        </div>
      </section>

      {/* Contact Page Content - Will be on /contact route later */}
      <section id="contact" className="contact-page-section">
        <h2>Get in Touch</h2>
        <h3>Ready to Transform Your Digital Presence? Let's Talk with Akshat Raj!</h3>
        <p>Have a project in mind or just want to say hello? Fill out the form below or reach out directly.</p>

        {/* Contact Form - Using Formspree for 0 investment */}
        <form action="https://formspree.io/f/mkgzgopq" method="POST" className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="service">Service Interested In (Optional):</label>
          <select id="service" name="service">
            <option value="">-- Select a Service --</option>
            <option value="onepage-website">"OnePage Express" Website</option>
            <option value="google-my-business">Google My Business Optimization</option>
            <option value="youtube-thumbnails">YouTube "Click-Magnet" Thumbnails</option>
            <option value="instagram-posts">Instagram "Instant-Post" Design</option>
            <option value="ai-prompts-pack">"AI Brainstorm Buddy" Prompt Pack</option>
            <option value="ai-custom-prompt">"AI Content Booster" Prompt</option>
            <option value="basic-chatbot">"Basic Q&A Chatbot"</option>
            <option value="social-bio">Social Media "Bio Blast" Optimization</option>
            <option value="content-ideas">"Content Idea Spark"</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          {/* Hidden fields for Formspree redirect and captcha */}
          <input type="hidden" name="_next" value="http://localhost:3000/" /> {/* For local testing, redirects to home */}
          <input type="hidden" name="_captcha" value="false" /> {/* Disables captcha for now for easier testing, but can be removed for production if desired */}

          <button type="submit" className="btn submit-btn">Send Message</button>
        </form>

        <div className="direct-contact-info">
          <h4>Or Connect Directly:</h4>
          {/* Corrected email ID */}
          <p>Email: <a href="mailto:onepersonai.service@gmail.com">onepersonai.service@gmail.com</a></p>
          {/* Corrected WhatsApp link */}
          <p>WhatsApp: <a href="https://wa.me/919142341588" target="_blank" rel="noopener noreferrer">Message Akshat Raj on WhatsApp</a></p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} OnePersonAI. All rights reserved.</p>
        {/* Future: Privacy Policy, Terms of Service links here */}
      </footer>
    </div>
  );
}

export default App;