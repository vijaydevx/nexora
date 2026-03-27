import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "NEXORA completely changed how we build websites. What used to take weeks now takes minutes. The AI understands exactly what we need.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Creative Director",
  },
  {
    text: "The AI-powered design system is incredible. It generates pixel-perfect layouts that actually look like a human designer made them.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Tech Lead",
  },
  {
    text: "Support team is world-class. They guided us through every step and the platform just keeps getting better with each update.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Product Manager",
  },
  {
    text: "We launched 12 client sites in a single month using NEXORA. The speed and quality are unmatched in the industry.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Agency Founder",
  },
  {
    text: "The smart optimization features boosted our site performance by 40%. Our clients couldn't be happier with the results.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Growth Manager",
  },
  {
    text: "From idea to production in under 10 minutes. NEXORA's AI doesn't just build — it thinks, designs, and delivers.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Startup Founder",
  },
  {
    text: "Our conversion rates doubled after switching to NEXORA-built pages. The AI knows what works for modern audiences.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "The one-click launch feature saved us countless hours. No more deployment headaches — just build and ship.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Operations Lead",
  },
  {
    text: "NEXORA is the future of web development. We've completely replaced our old workflow and never looked back.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "CTO",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="relative bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center"
        >
          <div className="rounded-lg border border-gray-200 px-4 py-1 text-xs font-medium text-gray-500">
            Testimonials
          </div>

          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            What our users say
          </h2>
          <p className="mt-5 text-center text-sm text-gray-400 md:text-base">
            See what creators and teams are building with NEXORA.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
