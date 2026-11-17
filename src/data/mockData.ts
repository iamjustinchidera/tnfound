import { Program, Event, NewsStory, GalleryItem, Testimonial } from '../types';

export const programsData: Program[] = [
  {
    id: 'football-development',
    title: 'Football Development',
    subtitle: 'Nurturing Athletic Excellence & Life Skills',
    description: 'Empowering over 1,000+ youths aged 8 to 18 through elite structured training, international scouting pipelines, and robust character-building exercises.',
    fullDescription: 'Our flagship Football Development program provides young Nigerians with access to world-class coaching, equipment, and structured local and international competitive tournaments. We believe football is a powerful vehicle for social change, teaching discipline, teamwork, and resilience. By partnering with scouts, academy directors, and professional international agents, we create concrete scouting pathways for exceptionally talented players while ensuring every participant grows into a responsible community leader.',
    iconName: 'Dribbble',
    heroImage: '/images/football.jpg',
    goals: [
      'Provide professional coaching and sports gear to 1,000+ children across regional centers.',
      'Establish robust pathways for international and national professional academy trials.',
      'Integrate life skills, leadership, and emotional intelligence training into the soccer curriculum.',
      'Maintain an active scouting network during local league plays and the Simy Nwankwo Tournament.'
    ],
    audience: 'Youths aged 8 to 18 in Anambra State and surrounding communities.',
    impactMetrics: [
      { label: 'Active Youths', value: '1,000+' },
      { label: 'Professional Contracts', value: '12' },
      { label: 'Regional Centers', value: '4' },
      { label: 'Licensed Coaches', value: '15' }
    ]
  },
  {
    id: 'education-tutoring',
    title: 'Education & Tutoring',
    subtitle: 'Bridging the Gap Between Field & Classroom',
    description: 'Ensuring that athletic pursuits never come at the cost of literacy. Our target is connecting 80% of our U16 players with school or specialized tutoring support.',
    fullDescription: 'At TNF, we run a strict "No School, No Play" policy. Our Education & Tutoring program ensures that every young athlete is equipped with the necessary academic skills for lifelong success. We provide after-school tutoring sessions, literacy programs, exam preparation classes (WAEC/NECO/JAMB), and scholarships. By actively linking sports with education, we empower our players to expand their career horizons beyond the football pitch.',
    iconName: 'BookOpen',
    heroImage: '/images/education.jpg',
    goals: [
      'Achieve and sustain an 80% or higher educational enrollment/tutoring rate for U16 academy players.',
      'Distribute academic learning packages, notebooks, textbooks, and essential writing supplies annually.',
      'Sponsor school fees and public exam enrollment charges for talented but underprivileged students.',
      'Deliver daily localized tutoring in core subjects including Mathematics, English, and Basic Science.'
    ],
    audience: 'U16 players and youth football participants needing academic support.',
    impactMetrics: [
      { label: 'Educational Connectivity', value: '82%' },
      { label: 'Scholarships Awarded', value: '150+' },
      { label: 'Learning Materials Sent', value: '5,000+' },
      { label: 'Voluntary Tutors', value: '24' }
    ]
  },
  {
    id: 'health-wellbeing',
    title: 'Health & Wellbeing',
    subtitle: 'Holistic Health & Child Protection Systems',
    description: 'Providing comprehensive nutritional guidance, medical checkups, hygiene education, and safeguarding workshops involving parents and local leaders.',
    fullDescription: 'Good health is the foundation of any athletic or academic endeavor. TNF organizes routine health assessments, physical therapy for injuries, and dietary counseling to optimize physical performance. Importantly, our health curriculum covers preventive hygiene, mental health, and child protection workshops. We conduct continuous seminars with parents, school administrators, and local traditional rulers to build safe, supportive, abuse-free spaces for kids.',
    iconName: 'Heart',
    heroImage: '/images/health.jpg',
    goals: [
      'Conduct bi-annual physical checkups and vision/hearing screenings for all active players.',
      'Distribute nutritional meal supplements and energy guides for optimal youth development.',
      'Host child safeguarding workshops for coaches, parents, and community stakeholders.',
      'Conduct emergency first-aid and sports medicine sessions to foster safe play fields.'
    ],
    audience: 'Active players, family members, and local community stakeholders.',
    impactMetrics: [
      { label: 'Health Screenings Done', value: '2,200+' },
      { label: 'Safeguarding Seminars', value: '18' },
      { label: 'First Aid Kits Distributed', value: '45' },
      { label: 'Nutritional Consults', value: '350+' }
    ]
  },
  {
    id: 'youth-empowerment',
    title: 'Youth Empowerment',
    subtitle: 'Skill Acquisition and Leadership Pathways',
    description: 'Equipping teenagers and young adults with vocational skills, financial literacy, and technology training for self-reliance.',
    fullDescription: 'While football provides a path for some, structural career diversification is key. Our Youth Empowerment initiative delivers high-impact bootcamps in digital skills (basic computing, coding, digital marketing), carpentry, tailoring, and business development. We collaborate with local businesses to place our graduates in apprenticeships, helping them break the cycle of poverty and lead economic transformations in their communities.',
    iconName: 'Award',
    heroImage: '/images/youth.jpg',
    goals: [
      'Sponsor digital literacy bootcamps with hands-on practice in computer labs.',
      'Provide seed-grants or essential work tools for promising vocational graduates.',
      'Train players in basic financial literacy, banking, savings, and micro-enterprise management.',
      'Form mentor pairings between young adults and established professionals.'
    ],
    audience: 'Young adults and out-of-school youths aged 16 to 25.',
    impactMetrics: [
      { label: 'Vocational Grads', value: '280+' },
      { label: 'Seed Grants Distributed', value: '15' },
      { label: 'Mentorship Matches', value: '60' },
      { label: 'Digital Grads', value: '110' }
    ]
  },
  {
    id: 'community-development',
    title: 'Community Development',
    subtitle: 'Strengthening Social Fabrics & Infrastructure',
    description: 'Engaging families, organizing volunteer efforts, upgrading community playgrounds, and fostering stakeholder collaboration.',
    fullDescription: 'TNF believes that to lift a child, you must strengthen the village. We work in lockstep with traditional rulers, parent-teacher associations, and youth groups. Our community projects clean up public spaces, upgrade local football pitches, establish solar streetlights in sports arenas, and promote peaceful inter-community relationships. Through events, community roundtables, and volunteer campaigns, we turn communal energy into sustainable development.',
    iconName: 'Users',
    heroImage: '/images/community.jpg',
    goals: [
      'Renovate local fields and convert municipal pitches into safe playing arenas.',
      'Establish routine Parent-Teacher-Academy forums to track children’s progress.',
      'Organize monthly community environmental cleaning exercises led by youth leaders.',
      'Collaborate with local government bodies to improve clean water access in training fields.'
    ],
    audience: 'Community residents, local leaders, and general municipal populations.',
    impactMetrics: [
      { label: 'Pitches Renovated', value: '3' },
      { label: 'Forum Attendance', value: '850+' },
      { label: 'Solar Lights Placed', value: '22' },
      { label: 'Communal Projects', value: '14' }
    ]
  }
];

export const eventsData: Event[] = [
  {
    id: 'thanksgiving-mass-novelty-match',
    title: 'Annual Thanksgiving Mass & Novelty Match',
    date: 'December 28, 2026',
    time: '09:00 AM - 05:00 PM',
    location: 'St. Mary’s Catholic Church & Local Sports Arena, Anambra',
    description: 'A traditional end-of-year celebration starting with a thanksgiving service, followed by an energetic community novelty football match.',
    fullDescription: 'Our end-of-year Thanksgiving Mass is a beautiful tradition where our players, families, coaches, patrons, and community leaders gather to express gratitude for the year’s achievements and lessons. Following the church service, the entire town converges on our central sports ground for the high-octane Annual Novelty Match, featuring local legends, special professional invitees, and selected TNF talents. It is a day filled with music, food, communal unity, and exceptional soccer.',
    status: 'upcoming',
    image: '/images/hero.jpg'
  },
  {
    id: 'simy-nwankwo-tournament-2026',
    title: 'SIMY Nwankwo Annual U18 Tournament',
    date: 'November 10 - November 18, 2026',
    time: '08:00 AM - 06:00 PM Daily',
    location: 'TNF Central Complex, Anambra State',
    description: 'The premier Under-18 football scouting tournament in the region, bringing together 16 elite regional clubs and international scouts.',
    fullDescription: 'The SIMY Nwankwo U18 Tournament is our flagship sports event, sponsored and patronized by the legendary professional forward Simeon "Simy" Nwankwo. The tournament plays host to 16 elite Under-18 clubs from across Nigeria, battling for supremacy in front of foreign and domestic scouts. Beyond trophies, this tournament represents a life-altering opportunity for participants to secure scholarships, trial offers, and professional academy contracts.',
    status: 'upcoming',
    image: '/images/tournament.jpg'
  },
  {
    id: 'back-to-school-drive-2026',
    title: 'Back-to-School Tutoring & Supplies Drive',
    date: 'September 5, 2026',
    time: '10:00 AM - 03:00 PM',
    location: 'TNF Community Library Hub',
    description: 'Distributing school materials, notebooks, uniforms, and running mock tutoring sessions for young athletes ahead of the new school term.',
    fullDescription: 'Education is non-negotiable at the Tochukwu Nwankwo Foundation. Our Back-to-School Drive equips over 500 kids with the gear they need to succeed in the classroom. From premium durable notebooks and schoolbags to tutoring mock classes in English, STEM, and Mathematics, we make sure our youth soccer players start the academic term with confidence.',
    status: 'upcoming',
    image: '/images/back-to-school.jpg'
  },
  {
    id: 'community-health-safeguarding-2026',
    title: 'Community Health & Child Protection Workshop',
    date: 'June 14, 2026',
    time: '11:00 AM - 04:00 PM',
    location: 'Town Hall, Nnewi, Anambra',
    description: 'An interactive seminar gathering parents, community leaders, and stakeholders to discuss health, nutrition, and youth safeguarding.',
    fullDescription: 'Led by licensed child protective specialists, health educators, and sports psychologists, this workshop provides comprehensive training to parents and local stakeholders on physical, nutritional, and emotional wellness. We focus on modern child safeguarding techniques, safe coach-player protocols, and responsive health habits within sports clubs and households.',
    status: 'past',
    image: '/images/workshop.jpg'
  }
];

export const storiesData: NewsStory[] = [
  {
    id: 'rising-from-nnewi-emeka-journey',
    title: 'From Regional Fields to Professional Trials: Emeka’s Inspiring Journey',
    category: 'Football',
    date: 'July 15, 2026',
    readTime: '4 min read',
    excerpt: 'How 17-year-old Emeka Chibuzor used the SIMY Nwankwo Tournament platform to secure a fully-funded international football academy scholarship.',
    content: [
      'Born and raised in the bustling commercial town of Nnewi, Anambra State, Emeka Chibuzor spent his afternoons playing street soccer with a makeshift ball of wrapped plastics. His natural athletic talents were clear, but structural coaching, nutrition, and exposure was non-existent.',
      'In late 2024, Emeka was recruited into the Tochukwu Nwankwo Foundation (TNF) Academy. Over the next two years, he underwent professional-grade coaching, received school tutoring support, and developed strong character values.',
      'The turning point came at the 2025 SIMY Nwankwo Annual U18 Tournament. Emeka put up a spectacular performance, scoring 6 goals in 5 games. His discipline and gameplay caught the eye of an international scouting team.',
      'Today, Emeka is preparing for his international travel to join a prestigious academy in Europe on a full scholarship. "TNF didn’t just teach me how to kick a ball," Emeka says. "They taught me how to read, how to speak with confidence, and how to believe in myself."'
    ],
    image: '/images/tournament.jpg',
    author: {
      name: 'Tochukwu Nwankwo',
      role: 'Founder',
      avatar: '/images/founder.jpg'
    }
  },
  {
    id: 'academic-achievements-court-to-classroom',
    title: 'Classroom First: Maintaining an 82% Tutoring Connection Rate',
    category: 'Education',
    date: 'May 22, 2026',
    readTime: '3 min read',
    excerpt: 'Explore how TNF’s tutoring programs and school fees sponsorships are enabling children to excel in both sports and secondary education.',
    content: [
      'Historically, young Nigerian athletes often faced a painful choice: pursue a sports dream or acquire a formal school education. At TNF, we strongly reject this dichotomy. Our active stance is that sports and education are synergistic.',
      'Through tireless parent engagement, voluntary tutor coordination, and direct financial sponsorship, our latest auditing shows that 82% of all active Under-16 players in our academy are connected to specialized academic tutoring or full-time school.',
      'Our tutoring center operates four days a week, focusing on mathematics, literature, scientific principles, and computing. We reward academic consistency with training jerseys, special team responsibilities, and tournament sponsorships.',
      'By training the mind alongside the muscle, we ensure that every player has multiple pathways to success in life, creating well-rounded leaders for the future of our communities.'
    ],
    image: '/images/education.jpg',
    author: {
      name: 'Mrs. Adanna Eze',
      role: 'Director of Education',
      avatar: '/images/author-1.jpg'
    }
  },
  {
    id: 'uniting-stakeholders-community-safeguarding',
    title: 'Cooperation for Protection: Workshops with Local Leaders',
    category: 'Community',
    date: 'April 10, 2026',
    readTime: '5 min read',
    excerpt: 'Building safety rings around the youth. A detailed look at our Child Safeguarding seminars involving traditional rulers and parents.',
    content: [
      'Youth development is impossible without safety. In our quest to secure children against exploitation, TNF hosted a monumental child protection forum, drawing together over 80 parent leaders, traditional monarchs, and local coaches.',
      'The seminar addressed critical topics including physical health, psychological protection in sports, child labour prevention, and standard reporting protocols for suspected abuse.',
      'Traditional leaders praised the initiative for setting new community standards. By aligning the people of influence with the protective mission of TNF, we establish a robust community safety net that guards kids both on and off the field.',
      'We will continue hosting these workshops quarterly across various districts, ensuring child safeguarding becomes a foundational principle of regional community policy.'
    ],
    image: '/images/community.jpg',
    author: {
      name: 'Dr. Chuka Obi',
      role: 'Health Advisory Board',
      avatar: '/images/author-2.jpg'
    }
  }
];

export const galleryData: GalleryItem[] = [
  // TNF Under-18 Tournament, 1st Edition: Christ the King College, Onitsha, 7 Oct 2026
  {
    id: 'u18-lift',
    title: 'U18 1st Edition: The Trophy Lift',
    category: 'Tournaments',
    image: '/images/u18/the-lift.jpg',
    description: 'The green side receive the cup and gold medals as the first ever TNF Under-18 champions.'
  },
  {
    id: 'u18-green-side',
    title: 'U18 1st Edition: Green Side',
    category: 'Tournaments',
    image: '/images/u18/green-side.jpg',
    description: 'The eventual champions lined up with their coaches at Christ the King College, Onitsha.'
  },
  {
    id: 'u18-blue-side',
    title: 'U18 1st Edition: Blue Side',
    category: 'Tournaments',
    image: '/images/u18/blue-side.jpg',
    description: 'Lined up before kick-off in shirts printed specially for the 1st edition.'
  },
  {
    id: 'u18-prize-table',
    title: 'U18 1st Edition: On the Table',
    category: 'Tournaments',
    image: '/images/u18/prize-table.jpg',
    description: 'The trophy, medals and the ₦500,000 prize cheque from Access Bank.'
  },
  {
    id: 'u18-officials',
    title: 'U18 1st Edition: Match Officials',
    category: 'Tournaments',
    image: '/images/u18/officials.jpg',
    description: 'Referees, assistants and organisers in front of the Christ the King College stand.'
  },
  {
    id: 'u18-high-table',
    title: 'U18 1st Edition: The High Table',
    category: 'Tournaments',
    image: '/images/u18/high-table.jpg',
    description: 'Guests and organisers watching from the stand on matchday, 7 October 2026.'
  },
  {
    id: 'gal-1',
    title: 'U18 Championship Finalists',
    category: 'Tournaments',
    image: '/images/player.jpg',
    description: 'Teams lining up for the grand finale of the SIMY Nwankwo Tournament.'
  },
  {
    id: 'gal-2',
    title: 'Focused Tutoring Sessions',
    category: 'Education',
    image: '/images/education.jpg',
    description: 'Voluntary educators helping young players with secondary homework.'
  },
  {
    id: 'gal-3',
    title: 'Warmup Drills',
    category: 'Training',
    image: '/images/tournament.jpg',
    description: 'Morning physical training routines at our main pitch.'
  },
  {
    id: 'gal-4',
    title: 'Community Consultation',
    category: 'Community',
    image: '/images/community.jpg',
    description: 'Traditional leaders and parents discussing youth welfare.'
  },
  {
    id: 'gal-5',
    title: 'Sponsorship Material Delivery',
    category: 'Events',
    image: '/images/back-to-school.jpg',
    description: 'Handing out textbooks and pencils to our junior players.'
  },
  {
    id: 'gal-6',
    title: 'Celebrating Together',
    category: 'Football',
    image: '/images/hero.jpg',
    description: 'Smiles and footballs. Kids celebrating a friendly victory.'
  },
  {
    id: 'gal-7',
    title: 'Tactical Coaching Session',
    category: 'Training',
    image: '/images/football.jpg',
    description: 'Coaches breaking down tactics before a friendly match.'
  },
  {
    id: 'gal-8',
    title: 'Community Healthcare Talk',
    category: 'Community',
    image: '/images/health.jpg',
    description: 'Interactive session teaching boys and girls basic health practices.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Through the Tochukwu Nwankwo Foundation, my son Emeka not only learned professional football, but they paid his secondary school fees and kept him focused. Today, his future is bright and full of opportunity.",
    author: "Mrs. Ngozi Chibuzor",
    role: "Parent of Academy Graduate",
    location: "Nnewi, Anambra",
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 'test-2',
    quote: "Simy Nwankwo’s story inspired me, and playing in his annual U18 tournament changed my life. Scouts saw me, and TNF supported me academically. I am now confident both on the pitch and in life.",
    author: "Kingsley Okafor",
    role: "U18 Tournament MVP",
    location: "Onitsha, Anambra",
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 'test-3',
    quote: "TNF is a stellar partner for our schools. Their strict 'No School, No Play' enforcement keeps young boys attending class, doing their tutoring worksheets, and staying away from crime.",
    author: "Principal Okey Nwachukwu",
    role: "Community Education Stakeholder",
    location: "Awka, Anambra",
    image: "/images/testimonial-3.jpg"
  }
];

export const statsData = [
  { value: '1,000+', label: 'Active Youths Empowered' },
  { value: '82%', label: 'School/Tutoring Connection' },
  { value: '150+', label: 'Educational Scholarships' },
  { value: '16', label: 'Teams in SIMY Nwankwo Cup' },
  { value: '3', label: 'Local Pitches Renovated' }
];

export const founderBio = {
  name: "Tochukwu Nwankwo",
  title: "Founder & Executive Director",
  bio: "Tochukwu Nwankwo is a passionate philanthropist, community leader, and visionary dedicated to elevating young Nigerian lives. Witnessing the immense latent athletic and creative talent in Anambra State going unnoticed due to a lack of educational support, coaching, and international pipelines, Tochukwu established the foundation. His conviction is simple: that every child, regardless of birth status, should have an athletic and academic platform to realize their potential. Together with his brother, the renowned professional striker Simeon 'Simy' Nwankwo, Tochukwu has created a sustainable, world-class model of sports for social development.",
  image: "/images/founder.jpg"
};

export const patronBio = {
  name: "Simeon 'Simy' Nwankwo",
  title: "Grand Patron & Benefactor",
  bio: "Simeon Tochukwu Nwankwo, widely known in the global football landscape as 'Simy', is a professional Nigerian striker who has played at the highest levels of Italian Serie A (Crotone, Salernitana) and the Nigeria National Team (Super Eagles). Rising from humble beginnings in Nigeria to break goal-scoring records in Europe, Simy is the ultimate inspiration for TNF athletes. He serves as the primary sponsor of the SIMY Nwankwo Annual U18 Tournament, providing funds, premium kits, international scouts, and mentorship to inspire the next generation of Nigerian stars to play with integrity and study with vigor.",
  image: "/images/patron.jpg"
};

export const contactInfo = {
  address: "House 10, Ajibade Crescent, Ambassador Ville, Lugbe, Abuja",
  email: "contact@tnfound.com",
  phones: ["+234 703 038 5129"]
};

