// Ferdinand Podiman — Professional Colorist
export const personalInfo = {
  name: "Ferdinand Podiman",
  title: "Professional Colorist",
  subtitle: "Crafting cinematic visuals & emotional stories through color — grading for film, commercial & music video since 2018.",
  email: "ferdi.podiman@gmail.com",
  phone: "+62 821-1371-6093",
  whatsapp: "6282113716093", // WhatsApp — wa.me link
  location: "Tangerang, Indonesia",
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
  description: `Starting his video editing career in 2018 and pursuing film studies in 2019, Ferdinand Podiman has worked on commercial videos, product videos, and short films. Armed with official DaVinci Resolve certification from Blackmagic Design, he specializes in color grading and has shared his knowledge with 660+ participants through workshops and private classes. He now also works remotely as an Editor & Colorist for an international creative agency.`,
  experience: [
    {
      role: "Freelance Video Editor & Colorist",
      company: "",
      period: "May 2025 — Present",
      points: [
        "Edited and color-graded high-engagement Instagram Reels for an Australian media brand.",
        "Managed end-to-end video editing for promotional Instagram content of a prominent hospitality and sports event.",
        "Executed video editing and color grading for social media content for an international hospitality brand.",
      ],
    },
    {
      role: "Creative Director",
      company: "Grafr Media (Work From Anywhere)",
      period: "June 2023 — Present",
      points: [
        "Developed creative content concepts, scripts, and editorial posting schedules for diverse clients.",
        "Shooting on-site photo & video sessions.",
        "Directed and provided detailed technical briefs to editors for Instagram Reels and YouTube video production.",
      ],
    },
    {
      role: "Videographer, Editor, Colorist",
      company: "CV Cahaya Mega Sukses (HHRR) (Work From Office)",
      period: "January 2023 — July 2025",
      points: [
        "Managed on-site and studio-based photo and video shoots featuring models and diverse product lines.",
        "Performed advanced video editing and color grading tailored for social media platforms, including TikTok and Instagram.",
      ],
    },
    {
      role: "Videographer, Video Editor and Colorist",
      company: "Freelancer",
      period: "2018 — Present",
      points: [],
    },
  ],
};

export const journey = [
  { year: "2026", title: "The Creative Calling", desc: "Life Messenger Community Church" },
  { year: "2026", title: "Editing & Audio Post Production", desc: "Segi Film Institute (SFI)" },
  { year: "2026", title: "Color Grading in DaVinci Resolve", desc: "UDINUS Semarang" },
  { year: "2025", title: "Your First Film Experience", desc: "DOSS Vaganza" },
  { year: "2025", title: "Editing Beyond Limits DaVinci Resolve Roadshow", desc: "Jogja Film Academy" },
  { year: "2025", title: "Introduction to DaVinci Resolve", desc: "ISI Surakarta • ISI Yogyakarta" },
  { year: "2024", title: "Introduction to Color Grading and Editing in DaVinci Resolve", desc: "Mezink" },
  { year: "2024", title: "Editing with DaVinci Resolve", desc: "Covenant City Church" },
];

export const certificates = [
  {
    id: "c1",
    title: "The Beginner's Guide to DaVinci Resolve 2.0",
    issuer: "Blackmagic Design",
    year: "2025",
    image: "/assets/certificates/BEGINNER20-EN-ENDUSER_CertLetter_20250926_161939.webp",
    description: "Official DaVinci Resolve beginner end-user certification — core grading workflow, node structure, and delivery.",
    tags: ["DaVinci Resolve", "Beginner", "Certification"],
  },
  {
    id: "c2",
    title: "Christian Film School",
    issuer: "Tomorrow's Filmmakers",
    year: "2024",
    image: "/assets/certificates/Certificate of Completion - Ferdinand Podiman.webp",
    description: "Comprehensive color grading course completion — advanced workflows, look development, and client delivery.",
    tags: ["Color Grading", "Course Completion", "Advanced"],
  },
  {
    id: "c3",
    title: "The Colorist Guide to DaVinci Resolve 2.0",
    issuer: "Blackmagic Design",
    year: "2026",
    image: "/assets/certificates/COLOR20-EN-ENDUSER_CertLetter_20260125_135801.webp",
    description: "Color science end-user certification — color management, ACES workflow, HDR grading, and display calibration.",
    tags: ["Color Science", "ACES", "HDR", "Calibration"],
  },
  {
    id: "c4",
    title: "The Editor's Guide to DaVinci Resolve 2.0",
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
    id: "lmcc-2026",
    title: "Life Messenger Community Church (LMCC) - 2026",
    date: "2026",
    cover: "/assets/workshop/lmcc-2026/dsc01883.webp",
    photos: wsPhotos("lmcc-2026", "Life Messenger Community Church (LMCC)", "2026", "lmcc-2026", [
      "dsc01883.webp",
      "dsc01930.webp",
      "dsc01935.webp",
      "dsc01938.webp",
      "dscf3251.webp",
      "dscf3263.webp",
      "dscf3267.webp",
      "dscf3273.webp",
      "dscf3288.webp",
      "dscf3302.webp",
      "dscf3332.webp",
      "dscf3340.webp",
      "dscf3356.webp",
      "dscf3357.webp",
      "screenshot-2026-09-26-143054.webp",
      "screenshot-2026-09-26-143152.webp",
      "screenshot-2026-09-26-143211.webp",
      "screenshot-2026-09-26-143228.webp",
      "screenshot-2026-09-26-143449.webp",
      "screenshot-2026-09-26-143458.webp",
      "screenshot-2026-10-12-112418.webp",
      "screenshot-2026-10-12-112507.webp",
      "screenshot-2026-10-12-112552.webp",
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
];

// Flat list kept for backwards-compat (derived from albums)
export const workshops: WorkshopPhoto[] = workshopAlbums.flatMap((a) => a.photos);

export const events = [
  { title: "Color Grading Workshop", audience: "15+", year: "2026", location: "Segi Film Institute" },
  { title: "Color Grading Workshop", audience: "25+", year: "2026", location: "UDINUS Semarang" },
  { title: "Color Grading Workshop", audience: "10+", year: "2026", location: "Life Messenger Community Church" },
  { title: "Color Grading Workshop", audience: "50+", year: "2025", location: "DOSS Vaganza" },
  { title: "Color Grading Workshop", audience: "35+", year: "2025", location: "Institut Seni Indonesia (ISI) Surakarta" },
  { title: "Color Grading Workshop", audience: "35+", year: "2025", location: "Institut Seni Indonesia (ISI) Yogyakarta" },
  { title: "Color Grading Workshop", audience: "60+", year: "2025", location: "Jogja Film Academy (JFA)" },
  { title: "Color Grading Workshop", audience: "8", year: "2024", location: "Covenant City Church" },
  { title: "+ Online Classes", audience: "390+ total", year: "2023–2026", location: "Online" },
];

export interface OnlineClassPhoto {
  id: string;
  title: string;
  date: string;
  image: string;
}

export interface OnlineClassAlbum {
  id: string;
  title: string;
  date: string;
  cover: string;
  photos: OnlineClassPhoto[];
}

export const onlineClassAlbums: OnlineClassAlbum[] = [
  {
    id: "lmcc-the-creative-calling-online-class",
    title: "LMCC The Creative Calling Online Class",
    date: "2026",
    cover: "/assets/online-class-webp/lmcc-the-creative-calling-online-class/screenshot-2026-10-15-154423.webp",
    photos: [
      { id: "screenshot-2026-10-15-154423", title: "LMCC The Creative Calling Online Class", date: "2026", image: "/assets/online-class-webp/lmcc-the-creative-calling-online-class/screenshot-2026-10-15-154423.webp" },
      { id: "screenshot-2026-10-15-154435", title: "LMCC The Creative Calling Online Class", date: "2026", image: "/assets/online-class-webp/lmcc-the-creative-calling-online-class/screenshot-2026-10-15-154435.webp" },
      { id: "screenshot-2026-10-15-154452", title: "LMCC The Creative Calling Online Class", date: "2026", image: "/assets/online-class-webp/lmcc-the-creative-calling-online-class/screenshot-2026-10-15-154452.webp" },
      { id: "screenshot-2026-10-15-154506", title: "LMCC The Creative Calling Online Class", date: "2026", image: "/assets/online-class-webp/lmcc-the-creative-calling-online-class/screenshot-2026-10-15-154506.webp" },
      { id: "screenshot-2026-10-15-154514", title: "LMCC The Creative Calling Online Class", date: "2026", image: "/assets/online-class-webp/lmcc-the-creative-calling-online-class/screenshot-2026-10-15-154514.webp" },
      { id: "screenshot-2026-10-15-154533", title: "LMCC The Creative Calling Online Class", date: "2026", image: "/assets/online-class-webp/lmcc-the-creative-calling-online-class/screenshot-2026-10-15-154533.webp" },
      { id: "screenshot-2026-10-15-154555", title: "LMCC The Creative Calling Online Class", date: "2026", image: "/assets/online-class-webp/lmcc-the-creative-calling-online-class/screenshot-2026-10-15-154555.webp" },
    ],
  },
  {
    id: "private-online-class",
    title: "Private Online Class",
    date: "2023 – 2026",
    cover: "/assets/online-class-webp/private-online-class/screenshot-2023-09-11-200037.webp",
    photos: [
      { id: "screenshot-2023-09-11-200037", title: "Private Online Class", date: "2023 – 2026", image: "/assets/online-class-webp/private-online-class/screenshot-2023-09-11-200037.webp" },
      { id: "screenshot-2023-09-20-210307", title: "Private Online Class", date: "2023 – 2026", image: "/assets/online-class-webp/private-online-class/screenshot-2023-09-20-210307.webp" },
      { id: "screenshot-2025-08-06-210731", title: "Private Online Class", date: "2023 – 2026", image: "/assets/online-class-webp/private-online-class/screenshot-2025-08-06-210731.webp" },
      { id: "screenshot-2025-08-06-210801", title: "Private Online Class", date: "2023 – 2026", image: "/assets/online-class-webp/private-online-class/screenshot-2025-08-06-210801.webp" },
      { id: "screenshot-2025-08-12-125356", title: "Private Online Class", date: "2023 – 2026", image: "/assets/online-class-webp/private-online-class/screenshot-2025-08-12-125356.webp" },
      { id: "screenshot-2025-08-12-125620", title: "Private Online Class", date: "2023 – 2026", image: "/assets/online-class-webp/private-online-class/screenshot-2025-08-12-125620.webp" },
      { id: "screenshot-2026-10-15-154006", title: "Private Online Class", date: "2023 – 2026", image: "/assets/online-class-webp/private-online-class/screenshot-2026-10-15-154006.webp" },
      { id: "screenshot-2026-10-15-154043", title: "Private Online Class", date: "2023 – 2026", image: "/assets/online-class-webp/private-online-class/screenshot-2026-10-15-154043.webp" },
      { id: "screenshot-2026-10-15-154255", title: "Private Online Class", date: "2023 – 2026", image: "/assets/online-class-webp/private-online-class/screenshot-2026-10-15-154255.webp" },
    ],
  },
  {
    id: "segi-film-online-class",
    title: "Segi Film Online Class",
    date: "2026",
    cover: "/assets/online-class-webp/segi-film-online-class/screenshot-2026-10-15-155051.webp",
    photos: [
      { id: "screenshot-2026-10-15-155051", title: "Segi Film Online Class", date: "2026", image: "/assets/online-class-webp/segi-film-online-class/screenshot-2026-10-15-155051.webp" },
      { id: "screenshot-2026-10-15-155127", title: "Segi Film Online Class", date: "2026", image: "/assets/online-class-webp/segi-film-online-class/screenshot-2026-10-15-155127.webp" },
      { id: "screenshot-2026-10-15-155207", title: "Segi Film Online Class", date: "2026", image: "/assets/online-class-webp/segi-film-online-class/screenshot-2026-10-15-155207.webp" },
      { id: "screenshot-2026-10-15-155227", title: "Segi Film Online Class", date: "2026", image: "/assets/online-class-webp/segi-film-online-class/screenshot-2026-10-15-155227.webp" },
      { id: "screenshot-2026-10-15-155243", title: "Segi Film Online Class", date: "2026", image: "/assets/online-class-webp/segi-film-online-class/screenshot-2026-10-15-155243.webp" },
      { id: "screenshot-2026-10-15-155305", title: "Segi Film Online Class", date: "2026", image: "/assets/online-class-webp/segi-film-online-class/screenshot-2026-10-15-155305.webp" },
      { id: "screenshot-2026-10-15-155359", title: "Segi Film Online Class", date: "2026", image: "/assets/online-class-webp/segi-film-online-class/screenshot-2026-10-15-155359.webp" },
    ],
  },
];

export const onlineClasses: OnlineClassPhoto[] = onlineClassAlbums.flatMap((a) => a.photos);


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

export type GradeSample = {
  id: string;
  title: string;
  date: string;
  before: string;
  after: string;
  aspect: string;
};

export const gradingSamples: GradeSample[] = [
  { id: "grade-01", title: "Cocktail", date: "2026", before: "/images/before-after/before-screenshot-2026-10-15-160223.webp", after: "/images/before-after/after-screenshot-2026-10-15-160239.webp", aspect: "16/9" },
  { id: "grade-02", title: "Night Train", date: "2026", before: "/images/before-after/before-screenshot-2026-10-15-160706.webp", after: "/images/before-after/after-screenshot-2026-10-15-160717.webp", aspect: "16/9" },
  { id: "grade-03", title: "LRT Station", date: "2026", before: "/images/before-after/before-screenshot-2026-10-15-160734.webp", after: "/images/before-after/after-screenshot-2026-10-15-160742.webp", aspect: "16/9" },
  { id: "grade-04", title: "Bundaran HI, Jakarta", date: "2026", before: "/images/before-after/before-1-2-1-1-2-1.webp", after: "/images/before-after/after-1-2-2-1-2-2.webp", aspect: "9/16" },
  { id: "grade-05", title: "City Light", date: "2026", before: "/images/before-after/before-1-3-1-1-3-1.webp", after: "/images/before-after/after-1-3-2-1-3-2.webp", aspect: "9/16" },
  { id: "grade-06", title: "Hotel Indonesia Kempinski", date: "2026", before: "/images/before-after/before-1-4-1-1-4-1.webp", after: "/images/before-after/after-1-4-2-1-4-2.webp", aspect: "9/16" },
];

export type AssetPhoto = { id: string; title: string; date: string; image: string };
export type AssetAlbum = { id: string; category: string; title: string; date: string; cover: string; photos: AssetPhoto[] };

export const assetAlbums: AssetAlbum[] = [
  {
    id: "after-movie-lmcc-nusantara-memuji-august-2026",
    category: "After Movie",
    title: "LMCC Nusantara Memuji",
    date: "August 2026",
    cover: "/assets/photo-assets-webp/after-movie-lmcc-nusantara-memuji-august-2026/1-14-1-1-14-1-png.webp",
    photos: [
      { id: "1-14-1-1-14-1-png", title: "LMCC Nusantara Memuji", date: "August 2026", image: "/assets/photo-assets-webp/after-movie-lmcc-nusantara-memuji-august-2026/1-14-1-1-14-1-png.webp" },
      { id: "1-19-1-1-19-1-png", title: "LMCC Nusantara Memuji", date: "August 2026", image: "/assets/photo-assets-webp/after-movie-lmcc-nusantara-memuji-august-2026/1-19-1-1-19-1-png.webp" },
      { id: "1-22-1-1-22-1-png", title: "LMCC Nusantara Memuji", date: "August 2026", image: "/assets/photo-assets-webp/after-movie-lmcc-nusantara-memuji-august-2026/1-22-1-1-22-1-png.webp" },
      { id: "1-23-1-1-23-1-png", title: "LMCC Nusantara Memuji", date: "August 2026", image: "/assets/photo-assets-webp/after-movie-lmcc-nusantara-memuji-august-2026/1-23-1-1-23-1-png.webp" },
      { id: "1-34-1-1-34-1-png", title: "LMCC Nusantara Memuji", date: "August 2026", image: "/assets/photo-assets-webp/after-movie-lmcc-nusantara-memuji-august-2026/1-34-1-1-34-1-png.webp" },
      { id: "1-66-1-1-66-1-png", title: "LMCC Nusantara Memuji", date: "August 2026", image: "/assets/photo-assets-webp/after-movie-lmcc-nusantara-memuji-august-2026/1-66-1-1-66-1-png.webp" },
      { id: "1-67-1-1-67-1-png", title: "LMCC Nusantara Memuji", date: "August 2026", image: "/assets/photo-assets-webp/after-movie-lmcc-nusantara-memuji-august-2026/1-67-1-1-67-1-png.webp" },
      { id: "1-69-1-1-69-1-png", title: "LMCC Nusantara Memuji", date: "August 2026", image: "/assets/photo-assets-webp/after-movie-lmcc-nusantara-memuji-august-2026/1-69-1-1-69-1-png.webp" },
      { id: "1-73-1-1-73-1-png", title: "LMCC Nusantara Memuji", date: "August 2026", image: "/assets/photo-assets-webp/after-movie-lmcc-nusantara-memuji-august-2026/1-73-1-1-73-1-png.webp" },
      { id: "1-87-1-1-87-1-png", title: "LMCC Nusantara Memuji", date: "August 2026", image: "/assets/photo-assets-webp/after-movie-lmcc-nusantara-memuji-august-2026/1-87-1-1-87-1-png.webp" },
    ],
  },
  {
    id: "commercial-cocktails-by-an-told-april-2026",
    category: "Commercial",
    title: "COCKTAILS by AN.Told",
    date: "April 2026",
    cover: "/assets/photo-assets-webp/commercial-cocktails-by-an-told-april-2026/1-1-1-1-1-1-png.webp",
    photos: [
      { id: "1-1-1-1-1-1-png", title: "COCKTAILS by AN.Told", date: "April 2026", image: "/assets/photo-assets-webp/commercial-cocktails-by-an-told-april-2026/1-1-1-1-1-1-png.webp" },
      { id: "1-11-1-1-11-1-png", title: "COCKTAILS by AN.Told", date: "April 2026", image: "/assets/photo-assets-webp/commercial-cocktails-by-an-told-april-2026/1-11-1-1-11-1-png.webp" },
      { id: "1-19-2-1-19-2-png", title: "COCKTAILS by AN.Told", date: "April 2026", image: "/assets/photo-assets-webp/commercial-cocktails-by-an-told-april-2026/1-19-2-1-19-2-png.webp" },
      { id: "1-2-2-1-2-2-1-png", title: "COCKTAILS by AN.Told", date: "April 2026", image: "/assets/photo-assets-webp/commercial-cocktails-by-an-told-april-2026/1-2-2-1-2-2-1-png.webp" },
      { id: "1-2-2-1-2-2-png", title: "COCKTAILS by AN.Told", date: "April 2026", image: "/assets/photo-assets-webp/commercial-cocktails-by-an-told-april-2026/1-2-2-1-2-2-png.webp" },
      { id: "1-21-1-1-21-1-png", title: "COCKTAILS by AN.Told", date: "April 2026", image: "/assets/photo-assets-webp/commercial-cocktails-by-an-told-april-2026/1-21-1-1-21-1-png.webp" },
      { id: "1-3-1-1-3-1-png", title: "COCKTAILS by AN.Told", date: "April 2026", image: "/assets/photo-assets-webp/commercial-cocktails-by-an-told-april-2026/1-3-1-1-3-1-png.webp" },
      { id: "1-3-4-1-3-4-png", title: "COCKTAILS by AN.Told", date: "April 2026", image: "/assets/photo-assets-webp/commercial-cocktails-by-an-told-april-2026/1-3-4-1-3-4-png.webp" },
      { id: "1-8-1-1-8-1-png", title: "COCKTAILS by AN.Told", date: "April 2026", image: "/assets/photo-assets-webp/commercial-cocktails-by-an-told-april-2026/1-8-1-1-8-1-png.webp" },
      { id: "2-1-2-2-1-2-png", title: "COCKTAILS by AN.Told", date: "April 2026", image: "/assets/photo-assets-webp/commercial-cocktails-by-an-told-april-2026/2-1-2-2-1-2-png.webp" },
    ],
  },
  {
    id: "commercial-costess-cafe-bar-november-2025",
    category: "Commercial",
    title: "COSTESS CAFE & BAR",
    date: "November 2025",
    cover: "/assets/photo-assets-webp/commercial-costess-cafe-bar-november-2025/still-2026-02-03-174535-1-1-3-png.webp",
    photos: [
      { id: "still-2026-02-03-174535-1-1-3-png", title: "COSTESS CAFE & BAR", date: "November 2025", image: "/assets/photo-assets-webp/commercial-costess-cafe-bar-november-2025/still-2026-02-03-174535-1-1-3-png.webp" },
      { id: "still-2026-02-03-174535-1-10-3-png", title: "COSTESS CAFE & BAR", date: "November 2025", image: "/assets/photo-assets-webp/commercial-costess-cafe-bar-november-2025/still-2026-02-03-174535-1-10-3-png.webp" },
      { id: "still-2026-02-03-174535-1-2-3-png", title: "COSTESS CAFE & BAR", date: "November 2025", image: "/assets/photo-assets-webp/commercial-costess-cafe-bar-november-2025/still-2026-02-03-174535-1-2-3-png.webp" },
      { id: "still-2026-02-03-174535-1-3-3-png", title: "COSTESS CAFE & BAR", date: "November 2025", image: "/assets/photo-assets-webp/commercial-costess-cafe-bar-november-2025/still-2026-02-03-174535-1-3-3-png.webp" },
      { id: "still-2026-02-03-174535-1-5-3-png", title: "COSTESS CAFE & BAR", date: "November 2025", image: "/assets/photo-assets-webp/commercial-costess-cafe-bar-november-2025/still-2026-02-03-174535-1-5-3-png.webp" },
      { id: "still-2026-02-03-174535-1-8-3-png", title: "COSTESS CAFE & BAR", date: "November 2025", image: "/assets/photo-assets-webp/commercial-costess-cafe-bar-november-2025/still-2026-02-03-174535-1-8-3-png.webp" },
      { id: "still-2026-02-03-174535-1-9-3-png", title: "COSTESS CAFE & BAR", date: "November 2025", image: "/assets/photo-assets-webp/commercial-costess-cafe-bar-november-2025/still-2026-02-03-174535-1-9-3-png.webp" },
      { id: "still-2026-02-03-174535-2-1-3-png", title: "COSTESS CAFE & BAR", date: "November 2025", image: "/assets/photo-assets-webp/commercial-costess-cafe-bar-november-2025/still-2026-02-03-174535-2-1-3-png.webp" },
    ],
  },
  {
    id: "commercial-gym-by-an-told-august-2025",
    category: "Commercial",
    title: "GYM by AN.Told",
    date: "August 2025",
    cover: "/assets/photo-assets-webp/commercial-gym-by-an-told-august-2025/1-11-3-1-11-3-png.webp",
    photos: [
      { id: "1-11-3-1-11-3-png", title: "GYM by AN.Told", date: "August 2025", image: "/assets/photo-assets-webp/commercial-gym-by-an-told-august-2025/1-11-3-1-11-3-png.webp" },
      { id: "1-12-3-1-12-3-1-png", title: "GYM by AN.Told", date: "August 2025", image: "/assets/photo-assets-webp/commercial-gym-by-an-told-august-2025/1-12-3-1-12-3-1-png.webp" },
      { id: "1-13-3-1-13-3-png", title: "GYM by AN.Told", date: "August 2025", image: "/assets/photo-assets-webp/commercial-gym-by-an-told-august-2025/1-13-3-1-13-3-png.webp" },
      { id: "1-15-3-1-15-3-png", title: "GYM by AN.Told", date: "August 2025", image: "/assets/photo-assets-webp/commercial-gym-by-an-told-august-2025/1-15-3-1-15-3-png.webp" },
      { id: "1-24-3-1-24-3-png", title: "GYM by AN.Told", date: "August 2025", image: "/assets/photo-assets-webp/commercial-gym-by-an-told-august-2025/1-24-3-1-24-3-png.webp" },
      { id: "1-5-3-1-5-3-png", title: "GYM by AN.Told", date: "August 2025", image: "/assets/photo-assets-webp/commercial-gym-by-an-told-august-2025/1-5-3-1-5-3-png.webp" },
      { id: "1-6-3-1-6-3-png", title: "GYM by AN.Told", date: "August 2025", image: "/assets/photo-assets-webp/commercial-gym-by-an-told-august-2025/1-6-3-1-6-3-png.webp" },
      { id: "2-1-3-2-1-3-png", title: "GYM by AN.Told", date: "August 2025", image: "/assets/photo-assets-webp/commercial-gym-by-an-told-august-2025/2-1-3-2-1-3-png.webp" },
      { id: "4-1-3-4-1-3-png", title: "GYM by AN.Told", date: "August 2025", image: "/assets/photo-assets-webp/commercial-gym-by-an-told-august-2025/4-1-3-4-1-3-png.webp" },
    ],
  },
  {
    id: "commercial-hospitality-by-an-told-july-2025",
    category: "Commercial",
    title: "HOSPITALITY by AN.Told",
    date: "July 2025",
    cover: "/assets/photo-assets-webp/commercial-hospitality-by-an-told-july-2025/1-13-3-1-13-3-1-png.webp",
    photos: [
      { id: "1-13-3-1-13-3-1-png", title: "HOSPITALITY by AN.Told", date: "July 2025", image: "/assets/photo-assets-webp/commercial-hospitality-by-an-told-july-2025/1-13-3-1-13-3-1-png.webp" },
      { id: "1-14-3-1-14-3-png", title: "HOSPITALITY by AN.Told", date: "July 2025", image: "/assets/photo-assets-webp/commercial-hospitality-by-an-told-july-2025/1-14-3-1-14-3-png.webp" },
      { id: "1-17-3-1-17-3-png", title: "HOSPITALITY by AN.Told", date: "July 2025", image: "/assets/photo-assets-webp/commercial-hospitality-by-an-told-july-2025/1-17-3-1-17-3-png.webp" },
      { id: "1-29-3-1-29-3-png", title: "HOSPITALITY by AN.Told", date: "July 2025", image: "/assets/photo-assets-webp/commercial-hospitality-by-an-told-july-2025/1-29-3-1-29-3-png.webp" },
      { id: "1-3-3-1-3-3-png", title: "HOSPITALITY by AN.Told", date: "July 2025", image: "/assets/photo-assets-webp/commercial-hospitality-by-an-told-july-2025/1-3-3-1-3-3-png.webp" },
      { id: "1-4-3-1-4-3-1-png", title: "HOSPITALITY by AN.Told", date: "July 2025", image: "/assets/photo-assets-webp/commercial-hospitality-by-an-told-july-2025/1-4-3-1-4-3-1-png.webp" },
      { id: "1-4-3-1-4-3-png", title: "HOSPITALITY by AN.Told", date: "July 2025", image: "/assets/photo-assets-webp/commercial-hospitality-by-an-told-july-2025/1-4-3-1-4-3-png.webp" },
      { id: "1-5-3-1-5-3-png", title: "HOSPITALITY by AN.Told", date: "July 2025", image: "/assets/photo-assets-webp/commercial-hospitality-by-an-told-july-2025/1-5-3-1-5-3-png.webp" },
      { id: "1-8-3-1-8-3-png", title: "HOSPITALITY by AN.Told", date: "July 2025", image: "/assets/photo-assets-webp/commercial-hospitality-by-an-told-july-2025/1-8-3-1-8-3-png.webp" },
      { id: "3-1-3-3-1-3-png", title: "HOSPITALITY by AN.Told", date: "July 2025", image: "/assets/photo-assets-webp/commercial-hospitality-by-an-told-july-2025/3-1-3-3-1-3-png.webp" },
    ],
  },
  {
    id: "company-profile-dok-pulo-ampel-february-2025",
    category: "Company Profile",
    title: "DOK PULO AMPEL",
    date: "February 2025",
    cover: "/assets/photo-assets-webp/company-profile-dok-pulo-ampel-february-2025/2-2-1-2-2-1-png.webp",
    photos: [
      { id: "2-2-1-2-2-1-png", title: "DOK PULO AMPEL", date: "February 2025", image: "/assets/photo-assets-webp/company-profile-dok-pulo-ampel-february-2025/2-2-1-2-2-1-png.webp" },
      { id: "still-2026-02-03-120305-1-1-1-png", title: "DOK PULO AMPEL", date: "February 2025", image: "/assets/photo-assets-webp/company-profile-dok-pulo-ampel-february-2025/still-2026-02-03-120305-1-1-1-png.webp" },
      { id: "still-2026-02-03-120305-1-13-1-png", title: "DOK PULO AMPEL", date: "February 2025", image: "/assets/photo-assets-webp/company-profile-dok-pulo-ampel-february-2025/still-2026-02-03-120305-1-13-1-png.webp" },
      { id: "still-2026-02-03-120305-1-150-1-png", title: "DOK PULO AMPEL", date: "February 2025", image: "/assets/photo-assets-webp/company-profile-dok-pulo-ampel-february-2025/still-2026-02-03-120305-1-150-1-png.webp" },
      { id: "still-2026-02-03-120305-1-16-1-png", title: "DOK PULO AMPEL", date: "February 2025", image: "/assets/photo-assets-webp/company-profile-dok-pulo-ampel-february-2025/still-2026-02-03-120305-1-16-1-png.webp" },
      { id: "still-2026-02-03-120305-1-25-1-png", title: "DOK PULO AMPEL", date: "February 2025", image: "/assets/photo-assets-webp/company-profile-dok-pulo-ampel-february-2025/still-2026-02-03-120305-1-25-1-png.webp" },
      { id: "still-2026-02-03-120305-1-34-1-png", title: "DOK PULO AMPEL", date: "February 2025", image: "/assets/photo-assets-webp/company-profile-dok-pulo-ampel-february-2025/still-2026-02-03-120305-1-34-1-png.webp" },
      { id: "still-2026-02-03-120305-1-5-1-png", title: "DOK PULO AMPEL", date: "February 2025", image: "/assets/photo-assets-webp/company-profile-dok-pulo-ampel-february-2025/still-2026-02-03-120305-1-5-1-png.webp" },
      { id: "still-2026-02-03-120305-10-4-1-png", title: "DOK PULO AMPEL", date: "February 2025", image: "/assets/photo-assets-webp/company-profile-dok-pulo-ampel-february-2025/still-2026-02-03-120305-10-4-1-png.webp" },
    ],
  },
  {
    id: "documentary-atma-tantra-rasa-january-2026",
    category: "Documentary",
    title: "ATMA TANTRA RASA",
    date: "January 2026",
    cover: "/assets/photo-assets-webp/documentary-atma-tantra-rasa-january-2026/still-2026-02-03-204240-1-10-1-png.webp",
    photos: [
      { id: "still-2026-02-03-204240-1-10-1-png", title: "ATMA TANTRA RASA", date: "January 2026", image: "/assets/photo-assets-webp/documentary-atma-tantra-rasa-january-2026/still-2026-02-03-204240-1-10-1-png.webp" },
      { id: "still-2026-02-03-204240-1-11-1-png", title: "ATMA TANTRA RASA", date: "January 2026", image: "/assets/photo-assets-webp/documentary-atma-tantra-rasa-january-2026/still-2026-02-03-204240-1-11-1-png.webp" },
      { id: "still-2026-02-03-204240-1-2-1-png", title: "ATMA TANTRA RASA", date: "January 2026", image: "/assets/photo-assets-webp/documentary-atma-tantra-rasa-january-2026/still-2026-02-03-204240-1-2-1-png.webp" },
      { id: "still-2026-02-03-204240-1-3-1-png", title: "ATMA TANTRA RASA", date: "January 2026", image: "/assets/photo-assets-webp/documentary-atma-tantra-rasa-january-2026/still-2026-02-03-204240-1-3-1-png.webp" },
      { id: "still-2026-02-03-204240-1-5-1-png", title: "ATMA TANTRA RASA", date: "January 2026", image: "/assets/photo-assets-webp/documentary-atma-tantra-rasa-january-2026/still-2026-02-03-204240-1-5-1-png.webp" },
      { id: "still-2026-02-03-204240-1-8-1-png", title: "ATMA TANTRA RASA", date: "January 2026", image: "/assets/photo-assets-webp/documentary-atma-tantra-rasa-january-2026/still-2026-02-03-204240-1-8-1-png.webp" },
      { id: "still-2026-02-03-204240-1-9-1-png", title: "ATMA TANTRA RASA", date: "January 2026", image: "/assets/photo-assets-webp/documentary-atma-tantra-rasa-january-2026/still-2026-02-03-204240-1-9-1-png.webp" },
    ],
  },
  {
    id: "short-film-attitama-january-2026",
    category: "Short Film",
    title: "ATTITAMA",
    date: "January 2026",
    cover: "/assets/photo-assets-webp/short-film-attitama-january-2026/still-2026-02-03-203724-1-1-1-png.webp",
    photos: [
      { id: "still-2026-02-03-203724-1-1-1-png", title: "ATTITAMA", date: "January 2026", image: "/assets/photo-assets-webp/short-film-attitama-january-2026/still-2026-02-03-203724-1-1-1-png.webp" },
      { id: "still-2026-02-03-203724-1-12-1-png", title: "ATTITAMA", date: "January 2026", image: "/assets/photo-assets-webp/short-film-attitama-january-2026/still-2026-02-03-203724-1-12-1-png.webp" },
      { id: "still-2026-02-03-203724-1-14-1-png", title: "ATTITAMA", date: "January 2026", image: "/assets/photo-assets-webp/short-film-attitama-january-2026/still-2026-02-03-203724-1-14-1-png.webp" },
      { id: "still-2026-02-03-203724-1-17-1-png", title: "ATTITAMA", date: "January 2026", image: "/assets/photo-assets-webp/short-film-attitama-january-2026/still-2026-02-03-203724-1-17-1-png.webp" },
      { id: "still-2026-02-03-203724-1-18-1-png", title: "ATTITAMA", date: "January 2026", image: "/assets/photo-assets-webp/short-film-attitama-january-2026/still-2026-02-03-203724-1-18-1-png.webp" },
      { id: "still-2026-02-03-203724-1-8-1-png", title: "ATTITAMA", date: "January 2026", image: "/assets/photo-assets-webp/short-film-attitama-january-2026/still-2026-02-03-203724-1-8-1-png.webp" },
    ],
  },
  {
    id: "short-film-look-it-side-february-2026",
    category: "Short Film",
    title: "LOOK IT SIDE",
    date: "February 2026",
    cover: "/assets/photo-assets-webp/short-film-look-it-side-february-2026/1-11-1-1-11-1-png.webp",
    photos: [
      { id: "1-11-1-1-11-1-png", title: "LOOK IT SIDE", date: "February 2026", image: "/assets/photo-assets-webp/short-film-look-it-side-february-2026/1-11-1-1-11-1-png.webp" },
      { id: "1-12-1-1-12-1-png", title: "LOOK IT SIDE", date: "February 2026", image: "/assets/photo-assets-webp/short-film-look-it-side-february-2026/1-12-1-1-12-1-png.webp" },
      { id: "1-2-1-1-2-1-png", title: "LOOK IT SIDE", date: "February 2026", image: "/assets/photo-assets-webp/short-film-look-it-side-february-2026/1-2-1-1-2-1-png.webp" },
      { id: "1-3-1-1-3-1-png", title: "LOOK IT SIDE", date: "February 2026", image: "/assets/photo-assets-webp/short-film-look-it-side-february-2026/1-3-1-1-3-1-png.webp" },
      { id: "1-4-1-1-4-1-png", title: "LOOK IT SIDE", date: "February 2026", image: "/assets/photo-assets-webp/short-film-look-it-side-february-2026/1-4-1-1-4-1-png.webp" },
      { id: "1-7-1-1-7-1-png", title: "LOOK IT SIDE", date: "February 2026", image: "/assets/photo-assets-webp/short-film-look-it-side-february-2026/1-7-1-1-7-1-png.webp" },
      { id: "1-8-1-1-8-1-png", title: "LOOK IT SIDE", date: "February 2026", image: "/assets/photo-assets-webp/short-film-look-it-side-february-2026/1-8-1-1-8-1-png.webp" },
      { id: "1-9-1-1-9-1-png", title: "LOOK IT SIDE", date: "February 2026", image: "/assets/photo-assets-webp/short-film-look-it-side-february-2026/1-9-1-1-9-1-png.webp" },
    ],
  },
  {
    id: "short-film-nikon-zr-december-2025",
    category: "Short Film",
    title: "Nikon ZR",
    date: "December 2025",
    cover: "/assets/photo-assets-webp/short-film-nikon-zr-december-2025/still-2026-02-03-190114-1-10-3-png.webp",
    photos: [
      { id: "still-2026-02-03-190114-1-10-3-png", title: "Nikon ZR", date: "December 2025", image: "/assets/photo-assets-webp/short-film-nikon-zr-december-2025/still-2026-02-03-190114-1-10-3-png.webp" },
      { id: "still-2026-02-03-190114-1-12-3-png", title: "Nikon ZR", date: "December 2025", image: "/assets/photo-assets-webp/short-film-nikon-zr-december-2025/still-2026-02-03-190114-1-12-3-png.webp" },
      { id: "still-2026-02-03-190114-1-13-3-png", title: "Nikon ZR", date: "December 2025", image: "/assets/photo-assets-webp/short-film-nikon-zr-december-2025/still-2026-02-03-190114-1-13-3-png.webp" },
      { id: "still-2026-02-03-190114-1-18-3-png", title: "Nikon ZR", date: "December 2025", image: "/assets/photo-assets-webp/short-film-nikon-zr-december-2025/still-2026-02-03-190114-1-18-3-png.webp" },
      { id: "still-2026-02-03-190114-1-2-3-png", title: "Nikon ZR", date: "December 2025", image: "/assets/photo-assets-webp/short-film-nikon-zr-december-2025/still-2026-02-03-190114-1-2-3-png.webp" },
      { id: "still-2026-02-03-190114-1-3-3-png", title: "Nikon ZR", date: "December 2025", image: "/assets/photo-assets-webp/short-film-nikon-zr-december-2025/still-2026-02-03-190114-1-3-3-png.webp" },
      { id: "still-2026-02-03-190114-1-5-3-png", title: "Nikon ZR", date: "December 2025", image: "/assets/photo-assets-webp/short-film-nikon-zr-december-2025/still-2026-02-03-190114-1-5-3-png.webp" },
      { id: "still-2026-02-03-190114-1-6-3-png", title: "Nikon ZR", date: "December 2025", image: "/assets/photo-assets-webp/short-film-nikon-zr-december-2025/still-2026-02-03-190114-1-6-3-png.webp" },
    ],
  },
  {
    id: "short-video-bar-by-delvin-laurence",
    category: "Short Video",
    title: "BAR by Delvin Laurence",
    date: "",
    cover: "/assets/photo-assets-webp/short-video-bar-by-delvin-laurence/still-2026-02-03-125954-1-2-3-png.webp",
    photos: [
      { id: "still-2026-02-03-125954-1-2-3-png", title: "BAR by Delvin Laurence", date: "", image: "/assets/photo-assets-webp/short-video-bar-by-delvin-laurence/still-2026-02-03-125954-1-2-3-png.webp" },
      { id: "still-2026-02-03-125954-1-3-3-png", title: "BAR by Delvin Laurence", date: "", image: "/assets/photo-assets-webp/short-video-bar-by-delvin-laurence/still-2026-02-03-125954-1-3-3-png.webp" },
      { id: "still-2026-02-03-125954-1-4-3-png", title: "BAR by Delvin Laurence", date: "", image: "/assets/photo-assets-webp/short-video-bar-by-delvin-laurence/still-2026-02-03-125954-1-4-3-png.webp" },
      { id: "still-2026-02-03-125954-1-5-3-png", title: "BAR by Delvin Laurence", date: "", image: "/assets/photo-assets-webp/short-video-bar-by-delvin-laurence/still-2026-02-03-125954-1-5-3-png.webp" },
    ],
  },
  {
    id: "short-video-hotel-indonesia-roundabout-january-2026",
    category: "Short Video",
    title: "HOTEL INDONESIA ROUNDABOUT",
    date: "January 2026",
    cover: "/assets/photo-assets-webp/short-video-hotel-indonesia-roundabout-january-2026/still-2026-02-03-202927-1-2-3-png.webp",
    photos: [
      { id: "still-2026-02-03-202927-1-2-3-png", title: "HOTEL INDONESIA ROUNDABOUT", date: "January 2026", image: "/assets/photo-assets-webp/short-video-hotel-indonesia-roundabout-january-2026/still-2026-02-03-202927-1-2-3-png.webp" },
      { id: "still-2026-02-03-202927-1-3-3-png", title: "HOTEL INDONESIA ROUNDABOUT", date: "January 2026", image: "/assets/photo-assets-webp/short-video-hotel-indonesia-roundabout-january-2026/still-2026-02-03-202927-1-3-3-png.webp" },
      { id: "still-2026-02-03-202927-1-4-3-png", title: "HOTEL INDONESIA ROUNDABOUT", date: "January 2026", image: "/assets/photo-assets-webp/short-video-hotel-indonesia-roundabout-january-2026/still-2026-02-03-202927-1-4-3-png.webp" },
      { id: "still-2026-02-03-202927-1-6-3-png", title: "HOTEL INDONESIA ROUNDABOUT", date: "January 2026", image: "/assets/photo-assets-webp/short-video-hotel-indonesia-roundabout-january-2026/still-2026-02-03-202927-1-6-3-png.webp" },
      { id: "still-2026-02-03-202927-1-7-3-png", title: "HOTEL INDONESIA ROUNDABOUT", date: "January 2026", image: "/assets/photo-assets-webp/short-video-hotel-indonesia-roundabout-january-2026/still-2026-02-03-202927-1-7-3-png.webp" },
    ],
  },
  {
    id: "short-video-kebayoran-station-january-2026",
    category: "Short Video",
    title: "KEBAYORAN STATION",
    date: "January 2026",
    cover: "/assets/photo-assets-webp/short-video-kebayoran-station-january-2026/still-2026-02-03-203133-1-2-3-png.webp",
    photos: [
      { id: "still-2026-02-03-203133-1-2-3-png", title: "KEBAYORAN STATION", date: "January 2026", image: "/assets/photo-assets-webp/short-video-kebayoran-station-january-2026/still-2026-02-03-203133-1-2-3-png.webp" },
      { id: "still-2026-02-03-203133-1-3-3-png", title: "KEBAYORAN STATION", date: "January 2026", image: "/assets/photo-assets-webp/short-video-kebayoran-station-january-2026/still-2026-02-03-203133-1-3-3-png.webp" },
      { id: "still-2026-02-03-203133-1-4-3-png", title: "KEBAYORAN STATION", date: "January 2026", image: "/assets/photo-assets-webp/short-video-kebayoran-station-january-2026/still-2026-02-03-203133-1-4-3-png.webp" },
      { id: "still-2026-02-03-203133-1-6-3-png", title: "KEBAYORAN STATION", date: "January 2026", image: "/assets/photo-assets-webp/short-video-kebayoran-station-january-2026/still-2026-02-03-203133-1-6-3-png.webp" },
    ],
  },
  {
    id: "short-video-pagoda-by-delvin-laurence-september-2024",
    category: "Short Video",
    title: "PAGODA by Delvin Laurence",
    date: "September 2024",
    cover: "/assets/photo-assets-webp/short-video-pagoda-by-delvin-laurence-september-2024/still-2026-02-03-134029-1-1-3-png.webp",
    photos: [
      { id: "still-2026-02-03-134029-1-1-3-png", title: "PAGODA by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-pagoda-by-delvin-laurence-september-2024/still-2026-02-03-134029-1-1-3-png.webp" },
      { id: "still-2026-02-03-134029-1-2-3-png", title: "PAGODA by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-pagoda-by-delvin-laurence-september-2024/still-2026-02-03-134029-1-2-3-png.webp" },
      { id: "still-2026-02-03-134029-1-3-3-png", title: "PAGODA by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-pagoda-by-delvin-laurence-september-2024/still-2026-02-03-134029-1-3-3-png.webp" },
      { id: "still-2026-02-03-134029-1-4-3-png", title: "PAGODA by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-pagoda-by-delvin-laurence-september-2024/still-2026-02-03-134029-1-4-3-png.webp" },
      { id: "still-2026-02-03-134029-1-5-3-png", title: "PAGODA by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-pagoda-by-delvin-laurence-september-2024/still-2026-02-03-134029-1-5-3-png.webp" },
      { id: "still-2026-02-03-134029-1-6-3-png", title: "PAGODA by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-pagoda-by-delvin-laurence-september-2024/still-2026-02-03-134029-1-6-3-png.webp" },
      { id: "still-2026-02-03-134029-1-7-3-png", title: "PAGODA by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-pagoda-by-delvin-laurence-september-2024/still-2026-02-03-134029-1-7-3-png.webp" },
    ],
  },
  {
    id: "short-video-sapa-night-city-by-delvin-laurence-september-2024",
    category: "Short Video",
    title: "SAPA NIGHT CITY by Delvin Laurence",
    date: "September 2024",
    cover: "/assets/photo-assets-webp/short-video-sapa-night-city-by-delvin-laurence-september-2024/still-2026-02-03-134701-1-1-3-png.webp",
    photos: [
      { id: "still-2026-02-03-134701-1-1-3-png", title: "SAPA NIGHT CITY by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-sapa-night-city-by-delvin-laurence-september-2024/still-2026-02-03-134701-1-1-3-png.webp" },
      { id: "still-2026-02-03-134701-1-3-3-png", title: "SAPA NIGHT CITY by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-sapa-night-city-by-delvin-laurence-september-2024/still-2026-02-03-134701-1-3-3-png.webp" },
      { id: "still-2026-02-03-134701-1-4-6-png", title: "SAPA NIGHT CITY by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-sapa-night-city-by-delvin-laurence-september-2024/still-2026-02-03-134701-1-4-6-png.webp" },
      { id: "still-2026-02-03-135057-1-1-3-png", title: "SAPA NIGHT CITY by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-sapa-night-city-by-delvin-laurence-september-2024/still-2026-02-03-135057-1-1-3-png.webp" },
      { id: "still-2026-02-03-135057-1-2-3-png", title: "SAPA NIGHT CITY by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-sapa-night-city-by-delvin-laurence-september-2024/still-2026-02-03-135057-1-2-3-png.webp" },
      { id: "still-2026-02-03-135057-1-3-3-png", title: "SAPA NIGHT CITY by Delvin Laurence", date: "September 2024", image: "/assets/photo-assets-webp/short-video-sapa-night-city-by-delvin-laurence-september-2024/still-2026-02-03-135057-1-3-3-png.webp" },
    ],
  },
  {
    id: "short-video-thamrin-nine-january-2026",
    category: "Short Video",
    title: "THAMRIN NINE",
    date: "January 2026",
    cover: "/assets/photo-assets-webp/short-video-thamrin-nine-january-2026/still-2026-02-03-202617-1-1-3-png.webp",
    photos: [
      { id: "still-2026-02-03-202617-1-1-3-png", title: "THAMRIN NINE", date: "January 2026", image: "/assets/photo-assets-webp/short-video-thamrin-nine-january-2026/still-2026-02-03-202617-1-1-3-png.webp" },
      { id: "still-2026-02-03-202617-1-2-3-png", title: "THAMRIN NINE", date: "January 2026", image: "/assets/photo-assets-webp/short-video-thamrin-nine-january-2026/still-2026-02-03-202617-1-2-3-png.webp" },
      { id: "still-2026-02-03-202617-1-3-3-png", title: "THAMRIN NINE", date: "January 2026", image: "/assets/photo-assets-webp/short-video-thamrin-nine-january-2026/still-2026-02-03-202617-1-3-3-png.webp" },
      { id: "still-2026-02-03-202617-1-4-3-png", title: "THAMRIN NINE", date: "January 2026", image: "/assets/photo-assets-webp/short-video-thamrin-nine-january-2026/still-2026-02-03-202617-1-4-3-png.webp" },
      { id: "still-2026-02-03-202617-1-5-3-png", title: "THAMRIN NINE", date: "January 2026", image: "/assets/photo-assets-webp/short-video-thamrin-nine-january-2026/still-2026-02-03-202617-1-5-3-png.webp" },
      { id: "still-2026-02-03-202617-1-6-3-png", title: "THAMRIN NINE", date: "January 2026", image: "/assets/photo-assets-webp/short-video-thamrin-nine-january-2026/still-2026-02-03-202617-1-6-3-png.webp" },
    ],
  },
];

export const assets: AssetPhoto[] = assetAlbums.flatMap((a) => a.photos);

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
