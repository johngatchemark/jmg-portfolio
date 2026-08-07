export interface WireframeSlide {
  id: string;
  title: string;
  caption: string;
  description: string;
  wireframeType:
    | "lakadph-map"
    | "lakadph-lights"
    | "lakadph-hud"
    | "scaffled-ide"
    | "scaffled-ai"
    | "scaffled-analytics"
    | "studdy-feed"
    | "studdy-schedule"
    | "studdy-uikit";
}

export interface ProjectData {
  id: string;
  fakeFilePath: string;
  title: string;
  role: string;
  subtitle: string;
  description: string;
  detailedOverview: string[];
  techStack: string[];
  awards?: string[];
  additionalInfo?: string;
  githubUrl?: string;
  liveUrl?: string;
  keyWireframeType: "lakadph-map" | "scaffled-ide" | "studdy-feed";
  gallery: WireframeSlide[];
}

export const projectsData: ProjectData[] = [
  {
    id: "lakadph",
    fakeFilePath: "~/projects/lakadph",
    title: "LakadPH",
    role: "Frontend Developer",
    subtitle: "Pedestrian-First Smart Navigation Web App",
    description:
      "Responsive frontend integrating OpenStreetMap for routing, ShadeMap API for sun coverage analysis, and Overpass API for streetlight data. Designed for pedestrian safety in Metro Manila.",
    detailedOverview: [
      "Engineered shade-aware pedestrian pathfinding by overlaying ShadeMap building-shadow estimations onto OpenStreetMap geometry.",
      "Queried street illumination coverage via Overpass API to prioritize well-lit walking corridors during night navigation.",
      "Designed a low-latency, mobile-first Web UI optimized for commuters navigating tropical temperatures and low-light urban streets.",
    ],
    techStack: [
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "OpenStreetMap",
      "ShadeMap API",
      "Overpass API",
    ],
    awards: [
      "Champion (1st Place) — Blue Hacks 2026 @ Ateneo de Manila University",
    ],
    githubUrl: "https://github.com/johnmarkgatche/lakadph",
    liveUrl: "https://lakadph.vercel.app",
    keyWireframeType: "lakadph-map",
    gallery: [
      {
        id: "lakadph-1",
        title: "Shade-Optimized Routing View",
        caption: "Interactive Route Map with Solar Position Layer",
        description:
          "Displays candidate routes styled with heatmaps showing building shadows computed dynamically according to time-of-day and sun elevation.",
        wireframeType: "lakadph-map",
      },
      {
        id: "lakadph-2",
        title: "Night Lighting Density HUD",
        caption: "Overpass API Streetlight Infrastructure Layer",
        description:
          "Highlights walking routes filtered by streetlight density to ensure pedestrian visibility and safety after sunset.",
        wireframeType: "lakadph-lights",
      },
      {
        id: "lakadph-3",
        title: "Pedestrian Turn Navigation",
        caption: "Compact Mobile Turn-by-Turn Interface",
        description:
          "Clean step-by-step navigation HUD providing real-time shade score percentage, distance, and ETA.",
        wireframeType: "lakadph-hud",
      },
    ],
  },
  {
    id: "scaffl-ed",
    fakeFilePath: "~/projects/scaffl-ed",
    title: "Scaffl.ed",
    role: "Project Team Leader",
    subtitle: "LLM-Driven Java Debugging Tutor via Gaze & Mouse Tracking",
    description:
      "Led a five-member team building an intelligent tutoring system. Curated gaze/mouse interaction datasets, trained a Random Forest confusion-detection model, and managed full research execution.",
    detailedOverview: [
      "Architected real-time multimodal confusion detector integrating webcam-based eye gaze vector calculations and mouse cursor dynamics.",
      "Trained a Random Forest classification pipeline in scikit-learn achieving high precision in detecting student cognitive confusion state.",
      "Co-authored research paper presented at IEEE AAIML 2026 in Tokyo (indexed in IEEE Xplore & Scopus).",
    ],
    techStack: [
      "TypeScript",
      "React.js",
      "Next.js",
      "PostgreSQL",
      "FastAPI",
      "scikit-learn",
      "Python",
    ],
    awards: [
      "Outstanding Oral Presentation — AAIML 2026, Tokyo · IEEE Xplore & Scopus",
    ],
    additionalInfo: "DOI: 10.1109/AAIML67890.2026.11498122",
    githubUrl: "https://github.com/johnmarkgatche/scaffl-ed",
    liveUrl: "https://doi.org/10.1109/AAIML67890.2026.11498122",
    keyWireframeType: "scaffled-ide",
    gallery: [
      {
        id: "scaffled-1",
        title: "Tutor IDE & Real-Time Gaze Heatmap",
        caption: "Monitored Code Editor with Gaze Overlay",
        description:
          "Code editor panel showing live student eye gaze focus points, error highlight decorations, and instantaneous cognitive confusion metrics.",
        wireframeType: "scaffled-ide",
      },
      {
        id: "scaffled-2",
        title: "Adaptive AI Scaffolding Drawer",
        caption: "Context-Aware Socratic Guidance",
        description:
          "LLM guidance panel that activates automatically when confusion exceeds threshold, offering hints without revealing answers.",
        wireframeType: "scaffled-ai",
      },
      {
        id: "scaffled-3",
        title: "Researcher Diagnostics Dashboard",
        caption: "Gaze Trajectory & Fixation Metrics",
        description:
          "Analytics panel mapping fixation durations, regression counts, and mouse movement speed over debugging tasks.",
        wireframeType: "scaffled-analytics",
      },
    ],
  },
  {
    id: "studdy",
    fakeFilePath: "~/projects/studdy",
    title: "Studdy",
    role: "Lead Android Developer",
    subtitle: "Study Partner Matching Application",
    description:
      "Architected an Android study-matching app with MVVM, Jetpack Compose UI, and Retrofit-based ASP.NET backend integration. Built custom Material 3 components using low-level Compose drawing APIs.",
    detailedOverview: [
      "Built Jetpack Compose mobile user interfaces following Material 3 guidelines and low-level custom Canvas rendering.",
      "Implemented MVVM architecture with Kotlin Coroutines, Repository pattern, and Retrofit HTTP service communication.",
      "Awarded 2nd Runner-Up at the 2024 Philippine Startup Challenge NCR Regional Pitching Competition.",
    ],
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Retrofit",
      "Material 3",
      "ASP.NET",
    ],
    awards: ["2nd Runner-Up — 2024 Philippine Startup Challenge, NCR Regional"],
    githubUrl: "https://github.com/johnmarkgatche/studdy",
    liveUrl: "https://github.com/johnmarkgatche/studdy",
    keyWireframeType: "studdy-feed",
    gallery: [
      {
        id: "studdy-1",
        title: "Peer Study Matching Feed",
        caption: "Profile Card Discovery Interface",
        description:
          "Card stack view displaying prospective study partners filtered by course unit, campus location, and study hours.",
        wireframeType: "studdy-feed",
      },
      {
        id: "studdy-2",
        title: "Session Coordinator Calendar",
        caption: "Group Study Appointment Booking",
        description:
          "Calendar and venue booking sheet allowing matched students to schedule group study sessions in university facilities.",
        wireframeType: "studdy-schedule",
      },
      {
        id: "studdy-3",
        title: "Custom Compose UI Kit",
        caption: "Material 3 Canvas Drawings",
        description:
          "Custom-drawn progress indicators, skill matrix radar charts, and status badges rendered via Android Canvas drawing APIs.",
        wireframeType: "studdy-uikit",
      },
    ],
  },
];
