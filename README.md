# EduMetrics Pro — Institutional Student Performance & Report Card Management System

An enterprise-grade educational management, grading calculation, official transcript generation, and performance analytics platform designed for K-12 schools, academies, and collegiate preparatory institutions.

---

## 🌟 Key Highlights & Capabilities

### 1. 🎓 Official Academic Report Cards & Transcripts
- **Institutional Identity & Customization**: Dynamic school title, accreditation subtitle, school crest, official verification seal (`★ VERIFIED ★`), and authorized signature blocks (Senior Academic Dean & Head of Institution).
- **Multi-Scale Evaluation Engine**: Live instant switching between 4 standard grading systems:
  - **Letter Grades**: A+ through F with color-coded badges
  - **Percentage**: 0.0% to 100.0% precision calculation
  - **4.0 GPA Standard**: Standard North American collegiate scale
  - **Standards-Based**: Level 4+ Exemplary down to Level 1 Novice
- **Threshold & Scale Customizer**: Configure custom minimum percentage cutoffs, GPA points, standards labels, and badge hex colors with live recalculation.
- **Official Print & PDF Export**: Highly tuned `@media print` transcript layout formatted for standard A4 portrait pages with page breaks, crisp monochrome/high-contrast styling, and no navigation clutter.
- **Batch Class Printing**: 1-click batch generation of official consecutive report cards for an entire classroom or cohort separated by page breaks for bulk printing.

### 2. 📝 Teacher Gradebook & Live Input Suite
- **Weighted Assessment Logic**: Standard institutional formula:
  $$\text{Final Course Grade} = (30\% \times \text{Coursework}) + (30\% \times \text{Midterm}) + (40\% \times \text{Final Exam})$$
- **Live Spreadsheet-Style Entry**: Real-time validation and instant recalculation of weighted scores and grade badges as scores are typed.
- **Curriculum & Subject Management (CRUD)**:
  - Add custom subjects per student or class (STEM, Humanities, Arts, Languages, etc.)
  - Delete or modify course instructors, department tags, and class averages
- **Attendance & Punctuality Logging**: Tracks days present, excused absences, unexcused absences, tardies, and behavioral notes.
- **Qualitative Faculty Remarks**: Individual course teacher observations and overall Dean/Counselor narrative appraisals.

### 3. 📊 High-DPI Analytics & Longitudinal Charts
- **Retina-Ready Native Canvas Engine**: Crisp rendering on 4K, OLED, and Retina displays via `window.devicePixelRatio` scaling with zero external chart library overhead.
- **Interactive Floating Tooltips**: Hover over data points, subject bars, or distribution bins to view exact percentages, benchmarks, and student comparisons.
- **Longitudinal Term Trajectory**: Multi-term line graph tracking historical progression across Fall Term 1, Midterm Milestone, and Spring Term 2 against cohort averages.
- **Subject Proficiency vs. Cohort Benchmarks**: Side-by-side comparative bar chart analyzing individual competency against class averages.
- **Cohort Grade Distribution**: Dynamic bell curve histogram grouping real student grades across `<70%`, `70-79%`, `80-89%`, `90-94%`, and `95-100%`.
- **Attendance vs. Academic Correlation**: Scatter plot with linear regression trendline correlating attendance percentage with final grade outcomes.

### 4. 👥 Role-Based Portals (Teacher, Student & Parent)
- **Teacher / Admin Portal**: Full unrestricted access to directory management, gradebook scoring, grading scale editor, institutional settings, and export hub.
- **Student Portal**: Student-friendly dashboard highlighting academic honors, extracurricular achievement badges, graduation diploma progress meter (credits completed, core track), and faculty feedback.
- **Parent / Guardian Portal**: Guardian dashboard with attendance overview, counselor feedback, and an **interactive digital acknowledgment signature form** that registers parent review date, relationship, and official verification hash on the transcript.
- **Conference Request System**: Allows parents to schedule 1-on-1 virtual or in-person consultations with faculty directly from the portal.

### 5. 💾 Data Hub (CSV & JSON) & Institutional Profile
- **Export Gradebook to CSV**: Generates download-ready CSV reports containing student IDs, names, classes, GPAs, percentages, ranks, attendance figures, and guardian details.
- **Full Database Backup (JSON)**: Single-click export of complete student cohorts, courses, institution settings, and custom grading scales.
- **Restore from Backup**: Upload previously exported JSON backup files to restore or migrate data seamlessly.
- **Demo Cohort Loader**: Populates a realistic sample cohort of 8 students across Grade 10-A, 10-B, and 11-A.
- **Institution Settings**: Configure school legal name, accreditation subtitle, academic year, dean name, principal name, and titles without modifying code.

### 6. 🎨 Modern Design System & Accessibility
- **Dark Mode & Light Mode**: Seamless dark theme with rich slate/indigo tones (`--bg-page: #0b0f19`), accessible contrast ratios, and persistence in `localStorage`.
- **Mobile Responsive Drawer**: Collapsible student directory sidebar with smooth slide-in animation and backdrop dismissal on tablets and mobile devices.
- **Keyboard Navigation**:
  - `/` : Instantly focus student search input
  - `Ctrl + P` / `Cmd + P` : Print active official report card
  - `Esc` : Close open dialog modals
- **Standards-Compliant Dialogs**: Native HTML5 `<dialog closedby="any">` with backdrop blur, light-dismiss fallbacks, and ARIA attributes.

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

Zero configuration required — deploy directly to Vercel:

### Via Vercel CLI
```bash
npx vercel
```

### Via GitHub & Vercel Dashboard
1. Push this repository to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Keep default settings (Root directory `./`, Framework preset: Other).
4. Click **Deploy**.

---

## 📂 Project Architecture

```
36-student-report-system/
├── index.html       # Semantic HTML5 architecture, dialogs, portals, and print templates
├── style.css        # Modern design system, dark mode tokens, animations, and @media print
├── app.js           # Core state management, CRUD, Retina Canvas chart engine, Data Hub
├── package.json     # Project metadata and quick start scripts
├── vercel.json      # Clean URL routing configuration
└── README.md        # Comprehensive institutional documentation
```

---

## 📜 License
MIT License. Created for institutional educational management.
