import {
    IconBriefcase,
    IconBrandGithub,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandLinkedin,
  } from '@tabler/icons-react';
  
  const Footer = () => {
    return (
      <footer className="pt-12  bg-mine-shaft-900 text-mine-shaft-200 py-8 px-10">
        <div className="max-w-7xl mx-auto">
          {/* Grid Container for Four Equal Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Company Info */}
            <div>
              <div className="flex gap-3 items-center text-bright-sun-300 mb-4">
                <IconBriefcase stroke={2} className="h-6 w-6" />
                <div className="text-xl font-semibold">JOB ZONE</div>
              </div>
              <p className="text-sm mb-4">
                Job portal with user profiles, skills updates, certifications, work experience, and admin job postings.
              </p>
              <div className="flex text-bright-sun-400 gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-mine-shaft-800 p-2 rounded-full hover:bg-bright-sun-300 transition-colors">
                  <IconBrandFacebook stroke={2} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-mine-shaft-800 p-2 rounded-full hover:bg-bright-sun-300 transition-colors">
                  <IconBrandGithub stroke={2} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-mine-shaft-800 p-2 rounded-full hover:bg-bright-sun-300 transition-colors">
                  <IconBrandInstagram stroke={2} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-mine-shaft-800 p-2 rounded-full hover:bg-bright-sun-300 transition-colors">
                  <IconBrandTwitter stroke={2} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-mine-shaft-800 p-2 rounded-full hover:bg-bright-sun-300 transition-colors">
                  <IconBrandLinkedin stroke={2} />
                </a>
              </div>
            </div>
  
            {/* 2. Quick Links */}
            <div>
              <h4 className="text-bright-sun-300 text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="hover:text-bright-sun-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/jobs" className="hover:text-bright-sun-400 transition-colors">
                    Find Jobs
                  </a>
                </li>
                <li>
                  <a href="/employers" className="hover:text-bright-sun-400 transition-colors">
                    Employers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-bright-sun-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* 3. Resources */}
            <div>
              <h4 className="text-bright-sun-300 text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/blog" className="hover:text-bright-sun-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/help" className="hover:text-bright-sun-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-bright-sun-400 transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-bright-sun-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
  
            {/* 4. Contact Info */}
            <div>
              <h4 className="text-bright-sun-300 text-lg font-semibold mb-4 font-[poppins]  py-3">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li>1234 Job Zone St.</li>
                <li>Pune, Maharashtra 431110</li>
                <li>
                  Email:{' '}
                  <a href="mailto:support@jobzone.com" className="hover:text-bright-sun-400 transition-colors">
                    prashantnetke43@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{' '}
                  <a href="tel:+1234567890" className="hover:text-bright-sun-400 transition-colors">
                    +91 9284172429
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-8 text-center text-sm border-t border-mine-shaft-800 pt-4">
            &copy; {new Date().getFullYear()} Job Zone. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  