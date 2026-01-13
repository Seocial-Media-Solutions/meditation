'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Yoga Practitioner",
    text: "This meditation practice has completely transformed my morning routine. I feel more centered and ready to face the day's challenges with a calm mind.",
    initials: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    text: "As someone with a high-stress job, finding this inner peace has been a lifesaver. The clarity I've gained is invaluable for my work and personal life.",
    initials: "MC"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Student",
    text: "I never thought I could sit still for more than 5 minutes. The guided techniques here made it so natural and easy to connect with my inner self.",
    initials: "ER"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F8ED] text-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif italic mb-6"
          >
            Stories of Transformation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-light text-black/70"
          >
            Hear from our community about how daily meditation has brought balance, joy, and peace into their lives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#C7DC49]/20 rounded-full flex items-center justify-center mb-6 text-[#7a8a25] font-serif text-xl font-bold">
                {testimonial.initials}
              </div>
              <p className="text-lg font-light italic mb-6 text-black/80">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-medium text-lg">{testimonial.name}</h4>
                <p className="text-sm text-black/50 uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
