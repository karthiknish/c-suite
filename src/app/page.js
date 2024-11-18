"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <motion.div
            className="relative h-[400px] md:h-[600px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/cfos.png"
              alt="Professional executive team"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 max-w-xl"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              World-Class C-Suite Leadership, Fractional Commitment
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Access seasoned C-Suite executives tailored to your
              needs—strategic guidance without the full-time commitment. Our
              elite team brings decades of experience across industries to help
              you navigate complex challenges and drive sustainable growth.
              Scale smarter, lead stronger with flexible executive solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="w-fit">
                <a
                  href="https://profici.co.uk/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started Today
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-fit">
                <a
                  href="https://profici.co.uk/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.section
          className="py-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Executive Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our extensive range of executive services designed to
              elevate your business through strategic leadership and operational
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fractional CFO",
                description:
                  "Strategic financial leadership and planning without the full-time commitment. Get expert guidance on financial strategy, fundraising, M&A, and operational optimization.",
                features: [
                  "Financial Strategy & Planning",
                  "Cash Flow Optimization",
                  "Investment & Funding Strategy",
                  "Risk Management",
                ],
              },
              {
                title: "Interim CEO",
                description:
                  "Experienced leadership during transitions or growth phases. Navigate critical periods with confidence while maintaining operational continuity.",
                features: [
                  "Strategic Planning",
                  "Organizational Development",
                  "Change Management",
                  "Stakeholder Relations",
                ],
              },
              {
                title: "Advisory Board",
                description:
                  "Access to a network of experienced executives for strategic guidance. Tap into diverse expertise across industries and functional areas.",
                features: [
                  "Strategic Consulting",
                  "Industry Expertise",
                  "Network Access",
                  "Growth Planning",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="py-24 bg-gray-50 rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center px-6">
            <Badge variant="secondary" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Unparalleled Expertise That Drives Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "20+ Years Average Experience",
                  description:
                    "Our executives bring decades of hands-on leadership experience across Fortune 500 companies and successful startups",
                },
                {
                  title: "Flexible Engagement Models",
                  description:
                    "Customized solutions that scale with your needs, from project-based consulting to ongoing executive leadership",
                },
                {
                  title: "Industry-Specific Expertise",
                  description:
                    "Deep knowledge across technology, finance, healthcare, manufacturing, and more",
                },
                {
                  title: "Proven Track Record",
                  description:
                    "Consistent success in driving growth, managing transitions, and optimizing operations",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-sm"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transforming Businesses Through Strategic Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself - see how our executive
              leadership has driven measurable results across industries and
              company sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "150%",
                description: "Average Revenue Growth",
                subtext: "Achieved within first 18 months of engagement",
              },
              {
                metric: "£50M+",
                description: "Capital Raised",
                subtext: "Through strategic fundraising and investor relations",
              },
              {
                metric: "90%",
                description: "Client Retention Rate",
                subtext: "Long-term partnerships driving sustained success",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-50 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.metric}
                </h3>
                <p className="text-gray-900 font-semibold mb-2">
                  {stat.description}
                </p>
                <p className="text-sm text-gray-600">{stat.subtext}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="py-24 bg-gray-900 text-white rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6">
              Take the first step towards elevating your business with
              world-class executive leadership. Schedule a consultation with our
              team to discuss your unique challenges and goals.
            </p>
            <p className="text-gray-400 mb-12 text-sm">
              Limited availability - Book your strategic consultation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                <a
                  href="https://profici.co.uk/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8"
                >
                  Schedule Consultation
                </a>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
