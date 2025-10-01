import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Globe, MessageSquare, Calendar, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedHowWeWork from '../components/AnimatedHowWeWork';
import { LampContainer } from '../components/ui/lamp-colored';
import { motion } from 'framer-motion';
import '../styles/animated-how-we-work.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Users size={48} />,
      name: 'Lead Generation & CRM Integration',
      description: 'Transform your lead generation with intelligent automation that captures, qualifies, and nurtures prospects 24/7.',
      path: '/services/lead-generation',
      features: [
        'Automated lead capture from multiple channels',
        'Smart lead qualification and scoring',
        'Seamless CRM integration and data sync',
        'Personalized follow-up sequences'
      ]
    },
    {
      icon: <Globe size={48} />,
      name: 'Website Development',
      description: 'Build high-converting websites and landing pages designed specifically for lead generation and automation.',
      path: '/services/website-development',
      features: [
        'Mobile-responsive design',
        'Built-in lead capture forms',
        'SEO optimization',
        'Analytics and conversion tracking'
      ]
    },
    {
      icon: <MessageSquare size={48} />,
      name: 'AI Chat & Customer Support',
      description: 'Deploy intelligent chatbots that provide instant, personalized customer support while learning from every interaction.',
      path: '/services/ai-chat',
      features: [
        'Custom-trained AI chatbots',
        '24/7 automated customer support',
        'Multi-language support capabilities',
        'Seamless handoff to human agents'
      ]
    },
    {
      icon: <Calendar size={48} />,
      name: 'Appointment Setting',
      description: 'Automate your entire booking process with AI that qualifies prospects and schedules high-value meetings.',
      path: '/services/appointment-setting',
      features: [
        'Smart prospect qualification',
        'Automated calendar management',
        'Follow-up and reminder sequences',
        'No-show reduction strategies'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section with Green Lamp Effect */}
      <LampContainer className="bg-black w-full min-h-screen" lampColor="green">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="text-green-400 animate-bounce-gentle" size={48} />
        </div>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-white to-green-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 text-center text-xl text-gray-300 max-w-3xl"
        >
          Complete AI automation solutions designed to scale your business and maximize ROI
        </motion.p>
      </LampContainer>

      <div className="container mx-auto px-6 py-16">

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/50 hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-green-400 mb-6 group-hover:text-purple-400 transition-all duration-300 animate-bounce-gentle">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.name}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-green-400 font-semibold mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to={service.path}
                className="flex items-center gap-2 bg-black border-2 border-green-400/50 text-white px-6 py-3 rounded-full hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group-hover:transform group-hover:translate-x-1"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantee Section with Expected Results */}
        <div className="bg-green-400/10 border border-green-400/30 rounded-2xl p-8 mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <CheckCircle className="text-green-400" size={32} />
            <h3 className="text-2xl font-bold text-green-400">Expected Results</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="font-semibold text-green-400 mb-2">Lead Generation & CRM Integration</h4>
              <p className="text-gray-300 text-xs">Increase qualified leads by 200-400% while reducing manual work by 85%</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="font-semibold text-green-400 mb-2">AI Chat & Customer Support</h4>
              <p className="text-gray-300 text-xs">Reduce support tickets by 70-90% and improve customer satisfaction</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="font-semibold text-green-400 mb-2">Intelligent Appointment Setting</h4>
              <p className="text-gray-300 text-xs">Book 3x more qualified appointments with 60% fewer no-shows</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="font-semibold text-green-400 mb-2">Conversion-Optimized Websites</h4>
              <p className="text-gray-300 text-xs">Increase website conversions by 150-300% with professional design</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <AnimatedHowWeWork />

        {/* Book Consultation Section - Moved to Bottom */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-black border-2 border-green-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 hover:transform hover:scale-105 transition-all duration-300"
          >
            Book a Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;