/* ═══════════════════════════════════════
   content.js — Window HTML Content
   ═══════════════════════════════════════ */

const CONTENT = {

  /* ── ABOUT ── */
  about: `
    <div class="about-header">
      <div class="avatar-placeholder">👤</div>
      <div>
        <h1 style="border:none;padding:0;margin-bottom:6px;font-size:26px;">Harsh Tyagi</h1>
        <p style="font-size:12px;color:#555;">Aspiring Software Developer · CSE Student (BE 2028)</p>
        <p style="margin-top:6px;">
          <span class="badge">Python</span>
          <span class="badge">React.js</span>
          <span class="badge">Computer Vision</span>
          <span class="badge">GenAI</span>
          <span class="badge">FastAPI</span>
        </p>
      </div>
    </div>

    <div class="wiki-toc">
      <strong>Contents</strong>
      <ol>
        <li>Professional Summary</li>
        <li>Education</li>
        <li>Technical Highlights</li>
        <li>Contact &amp; Links</li>
      </ol>
    </div>

    <div class="infobox">
  <table>
    <tr><th colspan="2">Harsh Tyagi</th></tr>
    <tr><td>📍 Location</td><td>Pune–Talegaon Dabhade, MH</td></tr>
    <tr><td>📧 Email</td><td>tyagiharsh2627@gmail.com</td></tr>
    <tr><td>🐙 GitHub</td><td>harshtyagi334</td></tr>
    <tr><td>🔗 LinkedIn</td><td>harsh-tyagi-118577312</td></tr>
    <tr><td>🏆 HackerRank</td><td>harshtyagi334</td></tr>
    <tr><th colspan="2">🎓 Education</th></tr>
    <tr><td>📘 12th Standard</td><td>2022-2023</td></tr>
    <tr><td>🎓 Diploma in IT</td><td>2023–2025</td></tr>
    <tr><td>🎓 B.Tech CSE</td><td>2025–2028</td></tr>
  </table>
</div>

    <h2>1. Professional Summary</h2>
    <p>Harsh Tyagi is a Computer Science Engineering student (BE 2028, Pimpri Chinchwad University)
    with proven hands-on experience in <strong>Computer Vision</strong>,
    <strong>Full-Stack Web Development</strong>, and <strong>Generative AI Analytics</strong>.</p>
    <p>He engineered a real-time ANPR system achieving 91%+ accuracy using YOLOv8 + PaddleOCR and
    completed internships at <strong>TATA</strong> and <strong>Gatha Technologies</strong>.
    Holds certifications from TATA, Deloitte, Microsoft, and Tech Mahindra.</p>
    <p>Currently seeking a <strong>Software Development</strong> or <strong>ML Engineering</strong>
    internship to deliver impactful solutions at scale.</p>

    <h2>2. Education</h2>
    <table>
      <tr><th>Degree</th><th>Institution</th><th>Year</th><th>Focus</th></tr>
      <tr><td>BE — CSE</td><td>Pimpri Chinchwad University, Pune</td><td>2025–2028</td><td>DSA, OOP, DB, Software Eng.</td></tr>
      <tr><td>Diploma — IT</td><td>Pimpri Chinchwad Polytechnic, Pune</td><td>2023–2025</td><td>Networks, Web Dev, Systems</td></tr>
    </table>

    <h2>3. Technical Highlights</h2>
    <p>Specialises in Python-based ML pipelines (YOLOv8, PaddleOCR, OpenCV), full-stack web
    development (React.js, FastAPI, MySQL), and GenAI-powered data analytics with Pandas, NumPy,
    and Matplotlib.</p>

    <h2>4. Contact &amp; Links</h2>
    <p>
      📧 <a href="mailto:tyagiharsh2627@gmail.com">tyagiharsh2627@gmail.com</a>
      &nbsp;|&nbsp; 
      &nbsp;|&nbsp; <a onclick="openWindow('contact')">Open Contact Form →</a>
    </p>
    <p>
      <a onclick="openLink('https://github.com/harshtyagi334')">🐱 GitHub</a>
      &nbsp;|&nbsp;
      <a onclick="openLink('https://www.linkedin.com/in/harsh-tyagi-118577312/')">🔗 LinkedIn</a>
      &nbsp;|&nbsp;
      <a onclick="openLink('https://www.hackerrank.com/harsh_tyagi25')">💻 HackerRank</a>
    </p>
  `,

  /* ── PROJECTS ── */
projects: `
    <h1>Projects</h1>
    <p style="margin-bottom:14px;color:#555;font-size:11px;">📂 3 items in C:\\Harsh\\Projects\\ — Double-click any project to read more</p>

    <div class="project-card">
      <h3>🚗 Automatic Number Plate Recognition (ANPR) System</h3>
      <p><strong>Stack:</strong> Python · YOLOv8 · PaddleOCR · OpenCV · FastAPI · HTML/CSS</p>
      <ul>
        <li>Engineered a real-time ANPR system achieving <strong>91%+ plate detection accuracy</strong> on a self-collected dataset of 500+ vehicle images</li>
        <li>Implemented dual-mode input pipeline — static image upload + live webcam feed using OpenCV</li>
        <li>Deployed as a full-stack web application with a Python/FastAPI REST API backend and HTML/CSS frontend (zero client-side install)</li>
        <li>Applied post-processing regex validation on OCR output for multi-format Indian state licence plates</li>
      </ul>
      <div class="tags">
        <span class="badge">YOLOv8</span>
        <span class="badge">PaddleOCR</span>
        <span class="badge">OpenCV</span>
        <span class="badge">FastAPI</span>
        <span class="badge">REST API</span>
        <span class="badge green">91%+ Accuracy</span>
        <span class="badge gray">500+ Images Dataset</span>
      </div>
    </div>

    <div class="project-card">
      <h3>🤝 HereBy — Community Resource &amp; Neediness App</h3>
      <p><strong>Stack:</strong> React.js · Python · Tailwind CSS · MySQL · REST API</p>
      <ul>
        <li>Full-stack community resource platform connecting users with localised NGO, food bank, and emergency support services across the <strong>Pune region</strong></li>
        <li>Responsive, accessible UI with Tailwind CSS featuring category-filtered resource discovery and real-time contact lookup</li>
        <li>RESTful API backend in Python with MySQL database storing <strong>100+ verified local support providers</strong></li>
        <li>Location-based filtering and category search endpoints</li>
      </ul>
      <div class="tags">
        <span class="badge">React.js</span>
        <span class="badge">Python</span>
        <span class="badge">Tailwind CSS</span>
        <span class="badge">MySQL</span>
        <span class="badge">REST API</span>
        <span class="badge green">100+ Providers</span>
      </div>
    </div>

    <div class="project-card">
      <h3>📚 API Documentation Adapter</h3>
      <p><strong>Stack:</strong> JavaScript · OpenAPI/Swagger · React.js · Node.js · REST API</p>
      <ul>
        <li>Dynamic tool that automatically converts raw API specifications (OpenAPI/Swagger files) into clean, interactive, and developer-friendly documentation</li>
        <li>Parses and normalizes data from various API formats, rendering elegant UI with endpoint details, parameters, code samples, and live testing options</li>
        <li>Discover and integrate new APIs directly into your projects — test them in real-time within the application</li>
        <li>Features live API testing console, automatic code snippet generation (cURL, Python, JavaScript), and response validation</li>
        <li>Supports multiple API specification formats including OpenAPI 2.0/3.0, Swagger, and custom JSON schemas</li>
      </ul>
      <div class="tags">
        <span class="badge">OpenAPI 3.0</span>
        <span class="badge">Swagger</span>
        <span class="badge">React.js</span>
        <span class="badge">Node.js</span>
        <span class="badge">API Testing</span>
        <span class="badge green">Live Demo</span>
        <span class="badge gray">Multi-format Support</span>
      </div>
    </div>

    <div class="info-note">
      <strong>💡 Want to collaborate or see source code?</strong>
      Check <a onclick="openLink('https://github.com/harshtyagi334')">GitHub ↗</a>
      or <a onclick="openWindow('contact')">get in touch →</a>
    </div>
  `,
  /* ── SKILLS ── */
  skills: `
    <h1>Technical Skills</h1>

    <h2>Languages</h2>
    <div class="skill-row"><div class="skill-label"><span>Python</span><span>95%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" data-width="95"></div></div></div>
    <div class="skill-row"><div class="skill-label"><span>JavaScript</span><span>82%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" data-width="82"></div></div></div>
    <div class="skill-row"><div class="skill-label"><span>Advanced Java</span><span>75%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" data-width="75"></div></div></div>
    <div class="skill-row"><div class="skill-label"><span>HTML / CSS</span><span>90%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" data-width="90"></div></div></div>
    <div class="skill-row"><div class="skill-label"><span>SQL</span><span>80%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" data-width="80"></div></div></div>

    <h2>Frameworks &amp; Libraries</h2>
    <p>
      <span class="badge">React.js</span><span class="badge">FastAPI</span>
      <span class="badge">Flask</span><span class="badge">NumPy</span>
      <span class="badge">Pandas</span><span class="badge">OpenCV</span>
      <span class="badge">Tailwind CSS</span>
    </p>

    <h2>AI / ML</h2>
    <div class="skill-row"><div class="skill-label"><span>YOLOv8 — Object Detection</span><span>88%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" data-width="88"></div></div></div>
    <div class="skill-row"><div class="skill-label"><span>Computer Vision (OpenCV)</span><span>85%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" data-width="85"></div></div></div>
    <div class="skill-row"><div class="skill-label"><span>Generative AI &amp; Prompt Engineering</span><span>80%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" data-width="80"></div></div></div>
    <div class="skill-row"><div class="skill-label"><span>PaddleOCR</span><span>82%</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" data-width="82"></div></div></div>

    <h2>Tools &amp; Platforms</h2>
    <p>
      <span class="badge">Git</span><span class="badge">GitHub</span>
      <span class="badge">Postman</span><span class="badge">VS Code</span>
      <span class="badge">Linux (basics)</span><span class="badge">REST APIs</span>
    </p>

    <h2>Databases</h2>
    <p><span class="badge">MySQL</span><span class="badge">SQLite</span></p>

    <h2>Soft Skills</h2>
    <p>
      <span class="badge green">Leadership</span>
      <span class="badge green">Problem Solving</span>
      <span class="badge green">Team Collaboration</span>
      <span class="badge green">Quick Learning</span>
      <span class="badge green">Communication</span>
    </p>
  `,

  /* ── EXPERIENCE ── */
  experience: `
    <h1>Work Experience</h1>

    <div class="fb-post">
      <div class="fb-post-header">
        <div class="fb-avatar">H</div>
        <div>
          <div class="fb-user">Harsh Tyagi</div>
          <div class="fb-time">💼 Intern at TATA / Gatha Technologies · Jun 2024</div>
        </div>
      </div>
      <div class="fb-text">
        Starting my internship journey at TATA &amp; Gatha Technologies as a
        <strong>GenAI Powered Data Analytics Intern!</strong> 🚀 Excited to work on
        real-world enterprise analytics workflows and apply AI/ML skills.
        #GenAI #DataAnalytics #Internship #Python
      </div>
      <div class="fb-footer">👍 42 Likes · 7 Comments · Share</div>
    </div>

    <div class="project-card">
      <h3>🏢 GenAI Powered Data Analytics Intern</h3>
      <p style="color:#000080;font-weight:bold;margin-bottom:6px;">
        TATA / Gatha Technologies &nbsp;|&nbsp; Jun 2024 – Aug 2024 &nbsp;|&nbsp; Pune
      </p>
      <ul>
        <li>Analysed structured business datasets using <strong>Python (Pandas, NumPy)</strong> and <strong>SQL</strong> to extract actionable insights, improving reporting turnaround by streamlining manual workflows</li>
        <li>Applied <strong>Generative AI tools</strong> and prompt engineering to automate report summarisation, reducing manual analysis effort significantly</li>
        <li>Built <strong>data visualisation dashboards</strong> using Matplotlib and presented key KPIs to stakeholders, enabling data-driven decision-making</li>
        <li>Gained hands-on experience with <strong>GenAI APIs</strong>, data pipelines, and real-world enterprise analytics workflows</li>
      </ul>
      <div style="margin-top:8px;">
        <span class="badge">Python</span><span class="badge">Pandas</span>
        <span class="badge">NumPy</span><span class="badge">SQL</span>
        <span class="badge">Matplotlib</span><span class="badge">GenAI APIs</span>
        <span class="badge green">Certified by TATA</span>
      </div>
    </div>

    <div class="info-note">
      <strong>📌 Note:</strong> Certified by TATA (via Forage) on completion.
      Currently seeking the next internship in Software Development or ML Engineering.
      <br/><a onclick="openWindow('contact')">→ Get in touch</a>
    </div>

    <h2>Education Timeline</h2>
    <table>
      <tr><th>Year</th><th>Qualification</th><th>Institution</th></tr>
      <tr><td>2025–2028</td><td>BE — Computer Science &amp; Engineering</td><td>Pimpri Chinchwad University, Pune</td></tr>
      <tr><td>2023–2025</td><td>Diploma — Information Technology</td><td>Pimpri Chinchwad Polytechnic, Pune</td></tr>
    </table>
  `,

  /* ── CERTIFICATIONS ── */
  certifications: `
    <h1>Certifications</h1>
    <p style="margin-bottom:14px;color:#555;font-size:11px;">4 certificates verified ✔</p>

    <div class="cert-card">
      <div class="cert-icon">🥇</div>
      <div>
        <div class="cert-title">GenAI Powered Data Analytics</div>
        <div class="cert-meta">TATA (via Forage) · 2024</div>
        <div style="margin-top:4px;"><span class="badge green">Verified ✔</span></div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-icon">🥇</div>
      <div>
        <div class="cert-title">Data Analysis Virtual Experience</div>
        <div class="cert-meta">Deloitte (via Forage) · 2024</div>
        <div style="margin-top:4px;"><span class="badge green">Verified ✔</span></div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-icon">🥇</div>
      <div>
        <div class="cert-title">Cybersecurity Virtual Experience</div>
        <div class="cert-meta">Tech Mahindra · 2024</div>
        <div style="margin-top:4px;"><span class="badge green">Verified ✔</span></div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-icon">🥇</div>
      <div>
        <div class="cert-title">AI to be Aware</div>
        <div class="cert-meta">Microsoft · 2024</div>
        <div style="margin-top:4px;"><span class="badge green">Verified ✔</span></div>
      </div>
    </div>

    <div class="info-note" style="margin-top:12px;">
      <strong>🔗 Issuers:</strong> TATA · Deloitte · Tech Mahindra · Microsoft
    </div>
  `,

  /* ── HACKERRANK ── */
  hackerrank: `
    <h1>HackerRank Profile</h1>
    <p style="margin-bottom:12px;color:#555;font-size:11px;">
      Competitive coding, problem solving &amp; skill certifications on HackerRank.
    </p>

    <table style="margin-bottom:14px;">
      <tr><th colspan="2">Profile Details</th></tr>
      <tr><td>👤 Username</td><td><strong>harshtyagi334</strong></td></tr>
      <tr><td>🌐 Profile URL</td><td><a onclick="openLink('https://www.hackerrank.com/harsh_tyagi25')">hackerrank.com/harshtyagi334</a></td></tr>
      <tr><td>🏆 Focus Areas</td><td>Python · Problem Solving · SQL · Java</td></tr>
    </table>

    <h2>Domain Ratings</h2>
    <div class="hr-domain">
      <span class="hr-name">Python</span>
      <span class="hr-stars">★★★★★</span>
      <span class="badge hr">5 Stars</span>
    </div>
    <div class="hr-domain">
      <span class="hr-name">Problem Solving</span>
      <span class="hr-stars">★★★★☆</span>
      <span class="badge hr">4 Stars</span>
    </div>
    <div class="hr-domain">
      <span class="hr-name">SQL</span>
      <span class="hr-stars">★★★★☆</span>
      <span class="badge hr">4 Stars</span>
    </div>
    <div class="hr-domain">
      <span class="hr-name">Java</span>
      <span class="hr-stars">★★★☆☆</span>
      <span class="badge orange">3 Stars</span>
    </div>

    <p style="font-size:10px;color:#888;margin-top:6px;">
      ⚠️ Update star ratings above to match your actual HackerRank profile.
    </p>

    <div class="info-note" style="margin-top:12px;">
      <strong>💡 Tip:</strong> Update your HackerRank username in <code>js/content.js</code>
      if it differs from <em>harsh_tyagi25/em>.
    </div>

    <button class="hr-visit-btn" onclick="openLink('https://www.hackerrank.com/harsh_tyagi25')">
      💻 Visit HackerRank Profile ↗
    </button>
  `,

  /* ── CONTACT ── */
  contact: `
    <h1>Get In Touch</h1>
    <p style="margin-bottom:12px;">Send Harsh a message or connect via the social links below.</p>

    <table style="margin-bottom:16px;">
      <tr><th colspan="2">Contact Information</th></tr>
      <tr><td>📧 Email</td><td><a href="mailto:tyagiharsh2627@gmail.com">tyagiharsh2627@gmail.com</a></td></tr>
      <tr><td>📍 Location</td><td>Pune–Talegaon Dabhade, Maharashtra, India</td></tr>
      <tr><td>🐱 GitHub</td><td><a onclick="openLink('https://github.com/harshtyagi334')">github.com/harshtyagi334</a></td></tr>
      <tr><td>🔗 LinkedIn</td><td><a onclick="openLink('https://www.linkedin.com/in/harsh-tyagi-118577312/')">linkedin.com/in/harsh-tyagi-118577312</a></td></tr>
      <tr><td>💻 HackerRank</td><td><a onclick="openLink('https://www.hackerrank.com/harsh_tyagi25')">hackerrank.com/harshtyagi334</a></td></tr>
    </table>

    <h2>Send a Message</h2>
    <div class="win-form">
      <label>Your Name: *</label>
      <input type="text"  id="c-name"    placeholder="Enter your name"/>
      <label>Email Address: *</label>
      <input type="email" id="c-email"   placeholder="your@email.com"/>
      <label>Subject:</label>
      <input type="text"  id="c-subject" placeholder="Internship opportunity, collaboration..."/>
      <label>Message: *</label>
      <textarea           id="c-msg"     placeholder="Write your message here..."></textarea>
      <button class="submit-btn" onclick="sendMsg()">📨 Send Message</button>
    </div>
  `
};

/**
 * Inject all content into window bodies on DOMContentLoaded.
 * Progress bars are animated separately by app.js after window is opened.
 */
document.addEventListener('DOMContentLoaded', () => {
  Object.keys(CONTENT).forEach(key => {
    const el = document.getElementById('content-' + key);
    if (el) el.innerHTML = CONTENT[key];
  });
});
