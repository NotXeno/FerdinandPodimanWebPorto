// Ferdinand Podimand — Professional Color Grader
export const personalInfo = {
  name: "Ferdinand Podimand",
  title: "Professional Color Grader",
  subtitle: "Crafting cinematic visuals & emotional stories through color — 8 years of grading for film, commercial & music video.",
  email: "ferdinand.podimand@email.com",
  phone: "+62 821-1371-6093",
  whatsapp: "6282113716093", // WhatsApp — wa.me link
  location: "Jakarta, Indonesia",
  avatar: "/images/avatar.webp",
  instagram: "https://instagram.com/ferdipodiman",
  linkedin: "https://www.linkedin.com/in/ferdinand-podiman/",
  behance: "https://behance.net/ferdinandpodimand",
  vimeo: "https://vimeo.com/ferdinandpodimand",
  github: "https://github.com/ferdinandpodimand",
};

export const stats = [
  { value: "8+", label: "Years Experience", sublabel: "Film & Commercial" },
  { value: "10+", label: "Events", sublabel: "Speaker & Teacher" },
  { value: "660+", label: "Audience", sublabel: "Mentored & Inspired" },
  { value: "100+", label: "Projects Graded", sublabel: "Features, Ads, MVs" },
];

export const about = {
  description: `I'm Ferdinand Podimand, a Professional Color Grader based in Indonesia with 8 years of experience shaping visuals that feel. From indie films to national commercials and music videos, I specialize in DaVinci Resolve and cinematic color science to translate directors' visions into emotion.

Beyond the suite, I'm passionate about sharing knowledge. I've taught and presented at 10+ events — workshops, seminars, and masterclasses — reaching 660+ aspiring filmmakers, colorists, and students. I believe color is not just correction; it's storytelling.`,
  highlight: "Color is where technical precision meets emotional intuition.",
  skills: [
    { category: "Color Grading", items: ["DaVinci Resolve", "Color Science", "Film Emulation", "HDR Grading", "ACES Workflow", "Look Development"] },
    { category: "Post Production", items: ["Adobe Premiere Pro", "Final Cut Pro", "After Effects", "Shot Matching", "Skin Tone Control", "Grain & Texture"] },
    { category: "Tools & Workflow", items: ["Blackmagic RAW", "RED Workflow", "ARRI LogC", "Sony S-Log", "Calibration", "On-Set DIT"] },
    { category: "Teaching & Speaking", items: ["Workshops", "Masterclasses", "Public Speaking", "Mentoring", "Curriculum Design", "Community Building"] },
  ],
  experience: [
    {
      role: "Professional Color Grader — Freelance",
      company: "Film, Commercial & Music Video",
      period: "2016 — Present",
      description: "Lead color grading for 100+ projects across narrative, commercial and music video. Collaborated with directors & DPs to develop signature looks and streamlined ACES/DaVinci pipelines.",
    },
    {
      role: "Presenter & Speaker",
      company: "10+ Industry Events & Seminars",
      period: "2018 — Present",
      description: "Invited speaker for color grading masterclasses, film festivals and creative industry seminars. Shared workflows and case studies with 660+ attendees nationwide.",
    },
    {
      role: "Teacher & Mentor",
      company: "Workshops & Private Mentoring",
      period: "2019 — Present",
      description: "Designed and led hands-on grading workshops for beginners to advanced colorists. Mentored emerging talents on color theory, DaVinci Resolve and client work.",
    },
  ],
};

export const journey = [
  { year: "2016", title: "Journey Begins", desc: "Started grading indie shorts on DaVinci Resolve, obsessing over skin tones and film emulation." },
  { year: "2018", title: "First Big Break", desc: "Graded first national commercial and began speaking at local filmmaker meetups." },
  { year: "2020", title: "Teaching Era", desc: "Launched workshop series; 200+ students in first year. Refined ACES & HDR workflows." },
  { year: "2022", title: "100 Projects Milestone", desc: "Crossed 100 graded projects — features, ads, and music videos with repeat clients." },
  { year: "2024", title: "10+ Events, 660+ Audience", desc: "Recognized as go-to color educator. Keynote at major creative industry summit." },
  { year: "Now", title: "Still Grading, Still Learning", desc: "Exploring HDR, film print emulation and pushing cinematic storytelling through color." },
];

export const certificates = [
  {
    id: "c1",
    title: "DaVinci Resolve Beginner Certification",
    issuer: "Blackmagic Design",
    year: "2025",
    image: "/assets/certificates/BEGINNER20-EN-ENDUSER_CertLetter_20250926_161939.webp",
    description: "Official DaVinci Resolve beginner end-user certification — core grading workflow, node structure, and delivery.",
    tags: ["DaVinci Resolve", "Beginner", "Certification"],
  },
  {
    id: "c2",
    title: "Certificate of Completion",
    issuer: "Color Grading Program",
    year: "2024",
    image: "/assets/certificates/Certificate of Completion - Ferdinand Podiman.webp",
    description: "Comprehensive color grading course completion — advanced workflows, look development, and client delivery.",
    tags: ["Color Grading", "Course Completion", "Advanced"],
  },
  {
    id: "c3",
    title: "Color Science & Grading Certification",
    issuer: "Blackmagic Design",
    year: "2026",
    image: "/assets/certificates/COLOR20-EN-ENDUSER_CertLetter_20260125_135801.webp",
    description: "Color science end-user certification — color management, ACES workflow, HDR grading, and display calibration.",
    tags: ["Color Science", "ACES", "HDR", "Calibration"],
  },
  {
    id: "c4",
    title: "DaVinci Resolve Editor Certification",
    issuer: "Blackmagic Design",
    year: "2026",
    image: "/assets/certificates/EDIT20-EN-ENDUSER_CertLetter_20260212_212303.webp",
    description: "Editor end-user certification — editing workflow, timeline management, effects, and Fairlight audio basics.",
    tags: ["DaVinci Resolve", "Editing", "Fairlight", "Certification"],
  },
];

// Workshop — photo documentation of Ferdinand as speaker/teacher.
// Drop photos into public/assets/workshop/ (.webp preferred) and add an entry per photo.
export const workshops: {
  id: string;
  title: string;
  date: string;
  image: string;
  tags: string[];
}[] = [
  // Example (uncomment after uploading):
  // { id: "ws1", title: "Speaker — Color Grading Workshop", date: "2024", image: "/assets/workshop/workshop-1.webp", tags: ["Speaker", "Workshop", "DaVinci Resolve"] },
];

export const events = [
  { title: "Color as Storytelling — Keynote", audience: "250+", year: "2024", role: "Keynote Speaker", location: "Jakarta Creative Summit" },
  { title: "DaVinci Resolve Masterclass", audience: "120+", year: "2023", role: "Lead Instructor", location: "Film Workshop Series" },
  { title: "Film Emulation Workshop", audience: "80+", year: "2023", role: "Presenter", location: "Indie Film Fest" },
  { title: "Commercial Grading Breakdown", audience: "60+", year: "2022", role: "Speaker", location: "Adobe Creative Meetup" },
  { title: "HDR Grading Seminar", audience: "90+", year: "2022", role: "Panelist", location: "Broadcast Tech Expo" },
  { title: "+ 5 more events", audience: "660+ total", year: "2018–2024", role: "Teacher / Speaker", location: "Nationwide" },
];

export const onlineClasses = [
  {
    id: "oc1",
    title: "Color Grading Fundamentals — Session 1",
    date: "Sep 11, 2023",
    image: "/assets/online-class/Screenshot 2023-09-11 184216.webp",
    tags: ["DaVinci Resolve", "Basics", "Live Class"],
  },
  {
    id: "oc2",
    title: "Color Grading Fundamentals — Session 2",
    date: "Sep 11, 2023",
    image: "/assets/online-class/Screenshot 2023-09-11 200037.webp",
    tags: ["Node Structure", "Scopes", "Live Class"],
  },
  {
    id: "oc3",
    title: "Advanced Look Development",
    date: "Sep 13, 2023",
    image: "/assets/online-class/Screenshot 2023-09-13 205645.webp",
    tags: ["Look Dev", "Film Emulation", "Advanced"],
  },
  {
    id: "oc4",
    title: "Commercial Grading Workflow",
    date: "Sep 20, 2023",
    image: "/assets/online-class/Screenshot 2023-09-20 210307.webp",
    tags: ["Commercial", "ACES", "Client Work"],
  },
  {
    id: "oc5",
    title: "HDR Grading Masterclass",
    date: "Aug 4, 2025",
    image: "/assets/online-class/Screenshot 2025-08-04 173313.webp",
    tags: ["HDR", "Dolby Vision", "Masterclass"],
  },
  {
    id: "oc6",
    title: "Skin Tone Mastery Workshop",
    date: "Aug 6, 2025",
    image: "/assets/online-class/Screenshot 2025-08-06 210731.webp",
    tags: ["Skin Tone", "Matching", "Workshop"],
  },
  {
    id: "oc7",
    title: "Music Video Grading Techniques",
    date: "Aug 6, 2025",
    image: "/assets/online-class/Screenshot 2025-08-06 210801.webp",
    tags: ["Music Video", "Creative", "Workshop"],
  },
  {
    id: "oc8",
    title: "Film Emulation Deep Dive",
    date: "Aug 11, 2025",
    image: "/assets/online-class/Screenshot 2025-08-11 011235.webp",
    tags: ["Film Emulation", "Grain", "Halation"],
  },
  {
    id: "oc9",
    title: "Private Mentoring — Portfolio Review",
    date: "Aug 12, 2025",
    image: "/assets/online-class/Screenshot 2025-08-12 125356.webp",
    tags: ["Mentoring", "Portfolio Review", "1-on-1"],
},
];

export const offlineClasses = [
  { id: "ofc1", title: "Offline Workshop — Jakarta 2025", date: "Nov 13, 2025", image: "/assets/private-offline/20251113_125748.webp", tags: ["Workshop", "Jakarta", "Hands-on"] },
  { id: "ofc2", title: "Offline Workshop — Jakarta 2025", date: "Nov 14, 2025", image: "/assets/private-offline/20251114_124401.webp", tags: ["Workshop", "Jakarta", "Hands-on"] },
  { id: "ofc3", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00159.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc4", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00181.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc5", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00187.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc6", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00251.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc7", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00282.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc8", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00416.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc9", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00441.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc10", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00456.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc11", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00457.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc12", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00521.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc12b", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00523.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc13", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00567.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc14", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00572.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc15", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00652.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc16", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00689.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc17", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00724.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc18", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC00741.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc19", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC08468.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc20", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC08624.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc21", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC08637.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc22", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC08801.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc23", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC08804.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc24", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC08821.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc25", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC09231.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc26", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC09247.webp", tags: ["Private Class", "Mentoring"] },
  { id: "ofc27", title: "Private Class Session", date: "2024", image: "/assets/private-offline/DSC09252.webp", tags: ["Private Class", "Mentoring"] },
];

export const contact = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  whatsapp: personalInfo.whatsapp,
  whatsappUrl: `https://wa.me/6282113716093?text=${encodeURIComponent("Halo Ferdinand, saya tertarik dengan jasa color grading Anda. Bisa diskusi project?")}`,
  linkedin: personalInfo.linkedin,
  instagram: personalInfo.instagram,
  vimeo: personalInfo.vimeo,
  behance: personalInfo.behance,
  github: personalInfo.github,
  message: "Have a film, commercial or music video that needs soul through color? Let's talk looks, workflow and story.",
};

// NOTE: Photo upload — keep for reference (no videos on this site)
// - Photo (.webp preferred) -> public/images/avatar.webp (hero) + public/assets/photo-profile/, public/assets/certificates/, public/assets/workshop/, public/assets/online-class/, public/assets/private-offline/
