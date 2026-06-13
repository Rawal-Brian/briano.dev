import profile from "./assets/profile.jpg";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function App() {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess(false);
    setLoading(true);

    emailjs
      .sendForm(
        "service_96qhcei",
        "template_9w7g8jk",
        form.current!,
        "AfEt6Jyx7a5yX0cqw"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current?.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        },
        () => {
          setLoading(false);
          alert("Message failed to send. Try again.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen font-sans relative overflow-hidden pt-24">
      
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
    <div className="max-w-5xl mx-auto px-6"></div>

      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <h1 className="text-lg font-bold truncate">
          Brian Ignatious Otieno
        </h1>

        <a
          href="https://github.com/Rawal-Brian"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 md:mr-4 inline-flex items-center gap-2 border border-gray-700 px-3 py-2 text-sm rounded-lg hover:bg-blue-500 hover:text-black transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white/80"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12C0 16.97 3.438 21.157 8.205 22.385C8.805 22.498 9.025 22.127 9.025 21.77C9.025 21.447 9.012 20.385 9.008 19.11C5.672 19.843 4.968 17.726 4.968 17.726C4.422 16.341 3.633 15.957 3.633 15.957C2.545 15.213 3.717 15.229 3.717 15.229C4.922 15.313 5.555 16.466 5.555 16.466C6.625 18.301 8.362 17.771 9.05 17.465C9.158 16.69 9.468 16.164 9.81 15.864C7.145 15.559 4.344 14.532 4.344 9.933C4.344 8.623 4.813 7.551 5.579 6.711C5.455 6.408 5.043 5.187 5.696 3.535C5.696 3.535 6.704 3.213 8.997 4.765C9.979 4.498 11.003 4.362 12.027 4.356C13.051 4.362 14.075 4.498 15.057 4.765C17.35 3.213 18.358 3.535 18.358 3.535C19.011 5.187 18.599 6.408 18.475 6.711C19.241 7.551 19.71 8.623 19.71 9.933C19.71 14.543 16.904 15.556 14.234 15.852C14.666 16.223 15.057 16.954 15.057 18.074C15.057 19.679 15.043 21.338 15.043 21.77C15.043 22.13 15.261 22.503 15.865 22.385C20.565 21.154 24 16.97 24 12C24 5.37 18.63 0 12 0Z" />
          </svg>

          <span>GitHub</span>
        </a>
      </nav>

      
    <section className="mt-20 text-center px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>

      <p className="text-gray-400 leading-relaxed">
        I am an Automation Software Testing Software Testing & Quality Specialist with expertise in Playwright
        and TypeScript, specializing in building scalable automation frameworks for
        enterprise applications. I have hands-on experience in
        validating complex data systems, managing cloud-based databases such as
        Snowflake, Oracle, PostgreSQL, and SQL Server.
        <br /><br />
        I focus on delivering high-quality, reliable solutions through automation,
        CI/CD integration, and data validation techniques. Passionate about solving
        complex testing challenges and leading high-performing teams.
      </p>
    </section>


      {/* HERO SECTION */}
      
      <section className="mt-24 px-6 flex flex-col items-center text-center">
        
        <img
          src={profile}
          alt="Profile"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-6 border-4 border-blue-500 shadow-lg"
        />

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]"
        >
          Automation Testing <br />
          <span className="text-blue-500">Software Development Engineer in Test (SDET)</span>
        </motion.h1>

      </section>



      {/* SKILLS */}
      
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24 px-6 md:px-10"
      >

        <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Playwright",
            "TypeScript",
            "Snowflake",
            "PostgreSQL",
            "Oracle DB",
            "API Testing",
            "CI/CD",
            "Cloud Servers",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl text-center hover:scale-105 hover:border-blue-500 transition duration-300 cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24 px-6 md:px-10"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Data Refresh Automation",
              desc: "Automation solution to refresh and manage data deletion workflows efficiently.",
              tech: ["HTML", "JavaScript", "Automation"],
              link: "https://github.com/Rawal-Brian/Refreshing-For-Deletion-Of-Rows",
            },
            {
              name: "Google Cloud Management",
              desc: "Cloud-integrated testing solution with analytics tracking validation.",
              tech: ["HTML", "Cloud", "Analytics"],
              link: "https://github.com/Rawal-Brian/ga4-test-site",
            },
            {
              name: "Gym Website Template",
              desc: "Responsive frontend template built for modern fitness applications.",
              tech: ["Python", "JavaScript", "HTML", "CSS"],
              link: "https://github.com/Rawal-Brian/Gym-Website-Template",
              demo: "https://your-live-site-link.com",
            },
            {
              name: "ServiceStack Benchmarks",
              desc: "Performance benchmarking project for API services and backend systems.",
              tech: ["C#", ".NET", "HTML", "CSS"],
              link: "https://github.com/Rawal-Brian/ServiceStack.Benchmarks",
            },
            {
              name: "Okellooregeart Website",
              desc: "Complete website development with integrated digital marketing features, social media management tools, and content management system.",
              tech: ["React", "TypeScript", "Tailwind CSS", "CMS"],
              link: "https://github.com/E-Gilbert/oregeart",
              demo: "https://okellooregeart.com/",
            },
          ].map((proj) => (
            <div
              key={proj.name}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:scale-105 transition duration-300"
            >
              {/* TOP CONTENT */}
              <div>
                <h3 className="text-xl font-bold">{proj.name}</h3>

                <p className="text-gray-400 mt-3">
                  {proj.desc}
                </p>

                {/* ✅ TECH TAGS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-400/30 shadow-[0_0_6px_rgba(59,130,246,0.5)] hover:shadow-[0_0_12px_rgba(59,130,246,0.9)] transition"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* ✅ VIEW BUTTON */}
              
              <div className="mt-6 flex gap-3 flex-wrap">

                {/* ✅ GITHUB BUTTON */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition shadow-[0_0_10px_rgba(59,130,246,0.7)] hover:shadow-[0_0_20px_rgba(59,130,246,1)]"
                >
                  {/* GitHub Icon */}
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/80"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12C0 16.97 3.438 21.157 8.205 22.385C8.805 22.498 9.025 22.127 9.025 21.77C9.025 21.447 9.012 20.385 9.008 19.11C5.672 19.843 4.968 17.726 4.968 17.726C4.422 16.341 3.633 15.957 3.633 15.957C2.545 15.213 3.717 15.229 3.717 15.229C4.922 15.313 5.555 16.466 5.555 16.466C6.625 18.301 8.362 17.771 9.05 17.465C9.158 16.69 9.468 16.164 9.81 15.864C7.145 15.559 4.344 14.532 4.344 9.933C4.344 8.623 4.813 7.551 5.579 6.711C5.455 6.408 5.043 5.187 5.696 3.535C5.696 3.535 6.704 3.213 8.997 4.765C9.979 4.498 11.003 4.362 12.027 4.356C13.051 4.362 14.075 4.498 15.057 4.765C17.35 3.213 18.358 3.535 18.358 3.535C19.011 5.187 18.599 6.408 18.475 6.711C19.241 7.551 19.71 8.623 19.71 9.933C19.71 14.543 16.904 15.556 14.234 15.852C14.666 16.223 15.057 16.954 15.057 18.074C15.057 19.679 15.043 21.338 15.043 21.77C15.043 22.13 15.261 22.503 15.865 22.385C20.565 21.154 24 16.97 24 12C24 5.37 18.63 0 12 0Z"/>
                  </svg>

                  View Code
                </a>

                {/* ✅ LIVE DEMO BUTTON (ONLY IF EXISTS) */}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition shadow-[0_0_10px_rgba(59,130,246,0.7)] hover:shadow-[0_0_20px_rgba(59,130,246,1)]"
                  >
                    🚀 Live Demo
                  </a>
                )}

              </div>

            </div>
          ))}
        </div>
      </motion.section>


       {/* FOOTER */}
      <footer className="mt-24 border-t border-gray-800 bg-black/40 backdrop-blur-md">

        <div className="max-w-5xl mx-auto px-6 py-10 text-center">

          {/* TITLE */}
          <h3 className="text-xl font-semibold mb-4">
            Let's Connect & Collaborate
          </h3>

          <p className="text-gray-400 text-sm mb-8">
            Open to collaboration, automation consulting, and leadership roles.
          </p>

          {/* CONTACT LINKS */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">

            {/* EMAIL */}
            <a
              href="mailto:bryanignatius379@gmail.com"
              className="inline-flex items-center gap-2 border border-gray-700 px-4 py-3 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-black transition"
            >
              <MdEmail />
              <span className="text-sm">Email</span>
            </a>

            {/* PHONE */}
            <a
              href="tel:+254793805140"
              className="inline-flex items-center gap-2 border border-gray-700 px-4 py-3 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-black transition"
            >
              <FaPhoneAlt />
              <span className="text-sm">Phone</span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/brian-otieno-51b06a293/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-700 px-4 py-3 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-black transition"
            >
              <FaLinkedin />
              <span className="text-sm">LinkedIn</span>
            </a>

          </div>

          {/* CONTACT FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-xl mx-auto space-y-4 text-left"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white"
            />

            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-500 text-black font-semibold hover:bg-blue-600 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 text-sm text-center transition-opacity duration-500">
                Message sent successfully ✅
              </p>
            )}

          </form>

          {/* COPYRIGHT */}
          <p className="text-gray-500 text-xs mt-10">
            © {new Date().getFullYear()} Brian Ignatious Otieno. All Rights Reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}
        