"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import FlickeringGrid from "@/components/ui/flickering-grid";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactPlayer from "react-player";
import ExpandableComponent from "@/components/ui/expand";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handlePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <FlickeringGrid className="z-0 absolute inset-0 size-full  opacity-10" />
      <main className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          className="flex flex-col items-center gap-8 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <motion.div className="text-center" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight  text-gray-900 mb-6">
              World-Class C-Suite Leadership,{" "}
              <span className="text-yellow-400">Fractional Commitment</span>
            </h1>
          </motion.div>

          <motion.div
            className="relative w-full "
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              {!isMobile ? (
                <ReactPlayer
                  url="https://profici.co.uk/wp-content/uploads/2024/11/Unlock-Business-Profitability-Video.mp4"
                  width="100%"
                  height="100%"
                  ref={playerRef}
                  playing={playing}
                  controls={false}
                />
              ) : (
                <ReactPlayer
                  url="https://profici.co.uk/wp-content/uploads/2024/11/Unlock-Business-Profitability-Video-1.mp4"
                  width="100%"
                  height="100%"
                  ref={playerRef}
                  playing={playing}
                  controls={false}
                />
              )}
              <button
                className={`absolute inset-0 flex items-center justify-center ${
                  playing ? "bg-black/0" : "bg-black/30"
                } hover:bg-black/40 transition-colors`}
                onClick={handlePlayPause}
              >
                {playing ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-6 max-w-2xl z-10 text-center"
            variants={fadeIn}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              If you're a business seeking expert leadership without the
              full-time commitment, our Fractional C-Suite service is the
              perfect solution. Access top-tier CEOs, CFOs, and CMOs to guide
              your finance, marketing, and overall strategy—at a fraction of the
              cost of hiring full-time executives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                size="lg"
                className="w-fit"
                onClick={scrollToConsultation}
              >
                Get Started Now
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <motion.section
          className="xxl:py-24  py-8  bg-white mt-20 "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center ">
            <Badge variant="secondary" className="mb-4">
              Repetoire
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Esteemed C-Suite Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Meet our experienced executives who bring decades of expertise to
              help drive your business forward
            </p>
            <Button
              size="lg"
              className="z-20 mb-10 md:mb-0"
              onClick={scrollToConsultation}
            >
              Get Started
            </Button>
          </div>

          <div className="flex flex-col gap-52 lg:grid lg:grid-cols-3 md:m-0 md:ml-0  md:my-12 lg:mx-24 md:gap-x-12 xxl:gap-x-52  justify-center items-center">
            <ExpandableComponent
              title="Anthony O'Brien"
              description="A results-driven Managing Director with extensive experience in business growth and strategic leadership. Anthony is known for developing innovative strategies that enhance profitability and market position. His expertise spans financial management, team leadership, and stakeholder engagement, driving long-term success for businesses."
              collapsedSize={{ width: 330, height: 220 }}
              expandedSize={{ width: 500, height: 520 }}
              expandDirection="left"
              position="CEO"
              imageSrc={
                "https://profici.co.uk/wp-content/uploads/2022/04/Anthony-OBrien-Profici.jpg"
              }
            ></ExpandableComponent>
            <ExpandableComponent
              title="Dan Summers"
              description="An experienced business consultant specialising in strategic planning and change management. Dan has successfully led multiple brands with innovative approaches, embedding skilled professionals and implementing strategies that drive sustainable growth and operational excellence."
              collapsedSize={{ width: 330, height: 220 }}
              expandedSize={{ width: 500, height: 520 }}
              expandDirection="both"
              position="CEO"
              imageSrc={
                "https://profici.co.uk/wp-content/uploads/2024/09/Dan-Summers.png"
              }
            ></ExpandableComponent>
            <ExpandableComponent
              title="Gerald Bradley"
              description="A former Commercial Director with a proven track record of empowering SMEs through tailored business solutions. Gerald specialises in building strategic partnerships, designing client reward programmes, and driving loyalty, resulting in significant business growth for his clients."
              collapsedSize={{ width: 330, height: 220 }}
              expandedSize={{ width: 500, height: 520 }}
              expandDirection="both"
              position="CMO"
              imageSrc={
                "https://profici.co.uk/wp-content/uploads/2022/07/Gerald-Bradley.png"
              }
            ></ExpandableComponent>
            <ExpandableComponent
              title="Ian Clague"
              description="With over 35 years of cross-industry experience, Ian is a former senior partner of a global professional services firm. His deep understanding of boardroom dynamics, corporate governance, and risk management makes him a trusted advisor for organisations seeking strategic direction and operational resilience."
              collapsedSize={{ width: 330, height: 220 }}
              expandedSize={{ width: 500, height: 520 }}
              expandDirection="both"
              position="COO"
              imageSrc={
                "https://profici.co.uk/wp-content/uploads/2024/09/Ian-Clague-1.png"
              }
            ></ExpandableComponent>
            <ExpandableComponent
              title="John Mahmood"
              description="An award-winning Creative Director with a versatile portfolio spanning print, digital, social media, billboard, and broadcast campaigns. John has collaborated with renowned global brands, including Adidas, Apple, Nike, and Netflix, bringing creative visions to life with measurable success."
              collapsedSize={{ width: 330, height: 220 }}
              expandedSize={{ width: 500, height: 520 }}
              expandDirection="both"
              position="CMO"
              imageSrc={
                "https://profici.co.uk/wp-content/uploads/2022/06/John-Mahmood.png"
              }
            ></ExpandableComponent>
            <ExpandableComponent
              title="Terry Sweeney"
              description="A highly skilled Financial Director with extensive experience in financial planning, analysis, and strategic initiatives. Terry excels in driving fiscal growth, enhancing organisational performance, and ensuring regulatory compliance, delivering robust financial leadership for businesses."
              collapsedSize={{ width: 330, height: 220 }}
              expandedSize={{ width: 500, height: 520 }}
              expandDirection="both"
              position="CFO"
              imageSrc={
                "https://profici.co.uk/wp-content/uploads/2022/04/Terry-New.jpg"
              }
            ></ExpandableComponent>
          </div>
        </motion.section>
        <motion.section
          className="pt-24 2xl:py-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center pt-24 mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Executive Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Choose from our extensive range of executive services designed to
              elevate your business through strategic leadership and operational
              excellence
            </p>
            <Button size="lg" onClick={scrollToConsultation}>
              Get Started Now
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fractional CFO",
                description:
                  "Get expert guidance on financial strategy, fundraising, M&A, and operational optimisation at a fractional cost of just £1500.The financial guidance your firm deserves.",
                features: [
                  "Financial Strategy & Planning",
                  "Cash Flow Optimisation",
                  "Investment & Funding Strategy",
                  "Risk Management",
                ],
              },
              {
                title: "Fractional CEO",
                description:
                  "Navigate critical periods with confidence while maintaining operational continuity at a fractional cost of just £1500. The adequate handholding that's needed for your business to Grow.",
                features: [
                  "Strategic Planning",
                  "Organisational Development",
                  "Change Management",
                  "Stakeholder Relations",
                ],
              },
              {
                title: "Fractional CMO",
                description:
                  "Get strategic direction and execution oversight for your marketing initiatives at a fractional cost of just £1500.Tap into the networks and experience of a seasoned CMO.",
                features: [
                  "Marketing Strategy",
                  "Brand Development",
                  "Digital Marketing",
                  "Market Analysis",
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Work With You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              A streamlined approach to integrating executive leadership into
              your organisation
            </p>
            <Button size="lg" onClick={scrollToConsultation}>
              Get Started
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description:
                  "We assess your needs and challenges through an in-depth discussion",
              },
              {
                step: "2",
                title: "Strategic Planning",
                description:
                  "Develop a customised roadmap aligned with your business objectives",
              },
              {
                step: "3",
                title: "Integration",
                description:
                  "Smooth onboarding and integration process with hands-on guidance and support",
              },
              {
                step: "4",
                title: "Ongoing Support",
                description:
                  "Regular reviews and adjustments to ensure optimal results",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                className="p-6 border border-gray-200 rounded-xl relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 left-6 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {process.step}
                </div>
                <h3 className="font-semibold text-lg mt-4 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          className=" 2xl:py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Success Pillars
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transforming Businesses Through Strategic Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              See the incredible results our clients achieve with our
              £1,500/month executive leadership package across industries and
              company sizes
            </p>
            <Button size="lg" onClick={scrollToConsultation}>
              Get Started
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mb-10 gap-8">
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
          id="consultation"
          className="py-24 bg-black text-white rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Scale Your Success with <br />
              Expert Leadership?
            </h2>
            <p className="text-gray-300 mb-6">
              Take the first step towards elevating your business with
              world-class executive leadership. Schedule a consultation with our
              team to discuss your unique challenges and goals.
            </p>
            <p className="text-gray-400 mb-12 text-sm">
              Limited availability - Book your strategic consultation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <div className="bg-white border border-gray-200 rounded-xl relative">
              <ContactForm />
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
