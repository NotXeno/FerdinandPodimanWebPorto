// Ferdinand Podiman — Professional Colorist
export const personalInfo = {
  name: "Ferdinand Podiman",
  title: "Professional Colorist",
  subtitle: "Crafting cinematic visuals & emotional stories through color — grading for film, commercial & music video since 2018.",
  email: "ferdi.podiman@gmail.com",
  phone: "+62 821-1371-6093",
  whatsapp: "6282113716093", // WhatsApp — wa.me link
  location: "Jakarta, Indonesia",
  avatar: "/images/avatar.webp",
  instagram: "https://instagram.com/ferdipodiman",
  linkedin: "https://www.linkedin.com/in/ferdinand-podiman/",
};

export const stats = [
  { value: "Since 2018", label: "Years Experience", sublabel: "Creative Industry" },
  { value: "10+", label: "Events", sublabel: "Speaker & Teacher" },
  { value: "660+", label: "Audience", sublabel: "Mentored & Inspired" },
  { value: "20+", label: "Clients Handled", sublabel: "Short Film, Ads, Social Media" },
];

export const about = {
  description: `I'm Ferdinand Podiman, a Professional Colorist based in Indonesia, shaping visuals that feel since 2018. From indie films to national commercials and music videos, I specialize in DaVinci Resolve and cinematic color science to translate directors' visions into emotion.

Beyond the suite, I'm passionate about sharing knowledge. I've taught and presented at 10+ events — workshops, seminars, and masterclasses — reaching 660+ aspiring filmmakers, colorists, and students. I believe color is not just correction; it's storytelling.`,
  experience: [
    {
      role: "Professional Colorist — Freelance",
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

// Workshop (Speaker at Workshop) — photo documentation of Ferdinand as speaker.
// Grouped by venue to match Drive folders. Photos in public/assets/workshop/<slug>/ (.webp)
export interface WorkshopPhoto {
  id: string;
  title: string;
  date: string;
  image: string;
  tags: string[];
}

export interface WorkshopAlbum {
  id: string;
  title: string;
  date: string;
  cover: string;
  photos: WorkshopPhoto[];
}

function wsPhotos(
  albumId: string,
  venue: string,
  date: string,
  slug: string,
  files: string[],
): WorkshopPhoto[] {
  return files.map((f, i) => ({
    id: `${albumId}-${i + 1}`,
    title: `Speaker — ${venue}`,
    date,
    image: `/assets/workshop/${slug}/${f}`,
    tags: ["Speaker", "Workshop", date],
  }));
}

export const workshopAlbums: WorkshopAlbum[] = [
  {
    id: "covenant-2024",
    title: "Covenant City Church - 2024",
    date: "2024",
    cover: "/assets/workshop/covenant-2024/cover.webp",
    photos: wsPhotos("covenant-2024", "Covenant City Church 2024", "2024", "covenant-2024", [
      "cover.webp",
      "20240406-105938.webp",
      "20240406-110828.webp",
      "20240406-112050.webp",
      "20240406-112307.webp",
      "20240406-122706.webp",
      "20240406-123953.webp",
    ]),
  },
  {
    id: "doss-2025",
    title: "DOSS Vaganza - 2025",
    date: "2025",
    cover: "/assets/workshop/doss-2025/cover.webp",
    photos: wsPhotos("doss-2025", "DOSS Vaganza 2025", "2025", "doss-2025", [
      "cover.webp",
      "20251129-113203.webp",
      "20251129-120024.webp",
      "20251129-120122.webp",
      "20251129-121913.webp",
      "20251129-123431.webp",
      "dsc09727.webp",
    ]),
  },
  {
    id: "isi-surakarta-2025",
    title: "ISI Surakarta - 2025",
    date: "2025",
    cover: "/assets/workshop/isi-surakarta-2025/cover.webp",
    photos: wsPhotos("isi-surakarta-2025", "ISI Surakarta 2025", "2025", "isi-surakarta-2025", [
      "cover.webp",
      "dsc04504.webp",
      "fsp00024.webp",
      "fsp06164.webp",
      "fsp06173.webp",
      "fsp06181.webp",
    ]),
  },
  {
    id: "isi-yogyakarta-2025",
    title: "ISI Yogyakarta - 2025",
    date: "2025",
    cover: "/assets/workshop/isi-yogyakarta-2025/cover.webp",
    photos: wsPhotos("isi-yogyakarta-2025", "ISI Yogyakarta 2025", "2025", "isi-yogyakarta-2025", [
      "cover.webp",
      "dsc00779.webp",
      "dsc00835.webp",
      "dsc00836.webp",
      "dsc00837.webp",
      "dsc00850.webp",
      "dsc00856.webp",
      "dsc08397.webp",
      "dsc08402.webp",
      "dsc08408.webp",
      "dsc08415.webp",
    ]),
  },
  {
    id: "jfa-2025",
    title: "Jogja Film Academy (JFA) - 2025",
    date: "2025",
    cover: "/assets/workshop/jfa-2025/cover.webp",
    photos: wsPhotos("jfa-2025", "Jogja Film Academy (JFA) 2025", "2025", "jfa-2025", [
      "cover.webp",
      "20251107-111917.webp",
      "20251107-112217.webp",
      "20251107-154852.webp",
      "20251107-154857.webp",
      "img-5515.webp",
      "img-5518-2.webp",
      "img-5521-2.webp",
    ]),
  },
  {
    id: "segi-2026",
    title: "Segi Film Institute - 2026",
    date: "2026",
    cover: "/assets/workshop/segi-2026/cover.webp",
    photos: wsPhotos("segi-2026", "Segi Film Institute 2026", "2026", "segi-2026", [
      "cover.webp",
      "drc09537.webp",
      "drc09541.webp",
      "drc09573.webp",
      "drc09576.webp",
      "drc09579.webp",
    ]),
  },
  {
    id: "udinus-2026",
    title: "UDINUS Semarang - 2026",
    date: "2026",
    cover: "/assets/workshop/udinus-2026/cover.webp",
    photos: wsPhotos("udinus-2026", "UDINUS Semarang 2026", "2026", "udinus-2026", [
      "cover.webp",
      "drc09256.webp",
      "drc09291.webp",
      "drc09303.webp",
      "drc09341.webp",
      "drc09345.webp",
      "drc09369.webp",
      "drc09389.webp",
      "drc09391.webp",
      "drc09399.webp",
      "drc09423.webp",
      "drc09435.webp",
      "drc09436.webp",
      "drc09442.webp",
    ]),
  },
];

// Flat list kept for backwards-compat (derived from albums)
export const workshops: WorkshopPhoto[] = workshopAlbums.flatMap((a) => a.photos);

export const events = [
  { title: "Color Grading Workshop", audience: "15+", year: "2026", role: "Keynote Speaker", location: "Segi Film Institute" },
  { title: "Color Grading Workshop", audience: "25+", year: "2026", role: "Keynote Speaker", location: "UDINUS Semarang" },
  { title: "Color Grading Workshop", audience: "10+", year: "2026", role: "Keynote Speaker", location: "Life Messenger Community Church" },
  { title: "Color Grading Workshop", audience: "50+", year: "2025", role: "Keynote Speaker", location: "DOSS Vaganza" },
  { title: "Color Grading Workshop", audience: "35+", year: "2025", role: "Keynote Speaker", location: "Institut Seni Indonesia (ISI) Surakarta" },
  { title: "Color Grading Workshop", audience: "35+", year: "2025", role: "Keynote Speaker", location: "Institut Seni Indonesia (ISI) Yogyakarta" },
  { title: "Color Grading Workshop", audience: "60+", year: "2025", role: "Keynote Speaker", location: "Jogja Film Academy (JFA)" },
  { title: "Color Grading Workshop", audience: "8", year: "2024", role: "Keynote Speaker", location: "Covenant City Church" },
  { title: "+ Online Classes", audience: "390+ total", year: "2023–2026", role: "Instructor", location: "Online" },
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

export interface OfflineClassPhoto {
  id: string;
  title: string;
  date: string;
  image: string;
  tags: string[];
}

export interface OfflineClassAlbum {
  id: string;
  title: string;
  date: string;
  cover: string;
  photos: OfflineClassPhoto[];
}

// Private Class — grouped by month to match Drive folders.
// Photos live in public/assets/private-offline/ (.webp)
export const offlineClassAlbums: OfflineClassAlbum[] = [
  {
    id: "nov-2025",
    title: "01. November 2025",
    date: "November 2025",
    cover: "/assets/private-offline/DSC08637.webp",
    photos: [
      { id: "nov25-1", title: "Private Class — November 2025", date: "Nov 2025", image: "/assets/private-offline/DSC08637.webp", tags: ["Private Class", "Mentoring"] },
      { id: "nov25-2", title: "Private Class — November 2025", date: "Nov 2025", image: "/assets/private-offline/DSC08624.webp", tags: ["Private Class", "Mentoring"] },
      { id: "nov25-3", title: "Private Class — November 2025", date: "Nov 2025", image: "/assets/private-offline/DSC08468.webp", tags: ["Private Class", "Mentoring"] },
      { id: "nov25-4", title: "Private Class — November 2025", date: "Nov 14, 2025", image: "/assets/private-offline/20251114_124401.webp", tags: ["Workshop", "Jakarta", "Hands-on"] },
      { id: "nov25-5", title: "Private Class — November 2025", date: "Nov 13, 2025", image: "/assets/private-offline/20251113_125748.webp", tags: ["Workshop", "Jakarta", "Hands-on"] },
    ],
  },
  {
    id: "dec-2025",
    title: "02. December 2025",
    date: "December 2025",
    cover: "/assets/private-offline/DSC09252.webp",
    photos: [
      { id: "dec25-1", title: "Private Class — December 2025", date: "Dec 2025", image: "/assets/private-offline/DSC09252.webp", tags: ["Private Class", "Mentoring"] },
      { id: "dec25-2", title: "Private Class — December 2025", date: "Dec 2025", image: "/assets/private-offline/DSC09247.webp", tags: ["Private Class", "Mentoring"] },
      { id: "dec25-3", title: "Private Class — December 2025", date: "Dec 2025", image: "/assets/private-offline/DSC09231.webp", tags: ["Private Class", "Mentoring"] },
      { id: "dec25-4", title: "Private Class — December 2025", date: "Dec 2025", image: "/assets/private-offline/DSC08821.webp", tags: ["Private Class", "Mentoring"] },
      { id: "dec25-5", title: "Private Class — December 2025", date: "Dec 2025", image: "/assets/private-offline/DSC08804.webp", tags: ["Private Class", "Mentoring"] },
      { id: "dec25-6", title: "Private Class — December 2025", date: "Dec 2025", image: "/assets/private-offline/DSC08801.webp", tags: ["Private Class", "Mentoring"] },
    ],
  },
  {
    id: "mar-2026",
    title: "03. March 2026",
    date: "March 2026",
    cover: "/assets/private-offline/DSC00282.webp",
    photos: [
      { id: "mar26-1", title: "Private Class — March 2026", date: "Mar 2026", image: "/assets/private-offline/DSC00282.webp", tags: ["Private Class", "Mentoring"] },
      { id: "mar26-2", title: "Private Class — March 2026", date: "Mar 2026", image: "/assets/private-offline/DSC00251.webp", tags: ["Private Class", "Mentoring"] },
      { id: "mar26-3", title: "Private Class — March 2026", date: "Mar 2026", image: "/assets/private-offline/DSC00187.webp", tags: ["Private Class", "Mentoring"] },
      { id: "mar26-4", title: "Private Class — March 2026", date: "Mar 2026", image: "/assets/private-offline/DSC00181.webp", tags: ["Private Class", "Mentoring"] },
      { id: "mar26-5", title: "Private Class — March 2026", date: "Mar 2026", image: "/assets/private-offline/DSC00159.webp", tags: ["Private Class", "Mentoring"] },
    ],
  },
  {
    id: "apr-2026",
    title: "04. April 2026",
    date: "April 2026",
    cover: "/assets/private-offline/DSC00741.webp",
    photos: [
      { id: "apr26-1", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00741.webp", tags: ["Private Class", "Mentoring"] },
      { id: "apr26-2", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00724.webp", tags: ["Private Class", "Mentoring"] },
      { id: "apr26-3", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00689.webp", tags: ["Private Class", "Mentoring"] },
      { id: "apr26-4", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00652.webp", tags: ["Private Class", "Mentoring"] },
      { id: "apr26-5", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00572.webp", tags: ["Private Class", "Mentoring"] },
      { id: "apr26-6", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00567.webp", tags: ["Private Class", "Mentoring"] },
      { id: "apr26-7", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00523.webp", tags: ["Private Class", "Mentoring"] },
      { id: "apr26-8", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00521.webp", tags: ["Private Class", "Mentoring"] },
      { id: "apr26-9", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00457.webp", tags: ["Private Class", "Mentoring"] },
      { id: "apr26-10", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00456.webp", tags: ["Private Class", "Mentoring"] },
      { id: "apr26-11", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00441.webp", tags: ["Private Class", "Mentoring"] },
      { id: "apr26-12", title: "Private Class — April 2026", date: "Apr 2026", image: "/assets/private-offline/DSC00416.webp", tags: ["Private Class", "Mentoring"] },
    ],
  },
];

// Flat list kept for backwards-compat (derived from albums)
export const offlineClasses: OfflineClassPhoto[] = offlineClassAlbums.flatMap((a) => a.photos);

export const contact = {
  email: personalInfo.email,
  phone: personalInfo.phone,
  whatsapp: personalInfo.whatsapp,
  whatsappUrl: `https://wa.me/6282113716093?text=${encodeURIComponent("Halo Ferdinand, saya tertarik dengan jasa color grading Anda. Bisa diskusi project?")}`,
  linkedin: personalInfo.linkedin,
  instagram: personalInfo.instagram,
  message: "Have a film, commercial or music video that needs soul through color? Let's talk looks, workflow and story.",
};

// NOTE: Photo upload — keep for reference (no videos on this site)
// - Photo (.webp preferred) -> public/images/avatar.webp (hero) + public/assets/photo-profile/, public/assets/certificates/, public/assets/workshop/<slug>/, public/assets/online-class/, public/assets/private-offline/
