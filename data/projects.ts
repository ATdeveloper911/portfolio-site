export interface Project {
  id: string;
  title: string;
  category: "Security & Logic" | "AI & Wellness" | "Enterprise / ERP" | "Social Impact";
  description: string;
  technicalHighlight: string;
  techStack: string[];
  features: string[];
  link?: string;
  github?: string;
  caseStudy?: {
    keyCapabilities: string[];
    reliabilitySecurity: string[];
    performanceScalability: string[];
    roadmap: string[];
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "deleto",
    title: "Dele.to",
    category: "Security & Logic",
    description: "A secure file-sharing platform with end-to-end encryption, allowing users to share sensitive files with automatic expiration and password protection.",
    technicalHighlight: "Implements AES-256-GCM encryption for client-side file encryption before upload, ensuring zero-knowledge architecture where even the server cannot decrypt user files.",
    techStack: ["Next.js", "TypeScript", "Supabase", "Web Crypto API", "Tailwind CSS"],
    features: [
      "Client-side AES-256-GCM encryption",
      "Time-based auto-deletion",
      "Password protection with bcrypt",
      "Zero-knowledge architecture",
      "Download tracking & analytics"
    ],
    caseStudy: {
      keyCapabilities: [
        "Zero-knowledge credential sharing using browser-native encryption.",
        "URL fragment-based key management ensures decryption keys never reach the server.",
        "Automated self-destruction logic based on view count or custom expiration (TTL).",
        "Password-gate protection layer for secondary verification of sensitive secrets."
      ],
      reliabilitySecurity: [
        "Implementation of AES-256-GCM encryption via the Web Crypto API.",
        "Server-side storage is restricted strictly to encrypted payloads and metadata."
      ],
      performanceScalability: [
        "High-concurrency support using Upstash Redis for serverless state management.",
        "Vercel serverless deployment for optimized global delivery."
      ],
      roadmap: [
        "Integration of Multi-Factor Authentication (MFA) for high-sensitivity credential shares.",
        "Development of a browser extension for instant secret generation from any tab."
      ]
    },
    featured: true
  },
  {
    id: "gold-bazar",
    title: "Gold Bazar",
    category: "Security & Logic",
    description: "A comprehensive ERP system for gold jewelry businesses with complex calculation logic for Tola/Masha weight conversions and real-time pricing.",
    technicalHighlight: "Custom calculation engine for Tola/Masha weight conversions with real-time gold rate integration and multi-currency support.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    features: [
      "Tola/Masha calculation logic",
      "Real-time gold rate updates",
      "Inventory management",
      "Invoice generation",
      "Multi-branch support"
    ],
    caseStudy: {
      keyCapabilities: [
        "Accurate Tola/Masha/Ratti conversion engine for jewelry-grade calculations.",
        "Real-time gold price tickers and pricing rules for sales and purchasing.",
        "Inventory + invoicing workflows optimized for day-to-day shop operations.",
        "Multi-branch support with synchronized stock and ledger tracking."
      ],
      reliabilitySecurity: [
        "Role-based access patterns for staff operations and sensitive pricing actions.",
        "Audit-friendly transaction records for inventory and invoicing changes."
      ],
      performanceScalability: [
        "Realtime updates with Socket.io for multi-user operational environments.",
        "Optimized query patterns for fast inventory search and invoice generation."
      ],
      roadmap: [
        "Barcode/QR-based item intake and sales workflows.",
        "Advanced analytics on stock velocity and profitability by category."
      ]
    },
    featured: true
  },
  {
    id: "mindspace",
    title: "MindSpace",
    category: "AI & Wellness",
    description: "An AI-powered mental wellness platform that provides personalized therapy recommendations and mood tracking with sentiment analysis.",
    technicalHighlight: "Integrates Google Gemini API for sentiment analysis and personalized mental health recommendations based on user journal entries.",
    techStack: ["Next.js", "TypeScript", "Gemini API", "Prisma", "PostgreSQL", "Tailwind CSS"],
    features: [
      "AI-powered sentiment analysis",
      "Personalized therapy recommendations",
      "Mood tracking & visualization",
      "Journal entry analysis",
      "Progress tracking dashboard"
    ],
    caseStudy: {
      keyCapabilities: [
        "AI-driven sentiment analysis of personal journals using the Google Gemini API.",
        "Multi-factor mood tracking including sleep quality, exercise, stress, and diet.",
        "Cross-platform synchronization between MERN web and React Native mobile applications.",
        "Personalized wellness guidance and crisis detection via a context-aware AI chat module."
      ],
      reliabilitySecurity: [
        "Firebase Security Rules and JWT-based authentication for private medical data.",
        "Anonymization of community data to facilitate safe peer-to-peer support."
      ],
      performanceScalability: [
        "Client-side caching for fast resource loading and offline-first mood tracking on mobile."
      ],
      roadmap: [
        "Integration with wearable devices for real-time biometric mood correlation.",
        "Professional dashboard for therapists to provide clinical oversight and intervention."
      ]
    },
    featured: true
  },
  {
    id: "smart-travel",
    title: "Smart Travel",
    category: "AI & Wellness",
    description: "An intelligent travel planning assistant that uses AI to create personalized itineraries based on user preferences and budget.",
    technicalHighlight: "Leverages Gemini API for natural language processing to understand travel preferences and generate optimized itineraries.",
    techStack: ["React Native", "Expo", "Gemini API", "Firebase", "TypeScript"],
    features: [
      "AI-generated itineraries",
      "Budget optimization",
      "Real-time weather integration",
      "Local recommendations",
      "Offline map support"
    ],
    caseStudy: {
      keyCapabilities: [
        "AI itinerary generation tailored to preferences, time, and budget constraints.",
        "Hybrid budget calculation logic for practical trip planning.",
        "Local recommendations and context-aware suggestions for destinations.",
        "Offline-first UX patterns for travel scenarios with limited connectivity."
      ],
      reliabilitySecurity: [
        "Secure user data handling with Firebase authentication patterns.",
        "Defensive validation for itinerary generation inputs and saved trip state."
      ],
      performanceScalability: [
        "Optimized mobile performance with caching and offline storage.",
        "Efficient API usage patterns to keep the app responsive on cellular networks."
      ],
      roadmap: [
        "Buddy Bot conversational assistant for on-trip guidance.",
        "Improved multi-city planning with constraint-based optimization."
      ]
    },
    featured: false
  },
  {
    id: "bestpriceksa",
    title: "BestPriceKSA",
    category: "Enterprise / ERP",
    description: "A B2B e-commerce platform for wholesale distributors in Saudi Arabia with advanced inventory and order management.",
    technicalHighlight: "Implements Role-Based Access Control (RBAC) with Supabase Row Level Security (RLS) for multi-tenant architecture.",
    techStack: ["Next.js", "Supabase", "TypeScript", "Stripe", "Tailwind CSS"],
    features: [
      "Multi-tenant RBAC with RLS",
      "Bulk order processing",
      "Dynamic pricing tiers",
      "Automated invoicing",
      "Warehouse management"
    ],
    caseStudy: {
      keyCapabilities: [
        "Comprehensive inventory management system with decoupled catalog and warehouse logic.",
        "Integrated financial tracking via an Item Expense module for granular SKU-level costing.",
        "Manual quantity override controls paired with automated stock reconciliations."
      ],
      reliabilitySecurity: [
        "Production-ready system handling real-world transactions for the KSA market.",
        "Secure financial audit logging for all stock and expense updates."
      ],
      performanceScalability: [
        "Modular React frontend optimized for operational environments with low bandwidth."
      ],
      roadmap: [
        "Implementation of real-time barcode scanning for mobile inventory audits.",
        "AI-driven demand forecasting tailored to Saudi Arabian seasonal market trends."
      ]
    },
    featured: true
  },
  {
    id: "aiilp",
    title: "AIILP",
    category: "Enterprise / ERP",
    description: "An AI-powered Integrated Learning Platform for educational institutions with course management and student analytics.",
    technicalHighlight: "Custom RBAC system with granular permissions for students, teachers, and administrators with real-time collaboration features.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Redis"],
    features: [
      "Granular RBAC permissions",
      "Real-time collaboration",
      "Student analytics dashboard",
      "Assignment management",
      "Video conferencing integration"
    ],
    caseStudy: {
      keyCapabilities: [
        "Role-based dashboards for Admin, University, Software House, and Students.",
        "Bulk student registration via validated CSV parsing for university admins.",
        "Automated CV-form creation with formatted preview generation for students.",
        "Real-time application status tracking with status history for transparency."
      ],
      reliabilitySecurity: [
        "Admin approval workflow for all organizations and internship listings.",
        "Comprehensive audit trails tracking all administrative and user activities."
      ],
      performanceScalability: [
        "Supabase Realtime synchronization across all stakeholders.",
        "Scalable architecture handling 1,000+ concurrent read operations."
      ],
      roadmap: [
        "AI skill-matching algorithm between student CVs and internship requirements.",
        "In-platform video interviewing and recruitment management tools."
      ]
    },
    featured: false
  },
  {
    id: "bloodlink",
    title: "BloodLink",
    category: "Social Impact",
    description: "A real-time blood donation platform connecting donors with hospitals and patients in emergency situations.",
    technicalHighlight: "Real-time Socket.io implementation for instant donor notifications with geolocation-based matching and automated escalation triggers.",
    techStack: ["React Native", "Node.js", "Socket.io", "MongoDB", "Google Maps API"],
    features: [
      "Real-time donor notifications",
      "Geolocation-based matching",
      "Emergency escalation system",
      "Donation history tracking",
      "Hospital dashboard"
    ],
    caseStudy: {
      keyCapabilities: [
        "Real-time donor-recipient matching using Socket.IO for instant emergency responses.",
        "Automatic compatibility calculation across whole blood, red cells, platelets, and plasma.",
        "Complete lifecycle tracking from scheduling to medical testing and final distribution.",
        "Priority-based notification system for critical and urgent medical requests."
      ],
      reliabilitySecurity: [
        "HIPAA-compliant data handling with comprehensive medical history verification.",
        "7-year audit trail retention for all donation and distribution activities."
      ],
      performanceScalability: [
        "Geolocation-indexed queries for rapid discovery of nearby available donors."
      ],
      roadmap: [
        "Direct API integration with Hospital Management Systems (HMS) for automated requests.",
        "Donor rewards and impact tracking system to encourage long-term participation."
      ]
    },
    featured: true
  },
  {
    id: "complaint-mgmt",
    title: "Complaint Management System",
    category: "Social Impact",
    description: "A comprehensive complaint tracking system for government agencies with automated escalation and resolution workflows.",
    technicalHighlight: "Automated escalation triggers based on complaint severity and response time with real-time status updates via Socket.io.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Socket.io", "TypeScript"],
    features: [
      "Automated escalation triggers",
      "Real-time status updates",
      "Multi-department routing",
      "Analytics dashboard",
      "Email/SMS notifications"
    ],
    caseStudy: {
      keyCapabilities: [
        "Automated escalation logic triggered when 5+ similar complaints are received.",
        "Time-sensitive auto-escalation to HOD after 24 hours of advisor inaction.",
        "Bulk student onboarding via CSV processing with automated SMTP credential delivery.",
        "Detailed timeline view of the complaint lifecycle for all administrative roles."
      ],
      reliabilitySecurity: [
        "Supabase Row Level Security (RLS) ensures students and advisors only access relevant data.",
        "Database triggers enforced for valid batch-to-advisor assignments."
      ],
      performanceScalability: [
        "Supabase Realtime for instant status update notifications across role-based dashboards."
      ],
      roadmap: [
        "AI sentiment analysis to prioritize complaints based on user distress levels.",
        "SSO integration with existing university portals for seamless authentication."
      ]
    },
    featured: false
  },
  {
    id: "task-manager",
    title: "Advanced Task Manager",
    category: "Enterprise / ERP",
    description: "A collaborative task management platform with Kanban boards, time tracking, and team analytics.",
    technicalHighlight: "Optimistic UI updates with real-time synchronization using Socket.io and conflict resolution strategies.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
    features: [
      "Kanban board interface",
      "Time tracking",
      "Team collaboration",
      "Sprint planning",
      "Performance analytics"
    ],
    caseStudy: {
      keyCapabilities: [
        "Kanban boards with collaborative workflows and sprint planning.",
        "Time tracking with team-level analytics.",
        "Real-time sync for task state changes and assignments.",
        "Activity history for transparency and operational tracking."
      ],
      reliabilitySecurity: [
        "Optimistic UI patterns with conflict resolution strategies for realtime updates.",
        "Role-aware access to team workspaces and task operations."
      ],
      performanceScalability: [
        "Socket.io real-time synchronization designed for active team usage.",
        "Efficient state management to keep interactions smooth."
      ],
      roadmap: [
        "Advanced reporting: cycle time, throughput, and bottleneck detection.",
        "Automation rules (auto-assign, auto-move, notifications) for teams."
      ]
    },
    featured: false
  }
];

export const categories = [
  "Security & Logic",
  "AI & Wellness",
  "Enterprise / ERP",
  "Social Impact"
] as const;

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: Project["category"]) => 
  projects.filter(p => p.category === category);
