import type { ArchitectureEdge, ArchitectureNode, Project } from "@/types";

const REPO = {
  rideshare: "https://github.com/manoharathani27/rideshare",
  notificationService: "https://github.com/manoharathani27/notification-service",
  urlShortener: "https://github.com/manoharathani27/url-shortner",
  taskScheduler: "https://github.com/manoharathani27/task-scheduler-system",
  rateLimiter: "https://github.com/manoharathani27/api-rate-limiter",
};

const NOTIFICATION_SWAGGER = "https://notification-service-710340448406.asia-south1.run.app/api-docs";

/* ---------------------------------------------------------------- */
/* Featured Project — RideShare                                      */
/* ---------------------------------------------------------------- */
export const FEATURED_PROJECT: Project = {
  id: "rideshare",
  name: "RideShare",
  tagline: "A distributed ride-sharing backend — KD-Tree driver matching, live GPS tracking, and Kubernetes autoscaling.",
  description:
    "A production-grade ride-sharing backend pairing a C++ matching engine with a Node.js API layer. Driver locations live in Redis as a geohash sorted set for O(log n + m) nearby-driver search, while a C++ KD-Tree narrows that down to the true nearest match and a state machine enforces valid ride transitions (a ride can never jump from COMPLETED back to IN_PROGRESS). Riders track their driver live over WebSockets, background jobs (OTP, notifications, payouts) run through BullMQ so they never block the request, and the whole system deploys to GCP Cloud Run and Kubernetes through a GitHub Actions pipeline using Workload Identity Federation instead of long-lived service account keys.",
  problem:
    "Matching a rider to the nearest available driver, keeping that match honest under concurrent requests, and streaming live location updates all have to happen in real time — and the system still has to survive a traffic spike, a crashed pod, or a driver going offline mid-ride without corrupting a ride's state or losing a payment.",
  role:
    "Designed and built the full system: the C++ KD-Tree matching engine and ride state machine, the Redis GeoSearch location layer, the Node.js REST + WebSocket API, the BullMQ job pipeline, and the Docker/Kubernetes/Cloud Run deployment with CI/CD.",
  stack: [
    "C++17",
    "Node.js",
    "Express.js",
    "Redis GeoSearch",
    "Socket.IO",
    "BullMQ",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Google Cloud Run",
    "GitHub Actions",
  ],
  highlights: [
    "Built a C++ KD-Tree spatial index for nearest-driver matching (O(log n) vs. O(n) brute force) alongside a state machine that guards ride lifecycle transitions, with std::mutex protecting the shared heap and driver map from race conditions across threads.",
    "Designed the real-time layer with Redis GeoSearch for O(log n + m) nearby-driver queries and WebSocket live tracking, backed by BullMQ for non-blocking OTP/notification jobs and ACID wallet transactions for the 80/20 driver-platform payment split.",
    "Deployed via Docker multi-stage builds (~200MB images) to GCP Cloud Run and Kubernetes, with GitHub Actions → Workload Identity Federation → Artifact Registry CI/CD, Kubernetes HPA autoscaling pods 2→10 under load, and rolling updates for zero-downtime deploys.",
  ],
  metrics: [
    { label: "Driver matching", value: "C++ KD-Tree · O(log n)" },
    { label: "Live tracking", value: "WebSocket + Redis GeoSearch" },
    { label: "Autoscaling", value: "K8s HPA · 2 → 10 pods" },
    { label: "Deployment", value: "Cloud Run + Workload Identity Fed." },
  ],
  links: [
    { label: "Source", href: REPO.rideshare },
    { label: "Architecture", href: "#architecture" },
  ],
  featured: true,
};

/* ---------------------------------------------------------------- */
/* Other Projects                                                     */
/* ---------------------------------------------------------------- */
export const OTHER_PROJECTS: Project[] = [
  {
    id: "notification-service",
    name: "Notification Service",
    tagline: "A multi-channel notification microservice with async delivery and a live, documented API.",
    description:
      "A production-grade notification microservice that unifies Email, SMS and in-app delivery behind a single REST API. Requests are authenticated with JWT, then handed off to BullMQ-backed Redis queues for asynchronous processing, so the API stays fast even under bursts. In-app notifications are pushed in real time over Socket.IO, while every delivery attempt is persisted to Cloud SQL for status tracking and retries.",
    problem:
      "Sending notifications synchronously ties up the request thread and makes a slow SMS or email provider someone else's outage. This needed async processing per channel, real-time in-app delivery, and a durable record of what was actually delivered.",
    role:
      "Designed and built the service end-to-end: the REST API and JWT auth layer, the BullMQ/Redis job pipeline, the Socket.IO real-time channel, and the Cloud Run + Cloud SQL deployment.",
    stack: ["Node.js", "Express.js", "BullMQ", "Redis", "Socket.IO", "JWT", "PostgreSQL", "Docker", "Google Cloud Run"],
    metrics: [
      { label: "Channels", value: "Email · SMS · In-App" },
      { label: "Processing", value: "BullMQ + Redis, async" },
      { label: "Real-time", value: "Socket.IO push delivery" },
    ],
    links: [
      { label: "Swagger Docs", href: NOTIFICATION_SWAGGER },
      { label: "Source", href: REPO.notificationService },
    ],
  },
  {
    id: "url-shortener",
    name: "URL Shortener Service",
    tagline: "10,000+ redirects a day at sub-50ms latency.",
    description:
      "A high-throughput URL shortening REST API using Base62 encoding with Redis caching in front of PostgreSQL, designed with separate API gateway, app server, cache and database tiers so each layer can scale independently.",
    problem:
      "A redirect service sits on the critical path of every click — it needed to stay fast under cache misses and hot-key traffic while remaining horizontally scalable.",
    role: "Designed the HLD across the four tiers and implemented the encoding, caching and redirect logic.",
    stack: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Throughput", value: "10,000+ redirects/day" },
      { label: "Latency", value: "Sub-50ms" },
      { label: "Cache hit rate", value: "95%" },
    ],
    links: [{ label: "Source", href: REPO.urlShortener }],
  },
  {
    id: "task-scheduler-system",
    name: "Distributed Task Scheduler",
    tagline: "A fault-tolerant scheduling engine pairing a C++ min-heap core with Pub/Sub-driven workers.",
    description:
      "A production-grade distributed task scheduler combining a high-performance C++17 scheduling engine with Node.js microservices, Google Cloud Pub/Sub and Cloud SQL, deployed through a fully automated GitHub Actions CI/CD pipeline for reliable, fault-tolerant task execution at scale.",
    problem:
      "A scheduler that runs on a single process loses tasks on crash and can't scale past one machine. This needed at-least-once delivery, idempotent execution, and horizontal scaling across worker instances without losing or duplicating a task.",
    role:
      "Built the REST task-management API, the C++ min-heap scheduling engine exposed to workers, and the Cloud Run + Pub/Sub + Cloud SQL deployment with CI/CD via GitHub Actions.",
    stack: ["Node.js", "Express.js", "C++17", "Sequelize", "PostgreSQL", "Google Pub/Sub", "Google Cloud Run", "Docker", "GitHub Actions"],
    highlights: [
      "Designed a fault-tolerant scheduler with a C++17 min-heap engine (O(1) peek, O(log n) insert/delete) integrated with Node.js microservices over Google Pub/Sub for at-least-once, idempotent task delivery.",
      "Shipped a fully containerized, CI/CD-automated system — GitHub Actions → Artifact Registry → Cloud Run — with Cloud SQL persistence, JWT auth and Secret Manager, enabling automatic horizontal scaling and recovery from worker crashes with zero task loss.",
    ],
    metrics: [
      { label: "Scheduling core", value: "C++17 min-heap · O(log n)" },
      { label: "Delivery", value: "At-least-once + idempotent" },
      { label: "Scaling", value: "Autoscaled Cloud Run workers" },
    ],
    links: [{ label: "Source", href: REPO.taskScheduler }],
  },
  {
    id: "rate-limiter",
    name: "API Rate Limiter with Analytics",
    tagline: "A distributed Redis rate limiter with three algorithms and a real-time analytics layer.",
    description:
      "A distributed API rate-limiting middleware for Node.js and Redis supporting three industry-standard algorithms — Token Bucket, Sliding Window, and Fixed Window Counter — with atomic Lua scripts so checks stay race-condition-free across multiple server instances, plus an analytics layer tracking block rate, hourly breakdowns and top blocked IPs.",
    problem:
      "A rate limiter that isn't atomic across instances lets clients slip through during a race, and a limiter with no visibility gives no way to tell abuse from a burst of legitimate traffic. It also needed to fail open — a Redis outage shouldn't take the whole API down with it.",
    role: "Implemented all three limiting algorithms as atomic Lua scripts, the analytics tracking layer, and the fail-open fallback.",
    stack: ["Node.js", "Redis", "Lua Scripts", "Docker"],
    highlights: [
      "Implemented Token Bucket, Sliding Window, and Fixed Window Counter as atomic Redis Lua scripts, exposing standard X-RateLimit-* headers and a fail-open fallback so the API stays available even if Redis goes down.",
      "Built a real-time analytics layer tracking total requests, block rate, hourly breakdowns, and top blocked IPs — distributed across instances since all limiting state lives in Redis, not process memory.",
    ],
    metrics: [
      { label: "Algorithms", value: "Token Bucket · Sliding · Fixed Window" },
      { label: "Concurrency", value: "Atomic Lua scripts" },
      { label: "Resilience", value: "Fail-open on Redis outage" },
    ],
    links: [{ label: "Source", href: REPO.rateLimiter }],
  },
];

export const ALL_PROJECTS: Project[] = [FEATURED_PROJECT, ...OTHER_PROJECTS];

/* ---------------------------------------------------------------- */
/* Architecture graph for the RideShare showcase                     */
/* ---------------------------------------------------------------- */
export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: "client",
    label: "Rider / Driver App",
    sublabel: "Request + live GPS",
    detail: "Riders request a ride and drivers stream GPS pings; both connect over REST and a live WebSocket channel.",
    x: 6,
    y: 50,
  },
  {
    id: "cloud-run",
    label: "Node.js API",
    sublabel: "Cloud Run · JWT auth",
    detail: "A stateless Express API authenticates the request, then either updates a driver's location or kicks off a ride match.",
    x: 26,
    y: 50,
  },
  {
    id: "redis-geo",
    label: "Redis GeoSearch",
    sublabel: "Driver locations",
    detail: "Driver GPS is stored as a geohash sorted set. GEOSEARCH narrows millions of drivers down to nearby candidates in O(log n + m).",
    x: 46,
    y: 20,
  },
  {
    id: "cpp-engine",
    label: "C++ Matching Engine",
    sublabel: "KD-Tree + State Machine",
    detail: "A KD-Tree finds the true nearest driver among the candidates in O(log n), then a state machine validates the ride's lifecycle transition.",
    x: 66,
    y: 50,
  },
  {
    id: "bullmq",
    label: "BullMQ Queue",
    sublabel: "OTP · notifications · payouts",
    detail: "Background jobs — OTP generation, push notifications, the 80/20 driver payout split — run async so they never block the HTTP response.",
    x: 66,
    y: 80,
  },
  {
    id: "cloud-sql",
    label: "Cloud SQL",
    sublabel: "PostgreSQL persistence",
    detail: "Rides, wallet transactions and two-sided ratings are persisted here, with ACID transactions guarding every debit/credit pair.",
    x: 88,
    y: 50,
  },
];

export const ARCHITECTURE_EDGES: ArchitectureEdge[] = [
  { from: "client", to: "cloud-run", label: "Ride request / GPS ping" },
  { from: "cloud-run", to: "redis-geo", label: "GEOSEARCH nearby drivers" },
  { from: "redis-geo", to: "cpp-engine", label: "Candidate drivers" },
  { from: "cpp-engine", to: "cloud-run", label: "Matched driver + state" },
  { from: "cloud-run", to: "bullmq", label: "Enqueue background job" },
  { from: "cloud-run", to: "cloud-sql", label: "Persist ride + wallet" },
  { from: "cloud-run", to: "client", label: "WebSocket live tracking" },
];
