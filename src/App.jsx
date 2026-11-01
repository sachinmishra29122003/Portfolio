import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  Home,
  GraduationCap,
  Cpu,
  FolderGit2,
  Trophy,
  Star,
  Sun,
  Moon,
  Download,
  ChevronUp,
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  Code2,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Edit3,
  Save,
  X,
  Terminal,
  Database,
  Layout,
  Server,
  Wrench,
  BookOpen,
  Users,
  Award,
  Bot,
  Eye,
  Maximize2,
  Coffee,
  Bug,
  Play,
  Copy,
  Check,
  Send,
  Layers,
  Gamepad2,
  RotateCcw,
  MousePointerClick,
  Move,
  DoorOpen,
  LogOut,
  CircleDot,
  Compass,
  Zap,
  Shield,
  Crosshair,
  Radio,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

// ==========================================
// BRIGHT, CLEAN MODERN ARCHITECTURAL + VIBRANT GAMING PALETTE
// ==========================================
const ARCH_PALETTE = {
  alabaster: 0xf8fafc,       // Crisp Modern White Stucco Walls (Bright & Airy!)
  ivory: 0xe2e8f0,           // Clean Light Stone Trim & Curbs
  walnut: 0x7c4d34,          // Warm Natural Walnut Wood Doors & Decks
  cedar: 0xff2a85,           // Vibrant Pink Gaming Accent Trim
  champagneGold: 0xff2a85,   // Vibrant Pink Primary Highlight (#FF2A85)
  electricCyan: 0x06b6d4,    // Bright Aqua / Cyan Secondary Accent (#06B6D4)
  neonViolet: 0x8b5cf6,      // Clean Indigo Purple Accent
  warmTungsten: 0xffedd5,    // Warm Sunlit Interior Glow
  charcoalSlate: 0x334155,   // Clean Modern Slate Steel Frames
  deepSlate: 0xf1f5f9,       // Bright Warm Marble/Wood Interior Flooring
  sageLawn: 0x86efac,        // Fresh Sunlit Mint-Emerald Courtyard Lawn
  oliveTree: 0x22c55e,       // Vibrant Lush Green Foliage
  asphaltRoad: 0x475569,     // Clean Light Slate Street Asphalt
  poolWater: 0x22d3ee,       // Crystal Turquoise Swimming Pool
  nightSky: 0x1e1b4b,        // Soft Starry Indigo Twilight (Not pitch black!)
  daySky: 0xdbeafe           // Bright Airy Pastel Sky Blue (Default!)
};

// ==========================================
// INITIAL DATA FROM AYUSHI SHRIVASTAVA'S RESUME
// ==========================================
const RESUME_DATA = {
  name: "Ayushi Shrivastava",
  role: "Computer Science Engineer & Full-Stack Developer",
  email: "ayushiishrii20@gmail.com",
  linkedin: "https://linkedin.com/in/ayushishrivastava20",
  linkedinHandle: "linkedin.com/in/ayushishrivastava20",
  github: "https://github.com/ayushishri04",
  githubHandle: "github.com/ayushishri04",
  leetcode: "https://leetcode.com/u/ayushishri",
  leetcodeHandle: "leetcode.com/u/ayushishri",
  summary:
    "Passionate Computer Science student with experience in building responsive web applications and optimized user interfaces. Skilled in Java and JavaScript with strong debugging and analytical skills. Effective communicator and dependable team member committed to delivering quality solutions. Eager to apply technical expertise to real-world projects and continuously expand knowledge in emerging technologies. Motivated to take on challenging roles that foster innovation, problem-solving, and professional growth.",
  education: {
    btech: {
      id: "btech",
      roomNumber: "Suite 101",
      title: "B.Tech in Computer Science",
      institution: "Galgotias University",
      location: "Greater Noida, UP",
      period: "2022 – 2026",
      score: "CGPA: 8.65 / 10",
      badge: "Verified Resume Data",
      editable: false,
      colorHex: 0xff2a85,
      highlights: [
        "Core focus on Data Structures & Algorithms, Object-Oriented Programming (OOP), and Database Management Systems (DBMS).",
        "Coursework in Compiler Design and Software Engineering.",
        "Active participant in hackathons (Smart India Hackathon 2024) and full-stack project development."
      ]
    },
    class12: {
      id: "class12",
      roomNumber: "Suite 102",
      title: "Class XII (Senior Secondary)",
      institution: "Senior Secondary School (Click Edit to Customize)",
      location: "Board: CBSE / ICSE / State Board",
      period: "Year of Completion (e.g., 2022)",
      score: "Percentage / Grade (Editable Placeholder)",
      badge: "Editable Placeholder",
      editable: true,
      colorHex: 0x00f0ff,
      highlights: [
        "Resume currently provides B.Tech details only — this suite is kept as an honest, editable placeholder.",
        "Click 'Customize Suite Data' below to fill in your exact Class XII school, board, year, and percentage."
      ]
    },
    class10: {
      id: "class10",
      roomNumber: "Suite 103",
      title: "Class X (Secondary School)",
      institution: "High School Name (Click Edit to Customize)",
      location: "Board: CBSE / ICSE / State Board",
      period: "Year of Completion (e.g., 2020)",
      score: "Percentage / CGPA (Editable Placeholder)",
      badge: "Editable Placeholder",
      editable: true,
      colorHex: 0x9d4edd,
      highlights: [
        "Resume currently provides B.Tech details only — this suite is kept as an honest, editable placeholder.",
        "Click 'Customize Suite Data' below to fill in your exact Class X school, board, year, and score."
      ]
    }
  },
  skills: [
    {
      id: "programming",
      zone: "Station A",
      name: "Programming Languages",
      items: ["Java"],
      proficiency: 92,
      color: "from-pink-500 to-rose-600",
      colorHex: 0xff2a85,
      icon: "Terminal",
      description: "Strong foundation in Core Java, Object-Oriented Programming, Collections Framework, exception handling, and analytical debugging."
    },
    {
      id: "frontend",
      zone: "Station B",
      name: "Frontend Technologies",
      items: ["HTML5", "CSS3", "JavaScript"],
      proficiency: 90,
      color: "from-cyan-400 to-blue-600",
      colorHex: 0x00f0ff,
      icon: "Layout",
      description: "Building responsive web applications, interactive UI elements, Thymeleaf templates, and optimized cross-browser user experiences."
    },
    {
      id: "frameworks",
      zone: "Station C",
      name: "Frameworks & SDKs",
      items: ["Spring Boot", "Android SDK"],
      proficiency: 85,
      color: "from-fuchsia-500 to-purple-600",
      colorHex: 0x9d4edd,
      icon: "Server",
      description: "Developing scalable RESTful APIs, MVC architectures, and modular backend services with Spring Boot alongside mobile app foundations with Android SDK."
    },
    {
      id: "database",
      zone: "Station D",
      name: "Databases",
      items: ["MySQL", "SQL"],
      proficiency: 88,
      color: "from-cyan-400 to-teal-500",
      colorHex: 0x00f0ff,
      icon: "Database",
      description: "Designing normalized relational schemas, writing optimized SQL queries, and managing persistent storage for full-stack applications."
    },
    {
      id: "tools",
      zone: "Station E",
      name: "Developer Tools",
      items: ["GitHub", "Git", "Eclipse"],
      proficiency: 88,
      color: "from-pink-500 to-purple-600",
      colorHex: 0xff2a85,
      icon: "Wrench",
      description: "Proficient in version control workflows, collaborative repositories, code reviews, and IDE debugging using Git, GitHub, and Eclipse."
    },
    {
      id: "coursework",
      zone: "Station F",
      name: "Core CS Coursework",
      items: ["Data Structures & Algorithms", "OOP", "DBMS"],
      proficiency: 91,
      color: "from-amber-400 to-pink-500",
      colorHex: 0xff2a85,
      icon: "BookOpen",
      description: "Deep academic and practical command over algorithmic complexity, object-oriented design patterns, and database management internals."
    },
    {
      id: "softskills",
      zone: "Station G",
      name: "Soft Skills Lounge",
      items: ["Communication", "Collaboration", "Problem-Solving"],
      proficiency: 95,
      color: "from-cyan-400 to-pink-500",
      colorHex: 0x00f0ff,
      icon: "Users",
      description: "Clear technical communicator, dependable team collaborator, and data-driven problem solver focused on performance optimization.",
      subDetails: [
        { title: "Communication", text: "Able to clearly convey technical ideas and produce well-structured documentation of test results." },
        { title: "Collaboration", text: "Skilled at working with diverse teams to ensure efficient and successful project delivery." },
        { title: "Problem-Solving", text: "Strong ability to identify performance issues and apply data-driven approaches to resolve them." }
      ]
    }
  ],
  projects: [
    {
      id: "medicore",
      room: "Gallery 301",
      title: "MediCore HMS",
      date: "March 2026",
      subtitle: "Full-Stack Hospital Management System",
      colorHex: 0xff2a85,
      stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "HTML", "CSS", "JavaScript", "RESTful APIs"],
      bullets: [
        "Built a full-stack hospital management system to streamline patient records, appointments, and billing using Java, Spring Boot, and MySQL.",
        "Designed responsive user interfaces with Thymeleaf, HTML, CSS, and JavaScript for efficient data handling and seamless navigation.",
        "Implemented RESTful APIs for patient, doctor, and appointment modules, improving system performance and scalability.",
        "Applied modular architecture and clean coding practices to ensure maintainability and team collaboration."
      ],
      githubUrl: "https://github.com/ayushishri04",
      demoType: "hospital"
    },
    {
      id: "swiftstore",
      room: "Gallery 302",
      title: "SwiftStore",
      date: "April 2025",
      subtitle: "Express Medicine Delivery E-Commerce Web App",
      colorHex: 0x00f0ff,
      stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Modular Design"],
      bullets: [
        "Built a responsive e-commerce web app for medicine delivery using HTML, CSS, and JavaScript.",
        "Designed an intuitive shopping flow with product listings, cart, and checkout features.",
        "Enhanced user interface efficiency, resulting in faster navigation and smoother user experience.",
        "Integrated clean code structure and modular design to ensure maintainability and scalability."
      ],
      githubUrl: "https://github.com/ayushishri04",
      demoType: "pharmacy"
    },
    {
      id: "voyagevista",
      room: "Gallery 303",
      title: "VoyageVista",
      date: "March 2024",
      subtitle: "Interactive World Travel & Destination Platform",
      colorHex: 0x9d4edd,
      stack: ["HTML5", "CSS3", "JavaScript", "Smooth Scroll", "Cross-Browser Optimization"],
      bullets: [
        "Crafted a responsive travelling website using HTML, CSS, and JavaScript.",
        "Implemented smooth scrolling and interactive UI elements to enhance user experience.",
        "Optimized for performance and cross-browser compatibility."
      ],
      githubUrl: "https://github.com/ayushishri04",
      demoType: "travel"
    }
  ],
  achievements: [
    {
      id: "leetcode",
      title: "300+ LeetCode Problems Solved",
      subtitle: "Data Structures, Algorithms & Problem Solving",
      badge: "LeetCode 300+",
      link: "https://leetcode.com/u/ayushishri",
      colorHex: 0xff2a85
    },
    {
      id: "hackerrank",
      title: "50+ HackerRank Problems Solved",
      subtitle: "Java & Algorithmic Challenges",
      badge: "HackerRank 50+",
      link: "https://github.com/ayushishri04",
      colorHex: 0x00f0ff
    },
    {
      id: "sih2024",
      title: "Smart India Hackathon 2024",
      subtitle: "National Level Hackathon Participant",
      badge: "SIH 2024",
      link: null,
      colorHex: 0x9d4edd
    }
  ],
  certifications: [
    { category: "CoreTech", name: "SQL Certification", issuer: "Oracle", color: "bg-pink-500/20 text-pink-200 border-pink-400/50" },
    { category: "CoreTech", name: "Java Fundamentals", issuer: "IBM", color: "bg-cyan-500/20 text-cyan-200 border-cyan-400/50" },
    { category: "CoreTech", name: "Packet Tracer Networking", issuer: "Cisco", color: "bg-purple-500/20 text-purple-200 border-purple-400/50" },
    { category: "CoreTech", name: "Cybersecurity Fundamentals", issuer: "Fortinet", color: "bg-pink-500/20 text-pink-200 border-pink-400/50" },
    { category: "AI", name: "Artificial Intelligence Fundamentals", issuer: "IBM", color: "bg-cyan-500/20 text-cyan-200 border-cyan-400/50" },
    { category: "NPTEL", name: "Compiler Design", issuer: "NPTEL", color: "bg-purple-500/20 text-purple-200 border-purple-400/50" },
    { category: "NPTEL", name: "Software Engineering", issuer: "NPTEL", color: "bg-pink-500/20 text-pink-200 border-pink-400/50" },
    { category: "Volunteering", name: "World Environment Summit", issuer: "Volunteer", color: "bg-cyan-500/20 text-cyan-200 border-cyan-400/50" }
  ]
};

// Floor configuration for the 3D House & Rear-Spine Elevator
const FLOORS = [
  {
    id: 4,
    code: "R",
    name: "Rooftop Sky Deck",
    subtitle: "Achievements, Certifications & Contact",
    botMessage: "Welcome to the Rooftop Sky Deck! 🌟 Aim your center crosshair at the Trophy Pedestals or Contact Dish and press [SPACEBAR] to open!",
    yLevel: 16.8
  },
  {
    id: 3,
    code: "3F",
    name: "Project Exhibition",
    subtitle: "MediCore HMS • SwiftStore • VoyageVista",
    botMessage: "3rd Floor Project Exhibition! 🚀 Aim at any walnut suite door or miniature 3D table and press [SPACEBAR] to open/close live project simulations!",
    yLevel: 12.6
  },
  {
    id: 2,
    code: "2F",
    name: "Skills Laboratory",
    subtitle: "Java • Spring Boot • Web • MySQL • DSA",
    botMessage: "2nd Floor Skills Laboratory! 🧪 Aim at any of the 7 architectural pedestals and press [SPACEBAR] to inspect Ayushi's technical & soft skills!",
    yLevel: 8.4
  },
  {
    id: 1,
    code: "1F",
    name: "Education Wing",
    subtitle: "Galgotias University (B.Tech) • Class XII • Class X",
    botMessage: "1st Floor Education Wing! 🎓 Aim at the 3D walnut doors and press [SPACEBAR] to swing them open, and press [SPACEBAR] again to close!",
    yLevel: 4.2
  },
  {
    id: 0,
    code: "G",
    name: "Grand Foyer & Lounge",
    subtitle: "Reception Desk, Staircase & Elevator Spine",
    botMessage: "Welcome inside Ayushi's Grand Foyer! 🏡 Aim at the glowing 3D Elevator Button or Reception Desk and press [SPACEBAR] to open and close!",
    yLevel: 0
  }
];

const FLOOR_HEIGHT = 4.2;

// Helper to create Clean, Bright Floating 3D Room Labels
function createTextSprite(text, subtext = "", bgColor = "rgba(255, 255, 255, 0.95)", borderColor = "#ff2a85") {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 148;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = bgColor;
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 6;
  const r = 28;
  ctx.beginPath();
  ctx.moveTo(r, 10);
  ctx.lineTo(502 - r, 10);
  ctx.quadraticCurveTo(502, 10, 502, 10 + r);
  ctx.lineTo(502, 138 - r);
  ctx.quadraticCurveTo(502, 138, 502 - r, 138);
  ctx.lineTo(r, 138);
  ctx.quadraticCurveTo(10, 138, 10, 138 - r);
  ctx.lineTo(10, 10 + r);
  ctx.quadraticCurveTo(10, 10, r, 10);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 32px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(text, 256, subtext ? 64 : 84);

  if (subtext) {
    ctx.fillStyle = "#db2777";
    ctx.font = "bold 21px Inter, system-ui, sans-serif";
    ctx.fillText(subtext, 256, 108);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(2.85, 0.85, 1);
  sprite.renderOrder = 999;
  return sprite;
}

export default function App() {
  // ==========================================
  // TWO DISTINCT MODES: EXTERIOR STREET ARRIVAL vs. INTERIOR 3D EXPLORATION
  // ==========================================
  const [isInsideHouse, setIsInsideHouse] = useState(false);

  // Active Floor when inside: 0 = Ground, 1 = Education, 2 = Skills, 3 = Projects, 4 = Rooftop, -1 = Secret Bunker
  const [currentFloor, setCurrentFloor] = useState(0);
  // Camera View Mode: "tps" (PUBG Third-Person Follow Cam), "floor" (Orbit Cam), "overview" (Full Cutaway)
  const [cameraMode, setCameraMode] = useState("tps");
  // Default to Bright Airy Daylight Mode so nothing looks dark!
  const [isNightMode, setIsNightMode] = useState(false);

  // AIM + SPACEBAR INTERACTION STATE (Replaces auto-popups on proximity!)
  const [aimedInteractable, setAimedInteractable] = useState(null);
  const [isSprinting, setIsSprinting] = useState(false);
  const [playerTelemetry, setPlayerTelemetry] = useState({ x: 0, z: 10.2, rotY: Math.PI, heading: 0 });
  const [xpScore, setXpScore] = useState(150);
  const [toastBanner, setToastBanner] = useState(null);

  // Guided Onboarding Tutorial & Auto-Pilot Tour for First-Time Visitors / Recruiters
  const [tutorialStep, setTutorialStep] = useState(0);
  const [showHowToPlayModal, setShowHowToPlayModal] = useState(false);
  const [autoPilotActive, setAutoPilotActive] = useState(false);
  const [isAscendingToSky, setIsAscendingToSky] = useState(false);
  const [showStaticLandingPage, setShowStaticLandingPage] = useState(false);

  // Additional UI, Modal, Star, and Simulation States
  const [collectedStars, setCollectedStars] = useState([0]);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [elevatorKeypadOpen, setElevatorKeypadOpen] = useState(false);
  const [quickDrawerOpen, setQuickDrawerOpen] = useState(false);
  const [hoveredObjectLabel, setHoveredObjectLabel] = useState(null);
  const [botSpeech, setBotSpeech] = useState(
    "Hey there! Welcome to Ayushi's World. Aim the center crosshair at any door or object and press [SPACEBAR] to open, and [SPACEBAR] again to close!"
  );
  const [botExpanded, setBotExpanded] = useState(true);
  const [bugsSquashed, setBugsSquashed] = useState(0);
  const [copiedField, setCopiedField] = useState(null);

  // Education Editable State (with LocalStorage persistence)
  const [educationData, setEducationData] = useState(() => {
    try {
      const saved = localStorage.getItem("ayushi_house_education_v2");
      return saved ? JSON.parse(saved) : RESUME_DATA.education;
    } catch {
      return RESUME_DATA.education;
    }
  });
  const [editingEdu, setEditingEdu] = useState(false);
  const [eduForm, setEduForm] = useState({});

  // Project Mini-Simulation States
  const [hmsTab, setHmsTab] = useState("patients");
  const [hmsPatients] = useState([
    { id: "PT-104", name: "Aarav Sharma", dept: "Cardiology", status: "Checked In", bill: "₹1,850" },
    { id: "PT-105", name: "Priya Nair", dept: "Orthopedics", status: "In Consultation", bill: "₹2,400" },
    { id: "PT-106", name: "Rohan Verma", dept: "General Med", status: "Billing Cleared", bill: "₹950" }
  ]);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "ImmunoBoost Vitamin C+", price: 340, qty: 1 },
    { id: 2, name: "RapidRelief Digital Thermometer", price: 590, qty: 1 }
  ]);
  const [selectedDestination, setSelectedDestination] = useState(0);

  // Three.js Scene & Gameplay Refs
  const mountRef = useRef(null);
  const isInsideRef = useRef(isInsideHouse);
  const aimedInteractableRef = useRef(null);
  const showHowToPlayRef = useRef(showHowToPlayModal);
  const isAscendingRef = useRef(false);

  useEffect(() => {
    showHowToPlayRef.current = showHowToPlayModal;
  }, [showHowToPlayModal]);

  useEffect(() => {
    isAscendingRef.current = isAscendingToSky;
  }, [isAscendingToSky]);

  const sceneObjectsRef = useRef({
    lights: {},
    facadeGroup: null,
    elevatorCar: null,
    elevatorLeftDoor: null,
    elevatorRightDoor: null,
    elevatorTargetY: 0,
    elevatorDoorOpenTarget: 0,
    robotGroup: null,
    robotPos: new THREE.Vector3(0, 0, 9.5),
    robotRotY: Math.PI,
    robotJumpOffset: 0,
    robotVelocityY: 0,
    proximityRing: null,
    thrusterLight: null,
    zones: [],
    doors: {},
    stars: {},
    rotatingMeshes: [],
    interiorSprites: [],
    keysPressed: {},
    cameraOrbit: {
      theta: 0,
      phi: 1.15,
      radius: 18,
      target: new THREE.Vector3(0, 2, 0)
    },
    modalFocusPos: null
  });

  // Helper to show XP Toast Banner
  const triggerToast = (title, subtitle, xpGain = 50) => {
    setXpScore((prev) => prev + xpGain);
    setToastBanner({ title, subtitle, xpGain });
    setTimeout(() => {
      setToastBanner(null);
    }, 3200);
  };

  // Helper to copy contact info
  const copyToClipboard = (text, field) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(field);
    triggerToast("COPIED TO CLIPBOARD", text, 25);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Hands-Free Auto-Pilot Tour (automatically walks/teleports through every floor & opens key stations)
  useEffect(() => {
    if (!autoPilotActive) return;

    const tourSequence = [
      () => {
        handleEnterHouse();
        setBotSpeech("🤖 AUTO-PILOT TOUR [1/5]: Entering Ayushi's Grand Foyer! Next stop: 1st Floor Education Wing.");
      },
      () => {
        handleFloorChange(1);
        setActiveModal({ type: "education", key: "btech" });
        setBotSpeech("🤖 AUTO-PILOT TOUR [2/5]: Inspecting B.Tech Computer Science at Galgotias University (CGPA: 8.65/10).");
      },
      () => {
        setActiveModal(null);
        handleFloorChange(2);
        setActiveModal({ type: "skill", data: RESUME_DATA.skills[0] });
        setBotSpeech("🤖 AUTO-PILOT TOUR [3/5]: 2nd Floor Skills Lab — Java, Spring Boot, HTML/CSS/JS, MySQL & DSA!");
      },
      () => {
        setActiveModal(null);
        handleFloorChange(3);
        setActiveModal({ type: "project", data: RESUME_DATA.projects[0] });
        setBotSpeech("🤖 AUTO-PILOT TOUR [4/5]: 3rd Floor Project Exhibition — MediCore HMS, SwiftStore & VoyageVista!");
      },
      () => {
        setActiveModal(null);
        handleFloorChange(4);
        setBotSpeech("🤖 AUTO-PILOT TOUR [5/5]: Rooftop Sky Deck — Ascending above the house to Ayushi's Static Finale Page!");
      }
    ];

    let stepIndex = 0;
    tourSequence[0]();
    const interval = setInterval(() => {
      stepIndex++;
      if (stepIndex < tourSequence.length) {
        tourSequence[stepIndex]();
      } else {
        setAutoPilotActive(false);
        clearInterval(interval);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [autoPilotActive]);

  // Save edited Class XII / Class X qualification placeholders
  const handleSaveEducation = (key) => {
    setEducationData((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        ...eduForm,
        badge: "Customized Record"
      }
    }));
    setEditingEdu(false);
    triggerToast("EDUCATION RECORD SAVED", `Updated ${eduForm.title || key}`, 75);
  };

  useEffect(() => {
    isInsideRef.current = isInsideHouse;
  }, [isInsideHouse]);

  const currentFloorRef = useRef(currentFloor);
  useEffect(() => {
    currentFloorRef.current = currentFloor;
  }, [currentFloor]);

  const cameraModeRef = useRef(cameraMode);
  useEffect(() => {
    cameraModeRef.current = cameraMode;
  }, [cameraMode]);

  const activeModalRef = useRef(activeModal);
  useEffect(() => {
    activeModalRef.current = activeModal;
    if (!activeModal) {
      sceneObjectsRef.current.modalFocusPos = null;
      // Close any open interior room doors when the modal is closed with Spacebar
      Object.entries(sceneObjectsRef.current.doors).forEach(([id, doorObj]) => {
        if (id !== "front_entrance") {
          doorObj.openTarget = 0;
        }
      });
    }
  }, [activeModal]);

  const elevatorKeypadRef = useRef(elevatorKeypadOpen);
  useEffect(() => {
    elevatorKeypadRef.current = elevatorKeypadOpen;
    if (!elevatorKeypadOpen) {
      sceneObjectsRef.current.elevatorDoorOpenTarget = 0;
    }
  }, [elevatorKeypadOpen]);

  const educationDataRef = useRef(educationData);
  useEffect(() => {
    educationDataRef.current = educationData;
    try {
      localStorage.setItem("ayushi_house_education_v2", JSON.stringify(educationData));
    } catch {
      // ignore storage errors
    }
  }, [educationData]);

  // ==========================================
  // ENTERING vs. EXITING THE HOUSE
  // ==========================================
  const handleEnterHouse = () => {
    setIsInsideHouse(true);
    setCurrentFloor(0);
    setCameraMode("tps");

    // Swing open front entrance door
    if (sceneObjectsRef.current.doors["front_entrance"]) {
      sceneObjectsRef.current.doors["front_entrance"].openTarget = -Math.PI * 0.65;
      setTimeout(() => {
        if (sceneObjectsRef.current.doors["front_entrance"]) {
          sceneObjectsRef.current.doors["front_entrance"].openTarget = 0;
        }
      }, 2200);
    }

    // Move AyuBot inside the Grand Foyer facing the interior & elevator
    sceneObjectsRef.current.robotPos.set(0, 0, 2.2);
    sceneObjectsRef.current.robotRotY = Math.PI;
    if (sceneObjectsRef.current.robotGroup) {
      sceneObjectsRef.current.robotGroup.position.set(0, 0, 2.2);
    }

    setTutorialStep((prev) => (prev === 1 ? 2 : prev));
    triggerToast("BREACHED GRAND FOYER", "Entered Ayushi's Cyber-Gaming Developer House", 100);
    setBotSpeech(
      "We're inside! Walk with WASD, aim the center crosshair at any door or station, and press [SPACEBAR] to open (and [SPACEBAR] again to close)!"
    );
  };

  const handleExitToStreet = () => {
    setIsInsideHouse(false);
    setElevatorKeypadOpen(false);
    setQuickDrawerOpen(false);
    setActiveModal(null);

    sceneObjectsRef.current.robotPos.set(0, 0, 8.8);
    sceneObjectsRef.current.robotRotY = Math.PI;
    if (sceneObjectsRef.current.robotGroup) {
      sceneObjectsRef.current.robotGroup.position.set(0, 0, 8.8);
    }

    setBotSpeech(
      "Back on the front avenue! Aim at the Grand Tourer EV or Main Entrance Door and press [SPACEBAR] to interact."
    );
  };

  // ==========================================
  // SKY ASCENT ANIMATION ABOVE THE HOUSE -> STATIC LANDING PAGE
  // ==========================================
  const handleAscendToStaticPage = () => {
    setActiveModal(null);
    setElevatorKeypadOpen(false);
    setShowHowToPlayModal(false);
    setIsAscendingToSky(true);
    setBotSpeech("🚀 Ascending high above The Developer's House into Ayushi's Static Portfolio Page!");
    setTimeout(() => {
      setShowStaticLandingPage(true);
    }, 2200);
  };

  const handleReturnFromStaticPage = () => {
    setShowStaticLandingPage(false);
    setIsAscendingToSky(false);
    setBotSpeech("Welcome back to the 3D Rooftop Sky Deck! Use the elevator or explore the trophies.");
  };

  // ==========================================
  // FLOOR TRANSITION & 3D ELEVATOR DOOR ANIMATION
  // ==========================================
  const handleFloorChange = (targetFloor) => {
    if (!isInsideRef.current) {
      setIsInsideHouse(true);
    }
    setCurrentFloor(targetFloor);
    setElevatorKeypadOpen(false);
    setActiveModal(null);

    const yBase = targetFloor === -1 ? -FLOOR_HEIGHT : targetFloor * FLOOR_HEIGHT;
    sceneObjectsRef.current.elevatorTargetY = yBase;

    // Animate 3D Elevator Doors opening upon arrival
    sceneObjectsRef.current.elevatorDoorOpenTarget = 0.85;
    setTimeout(() => {
      sceneObjectsRef.current.elevatorDoorOpenTarget = 0;
    }, 2600);

    // Step AyuBot out of the rear-center elevator (x=0, z=-1.2) facing forward into the room
    sceneObjectsRef.current.robotPos.set(0, yBase, -0.8);
    sceneObjectsRef.current.robotRotY = 0;
    if (sceneObjectsRef.current.robotGroup) {
      sceneObjectsRef.current.robotGroup.position.set(0, yBase, -0.8);
    }

    setTutorialStep((prev) => (prev === 2 || prev === 3 ? 4 : prev));

    // Collect floor star
    if (targetFloor >= 0 && targetFloor <= 4) {
      setCollectedStars((prev) => {
        if (!prev.includes(targetFloor)) {
          const updated = [...prev, targetFloor];
          const floorName = FLOORS.find((f) => f.id === targetFloor)?.name || `Floor ${targetFloor}`;
          triggerToast(`STAR COLLECTED • FLOOR ${targetFloor}`, `Unlocked ${floorName}`, 120);
          if (updated.length === 5) {
            setShowCelebration(true);
            setTimeout(() => setShowCelebration(false), 5500);
          }
          return updated;
        }
        return prev;
      });
    }

    if (targetFloor === -1) {
      setSecretUnlocked(true);
      triggerToast("SECRET BUNKER UNLOCKED", "Basement B1 Late-Night Coding Lab", 200);
      setBotSpeech(
        "🕵️‍♀️ Secret Basement B1 Unlocked! Aim at the 3D production bug and press [SPACEBAR] to squash it!"
      );
    } else if (targetFloor === 4) {
      const floorObj = FLOORS.find((f) => f.id === 4);
      if (floorObj) setBotSpeech("Welcome to the Rooftop! 🌟 Preparing sky ascent above the house to your Static Portfolio Page...");
      // Automatically launch the Sky Ascent camera animation above the house and land on the Static Page!
      setTimeout(() => {
        handleAscendToStaticPage();
      }, 1400);
    } else {
      const floorObj = FLOORS.find((f) => f.id === targetFloor);
      if (floorObj) setBotSpeech(floorObj.botMessage);
    }
  };

  // Open the physical 3D Elevator Call Button Keypad
  const handlePressElevatorCallButton = (floorId) => {
    const yBase = floorId === -1 ? -FLOOR_HEIGHT : floorId * FLOOR_HEIGHT;
    sceneObjectsRef.current.elevatorTargetY = yBase;
    sceneObjectsRef.current.elevatorDoorOpenTarget = 0.85;
    setElevatorKeypadOpen(true);
    setBotSpeech(
      "Ding! 🔔 Elevator doors open! Press a number key (0-4) or click a floor button, or press [SPACEBAR] to close!"
    );
  };

  // Trigger a 3D Door / Station interaction (via Aim + [SPACEBAR] or Click)
  const triggerInteraction = (payload, worldFocusPos = null) => {
    if (!payload) return;

    if (payload.action === "enterHouse") {
      handleEnterHouse();
      return;
    }

    if (payload.action === "openNameplateStand") {
      setShowHowToPlayModal(true);
      triggerToast("NAMEPLATE HUB", "Residence Directory & Controls", 25);
      return;
    }

    if (payload.action === "ascendToStaticPage") {
      handleAscendToStaticPage();
      return;
    }

    if (payload.action === "openElevatorKeypad") {
      handlePressElevatorCallButton(payload.floorId ?? currentFloorRef.current);
      return;
    }

    if (payload.doorId && sceneObjectsRef.current.doors[payload.doorId]) {
      sceneObjectsRef.current.doors[payload.doorId].openTarget = -Math.PI * 0.68;
    }

    if (payload.botText) {
      setBotSpeech(payload.botText);
    }

    if (payload.action === "gotoFloor") {
      handleFloorChange(payload.targetFloor);
      return;
    }

    if (payload.action === "secretBunker") {
      setSecretUnlocked(true);
      handleFloorChange(-1);
      return;
    }

    if (payload.action === "squashBug3D") {
      setBugsSquashed((b) => b + 1);
      triggerToast("BUG ELIMINATED 💥", "+50 XP • Clean Java Build Restored", 50);
      setBotSpeech("BOOM! 💥 Production bug squashed in 3D space! Press [SPACEBAR] again for combo XP!");
      return;
    }

    if (payload.modal) {
      if (worldFocusPos) {
        sceneObjectsRef.current.modalFocusPos = worldFocusPos.clone();
      }
      if (payload.modal.type === "education") {
        setEditingEdu(false);
        setEduForm(educationDataRef.current[payload.modal.key]);
      }
      setTutorialStep((prev) => (prev === 2 ? 3 : prev));
      triggerToast("INSPECTING MODULE", payload.title || "Holographic Data Terminal Active", 25);
      setActiveModal(payload.modal);
    }
  };

  // Keep a stable ref to triggerInteraction so the Three.js loop & keyboard listeners always call the latest version
  const triggerInteractionRef = useRef(triggerInteraction);
  useEffect(() => {
    triggerInteractionRef.current = triggerInteraction;
  });

  // ==========================================
  // BUILD & RUN THE ARCHITECTURAL THREE.JS 3D WORLD
  // ==========================================
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. SCENE, CAMERA & RENDERER (BRIGHT SUNLIT SKY BY DEFAULT!)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(ARCH_PALETTE.daySky);
    scene.fog = new THREE.FogExp2(ARCH_PALETTE.daySky, 0.0045);

    const camera = new THREE.PerspectiveCamera(
      48,
      container.clientWidth / container.clientHeight,
      0.1,
      240
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const interactables = [];
    const proximityZones = [];
    const floorWalkPlanes = [];
    const doorsMap = {};
    const starsMap = {};
    const rotatingMeshes = [];
    const interiorSprites = [];

    const registerProximityZone = ({
      id,
      floorId,
      outsideOnly = false,
      x,
      y,
      z,
      radius = 2.5,
      promptText,
      subText,
      payload
    }) => {
      proximityZones.push({
        id,
        floorId,
        outsideOnly,
        pos: new THREE.Vector3(x, y, z),
        radius,
        promptText,
        subText,
        payload: { ...payload, title: promptText }
      });
    };

    // 2. BRIGHT, INVITING ARCHITECTURAL LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.35);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffbeb, 1.75);
    sunLight.position.set(26, 45, 34);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    const interiorTungstenLight = new THREE.PointLight(0xfff7ed, 1.4, 45);
    interiorTungstenLight.position.set(0, 10, 4);
    scene.add(interiorTungstenLight);

    const courtyardWarmLight = new THREE.PointLight(0xff2a85, 0.9, 32);
    courtyardWarmLight.position.set(0, 5, 12);
    scene.add(courtyardWarmLight);

    sceneObjectsRef.current.lights = {
      scene,
      ambientLight,
      sunLight,
      interiorTungstenLight,
      courtyardWarmLight
    };

    // 3. EXTERIOR ENVIRONMENT: MANICURED SAGE LAWN, FRONT ASPHALT ROAD, STREET LAMPS, POOL & LUXURY CAR
    const lawnGeo = new THREE.CylinderGeometry(52, 52, 0.8, 64);
    const lawnMat = new THREE.MeshStandardMaterial({
      color: ARCH_PALETTE.sageLawn,
      roughness: 0.88
    });
    const lawnMesh = new THREE.Mesh(lawnGeo, lawnMat);
    lawnMesh.position.set(0, -0.45, 4);
    lawnMesh.receiveShadow = true;
    scene.add(lawnMesh);

    // Front Asphalt Road with crisp dashed lane markings & stone curbs
    const roadGroup = new THREE.Group();
    const asphalt = new THREE.Mesh(
      new THREE.BoxGeometry(76, 0.14, 5.8),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.asphaltRoad, roughness: 0.85 })
    );
    asphalt.position.set(0, 0.02, 15.2);
    asphalt.receiveShadow = true;
    roadGroup.add(asphalt);

    // Stone Sidewalk Curbs along the road
    const northCurb = new THREE.Mesh(
      new THREE.BoxGeometry(76, 0.22, 0.9),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.ivory, roughness: 0.6 })
    );
    northCurb.position.set(0, 0.06, 12.0);
    roadGroup.add(northCurb);

    const southCurb = northCurb.clone();
    southCurb.position.set(0, 0.06, 18.4);
    roadGroup.add(southCurb);

    // Dashed Champagne/White Center Road Stripes
    for (let rx = -32; rx <= 32; rx += 4.5) {
      const stripe = new THREE.Mesh(
        new THREE.BoxGeometry(2.1, 0.16, 0.18),
        new THREE.MeshBasicMaterial({ color: ARCH_PALETTE.alabaster })
      );
      stripe.position.set(rx, 0.03, 15.2);
      roadGroup.add(stripe);
    }

    // Architectural Street Lamps along the avenue
    [-16, -5.5, 5.5, 16].forEach((lx) => {
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09, 0.12, 4.2, 12),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.charcoalSlate, metalness: 0.7 })
      );
      pole.position.set(lx, 2.1, 11.8);
      roadGroup.add(pole);

      const arm = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.12, 0.9),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.charcoalSlate })
      );
      arm.position.set(lx, 4.15, 12.15);
      roadGroup.add(arm);

      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 12, 12),
        new THREE.MeshBasicMaterial({ color: ARCH_PALETTE.warmTungsten })
      );
      bulb.position.set(lx, 4.02, 12.45);
      roadGroup.add(bulb);
    });
    scene.add(roadGroup);

    // Travertine Stone Front Walkway & Driveway connecting the house to the street
    const frontWalkway = new THREE.Mesh(
      new THREE.BoxGeometry(3.4, 0.09, 8.2),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.ivory, roughness: 0.55 })
    );
    frontWalkway.position.set(0, 0.03, 7.9);
    frontWalkway.receiveShadow = true;
    scene.add(frontWalkway);

    const drivewaySlab = new THREE.Mesh(
      new THREE.BoxGeometry(6.2, 0.08, 8.6),
      new THREE.MeshStandardMaterial({ color: 0x3a4149, roughness: 0.65 })
    );
    drivewaySlab.position.set(6.2, 0.02, 7.8);
    drivewaySlab.receiveShadow = true;
    scene.add(drivewaySlab);

    // Infinity Lap Pool & Outdoor Lounge Seating on Left Courtyard
    const poolCoping = new THREE.Mesh(
      new THREE.BoxGeometry(6.8, 0.22, 4.4),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.alabaster, roughness: 0.35 })
    );
    poolCoping.position.set(-5.4, 0.03, 7.6);
    scene.add(poolCoping);

    const poolWater = new THREE.Mesh(
      new THREE.BoxGeometry(6.2, 0.25, 3.8),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.poolWater,
        emissive: 0x0284c7,
        emissiveIntensity: 0.35,
        roughness: 0.1,
        metalness: 0.15
      })
    );
    poolWater.position.set(-5.4, 0.06, 7.6);
    scene.add(poolWater);

    // Outdoor Teak Lounge Chairs by the Pool
    [-7.2, -5.6].forEach((cx) => {
      const lounger = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.25, 2.0),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.cedar, roughness: 0.5 })
      );
      lounger.position.set(cx, 0.2, 4.7);
      const cushion = new THREE.Mesh(
        new THREE.BoxGeometry(0.82, 0.12, 1.85),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.alabaster, roughness: 0.7 })
      );
      cushion.position.set(cx, 0.36, 4.7);
      scene.add(lounger, cushion);
    });

    // Manicured Olive & Cypress Trees framing the Residence
    const treeCoords = [
      [-11.5, 5.5],
      [-12.5, -2.5],
      [11.8, 5.0],
      [12.4, -3.0],
      [-10.8, 10.5],
      [11.2, 10.5]
    ];
    treeCoords.forEach(([tx, tz]) => {
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.32, 1.9, 10),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.walnut, roughness: 0.8 })
      );
      trunk.position.set(tx, 0.95, tz);
      scene.add(trunk);

      const crown = new THREE.Mesh(
        new THREE.SphereGeometry(1.45, 14, 14),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.oliveTree, roughness: 0.75 })
      );
      crown.scale.set(1, 1.25, 1);
      crown.position.set(tx, 2.9, tz);
      crown.castShadow = true;
      scene.add(crown);
    });

    // Subtle Starfield for Nordic Twilight sky
    const starGeo = new THREE.BufferGeometry();
    const starCount = 380;
    const starCoords = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starCoords[i] = (Math.random() - 0.5) * 150;
      starCoords[i + 1] = Math.random() * 65 + 10;
      starCoords[i + 2] = (Math.random() - 0.5) * 140 - 25;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starCoords, 3));
    const starField = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xfffbeb, size: 0.32, transparent: true, opacity: 0.8 })
    );
    scene.add(starField);

    // ==========================================
    // 4. MULTI-STORY LUXURY HOUSE STRUCTURE (WARM ALABASTER, WALNUT & CHAMPAGNE GOLD)
    // ==========================================
    const HOUSE_WIDTH = 16.0;
    const HOUSE_DEPTH = 8.0;

    const allFloorLevels = [-1, 0, 1, 2, 3, 4];
    allFloorLevels.forEach((fIdx) => {
      const y = fIdx * FLOOR_HEIGHT;

      // Architectural Floor Slab
      const slab = new THREE.Mesh(
        new THREE.BoxGeometry(HOUSE_WIDTH, 0.3, HOUSE_DEPTH),
        new THREE.MeshStandardMaterial({
          color: fIdx === -1 ? 0x1a2421 : ARCH_PALETTE.alabaster,
          roughness: 0.45
        })
      );
      slab.position.set(0, y - 0.15, 0);
      slab.receiveShadow = true;
      slab.userData = { isWalkFloor: true, floorId: fIdx };
      scene.add(slab);
      floorWalkPlanes.push(slab);

      // Warm Interior Wood/Slate Flooring Inlay
      const inlay = new THREE.Mesh(
        new THREE.BoxGeometry(HOUSE_WIDTH - 0.5, 0.04, HOUSE_DEPTH - 0.5),
        new THREE.MeshStandardMaterial({
          color: fIdx % 2 === 0 ? 0xf1f5f9 : 0xfef3c7,
          roughness: 0.35
        })
      );
      inlay.position.set(0, y + 0.01, 0);
      inlay.receiveShadow = true;
      inlay.userData = { isWalkFloor: true, floorId: fIdx };
      scene.add(inlay);
      floorWalkPlanes.push(inlay);

      // Brushed Champagne Gold Fascia Accent Strip along front slab edge
      const goldFascia = new THREE.Mesh(
        new THREE.BoxGeometry(HOUSE_WIDTH + 0.1, 0.1, 0.12),
        new THREE.MeshStandardMaterial({
          color: ARCH_PALETTE.champagneGold,
          metalness: 0.8,
          roughness: 0.25
        })
      );
      goldFascia.position.set(0, y - 0.05, HOUSE_DEPTH / 2 + 0.02);
      scene.add(goldFascia);

      // Back Wall & Side Architectural Walls
      if (fIdx < 4) {
        const backWall = new THREE.Mesh(
          new THREE.BoxGeometry(HOUSE_WIDTH, FLOOR_HEIGHT, 0.28),
          new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.alabaster, roughness: 0.6 })
        );
        backWall.position.set(0, y + FLOOR_HEIGHT / 2, -HOUSE_DEPTH / 2);
        backWall.receiveShadow = true;
        scene.add(backWall);

        const leftWall = new THREE.Mesh(
          new THREE.BoxGeometry(0.28, FLOOR_HEIGHT, HOUSE_DEPTH),
          new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.alabaster, roughness: 0.55 })
        );
        leftWall.position.set(-HOUSE_WIDTH / 2, y + FLOOR_HEIGHT / 2, 0);
        leftWall.castShadow = true;
        scene.add(leftWall);

        const rightWall = new THREE.Mesh(
          new THREE.BoxGeometry(0.28, FLOOR_HEIGHT, HOUSE_DEPTH),
          new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.alabaster, roughness: 0.55 })
        );
        rightWall.position.set(HOUSE_WIDTH / 2, y + FLOOR_HEIGHT / 2, 0);
        rightWall.castShadow = true;
        scene.add(rightWall);
      } else {
        // Rooftop Architectural Pergola & Tempered Glass Balustrade
        const railMat = new THREE.MeshStandardMaterial({
          color: 0xe2e8f0,
          transparent: true,
          opacity: 0.32,
          roughness: 0.1
        });
        const frontRail = new THREE.Mesh(new THREE.BoxGeometry(HOUSE_WIDTH, 1.15, 0.08), railMat);
        frontRail.position.set(0, y + 0.58, HOUSE_DEPTH / 2);
        scene.add(frontRail);

        // Walnut Wood Rooftop Pergola Frame over the Sky Deck
        const pergolaTop = new THREE.Mesh(
          new THREE.BoxGeometry(HOUSE_WIDTH - 1.5, 0.22, HOUSE_DEPTH - 1.2),
          new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.walnut, roughness: 0.5 })
        );
        pergolaTop.position.set(0, y + 3.6, -0.2);
        scene.add(pergolaTop);
      }

      // COLLECTIBLE 3D SPINNING GOLD STAR ON EACH MAIN FLOOR (0..4)
      if (fIdx >= 0 && fIdx <= 4) {
        const starMesh = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.4, 0),
          new THREE.MeshStandardMaterial({
            color: ARCH_PALETTE.champagneGold,
            emissive: 0xb45309,
            emissiveIntensity: 0.65,
            metalness: 0.85,
            roughness: 0.15
          })
        );
        starMesh.position.set(-6.5, y + 1.15, 2.3);
        const starPayload = {
          action: "gotoFloor",
          targetFloor: fIdx,
          botText: `Star collected on Floor ${fIdx}! Keep exploring Ayushi's residence!`
        };
        starMesh.userData = {
          interactive: true,
          label: `Floor ${fIdx === 0 ? "G" : fIdx === 4 ? "Rooftop" : fIdx} Collectible Star ⭐ — Aim & Press [SPACEBAR]`,
          payload: starPayload
        };
        scene.add(starMesh);
        interactables.push(starMesh);
        rotatingMeshes.push(starMesh);
        starsMap[fIdx] = starMesh;
      }
    });

    // ==========================================
    // 5. EXTERIOR FRONT FACADE WALL GROUP (VISIBLE ON FIRST PAGE, SLIDES OPEN WHEN ENTERING)
    // ==========================================
    const facadeGroup = new THREE.Group();
    [0, 1, 2, 3].forEach((fIdx) => {
      const y = fIdx * FLOOR_HEIGHT;

      // Left Stucco Pier
      const leftPier = new THREE.Mesh(
        new THREE.BoxGeometry(4.2, FLOOR_HEIGHT, 0.32),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.alabaster, roughness: 0.5 })
      );
      leftPier.position.set(-5.9, y + FLOOR_HEIGHT / 2, HOUSE_DEPTH / 2);
      facadeGroup.add(leftPier);

      // Right Stucco Pier
      const rightPier = new THREE.Mesh(
        new THREE.BoxGeometry(4.2, FLOOR_HEIGHT, 0.32),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.alabaster, roughness: 0.5 })
      );
      rightPier.position.set(5.9, y + FLOOR_HEIGHT / 2, HOUSE_DEPTH / 2);
      facadeGroup.add(rightPier);

      // Warm Glowing Architectural Window Glass in Center Bay
      if (fIdx > 0) {
        const windowPane = new THREE.Mesh(
          new THREE.BoxGeometry(7.6, FLOOR_HEIGHT - 0.5, 0.14),
          new THREE.MeshStandardMaterial({
            color: ARCH_PALETTE.warmTungsten,
            emissive: 0xf59e0b,
            emissiveIntensity: 0.42,
            transparent: true,
            opacity: 0.88,
            roughness: 0.15
          })
        );
        windowPane.position.set(0, y + FLOOR_HEIGHT / 2, HOUSE_DEPTH / 2 - 0.05);
        facadeGroup.add(windowPane);
      }

      // Vertical Cedar Wood Architectural Louvers on the facade
      for (let lx = -3.4; lx <= -1.8; lx += 0.4) {
        const louver = new THREE.Mesh(
          new THREE.BoxGeometry(0.12, FLOOR_HEIGHT - 0.3, 0.38),
          new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.cedar, roughness: 0.55 })
        );
        louver.position.set(lx, y + FLOOR_HEIGHT / 2, HOUSE_DEPTH / 2 + 0.06);
        facadeGroup.add(louver);
      }
    });

    // Grand Front Entrance Walnut Door on the Exterior Facade (Z = +4.0)
    const extDoorPivot = new THREE.Group();
    extDoorPivot.position.set(-1.1, 0, HOUSE_DEPTH / 2 + 0.08);
    const extDoorLeaf = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 3.3, 0.16),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.walnut,
        roughness: 0.4,
        metalness: 0.2
      })
    );
    extDoorLeaf.position.set(1.1, 1.65, 0);
    const extHandle = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 1.2, 0.12),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.champagneGold, metalness: 0.9 })
    );
    extHandle.position.set(1.9, 1.6, 0.12);
    extDoorLeaf.add(extHandle);

    const enterInteraction = {
      interactive: true,
      label: "🏡 Main Entrance Door — Aim & Press [SPACEBAR] to Enter Ayushi's House",
      payload: { action: "enterHouse" }
    };
    extDoorLeaf.userData = enterInteraction;
    interactables.push(extDoorLeaf);
    extDoorPivot.add(extDoorLeaf);
    facadeGroup.add(extDoorPivot);
    doorsMap["front_entrance"] = { pivot: extDoorPivot, openTarget: 0 };

    registerProximityZone({
      id: "zone_front_door",
      floorId: 0,
      outsideOnly: true,
      x: 0,
      y: 0,
      z: 5.2,
      radius: 3.6,
      promptText: "Breach & Enter Developer's House",
      subText: "Main Walnut Entrance Door • Grand Foyer",
      payload: { action: "enterHouse" }
    });

    // Architectural House Number Plaque on Exterior Facade
    const housePlaque = createTextSprite(
      "AYUSHI RESIDENCE",
      "Aim & Press [SPACEBAR] 🏡",
      "rgba(20, 24, 29, 0.95)",
      "#d4af37"
    );
    housePlaque.position.set(0, 3.85, HOUSE_DEPTH / 2 + 0.5);
    housePlaque.userData = enterInteraction;
    facadeGroup.add(housePlaque);
    interactables.push(housePlaque);

    scene.add(facadeGroup);
    sceneObjectsRef.current.facadeGroup = facadeGroup;

    // ==========================================
    // 6. REAR-CENTER ARCHITECTURAL GLASS ELEVATOR & PHYSICAL 3D CALL BUTTONS (X = 0, Z = -2.75)
    // ==========================================
    const ELEV_X = 0;
    const ELEV_Z = -2.75;
    const shaftHeight = FLOOR_HEIGHT * 6;

    // Structural Charcoal Steel & Tempered Glass Shaft in the Rear-Center Spine
    const shaftGlass = new THREE.Mesh(
      new THREE.BoxGeometry(2.7, shaftHeight, 2.1),
      new THREE.MeshStandardMaterial({
        color: 0xdbeafe,
        transparent: true,
        opacity: 0.18,
        roughness: 0.1
      })
    );
    shaftGlass.position.set(ELEV_X, shaftHeight / 2 - FLOOR_HEIGHT, ELEV_Z);
    scene.add(shaftGlass);

    // Brushed Champagne Gold Vertical Elevator Guide Rails
    [-1.36, 1.36].forEach((gx) => {
      const rail = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, shaftHeight, 0.12),
        new THREE.MeshStandardMaterial({
          color: ARCH_PALETTE.champagneGold,
          metalness: 0.8,
          roughness: 0.25
        })
      );
      rail.position.set(ELEV_X + gx, shaftHeight / 2 - FLOOR_HEIGHT, ELEV_Z + 1.02);
      scene.add(rail);
    });

    // Animated 3D Elevator Cab with Sliding Glass Doors
    const elevatorCar = new THREE.Group();
    const cabFloor = new THREE.Mesh(
      new THREE.BoxGeometry(2.45, 0.2, 1.9),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.champagneGold,
        emissive: 0x92400e,
        emissiveIntensity: 0.35
      })
    );
    const cabCeiling = new THREE.Mesh(
      new THREE.BoxGeometry(2.45, 0.18, 1.9),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.warmTungsten,
        emissive: ARCH_PALETTE.warmTungsten,
        emissiveIntensity: 0.7
      })
    );
    cabCeiling.position.y = 3.15;

    const cabBackWall = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 3.15, 0.1),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.walnut, roughness: 0.4 })
    );
    cabBackWall.position.set(0, 1.58, -0.9);

    // Left & Right Sliding Glass Elevator Doors
    const doorMat = new THREE.MeshStandardMaterial({
      color: ARCH_PALETTE.champagneGold,
      transparent: true,
      opacity: 0.45,
      metalness: 0.6,
      roughness: 0.15
    });
    const leftElevDoor = new THREE.Mesh(new THREE.BoxGeometry(1.15, 3.0, 0.08), doorMat);
    leftElevDoor.position.set(-0.6, 1.55, 0.92);
    const rightElevDoor = new THREE.Mesh(new THREE.BoxGeometry(1.15, 3.0, 0.08), doorMat);
    rightElevDoor.position.set(0.6, 1.55, 0.92);

    elevatorCar.add(cabFloor, cabCeiling, cabBackWall, leftElevDoor, rightElevDoor);
    elevatorCar.position.set(ELEV_X, 0, ELEV_Z);
    scene.add(elevatorCar);

    sceneObjectsRef.current.elevatorCar = elevatorCar;
    sceneObjectsRef.current.elevatorLeftDoor = leftElevDoor;
    sceneObjectsRef.current.elevatorRightDoor = rightElevDoor;

    // PHYSICAL 3D ELEVATOR CALL PILLAR & GLOWING BUTTON ON EVERY FLOOR!
    allFloorLevels.forEach((fIdx) => {
      const y = fIdx * FLOOR_HEIGHT;
      const callStand = new THREE.Group();
      callStand.position.set(ELEV_X + 1.72, y, ELEV_Z + 1.08);

      const pillar = new THREE.Mesh(
        new THREE.BoxGeometry(0.28, 1.45, 0.22),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.charcoalSlate, metalness: 0.6 })
      );
      pillar.position.y = 0.72;
      callStand.add(pillar);

      const goldPlate = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.42, 0.04),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.champagneGold, metalness: 0.85 })
      );
      goldPlate.position.set(0, 1.12, 0.11);
      callStand.add(goldPlate);

      // Glowing Emerald Physical Push-Button
      const pushButton = new THREE.Mesh(
        new THREE.CylinderGeometry(0.065, 0.065, 0.06, 16),
        new THREE.MeshStandardMaterial({
          color: 0x34d399,
          emissive: 0x10b981,
          emissiveIntensity: 0.95
        })
      );
      pushButton.rotation.x = Math.PI / 2;
      pushButton.position.set(0, 1.12, 0.14);
      callStand.add(pushButton);

      const btnSprite = createTextSprite(
        "🛗 Elevator Button",
        "Aim & Press [SPACEBAR]",
        "rgba(20, 24, 29, 0.94)",
        "#34d399"
      );
      btnSprite.scale.set(2.1, 0.65, 1);
      btnSprite.position.set(0, 1.95, 0.2);
      callStand.add(btnSprite);
      interiorSprites.push(btnSprite);

      const elevCallInteraction = {
        interactive: true,
        label: "🛗 3D Elevator Call Button — Aim & Press [SPACEBAR] to Select Floor",
        payload: {
          action: "openElevatorKeypad",
          floorId: fIdx
        }
      };
      pillar.userData = elevCallInteraction;
      goldPlate.userData = elevCallInteraction;
      pushButton.userData = elevCallInteraction;
      btnSprite.userData = elevCallInteraction;
      interactables.push(pillar, goldPlate, pushButton, btnSprite);

      registerProximityZone({
        id: `zone_elev_${fIdx}`,
        floorId: fIdx,
        outsideOnly: false,
        x: ELEV_X + 0.6,
        y,
        z: ELEV_Z + 1.35,
        radius: 2.6,
        promptText: "Call Glass Elevator (Select Floor)",
        subText: `Rear Spine Lift • Current Floor: ${fIdx === 0 ? "G" : fIdx === 4 ? "R" : fIdx === -1 ? "B1" : fIdx + "F"}`,
        payload: {
          action: "openElevatorKeypad",
          floorId: fIdx
        }
      });

      scene.add(callStand);
    });

    // ==========================================
    // HELPER: CREATE ARCHITECTURAL 3D SWINGING ROOM DOOR (WALNUT & CHAMPAGNE GOLD)
    // ==========================================
    const createInteractiveDoor = ({
      id,
      floorId,
      x,
      y,
      z,
      colorHex,
      title,
      subtitle,
      modalPayload,
      botText
    }) => {
      const frameGroup = new THREE.Group();
      frameGroup.position.set(x, y, z);

      // Brushed Charcoal & Gold Door Frame
      const outerFrame = new THREE.Mesh(
        new THREE.BoxGeometry(2.15, 3.05, 0.24),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.charcoalSlate, roughness: 0.4 })
      );
      outerFrame.position.y = 1.52;
      frameGroup.add(outerFrame);

      // Warm Interior Room Glow behind Door
      const portalGlow = new THREE.Mesh(
        new THREE.PlaneGeometry(1.8, 2.8),
        new THREE.MeshBasicMaterial({ color: colorHex, side: THREE.DoubleSide })
      );
      portalGlow.position.set(0, 1.48, -0.04);
      frameGroup.add(portalGlow);

      // Hinge Pivot on the left edge of the doorway
      const doorPivot = new THREE.Group();
      doorPivot.position.set(-0.9, 0, 0.08);

      const doorLeaf = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 2.8, 0.12),
        new THREE.MeshStandardMaterial({
          color: ARCH_PALETTE.walnut,
          roughness: 0.38,
          metalness: 0.15
        })
      );
      doorLeaf.position.set(0.9, 1.42, 0);
      doorLeaf.castShadow = true;

      // Brushed Champagne Gold Lever Handle
      const handle = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 14, 14),
        new THREE.MeshStandardMaterial({
          color: ARCH_PALETTE.champagneGold,
          metalness: 0.9,
          roughness: 0.2
        })
      );
      handle.position.set(1.55, 1.38, 0.1);
      doorLeaf.add(handle);

      const payloadObj = {
        doorId: id,
        modal: modalPayload,
        botText
      };

      const interactionData = {
        interactive: true,
        label: `${title} (${subtitle}) — Aim & Press [SPACEBAR] to Open`,
        payload: payloadObj
      };
      doorLeaf.userData = interactionData;
      portalGlow.userData = interactionData;
      interactables.push(doorLeaf, portalGlow);

      doorPivot.add(doorLeaf);
      frameGroup.add(doorPivot);

      const signSprite = createTextSprite(title, subtitle, "rgba(20, 24, 29, 0.92)", "#d4af37");
      signSprite.position.set(0, 3.48, 0.25);
      signSprite.userData = interactionData;
      frameGroup.add(signSprite);
      interactables.push(signSprite);
      interiorSprites.push(signSprite);

      registerProximityZone({
        id: `zone_${id}`,
        floorId,
        outsideOnly: false,
        x,
        y,
        z: z + 1.1,
        radius: 2.35,
        promptText: `Open Door: ${title}`,
        subText: subtitle,
        payload: payloadObj
      });

      scene.add(frameGroup);
      doorsMap[id] = { pivot: doorPivot, openTarget: 0 };
    };

    // ==========================================
    // POPULATE FLOOR 0: GRAND FOYER, RECEPTION LOUNGE & LUXURY CAR OUTSIDE
    // ==========================================
    const deskGroup = new THREE.Group();
    deskGroup.position.set(-4.6, 0, -0.8);
    const deskBase = new THREE.Mesh(
      new THREE.BoxGeometry(3.1, 1.05, 1.15),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.walnut, roughness: 0.4 })
    );
    deskBase.position.y = 0.52;
    const deskTop = new THREE.Mesh(
      new THREE.BoxGeometry(3.3, 0.12, 1.3),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.alabaster, roughness: 0.2 })
    );
    deskTop.position.y = 1.08;
    deskGroup.add(deskBase, deskTop);

    const foyerSign = createTextSprite(
      "Reception & Summary",
      "Aim & Press [SPACEBAR]",
      "rgba(20, 24, 29, 0.92)",
      "#d4af37"
    );
    foyerSign.position.set(0, 2.25, 0);
    deskGroup.add(foyerSign);
    interiorSprites.push(foyerSign);

    const receptionInteraction = {
      interactive: true,
      label: "📋 Grand Foyer Reception Desk — Aim & Press [SPACEBAR] to View Ayushi's Resume",
      payload: {
        modal: { type: "resume" },
        botText: "Welcome to the Reception Desk! Here is Ayushi Shrivastava's complete curriculum vitae."
      }
    };
    deskBase.userData = receptionInteraction;
    deskTop.userData = receptionInteraction;
    foyerSign.userData = receptionInteraction;
    interactables.push(deskBase, deskTop, foyerSign);
    scene.add(deskGroup);

    registerProximityZone({
      id: "zone_reception_desk",
      floorId: 0,
      outsideOnly: false,
      x: -4.6,
      y: 0,
      z: -0.2,
      radius: 2.7,
      promptText: "Inspect Reception Desk (Full Resume CV)",
      subText: "Ayushi Shrivastava • Official Curriculum Vitae",
      payload: receptionInteraction.payload
    });

    // Interior Designer Lounge Sofa on Right of Foyer
    const sofaGroup = new THREE.Group();
    sofaGroup.position.set(4.6, 0, 0.2);
    const sofaSeat = new THREE.Mesh(
      new THREE.BoxGeometry(3.0, 0.45, 1.25),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.ivory, roughness: 0.6 })
    );
    sofaSeat.position.y = 0.25;
    const sofaBack = new THREE.Mesh(
      new THREE.BoxGeometry(3.0, 0.95, 0.3),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.cedar, roughness: 0.5 })
    );
    sofaBack.position.set(0, 0.5, -0.5);
    sofaGroup.add(sofaSeat, sofaBack);
    scene.add(sofaGroup);

    // Sleek 3D Luxury Grand Tourer Car parked in the Exterior Driveway (X = 6.2, Z = 6.2)
    const carGroup = new THREE.Group();
    carGroup.position.set(6.2, 0.35, 6.2);
    carGroup.rotation.y = -0.22;

    const carChassis = new THREE.Mesh(
      new THREE.BoxGeometry(2.15, 0.52, 4.2),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.charcoalSlate,
        metalness: 0.85,
        roughness: 0.18
      })
    );
    carChassis.position.y = 0.35;
    carChassis.castShadow = true;
    carGroup.add(carChassis);

    const carCabin = new THREE.Mesh(
      new THREE.BoxGeometry(1.78, 0.46, 2.15),
      new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.1,
        metalness: 0.9
      })
    );
    carCabin.position.set(0, 0.8, -0.15);
    carGroup.add(carCabin);

    const goldTrim = new THREE.Mesh(
      new THREE.BoxGeometry(2.18, 0.08, 4.22),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.champagneGold, metalness: 0.9 })
    );
    goldTrim.position.y = 0.22;
    carGroup.add(goldTrim);

    const headlight = new THREE.Mesh(
      new THREE.BoxGeometry(1.85, 0.1, 0.1),
      new THREE.MeshBasicMaterial({ color: ARCH_PALETTE.warmTungsten })
    );
    headlight.position.set(0, 0.4, 2.1);
    carGroup.add(headlight);

    [
      [-1.08, 0.24, 1.32],
      [1.08, 0.24, 1.32],
      [-1.08, 0.24, -1.32],
      [1.08, 0.24, -1.32]
    ].forEach(([wx, wy, wz]) => {
      const wheel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.36, 0.36, 0.26, 18),
        new THREE.MeshStandardMaterial({ color: 0x14181d, roughness: 0.5 })
      );
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(wx, wy, wz);
      carGroup.add(wheel);
    });

    carChassis.userData = {
      interactive: true,
      label: "🚗 Luxury Grand Tourer EV — Aim & Press [SPACEBAR] to View Ayushi's Resume PDF",
      payload: {
        modal: { type: "resume" },
        botText: "Sleek ride! 🚗 Opening Ayushi Shrivastava's official Resume!"
      }
    };
    interactables.push(carChassis);
    scene.add(carGroup);

    registerProximityZone({
      id: "zone_luxury_car",
      floorId: 0,
      outsideOnly: true,
      x: 6.2,
      y: 0,
      z: 6.2,
      radius: 3.4,
      promptText: "Inspect Grand Tourer EV (Resume CV)",
      subText: "Exterior Carport • Ayushi Shrivastava",
      payload: carChassis.userData.payload
    });

    // ==========================================
    // EXTERIOR 3D ARCHITECTURAL NAMEPLATE & CONTROL STAND (OUTSIDE FRONT COURTYARD)
    // ==========================================
    const standGroup = new THREE.Group();
    standGroup.position.set(-2.4, 0, 9.2);
    standGroup.rotation.y = 0.28;

    const standBase = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.18, 0.9),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.charcoalSlate, metalness: 0.7, roughness: 0.3 })
    );
    standBase.position.y = 0.09;
    standGroup.add(standBase);

    const leftPost = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 1.65, 14),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.charcoalSlate, metalness: 0.8 })
    );
    leftPost.position.set(-0.55, 0.85, 0);
    const rightPost = leftPost.clone();
    rightPost.position.set(0.55, 0.85, 0);
    standGroup.add(leftPost, rightPost);

    const nameplateBoard = new THREE.Mesh(
      new THREE.BoxGeometry(1.75, 1.05, 0.14),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.walnut,
        roughness: 0.35,
        metalness: 0.2
      })
    );
    nameplateBoard.position.set(0, 1.45, 0);
    nameplateBoard.castShadow = true;
    standGroup.add(nameplateBoard);

    const nameplateBorder = new THREE.Mesh(
      new THREE.BoxGeometry(1.83, 1.13, 0.1),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.champagneGold,
        metalness: 0.85,
        roughness: 0.2
      })
    );
    nameplateBorder.position.set(0, 1.45, -0.01);
    standGroup.add(nameplateBorder);

    const nameplateSprite = createTextSprite(
      "🪧 AYUSHI SHRIVASTAVA",
      "Nameplate & Controls [SPACE]",
      "rgba(15, 23, 42, 0.95)",
      "#ff2a85"
    );
    nameplateSprite.scale.set(2.85, 0.88, 1);
    nameplateSprite.position.set(0, 2.45, 0.1);
    standGroup.add(nameplateSprite);

    const nameplateInteraction = {
      interactive: true,
      label: "🪧 Residence Nameplate & Options Stand — Aim & Press [SPACEBAR] for Controls, Theme & Directory",
      payload: {
        action: "openNameplateStand",
        botText: "Opening the Residence Nameplate Stand! Here you can toggle Day/Night sky, switch camera modes, start Auto-Tour, or view the Resume!"
      }
    };
    nameplateBoard.userData = nameplateInteraction;
    nameplateBorder.userData = nameplateInteraction;
    nameplateSprite.userData = nameplateInteraction;
    interactables.push(nameplateBoard, nameplateBorder, nameplateSprite);
    scene.add(standGroup);

    registerProximityZone({
      id: "zone_exterior_nameplate",
      floorId: 0,
      outsideOnly: true,
      x: -2.4,
      y: 0,
      z: 9.2,
      radius: 3.0,
      promptText: "Open Residence Nameplate & Controls",
      subText: "Theme • Camera • Auto-Tour • Directory • Resume",
      payload: nameplateInteraction.payload
    });

    // ==========================================
    // POPULATE FLOOR 1: EDUCATION WING (3 SWINGING ROOM DOORS FLANKING THE ELEVATOR)
    // ==========================================
    const eduEntries = [
      { key: "btech", x: -5.2 },
      { key: "class12", x: -2.6 },
      { key: "class10", x: 4.4 }
    ];
    eduEntries.forEach(({ key, x }) => {
      const item = RESUME_DATA.education[key];
      createInteractiveDoor({
        id: `edu_${key}`,
        floorId: 1,
        x,
        y: FLOOR_HEIGHT * 1,
        z: -2.35,
        colorHex: item.colorHex,
        title: item.title,
        subtitle: item.roomNumber,
        modalPayload: { type: "education", key },
        botText:
          key === "btech"
            ? "Opening Suite 101: B.Tech Computer Science at Galgotias University (CGPA: 8.65/10)!"
            : `Opening ${item.roomNumber}: You can customize and save your ${item.title} details inside this window!`
      });
    });

    // ==========================================
    // POPULATE FLOOR 2: SKILLS LABORATORY (7 ARCHITECTURAL PEDESTALS + SECRET PANEL)
    // ==========================================
    const skillCoords = [
      [-5.8, -1.2],
      [-3.4, 1.2],
      [-1.5, 1.8],
      [1.8, 1.8],
      [3.8, 1.2],
      [5.8, -1.2],
      [-4.6, 2.4]
    ];
    RESUME_DATA.skills.forEach((skill, idx) => {
      const [sx, sz] = skillCoords[idx];
      const yBase = FLOOR_HEIGHT * 2;

      const podGroup = new THREE.Group();
      podGroup.position.set(sx, yBase, sz);

      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.62, 0.75, 0.92, 24),
        new THREE.MeshStandardMaterial({
          color: ARCH_PALETTE.charcoalSlate,
          metalness: 0.45,
          roughness: 0.35
        })
      );
      base.position.y = 0.46;
      podGroup.add(base);

      const holoOrb = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.4, 1),
        new THREE.MeshStandardMaterial({
          color: skill.colorHex,
          emissive: skill.colorHex,
          emissiveIntensity: 0.55,
          wireframe: true
        })
      );
      holoOrb.position.y = 1.42;
      podGroup.add(holoOrb);
      rotatingMeshes.push(holoOrb);

      const podSprite = createTextSprite(
        skill.name.split(" ")[0],
        `${skill.proficiency}% • ${skill.items[0]}`,
        "rgba(20, 24, 29, 0.92)",
        "#d4af37"
      );
      podSprite.scale.set(2.35, 0.76, 1);
      podSprite.position.set(0, 2.3, 0);
      podGroup.add(podSprite);
      interiorSprites.push(podSprite);

      const podInteraction = {
        interactive: true,
        label: `${skill.zone}: ${skill.name} (${skill.items.join(", ")}) — Aim & Press [SPACEBAR]`,
        payload: {
          modal: { type: "skill", data: skill },
          botText: `Inspecting ${skill.name}: ${skill.items.join(", ")} (${skill.proficiency}% proficiency)!`
        }
      };
      base.userData = podInteraction;
      holoOrb.userData = podInteraction;
      podSprite.userData = podInteraction;
      interactables.push(base, holoOrb, podSprite);

      registerProximityZone({
        id: `zone_skill_${skill.id}`,
        floorId: 2,
        outsideOnly: false,
        x: sx,
        y: yBase,
        z: sz,
        radius: 2.1,
        promptText: `Analyze ${skill.name}`,
        subText: `${skill.zone} • ${skill.proficiency}% Proficiency`,
        payload: podInteraction.payload
      });

      scene.add(podGroup);
    });

    // Hidden Easter Egg Trigger on 2F Left Wall
    const secretPanel = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 1.35, 1.35),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.sageLawn,
        emissive: 0x10b981,
        emissiveIntensity: 0.65
      })
    );
    secretPanel.position.set(-HOUSE_WIDTH / 2 + 0.22, FLOOR_HEIGHT * 2 + 1.5, 0.5);
    const secretPayload = {
      action: "secretBunker",
      botText: "Service hatch overridden! Sending elevator down to Basement B1 Secret Dev Bunker!"
    };
    secretPanel.userData = {
      interactive: true,
      label: "⚡ Architectural Service Hatch [Secret Bunker Easter Egg] — Aim & Press [SPACEBAR]",
      payload: secretPayload
    };
    scene.add(secretPanel);
    interactables.push(secretPanel);

    registerProximityZone({
      id: "zone_secret_hatch",
      floorId: 2,
      outsideOnly: false,
      x: -6.8,
      y: FLOOR_HEIGHT * 2,
      z: 0.5,
      radius: 2.4,
      promptText: "Hack Service Hatch [Secret Basement B1]",
      subText: "Hidden Developer Easter Egg",
      payload: secretPayload
    });

    // ==========================================
    // POPULATE FLOOR 3: PROJECT EXHIBITION (3 SHOWROOM SUITES FLANKING THE ELEVATOR)
    // ==========================================
    const projX = [-5.2, -2.6, 4.4];
    RESUME_DATA.projects.forEach((proj, idx) => {
      const px = projX[idx];
      const py = FLOOR_HEIGHT * 3;

      createInteractiveDoor({
        id: `proj_${proj.id}`,
        floorId: 3,
        x: px,
        y: py,
        z: -2.35,
        colorHex: proj.colorHex,
        title: proj.title,
        subtitle: proj.date,
        modalPayload: { type: "project", data: proj },
        botText: `Launching ${proj.title} (${proj.date}) interactive world simulation!`
      });

      const holoTable = new THREE.Mesh(
        new THREE.CylinderGeometry(0.82, 0.62, 0.76, 24),
        new THREE.MeshStandardMaterial({
          color: ARCH_PALETTE.walnut,
          metalness: 0.35,
          roughness: 0.4
        })
      );
      holoTable.position.set(px, py + 0.38, 1.35);

      let miniSculpture;
      if (proj.demoType === "hospital") {
        miniSculpture = new THREE.Mesh(
          new THREE.BoxGeometry(0.62, 0.62, 0.62),
          new THREE.MeshStandardMaterial({
            color: ARCH_PALETTE.sageLawn,
            emissive: 0x10b981,
            emissiveIntensity: 0.55
          })
        );
      } else if (proj.demoType === "pharmacy") {
        miniSculpture = new THREE.Mesh(
          new THREE.CylinderGeometry(0.3, 0.3, 0.78, 16),
          new THREE.MeshStandardMaterial({
            color: ARCH_PALETTE.champagneGold,
            emissive: 0xd97706,
            emissiveIntensity: 0.55
          })
        );
        miniSculpture.rotation.z = Math.PI / 4;
      } else {
        miniSculpture = new THREE.Mesh(
          new THREE.SphereGeometry(0.46, 16, 16),
          new THREE.MeshStandardMaterial({
            color: ARCH_PALETTE.cedar,
            emissive: 0xd97706,
            emissiveIntensity: 0.5,
            wireframe: true
          })
        );
      }
      miniSculpture.position.set(px, py + 1.32, 1.35);
      rotatingMeshes.push(miniSculpture);

      const projInteraction = {
        interactive: true,
        label: `${proj.title} Miniature 3D Diorama — Aim & Press [SPACEBAR] to Launch Live App Preview`,
        payload: {
          doorId: `proj_${proj.id}`,
          modal: { type: "project", data: proj },
          botText: `Entering ${proj.title} miniature world! Test the interactive preview inside!`
        }
      };
      holoTable.userData = projInteraction;
      miniSculpture.userData = projInteraction;
      interactables.push(holoTable, miniSculpture);

      registerProximityZone({
        id: `zone_proj_table_${proj.id}`,
        floorId: 3,
        outsideOnly: false,
        x: px,
        y: py,
        z: 1.35,
        radius: 2.2,
        promptText: `Launch Live Demo: ${proj.title}`,
        subText: `${proj.room} • ${proj.subtitle}`,
        payload: projInteraction.payload
      });

      scene.add(holoTable, miniSculpture);
    });

    // ==========================================
    // POPULATE FLOOR 4: ROOFTOP SKY DECK (TROPHY PEDESTALS & CONTACT TRANSMITTER)
    // ==========================================
    const roofY = FLOOR_HEIGHT * 4;
    const achX = [-5.4, -2.6, 3.2];
    RESUME_DATA.achievements.forEach((ach, idx) => {
      const ax = achX[idx];
      const pedestal = new THREE.Mesh(
        new THREE.BoxGeometry(1.35, 1.1, 1.35),
        new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.charcoalSlate, roughness: 0.4 })
      );
      pedestal.position.set(ax, roofY + 0.55, 0.4);

      const trophyGem = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.52, 0),
        new THREE.MeshStandardMaterial({
          color: ach.colorHex,
          emissive: ach.colorHex,
          emissiveIntensity: 0.65,
          metalness: 0.85,
          roughness: 0.15
        })
      );
      trophyGem.position.set(ax, roofY + 1.72, 0.4);
      rotatingMeshes.push(trophyGem);

      const achSprite = createTextSprite(
        ach.badge,
        ach.title.split(" ").slice(0, 2).join(" "),
        "rgba(20, 24, 29, 0.92)",
        "#d4af37"
      );
      achSprite.scale.set(2.65, 0.84, 1);
      achSprite.position.set(ax, roofY + 2.72, 0.4);
      interiorSprites.push(achSprite);

      const achInteraction = {
        interactive: true,
        label: `🏆 ${ach.title} — Aim & Press [SPACEBAR] to Inspect Achievements`,
        payload: {
          modal: { type: "achievement" },
          botText: `${ach.title}! Inspect all of Ayushi's coding milestones and 8 certifications!`
        }
      };
      pedestal.userData = achInteraction;
      trophyGem.userData = achInteraction;
      achSprite.userData = achInteraction;
      interactables.push(pedestal, trophyGem, achSprite);

      registerProximityZone({
        id: `zone_ach_${ach.id}`,
        floorId: 4,
        outsideOnly: false,
        x: ax,
        y: roofY,
        z: 0.4,
        radius: 2.3,
        promptText: `Inspect Trophy: ${ach.badge}`,
        subText: ach.title,
        payload: achInteraction.payload
      });

      scene.add(pedestal, trophyGem, achSprite);
    });

    // Rooftop Satellite Contact Transmitter Dish
    const dishBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.65, 0.85, 1.15, 20),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.walnut })
    );
    dishBase.position.set(5.6, roofY + 0.58, 1.4);
    const dishCone = new THREE.Mesh(
      new THREE.ConeGeometry(1.1, 0.65, 24, 1, true),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.champagneGold,
        metalness: 0.8,
        roughness: 0.25,
        side: THREE.DoubleSide
      })
    );
    dishCone.position.set(5.6, roofY + 1.48, 1.4);
    dishCone.rotation.x = Math.PI * 0.75;
    const dishSprite = createTextSprite(
      "Contact Dish",
      "Aim & Press [SPACEBAR]",
      "rgba(20, 24, 29, 0.92)",
      "#d4af37"
    );
    dishSprite.scale.set(2.65, 0.84, 1);
    dishSprite.position.set(5.6, roofY + 2.65, 1.4);
    interiorSprites.push(dishSprite);

    const contactInteraction = {
      interactive: true,
      label: "📡 Rooftop Contact Transmitter — Aim & Press [SPACEBAR] to Connect with Ayushi",
      payload: {
        modal: { type: "contact" },
        botText: "Opening Rooftop Contact Station! Copy Ayushi's email or send her a direct message!"
      }
    };
    dishBase.userData = contactInteraction;
    dishCone.userData = contactInteraction;
    dishSprite.userData = contactInteraction;
    interactables.push(dishBase, dishCone, dishSprite);
    scene.add(dishBase, dishCone, dishSprite);

    registerProximityZone({
      id: "zone_rooftop_contact",
      floorId: 4,
      outsideOnly: false,
      x: 5.6,
      y: roofY,
      z: 1.4,
      radius: 2.5,
      promptText: "Activate Contact Uplink Dish",
      subText: "Email • LinkedIn • GitHub • Direct Message",
      payload: contactInteraction.payload
    });

    // Rooftop Center Finale Branding Pedestal & Star Beacon
    // Rooftop Center Ascent Launchpad ( Launches straight above the house to the Static Page )
    const finalePedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.95, 1.15, 0.35, 28),
      new THREE.MeshStandardMaterial({ color: ARCH_PALETTE.walnut, metalness: 0.4, roughness: 0.35 })
    );
    finalePedestal.position.set(0.3, roofY + 0.18, 1.85);

    const finaleCrown = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.55, 0),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.champagneGold,
        emissive: 0xff2a85,
        emissiveIntensity: 0.8,
        metalness: 0.9,
        roughness: 0.15
      })
    );
    finaleCrown.position.set(0.3, roofY + 1.35, 1.85);
    rotatingMeshes.push(finaleCrown);

    const finaleSprite = createTextSprite(
      "🚀 Ascend to Static Page",
      "Launch Above House",
      "rgba(15, 23, 42, 0.95)",
      "#ff2a85"
    );
    finaleSprite.scale.set(2.8, 0.86, 1);
    finaleSprite.position.set(0.3, roofY + 2.45, 1.85);
    interiorSprites.push(finaleSprite);

    const finaleInteraction = {
      interactive: true,
      label: "🚀 Sky Ascent Pad — Launch Above the House to Ayushi's Static Portfolio Page",
      payload: {
        action: "ascendToStaticPage"
      }
    };
    finalePedestal.userData = finaleInteraction;
    finaleCrown.userData = finaleInteraction;
    finaleSprite.userData = finaleInteraction;
    interactables.push(finalePedestal, finaleCrown, finaleSprite);
    scene.add(finalePedestal, finaleCrown, finaleSprite);

    registerProximityZone({
      id: "zone_rooftop_finale",
      floorId: 4,
      outsideOnly: false,
      x: 0.3,
      y: roofY,
      z: 1.85,
      radius: 2.5,
      promptText: "Ascend Above House to Static Page 🚀",
      subText: "Cinematic Sky Ascent • Full Static Portfolio Page",
      payload: finaleInteraction.payload
    });

    // ==========================================
    // POPULATE BASEMENT B1: SECRET DEVELOPER BUNKER IN 3D
    // ==========================================
    const bunkerY = -FLOOR_HEIGHT;
    const bug3D = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.62, 0),
      new THREE.MeshStandardMaterial({
        color: 0xe11d48,
        emissive: 0xbe123c,
        emissiveIntensity: 0.75
      })
    );
    bug3D.position.set(-3.2, bunkerY + 1.2, 0.8);
    rotatingMeshes.push(bug3D);
    const bugSprite = createTextSprite(
      "Squash 3D Bug! 🐛",
      "Aim & Press [SPACEBAR]",
      "rgba(20, 24, 29, 0.92)",
      "#f43f5e"
    );
    bugSprite.position.set(-3.2, bunkerY + 2.35, 0.8);
    interiorSprites.push(bugSprite);

    const bugInteraction = {
      interactive: true,
      label: "🐛 Production Bug — Aim & Press [SPACEBAR] to Squash in 3D!",
      payload: { action: "squashBug3D" }
    };
    bug3D.userData = bugInteraction;
    bugSprite.userData = bugInteraction;
    interactables.push(bug3D, bugSprite);
    scene.add(bug3D, bugSprite);

    registerProximityZone({
      id: "zone_bunker_bug",
      floorId: -1,
      outsideOnly: false,
      x: -3.2,
      y: bunkerY,
      z: 0.8,
      radius: 2.6,
      promptText: "Squash Production Bug 🐛 (+50 XP)",
      subText: "Secret Basement B1 • Late Night Debugging",
      payload: bugInteraction.payload
    });

    // ==========================================
    // 7. CREATE 3D ANIMATED ROBOT COMPANION ("AYUBOT") + AIM TARGET RING
    // ==========================================
    const robotGroup = new THREE.Group();
    const botRing = new THREE.Mesh(
      new THREE.RingGeometry(0.38, 0.58, 28),
      new THREE.MeshBasicMaterial({ color: ARCH_PALETTE.champagneGold, side: THREE.DoubleSide })
    );
    botRing.rotation.x = Math.PI / 2;
    botRing.position.y = 0.08;
    robotGroup.add(botRing);

    const botBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.36, 0.26, 0.74, 20),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.alabaster,
        metalness: 0.4,
        roughness: 0.25
      })
    );
    botBody.position.y = 0.65;
    robotGroup.add(botBody);

    const botHead = new THREE.Mesh(
      new THREE.BoxGeometry(0.66, 0.5, 0.52),
      new THREE.MeshStandardMaterial({
        color: ARCH_PALETTE.charcoalSlate,
        metalness: 0.7,
        roughness: 0.2
      })
    );
    botHead.position.y = 1.3;
    robotGroup.add(botHead);

    const eyeGeo = new THREE.SphereGeometry(0.075, 12, 12);
    const eyeMat = new THREE.MeshBasicMaterial({ color: ARCH_PALETTE.warmTungsten });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.14, 1.32, 0.27);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.14, 1.32, 0.27);
    robotGroup.add(leftEye, rightEye);

    // Sprint Thruster Glow behind AyuBot
    const thrusterLight = new THREE.PointLight(0x38bdf8, 0, 4);
    thrusterLight.position.set(0, 0.6, -0.5);
    robotGroup.add(thrusterLight);

    const antennaTip = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 12, 12),
      new THREE.MeshBasicMaterial({ color: ARCH_PALETTE.champagneGold })
    );
    antennaTip.position.set(0, 1.78, 0);
    robotGroup.add(antennaTip);

    const botTag = createTextSprite(
      "AyuBot [YOU]",
      "WASD + Aim + [SPACE]",
      "rgba(20, 24, 29, 0.92)",
      "#d4af37"
    );
    botTag.scale.set(1.9, 0.6, 1);
    botTag.position.set(0, 2.28, 0);
    robotGroup.add(botTag);

    // Start AyuBot outside on the front walkway facing the main door!
    robotGroup.position.set(0, 0, 9.5);
    robotGroup.rotation.y = Math.PI;
    scene.add(robotGroup);

    // 3D Glowing Ground Target Ring (highlights whatever 3D object your center crosshair is aiming at!)
    const proximityRing = new THREE.Mesh(
      new THREE.RingGeometry(0.95, 1.25, 32),
      new THREE.MeshBasicMaterial({
        color: 0xff2a85,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9
      })
    );
    proximityRing.rotation.x = Math.PI / 2;
    proximityRing.visible = false;
    scene.add(proximityRing);

    sceneObjectsRef.current.robotGroup = robotGroup;
    sceneObjectsRef.current.proximityRing = proximityRing;
    sceneObjectsRef.current.thrusterLight = thrusterLight;
    sceneObjectsRef.current.zones = proximityZones;
    sceneObjectsRef.current.doors = doorsMap;
    sceneObjectsRef.current.stars = starsMap;
    sceneObjectsRef.current.rotatingMeshes = rotatingMeshes;
    sceneObjectsRef.current.interiorSprites = interiorSprites;

    // ==========================================
    // 8. MOUSE ORBIT, WHEEL ZOOM, RAYCAST CLICK & AIM + SPACEBAR CONTROLS
    // ==========================================
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const centerScreenNDC = new THREE.Vector2(0, 0);
    let isDragging = false;
    let pointerDownPos = { x: 0, y: 0 };
    let prevPointerPos = { x: 0, y: 0 };

    const onPointerDown = (e) => {
      isDragging = true;
      pointerDownPos = { x: e.clientX, y: e.clientY };
      prevPointerPos = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const dx = e.clientX - prevPointerPos.x;
        const dy = e.clientY - prevPointerPos.y;
        prevPointerPos = { x: e.clientX, y: e.clientY };

        const orbit = sceneObjectsRef.current.cameraOrbit;
        orbit.theta -= dx * 0.0065;
        orbit.phi = Math.max(0.48, Math.min(1.48, orbit.phi - dy * 0.0055));
        return;
      }

      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(interactables, false);
      if (hits.length > 0 && hits[0].object.userData?.interactive && hits[0].object.visible) {
        renderer.domElement.style.cursor = "pointer";
        setHoveredObjectLabel(hits[0].object.userData.label);
      } else {
        renderer.domElement.style.cursor = "grab";
        setHoveredObjectLabel(null);
      }
    };

    const onPointerUp = (e) => {
      isDragging = false;
      const moveDist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (moveDist > 6) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const hits = raycaster.intersectObjects(interactables, false).filter((h) => h.object.visible);
      if (hits.length > 0 && hits[0].object.userData?.interactive) {
        const hitObj = hits[0].object;
        const worldPos = new THREE.Vector3();
        hitObj.getWorldPosition(worldPos);
        triggerInteractionRef.current(hitObj.userData.payload, worldPos);
      }
    };

    const onWheel = (e) => {
      const orbit = sceneObjectsRef.current.cameraOrbit;
      orbit.radius = Math.max(8, Math.min(36, orbit.radius + e.deltaY * 0.012));
    };

    const onKeyDown = (e) => {
      // Ignore movement shortcuts when typing in an input or textarea
      if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;

      const key = e.key.toLowerCase();

      // [ESC] closes any open modal or keypad
      if (key === "escape") {
        setActiveModal(null);
        setElevatorKeypadOpen(false);
        setShowHowToPlayModal(false);
        return;
      }

      // ==========================================
      // [SPACEBAR]: AIM & PRESS SPACE TO OPEN, AND PRESS SPACE AGAIN TO CLOSE!
      // ==========================================
      if (e.code === "Space" || key === " ") {
        e.preventDefault();

        // 1. If any Section Modal, Elevator Keypad, or Guide Modal is currently OPEN -> Spacebar closes it!
        if (activeModalRef.current || elevatorKeypadRef.current || showHowToPlayRef.current) {
          setActiveModal(null);
          setElevatorKeypadOpen(false);
          setShowHowToPlayModal(false);
          return;
        }

        // 2. Otherwise, if aiming at an interactive door/object (or aligned with one) -> Spacebar opens it!
        if (aimedInteractableRef.current) {
          triggerInteractionRef.current(
            aimedInteractableRef.current.payload,
            aimedInteractableRef.current.pos
          );
        }
        return;
      }

      // Lift / Floor Number Shortcuts (0-4 or B) work anytime!
      if (["0", "1", "2", "3", "4"].includes(key) && !activeModalRef.current) {
        handleFloorChange(parseInt(key, 10));
        return;
      }
      if (key === "b" && !activeModalRef.current) {
        handleFloorChange(-1);
        return;
      }

      // [E]: Quick Shortcut to Toggle the Elevator Floor Selector
      if (key === "e" && !activeModalRef.current) {
        e.preventDefault();
        setElevatorKeypadOpen((prev) => !prev);
        return;
      }

      // [V]: Toggle Camera Perspective (Third-Person Follow Cam <-> Free Orbit <-> Full Cutaway)
      if (key === "v" && !activeModalRef.current) {
        setCameraMode((prev) => (prev === "tps" ? "floor" : prev === "floor" ? "overview" : "tps"));
        return;
      }

      // [R]: Quick Open Resume PDF Modal
      if (key === "r" && !activeModalRef.current) {
        setActiveModal({ type: "resume" });
        return;
      }

      sceneObjectsRef.current.keysPressed[key] = true;
      if (e.shiftKey) setIsSprinting(true);
    };

    const onKeyUp = (e) => {
      const key = e.key.toLowerCase();
      sceneObjectsRef.current.keysPressed[key] = false;
      if (!e.shiftKey) setIsSprinting(false);
    };

    const domElem = renderer.domElement;
    domElem.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    domElem.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // ==========================================
    // 9. MAIN 60FPS THIRD-PERSON GAME LOOP & CENTER-SCREEN AIM DETECTION ENGINE
    // ==========================================
    let reqId;
    let frameCounter = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      frameCounter++;

      // A. Toggle Exterior Facade Wall & Interior Labels smoothly based on isInsideHouse
      if (facadeGroup) {
        const targetFacadeY = isInsideRef.current ? -28 : 0;
        facadeGroup.position.y += (targetFacadeY - facadeGroup.position.y) * 0.09;
        facadeGroup.visible = facadeGroup.position.y > -24;
      }
      interiorSprites.forEach((sp) => {
        sp.visible = isInsideRef.current;
      });

      // B. THIRD-PERSON WASD / ARROW KEYS + SPRINT PHYSICS
      const keys = sceneObjectsRef.current.keysPressed;
      const sprinting = Boolean(keys["shift"]);
      const baseSpeed = sprinting ? 0.165 : 0.095;
      const rPos = sceneObjectsRef.current.robotPos;

      const activeY = !isInsideRef.current
        ? 0
        : currentFloorRef.current === -1
        ? -FLOOR_HEIGHT
        : currentFloorRef.current * FLOOR_HEIGHT;

      let moveX = 0;
      let moveZ = 0;
      if (!activeModalRef.current && !elevatorKeypadRef.current) {
        if (keys["w"] || keys["arrowup"]) moveZ -= 1;
        if (keys["s"] || keys["arrowdown"]) moveZ += 1;
        if (keys["a"] || keys["arrowleft"]) moveX -= 1;
        if (keys["d"] || keys["arrowright"]) moveX += 1;
      }

      if (moveX !== 0 || moveZ !== 0) {
        const len = Math.hypot(moveX, moveZ);
        moveX = (moveX / len) * baseSpeed;
        moveZ = (moveZ / len) * baseSpeed;

        if (isInsideRef.current) {
          rPos.x = Math.max(-7.1, Math.min(7.1, rPos.x + moveX));
          rPos.z = Math.max(-2.35, Math.min(3.45, rPos.z + moveZ));
        } else {
          // Exterior courtyard & road bounds
          rPos.x = Math.max(-14.0, Math.min(14.0, rPos.x + moveX));
          rPos.z = Math.max(4.4, Math.min(16.5, rPos.z + moveZ));
        }
        sceneObjectsRef.current.robotRotY = Math.atan2(moveX, moveZ);
      }

      rPos.y = activeY;

      // C. Update AyuBot 3D Mesh Position, Tilt & Sprint Thrusters
      if (robotGroup) {
        robotGroup.position.lerp(rPos, 0.28);
        const targetRot = sceneObjectsRef.current.robotRotY;
        const diff = Math.atan2(
          Math.sin(targetRot - robotGroup.rotation.y),
          Math.cos(targetRot - robotGroup.rotation.y)
        );
        robotGroup.rotation.y += diff * 0.22;

        const isMoving = moveX !== 0 || moveZ !== 0;
        const targetTilt = isMoving ? (sprinting ? 0.24 : 0.1) : 0;
        botBody.rotation.x += (targetTilt - botBody.rotation.x) * 0.2;
        botBody.position.y = 0.65 + Math.sin(elapsed * (sprinting ? 12 : 5)) * 0.045;
        botHead.position.y = 1.3 + Math.sin(elapsed * (sprinting ? 12 : 5)) * 0.045;

        if (thrusterLight) {
          thrusterLight.intensity = isMoving && sprinting ? 2.2 : 0;
        }
      }

      // ==========================================
      // D. CENTER-SCREEN AIM RETICLE DETECTION (NO AUTO-POPUPS!)
      // ==========================================
      let currentAimTarget = null;

      // 1. Primary Check: Raycast directly from the Center Crosshair (0, 0) into the 3D scene
      raycaster.setFromCamera(centerScreenNDC, camera);
      const centerHits = raycaster
        .intersectObjects(interactables, false)
        .filter((h) => h.object.visible && h.object.userData?.interactive && h.distance < 32);

      if (centerHits.length > 0) {
        const hitObj = centerHits[0].object;
        const worldPos = new THREE.Vector3();
        hitObj.getWorldPosition(worldPos);
        currentAimTarget = {
          id: hitObj.uuid,
          promptText: hitObj.userData.label.split("—")[0].trim(),
          subText: "Aimed with Center Reticle • Press [SPACEBAR] to Open",
          payload: hitObj.userData.payload,
          pos: worldPos
        };
      } else {
        // 2. Assisted Aim Check: If AyuBot is facing or standing at a station/door on the active floor
        let bestZone = null;
        let bestDist = Infinity;
        for (let i = 0; i < proximityZones.length; i++) {
          const zObj = proximityZones[i];
          if (zObj.outsideOnly && isInsideRef.current) continue;
          if (!zObj.outsideOnly && !isInsideRef.current) continue;
          if (!zObj.outsideOnly && zObj.floorId !== currentFloorRef.current) continue;

          const d = Math.hypot(rPos.x - zObj.pos.x, rPos.z - zObj.pos.z);
          if (d <= zObj.radius && d < bestDist) {
            bestDist = d;
            bestZone = zObj;
          }
        }
        if (bestZone) {
          currentAimTarget = {
            id: bestZone.id,
            promptText: bestZone.promptText,
            subText: bestZone.subText,
            payload: bestZone.payload,
            pos: bestZone.pos
          };
        }
      }

      if (currentAimTarget) {
        proximityRing.visible = true;
        proximityRing.position.set(currentAimTarget.pos.x, activeY + 0.05, currentAimTarget.pos.z);
        const pulse = 1 + Math.sin(elapsed * 6) * 0.12;
        proximityRing.scale.set(pulse, pulse, 1);

        if (aimedInteractableRef.current?.id !== currentAimTarget.id) {
          aimedInteractableRef.current = currentAimTarget;
          setAimedInteractable(currentAimTarget);
        }
      } else {
        proximityRing.visible = false;
        if (aimedInteractableRef.current !== null) {
          aimedInteractableRef.current = null;
          setAimedInteractable(null);
        }
      }

      // Pulse the spinning floor star when near it
      const floorStar = starsMap[currentFloorRef.current];
      if (floorStar && isInsideRef.current) {
        const starDist = Math.hypot(rPos.x - floorStar.position.x, rPos.z - floorStar.position.z);
        if (starDist < 1.8) {
          floorStar.scale.setScalar(1.35 + Math.sin(elapsed * 10) * 0.2);
        } else {
          floorStar.scale.setScalar(1.0);
        }
      }

      // E. Smoothly move 3D Glass Elevator Cab & Sliding Glass Doors
      if (elevatorCar) {
        elevatorCar.position.y +=
          (sceneObjectsRef.current.elevatorTargetY - elevatorCar.position.y) * 0.08;
      }
      const openOffset = sceneObjectsRef.current.elevatorDoorOpenTarget || 0;
      if (leftElevDoor && rightElevDoor) {
        leftElevDoor.position.x += (-0.6 - openOffset - leftElevDoor.position.x) * 0.12;
        rightElevDoor.position.x += (0.6 + openOffset - rightElevDoor.position.x) * 0.12;
      }

      // F. Swing 3D Doors smoothly when opened/closed
      Object.values(doorsMap).forEach((d) => {
        d.pivot.rotation.y += (d.openTarget - d.pivot.rotation.y) * 0.12;
      });

      // G. Rotate Holograms, Trophies & Collectible Stars
      rotatingMeshes.forEach((m, idx) => {
        m.rotation.y = elapsed * 1.35 + idx;
      });

      // H. CAMERA ENGINE: SKY ASCENT ABOVE HOUSE vs. MODAL DOLLY ZOOM vs. TPS vs. ORBIT CAM
      const orbit = sceneObjectsRef.current.cameraOrbit;
      const modalFocus = sceneObjectsRef.current.modalFocusPos;

      if (isAscendingRef.current) {
        // Cinematic Sky Ascent: Rise high above the entire house looking down as it transitions to the Static Page!
        const skyCamPos = new THREE.Vector3(
          Math.sin(elapsed * 0.5) * 6,
          46,
          28
        );
        const skyLookTarget = new THREE.Vector3(0, 12, 0);
        camera.position.lerp(skyCamPos, 0.045);
        orbit.target.lerp(skyLookTarget, 0.06);
        camera.lookAt(orbit.target);
      } else if (activeModalRef.current && modalFocus) {
        // Dramatic Cinematic Dolly-In toward the inspected 3D door/station!
        const dollyTarget = new THREE.Vector3(modalFocus.x, activeY + 1.6, modalFocus.z);
        const dollyCamPos = new THREE.Vector3(modalFocus.x * 0.85, activeY + 2.4, modalFocus.z + 5.2);
        camera.position.lerp(dollyCamPos, 0.08);
        orbit.target.lerp(dollyTarget, 0.1);
        camera.lookAt(orbit.target);
      } else if (cameraModeRef.current === "tps") {
        // PUBG-Style Third-Person Follow Camera tracking AyuBot smoothly (with mouse aim offset!)
        const followDist = isInsideRef.current ? 7.8 : 11.5;
        const followHeight = isInsideRef.current ? 3.45 : 4.8;
        const desiredCamX = rPos.x * 0.88 + Math.sin(orbit.theta) * 3.2;
        const desiredCamY = activeY + followHeight + (orbit.phi - 1.15) * 3.0;
        const desiredCamZ = rPos.z + followDist;

        const lookTarget = new THREE.Vector3(
          rPos.x * 0.92 - Math.sin(orbit.theta) * 2.5,
          activeY + 1.45 - (orbit.phi - 1.15) * 2.5,
          rPos.z - 2.2
        );
        camera.position.lerp(new THREE.Vector3(desiredCamX, desiredCamY, desiredCamZ), 0.1);
        orbit.target.lerp(lookTarget, 0.14);
        camera.lookAt(orbit.target);
      } else {
        // Architectural Orbit or Full Cutaway Overview
        let desiredTargetY = 5.2;
        let desiredTargetZ = 4.5;
        let desiredRadius = orbit.radius;

        if (!isInsideRef.current) {
          desiredTargetY = 5.0;
          desiredTargetZ = 4.2;
        } else if (cameraModeRef.current === "overview") {
          desiredTargetY = 8.2;
          desiredTargetZ = 0;
          desiredRadius = 26.5;
        } else {
          desiredTargetY = activeY + 1.75;
          desiredTargetZ = 0;
        }

        orbit.target.x += (0 - orbit.target.x) * 0.08;
        orbit.target.y += (desiredTargetY - orbit.target.y) * 0.08;
        orbit.target.z += (desiredTargetZ - orbit.target.z) * 0.08;

        const camX =
          orbit.target.x + desiredRadius * Math.sin(orbit.phi) * Math.sin(orbit.theta);
        const camY = orbit.target.y + desiredRadius * Math.cos(orbit.phi);
        const camZ =
          orbit.target.z + desiredRadius * Math.sin(orbit.phi) * Math.cos(orbit.theta);

        camera.position.lerp(new THREE.Vector3(camX, camY, camZ), 0.1);
        camera.lookAt(orbit.target);
      }

      // Update React HUD Telemetry at ~15fps
      if (frameCounter % 4 === 0) {
        const camDir = new THREE.Vector3();
        camera.getWorldDirection(camDir);
        const headingDeg = ((Math.atan2(camDir.x, -camDir.z) * 180) / Math.PI + 360) % 360;
        setPlayerTelemetry({
          x: rPos.x,
          z: rPos.z,
          rotY: sceneObjectsRef.current.robotRotY,
          heading: Math.round(headingDeg)
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      domElem.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      domElem.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  // Dynamically update Bright Daylight vs. Soft Starry Twilight Lighting when toggled
  useEffect(() => {
    const { scene, ambientLight, sunLight, interiorTungstenLight, courtyardWarmLight } =
      sceneObjectsRef.current.lights;
    if (!scene) return;
    if (isNightMode) {
      scene.background = new THREE.Color(ARCH_PALETTE.nightSky);
      scene.fog = new THREE.FogExp2(ARCH_PALETTE.nightSky, 0.006);
      ambientLight.intensity = 1.05;
      sunLight.intensity = 1.35;
      sunLight.color.setHex(0xfbcfe8);
      interiorTungstenLight.intensity = 1.85;
      interiorTungstenLight.color.setHex(0xfffbeb);
      courtyardWarmLight.intensity = 1.3;
      courtyardWarmLight.color.setHex(0xff2a85);
    } else {
      scene.background = new THREE.Color(ARCH_PALETTE.daySky);
      scene.fog = new THREE.FogExp2(ARCH_PALETTE.daySky, 0.0045);
      ambientLight.intensity = 1.4;
      sunLight.intensity = 1.8;
      sunLight.color.setHex(0xffffff);
      interiorTungstenLight.intensity = 1.4;
      interiorTungstenLight.color.setHex(0xfff7ed);
      courtyardWarmLight.intensity = 0.85;
      courtyardWarmLight.color.setHex(0x06b6d4);
    }
  }, [isNightMode]);

  const currentFloorMeta =
    currentFloor === -1
      ? {
          id: -1,
          code: "B1",
          name: "Secret Dev Bunker",
          subtitle: "Hidden Easter Egg Room"
        }
      : FLOORS.find((f) => f.id === currentFloor) || FLOORS[4];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-sky-100 text-slate-900 select-none font-sans">
      {/* ==========================================
          SMOOTH SPRING ANIMATIONS FOR MODALS
      ========================================== */}
      <style>{`
        @keyframes holoModalIn {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0px);
          }
        }
        @keyframes pulsePrompt {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-50%) scale(1.04); }
        }
        .holo-modal-enter {
          animation: holoModalIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .pubg-prompt-bob {
          animation: pulsePrompt 1.6s ease-in-out infinite;
        }
      `}</style>

      {/* ==========================================
          1. FULLSCREEN INTERACTIVE 3D WEBGL CANVAS (90% UNOBSTRUCTED SCREEN!)
      ========================================== */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full z-0" />

      {/* ==========================================
          1B. CENTER-SCREEN AIM CROSSHAIR RETICLE
      ========================================== */}
      {!activeModal && !elevatorKeypadOpen && !showHowToPlayModal && (
        <div className="fixed inset-0 pointer-events-none z-20 flex items-center justify-center">
          <div
            className={`relative flex items-center justify-center transition-all duration-150 ${
              aimedInteractable ? "scale-125" : "scale-100 opacity-75"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                aimedInteractable
                  ? "border-pink-500 bg-pink-500/20 shadow-[0_0_16px_rgba(255,42,133,0.8)]"
                  : "border-slate-900/60 bg-white/30"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  aimedInteractable ? "bg-pink-500" : "bg-slate-900/80"
                }`}
              />
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          3. AIM + SPACEBAR ACTION PROMPT (ONLY APPEARS WHEN AIMING AT A DOOR/OBJECT)
      ========================================== */}
      {aimedInteractable && !activeModal && !elevatorKeypadOpen && !showHowToPlayModal && (
        <div className="fixed right-20 top-1/2 z-30 pubg-prompt-bob">
          <button
            onClick={() =>
              triggerInteraction(aimedInteractable.payload, aimedInteractable.pos)
            }
            className="group flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 hover:bg-white border-2 border-pink-500 shadow-lg text-left transition-all"
          >
            <div className="px-2.5 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-cyan-500 text-white font-mono font-black text-[11px] flex items-center justify-center shadow">
              SPACE
            </div>
            <div className="pr-1">
              <div className="text-xs font-extrabold text-slate-900">
                {aimedInteractable.promptText}
              </div>
              <div className="text-[10px] text-pink-600 font-bold">
                Press [SPACE] to Open
              </div>
            </div>
          </button>
        </div>
      )}

      {/* ==========================================
          4. MINIMAL CORNER LOCATION BADGE & COMPACT NAMEPLATE SMALL BUTTONS POPOVER
      ========================================== */}
      <div className="fixed top-4 left-4 z-30 flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHowToPlayModal((prev) => !prev)}
            className="px-3.5 py-2 rounded-2xl backdrop-blur-xl bg-white/90 hover:bg-white border border-slate-200 shadow-md flex items-center gap-2.5 transition-all"
            title="Toggle Nameplate Quick Buttons"
          >
            <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-pink-500 to-cyan-500 text-white flex items-center justify-center shadow-sm">
              <Home className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
            <div className="text-left">
              <div className="text-xs font-black text-slate-900 leading-none">
                {RESUME_DATA.name}
              </div>
              <div className="text-[10px] font-bold text-pink-600 mt-0.5">
                {isInsideHouse
                  ? `${currentFloorMeta.code} • ${currentFloorMeta.name}`
                  : "🪧 Nameplate Controls [SPACE]"}
              </div>
            </div>
          </button>

          {isInsideHouse && (
            <button
              onClick={handleExitToStreet}
              className="px-3 py-2 rounded-2xl bg-white/90 hover:bg-white border border-slate-200 text-slate-700 font-bold text-xs shadow-md flex items-center gap-1"
              title="Exit Outside"
            >
              <LogOut className="w-3.5 h-3.5 text-pink-500" />
              <span>Outside</span>
            </button>
          )}

          {isInsideHouse && currentFloor === 4 && (
            <button
              onClick={handleAscendToStaticPage}
              className="px-3 py-2 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-extrabold text-xs shadow-md hover:scale-105 transition-transform flex items-center gap-1.5"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Ascend to Static Page 🚀</span>
            </button>
          )}
        </div>

        {/* COMPACT NAMEPLATE SMALL BUTTONS BAR (Replaces the huge modal!) */}
        {showHowToPlayModal && (
          <div className="holo-modal-enter bg-white/95 backdrop-blur-xl border border-pink-300 rounded-2xl p-2 shadow-xl flex flex-wrap items-center gap-1.5 max-w-md">
            {!isInsideHouse && (
              <button
                onClick={() => {
                  setShowHowToPlayModal(false);
                  handleEnterHouse();
                }}
                className="px-2.5 py-1.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-bold text-[11px] flex items-center gap-1"
              >
                <DoorOpen className="w-3.5 h-3.5" />
                <span>Enter</span>
              </button>
            )}

            <button
              onClick={() => {
                setShowHowToPlayModal(false);
                setAutoPilotActive(!autoPilotActive);
              }}
              className={`px-2.5 py-1.5 rounded-xl font-bold text-[11px] flex items-center gap-1 ${
                autoPilotActive
                  ? "bg-pink-500 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-800"
              }`}
            >
              <Play className="w-3 h-3 text-pink-500" />
              <span>{autoPilotActive ? "Stop Tour" : "Auto-Tour"}</span>
            </button>

            <button
              onClick={() =>
                setCameraMode((prev) =>
                  prev === "tps" ? "floor" : prev === "floor" ? "overview" : "tps"
                )
              }
              className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] flex items-center gap-1"
            >
              <Eye className="w-3 h-3 text-cyan-600" />
              <span>{cameraMode === "tps" ? "Follow" : cameraMode === "floor" ? "Orbit" : "Cutaway"}</span>
            </button>

            <button
              onClick={() => setIsNightMode(!isNightMode)}
              className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] flex items-center gap-1"
            >
              {isNightMode ? (
                <Sun className="w-3 h-3 text-amber-500" />
              ) : (
                <Moon className="w-3 h-3 text-indigo-600" />
              )}
              <span>{isNightMode ? "Day" : "Night"}</span>
            </button>

            <button
              onClick={() => {
                setShowHowToPlayModal(false);
                setActiveModal({ type: "resume" });
              }}
              className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] flex items-center gap-1"
            >
              <BookOpen className="w-3 h-3 text-cyan-400" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setShowHowToPlayModal(false)}
              className="p-1.5 rounded-xl bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600"
              title="Close [SPACE]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* ==========================================
          7. IN-CAB ELEVATOR BUTTON KEYPAD MODAL (CLEAN BRIGHT UI)
      ========================================== */}
      {elevatorKeypadOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setElevatorKeypadOpen(false)}
        >
          <div
            className="holo-modal-enter bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-6 shadow-2xl text-slate-900 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setElevatorKeypadOpen(false)}
              className="absolute top-4 right-4 px-2.5 py-1.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-bold flex items-center gap-1"
            >
              <span>[SPACE]</span>
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-600 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>3D Glass Elevator</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-1">Select Destination Floor</h3>
            <p className="text-xs text-slate-500 mb-4">
              Click a floor or press <strong>0 - 4</strong> (Press <strong>[SPACEBAR]</strong> to close):
            </p>

            <div className="space-y-2">
              {FLOORS.map((f) => {
                const isActive = currentFloor === f.id && isInsideHouse;
                const hasStar = collectedStars.includes(f.id);
                return (
                  <button
                    key={f.id}
                    onClick={() => handleFloorChange(f.id)}
                    className={`w-full p-3 rounded-2xl border flex items-center justify-between transition-all ${
                      isActive
                        ? "bg-pink-50 border-pink-500 shadow-sm"
                        : "bg-slate-50 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3 text-left">
                      <span
                        className={`w-9 h-9 rounded-xl font-mono font-black text-sm flex items-center justify-center ${
                          isActive
                            ? "bg-pink-500 text-white"
                            : "bg-white text-slate-800 border border-slate-200"
                        }`}
                      >
                        {f.code}
                      </span>
                      <div>
                        <div className="text-xs font-extrabold text-slate-900">{f.name}</div>
                        <div className="text-[10px] text-slate-500">{f.subtitle}</div>
                      </div>
                    </div>
                    <Star
                      className={`w-4 h-4 ${
                        hasStar ? "text-pink-500 fill-pink-500" : "text-slate-300"
                      }`}
                    />
                  </button>
                );
              })}

              <button
                onClick={() => handleFloorChange(-1)}
                className={`w-full p-3 rounded-2xl border flex items-center justify-between transition-all ${
                  currentFloor === -1
                    ? "bg-pink-50 border-pink-500"
                    : "bg-slate-50 hover:bg-slate-100 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-mono font-black text-xs flex items-center justify-center">
                    B1
                  </span>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">
                      Secret Dev Bunker
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Easter Egg • 3D Bug Squasher
                    </div>
                  </div>
                </div>
                <Bug className="w-4 h-4 text-pink-500" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          8. CLEAN RIGHT-SIDE ELEVATOR PILL
      ========================================== */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-1.5 bg-white/90 backdrop-blur-xl border border-slate-200 p-2 rounded-2xl shadow-lg">
        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-bold">
          FLOOR
        </span>
        {FLOORS.map((f) => {
          const active = isInsideHouse && currentFloor === f.id;
          return (
            <button
              key={f.id}
              onClick={() => handleFloorChange(f.id)}
              title={`${f.code}: ${f.name} (Shortcut: Key ${f.id})`}
              className={`w-10 h-10 rounded-xl font-mono font-black text-xs flex items-center justify-center transition-all ${
                active
                  ? "bg-gradient-to-br from-pink-500 to-cyan-500 text-white shadow-md scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {f.code}
            </button>
          );
        })}
        <button
          onClick={() => handleFloorChange(-1)}
          title="Basement B1: Secret Developer Bunker (Shortcut: Key B)"
          className={`w-10 h-9 rounded-xl font-mono font-bold text-[10px] flex items-center justify-center transition-all ${
            isInsideHouse && currentFloor === -1
              ? "bg-slate-900 text-white shadow-md"
              : "bg-slate-100 text-pink-600 hover:bg-slate-200"
          }`}
        >
          B1
        </button>
      </div>

      {/* ==========================================
          9. HOVER TOOLTIP & COMPACT BOTTOM-LEFT AYUBOT PILL
      ========================================== */}
      {hoveredObjectLabel && !activeModal && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-white/95 border border-pink-400 text-xs font-bold text-slate-900 shadow-lg">
          {hoveredObjectLabel}
        </div>
      )}

      {isInsideHouse && (
        <div className="fixed bottom-4 left-4 z-20 max-w-sm">
          <div className="rounded-2xl bg-white/92 backdrop-blur-xl border border-slate-200 p-3 shadow-lg flex items-start gap-3">
            <button
              onClick={() => setBotExpanded(!botExpanded)}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-cyan-500 text-white flex items-center justify-center shrink-0 shadow"
              title="Toggle AyuBot Assistant"
            >
              <Bot className="w-5 h-5" />
            </button>
            {botExpanded && (
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-pink-600">
                    AyuBot • {currentFloorMeta.code} {currentFloorMeta.name}
                  </span>
                  <button
                    onClick={handleExitToStreet}
                    className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1"
                  >
                    <LogOut className="w-3 h-3" />
                    <span>Outside</span>
                  </button>
                </div>
                <p className="text-slate-600 leading-snug">{botSpeech}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================
          10. CLEAN BRIGHT INSPECTION MODALS (OPENED & CLOSED WITH [SPACEBAR])
      ========================================== */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="holo-modal-enter relative bg-white border border-slate-200 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl text-slate-900 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="sticky top-2 float-right z-10 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-pink-500 hover:text-white text-xs font-bold text-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <span className="font-mono">[SPACE] Close</span>
              <X className="w-4 h-4" />
            </button>

            {/* MODAL TYPE A: EDUCATION SUITE (1F) */}
            {activeModal.type === "education" && (() => {
              const edu = educationData[activeModal.key];
              if (!edu) return null;
              return (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold text-pink-600">
                    <GraduationCap className="w-4 h-4" />
                    <span>{edu.roomNumber} • {edu.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{edu.title}</h2>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold">
                      🏛️ {edu.institution}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-600">
                      📍 {edu.location}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-600 font-mono">
                      🗓️ {edu.period}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-pink-50 border border-pink-200 text-pink-600 font-extrabold">
                      ⭐ {edu.score}
                    </span>
                  </div>

                  {!editingEdu ? (
                    <>
                      <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-600">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      {edu.editable && (
                        <button
                          onClick={() => {
                            setEduForm(edu);
                            setEditingEdu(true);
                          }}
                          className="mt-4 px-4 py-2 rounded-xl bg-pink-500 text-white font-bold text-xs flex items-center gap-2 hover:bg-pink-600"
                        >
                          <Edit3 className="w-4 h-4" />
                          <span>Customize {edu.roomNumber} Details</span>
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="space-y-3 pt-3 border-t border-slate-200 text-xs">
                      <div>
                        <label className="block text-slate-700 mb-1 font-bold">School / Institution Name</label>
                        <input
                          value={eduForm.institution || ""}
                          onChange={(e) => setEduForm({ ...eduForm, institution: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div>
                          <label className="block text-slate-700 mb-1 font-bold">Board / Location</label>
                          <input
                            value={eduForm.location || ""}
                            onChange={(e) => setEduForm({ ...eduForm, location: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-700 mb-1 font-bold">Year</label>
                          <input
                            value={eduForm.period || ""}
                            onChange={(e) => setEduForm({ ...eduForm, period: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-700 mb-1 font-bold">Score / Percentage</label>
                          <input
                            value={eduForm.score || ""}
                            onChange={(e) => setEduForm({ ...eduForm, score: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSaveEducation(activeModal.key)}
                          className="px-4 py-2 rounded-xl bg-pink-500 text-white font-bold flex items-center gap-1.5"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Changes</span>
                        </button>
                        <button
                          onClick={() => setEditingEdu(false)}
                          className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2">
                    {Object.keys(educationData).map((k) => (
                      <button
                        key={k}
                        onClick={() => {
                          setEditingEdu(false);
                          setActiveModal({ type: "education", key: k });
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${
                          activeModal.key === k
                            ? "bg-pink-500 text-white border-pink-500"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {educationData[k].roomNumber}: {educationData[k].title}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* MODAL TYPE B: SKILLS LABORATORY (2F) */}
            {activeModal.type === "skill" && (() => {
              const skill = activeModal.data || RESUME_DATA.skills[0];
              return (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-700">
                    <Cpu className="w-4 h-4 text-pink-500" />
                    <span>2F SKILLS LABORATORY • {skill.zone}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{skill.name}</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-slate-700">Proficiency Level</span>
                      <span className="text-pink-600 font-mono">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-500"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-extrabold text-slate-800 shadow-sm"
                        >
                          ⚡ {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {skill.subDetails && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {skill.subDetails.map((sd) => (
                        <div
                          key={sd.title}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                        >
                          <div className="font-extrabold text-pink-600 mb-1">{sd.title}</div>
                          <p className="text-slate-600 text-[11px]">{sd.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-200">
                    <div className="text-[10px] font-bold uppercase text-slate-400 mb-2">
                      Switch Skill Zone:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {RESUME_DATA.skills.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setActiveModal({ type: "skill", data: s })}
                          className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                            s.id === skill.id
                              ? "bg-gradient-to-r from-pink-500 to-cyan-500 text-white border-transparent"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {s.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* MODAL TYPE C: PROJECT EXHIBITION (3F) */}
            {activeModal.type === "project" && (() => {
              const proj = activeModal.data || RESUME_DATA.projects[0];
              return (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold text-pink-600">
                      <FolderGit2 className="w-4 h-4" />
                      <span>{proj.room} • {proj.date}</span>
                    </div>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{proj.title}</h2>
                    <p className="text-xs sm:text-sm text-pink-600 font-semibold">{proj.subtitle}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Miniature Visual World Simulator */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-pink-600">
                      🎮 Interactive Miniature Project Preview
                    </div>

                    {proj.demoType === "hospital" && (
                      <div className="space-y-2 text-xs">
                        <div className="flex gap-2">
                          {["patients", "api"].map((tab) => (
                            <button
                              key={tab}
                              onClick={() => setHmsTab(tab)}
                              className={`px-3 py-1 rounded-lg font-bold ${
                                hmsTab === tab
                                  ? "bg-pink-500 text-white"
                                  : "bg-white border border-slate-200 text-slate-700"
                              }`}
                            >
                              {tab === "patients" ? "Live Patient Queue" : "Spring Boot REST API"}
                            </button>
                          ))}
                        </div>
                        {hmsTab === "patients" ? (
                          <div className="space-y-1.5">
                            {hmsPatients.map((pt) => (
                              <div
                                key={pt.id}
                                className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between"
                              >
                                <span>
                                  <strong className="text-pink-600">{pt.id}</strong> • {pt.name} ({pt.dept})
                                </span>
                                <span className="px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 font-mono font-bold">
                                  {pt.status} • {pt.bill}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <pre className="p-2.5 rounded-xl bg-slate-900 text-cyan-300 font-mono text-[11px] overflow-x-auto">
                            {`GET /api/v1/appointments/active -> 200 OK\nPOST /api/v1/billing/invoice -> Spring Boot + MySQL JPA`}
                          </pre>
                        )}
                      </div>
                    )}

                    {proj.demoType === "pharmacy" && (
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-800 font-bold">SwiftStore Express Medicine Cart</span>
                          <button
                            onClick={() =>
                              setCartItems((prev) =>
                                prev.map((it) => ({ ...it, qty: it.qty + 1 }))
                              )
                            }
                            className="px-2.5 py-1 rounded-lg bg-pink-500 text-white font-bold"
                          >
                            + Add Fast Refill
                          </button>
                        </div>
                        {cartItems.map((item) => (
                          <div
                            key={item.id}
                            className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between"
                          >
                            <span>{item.name} (x{item.qty})</span>
                            <span className="text-pink-600 font-mono font-bold">
                              ₹{item.price * item.qty}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {proj.demoType === "travel" && (
                      <div className="space-y-2 text-xs">
                        <div className="flex gap-2">
                          {["Swiss Alps", "Kyoto Blossoms", "Santorini Sunset"].map((dest, i) => (
                            <button
                              key={dest}
                              onClick={() => setSelectedDestination(i)}
                              className={`px-3 py-1 rounded-lg font-bold ${
                                selectedDestination === i
                                  ? "bg-cyan-500 text-white"
                                  : "bg-white border border-slate-200 text-slate-700"
                              }`}
                            >
                              ✈️ {dest}
                            </button>
                          ))}
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700">
                          Interactive destination showcase & cross-browser itinerary ready for{" "}
                          <strong className="text-pink-600">
                            {["Swiss Alps", "Kyoto Blossoms", "Santorini Sunset"][selectedDestination]}
                          </strong>
                          !
                        </div>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {proj.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-200 flex flex-wrap gap-2">
                    {RESUME_DATA.projects.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setActiveModal({ type: "project", data: p })}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${
                          p.id === proj.id
                            ? "bg-pink-500 text-white border-pink-500"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {p.room}: {p.title}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* MODAL TYPE D: ROOFTOP ACHIEVEMENTS & CERTIFICATIONS (4F) */}
            {activeModal.type === "achievement" && (
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold text-pink-600">
                  <Trophy className="w-4 h-4" />
                  <span>ROOFTOP SKY DECK • ACHIEVEMENTS & CERTIFICATIONS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Coding Milestones & Certifications
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {RESUME_DATA.achievements.map((ach) => (
                    <div
                      key={ach.id}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1"
                    >
                      <div className="text-xs font-mono text-pink-600 font-bold">{ach.badge}</div>
                      <div className="text-sm font-extrabold text-slate-900">{ach.title}</div>
                      <p className="text-[11px] text-slate-600">{ach.subtitle}</p>
                      {ach.link && (
                        <a
                          href={ach.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-cyan-600 font-bold pt-1 hover:underline"
                        >
                          <span>View Profile</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    📜 Certifications & Volunteering ({RESUME_DATA.certifications.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {RESUME_DATA.certifications.map((c, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-bold text-slate-900">{c.name}</div>
                          <div className="text-[11px] text-slate-500">{c.issuer}</div>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-600 font-semibold text-[10px]">
                          {c.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* MODAL TYPE E: ROOFTOP CONTACT TRANSMITTER */}
            {activeModal.type === "contact" && (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-700">
                  <Mail className="w-4 h-4 text-pink-500" />
                  <span>CONNECT WITH AYUSHI</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900">Let&apos;s Connect!</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <button
                    onClick={() => copyToClipboard(RESUME_DATA.email, "email")}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between font-semibold"
                  >
                    <span className="truncate">📧 {RESUME_DATA.email}</span>
                    <span className="text-pink-600 font-bold">
                      {copiedField === "email" ? "COPIED!" : "COPY"}
                    </span>
                  </button>
                  <a
                    href={RESUME_DATA.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between font-semibold"
                  >
                    <span>💼 LinkedIn Profile</span>
                    <ExternalLink className="w-4 h-4 text-cyan-600" />
                  </a>
                  <a
                    href={RESUME_DATA.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between font-semibold"
                  >
                    <span>🐙 {RESUME_DATA.githubHandle}</span>
                    <ExternalLink className="w-4 h-4 text-pink-500" />
                  </a>
                  <a
                    href={RESUME_DATA.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between font-semibold"
                  >
                    <span>🧩 {RESUME_DATA.leetcodeHandle}</span>
                    <ExternalLink className="w-4 h-4 text-cyan-600" />
                  </a>
                </div>
              </div>
            )}

            {/* MODAL TYPE F: PRINTABLE / DOWNLOADABLE OFFICIAL RESUME CV */}
            {activeModal.type === "resume" && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900">{RESUME_DATA.name}</h2>
                    <p className="text-xs text-pink-600 font-semibold">{RESUME_DATA.role}</p>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    <span>Print / Save PDF</span>
                  </button>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{RESUME_DATA.summary}</p>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="font-extrabold text-pink-600 uppercase">Education</div>
                  <div className="font-bold text-slate-900">
                    {educationData.btech.title} — {educationData.btech.institution} (
                    {educationData.btech.period})
                  </div>
                  <div className="text-cyan-700 font-bold">{educationData.btech.score}</div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="font-extrabold text-pink-600 uppercase">Projects</div>
                  {RESUME_DATA.projects.map((p) => (
                    <div key={p.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-900">
                        {p.title} | <span className="text-pink-600">{p.date}</span>
                      </div>
                      <div className="text-[11px] text-cyan-700 font-semibold mb-1">{p.stack.join(" • ")}</div>
                      <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                        {p.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================
          11. SKY ASCENT TRANSITION OVERLAY & FULL STATIC PORTFOLIO FINALE PAGE
      ========================================== */}
      {isAscendingToSky && !showStaticLandingPage && (
        <div className="fixed inset-0 z-40 pointer-events-none flex flex-col items-center justify-center bg-gradient-to-b from-sky-200/40 via-white/30 to-white/90 backdrop-blur-[2px] transition-opacity duration-700">
          <div className="px-6 py-3 rounded-full bg-white/95 border border-pink-300 shadow-2xl flex items-center gap-3 text-slate-900 animate-bounce">
            <Sparkles className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-black tracking-wide">
              Ascending Above The Developer&apos;s House...
            </span>
          </div>
        </div>
      )}

      {showStaticLandingPage && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-50 text-slate-900 holo-modal-enter">
          {/* Sticky Top Navigation Bar on the Static Page */}
          <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/90 border-b border-slate-200 px-6 py-4">
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-cyan-500 text-white font-black flex items-center justify-center shadow-md">
                  AS
                </div>
                <div>
                  <h1 className="text-base sm:text-lg font-black text-slate-900 leading-none">
                    {RESUME_DATA.name}
                  </h1>
                  <p className="text-xs font-semibold text-pink-600 mt-0.5">
                    {RESUME_DATA.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-pink-500" />
                  <span>Print / Save Resume PDF</span>
                </button>
                <button
                  onClick={handleReturnFromStaticPage}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-extrabold text-xs shadow-md hover:brightness-110 flex items-center gap-1.5"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Return to 3D House 🏡</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main Static Portfolio Content */}
          <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
            {/* Hero Section */}
            <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-300 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PORTFOLIO OVERVIEW • {RESUME_DATA.name.toUpperCase()}</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  Building Scalable Full-Stack Applications & Clean User Interfaces.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {RESUME_DATA.summary}
                </p>

                {/* Direct Contact Links */}
                <div className="pt-4 flex flex-wrap gap-3 text-xs font-bold">
                  <button
                    onClick={() => copyToClipboard(RESUME_DATA.email, "static_email")}
                    className="px-4 py-2.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white flex items-center gap-2 shadow-lg transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>
                      {copiedField === "static_email" ? "Email Copied!" : RESUME_DATA.email}
                    </span>
                  </button>
                  <a
                    href={RESUME_DATA.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center gap-2 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                  <a
                    href={RESUME_DATA.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4 text-pink-400" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                  <a
                    href={RESUME_DATA.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center gap-2 transition-all"
                  >
                    <Code2 className="w-4 h-4 text-amber-400" />
                    <span>LeetCode (300+)</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </div>
            </section>

            {/* Quick Stats Strip */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="text-3xl font-black text-pink-600">8.65 / 10</div>
                <div className="text-xs font-bold text-slate-500 mt-1">
                  B.Tech CS CGPA • Galgotias University
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="text-3xl font-black text-cyan-600">300+</div>
                <div className="text-xs font-bold text-slate-500 mt-1">
                  LeetCode Problems Solved (DSA)
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="text-3xl font-black text-indigo-600">50+</div>
                <div className="text-xs font-bold text-slate-500 mt-1">
                  HackerRank Challenges Solved
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="text-3xl font-black text-amber-600">SIH 2024</div>
                <div className="text-xs font-bold text-slate-500 mt-1">
                  Smart India Hackathon & 8 Certs
                </div>
              </div>
            </section>

            {/* Featured Projects Grid */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Featured Projects</h3>
                  <p className="text-xs text-slate-500">
                    Full-stack & responsive web applications built by Ayushi Shrivastava
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {RESUME_DATA.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2.5 py-1 rounded-full bg-pink-50 text-pink-600 font-bold">
                          {proj.date}
                        </span>
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-500 hover:text-slate-900 flex items-center gap-1 font-bold"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      </div>
                      <h4 className="text-xl font-black text-slate-900">{proj.title}</h4>
                      <p className="text-xs font-semibold text-cyan-700">{proj.subtitle}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-semibold text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-1.5 pt-2 text-xs text-slate-600">
                        {proj.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills & Education */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Skills */}
              <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-pink-500" />
                  <span>Technical & Soft Skills</span>
                </h3>
                <div className="space-y-3">
                  {RESUME_DATA.skills.map((sk) => (
                    <div key={sk.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                        <span className="text-slate-900">{sk.name}</span>
                        <span className="text-pink-600">{sk.proficiency}%</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {sk.items.map((it) => (
                          <span
                            key={it}
                            className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="space-y-6">
                <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-cyan-600" />
                    <span>Education</span>
                  </h3>
                  <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-200 space-y-1">
                    <div className="text-xs font-bold text-pink-600">
                      {educationData.btech.period}
                    </div>
                    <div className="text-base font-black text-slate-900">
                      {educationData.btech.title}
                    </div>
                    <div className="text-xs font-semibold text-slate-700">
                      {educationData.btech.institution} • {educationData.btech.location}
                    </div>
                    <div className="text-xs font-extrabold text-cyan-700 pt-1">
                      {educationData.btech.score}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span>Certifications & Volunteering</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {RESUME_DATA.certifications.map((cert, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-bold text-slate-900">{cert.name}</div>
                          <div className="text-[11px] text-slate-500">{cert.issuer}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-pink-50 text-pink-600 font-bold text-[10px]">
                          {cert.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-6 pb-12 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div>
                © {new Date().getFullYear()} <strong>{RESUME_DATA.name}</strong> • The Developer&apos;s House 3D & Static Portfolio
              </div>
              <button
                onClick={() => {
                  setShowStaticLandingPage(false);
                  setIsAscendingToSky(false);
                  handleExitToStreet();
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Back to 3D House Exterior</span>
              </button>
            </footer>
          </main>
        </div>
      )}
    </div>
  );
}