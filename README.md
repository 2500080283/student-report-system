# EduMetrics Pro — Institutional Student Performance & Report Card Management System

An enterprise-grade educational management, grading calculation, official transcript generation, and performance analytics platform designed for K-12 schools, academies, and collegiate preparatory institutions. Built with a next-generation dark aesthetic inspired by [MotionSites AI](https://motionsites.ai/).

---

## 🔐 Default Access & Role Credentials

The system includes a universal role-based authentication suite with quick-fill demo chips and active session persistence in `localStorage`.

| Role | Name | Username / ID | Password | Access Level |
| :--- | :--- | :--- | :--- | :--- |
| 🛡️ **Admin** | **Prudhviraj** | `prudhviraj` (or `admin`) | `prudhvi@2408` | Full institutional control, audit logs, system settings, grading scale configuration |
| 👨‍🏫 **Teacher** | Sarah Jenkins | `sarah.jenkins` (or `teacher`) | `teacher123` | Gradebook entry, curriculum CRUD, attendance logging, student observations |
| 🎓 **Student** | Alex Rivera | `alex.rivera` (or `student`) | `student123` | Personal dashboard, honors badges, transcript review, graduation progress |
| 👨‍👩‍👧 **Parent** | Carlos Rivera | `carlos.rivera` (or `parent`) | `parent123` | Guardian overview, digital transcript acknowledgment signature, conference booking |

---

## 🌟 Key Highlights & Capabilities

### 1. 🛡️ Role-Based Portals (Admin, Teacher, Student & Parent)
- **Admin Portal**: Institutional branding, grading threshold scale configuration, system backup/restore, audit logs, and directory oversight.
- **Teacher Gradebook**: Spreadsheet-style live entry with weighted grading logic:
  $$\text{Final Course Grade} = (30\% \times \text{Coursework}) + (30\% \times \text{Midterm}) + (40\% \times \text{Final Exam})$$
- **Student Portal**: Student-friendly dashboard highlighting honors badges, credit progress meter toward graduation, and faculty appraisals.
- **Parent / Guardian Portal**: Attendance review, conference request system, and an **interactive digital acknowledgment signature form** generating official timestamped verification hashes on transcripts.

### 2. 🎨 MotionSites AI-Inspired Visual Design System
- **Dark Obsidian Canvas**: Atmospheric radial gradient glow mesh with vibrant purple (`#d0b2ff`) and energetic orange (`#e8400d`) accents.
- **Floating Pill Segmented Controls**: Smooth tactile role switcher and sticky subnavigation bars.
- **Glassmorphic Hero Banners & Cards**: Multi-layer 24px backdrop blur with iridescent border highlights.
- **Interactive Prompt-Card Hover**: Spring-physics micro-interactions, elevated card tilts, and subtle keyframe shimmer effects.
- **Strict Cross-Browser Compatibility**: Full vendor prefixing (`-webkit-backdrop-filter` preceding `backdrop-filter`) supporting Safari 9+, iOS Safari, Chrome, Edge, and Firefox.

### 3. 🎓 Official Academic Report Cards & Transcripts
- **Institutional Identity & Customization**: Dynamic school title, accreditation subtitle, school crest, verification seal (`★ VERIFIED ★`), and authorized signature blocks.
- **Multi-Scale Evaluation Engine**: Live instant switching between 4 standard grading systems:
  - **Letter Grades**: A+ through F with color-coded badges
  - **Percentage**: 0.0% to 100.0% precision calculation
  - **4.0 GPA Standard**: Standard North American collegiate scale
  - **Standards-Based**: Level 4+ Exemplary down to Level 1 Novice
- **Threshold & Scale Customizer**: Configure custom minimum cutoffs, GPA points, standards labels, and badge colors with live recalculation.
- **Official Print & PDF Export**: Tuned `@media print` transcript layout formatted for standard A4 portrait pages with page breaks, crisp monochrome contrast, and zero navigation clutter.
- **Batch Class Printing**: 1-click batch generation of official consecutive report cards for an entire classroom or cohort.

### 4. 📊 High-DPI Analytics & Longitudinal Charts
- **Retina-Ready Native Canvas Engine**: Crisp rendering on 4K, OLED, and Retina displays via `window.devicePixelRatio` scaling with zero external library bloat.
- **Interactive Floating Tooltips**: Hover over data points, subject bars, or distribution bins to view exact percentages and cohort comparisons.
- **Longitudinal Term Trajectory**: Multi-term line graph tracking progression across Fall Term 1, Midterm Milestone, and Spring Term 2 against cohort averages.
- **Subject Proficiency vs. Cohort Benchmarks**: Side-by-side comparative bar chart analyzing individual competency against class averages.
- **Cohort Grade Distribution**: Dynamic bell curve histogram grouping student grades across distribution tiers.
- **Attendance vs. Academic Correlation**: Scatter plot with linear regression trendline correlating attendance percentage with final grade outcomes.

### 5. 💾 Data Hub (CSV & JSON) & Institutional Profile
- **Export Gradebook to CSV**: Generates download-ready CSV reports containing student IDs, names, classes, GPAs, percentages, ranks, and attendance records.
- **Full Database Backup (JSON)**: Single-click export of complete student cohorts, courses, institution settings, and custom grading scales.
- **Restore from Backup**: Upload previously exported JSON backup files to restore or migrate data seamlessly.
- **Multi-Level Class Architecture**: Full support for School Education (5th Class through 12th Class) and Undergraduate Engineering (B.Tech 1st Year through 4th Year).

---

## 🚀 Quick Start & Local Development

No build tools or bundlers required. Run with any modern HTTP server:

### Option 1: Using Node.js
```bash
npx serve .
```
Then navigate to `http://localhost:3000`.

### Option 2: Using Python
```bash
python -m http.server 8080
```
Then navigate to `http://localhost:8080`.

---

## 🌐 Deploy to Vercel

The project is pre-configured with a production-ready `vercel.json` featuring SPA routing rewrites, security headers, and static asset caching.

### Via Vercel CLI
```bash
npx vercel
```

### Via GitHub & Vercel Dashboard
1. Push this repository to GitHub.
2. In Vercel, click **Add New Project** and import the repository: `student-report-system`.
3. Keep default settings (Root directory `./`, Framework preset: **Other**).
4. Click **Deploy**.

---

## 📂 Project Architecture

```
student-report-system/
├── index.html       # Semantic HTML5 architecture, dialogs, role portals, and print templates
├── style.css        # MotionSites AI design system, glassmorphic tokens, and @media print
├── app.js           # Core state management, auth sessions, CRUD, Canvas charts, Data Hub
├── package.json     # Project metadata and quick start scripts
├── vercel.json      # Vercel deployment configuration, SPA rewrites, and security headers
└── README.md        # Comprehensive institutional documentation
```

---

## ⌨️ Accessibility & Shortcuts

- `/` : Instantly focus student search input
- `Ctrl + P` / `Cmd + P` : Print active official report card
- `Esc` : Close open dialog modals
- Full keyboard navigation with clear focus rings and WCAG AAA compliance.

---

## 📜 License
MIT License. Created for institutional educational management.
