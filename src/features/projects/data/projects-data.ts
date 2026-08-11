export interface WireframeSlide {
  id: string;
  title: string;
  caption: string;
  description: string;
  imageSrc?: string;
  wireframeType:
    | "lakadph-map"
    | "lakadph-lights"
    | "lakadph-hud"
    | "scaffled-ide"
    | "scaffled-ai"
    | "scaffled-analytics"
    | "studdy-feed"
    | "studdy-schedule"
    | "studdy-uikit"
    | "pasada-dashboard"
    | "pasada-voice"
    | "pasada-passenger"
    | "b3d-dining-render";
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
  paperUrl?: string;
  downloadUrl?: string;
  keyImageSrc?: string;
  keyWireframeType:
    | "lakadph-map"
    | "scaffled-ide"
    | "studdy-feed"
    | "pasada-dashboard"
    | "b3d-dining-render";
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
      "LakadPH is a walking route planner for Metro Manila that prioritizes shade over speed. Instead of recommending the fastest route, it compares several walking paths and estimates how much sunlight each one is exposed to by simulating the sun's position and checking whether nearby buildings block it. The route with the most shade is recommended.",
      "At night, the app switches behavior and ranks routes based on estimated street lighting instead.",
      "The project was built with pedestrians in Metro Manila in mind, where avoiding direct sunlight during the day (and staying on brighter streets at night) can be just as important as getting somewhere quickly.",
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
      "Champion (1st Place) - Blue Hacks 2026 @ Ateneo de Manila University",
    ],
    githubUrl: "https://github.com/compsat/bh26-TheWalkingDev",
    keyImageSrc: "/assets/projects/lakadph/key-image.webp",
    keyWireframeType: "lakadph-map",
    gallery: [
      {
        id: "lakadph-1",
        title: "Shade at Day, Light at Night",
        caption: "Interactive Route Map with Solar Position Layer",
        description:
          "Displays candidate routes styled with heatmaps showing building shadows computed dynamically according to time-of-day and sun elevation.",
        imageSrc: "/assets/projects/lakadph/shade-light.webp",
        wireframeType: "lakadph-map",
      },
      {
        id: "lakadph-2",
        title: "Current Location & GPS Route Marker",
        caption: "Real-Time Pedestrian Geolocation HUD",
        description:
          "Tracks user's live position relative to shade boundaries, showing distance to nearest shade corridor.",
        imageSrc: "/assets/projects/lakadph/current-loc.webp",
        wireframeType: "lakadph-hud",
      },
      {
        id: "lakadph-4",
        title: "Start Navigation Mode",
        caption: "Turn-by-Turn Mobile Sidewalk Guidance",
        description:
          "Clean step-by-step navigation HUD providing real-time shade score percentage, distance, and ETA.",
        imageSrc: "/assets/projects/lakadph/start-navigation.webp",
        wireframeType: "lakadph-hud",
      },
      {
        id: "lakadph-5",
        title: "Weather & Solar Summary",
        caption: "UV Index & Heat Warning Indicator",
        description:
          "Integrates ambient temperature and UV index warnings to alert commuters during peak heat hours.",
        imageSrc: "/assets/projects/lakadph/weather-summary.webp",
        wireframeType: "lakadph-map",
      },
      {
        id: "lakadph-6",
        title: "3D Solar Shadow Simulation",
        caption: "Three.js Building Elevation Shadows",
        description:
          "3D viewport modeling building heights and shadows using ShadeMap for high-precision shade estimation.",
        imageSrc: "/assets/projects/lakadph/shade-map-3d.webp",
        wireframeType: "lakadph-map",
      },
      {
        id: "lakadph-7",
        title: "Pedestrian Feedback & Safety Rating",
        caption: "Community Sidewalk Condition Reports",
        description:
          "Allows commuters to report sidewalk obstructions, broken streetlights, or hazardous intersections.",
        imageSrc: "/assets/projects/lakadph/feedback.webp",
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
      "An intelligent tutoring system (ITS) for Java programming that detects student confusion in real-time using webcam eye tracking and mouse interactions via a Random Forest model, providing adaptive scaffolded guidance through a 3D avatar robot tutor named Scaffy (powered by Gemini 2.5 Pro).",
    detailedOverview: [
      "Architected a real-time multimodal confusion detector integrating webcam-based eye gaze tracking (WebGazer) and mouse movement dynamics, achieving 75.7% accuracy with a Random Forest classifier in scikit-learn.",
      "Integrated a 3D animated robot tutor avatar (Scaffy, built with Three.js/Blender) driven by Gemini 2.5 Pro that delivers context-aware Socratic hints and emotional responses when student confusion is detected.",
      "Engineered a desktop-first web application using React, Next.js, FastAPI, and Supabase featuring student dashboards, GitHub-style activity heatmaps, enrolled class courseware, and automated AI performance summaries.",
      "Evaluated in a usability study with 24 undergraduate CS students at UE Manila, demonstrating 82.72% overall usability (ISO 9241-11) and winning the Outstanding Oral Presentation Award at IEEE AAIML 2026 in Tokyo.",
    ],
    techStack: [
      "TypeScript",
      "React.js",
      "Next.js",
      "WebGazer.js",
      "Mantine UI",
      "PostgreSQL",
      "FastAPI",
      "scikit-learn",
      "pandas",
      "Python",
    ],
    awards: [
      "Outstanding Oral Presentation - AAIML 2026, Tokyo · IEEE Xplore & Scopus Indexed",
      "Top 90 Qualifier (out of 178 teams nationwide) - AppCon 2024",
    ],
    additionalInfo: "DOI: 10.1109/AAIML67890.2026.11498122",
    paperUrl: "https://doi.org/10.1109/AAIML67890.2026.11498122",
    keyImageSrc: "/assets/projects/scaffled/key-image.webp",
    keyWireframeType: "scaffled-ide",
    gallery: [
      {
        id: "scaffled-1",
        title: "Tutor IDE & Adaptive Scaffy Robot",
        caption: "Scaffl.ed IDE Interface",
        description:
          "Main debugging workspace featuring problem description, Java code editor with custom AOIs, test cases panel, and Scaffy (the 3D robot tutor) delivering real-time scaffolded guidance.",
        imageSrc: "/assets/projects/scaffled/key-image.webp",
        wireframeType: "scaffled-ide",
      },
      {
        id: "scaffled-2",
        title: "Enrolled Classes Directory",
        caption: "Class Management",
        description:
          "List of Java programming classes the student is enrolled in, showing course progress, instructor details, and active assignments.",
        imageSrc: "/assets/projects/scaffled/classes-home.webp",
        wireframeType: "scaffled-ide",
      },
      {
        id: "scaffled-3",
        title: "Java Debugging Activity Workspace",
        caption: "Interactive Debugging Task",
        description:
          "The interactive Java debugging activity page where student gaze and mouse dynamics are tracked in real-time to detect cognitive confusion.",
        imageSrc: "/assets/projects/scaffled/activity-page.webp",
        wireframeType: "scaffled-ide",
      },
      {
        id: "scaffled-4",
        title: "Activity Results & Gaze Heatmap",
        caption: "Post-Activity Diagnostics",
        description:
          "Result of the debugging activity featuring eye-tracking gaze heatmap overlays and AI-powered performance summary.",
        imageSrc: "/assets/projects/scaffled/activity-result.webp",
        wireframeType: "scaffled-analytics",
      },
      {
        id: "scaffled-5",
        title: "AI-Powered Student Performance Summary",
        caption: "Class Analytics Summary",
        description:
          "AI-powered summary of student performance, highlighting areas of confusion, debugging progress, and concept mastery.",
        imageSrc: "/assets/projects/scaffled/class-ai-summary.webp",
        wireframeType: "scaffled-analytics",
      },
      {
        id: "scaffled-6",
        title: "AI-Powered Student Performance Summary (Cont.)",
        caption: "Class Analytics Summary",
        description:
          "AI-powered summary of student performance, highlighting areas of confusion, debugging progress, and concept mastery.",
        imageSrc: "/assets/projects/scaffled/class-ai-summary-pt2.webp",
        wireframeType: "scaffled-analytics",
      },
      {
        id: "scaffled-7",
        title: "AI-Powered Student Performance Summary (Cont.)",
        caption: "Class Analytics Summary",
        description:
          "AI-powered summary of student performance, highlighting areas of confusion, debugging progress, and concept mastery.",
        imageSrc: "/assets/projects/scaffled/class-ai-summary-pt3.webp",
        wireframeType: "scaffled-analytics",
      },
      {
        id: "scaffled-8",
        title: "Class Courseware & Lessons",
        caption: "Class Page",
        description:
          "Class page containing organized Java programming lessons, code exercises, and debugging activities.",
        imageSrc: "/assets/projects/scaffled/class-page.webp",
        wireframeType: "scaffled-ide",
      },
      {
        id: "scaffled-9",
        title: "Class Courseware & Lessons (Cont.)",
        caption: "Class Page",
        description:
          "Class page containing organized Java programming lessons, code exercises, and debugging activities.",
        imageSrc: "/assets/projects/scaffled/class-page-more.webp",
        wireframeType: "scaffled-ide",
      },
      {
        id: "scaffled-10",
        title: "Student Dashboard & Contribution Heatmap",
        caption: "Overview Dashboard",
        description:
          "Contains GitHub-style contribution tiles for number of lessons and activities taken, as well as achievements and ongoing classes.",
        imageSrc: "/assets/projects/scaffled/dashboard.webp",
        wireframeType: "scaffled-analytics",
      },
      {
        id: "scaffled-11",
        title: "Individual Lesson Module",
        caption: "Lesson Page",
        description:
          "Individual Java lesson page displaying instructional content, code examples, and concept explanations.",
        imageSrc: "/assets/projects/scaffled/lesson-page.webp",
        wireframeType: "scaffled-ide",
      },
      {
        id: "scaffled-12",
        title: "Student Profile & Settings",
        caption: "Profile & Account Settings",
        description:
          "Self-explanatory student profile and account settings page for managing user preferences and personal information.",
        imageSrc: "/assets/projects/scaffled/student-profile-settings.webp",
        wireframeType: "scaffled-ide",
      },
    ],
  },
  {
    id: "studdy",
    fakeFilePath: "~/projects/studdy",
    title: "Studdy",
    role: "Lead Android Developer",
    subtitle: "Social Networking Matching App to Find Your Study Buddy",
    description:
      "In Studdy, we don't match hearts, we match brains! A mobile platform where students connect with like-minded peers, share knowledge, swipe to match study buddies, and conquer studies together with built-in tools.",
    detailedOverview: [
      "Built a smart recommendation algorithm to match compatible study partners based on skills, interests, and academic goals using a swipe-to-match discovery workflow.",
      "Integrated in-app study sessions with messaging, calling, interactive flashcards, shared whiteboards, and Pomodoro timers for seamless peer collaboration.",
      "Designed gamified weekly quiz challenges and leaderboards to keep peer learning engaging, competitive, and fun.",
      "Validated with 80% surveyed college student interest, achieving 2nd Runner-Up at the 2024 Philippine Startup Challenge NCR Regional Competition.",
    ],
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Retrofit",
      "Material 3",
      "ASP.NET",
    ],
    awards: [
      "2nd Runner-Up - 2024 Philippine Startup Challenge, NCR Regional",
      "Accepted for Presentation - HCI International 2025 Student Design Competition",
    ],
    keyImageSrc: "/assets/projects/studdy/key-image.webp",
    keyWireframeType: "studdy-feed",
    gallery: [
      {
        id: "studdy-1",
        title: "Studdy - Where Minds Meet!",
        caption: "Introduction",
        description:
          "In Studdy, we don't match hearts, we match brains! A mobile social networking matching app designed by college students for college students.",
        imageSrc: "/assets/projects/studdy/key-image.webp",
        wireframeType: "studdy-feed",
      },
      {
        id: "studdy-2",
        title: "Platform Architecture & Wireframes",
        caption: "Solution Overview",
        description:
          "A comprehensive platform where students can connect with like-minded peers, share knowledge, and conquer their studies together.",
        imageSrc: "/assets/projects/studdy/wireframes-compilation.webp",
        wireframeType: "studdy-uikit",
      },
      {
        id: "studdy-3",
        title: "Peer Discovery & Profile Cards",
        caption: "Meet, Know, Decide",
        description:
          "Displays user profiles of fellow students seeking study buddies of their same feather, highlighting skills, courses, and study preferences.",
        imageSrc: "/assets/projects/studdy/meet-know-decide.webp",
        wireframeType: "studdy-feed",
      },
      {
        id: "studdy-4",
        title: "Swipe-to-Match Discovery",
        caption: "Swipe, Match, Connect",
        description:
          "Swipe left on profiles you like. Our recommendation algorithm suggests compatible study partners based on shared academic goals.",
        imageSrc: "/assets/projects/studdy/swipe-match-connect.webp",
        wireframeType: "studdy-feed",
      },
      {
        id: "studdy-5",
        title: "Instant Study Match!",
        caption: "It's a Match!",
        description:
          "When both students swipe left on each other's profile, it's an instant match, allowing immediate study session planning.",
        imageSrc: "/assets/projects/studdy/its-a-match.webp",
        wireframeType: "studdy-feed",
      },
      {
        id: "studdy-6",
        title: "In-App Chat & Voice Calling",
        caption: "Message, Connect, Call",
        description:
          "Host live study sessions right inside the app with integrated messaging and crystal-clear audio calling features.",
        imageSrc: "/assets/projects/studdy/message-connect-call.webp",
        wireframeType: "studdy-schedule",
      },
      {
        id: "studdy-7",
        title: "Collaborative Study Tools",
        caption: "Study From Anywhere",
        description:
          "Equipped with built-in study tools from interactive flashcards and whiteboards to Pomodoro focus timers for effective group studying.",
        imageSrc: "/assets/projects/studdy/study-from-anywhere.webp",
        wireframeType: "studdy-uikit",
      },
      {
        id: "studdy-8",
        title: "Weekly Leaderboard Challenges",
        caption: "Quizzes & Competition",
        description:
          "Answer fun quizzes, compete with peers, top the leaderbirds, and win rewards for those who crave friendly academic competitions.",
        imageSrc: "/assets/projects/studdy/weekly-challenges.webp",
        wireframeType: "studdy-uikit",
      },
      {
        id: "studdy-9",
        title: "80% Student Interest Validation",
        caption: "Empirical User Research",
        description:
          "User survey results show 80% of student respondents expressed strong interest in an app to help them discover compatible study buddies.",
        imageSrc: "/assets/projects/studdy/8-out-of-10-interested.webp",
        wireframeType: "studdy-feed",
      },
      {
        id: "studdy-10",
        title: "Student Feedback & Perceived Impact",
        caption: "GPA & Social Value",
        description:
          "Commended by students for helping build meaningful campus connections, improve GPAs, and make studying more enjoyable.",
        imageSrc: "/assets/projects/studdy/positive-perceived-feedback.webp",
        wireframeType: "studdy-feed",
      },
      {
        id: "studdy-11",
        title: "Full Connection Ecosystem",
        caption: "Targeting 4.5M Students",
        description:
          "Tailored for the 4.5 million potential college student users in the Philippines seeking collaborative learning partners.",
        imageSrc: "/assets/projects/studdy/connect-swipe-match.webp",
        wireframeType: "studdy-feed",
      },
    ],
  },
  {
    id: "pasada",
    fakeFilePath: "~/projects/pasada",
    title: "Pasada",
    role: "Lead Mobile Developer & UX Architect",
    subtitle: "Jeepney Operational Decision Support Mobile App",
    description:
      "Pasada is a mobile application concept designed to help jeepney drivers make more informed operational decisions. The platform provides real-time insights, route awareness, earnings visibility, passenger demand information, and voice-assisted interactions to support daily transportation operations.",
    detailedOverview: [
      "Addresses operational inefficiencies where many jeepney drivers rely heavily on intuition, leading to long hours on the road with lower take-home income and wasted fuel.",
      "Delivers an integrated driver support platform providing real-time operational insights, clear earnings visibility, and passenger demand awareness directly to drivers on the road.",
      "Features an accessible mobile-first interface with simple visual indicators and hands-free voice-assisted interactions designed for safe use under active driving conditions.",
      "Empowers drivers to make smarter route choices, determine optimal operating hours, and maximize daily income while significantly reducing operational friction.",
    ],
    techStack: [
      "Kotlin",
      "Android",
      "Jetpack Compose",
      "Voice Recognition",
      "OpenStreetMap",
    ],
    awards: ["Top 10 Finalist - Byte Forward Hackathon 2025"],
    keyImageSrc: "/assets/projects/pasada/key-image.webp",
    keyWireframeType: "pasada-dashboard",
    gallery: [
      {
        id: "pasada-1",
        title: "Pasada Mobile Interface Overview",
        caption: "Platform Overview",
        description:
          "Mobile application concept empowering jeepney drivers with real-time operational decision support, route awareness, and clear earnings visibility.",
        imageSrc: "/assets/projects/pasada/key-image.webp",
        wireframeType: "pasada-dashboard",
      },
      {
        id: "pasada-2",
        title: "Driver Operational Dashboard",
        caption: "Real-Time Driver Insights",
        description:
          "Comprehensive dashboard displaying daily earnings summaries, active route status, trip analytics, and peak passenger demand indicators.",
        imageSrc: "/assets/projects/pasada/dashboard.webp",
        wireframeType: "pasada-dashboard",
      },
      {
        id: "pasada-3",
        title: "Hands-Free Voice Recognition Interface",
        caption: "Voice-Assisted Controls",
        description:
          "Hands-free speech recognition system allowing drivers to interact safely with the app while maintaining full focus on active driving.",
        imageSrc: "/assets/projects/pasada/voice-recognition.webp",
        wireframeType: "pasada-voice",
      },
      {
        id: "pasada-4",
        title: "Voice-Assisted Passenger Count & Demand Tracking",
        caption: "Demand Awareness",
        description:
          "Voice-enabled passenger counting system providing real-time trip occupancy tracking, passenger logging, and route efficiency metrics.",
        imageSrc: "/assets/projects/pasada/voice-assisted-passenger-count.webp",
        wireframeType: "pasada-passenger",
      },
    ],
  },
  {
    id: "b3d-dining-set",
    fakeFilePath: "~/projects/b3d-dining-set",
    title: "3D Antique Dining Set",
    role: "3D Environment & Asset Designer",
    subtitle: "Antique-Style 3D Dining Room Environment Built in Blender",
    description:
      "An old-school antique style dining room 3D scene created entirely in Blender. Features a detailed dining table with tableware, Chesterfield chair cushions, a grand chandelier, carved wooden cupboard, cabinet sink, stove exhaust, and ambient indoor lighting.",
    detailedOverview: [
      "Modeled a complete antique dining room interior featuring a carved wooden cupboard, cabinet sink, stove with exhaust hood, and an ornate vase-like water dispenser.",
      "Designed a full dining table arrangement with a floral tablecloth, lace placemats, plates, cutlery, wine glasses, ceramic cups, and Chesterfield cushioned chairs.",
      "Crafted a grand central chandelier with multi-tier glowing lampshades and crystal pendant beads as the main lighting centerpiece.",
      "Decorated the space with a patterned area rug over tiled flooring and framed wall paintings featuring classic pixel art easter eggs.",
    ],
    techStack: ["Blender"],
    downloadUrl:
      "https://www.dropbox.com/scl/fi/27ksq6ueh69sd9f6kh9nq/Dining-Set-Final.blend?rlkey=zu3yyv2e7xdtyscwi1tzt9c3n&st=rf53v18k&dl=1",
    keyImageSrc: "/assets/projects/b3d-dining-set/finalScreenShot.webp",
    keyWireframeType: "b3d-dining-render",
    gallery: [
      {
        id: "b3d-dining-1",
        title: "Final Ambient Render",
        caption: "Full Environment Overview",
        description:
          "Complete 3D antique dining room render showcasing the grand chandelier, dining arrangement, antique cupboard, kitchen counter, and warm lighting.",
        imageSrc: "/assets/projects/b3d-dining-set/finalScreenShot.webp",
        wireframeType: "b3d-dining-render",
      },
      {
        id: "b3d-dining-2",
        title: "The Grand Chandelier",
        caption: "Lighting Centerpiece",
        description:
          "Hero closeup of the multi-tiered chandelier featuring curved brass arms, warm candle lampshades, and hanging crystal bead pendants.",
        imageSrc: "/assets/projects/b3d-dining-set/CloseUp-3.webp",
        wireframeType: "b3d-dining-render",
      },
      {
        id: "b3d-dining-3",
        title: "Table Settings & Utensils",
        caption: "Tableware & Chesterfield Chairs",
        description:
          "Detailed closeup of the floral tablecloth, lace placemats, plates, forks, spoons, wine glasses, cups, and Chesterfield chair cushions.",
        imageSrc: "/assets/projects/b3d-dining-set/CloseUp-1.webp",
        wireframeType: "b3d-dining-render",
      },
      {
        id: "b3d-dining-4",
        title: "Antique Wooden Cupboard",
        caption: "Carved Cabinetry",
        description:
          "Detailed model of the mahogany wooden cupboard with brass handle drawers and glass doors displaying fine dishware and bottles.",
        imageSrc: "/assets/projects/b3d-dining-set/closeup-4.webp",
        wireframeType: "b3d-dining-render",
      },
      {
        id: "b3d-dining-5",
        title: "Room Composition & Wall Decor",
        caption: "Eye-Level Perspective",
        description:
          "Perspective view highlighting the area rug, tiled floor, kitchen stove exhaust hood, cabinet sink, vase-like water dispenser, and framed wall paintings.",
        imageSrc: "/assets/projects/b3d-dining-set/CloseUp-2.webp",
        wireframeType: "b3d-dining-render",
      },
      {
        id: "b3d-dining-6",
        title: "Perspective Environment Shot",
        caption: "3D Layout Perspective",
        description:
          "Wide perspective camera angle showing spatial placement of the dining set, kitchen counter, window, and wall artwork.",
        imageSrc: "/assets/projects/b3d-dining-set/perspectiveView.webp",
        wireframeType: "b3d-dining-render",
      },
      {
        id: "b3d-dining-7",
        title: "Top-Down Orthographic View",
        caption: "Spatial Layout & Patterned Rug",
        description:
          "High-angle view highlighting the dining table symmetry, utensil placement, carpet patterns, and floor tile geometry.",
        imageSrc: "/assets/projects/b3d-dining-set/topView.webp",
        wireframeType: "b3d-dining-render",
      },
      {
        id: "b3d-dining-8",
        title: "Front Orthographic Elevation",
        caption: "Elevation View",
        description:
          "Front view focusing on the dining table alignment, chair spacing, and backdrop wall elements.",
        imageSrc: "/assets/projects/b3d-dining-set/frontView.webp",
        wireframeType: "b3d-dining-render",
      },
      {
        id: "b3d-dining-9",
        title: "Side Orthographic Elevation",
        caption: "Profile View",
        description:
          "Side elevation view showcasing window placement, stove exhaust profile, and room depth.",
        imageSrc: "/assets/projects/b3d-dining-set/sideView.webp",
        wireframeType: "b3d-dining-render",
      },
    ],
  },
];
