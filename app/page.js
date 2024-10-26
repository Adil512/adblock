// app/page.js
"use client";

import { useState } from 'react';

function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      category: "Privacy",
      title: "How Ad Tracking Is Secretly Compromising Your Online Privacy",
      excerpt: "Discover the hidden ways advertisers track your online activity and learn how ad blockers protect your digital footprint.",
      readTime: "5 min read",
      date: "Feb 15, 2024",
      image: "/images/1.jpg",
      author: {
        name: "Alex Thompson",
        role: "Privacy Expert",
        avatar: "/images/adil.jpg"
      },
      gradient: "from-purple-500 to-blue-500"
    },
    {
      id: 2,
      category: "Performance",
      title: "Why Your Browser Is Slow: The True Cost of Online Ads",
      excerpt: "An in-depth analysis of how ads affect website loading times and your device's performance.",
      readTime: "4 min read",
      date: "Feb 12, 2024",
      image: "/images/2.jpg",
      author: {
        name: "Sarah Chen",
        role: "Tech Analyst",
        avatar: "/images/adil.jpg"
      },
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      category: "Security",
      title: "Malvertising: When Ads Become Security Threats",
      excerpt: "Understanding the rising threat of malicious advertisements and how to protect yourself.",
      readTime: "6 min read",
      date: "Feb 10, 2024",
      image: "/images/2.jpg",
      author: {
        name: "Michael Roberts",
        role: "Security Researcher",
        avatar: "/images/adil.jpg"
      },
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Latest Insights
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6">
            Learn More About Online Privacy & Security
          </h2>
          <p className="text-gray-600 text-lg">
            Expert insights, tips, and deep dives into the world of ad blocking and online privacy
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-90`}></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-sm">{post.author.name}</div>
                      <div className="text-gray-500 text-xs">{post.author.role}</div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <a
                    href={`/blog/post/${post.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group"
                  >
                    Read More
                    <svg 
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-16">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow font-semibold group"
          >
            View All Posts
            <svg 
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        
      </div>
    </section>
  );
}
function TrustIndicators() {
  const trustFeatures = [
    {
      id: 1,
      title: "Security Verified",
      description: "Regular security audits and certified by leading security firms",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: "100% Secure",
      color: "green"
    },
    {
      id: 2,
      title: "Privacy Focused",
      description: "We never collect or sell your personal data. Your privacy is our priority.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      stats: "Zero Data Collection",
      color: "blue"
    },
    {
      id: 3,
      title: "Community Trusted",
      description: "Open source and trusted by millions of users worldwide",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      stats: "10M+ Users",
      color: "purple"
    },
    {
      id: 4,
      title: "Chrome Verified",
      description: "Officially verified and recommended by Chrome Web Store",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      stats: "Featured Extension",
      color: "yellow"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 bg-${feature.color}-100 rounded-full`}>
                  <div className={`text-${feature.color}-600`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>

              {/* Stats */}
              <div className={`text-${feature.color}-600 font-semibold text-sm`}>
                {feature.stats}
              </div>

              {/* Decorative Element */}
              <div className={`h-1 w-16 bg-${feature.color}-500 rounded-full mt-4 opacity-50`}></div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          {/* Replace these with actual trust badges */}
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">McAfee SECURE</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm0-3a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Norton Secured</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Chrome Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
function FAQSection() {
  // FAQ data array - easy to add more items
  const faqs = [
    {
      id: 1,
      question: "How effective is the Ad Blocker at blocking ads?",
      answer: "Our Ad Blocker achieves a 99.9% success rate in blocking unwanted ads across all websites. It uses advanced pattern matching and AI-powered filtering to identify and block ads, pop-ups, and banners before they can load, while ensuring legitimate content remains unaffected.",
      category: "Performance"
    },
    {
      id: 2,
      question: "Will Ad Blocker slow down my browsing speed?",
      answer: "No, quite the opposite! Our Ad Blocker is optimized for performance and typically improves loading times by 30-50% by preventing ad content from loading. It uses minimal system resources and is designed to run efficiently in the background.",
      category: "Performance"
    },
    {
      id: 3,
      question: "Is Ad Blocker safe to use with my banking websites?",
      answer: "Absolutely! Our Ad Blocker is designed with security in mind and never interferes with secure connections. It automatically whitelists banking and other sensitive websites, ensuring your financial transactions remain completely safe and private.",
      category: "Security"
    },
    {
      id: 4,
      question: "How does Ad Blocker protect my privacy?",
      answer: "Ad Blocker includes comprehensive privacy protection features including tracker blocking, fingerprint prevention, and cookie control. It blocks known malicious domains, cryptocurrency miners, and aggressive tracking scripts while maintaining your anonymity online.",
      category: "Privacy"
    },
    {
      id: 5,
      question: "Can I customize which ads to block?",
      answer: "Yes! Ad Blocker offers granular control over your blocking preferences. You can create custom filter lists, whitelist specific websites or elements, and toggle different categories of ads. Our intuitive interface makes it easy to adjust settings to your exact preferences.",
      category: "Features"
    },
    {
      id: 6,
      question: "Does Ad Blocker work with YouTube and streaming services?",
      answer: "Yes, Ad Blocker effectively removes ads from YouTube, Twitch, and other streaming platforms. It blocks pre-roll, mid-roll, and post-roll video ads, as well as banner ads and sponsored content overlays, ensuring uninterrupted viewing experience.",
      category: "Compatibility"
    },
    {
      id: 7,
      question: "How often is Ad Blocker updated?",
      answer: "We release updates weekly to maintain optimal blocking effectiveness and security. Our filter lists are updated daily to combat new ad formats and threats. The extension automatically updates in the background, requiring no action from users.",
      category: "Updates"
    },
    {
      id: 8,
      question: "Will Ad Blocker break website functionality?",
      answer: "No, Ad Blocker is designed to preserve website functionality while removing ads. Our smart detection system distinguishes between necessary website elements and advertisements. In rare cases where an issue occurs, you can easily disable the blocker for specific sites.",
      category: "Compatibility"
    }
  ];

  // State for tracking opened FAQ items
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories from FAQs
  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];

  // Filter FAQs based on selected category
  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* FAQ Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our Ad Blocker
          </p>
        </div>

        {/* Category Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Question Header */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Answer Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4 pt-2">
                    <div className="pl-12">
                      <p className="text-gray-600">{faq.answer}</p>
                      {/* Category Tag */}
                      <span className="inline-block mt-4 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions Card */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6 opacity-90">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SEOContentSection() {
  const contentBlocks = [
    {
      id: 1,
      title: "Why Choose Our Ad Blocker for Chrome?",
      content: "Experience the web as it should be with our powerful Chrome Ad Blocker. Built with advanced filtering technology, our ad blocker effectively removes intrusive advertisements, pop-ups, and unwanted content while maintaining website functionality. Unlike basic ad blockers, our solution uses smart algorithms to distinguish between necessary website elements and unwanted ads.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Enhanced Browsing Security and Privacy",
      content: "Protect yourself from malicious ads and tracking with our comprehensive security features. Our ad blocker not only removes ads but also blocks known malware domains, cryptocurrency miners, and aggressive trackers. By eliminating these threats, we help maintain your privacy and reduce the risk of encountering harmful content while browsing.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  const features = [
    {
      category: "Ad Blocking",
      features: [
        { name: "Video Ad Blocking", us: true, others: false },
        { name: "Social Media Ads", us: true, others: "Limited" },
        { name: "Pop-up Blocking", us: true, others: true },
        { name: "Banner Ads", us: true, others: true },
        { name: "YouTube Ads", us: true, others: "Partial" },
        { name: "Twitch Ads", us: true, others: false }
      ]
    },
    {
      category: "Privacy & Security",
      features: [
        { name: "Tracker Blocking", us: true, others: "Limited" },
        { name: "Malware Protection", us: true, others: false },
        { name: "Cookie Control", us: true, others: false },
        { name: "HTTPS Encryption", us: true, others: "Limited" },
        { name: "Privacy Reports", us: true, others: false }
      ]
    },
    {
      category: "Performance",
      features: [
        { name: "Load Time Optimization", us: true, others: "Limited" },
        { name: "Memory Usage", us: "Low", others: "High" },
        { name: "CPU Usage", us: "Low", others: "Medium" },
        { name: "Battery Impact", us: "Minimal", others: "High" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Enhanced Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            #1 Rated Ad Blocker for Chrome
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Experience the Web Without 
            <span className="text-blue-600"> Interruptions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced ad blocking technology that puts you in control of your browsing experience
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { number: "100M+", label: "Users Worldwide" },
              { number: "4.9/5", label: "User Rating" },
              { number: "99.9%", label: "Ad Block Rate" },
              { number: "2x", label: "Faster Browsing" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Blocks */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-16">
            {contentBlocks.map((block) => (
              <div key={block.id} className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-16 text-blue-600">
                    {block.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {block.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {block.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Comparison Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Most Comprehensive Ad Blocker
          </h2>
          
          {features.map((section, sIndex) => (
            <div key={sIndex} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                {section.category}
              </h3>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-gray-600">Feature</th>
                      <th className="px-6 py-4 text-center text-gray-600 w-1/4">Our Ad Blocker</th>
                      <th className="px-6 py-4 text-center text-gray-600 w-1/4">Other Ad Blockers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.features.map((feature, index) => (
                      <tr key={index} className="border-t hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-900">{feature.name}</td>
                        <td className="px-6 py-4 text-center">
                          {feature.us === true ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          ) : (
                            <span className="text-blue-600 font-medium">{feature.us}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {feature.others === true ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          ) : feature.others === false ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </span>
                          ) : (
                            <span className="text-gray-500 font-medium">{feature.others}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

         
          {/* Enhanced CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Browse Faster and Safer?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join millions of users who trust our ad blocker for a cleaner browsing experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#download"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg font-semibold"
              >
                Install Now - Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// First Component: PlatformsSection
function PlatformsSection() {
  const platforms = [
    {
      id: 1,
      name: "YouTube",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      description: "Skip all ads automatically and enjoy uninterrupted video streaming",
      stats: "Block 100% of video ads",
      features: ["Pre-roll ads", "Mid-roll interruptions", "Banner ads", "Sponsored overlays"],
      gradient: "from-red-500/10 to-red-500/5"
    },
    {
      id: 2,
      name: "Twitch",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
        </svg>
      ),
      description: "Eliminate all types of ads while supporting your favorite streamers",
      stats: "Remove all ad breaks",
      features: ["Stream ads", "Banner ads", "Following notifications", "Recommended channels"],
      gradient: "from-purple-500/10 to-purple-500/5"
    },
    {
      id: 3,
      name: "Social Media",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      ),
      description: "Clean up your social media feeds from sponsored content and ads",
      stats: "Remove sponsored content",
      features: ["Sponsored posts", "Suggested content", "Story ads", "Marketplace ads"],
      gradient: "from-blue-500/10 to-blue-500/5"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Block Ads Everywhere You Go
          </h2>
          <p className="text-xl text-gray-600">
            Experience a cleaner, faster, and more secure internet across all your favorite platforms
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${platform.gradient} border border-gray-200 p-8 group hover:shadow-xl transition-all duration-300`}
            >
              {/* Platform Icon & Name */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold">{platform.name}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                {platform.description}
              </p>

              {/* Stats */}
              <div className="bg-white/60 rounded-xl p-4 mb-6">
                <p className="text-lg font-semibold text-gray-900">
                  {platform.stats}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3">
                {platform.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect Decoration */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br from-white/5 to-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Privacy Protection",
              description: "Block tracking scripts and protect your online privacy"
            },
            {
              title: "Faster Loading",
              description: "Pages load up to 2x faster without ads and trackers"
            },
            {
              title: "Battery Saving",
              description: "Reduce resource usage and extend battery life"
            },
            {
              title: "Cross-Platform",
              description: "Works seamlessly across all your devices"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function InstallationGuideSection() {
  const installSteps = [
    {
      id: 1,
      title: "Add to Chrome",
      description: "Click the 'Add to Chrome' button at the top of this page",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
      screenshot: "/images/1.jpg",
      accent: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Confirm Installation",
      description: "Click 'Add Extension' in the popup to confirm",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      screenshot: "/images/2.jpg",
      accent: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Start Blocking",
      description: "That's it! Ads will be automatically blocked as you browse",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      screenshot: "/images/3.jpg",
      accent: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gray-50 skew-y-3 transform origin-top-right"></div>
      
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Install in Just 30 Seconds
          </h2>
          <p className="text-xl text-gray-600">
            Quick, easy, and free. Start enjoying an ad-free browsing experience today.
          </p>
        </div>

        {/* Installation Steps */}
        <div className="max-w-6xl mx-auto">
          {installSteps.map((step, index) => (
            <div 
              key={step.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 mb-20 last:mb-0`}
            >
              {/* Step Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.accent} flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 mb-1">
                      Step {step.id}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Quick Tips */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h4 className="font-semibold mb-2">💡 Quick Tip</h4>
                  <p className="text-gray-600">
                    {index === 0 && "Look for the chrome web store verification badge for security"}
                    {index === 1 && "Review the permissions to understand what you're allowing"}
                    {index === 2 && "You can customize blocking settings from the extension icon"}
                  </p>
                </div>
              </div>

              {/* Step Screenshot */}
              <div className="flex-1">
                <div className="relative">
                  {/* Screenshot Frame */}
                  <div className="bg-white rounded-xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <img 
                      src={step.screenshot} 
                      alt={`Step ${step.id}`}
                      className="rounded-b-lg w-full"
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -z-10 w-full h-full top-6 left-6 rounded-xl bg-gradient-to-r ${step.accent} opacity-20`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <a
            href="#install"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Install Now - It's Free
          </a>
        </div>
      </div>
    </section>
  );
}
// Second Component: TestimonialsSection
function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Adil Balti",
      role: "Digital Marketing Manager",
      image: "/images/adil.jpg",
      rating: 5,
      text: "Absolutely revolutionary! This tool has transformed how I work online. The interface is intuitive, and the results are incredible.",
      highlight: "98% reduction in unwanted content"
    },
    {
      id: 2,
      name: "Adil Balti",
      role: "Software Engineer",
      image: "/images/adil.jpg",
      rating: 5,
      text: "As a developer, I've tried many similar tools, but this one stands out. The performance impact is minimal, and the effectiveness is outstanding.",
      highlight: "16,000+ items blocked"
    },
    {
      id: 3,
      name: "Adil Balti",
      role: "Content Creator",
      image: "/images/adil.jpg",
      rating: 5,
      text: "This has been a game-changer for my daily browsing. The customization options are extensive, and the support team is incredibly responsive.",
      highlight: "40% faster browsing"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Millions of Users
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join over 200,000 satisfied users who have transformed their browsing experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-50 rounded-full opacity-50" />
              
              {/* Content Container */}
              <div className="relative">
                {/* User Info */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Highlight Box */}
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-blue-700 font-semibold">
                    {testimonial.highlight}
                  </p>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 italic">"{testimonial.text}"</p>

                {/* Decorative Quote Icon */}
                <div className="absolute -right-2 -bottom-2 text-gray-100">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4zm-1.2 12H18v4h2.8v-4zm-12 0H6v4h2.8v-4z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Component: Home
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px]">
                {/* Plant decoration */}
                <div className="absolute -left-8 bottom-0 w-24 h-24 bg-emerald-400 rounded-full opacity-80"></div>
                
                {/* Main illustration */}
                <div className="relative bg-white p-8 rounded-lg shadow-lg transform rotate-3">
                  {/* Laptop frame */}
                  <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    {/* Chrome logo placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-full"></div>
                    {/* Stop sign */}
                    <div className="w-16 h-16 bg-red-500 rounded-full ml-4 flex items-center justify-center">
                      <span className="text-white text-2xl">✋</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              #1 Ad Blocker for Chrome
              </h1>
              
              <p className="text-lg text-gray-600">
                Experience the web like never before! Block unwanted content, enhance your browsing experience, 
                and enjoy a faster, cleaner web. With over 200,000 five-star reviews, our product is the most 
                trusted solution for Chrome users.
              </p>

              {/* CTA Button */}
              <a
                href="#download"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors w-full md:w-auto text-center"
              >
                Get MyProduct for Chrome
              </a>

              {/* Reviews */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      {star}
                    </span>
                  ))}
                </div>
                <span className="font-semibold">226,173</span>
                <span className="text-gray-600">five star reviews and counting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* Trust Indicators - Add right after Hero */}
      <TrustIndicators />           
      {/* Platforms Section */}
      <PlatformsSection />
       {/* Installation Guide Section */}
      <InstallationGuideSection />  
      {/* SEO Content Section - Add this before Testimonials */}
      <SEOContentSection />         
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* BlogSection */}
      <BlogSection />
      {/* FAQ Section - Add this before closing main tag */}
      <FAQSection />
      
    </main>
  );
}