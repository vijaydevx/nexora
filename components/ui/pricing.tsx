"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

const plans = [
  {
    name: "Starter",
    description:
      "Perfect for freelancers and solo creators getting started with AI-powered design.",
    price: 19,
    yearlyPrice: 149,
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Up to 5 AI-generated sites", icon: <Briefcase size={20} /> },
      { text: "5GB cloud storage", icon: <Database size={20} /> },
      { text: "Basic analytics dashboard", icon: <Server size={20} /> },
    ],
    includes: [
      "Free includes:",
      "Unlimited page edits",
      "Custom domains",
      "SSL certificates",
      "Up to 2 team members",
      "Community support",
    ],
  },
  {
    name: "Business",
    description:
      "Best for agencies and growing teams that need advanced AI tools and collaboration.",
    price: 49,
    yearlyPrice: 399,
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "Unlimited AI-generated sites", icon: <Briefcase size={20} /> },
      { text: "50GB cloud storage", icon: <Database size={20} /> },
      { text: "Advanced analytics & SEO", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Priority AI generation queue",
      "Custom brand kit",
      "A/B testing tools",
      "Up to 15 team members",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Full-scale AI platform with dedicated support, unlimited access, and enterprise security.",
    price: 99,
    yearlyPrice: 899,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    features: [
      { text: "Unlimited everything", icon: <Briefcase size={20} /> },
      { text: "Unlimited storage", icon: <Database size={20} /> },
      { text: "White-label solutions", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Business, plus:",
      "Dedicated AI model tuning",
      "SSO & advanced security",
      "Custom API integrations",
      "Unlimited team members",
      "24/7 dedicated support",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-xl border border-gray-200 bg-gray-50 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 h-12 w-fit cursor-pointer rounded-xl px-3 py-1 text-sm font-medium transition-colors sm:px-6 sm:py-2 sm:text-base",
            selected === "0"
              ? "text-white"
              : "text-gray-500 hover:text-black",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute left-0 top-0 h-12 w-full rounded-xl border-4 border-purple-600 bg-gradient-to-t from-purple-600 via-purple-500 to-purple-600 shadow-sm shadow-purple-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly Billing</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 h-12 w-fit shrink-0 cursor-pointer rounded-xl px-3 py-1 text-sm font-medium transition-colors sm:px-6 sm:py-2 sm:text-base",
            selected === "1"
              ? "text-white"
              : "text-gray-500 hover:text-black",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute left-0 top-0 h-12 w-full rounded-xl border-4 border-purple-600 bg-gradient-to-t from-purple-600 via-purple-500 to-purple-600 shadow-sm shadow-purple-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly Billing
            <span className="rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

function HoverCard({ popular, children }: { popular?: boolean; children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [lightPos, setLightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setLightPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`relative overflow-hidden rounded-lg border shadow-sm ${
        popular
          ? "border-purple-300 bg-purple-50 ring-2 ring-purple-500"
          : "border-gray-200 bg-white"
      }`}
    >
      {/* Corner light effect */}
      <div
        className="pointer-events-none absolute -inset-px z-10 rounded-lg transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${lightPos.x}px ${lightPos.y}px, rgba(139,92,246,0.12), transparent 60%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="pointer-events-none absolute -inset-px z-10 rounded-lg transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(200px circle at ${lightPos.x}px ${lightPos.y}px, rgba(139,92,246,0.25), transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      <div className="relative z-0">
        {children}
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="relative mx-auto max-w-5xl px-4 py-16"
      ref={pricingRef}
    >
      <article className="mb-6 max-w-2xl space-y-4 text-left">
        <h2 className="mb-4 text-3xl font-medium capitalize text-gray-900 md:text-4xl">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-start"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            We've got a plan that's perfect for you
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="w-[80%] text-sm text-gray-500 md:text-base"
        >
          Trusted by creators worldwide, NEXORA helps teams build faster with AI.
          Explore which option fits your workflow.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="w-fit" />
        </TimelineContent>
      </article>

      <div className="grid gap-4 py-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <HoverCard popular={plan.popular}>
              <CardHeader className="p-4 text-left">
                <div className="flex justify-between">
                  <h3 className="mb-1 text-xl font-semibold text-gray-900">
                    {plan.name} Plan
                  </h3>
                  {plan.popular && (
                    <span className="h-fit rounded-full bg-purple-600 px-3 py-1 text-sm font-medium text-white">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mb-3 text-xs text-gray-500">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900">
                    $
                    <NumberFlow
                      format={{ currency: "USD" }}
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-2xl font-semibold"
                    />
                  </span>
                  <span className="ml-1 text-gray-500">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="px-4 pt-0">
                <button
                  className={`mb-3 w-full cursor-pointer rounded-lg p-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                    plan.popular
                      ? "border border-purple-400 bg-gradient-to-t from-purple-600 to-purple-500 text-white shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/35 hover:brightness-110"
                      : "border border-gray-700 bg-gradient-to-t from-gray-900 to-gray-700 text-white shadow-md shadow-gray-900/25 hover:shadow-lg hover:shadow-gray-900/35 hover:brightness-110"
                  }`}
                >
                  {plan.buttonText}
                </button>
                <button
                  className="mb-4 w-full cursor-pointer rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-black shadow-sm transition-all duration-200 hover:border-purple-200 hover:bg-gray-50 hover:shadow-md active:scale-[0.97]"
                >
                  Talk to Sales
                </button>

                <div className="space-y-2 border-t border-gray-200 pt-3">
                  <h2 className="mb-2 text-sm font-semibold uppercase text-gray-900">
                    Features
                  </h2>
                  <h4 className="mb-2 text-xs font-medium text-gray-900">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-1.5">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="mr-2 grid h-5 w-5 shrink-0 place-content-center rounded-full border border-purple-500 bg-white">
                          <CheckCheck className="h-3 w-3 text-purple-500" />
                        </span>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </HoverCard>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
