'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function YogaFAQPage() {
    const [openIndex, setOpenIndex] = useState(null);
    const bgRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!bgRef.current) return;
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20; // Move max 20px
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        bgRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    const faqs = [
        {
            question: "What is Yoga?",
            answer: `The word Yoga (to joke or join in English) literally means “union” or “connection”. It is a state of “Union” between the Individual Self and the Divine Self, the connection of our consciousness with the infinite power that created the universe. Yoga is therefore a level of enlightened consciousness, similar to the Self-Realization of Buddhism.\n\nThis enlightenment or real Yoga happens when a sacred energy called Kundalini and residing in the sacrum bone of each human being is awaken and rise up to the top of the head of the practitioner, opening the last energy center or chakra called the Sahasrara Chakra. This is the supreme goal of Yoga, leading to inner bliss, peace, and a feeling of complete relaxation and harmony.\n\nThe physical forms of yoga widely practiced nowadays, are actually only a small part of a much wider method to reach that enlightened state of consciousness that is called Yoga.`
        },
        {
            question: "What is Sahaja Yoga?",
            answer: `“Sahaja”, literally means in-born, effortless or spontaneous. Sahaja Yoga meditation gives practitioners the ability to easily awaken the sacred Kundalini energy residing within us and therefore to nourish and enlighten the chakras or energy centers in the body. As a result, most practitioners can reach effortlessly a deep state of peace and harmony and this usually, from the very first session.\n\nThe flow of Kundalini energy can distinctively be felt as a light cool breeze in the hands, in the spinal cord and/or on top of the head. This energy can be directed to the different energy centers in the body in order to restore harmony, balance and boost mental, physical and emotional well-being.\n\nSahaja Yoga is like a short cut to reach a highly prized state of deep meditation. It encourages practitioners to develop a new and subtler awareness of reality so that they can grow and evolve towards becoming truly balanced, peaceful and compassionate for their own benefit as well as for the benefit of the society.\n\nSahaja Yoga is a beautiful experience based on a physical reality verifiable in one’s own central nervous system.`
        },
        {
            question: "How is Sahaja Yoga different from other types of Yoga and meditation?",
            answer: `Sahaja Yoga is different from other types of Yoga because it begins with the experience of awakening the sacred energy Kundalini, which is the ultimate and distant goal of many methods. Physical exercises, common to physical forms of Yoga, are not necessary anymore, as the Kundalini has the power to spontaneously restore emotional and physical well-being.\n\nSahaja Yoga is based on a mental-silence type of meditation so that the positive effects of the energy awakening can be fully imbibed through the central nervous system. Meditation becomes a simple process, easy, regenerating and blissful. The founder of Sahaja Yoga, Shri Mataji Nirmala Devi, devised this method by which the much-prized happening of Self Realization is achieved spontaneously (Sahaja) and within a very short time-span.\n\n“A little light is then lit within us (a new dimension becomes available to our awareness) and through Sahaja Yoga meditation we can then grow much faster, without having to go through any penances, while living normal lives amidst our families and societies” H.H. Shri Mataji Nirmala Devi comments.\n\n“This is because, in the light of the new awareness, we become our own gurus, our own guides. After Self Realization, we are able to feel a gentle cool breeze flowing above the head and also from the center of our palms. We can feel on our fingertips any blockages in our energetic centers and are able to clear them using this energy which has been awakened (Kundalini). Moreover. we become collectively conscious, i.e. we can feel other people’s centers and cure them as well. The fact that we are all part and parcel of the Whole becomes a tangible reality in our day-to-day life.”\n\n“Becoming one with the pure Spirit in us is the ultimate goal of human life described using various terms in most religions and spiritual traditions.. Self Realization is the first step: once this connection is initially established, it needs to be nourished with our attention and regular meditation, enabling us to find out why we are here and to ultimately fulfill the destiny of our life.”`
        },
        {
            question: "What are the benefits of meditation?",
            answer: `People who meditate regularly become aware of a new dimension in their consciousness. They feel a flow of smooth energy running through their body and soon become healthier and calmer, with an improved outlook on life. Stress, negative feelings of fears, worries and anger can be brought easily under control.\n\nScientific researches (with illnesses such as asthma, epilepsy and high blood pressure) conducted in various countries throughout the world have proven that Sahaja Yoga is effective in improving physical and psychological well-being.`
        },
        {
            question: "Who can practice Sahaja Yoga?",
            answer: `Sahaja Yoga meditation does not require practitioner to indulge into any form of extreme behaviour. The aim of this meditation is to help practitioners become balanced, productive and responsible members of the society. As each individual becomes more balanced, peaceful and compassionate, the society as a whole will also benefit.\n\nEveryone can. There is no restriction of caste, creed, religion, nationality, age, or sex.`
        },
        {
            question: "How much will this cost me?",
            answer: `Sahaja-Yoga courses are free. One cannot pay for a living and spontaneous experience, just as one cannot get a seed to sprout by paying the Mother Earth.\n\nTherefore Sahaja Yoga is taught in about 100 countries around the world, always free of charge by practitioners who are all employed in different fields but find joy in sharing this precious and profitable knowledge on a voluntary basis during their free time. They all have felt the tremendous benefits of the practice in their life and want to share this pleasure with people having the same interest.\n\nSahaja Yoga classes are thus mostly held in the evening or during week-ends. Some voluntary contributions can be made for the cost of room rental and production of teaching materials, but are never pressed on any individual. Sahaja Yoga is a non-profit, grass-roots organization.`
        },
        {
            question: "Can I become a member of Sahaja Yoga?",
            answer: "Everyone is free and welcome to attend a Sahaja Yoga session."
        },
        {
            question: "How long will it take me to get some results?",
            answer: `Most people can feel the rising of the Kundalini energy in their body since the very first session. This will manifest as a cool breeze that can be perceived in both hands, on top of the head and for sensitive people, in their spinal cord.\n\nMore importantly, the large majority of first-time practitioners can feel a sense of deep peace and harmony after just a short meditation lasting 15 to 20 minutes.\n\nSome people may take a little longer but most generally, after only about a month of regular practice (20 minutes a day), beginners are able to clearly feel the energy and witness positive improvement in their personality: becoming more relax, joyful but also more alert and dynamic…`
        },
        {
            question: "Can I learn at home without attending collective classes?",
            answer: `While it may seem simple to meditate, just closing one’s eyes and trying to silence one’s thoughts, it is not that easy. The human mind and emotions are indeed very complex and without proper guidance, beginners may not get encouraging results.\n\nTo make significant progress in any discipline, may it be sportive, artistic or spiritual activities, it is important to learn the basics under the proper supervision of expert practitioners. Attending free Sahaja Yoga classes once a week will provide beginners with the required basis in terms of practice and knowledge, including on the various techniques to optimize the process.\n\nFurthermore, when many Yogis meditate together, more positive and elevating energy is released, as each one emits a certain coefficient of energy. This process can be compared with the lightening of numerous candles in a dark room. The more candles there are, the more light there is. Diffused in the room, the energy benefits all participants, resulting in a stronger experience for each and everyone. This collective process is one of the keys to a strong spiritual growth and is the reason why, even after many years of practice, advanced practitioners still willingly attend collective meditation sessions.`
        },
        {
            question: "How many courses do I need to attend until I become an expert Yogi?",
            answer: `The introductory courses to Sahaja Yoga basic knowledge spread over 10 sessions of 2 hours. At the end of this period, you will have a global understanding of the qualities of the different chakras, you will know how to balance your energy in order to improve your emotional and physical health, you will know how to use energy to help curing people and most importantly, you should be able to reach deep states of meditaion.\n\nHowever, to believe that this short course is sufficient to reach an expert level, would be a profound misunderstanding.\n\nSahaja Yoga is the path to complete enlightenment; it is both a lifestyle and a long road of self-improvement. The ultimate goal of Sahaja Yoga is the actualization of the union with the divine, or the state of “Buddha-hood”. Therefore Sahaja Yogis have integrated meditation into their daily lives, meditating generally morning and evening in order to maintain an optimum emotional and physical balance, and most importantly to in order to improve themselves at becoming better human beings. With every passing day, practitioners understand themselves better, go deeper into the experience of the bliss of their own spirit, slowly developing their full potential as human beings…`
        },
        {
            question: "Is there any compulsion after I start practicing it?",
            answer: `The main principle of Sahaja Yoga is that individuals are encouraged to become their own master. Everyone is encouraged to make his/her own decision, and is free to keep on or to suspend practicing. The best approach is to treat it like a personal experiment; make an honest attempt to meditate for one or two weeks for example and then assess the benefits.\n\nSahaja yoga does not require anyone to believe in anything that cannot be proven by one’s own experience. There is no blind faith or dogma.`
        },
        {
            question: "Is Sahaja Yoga a religion?",
            answer: `Sahaja Yoga is not an organized religion but it unites the essence of all religions through the direct perception of the subtle and divine reality. Therefore, people from very different religious backgrounds (Buddhists, Hindus, Christians, Muslims…, etc.) practice Sahaja Yoga. Not only do they develop a better understanding of their own religion, but of others’ religion as well. Ultimately, Sahaja Yogis respect all religions and spiritual traditions.\n\nAnyone who receives self realization -- achievable effortlessly through Sahaja Yoga -- can feel the cool breeze of the Kundalini (in the Vedic tradition) on his very central nervous system, along his spinal chord, in the palms of his hand or on top of his head. Self Realization is a happening that opens a new category of perceptions helping people to better handle their daily life. This actualization is at the core of the teachings of Sahaja Yoga. One develops a new sense and awareness, as the cognitive potential of the limbic area of the brain is expanded. Somehow, one is equipped with a powerful inner radar, just waiting to be activated to improve one’s navigational skills.`
        },
        {
            question: "Who is Shri Mataji?",
            answer: `Shri Mataji Nirmala Devi is the founder of Sahaja Yoga, which she established in 1970. Since then she has given thousands of lectures, and has taught millions how to practice the technique.\n\nShri Mataji was born to Christian parents in 1923, into one of India’s most reputed royal families. She studied medicine until she became a student activist in Gandhi’s Free India movement, during which time she was imprisoned and tortured by the British. In 1949 she married Sir C.P. Srivastava, a very distinguished diplomat who later came to serve as Secretary General of the UN International Maritime Organization for a record term of 16 years. Sir C.P. Srivastava is himself distinguished not only as India’s most decorated civil servant but also as the first Indian to be knighted by Queen Elizabeth II for his contribution to the United Nations. Shri Mataji has lived a very normal family life, and has children, grand-children, and even great grand-children. Shri Mataji is the highest advocate of morality and the importance of the family.\n\nNobel Prize Nominee\nShri Mataji has been widely acclaimed around the world for her selfless efforts towards social improvement and world peace. She has initiated a number of organisations for community service, including The International Hospital and Cancer Research Centre in Mumbai (Bombay) India; a charity house for poor people in Delhi; a drug rehabilitation centre in Italy, and others.\n\nShe has received many commendations:\n1986: Declared Personality of the Year by the Italian Government.\n1989: The 1989 UN Peace Medal.\n1993: Appointed as Honorary Member of the Presidium of the Petrovska Academyof Art and Science. In the history of the Academy, only 12 people have ever been granted this honour, Einstein being one of them.\n1993: The Ayatollah Medi Rouhani of Iran, a prominent proponent of religious moderation, and one of the four Ayatolla has who lead the Shi’ite Muslim faith, has called for a convocation of a World Congress of religious leaders aiming at the creation of a charter for peace based on Shri Mataji’s teachings.\n1998: Recipient of the Unity award for international understanding by Unity International Foundation.\n1995: Shri Mataji has been an honoured speaker at many high level forums such as the United Nations, where she spoke on ways of achieving peace, and the Fourth World Conference on Women, Beijing, which was attended by a select group of prominent women of the world.\n\n“I remember a fine morning of August 1975, sitting in a suburban train between Hurst Green and London. Shri Mataji Nirmala Devi was sitting in front of me. I had spent some very intriguing and mind boggling moments in her house, the day before, having felt levels of consciousness whose bliss it is impossible to describe. I was fairly puzzled and asked quite simply: "Shri Mataji, who are you?" She responded something like: "open your hands, close your eyes and ask the question again", suggesting I should ask through my meditation. I did so. After some time - I do not know how much time - I opened my eyes again. Shri Mataji was smiling; she said "So?" I responded "Nothing Shri Mataji, just the silence". She said "I am the silence". But for the rest of the day, I had the feeling of being so light that I was litterally wondering whether my feet were touching the ground; the quality of well being throughout this day of shopping in London was again ecstatic. These states of higher awareness were registered by my central nervous system and cannot be doubted. The perception is direct. So, who is Shri Mataji? (…) Our advices to those who would like to know the truth about Shri Mataji's unique and historical advent on this earth is to get access to self realisation through the proven technique of sahaja yoga and go deeper in meditation where responses unfold.”\n– Gregoire de Kalbermatten`
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            className="min-h-screen bg-[linear-gradient(to_bottom,#F7F8ED_0%,#ffffff_35%)] relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Section Background Image - Top 40% */}
                <div
                    ref={bgRef}
                    className="absolute top-10 left-0 w-full h-[35%] transition-transform duration-100 ease-out will-change-transform"
                >
                    <Image
                        src="/images/section-background.png"
                        alt="Background Pattern"
                        fill
                        className="object-cover opacity-100"
                        priority
                    />
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 opacity-100">
                    <Image
                        src="/images/flower-green.png"
                        alt=""
                        fill
                        className="object-contain animate-spin-slow"
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center pt-16 md:pt-36 pb-12 md:pb-16 px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-sm md:text-base font-semibold text-[#4A6741] uppercase tracking-wider mb-4 font-sans"
                    >
                        Quick Answers
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E05] mb-6 font-serif"
                    >
                        FAQ
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-base md:text-lg text-[#4A6741] max-w-2xl mx-auto font-sans"
                    >
                        Find answers to commonly asked questions about meditation, self-realization, and our classes
                    </motion.p>
                </div>

                {/* FAQ Section */}
                <div className="max-w-7xl mx-auto px-4 pb-20">
                    <div className="space-y-4 md:space-y-5">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.05 * index, ease: "easeOut" }}
                                className="bg-[#F7F8ED] rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 md:px-8 py-2 md:py-2 flex items-start justify-between text-left hover:bg-[#F7F8ED] transition-colors group"
                                >
                                    <div className="flex items-start gap-4 flex-1 pr-4">
                                        <span className="text-[#1A2E05] font-semibold text-lg md:text-lg flex-shrink-0 mt-1 font-serif">
                                            {String(index + 1).padStart(2, '0')}.
                                        </span>
                                        <h3 className="text-base md:text-lg lg:text-lg font-semibold text-[#1A2E05] leading-relaxed group-hover:text-[#10551F] transition-colors font-serif">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[#1A2E05] text-white' : 'bg-[#F7F8ED] text-[#1A2E05]'}`}>
                                        <span className="text-2xl md:text-3xl font-light transform transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                                            +
                                        </span>
                                    </div>
                                </button>

                                <div
                                    className="overflow-hidden transition-all duration-300 ease-in-out"
                                    style={{
                                        maxHeight: openIndex === index ? '2000px' : '0px',
                                        opacity: openIndex === index ? 1 : 0
                                    }}
                                >
                                    <div className="px-6 md:px-8 pb-6 md:pb-7 pl-16 md:pl-20">
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans whitespace-pre-line">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="mt-16 md:mt-20 bg-[#10551F] rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl relative overflow-hidden"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                            <Image
                                src="/images/flower-green.png"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
                            <Image
                                src="/images/flower-green.png"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 font-serif">
                                Still have questions?
                            </h2>
                            <p className="text-[#F7F8ED] text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto font-sans opacity-90">
                                Can't find the answer you're looking for? Our friendly team is here to help you on your meditation journey.
                            </p>
                            <button className="bg-[#C7DC49] text-[#1A2E05] font-bold px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-lg text-base md:text-lg inline-flex items-center gap-3 font-sans">
                                Contact Us
                                <span className="bg-[#1A2E05] text-white w-8 h-8 rounded-full flex items-center justify-center">
                                    →
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                @keyframes spin-slow-reverse {
                    from {
                        transform: rotate(360deg);
                    }
                    to {
                        transform: rotate(0deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 30s linear infinite;
                }
                .animate-spin-slow-reverse {
                    animation: spin-slow-reverse 25s linear infinite;
                }
            `}</style>
        </div>
    );
}