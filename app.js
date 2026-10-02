/**
 * EduMetrics Pro - Institutional Student Performance & Report Card Management System
 * Production-ready enterprise web application featuring:
 * - Real-time student performance tracking & cohort rank calculation
 * - Multi-scale evaluation engine (Percentage, Letter, 4.0 GPA, Standards-Based)
 * - Custom grading thresholds and grade band editor
 * - Live spreadsheet-style gradebook with subject management (CRUD)
 * - Full student directory management (Add, Edit, Delete, Filter, Sort)
 * - Institutional branding customizer (School name, crest, signatures, academic year)
 * - High-DPI Retina responsive Canvas analytics engine with interactive tooltips
 * - Student & Parent Portals with digital signature acknowledgment and conference booking
 * - Single & Batch print transcript compilation with dedicated page-break rules
 * - Data Hub with CSV export, JSON backup, and JSON restore
 * - Native dark mode support with localStorage persistence
 */

// Default Institutional Identity Profile
const DEFAULT_INSTITUTION = {
  name: 'St. Jude Academy of Science & Arts',
  subtitle: 'Accredited International College Preparatory Institution • Founded 1984',
  academicYear: '2025–2026',
  activeTerm: 'term2',
  termName: 'Term 2 (Spring 2026)',
  deanName: 'Dr. Marcus Sterling, Ph.D.',
  deanTitle: 'Senior Academic Dean',
  principalName: 'Eleanor Vance, M.Ed.',
  principalTitle: 'Head of Institution'
};

// Default Grading Scale Configuration
const DEFAULT_SCALE_CONFIG = [
  { grade: 'A+', min: 97, gpa: 4.0, standard: 'Exemplary (Level 4+)', color: '#065f46' },
  { grade: 'A',  min: 93, gpa: 4.0, standard: 'Exemplary (Level 4)',  color: '#047857' },
  { grade: 'A-', min: 90, gpa: 3.7, standard: 'Mastery (Level 4-)',   color: '#059669' },
  { grade: 'B+', min: 87, gpa: 3.3, standard: 'Proficient (Level 3+)',color: '#1d4ed8' },
  { grade: 'B',  min: 83, gpa: 3.0, standard: 'Proficient (Level 3)', color: '#2563eb' },
  { grade: 'B-', min: 80, gpa: 2.7, standard: 'Proficient (Level 3-)',color: '#3b82f6' },
  { grade: 'C+', min: 77, gpa: 2.3, standard: 'Developing (Level 2+)',color: '#b45309' },
  { grade: 'C',  min: 73, gpa: 2.0, standard: 'Developing (Level 2)', color: '#d97706' },
  { grade: 'D',  min: 60, gpa: 1.0, standard: 'Approaching (Level 1)',color: '#dc2626' },
  { grade: 'F',  min: 0,  gpa: 0.0, standard: 'Novice / Unsatisfactory', color: '#991b1b' }
];

// Rich Sample Cohort (8 Diverse Students across Grade 10-A, 10-B, and 11-A)
const INITIAL_STUDENTS = [
  {
    id: 'STU-10492',
    name: 'Sophia Chen',
    class: 'Grade 10-A',
    advisor: 'Dr. Marcus Sterling',
    honor: 'Honor Roll with Distinction',
    parentName: 'Arthur Chen',
    parentRelation: 'Father',
    parentAckDate: 'March 18, 2026',
    attendance: {
      present: 88,
      excused: 2,
      unexcused: 0,
      tardy: 1,
      totalDays: 90,
      notes: 'Student displays exemplary commitment to attendance and prompt arrivals.',
      terms: {
        term1: { present: 89, excused: 1, unexcused: 0, tardy: 0, totalDays: 90, notes: 'Unbroken attendance record.' },
        midterm: { present: 44, excused: 1, unexcused: 0, tardy: 1, totalDays: 45, notes: 'Consistently punctual.' },
        term2: { present: 88, excused: 2, unexcused: 0, tardy: 1, totalDays: 90, notes: 'Student displays exemplary commitment to attendance and prompt arrivals.' }
      }
    },
    counselorRemarks: 'Sophia continues to demonstrate intellectual curiosity and academic rigor across all disciplines. Her leadership in collaborative laboratory projects and debate sessions is exemplary. Keep up the distinguished focus!',
    historicalTerms: {
      term1: 93.4,
      midterm: 94.1,
      term2: 95.8
    },
    courses: [
      { id: 'cs101', name: 'Advanced Computer Science', dept: 'STEM', teacher: 'Prof. David Lin', coursework: 98, midterm: 96, exam: 99, classAvg: 88, remark: 'Exceptional algorithm design skills and independent programming initiative.' },
      { id: 'math102', name: 'AP Calculus BC', dept: 'Mathematics', teacher: 'Dr. Evelyn Reed', coursework: 96, midterm: 94, exam: 97, classAvg: 84, remark: 'Mastery of differential equations and rigorous analytical formulation.' },
      { id: 'phys103', name: 'Honors Physics II', dept: 'Science', teacher: 'Dr. Marcus Sterling', coursework: 94, midterm: 92, exam: 95, classAvg: 81, remark: 'Strong conceptual comprehension of thermodynamics and lab execution.' },
      { id: 'lit104', name: 'World Literature & Rhetoric', dept: 'Humanities', teacher: 'Ms. Clara Oswald', coursework: 92, midterm: 95, exam: 93, classAvg: 86, remark: 'Thoughtful essays with nuanced textual criticism and eloquent oral defense.' },
      { id: 'hist105', name: 'AP World History: Modern', dept: 'Social Sciences', teacher: 'Mr. Julian Vance', coursework: 91, midterm: 90, exam: 92, classAvg: 83, remark: 'Consistent synthesis of primary historical sources and comparative essays.' },
      { id: 'art106', name: 'Digital Media & Visual Design', dept: 'Fine Arts', teacher: 'Elena Rostova, MFA', coursework: 97, midterm: 95, exam: 98, classAvg: 90, remark: 'Innovative graphic compositions and outstanding creative storytelling.' }
    ]
  },
  {
    id: 'STU-10495',
    name: 'Marcus Vance',
    class: 'Grade 10-A',
    advisor: 'Dr. Marcus Sterling',
    honor: 'Principal\'s Honor Roll',
    parentName: 'Sarah Vance',
    parentRelation: 'Mother',
    parentAckDate: 'March 16, 2026',
    attendance: {
      present: 86,
      excused: 3,
      unexcused: 1,
      tardy: 2,
      totalDays: 90,
      notes: 'Good attendance overall with active classroom contributions.',
      terms: {
        term1: { present: 85, excused: 3, unexcused: 2, tardy: 1, totalDays: 90, notes: 'Steady progress.' },
        midterm: { present: 43, excused: 1, unexcused: 1, tardy: 1, totalDays: 45, notes: 'Participates actively.' },
        term2: { present: 86, excused: 3, unexcused: 1, tardy: 2, totalDays: 90, notes: 'Good attendance overall with active classroom contributions.' }
      }
    },
    counselorRemarks: 'Marcus shows great potential and natural problem-solving ability in physics and mathematics. Maintaining consistency in daily preparation will ensure top tier exam results.',
    historicalTerms: {
      term1: 88.2,
      midterm: 89.5,
      term2: 91.2
    },
    courses: [
      { id: 'cs101', name: 'Advanced Computer Science', dept: 'STEM', teacher: 'Prof. David Lin', coursework: 92, midterm: 90, exam: 94, classAvg: 88, remark: 'Great debugging techniques and active participation in coding hackathons.' },
      { id: 'math102', name: 'AP Calculus BC', dept: 'Mathematics', teacher: 'Dr. Evelyn Reed', coursework: 90, midterm: 88, exam: 92, classAvg: 84, remark: 'Sound grasp of integral concepts; recommended to double check calculation steps.' },
      { id: 'phys103', name: 'Honors Physics II', dept: 'Science', teacher: 'Dr. Marcus Sterling', coursework: 93, midterm: 91, exam: 94, classAvg: 81, remark: 'Intuitive lab instincts and excellent experimental data logging.' },
      { id: 'lit104', name: 'World Literature & Rhetoric', dept: 'Humanities', teacher: 'Ms. Clara Oswald', coursework: 86, midterm: 88, exam: 89, classAvg: 86, remark: 'Active participant in Socratic seminars with insightful viewpoints.' },
      { id: 'hist105', name: 'AP World History: Modern', dept: 'Social Sciences', teacher: 'Mr. Julian Vance', coursework: 89, midterm: 87, exam: 90, classAvg: 83, remark: 'Solid grasp of chronological milestones and geopolitics.' },
      { id: 'art106', name: 'Digital Media & Visual Design', dept: 'Fine Arts', teacher: 'Elena Rostova, MFA', coursework: 91, midterm: 92, exam: 93, classAvg: 90, remark: 'Creative video editing projects and strong presentation flair.' }
    ]
  },
  {
    id: 'STU-10499',
    name: 'Maya Lin',
    class: 'Grade 10-A',
    advisor: 'Dr. Marcus Sterling',
    honor: 'Honor Roll with Distinction',
    parentName: 'Daniel Lin',
    parentRelation: 'Father',
    parentAckDate: 'March 17, 2026',
    attendance: {
      present: 89,
      excused: 1,
      unexcused: 0,
      tardy: 0,
      totalDays: 90,
      notes: 'Punctual and conscientious attendance record.',
      terms: {
        term1: { present: 88, excused: 2, unexcused: 0, tardy: 0, totalDays: 90, notes: 'Very reliable.' },
        midterm: { present: 45, excused: 0, unexcused: 0, tardy: 0, totalDays: 45, notes: 'Perfect record.' },
        term2: { present: 89, excused: 1, unexcused: 0, tardy: 0, totalDays: 90, notes: 'Punctual and conscientious attendance record.' }
      }
    },
    counselorRemarks: 'Maya combines keen analytical curiosity with outstanding teamwork in collaborative research. An absolute asset to our STEM honors society.',
    historicalTerms: {
      term1: 94.2,
      midterm: 95.0,
      term2: 96.1
    },
    courses: [
      { id: 'cs101', name: 'Advanced Computer Science', dept: 'STEM', teacher: 'Prof. David Lin', coursework: 97, midterm: 96, exam: 98, classAvg: 88, remark: 'Demonstrates elegant code architecture and clean documentation.' },
      { id: 'math102', name: 'AP Calculus BC', dept: 'Mathematics', teacher: 'Dr. Evelyn Reed', coursework: 95, midterm: 97, exam: 96, classAvg: 84, remark: 'Superb problem-solving agility on advanced integration sets.' },
      { id: 'phys103', name: 'Honors Physics II', dept: 'Science', teacher: 'Dr. Marcus Sterling', coursework: 96, midterm: 94, exam: 97, classAvg: 81, remark: 'Exemplary physics experimentation and precision error analysis.' },
      { id: 'lit104', name: 'World Literature & Rhetoric', dept: 'Humanities', teacher: 'Ms. Clara Oswald', coursework: 94, midterm: 93, exam: 95, classAvg: 86, remark: 'Vivid and persuasive written discourse on classical tragedy.' },
      { id: 'hist105', name: 'AP World History: Modern', dept: 'Social Sciences', teacher: 'Mr. Julian Vance', coursework: 93, midterm: 95, exam: 94, classAvg: 83, remark: 'In-depth historical cross-comparisons and eloquent arguments.' },
      { id: 'art106', name: 'Digital Media & Visual Design', dept: 'Fine Arts', teacher: 'Elena Rostova, MFA', coursework: 96, midterm: 97, exam: 98, classAvg: 90, remark: 'Superior typography choice and polished responsive interface mockups.' }
    ]
  },
  {
    id: 'STU-10501',
    name: 'Elena Rostova Jr.',
    class: 'Grade 10-B',
    advisor: 'Ms. Clara Oswald',
    honor: 'Academic Merit Award',
    parentName: 'Dmitri Rostov',
    parentRelation: 'Father',
    parentAckDate: 'March 15, 2026',
    attendance: {
      present: 87,
      excused: 2,
      unexcused: 1,
      tardy: 0,
      totalDays: 90,
      notes: 'Punctual and conscientious attendance record.',
      terms: {
        term1: { present: 86, excused: 3, unexcused: 1, tardy: 0, totalDays: 90, notes: 'Steady presence.' },
        midterm: { present: 43, excused: 1, unexcused: 1, tardy: 0, totalDays: 45, notes: 'Active in class.' },
        term2: { present: 87, excused: 2, unexcused: 1, tardy: 0, totalDays: 90, notes: 'Punctual and conscientious attendance record.' }
      }
    },
    counselorRemarks: 'Elena is a phenomenal writer and critical thinker. Her historical essays have received inter-scholastic commendations.',
    historicalTerms: {
      term1: 89.0,
      midterm: 91.0,
      term2: 93.5
    },
    courses: [
      { id: 'cs101', name: 'Advanced Computer Science', dept: 'STEM', teacher: 'Prof. David Lin', coursework: 88, midterm: 86, exam: 90, classAvg: 88, remark: 'Steadily advancing in data structures and logic algorithms.' },
      { id: 'math102', name: 'AP Calculus BC', dept: 'Mathematics', teacher: 'Dr. Evelyn Reed', coursework: 86, midterm: 89, exam: 88, classAvg: 84, remark: 'Diligent effort in homework exercises with positive progress.' },
      { id: 'phys103', name: 'Honors Physics II', dept: 'Science', teacher: 'Dr. Marcus Sterling', coursework: 89, midterm: 87, exam: 91, classAvg: 81, remark: 'Clear scientific summaries and active lab collaborator.' },
      { id: 'lit104', name: 'World Literature & Rhetoric', dept: 'Humanities', teacher: 'Ms. Clara Oswald', coursework: 98, midterm: 96, exam: 99, classAvg: 86, remark: 'Exceptional literary analysis; essays demonstrate university-level critical depth.' },
      { id: 'hist105', name: 'AP World History: Modern', dept: 'Social Sciences', teacher: 'Mr. Julian Vance', coursework: 96, midterm: 97, exam: 98, classAvg: 83, remark: 'Comprehensive knowledge of historical treatises and excellent debate skills.' },
      { id: 'art106', name: 'Digital Media & Visual Design', dept: 'Fine Arts', teacher: 'Elena Rostova, MFA', coursework: 95, midterm: 96, exam: 97, classAvg: 90, remark: 'Refined aesthetic sensibility and mastery of digital layout principles.' }
    ]
  },
  {
    id: 'STU-10508',
    name: 'David Kim',
    class: 'Grade 10-B',
    advisor: 'Ms. Clara Oswald',
    honor: 'Good Academic Standing',
    parentName: 'Grace Kim',
    parentRelation: 'Mother',
    parentAckDate: 'March 17, 2026',
    attendance: {
      present: 84,
      excused: 4,
      unexcused: 2,
      tardy: 3,
      totalDays: 90,
      notes: 'Attendance needs slight vigilance regarding morning punctuality.',
      terms: {
        term1: { present: 82, excused: 5, unexcused: 3, tardy: 4, totalDays: 90, notes: 'Monitoring attendance.' },
        midterm: { present: 41, excused: 2, unexcused: 2, tardy: 2, totalDays: 45, notes: 'Showing improvement.' },
        term2: { present: 84, excused: 4, unexcused: 2, tardy: 3, totalDays: 90, notes: 'Attendance needs slight vigilance regarding morning punctuality.' }
      }
    },
    counselorRemarks: 'David brings energetic enthusiasm to technical subjects. Establishing a structured daily homework routine will elevate his humanities performance.',
    historicalTerms: {
      term1: 82.5,
      midterm: 84.0,
      term2: 86.4
    },
    courses: [
      { id: 'cs101', name: 'Advanced Computer Science', dept: 'STEM', teacher: 'Prof. David Lin', coursework: 94, midterm: 91, exam: 95, classAvg: 88, remark: 'Brilliant software development acumen; built excellent class project.' },
      { id: 'math102', name: 'AP Calculus BC', dept: 'Mathematics', teacher: 'Dr. Evelyn Reed', coursework: 85, midterm: 82, exam: 86, classAvg: 84, remark: 'Shows intuitive mathematical comprehension; needs more time on problem sets.' },
      { id: 'phys103', name: 'Honors Physics II', dept: 'Science', teacher: 'Dr. Marcus Sterling', coursework: 88, midterm: 84, exam: 87, classAvg: 81, remark: 'Strong hands-on laboratory aptitude and mechanics grasp.' },
      { id: 'lit104', name: 'World Literature & Rhetoric', dept: 'Humanities', teacher: 'Ms. Clara Oswald', coursework: 81, midterm: 83, exam: 82, classAvg: 86, remark: 'Contributes original perspectives during discussions.' },
      { id: 'hist105', name: 'AP World History: Modern', dept: 'Social Sciences', teacher: 'Mr. Julian Vance', coursework: 82, midterm: 80, exam: 84, classAvg: 83, remark: 'Solid engagement with coursework; focus on essay synthesis.' },
      { id: 'art106', name: 'Digital Media & Visual Design', dept: 'Fine Arts', teacher: 'Elena Rostova, MFA', coursework: 89, midterm: 90, exam: 91, classAvg: 90, remark: 'Clean visual concepts and great audio-video production work.' }
    ]
  },
  {
    id: 'STU-10515',
    name: 'Aisha Patel',
    class: 'Grade 11-A',
    advisor: 'Dr. Evelyn Reed',
    honor: 'Honor Roll with Distinction',
    parentName: 'Rajesh Patel',
    parentRelation: 'Father',
    parentAckDate: 'March 14, 2026',
    attendance: {
      present: 89,
      excused: 1,
      unexcused: 0,
      tardy: 0,
      totalDays: 90,
      notes: 'Exemplary punctuality and uninterrupted attendance.',
      terms: {
        term1: { present: 90, excused: 0, unexcused: 0, tardy: 0, totalDays: 90, notes: 'Flawless attendance.' },
        midterm: { present: 45, excused: 0, unexcused: 0, tardy: 0, totalDays: 45, notes: 'Always on time.' },
        term2: { present: 89, excused: 1, unexcused: 0, tardy: 0, totalDays: 90, notes: 'Exemplary punctuality and uninterrupted attendance.' }
      }
    },
    counselorRemarks: 'Aisha exemplifies academic excellence, serving as mathematics study circle leader while actively captaining the robotics team.',
    historicalTerms: {
      term1: 96.0,
      midterm: 96.8,
      term2: 97.4
    },
    courses: [
      { id: 'cs101', name: 'Advanced Computer Science', dept: 'STEM', teacher: 'Prof. David Lin', coursework: 99, midterm: 98, exam: 100, classAvg: 88, remark: 'Perfect score on final algorithmic capstone project. Brilliant coder.' },
      { id: 'math102', name: 'AP Calculus BC', dept: 'Mathematics', teacher: 'Dr. Evelyn Reed', coursework: 98, midterm: 97, exam: 98, classAvg: 84, remark: 'Remarkable speed and analytical rigor. Top score in AP mock trials.' },
      { id: 'phys103', name: 'Honors Physics II', dept: 'Science', teacher: 'Dr. Marcus Sterling', coursework: 97, midterm: 96, exam: 98, classAvg: 81, remark: 'Outstanding lab reports; models theoretical proofs with clarity.' },
      { id: 'lit104', name: 'World Literature & Rhetoric', dept: 'Humanities', teacher: 'Ms. Clara Oswald', coursework: 94, midterm: 95, exam: 95, classAvg: 86, remark: 'Perceptive rhetorical arguments and thorough textual citations.' },
      { id: 'hist105', name: 'AP World History: Modern', dept: 'Social Sciences', teacher: 'Mr. Julian Vance', coursework: 95, midterm: 94, exam: 96, classAvg: 83, remark: 'Thorough historiographical analysis and active participation.' },
      { id: 'art106', name: 'Digital Media & Visual Design', dept: 'Fine Arts', teacher: 'Elena Rostova, MFA', coursework: 96, midterm: 95, exam: 97, classAvg: 90, remark: 'Vibrant digital portfolios combining computational art and UI design.' }
    ]
  },
  {
    id: 'STU-10522',
    name: 'Lucas Martinez',
    class: 'Grade 11-A',
    advisor: 'Dr. Evelyn Reed',
    honor: 'Academic Merit Award',
    parentName: 'Maria Martinez',
    parentRelation: 'Mother',
    parentAckDate: 'March 12, 2026',
    attendance: {
      present: 85,
      excused: 3,
      unexcused: 2,
      tardy: 1,
      totalDays: 90,
      notes: 'Steady attendance; active participant in laboratory practicums.',
      terms: {
        term1: { present: 84, excused: 4, unexcused: 2, tardy: 1, totalDays: 90, notes: 'Steady participant.' },
        midterm: { present: 42, excused: 2, unexcused: 1, tardy: 1, totalDays: 45, notes: 'Good lab work.' },
        term2: { present: 85, excused: 3, unexcused: 2, tardy: 1, totalDays: 90, notes: 'Steady attendance; active participant in laboratory practicums.' }
      }
    },
    counselorRemarks: 'Lucas demonstrates strong spatial thinking and scientific curiosity. Continues to make substantial strides in analytical writing.',
    historicalTerms: {
      term1: 87.5,
      midterm: 89.0,
      term2: 90.6
    },
    courses: [
      { id: 'cs101', name: 'Advanced Computer Science', dept: 'STEM', teacher: 'Prof. David Lin', coursework: 91, midterm: 89, exam: 93, classAvg: 88, remark: 'Enthusiastic and reliable collaborative teammate in lab projects.' },
      { id: 'math102', name: 'AP Calculus BC', dept: 'Mathematics', teacher: 'Dr. Evelyn Reed', coursework: 89, midterm: 90, exam: 91, classAvg: 84, remark: 'Good analytical precision; confident in differentiation techniques.' },
      { id: 'phys103', name: 'Honors Physics II', dept: 'Science', teacher: 'Dr. Marcus Sterling', coursework: 95, midterm: 93, exam: 96, classAvg: 81, remark: 'One of the strongest hands-on physics builders in the cohort.' },
      { id: 'lit104', name: 'World Literature & Rhetoric', dept: 'Humanities', teacher: 'Ms. Clara Oswald', coursework: 86, midterm: 87, exam: 88, classAvg: 86, remark: 'Demonstrates clear thesis development in analytical essays.' },
      { id: 'hist105', name: 'AP World History: Modern', dept: 'Social Sciences', teacher: 'Mr. Julian Vance', coursework: 88, midterm: 86, exam: 89, classAvg: 83, remark: 'Consistent understanding of global economic revolutions.' },
      { id: 'art106', name: 'Digital Media & Visual Design', dept: 'Fine Arts', teacher: 'Elena Rostova, MFA', coursework: 94, midterm: 93, exam: 95, classAvg: 90, remark: 'Striking 3D modeling skills and architectural visualization rendering.' }
    ]
  },
  {
    id: 'STU-10528',
    name: 'James Wilson',
    class: 'Grade 11-A',
    advisor: 'Dr. Evelyn Reed',
    honor: 'Principal\'s Honor Roll',
    parentName: 'Robert Wilson',
    parentRelation: 'Father',
    parentAckDate: 'March 19, 2026',
    attendance: {
      present: 87,
      excused: 2,
      unexcused: 1,
      tardy: 1,
      totalDays: 90,
      notes: 'Reliable and consistent attendance record.',
      terms: {
        term1: { present: 86, excused: 3, unexcused: 1, tardy: 1, totalDays: 90, notes: 'Solid attendance.' },
        midterm: { present: 44, excused: 1, unexcused: 0, tardy: 1, totalDays: 45, notes: 'Very engaged.' },
        term2: { present: 87, excused: 2, unexcused: 1, tardy: 1, totalDays: 90, notes: 'Reliable and consistent attendance record.' }
      }
    },
    counselorRemarks: 'James exhibits commendable discipline in social sciences and advanced coding. His capstone work has demonstrated thorough research integrity.',
    historicalTerms: {
      term1: 91.0,
      midterm: 92.5,
      term2: 93.8
    },
    courses: [
      { id: 'cs101', name: 'Advanced Computer Science', dept: 'STEM', teacher: 'Prof. David Lin', coursework: 95, midterm: 93, exam: 96, classAvg: 88, remark: 'Excellent algorithmic optimizations and network programming tests.' },
      { id: 'math102', name: 'AP Calculus BC', dept: 'Mathematics', teacher: 'Dr. Evelyn Reed', coursework: 92, midterm: 91, exam: 93, classAvg: 84, remark: 'Strong analytical reasoning on series and sequences.' },
      { id: 'phys103', name: 'Honors Physics II', dept: 'Science', teacher: 'Dr. Marcus Sterling', coursework: 93, midterm: 92, exam: 94, classAvg: 81, remark: 'Thoughtful lab write-ups with solid quantitative analysis.' },
      { id: 'lit104', name: 'World Literature & Rhetoric', dept: 'Humanities', teacher: 'Ms. Clara Oswald', coursework: 90, midterm: 92, exam: 91, classAvg: 86, remark: 'Strong interpretive voice during Socratic roundtables.' },
      { id: 'hist105', name: 'AP World History: Modern', dept: 'Social Sciences', teacher: 'Mr. Julian Vance', coursework: 96, midterm: 95, exam: 97, classAvg: 83, remark: 'Top analytical essay on comparative industrial revolutions.' },
      { id: 'art106', name: 'Digital Media & Visual Design', dept: 'Fine Arts', teacher: 'Elena Rostova, MFA', coursework: 93, midterm: 94, exam: 95, classAvg: 90, remark: 'Creative motion graphics and clean layout balance.' }
    ]
  }
];

class EduMetricsApp {
  constructor() {
    this.students = this.loadStudents();
    this.scaleConfig = this.loadScaleConfig();
    this.institution = this.loadInstitution();
    
    this.selectedStudentId = this.students[0]?.id || 'STU-10492';
    this.currentGradingFormat = localStorage.getItem('edumetrics_format') || 'letter';
    this.currentRole = 'teacher'; // teacher | student | parent
    this.activeTab = 'reportView';
    this.activeReportTerm = 'term2'; // term2 | midterm | term1 | cumulative
    this.activeEditorTerm = 'term2';
    this.sortMode = 'name-asc';

    this.chartTooltipData = null;
    this.pendingDeleteAction = null;

    this.initElements();
    this.initTheme();
    this.bindEvents();
    this.setupDialogBackdrops();
    this.setupCanvasObservers();
    this.render();
  }

  // --- Persistence & Storage ---
  loadStudents() {
    try {
      const stored = localStorage.getItem('edumetrics_students');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return JSON.parse(JSON.stringify(INITIAL_STUDENTS));
    } catch (e) {
      console.warn('Failed to parse students from localStorage', e);
      return JSON.parse(JSON.stringify(INITIAL_STUDENTS));
    }
  }

  saveStudents() {
    try {
      localStorage.setItem('edumetrics_students', JSON.stringify(this.students));
    } catch (e) {
      console.error('Failed to save students to localStorage', e);
    }
  }

  loadScaleConfig() {
    try {
      const stored = localStorage.getItem('edumetrics_scale_config');
      return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_SCALE_CONFIG));
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_SCALE_CONFIG));
    }
  }

  saveScaleConfig() {
    try {
      localStorage.setItem('edumetrics_scale_config', JSON.stringify(this.scaleConfig));
    } catch (e) {
      console.error('Failed to save scale config', e);
    }
  }

  loadInstitution() {
    try {
      const stored = localStorage.getItem('edumetrics_institution');
      return stored ? JSON.parse(stored) : { ...DEFAULT_INSTITUTION };
    } catch (e) {
      return { ...DEFAULT_INSTITUTION };
    }
  }

  saveInstitution() {
    try {
      localStorage.setItem('edumetrics_institution', JSON.stringify(this.institution));
    } catch (e) {
      console.error('Failed to save institution config', e);
    }
  }

  initTheme() {
    const savedTheme = localStorage.getItem('edumetrics_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

    // React to OS theme change dynamically if not explicitly pinned
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('edumetrics_theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        if (this.activeTab === 'analyticsView') this.renderCharts();
      }
    });
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('edumetrics_theme', next);
    this.showToast(`Switched to ${next === 'dark' ? 'Dark' : 'Light'} theme`);
    if (this.activeTab === 'analyticsView') this.renderCharts();
  }

  // --- Element Bindings ---
  initElements() {
    // Header & Brand
    this.brandSchoolTitle = document.getElementById('brandSchoolTitle');
    this.brandSchoolSub = document.getElementById('brandSchoolSub');
    this.mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
    this.sidebarBackdrop = document.getElementById('sidebarBackdrop');
    this.studentSidebar = document.getElementById('studentSidebar');

    this.gradingScaleSelect = document.getElementById('gradingScaleSelect');
    this.configScaleBtn = document.getElementById('configScaleBtn');
    this.schoolSettingsBtn = document.getElementById('schoolSettingsBtn');
    this.dataCenterBtn = document.getElementById('dataCenterBtn');
    this.themeToggleBtn = document.getElementById('themeToggleBtn');
    this.printReportBtn = document.getElementById('printReportBtn');
    this.batchPrintBtn = document.getElementById('batchPrintBtn');
    this.roleBtns = document.querySelectorAll('.role-btn');

    // Sidebar & Filters
    this.studentsListContainer = document.getElementById('studentsListContainer');
    this.studentSearchInput = document.getElementById('studentSearchInput');
    this.classFilterSelect = document.getElementById('classFilterSelect');
    this.studentSortSelect = document.getElementById('studentSortSelect');
    this.addStudentModalBtn = document.getElementById('addStudentModalBtn');
    this.totalEnrolledCount = document.getElementById('totalEnrolledCount');
    this.classAvgVal = document.getElementById('classAvgVal');
    this.classAttendanceVal = document.getElementById('classAttendanceVal');

    // Tabs & Panels
    this.tabBtns = document.querySelectorAll('.tab-btn');
    this.viewPanels = document.querySelectorAll('.view-panel');

    // View 1 Report Card Controls
    this.reportTermSelector = document.getElementById('reportTermSelector');
    this.editStudentQuickBtn = document.getElementById('editStudentQuickBtn');

    // View 2 Teacher Gradebook Controls
    this.editorTermSelector = document.getElementById('editorTermSelector');
    this.addSubjectBtn = document.getElementById('addSubjectBtn');
    this.saveGradesBtn = document.getElementById('saveGradesBtn');
    this.resetGradesBtn = document.getElementById('resetGradesBtn');

    // View 4 Parent Portal Controls
    this.parentAckForm = document.getElementById('parentAckForm');
    this.parentAckConfirmationMsg = document.getElementById('parentAckConfirmationMsg');
    this.openConferenceModalBtn = document.getElementById('openConferenceModalBtn');

    // Modals
    this.scaleConfigModal = document.getElementById('scaleConfigModal');
    this.closeScaleModalBtn = document.getElementById('closeScaleModalBtn');
    this.saveScaleConfigBtn = document.getElementById('saveScaleConfigBtn');
    this.resetScaleDefaultBtn = document.getElementById('resetScaleDefaultBtn');
    this.thresholdsTableBody = document.getElementById('thresholdsTableBody');

    this.newStudentModal = document.getElementById('newStudentModal');
    this.closeNewStudentModalBtn = document.getElementById('closeNewStudentModalBtn');
    this.cancelNewStudentBtn = document.getElementById('cancelNewStudentBtn');
    this.newStudentForm = document.getElementById('newStudentForm');

    this.editStudentModal = document.getElementById('editStudentModal');
    this.closeEditStudentModalBtn = document.getElementById('closeEditStudentModalBtn');
    this.cancelEditStudentBtn = document.getElementById('cancelEditStudentBtn');
    this.editStudentForm = document.getElementById('editStudentForm');
    this.deleteStudentBtn = document.getElementById('deleteStudentBtn');

    this.addSubjectModal = document.getElementById('addSubjectModal');
    this.closeAddSubjectModalBtn = document.getElementById('closeAddSubjectModalBtn');
    this.cancelAddSubjectBtn = document.getElementById('cancelAddSubjectBtn');
    this.addSubjectForm = document.getElementById('addSubjectForm');

    this.institutionSettingsModal = document.getElementById('institutionSettingsModal');
    this.closeInstModalBtn = document.getElementById('closeInstModalBtn');
    this.institutionSettingsForm = document.getElementById('institutionSettingsForm');
    this.resetInstDefaultsBtn = document.getElementById('resetInstDefaultsBtn');

    this.dataCenterModal = document.getElementById('dataCenterModal');
    this.closeDataCenterModalBtn = document.getElementById('closeDataCenterModalBtn');
    this.closeDataCenterBtn = document.getElementById('closeDataCenterBtn');
    this.downloadCsvBtn = document.getElementById('downloadCsvBtn');
    this.downloadJsonBackupBtn = document.getElementById('downloadJsonBackupBtn');
    this.importJsonFileInput = document.getElementById('importJsonFileInput');
    this.loadSampleDataBtn = document.getElementById('loadSampleDataBtn');

    this.batchPrintModal = document.getElementById('batchPrintModal');
    this.closeBatchPrintModalBtn = document.getElementById('closeBatchPrintModalBtn');
    this.cancelBatchPrintBtn = document.getElementById('cancelBatchPrintBtn');
    this.batchClassSelect = document.getElementById('batchClassSelect');
    this.batchPreviewMetaText = document.getElementById('batchPreviewMetaText');
    this.executeBatchPrintBtn = document.getElementById('executeBatchPrintBtn');
    this.batchPrintContainer = document.getElementById('batchPrintContainer');

    this.conferenceModal = document.getElementById('conferenceModal');
    this.closeConferenceModalBtn = document.getElementById('closeConferenceModalBtn');
    this.cancelConferenceBtn = document.getElementById('cancelConferenceBtn');
    this.conferenceForm = document.getElementById('conferenceForm');

    this.confirmDeleteModal = document.getElementById('confirmDeleteModal');
    this.closeConfirmDeleteModalBtn = document.getElementById('closeConfirmDeleteModalBtn');
    this.cancelConfirmDeleteBtn = document.getElementById('cancelConfirmDeleteBtn');
    this.proceedConfirmDeleteBtn = document.getElementById('proceedConfirmDeleteBtn');
    this.confirmDeleteMessage = document.getElementById('confirmDeleteMessage');

    // Tooltip & Toast
    this.chartTooltip = document.getElementById('chartTooltip');
    this.toastNotification = document.getElementById('toastNotification');

    if (this.gradingScaleSelect) {
      this.gradingScaleSelect.value = this.currentGradingFormat;
    }
  }

  // --- Setup Modal Light-Dismiss Fallbacks ---
  setupDialogBackdrops() {
    const dialogs = document.querySelectorAll('dialog');
    dialogs.forEach(dialog => {
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
          const rect = dialog.getBoundingClientRect();
          const isInDialog = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
          );
          if (!isInDialog) {
            dialog.close();
          }
        }
      });
    });
  }

  // --- Canvas Observers for High-DPI & Responsive Resize ---
  setupCanvasObservers() {
    this.setupChartInteractions();
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => {
        if (this.activeTab === 'analyticsView') {
          this.renderCharts();
        }
      });
      document.querySelectorAll('.canvas-wrapper').forEach(wrapper => {
        resizeObserver.observe(wrapper);
      });
    }
  }

  setupChartInteractions() {
    this.chartTargets = { trajectory: [], subjectBars: [], histogram: [], correlation: [] };

    const bindHover = (canvasId, targetKey, formatFn) => {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;

      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const targets = this.chartTargets[targetKey] || [];
        const match = targets.find(t => {
          if (t.type === 'circle') {
            const dx = mouseX - t.x;
            const dy = mouseY - t.y;
            return Math.sqrt(dx * dx + dy * dy) <= (t.r || 14);
          } else if (t.type === 'rect') {
            return mouseX >= t.x && mouseX <= t.x + t.w && mouseY >= t.y && mouseY <= t.y + t.h;
          }
          return false;
        });

        if (match && this.chartTooltip) {
          this.chartTooltip.innerHTML = formatFn(match);
          this.chartTooltip.style.left = `${e.clientX}px`;
          this.chartTooltip.style.top = `${e.clientY - 12}px`;
          this.chartTooltip.classList.add('visible');
        } else {
          this.hideChartTooltip();
        }
      });

      canvas.addEventListener('mouseleave', () => this.hideChartTooltip());
    };

    bindHover('termTrendCanvas', 'trajectory', (m) => `<strong>${m.label}</strong><br>Student: ${m.studentVal.toFixed(1)}%<br>Cohort Avg: ${m.classVal.toFixed(1)}%`);
    bindHover('subjectBarCanvas', 'subjectBars', (m) => `<strong>${m.course.name}</strong> (${m.course.dept})<br>${m.typeLabel}: <strong>${m.score}%</strong>`);
    bindHover('distributionCanvas', 'histogram', (m) => `<strong>Band: ${m.label}</strong><br>${m.count} student(s) in cohort`);
    bindHover('correlationCanvas', 'correlation', (m) => `<strong>${m.student.name}</strong> (${m.student.class})<br>Attendance: ${m.attRate.toFixed(1)}%<br>Grade Avg: ${m.score.toFixed(1)}%`);
  }

  hideChartTooltip() {
    if (this.chartTooltip) {
      this.chartTooltip.classList.remove('visible');
    }
  }

  // --- Event Bindings ---
  bindEvents() {
    // Theme Toggle
    this.themeToggleBtn?.addEventListener('click', () => this.toggleTheme());

    // Mobile Sidebar Drawer
    this.mobileSidebarToggle?.addEventListener('click', () => {
      this.studentSidebar?.classList.toggle('drawer-open');
      this.sidebarBackdrop?.classList.toggle('active');
    });
    this.sidebarBackdrop?.addEventListener('click', () => {
      this.studentSidebar?.classList.remove('drawer-open');
      this.sidebarBackdrop?.classList.remove('active');
    });

    // Grading Scale Selector
    this.gradingScaleSelect?.addEventListener('change', (e) => {
      this.currentGradingFormat = e.target.value;
      localStorage.setItem('edumetrics_format', this.currentGradingFormat);
      this.showToast(`Grading format: ${this.getFormatDisplayName()}`);
      this.render();
    });

    // Scale Configuration Modal
    this.configScaleBtn?.addEventListener('click', () => {
      this.populateScaleModal();
      this.scaleConfigModal.showModal();
    });
    this.closeScaleModalBtn?.addEventListener('click', () => this.scaleConfigModal.close());
    this.resetScaleDefaultBtn?.addEventListener('click', () => {
      this.scaleConfig = JSON.parse(JSON.stringify(DEFAULT_SCALE_CONFIG));
      this.populateScaleModal();
      this.showToast('Reset scale to academic standards.');
    });
    this.saveScaleConfigBtn?.addEventListener('click', () => {
      this.saveScaleModalInputs();
      this.scaleConfigModal.close();
      this.saveScaleConfig();
      this.showToast('Custom grading scale thresholds applied!');
      this.render();
    });

    // Role Switching
    this.roleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.roleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentRole = btn.dataset.role;
        this.handleRoleChange();
      });
    });

    // Tab Switching
    this.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.tabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const targetId = btn.dataset.target;
        this.activeTab = targetId;
        this.viewPanels.forEach(p => p.classList.remove('active'));
        document.getElementById(targetId)?.classList.add('active');

        if (targetId === 'analyticsView') {
          setTimeout(() => this.renderCharts(), 50);
        }
      });
    });

    // Print Report
    this.printReportBtn?.addEventListener('click', () => {
      document.body.classList.remove('is-batch-printing');
      window.print();
    });

    // Batch Print Modal & Execution
    this.batchPrintBtn?.addEventListener('click', () => {
      this.updateBatchPrintPreview();
      this.batchPrintModal.showModal();
    });
    this.batchClassSelect?.addEventListener('change', () => this.updateBatchPrintPreview());
    this.closeBatchPrintModalBtn?.addEventListener('click', () => this.batchPrintModal.close());
    this.cancelBatchPrintBtn?.addEventListener('click', () => this.batchPrintModal.close());
    this.executeBatchPrintBtn?.addEventListener('click', () => this.executeBatchPrint());

    // Institution Settings Modal
    this.schoolSettingsBtn?.addEventListener('click', () => {
      this.populateInstitutionModal();
      this.institutionSettingsModal.showModal();
    });
    this.closeInstModalBtn?.addEventListener('click', () => this.institutionSettingsModal.close());
    this.resetInstDefaultsBtn?.addEventListener('click', () => {
      this.institution = { ...DEFAULT_INSTITUTION };
      this.populateInstitutionModal();
      this.showToast('Reset school profile to default.');
    });
    this.institutionSettingsForm?.addEventListener('submit', (e) => this.handleSaveInstitution(e));

    // Data Hub Modal
    this.dataCenterBtn?.addEventListener('click', () => this.dataCenterModal.showModal());
    this.closeDataCenterModalBtn?.addEventListener('click', () => this.dataCenterModal.close());
    this.closeDataCenterBtn?.addEventListener('click', () => this.dataCenterModal.close());
    this.downloadCsvBtn?.addEventListener('click', () => this.exportGradebookCSV());
    this.downloadJsonBackupBtn?.addEventListener('click', () => this.exportJsonBackup());
    this.importJsonFileInput?.addEventListener('change', (e) => this.importJsonBackup(e));
    this.loadSampleDataBtn?.addEventListener('click', () => this.restoreSampleCohort());

    // Search, Class Filter & Sorting
    this.studentSearchInput?.addEventListener('input', () => this.renderStudentList());
    this.classFilterSelect?.addEventListener('change', () => this.renderStudentList());
    this.studentSortSelect?.addEventListener('change', (e) => {
      this.sortMode = e.target.value;
      this.renderStudentList();
    });

    // Quick Edit Student Profile Button
    this.editStudentQuickBtn?.addEventListener('click', () => {
      const student = this.getSelectedStudent();
      if (student) this.openEditStudentModal(student);
    });

    // New Student Modal
    this.addStudentModalBtn?.addEventListener('click', () => {
      this.newStudentForm.reset();
      this.newStudentModal.showModal();
    });
    this.closeNewStudentModalBtn?.addEventListener('click', () => this.newStudentModal.close());
    this.cancelNewStudentBtn?.addEventListener('click', () => this.newStudentModal.close());
    this.newStudentForm?.addEventListener('submit', (e) => this.handleNewStudentSubmit(e));

    // Edit Student Modal
    this.closeEditStudentModalBtn?.addEventListener('click', () => this.editStudentModal.close());
    this.cancelEditStudentBtn?.addEventListener('click', () => this.editStudentModal.close());
    this.editStudentForm?.addEventListener('submit', (e) => this.handleEditStudentSubmit(e));
    this.deleteStudentBtn?.addEventListener('click', () => {
      const student = this.getSelectedStudent();
      if (student) {
        this.promptConfirmDelete(`student "${student.name}" (${student.id})`, () => {
          this.deleteCurrentStudent();
        });
      }
    });

    // Add Subject Modal
    this.addSubjectBtn?.addEventListener('click', () => {
      this.addSubjectForm.reset();
      this.addSubjectModal.showModal();
    });
    this.closeAddSubjectModalBtn?.addEventListener('click', () => this.addSubjectModal.close());
    this.cancelAddSubjectBtn?.addEventListener('click', () => this.addSubjectModal.close());
    this.addSubjectForm?.addEventListener('submit', (e) => this.handleAddSubjectSubmit(e));

    // Report Term Switching
    this.reportTermSelector?.addEventListener('change', (e) => {
      this.activeReportTerm = e.target.value;
      this.renderReportCard();
      this.showToast(`Viewing: ${e.target.options[e.target.selectedIndex].text}`);
    });

    // Editor Term Switching
    this.editorTermSelector?.addEventListener('change', (e) => {
      this.activeEditorTerm = e.target.value;
      this.renderTeacherInput();
      this.showToast(`Editing gradebook for: ${e.target.options[e.target.selectedIndex].text}`);
    });

    // Save & Reset Teacher Input
    this.saveGradesBtn?.addEventListener('click', () => this.handleSaveTeacherInput());
    this.resetGradesBtn?.addEventListener('click', () => {
      this.renderTeacherInput();
      this.showToast('Reverted unsaved gradebook modifications.');
    });

    // Parent Acknowledgment Form
    this.parentAckForm?.addEventListener('submit', (e) => this.handleParentAckSubmit(e));

    // Conference Modal
    this.openConferenceModalBtn?.addEventListener('click', () => {
      const today = new Date().toISOString().split('T')[0];
      const dateInp = document.getElementById('confPreferredDate');
      if (dateInp) dateInp.min = today;
      this.conferenceModal.showModal();
    });
    this.closeConferenceModalBtn?.addEventListener('click', () => this.conferenceModal.close());
    this.cancelConferenceBtn?.addEventListener('click', () => this.conferenceModal.close());
    this.conferenceForm?.addEventListener('submit', (e) => this.handleConferenceSubmit(e));

    // Confirm Delete Dialog Buttons
    this.closeConfirmDeleteModalBtn?.addEventListener('click', () => this.confirmDeleteModal.close());
    this.cancelConfirmDeleteBtn?.addEventListener('click', () => this.confirmDeleteModal.close());
    this.proceedConfirmDeleteBtn?.addEventListener('click', () => {
      if (typeof this.pendingDeleteAction === 'function') {
        this.pendingDeleteAction();
      }
      this.confirmDeleteModal.close();
      this.pendingDeleteAction = null;
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Focus search on '/'
      if (e.key === '/' && document.activeElement !== this.studentSearchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        this.studentSearchInput?.focus();
      }
      // Print shortcut
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        this.printReportBtn?.click();
      }
    });

    // Window Resize chart re-render
    window.addEventListener('resize', () => {
      if (this.activeTab === 'analyticsView') {
        this.renderCharts();
      }
    });
  }

  // --- Confirmation Dialog Helper ---
  promptConfirmDelete(itemDescription, onConfirm) {
    this.confirmDeleteMessage.textContent = `Are you sure you want to delete ${itemDescription}? This action will permanently remove associated grade records.`;
    this.pendingDeleteAction = onConfirm;
    this.confirmDeleteModal.showModal();
  }

  // --- Role Management ---
  handleRoleChange() {
    this.showToast(`Switched view to: ${this.currentRole.toUpperCase()} Portal`);
    const student = this.getSelectedStudent();

    if (this.currentRole === 'parent') {
      document.getElementById('tabPortalBtn')?.click();
      document.getElementById('portalActiveSessionUser').innerHTML = `Active Guardian Session: <strong>${student?.parentName || 'Parent / Guardian'}</strong>`;
    } else if (this.currentRole === 'student') {
      document.getElementById('tabReportBtn')?.click();
    } else {
      // Teacher / Admin
      document.getElementById('tabReportBtn')?.click();
    }
  }

  getSelectedStudent() {
    return this.students.find(s => s.id === this.selectedStudentId) || this.students[0];
  }

  getFormatDisplayName() {
    switch (this.currentGradingFormat) {
      case 'percentage': return 'Percentage (0-100%)';
      case 'letter': return 'Letter Grades (A+ to F)';
      case 'gpa': return 'GPA (4.0 Scale)';
      case 'standards': return 'Standards-Based Evaluation';
      default: return 'Letter Grades';
    }
  }

  // Calculate weighted course score: 30% coursework + 30% midterm + 40% exam
  calculateWeightedScore(course) {
    const cw = Number(course.coursework) || 0;
    const mt = Number(course.midterm) || 0;
    const ex = Number(course.exam) || 0;
    const weighted = (cw * 0.3) + (mt * 0.3) + (ex * 0.4);
    return Math.round(weighted * 10) / 10;
  }

  // Convert raw percentage to current active grading format
  convertScore(percentage) {
    const item = this.scaleConfig.find(sc => percentage >= sc.min) || this.scaleConfig[this.scaleConfig.length - 1];

    switch (this.currentGradingFormat) {
      case 'percentage':
        return {
          display: `${percentage.toFixed(1)}%`,
          sub: item.grade,
          grade: item.grade,
          color: item.color,
          badgeClass: this.getBadgeClass(item.grade)
        };
      case 'letter':
        return {
          display: item.grade,
          sub: `${percentage.toFixed(1)}%`,
          grade: item.grade,
          color: item.color,
          badgeClass: this.getBadgeClass(item.grade)
        };
      case 'gpa':
        return {
          display: item.gpa.toFixed(2),
          sub: item.grade,
          grade: item.grade,
          color: item.color,
          badgeClass: this.getBadgeClass(item.grade)
        };
      case 'standards':
        return {
          display: item.standard,
          sub: `${percentage.toFixed(1)}% (${item.grade})`,
          grade: item.grade,
          color: item.color,
          badgeClass: this.getBadgeClass(item.grade)
        };
      default:
        return { display: item.grade, sub: `${percentage}%`, grade: item.grade, color: item.color, badgeClass: 'grade-b' };
    }
  }

  getBadgeClass(grade) {
    if (grade.startsWith('A')) return 'grade-a';
    if (grade.startsWith('B')) return 'grade-b';
    if (grade.startsWith('C')) return 'grade-c';
    return 'grade-d';
  }

  // Compute student weighted averages and GPA
  calculateStudentAverages(student) {
    if (!student.courses || student.courses.length === 0) {
      return { rawAvg: 0, gpa: 0, letter: 'N/A' };
    }
    const scores = student.courses.map(c => this.calculateWeightedScore(c));
    const rawAvg = scores.reduce((a, b) => a + b, 0) / scores.length;
    
    const gpas = scores.map(s => {
      const match = this.scaleConfig.find(sc => s >= sc.min) || this.scaleConfig[this.scaleConfig.length - 1];
      return match.gpa;
    });
    const avgGpa = gpas.reduce((a, b) => a + b, 0) / gpas.length;
    const letterMatch = this.scaleConfig.find(sc => rawAvg >= sc.min) || this.scaleConfig[this.scaleConfig.length - 1];

    return {
      rawAvg: Math.round(rawAvg * 10) / 10,
      gpa: Math.round(avgGpa * 100) / 100,
      letter: letterMatch.grade
    };
  }

  // --- Master Render ---
  render() {
    this.updateInstitutionHeader();
    this.renderStudentList();
    this.renderReportCard();
    this.renderTeacherInput();
    this.renderSidebarStats();
    if (this.activeTab === 'analyticsView') {
      this.renderCharts();
    }
  }

  updateInstitutionHeader() {
    if (this.brandSchoolSub) this.brandSchoolSub.textContent = this.institution.name;
    const wm = document.getElementById('watermarkSchoolName');
    if (wm) wm.textContent = this.institution.name.toUpperCase();
    const title = document.getElementById('docSchoolTitle');
    if (title) title.textContent = this.institution.name;
    const sub = document.getElementById('docSchoolSub');
    if (sub) sub.textContent = this.institution.subtitle;
    const yr = document.getElementById('docAcademicYearMeta');
    if (yr) yr.textContent = `Official Academic Transcript • Academic Year ${this.institution.academicYear}`;
    const deanSig = document.getElementById('advisorSigName');
    if (deanSig) deanSig.textContent = this.institution.deanName;
    const deanTitle = document.getElementById('advisorSigTitle');
    if (deanTitle) deanTitle.textContent = this.institution.deanTitle;
    const princSig = document.getElementById('principalSigName');
    if (princSig) princSig.textContent = this.institution.principalName;
    const princTitle = document.getElementById('principalSigTitle');
    if (princTitle) princTitle.textContent = this.institution.principalTitle;
  }

  renderSidebarStats() {
    this.totalEnrolledCount.textContent = this.students.length;

    let totalCohortRaw = 0;
    let totalCohortAtt = 0;

    this.students.forEach(s => {
      const avgs = this.calculateStudentAverages(s);
      totalCohortRaw += avgs.rawAvg;
      const totalDays = s.attendance.totalDays || 90;
      const attRate = (s.attendance.present / totalDays) * 100;
      totalCohortAtt += attRate;
    });

    const cohortAvg = this.students.length ? (totalCohortRaw / this.students.length).toFixed(1) : '0.0';
    const cohortAtt = this.students.length ? (totalCohortAtt / this.students.length).toFixed(1) : '0.0';

    this.classAvgVal.textContent = `${cohortAvg}%`;
    this.classAttendanceVal.textContent = `${cohortAtt}%`;
  }

  renderStudentList() {
    const search = this.studentSearchInput.value.toLowerCase().trim();
    const classFilter = this.classFilterSelect.value;

    let filtered = this.students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(search) || 
                            student.id.toLowerCase().includes(search) || 
                            student.advisor.toLowerCase().includes(search);
      const matchesClass = (classFilter === 'all') || (student.class === classFilter);
      return matchesSearch && matchesClass;
    });

    // Apply Sorting
    filtered.sort((a, b) => {
      if (this.sortMode === 'name-asc') return a.name.localeCompare(b.name);
      if (this.sortMode === 'rank-asc') {
        return this.calculateStudentAverages(b).rawAvg - this.calculateStudentAverages(a).rawAvg;
      }
      if (this.sortMode === 'att-desc') {
        const rateA = (a.attendance.present / (a.attendance.totalDays || 90));
        const rateB = (b.attendance.present / (b.attendance.totalDays || 90));
        return rateB - rateA;
      }
      return 0;
    });

    this.studentsListContainer.innerHTML = '';

    if (filtered.length === 0) {
      this.studentsListContainer.innerHTML = `<li style="padding: 1.25rem 0.5rem; color: var(--text-muted); text-align: center; font-size: 0.8rem;">No students found matching filters</li>`;
      return;
    }

    filtered.forEach(student => {
      const avgs = this.calculateStudentAverages(student);
      const initials = student.name.split(' ').map(p => p[0]).join('').substring(0, 2);
      const isActive = student.id === this.selectedStudentId;

      const li = document.createElement('li');
      li.className = `student-list-item ${isActive ? 'active' : ''}`;
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', isActive ? 'true' : 'false');
      li.tabIndex = 0;

      li.innerHTML = `
        <div class="student-item-avatar">${initials}</div>
        <div class="student-item-details">
          <div class="student-item-name">${student.name}</div>
          <div class="student-item-meta">
            <span>${student.id}</span>
            <span>&bull;</span>
            <span>${student.class}</span>
          </div>
        </div>
        <div class="student-item-badge">
          ${this.currentGradingFormat === 'gpa' ? avgs.gpa.toFixed(2) + ' GPA' : (this.currentGradingFormat === 'percentage' ? avgs.rawAvg + '%' : avgs.letter)}
        </div>
        <div class="student-item-actions">
          <button class="student-quick-action-btn edit-act-btn" title="Edit Profile" aria-label="Edit Student Profile">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
        </div>
      `;

      li.addEventListener('click', (e) => {
        if (e.target.closest('.edit-act-btn')) {
          this.openEditStudentModal(student);
          return;
        }
        this.selectedStudentId = student.id;
        // On mobile, close drawer upon selection
        this.studentSidebar?.classList.remove('drawer-open');
        this.sidebarBackdrop?.classList.remove('active');
        this.render();
      });

      li.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          this.selectedStudentId = student.id;
          this.render();
        }
      });

      this.studentsListContainer.appendChild(li);
    });
  }

  // --- View 1: Report Card Rendering ---
  renderReportCard() {
    const student = this.getSelectedStudent();
    if (!student) return;

    const avgs = this.calculateStudentAverages(student);
    const initials = student.name.split(' ').map(p => p[0]).join('').substring(0, 2);

    // Header Bio
    document.getElementById('studentAvatarInitials').textContent = initials;
    document.getElementById('reportStudentName').textContent = student.name;
    document.getElementById('reportStudentHonor').textContent = student.honor || 'Good Academic Standing';
    document.getElementById('reportStudentID').textContent = student.id;
    document.getElementById('reportStudentClass').textContent = student.class;
    document.getElementById('reportStudentAdvisor').textContent = student.advisor;

    document.getElementById('activeFormatBadge').textContent = `Format: ${this.getFormatDisplayName()}`;

    // Quick KPIs
    const scoreValEl = document.getElementById('reportScoreValue');
    const scoreSubEl = document.getElementById('reportScoreSub');
    const scoreLabelEl = document.getElementById('reportScoreLabel');

    if (this.currentGradingFormat === 'gpa') {
      scoreLabelEl.textContent = 'Cumulative GPA';
      scoreValEl.textContent = `${avgs.gpa.toFixed(2)} / 4.0`;
      scoreSubEl.textContent = `${avgs.rawAvg}% Raw Weighted`;
    } else if (this.currentGradingFormat === 'percentage') {
      scoreLabelEl.textContent = 'Overall Percentage';
      scoreValEl.textContent = `${avgs.rawAvg.toFixed(1)}%`;
      scoreSubEl.textContent = `Grade Equivalent: ${avgs.letter}`;
    } else if (this.currentGradingFormat === 'standards') {
      const match = this.scaleConfig.find(sc => avgs.rawAvg >= sc.min) || this.scaleConfig[this.scaleConfig.length - 1];
      scoreLabelEl.textContent = 'Standards Assessment';
      scoreValEl.textContent = match.standard.split(' ')[0];
      scoreSubEl.textContent = `${match.standard} (${avgs.rawAvg}%)`;
    } else {
      scoreLabelEl.textContent = 'Overall Letter Evaluation';
      scoreValEl.textContent = `${avgs.letter} Grade`;
      scoreSubEl.textContent = `${avgs.rawAvg}% Raw (${avgs.gpa.toFixed(2)} GPA)`;
    }

    // Rank calculation within cohort
    const allRanks = this.students.map(s => ({
      id: s.id,
      avg: this.calculateStudentAverages(s).rawAvg
    })).sort((a, b) => b.avg - a.avg);
    const myRank = allRanks.findIndex(r => r.id === student.id) + 1;
    document.getElementById('reportClassRank').innerHTML = `#${myRank} <span class="kpi-sub-inline">of ${this.students.length}</span>`;
    
    const percentile = Math.max(1, Math.round((myRank / this.students.length) * 100));
    document.getElementById('reportRankPercentile').textContent = `Top ${percentile}% of Cohort`;

    // Attendance KPI
    const totalDays = student.attendance.totalDays || 90;
    const attPercent = ((student.attendance.present / totalDays) * 100).toFixed(1);
    document.getElementById('reportAttendanceRate').textContent = `${attPercent}%`;
    document.getElementById('reportAttendanceSub').textContent = `${student.attendance.present} of ${totalDays} Days Present`;

    // Academic Scores Table Body
    const tbody = document.getElementById('scoresTableBody');
    tbody.innerHTML = '';

    student.courses.forEach(c => {
      const weighted = this.calculateWeightedScore(c);
      const converted = this.convertScore(weighted);
      const diff = (weighted - c.classAvg).toFixed(1);
      const isPositive = diff >= 0;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div class="course-title">${c.name}</div>
          <div class="course-dept">${c.dept}</div>
        </td>
        <td>${c.teacher}</td>
        <td style="text-align: center; font-family: var(--font-mono);">${c.coursework}%</td>
        <td style="text-align: center; font-family: var(--font-mono);">${c.midterm}%</td>
        <td style="text-align: center; font-family: var(--font-mono);">${c.exam}%</td>
        <td style="text-align: center;">
          <span class="score-badge ${converted.badgeClass}">${converted.display}</span>
        </td>
        <td style="text-align: center; font-family: var(--font-mono); color: var(--text-muted);">${c.classAvg}%</td>
        <td style="text-align: center;">
          <span style="font-size: 0.75rem; font-weight: 700; color: ${isPositive ? 'var(--success)' : 'var(--warning)'};">
            ${isPositive ? '+' : ''}${diff}%
          </span>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Summary Foot Row
    const tfoot = document.getElementById('scoresTableFoot');
    if (tfoot) {
      tfoot.innerHTML = `
        <tr>
          <td colspan="2"><strong>Cumulative Term Summary</strong></td>
          <td style="text-align: center; font-family: var(--font-mono);">30% Wtd</td>
          <td style="text-align: center; font-family: var(--font-mono);">30% Wtd</td>
          <td style="text-align: center; font-family: var(--font-mono);">40% Wtd</td>
          <td style="text-align: center;">
            <strong style="color: var(--primary);">${this.currentGradingFormat === 'gpa' ? avgs.gpa.toFixed(2) + ' GPA' : (this.currentGradingFormat === 'percentage' ? avgs.rawAvg + '%' : avgs.letter)}</strong>
          </td>
          <td style="text-align: center; font-family: var(--font-mono); color: var(--text-muted);">${this.classAvgVal.textContent}</td>
          <td style="text-align: center; color: var(--success); font-weight: 700;">Good</td>
        </tr>
      `;
    }

    // Faculty Remarks Cards
    const remarksGrid = document.getElementById('subjectRemarksList');
    remarksGrid.innerHTML = '';
    student.courses.forEach(c => {
      const card = document.createElement('div');
      card.className = 'subject-remark-card';
      card.innerHTML = `
        <div class="remark-card-header">
          <span class="remark-course-name">${c.name}</span>
          <span class="remark-teacher">${c.teacher}</span>
        </div>
        <div class="remark-card-body">"${c.remark || 'Demonstrates attentive engagement and steady course performance.'}"</div>
      `;
      remarksGrid.appendChild(card);
    });

    // Attendance Breakdown Box
    document.getElementById('attendanceProgressFill').style.width = `${attPercent}%`;
    document.getElementById('attPresent').textContent = student.attendance.present;
    document.getElementById('attExcused').textContent = student.attendance.excused;
    document.getElementById('attUnexcused').textContent = student.attendance.unexcused;
    document.getElementById('attTardy').textContent = student.attendance.tardy;
    document.getElementById('attSummaryText').textContent = student.attendance.notes;

    // Counselor Remarks Box
    document.getElementById('counselorRemarks').textContent = `"${student.counselorRemarks}"`;

    // Parent Acknowledgment Footer & Portal
    const ackDate = student.parentAckDate || 'Pending Guardian Sign-Off';
    const parentName = student.parentName || 'Parent / Guardian';
    const isAck = student.parentAckDate && student.parentAckDate !== 'Pending';

    const ackDot = document.getElementById('ackStatusDot');
    if (ackDot) {
      ackDot.className = `status-indicator-dot ${isAck ? 'online' : 'pending'}`;
    }
    document.getElementById('parentAckStatusText').textContent = isAck 
      ? `Parent Acknowledged Online on ${ackDate} by ${parentName}`
      : `Parent Digital Acknowledgment Pending for ${parentName}`;

    document.getElementById('verifyCodeText').textContent = `EDUMET-${student.id.replace('STU-', '')}-${avgs.rawAvg.toString().replace('.', '')}X`;

    // Portal greeting
    document.getElementById('portalGreetingName').textContent = `${student.name.split(' ')[1] || student.name} Family`;
    if (document.getElementById('parentNameInput') && student.parentName) {
      document.getElementById('parentNameInput').value = student.parentName;
    }
  }

  // --- View 2: Teacher Input Gradebook ---
  renderTeacherInput() {
    const student = this.getSelectedStudent();
    if (!student) return;

    document.getElementById('editorStudentName').textContent = student.name;
    document.getElementById('editorStudentID').textContent = student.id;
    document.getElementById('editorStudentClass').textContent = student.class;

    const tbody = document.getElementById('editorGradesTableBody');
    tbody.innerHTML = '';

    student.courses.forEach((c, idx) => {
      const weighted = this.calculateWeightedScore(c);
      const converted = this.convertScore(weighted);

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div class="course-title">${c.name}</div>
          <div class="course-dept">${c.dept}</div>
        </td>
        <td><small class="text-muted">${c.teacher}</small></td>
        <td style="text-align: center;">
          <input type="number" min="0" max="100" class="form-control input-score-sm input-cw" data-idx="${idx}" value="${c.coursework}" aria-label="Coursework score">
        </td>
        <td style="text-align: center;">
          <input type="number" min="0" max="100" class="form-control input-score-sm input-mt" data-idx="${idx}" value="${c.midterm}" aria-label="Midterm score">
        </td>
        <td style="text-align: center;">
          <input type="number" min="0" max="100" class="form-control input-score-sm input-ex" data-idx="${idx}" value="${c.exam}" aria-label="Final Exam score">
        </td>
        <td style="font-family: var(--font-mono); font-weight: 700; text-align: center;">
          <span class="live-weighted-val" data-idx="${idx}">${weighted}%</span>
        </td>
        <td style="text-align: center;">
          <span class="score-badge ${converted.badgeClass} live-converted-val" data-idx="${idx}">${converted.display}</span>
        </td>
        <td>
          <input type="text" class="form-control input-remark" data-idx="${idx}" value="${c.remark || ''}" style="width: 100%; min-width: 220px;" placeholder="Teacher observation...">
        </td>
        <td style="text-align: center;">
          <button type="button" class="delete-row-btn" data-idx="${idx}" title="Remove Subject" aria-label="Delete ${c.name}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Real-time live recalculation on inputs
    const updateRow = (idx) => {
      const cwInp = tbody.querySelector(`.input-cw[data-idx="${idx}"]`);
      const mtInp = tbody.querySelector(`.input-mt[data-idx="${idx}"]`);
      const exInp = tbody.querySelector(`.input-ex[data-idx="${idx}"]`);

      const cw = Number(cwInp.value) || 0;
      const mt = Number(mtInp.value) || 0;
      const ex = Number(exInp.value) || 0;

      // Range check
      cwInp.classList.toggle('error', cw < 0 || cw > 100);
      mtInp.classList.toggle('error', mt < 0 || mt > 100);
      exInp.classList.toggle('error', ex < 0 || ex > 100);

      const weighted = Math.round(((cw * 0.3) + (mt * 0.3) + (ex * 0.4)) * 10) / 10;
      const converted = this.convertScore(weighted);

      const weightEl = tbody.querySelector(`.live-weighted-val[data-idx="${idx}"]`);
      const convEl = tbody.querySelector(`.live-converted-val[data-idx="${idx}"]`);
      if (weightEl) weightEl.textContent = `${weighted}%`;
      if (convEl) {
        convEl.textContent = converted.display;
        convEl.className = `score-badge ${converted.badgeClass} live-converted-val`;
      }
    };

    tbody.querySelectorAll('.input-score-sm').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = e.target.dataset.idx;
        updateRow(idx);
      });
    });

    // Delete subject row buttons
    tbody.querySelectorAll('.delete-row-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = Number(e.currentTarget.dataset.idx);
        const course = student.courses[idx];
        if (course) {
          this.promptConfirmDelete(`subject "${course.name}" for ${student.name}`, () => {
            student.courses.splice(idx, 1);
            this.saveStudents();
            this.render();
            this.showToast(`Removed subject ${course.name}`);
          });
        }
      });
    });

    // Attendance inputs
    document.getElementById('inputDaysPresent').value = student.attendance.present;
    document.getElementById('inputDaysExcused').value = student.attendance.excused;
    document.getElementById('inputDaysUnexcused').value = student.attendance.unexcused;
    document.getElementById('inputDaysTardy').value = student.attendance.tardy;
    document.getElementById('inputAttNote').value = student.attendance.notes;

    // Counselor remarks & honor badge
    document.getElementById('inputCounselorRemarks').value = student.counselorRemarks || '';
    document.getElementById('inputHonorBadge').value = student.honor || 'Honor Roll with Distinction';
  }

  handleSaveTeacherInput() {
    const student = this.getSelectedStudent();
    if (!student) return;

    const tbody = document.getElementById('editorGradesTableBody');
    student.courses.forEach((c, idx) => {
      const cw = Number(tbody.querySelector(`.input-cw[data-idx="${idx}"]`)?.value);
      const mt = Number(tbody.querySelector(`.input-mt[data-idx="${idx}"]`)?.value);
      const ex = Number(tbody.querySelector(`.input-ex[data-idx="${idx}"]`)?.value);
      const remark = tbody.querySelector(`.input-remark[data-idx="${idx}"]`)?.value;

      c.coursework = isNaN(cw) ? c.coursework : Math.min(100, Math.max(0, cw));
      c.midterm = isNaN(mt) ? c.midterm : Math.min(100, Math.max(0, mt));
      c.exam = isNaN(ex) ? c.exam : Math.min(100, Math.max(0, ex));
      if (remark !== undefined) c.remark = remark;
    });

    // Attendance
    student.attendance.present = Number(document.getElementById('inputDaysPresent').value) || 0;
    student.attendance.excused = Number(document.getElementById('inputDaysExcused').value) || 0;
    student.attendance.unexcused = Number(document.getElementById('inputDaysUnexcused').value) || 0;
    student.attendance.tardy = Number(document.getElementById('inputDaysTardy').value) || 0;
    student.attendance.notes = document.getElementById('inputAttNote').value;

    // Counselor & Honor
    student.counselorRemarks = document.getElementById('inputCounselorRemarks').value;
    student.honor = document.getElementById('inputHonorBadge').value;

    // Update historical term 2 calculation
    const avgs = this.calculateStudentAverages(student);
    if (!student.historicalTerms) student.historicalTerms = { term1: 88, midterm: 90, term2: 92 };
    student.historicalTerms.term2 = avgs.rawAvg;

    this.saveStudents();
    this.showToast('Gradebook & student evaluation successfully saved!');
    this.render();
  }

  // --- Student CRUD Operations ---
  handleNewStudentSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('newStudentFullName').value.trim();
    const id = document.getElementById('newStudentID').value.trim();
    const gradeClass = document.getElementById('newStudentGradeClass').value;
    const advisor = document.getElementById('newStudentAdvisor').value.trim() || this.institution.deanName;
    const parentName = document.getElementById('newStudentParentName').value.trim() || 'Parent of ' + name;
    const parentRelation = document.getElementById('newStudentParentRelation').value;

    if (!name || !id) {
      alert('Please provide student full name and ID.');
      return;
    }

    // Check duplicate ID
    if (this.students.some(s => s.id === id)) {
      alert(`Student ID "${id}" is already assigned to another student. Please choose a unique ID.`);
      return;
    }

    const newStudent = {
      id,
      name,
      class: gradeClass,
      advisor,
      honor: 'Good Academic Standing',
      parentName,
      parentRelation,
      parentAckDate: 'Pending',
      attendance: {
        present: 86,
        excused: 2,
        unexcused: 1,
        tardy: 1,
        totalDays: 90,
        notes: 'Newly enrolled student in current academic term.'
      },
      counselorRemarks: 'New student enrolled with satisfactory placement evaluation.',
      historicalTerms: {
        term1: 86.0,
        midterm: 88.0,
        term2: 89.5
      },
      courses: [
        { id: 'cs101', name: 'Advanced Computer Science', dept: 'STEM', teacher: 'Prof. David Lin', coursework: 90, midterm: 88, exam: 91, classAvg: 88, remark: 'Active engagement in introductory coding modules.' },
        { id: 'math102', name: 'AP Calculus BC', dept: 'Mathematics', teacher: 'Dr. Evelyn Reed', coursework: 86, midterm: 85, exam: 87, classAvg: 84, remark: 'Shows solid groundwork in algebraic manipulation.' },
        { id: 'phys103', name: 'Honors Physics II', dept: 'Science', teacher: 'Dr. Marcus Sterling', coursework: 88, midterm: 86, exam: 89, classAvg: 81, remark: 'Attentive and constructive lab partner.' },
        { id: 'lit104', name: 'World Literature & Rhetoric', dept: 'Humanities', teacher: 'Ms. Clara Oswald', coursework: 87, midterm: 88, exam: 89, classAvg: 86, remark: 'Clear argumentative formulation in essays.' },
        { id: 'hist105', name: 'AP World History: Modern', dept: 'Social Sciences', teacher: 'Mr. Julian Vance', coursework: 86, midterm: 84, exam: 87, classAvg: 83, remark: 'Good analytical engagement with textbook material.' },
        { id: 'art106', name: 'Digital Media & Visual Design', dept: 'Fine Arts', teacher: 'Elena Rostova, MFA', coursework: 91, midterm: 92, exam: 93, classAvg: 90, remark: 'Creative concepts and enthusiastic participation.' }
      ]
    };

    this.students.unshift(newStudent);
    this.selectedStudentId = id;
    this.saveStudents();

    this.newStudentModal.close();
    this.newStudentForm.reset();
    this.showToast(`Enrolled student ${name} (${id})`);
    this.render();
  }

  openEditStudentModal(student) {
    document.getElementById('editStudentFullName').value = student.name;
    document.getElementById('editStudentID').value = student.id;
    document.getElementById('editStudentGradeClass').value = student.class;
    document.getElementById('editStudentAdvisor').value = student.advisor;
    document.getElementById('editStudentParentName').value = student.parentName || '';
    document.getElementById('editStudentParentRelation').value = student.parentRelation || 'Father';
    document.getElementById('editStudentHonor').value = student.honor || 'Good Academic Standing';

    this.editStudentModal.showModal();
  }

  handleEditStudentSubmit(e) {
    e.preventDefault();
    const student = this.getSelectedStudent();
    if (!student) return;

    student.name = document.getElementById('editStudentFullName').value.trim();
    student.class = document.getElementById('editStudentGradeClass').value;
    student.advisor = document.getElementById('editStudentAdvisor').value.trim();
    student.parentName = document.getElementById('editStudentParentName').value.trim();
    student.parentRelation = document.getElementById('editStudentParentRelation').value;
    student.honor = document.getElementById('editStudentHonor').value;

    this.saveStudents();
    this.editStudentModal.close();
    this.showToast(`Updated student profile for ${student.name}`);
    this.render();
  }

  deleteCurrentStudent() {
    const student = this.getSelectedStudent();
    if (!student) return;

    const idx = this.students.findIndex(s => s.id === student.id);
    if (idx !== -1) {
      const deletedName = student.name;
      this.students.splice(idx, 1);
      if (this.students.length > 0) {
        this.selectedStudentId = this.students[0].id;
      }
      this.saveStudents();
      this.editStudentModal.close();
      this.showToast(`Removed student record: ${deletedName}`);
      this.render();
    }
  }

  // --- Add Subject to Curriculum ---
  handleAddSubjectSubmit(e) {
    e.preventDefault();
    const student = this.getSelectedStudent();
    if (!student) return;

    const name = document.getElementById('newSubjectName').value.trim();
    const dept = document.getElementById('newSubjectDept').value;
    const teacher = document.getElementById('newSubjectTeacher').value.trim();
    const classAvg = Number(document.getElementById('newSubjectClassAvg').value) || 85;
    const cw = Number(document.getElementById('newSubjectCw').value) || 90;
    const mt = Number(document.getElementById('newSubjectMt').value) || 88;
    const ex = Number(document.getElementById('newSubjectEx').value) || 90;
    const remark = document.getElementById('newSubjectRemark').value.trim() || 'Active participation in coursework.';

    const newCourse = {
      id: 'sub_' + Date.now(),
      name,
      dept,
      teacher,
      coursework: Math.min(100, Math.max(0, cw)),
      midterm: Math.min(100, Math.max(0, mt)),
      exam: Math.min(100, Math.max(0, ex)),
      classAvg,
      remark
    };

    student.courses.push(newCourse);
    this.saveStudents();
    this.addSubjectModal.close();
    this.addSubjectForm.reset();
    this.showToast(`Added ${name} to ${student.name}'s curriculum`);
    this.render();
  }

  // --- Institution Configuration ---
  populateInstitutionModal() {
    document.getElementById('instNameInput').value = this.institution.name;
    document.getElementById('instSubInput').value = this.institution.subtitle;
    document.getElementById('instYearInput').value = this.institution.academicYear;
    document.getElementById('instActiveTermInput').value = this.institution.termName;
    document.getElementById('instDeanNameInput').value = this.institution.deanName;
    document.getElementById('instDeanTitleInput').value = this.institution.deanTitle;
    document.getElementById('instPrincipalNameInput').value = this.institution.principalName;
    document.getElementById('instPrincipalTitleInput').value = this.institution.principalTitle;
  }

  handleSaveInstitution(e) {
    e.preventDefault();
    this.institution.name = document.getElementById('instNameInput').value.trim();
    this.institution.subtitle = document.getElementById('instSubInput').value.trim();
    this.institution.academicYear = document.getElementById('instYearInput').value.trim();
    this.institution.termName = document.getElementById('instActiveTermInput').value.trim();
    this.institution.deanName = document.getElementById('instDeanNameInput').value.trim();
    this.institution.deanTitle = document.getElementById('instDeanTitleInput').value.trim();
    this.institution.principalName = document.getElementById('instPrincipalNameInput').value.trim();
    this.institution.principalTitle = document.getElementById('instPrincipalTitleInput').value.trim();

    this.saveInstitution();
    this.institutionSettingsModal.close();
    this.showToast('Institutional profile updated successfully!');
    this.render();
  }

  // --- Scale Thresholds Customizer ---
  populateScaleModal() {
    this.thresholdsTableBody.innerHTML = '';
    this.scaleConfig.forEach((item, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong style="color: ${item.color}">${item.grade}</strong></td>
        <td>
          <input type="number" min="0" max="100" class="form-control select-sm scale-min-input" data-index="${index}" value="${item.min}" style="width: 70px; text-align: center;">
        </td>
        <td>
          <input type="number" step="0.1" min="0" max="4.0" class="form-control select-sm scale-gpa-input" data-index="${index}" value="${item.gpa}" style="width: 70px; text-align: center;">
        </td>
        <td>
          <input type="text" class="form-control select-sm scale-std-input" data-index="${index}" value="${item.standard}" style="width: 170px;">
        </td>
        <td>
          <input type="color" class="scale-color-input" data-index="${index}" value="${item.color}" style="border: none; width: 34px; height: 28px; cursor: pointer; border-radius: 4px; background: transparent;">
        </td>
      `;
      this.thresholdsTableBody.appendChild(tr);
    });
  }

  saveScaleModalInputs() {
    const minInputs = this.thresholdsTableBody.querySelectorAll('.scale-min-input');
    const gpaInputs = this.thresholdsTableBody.querySelectorAll('.scale-gpa-input');
    const stdInputs = this.thresholdsTableBody.querySelectorAll('.scale-std-input');
    const colorInputs = this.thresholdsTableBody.querySelectorAll('.scale-color-input');

    this.scaleConfig.forEach((item, i) => {
      if (minInputs[i]) item.min = Number(minInputs[i].value);
      if (gpaInputs[i]) item.gpa = Number(gpaInputs[i].value);
      if (stdInputs[i]) item.standard = stdInputs[i].value;
      if (colorInputs[i]) item.color = colorInputs[i].value;
    });

    this.scaleConfig.sort((a, b) => b.min - a.min);
  }

  // --- Parent Acknowledgment & Conferences ---
  handleParentAckSubmit(e) {
    e.preventDefault();
    const student = this.getSelectedStudent();
    if (!student) return;

    const parentName = document.getElementById('parentNameInput').value.trim();
    const relation = document.getElementById('parentRelationship').value;
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    student.parentName = parentName;
    student.parentRelation = relation;
    student.parentAckDate = today;
    this.saveStudents();

    this.parentAckConfirmationMsg.classList.remove('hidden');
    setTimeout(() => this.parentAckConfirmationMsg.classList.add('hidden'), 4500);
    this.showToast('Guardian digital signature registered on official transcript!');
    this.renderReportCard();
  }

  handleConferenceSubmit(e) {
    e.preventDefault();
    const student = this.getSelectedStudent();
    const teacher = document.getElementById('confTeacherSelect').value;
    const date = document.getElementById('confPreferredDate').value;
    const time = document.getElementById('confPreferredTime').value;

    this.conferenceModal.close();
    this.conferenceForm.reset();
    this.showToast(`Conference requested with ${teacher} on ${date} at ${time}. Faculty notified!`);
  }

  // --- Batch Printing Class Reports ---
  updateBatchPrintPreview() {
    const selectedClass = this.batchClassSelect.value;
    const count = selectedClass === 'all' 
      ? this.students.length 
      : this.students.filter(s => s.class === selectedClass).length;
    this.batchPreviewMetaText.textContent = `Ready to compile ${count} official student report card${count === 1 ? '' : 's'} for print/PDF export.`;
  }

  executeBatchPrint() {
    const selectedClass = this.batchClassSelect.value;
    const targets = selectedClass === 'all' 
      ? this.students 
      : this.students.filter(s => s.class === selectedClass);

    if (targets.length === 0) {
      alert('No students found in selected class.');
      return;
    }

    // Build consecutive printable transcripts
    this.batchPrintContainer.innerHTML = '';
    targets.forEach((student, index) => {
      const pageDiv = document.createElement('div');
      pageDiv.className = 'batch-print-page';
      
      const avgs = this.calculateStudentAverages(student);
      const initials = student.name.split(' ').map(p => p[0]).join('').substring(0, 2);
      const allRanks = this.students.map(s => ({ id: s.id, avg: this.calculateStudentAverages(s).rawAvg })).sort((a, b) => b.avg - a.avg);
      const myRank = allRanks.findIndex(r => r.id === student.id) + 1;
      const totalDays = student.attendance.totalDays || 90;
      const attPct = ((student.attendance.present / totalDays) * 100).toFixed(1);

      let courseRows = '';
      student.courses.forEach(c => {
        const weighted = this.calculateWeightedScore(c);
        const converted = this.convertScore(weighted);
        courseRows += `
          <tr>
            <td><strong>${c.name}</strong><br><small style="color:#666;">${c.dept}</small></td>
            <td>${c.teacher}</td>
            <td style="text-align:center;">${c.coursework}%</td>
            <td style="text-align:center;">${c.midterm}%</td>
            <td style="text-align:center;">${c.exam}%</td>
            <td style="text-align:center;"><strong>${converted.display}</strong></td>
            <td style="text-align:center; color:#666;">${c.classAvg}%</td>
          </tr>
        `;
      });

      pageDiv.innerHTML = `
        <div class="report-document">
          <div class="report-watermark">${this.institution.name.toUpperCase()}</div>
          <header class="report-doc-header">
            <div class="doc-school-info">
              <div class="doc-school-crest">★</div>
              <div>
                <h2 class="doc-school-title">${this.institution.name}</h2>
                <p class="doc-school-sub">${this.institution.subtitle}</p>
                <p class="doc-meta-sub">Official Academic Transcript • ${this.institution.academicYear}</p>
              </div>
            </div>
            <div class="doc-seal-badge">
              <span class="seal-text">OFFICIAL</span>
              <span class="seal-sub">TRANSCRIPT</span>
            </div>
          </header>

          <div class="student-profile-strip" style="margin-top: 1rem;">
            <div class="student-avatar-box">
              <div class="avatar-circle">${initials}</div>
            </div>
            <div class="student-core-details">
              <div class="student-name-row">
                <h3>${student.name}</h3>
                <span class="badge badge-honor">${student.honor}</span>
              </div>
              <div class="student-meta-grid">
                <div><strong>ID:</strong> ${student.id}</div>
                <div><strong>Class:</strong> ${student.class}</div>
                <div><strong>Advisor:</strong> ${student.advisor}</div>
                <div><strong>Term:</strong> ${this.institution.termName}</div>
              </div>
            </div>
            <div class="student-quick-kpis">
              <div class="kpi-card highlight">
                <div class="kpi-label">Cumulative GPA</div>
                <div class="kpi-value">${avgs.gpa.toFixed(2)}</div>
                <div class="kpi-sub">${avgs.rawAvg}% Raw</div>
              </div>
              <div class="kpi-card">
                <div class="kpi-label">Class Rank</div>
                <div class="kpi-value">#${myRank}</div>
                <div class="kpi-sub">of ${this.students.length}</div>
              </div>
              <div class="kpi-card">
                <div class="kpi-label">Attendance</div>
                <div class="kpi-value">${attPct}%</div>
                <div class="kpi-sub">${student.attendance.present} / ${totalDays} Days</div>
              </div>
            </div>
          </div>

          <div class="report-section" style="margin-top: 1rem;">
            <h4>I. Academic Evaluation</h4>
            <table class="report-table" style="margin-top: 0.5rem;">
              <thead>
                <tr>
                  <th>Course & Dept</th>
                  <th>Teacher</th>
                  <th style="text-align:center;">Coursework (30%)</th>
                  <th style="text-align:center;">Midterm (30%)</th>
                  <th style="text-align:center;">Final Exam (40%)</th>
                  <th style="text-align:center;">Final Evaluation</th>
                  <th style="text-align:center;">Class Avg</th>
                </tr>
              </thead>
              <tbody>${courseRows}</tbody>
            </table>
          </div>

          <div class="report-section dual-grid" style="margin-top: 1rem;">
            <div class="doc-box">
              <h5>II. Attendance Record</h5>
              <p>Days Present: <strong>${student.attendance.present}</strong> | Excused: <strong>${student.attendance.excused}</strong> | Unexcused: <strong>${student.attendance.unexcused}</strong> | Tardy: <strong>${student.attendance.tardy}</strong></p>
              <p class="att-note" style="margin-top: 0.5rem;">${student.attendance.notes}</p>
            </div>
            <div class="doc-box">
              <h5>III. Faculty Appraisal</h5>
              <p style="font-style: italic;">"${student.counselorRemarks}"</p>
              <div class="signature-block" style="margin-top: 0.75rem;">
                <div class="sig-line">
                  <div class="sig-signature">${this.institution.deanName}</div>
                  <div class="sig-title">${this.institution.deanTitle}</div>
                </div>
                <div class="sig-line">
                  <div class="sig-signature">${this.institution.principalName}</div>
                  <div class="sig-title">${this.institution.principalTitle}</div>
                </div>
              </div>
            </div>
          </div>

          <footer class="report-doc-footer" style="margin-top: 1rem;">
            <div class="parent-ack-strip">
              <span>Parent Acknowledgment: ${student.parentAckDate || 'Pending'} by ${student.parentName}</span>
              <code>EDUMET-${student.id.replace('STU-', '')}-${avgs.rawAvg.toString().replace('.', '')}X</code>
            </div>
          </footer>
        </div>
      `;
      this.batchPrintContainer.appendChild(pageDiv);
    });

    this.batchPrintModal.close();
    document.body.classList.add('is-batch-printing');
    window.print();
    // After print dialog closes
    setTimeout(() => {
      document.body.classList.remove('is-batch-printing');
    }, 1000);
  }

  // --- Data Center (CSV, JSON Export/Import, Sample Cohort) ---
  exportGradebookCSV() {
    let csv = 'Student ID,Full Name,Class,Advisor,Honor Designation,Overall GPA,Overall Raw Avg %,Class Rank,Attendance Rate %,Days Present,Total Days,Parent Guardian,Parent Ack Date\n';

    const allRanks = this.students.map(s => ({ id: s.id, avg: this.calculateStudentAverages(s).rawAvg })).sort((a, b) => b.avg - a.avg);

    this.students.forEach(s => {
      const avgs = this.calculateStudentAverages(s);
      const rank = allRanks.findIndex(r => r.id === s.id) + 1;
      const totalDays = s.attendance.totalDays || 90;
      const attRate = ((s.attendance.present / totalDays) * 100).toFixed(1);

      const row = [
        `"${s.id}"`,
        `"${s.name}"`,
        `"${s.class}"`,
        `"${s.advisor}"`,
        `"${s.honor || 'Good Standing'}"`,
        avgs.gpa.toFixed(2),
        avgs.rawAvg.toFixed(1),
        rank,
        attRate,
        s.attendance.present,
        totalDays,
        `"${s.parentName || ''}"`,
        `"${s.parentAckDate || 'Pending'}"`
      ];
      csv += row.join(',') + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `edumetrics-gradebook-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    this.showToast('Gradebook CSV downloaded successfully!');
  }

  exportJsonBackup() {
    const backupData = {
      app: 'EduMetrics Pro',
      version: '2.0.0',
      exportedAt: new Date().toISOString(),
      institution: this.institution,
      scaleConfig: this.scaleConfig,
      students: this.students
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `edumetrics-backup-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    this.showToast('Full JSON backup downloaded!');
  }

  importJsonBackup(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.students && Array.isArray(parsed.students)) {
          this.students = parsed.students;
          if (parsed.scaleConfig && Array.isArray(parsed.scaleConfig)) {
            this.scaleConfig = parsed.scaleConfig;
          }
          if (parsed.institution && parsed.institution.name) {
            this.institution = parsed.institution;
          }
          this.saveStudents();
          this.saveScaleConfig();
          this.saveInstitution();
          this.selectedStudentId = this.students[0]?.id || 'STU-10492';
          this.dataCenterModal.close();
          this.showToast('Database successfully restored from JSON backup!');
          this.render();
        } else {
          alert('Invalid backup file format: students list not detected.');
        }
      } catch (err) {
        alert('Could not parse JSON file. Please ensure it is valid.');
      }
    };
    reader.readAsText(file);
  }

  restoreSampleCohort() {
    this.promptConfirmDelete('all current records and restore default 8-student sample cohort', () => {
      this.students = JSON.parse(JSON.stringify(INITIAL_STUDENTS));
      this.scaleConfig = JSON.parse(JSON.stringify(DEFAULT_SCALE_CONFIG));
      this.institution = { ...DEFAULT_INSTITUTION };
      this.saveStudents();
      this.saveScaleConfig();
      this.saveInstitution();
      this.selectedStudentId = this.students[0].id;
      this.dataCenterModal.close();
      this.showToast('Populated realistic 8-student sample cohort!');
      this.render();
    });
  }

  // ==========================================================================
  // RETINA HIGH-DPI CANVAS CHARTS ENGINE WITH INTERACTIVE TOOLTIPS
  // ==========================================================================
  renderCharts() {
    const student = this.getSelectedStudent();
    if (!student) return;

    const avgs = this.calculateStudentAverages(student);

    // Median KPI
    const allAvgs = this.students.map(s => this.calculateStudentAverages(s).rawAvg).sort((a, b) => a - b);
    const mid = Math.floor(allAvgs.length / 2);
    const median = allAvgs.length % 2 !== 0 ? allAvgs[mid] : ((allAvgs[mid - 1] + allAvgs[mid]) / 2);
    const medianEl = document.getElementById('analyticsClassMedian');
    if (medianEl) medianEl.textContent = `${median.toFixed(1)}%`;

    // Student vs Cohort Delta
    const classAvgNum = parseFloat(this.classAvgVal.textContent) || 88.0;
    const delta = (avgs.rawAvg - classAvgNum).toFixed(1);
    const deltaEl = document.getElementById('analyticsStudentDelta');
    const deltaTrend = document.getElementById('analyticsDeltaTrend');
    if (deltaEl) {
      deltaEl.textContent = `${delta >= 0 ? '+' : ''}${delta}%`;
      deltaEl.className = `card-big-num ${delta >= 0 ? 'text-success' : 'text-warning'}`;
    }
    if (deltaTrend) {
      deltaTrend.textContent = delta >= 0 ? 'Above Cohort Benchmark' : 'Below Cohort Average';
      deltaTrend.className = `card-trend ${delta >= 0 ? 'positive' : 'negative'}`;
    }

    // Top Competency & Growth Subject
    const sortedCourses = [...student.courses].sort((a, b) => this.calculateWeightedScore(b) - this.calculateWeightedScore(a));
    const topCourse = sortedCourses[0];
    const lowCourse = sortedCourses[sortedCourses.length - 1];

    if (topCourse) {
      document.getElementById('analyticsTopSubject').textContent = `${topCourse.name} (${this.calculateWeightedScore(topCourse)}%)`;
      document.getElementById('analyticsTopSub').textContent = `${topCourse.dept} Department`;
    }
    if (lowCourse) {
      document.getElementById('analyticsGrowthSubject').textContent = `${lowCourse.name} (${this.calculateWeightedScore(lowCourse)}%)`;
      document.getElementById('analyticsGrowthSub').textContent = `Benchmark is ${lowCourse.classAvg}%`;
    }

    const histBadge = document.getElementById('histogramTotalCountBadge');
    if (histBadge) histBadge.textContent = `Total Students: ${this.students.length}`;

    // Render Canvas Charts
    this.drawTrajectoryLineChart(student);
    this.drawSubjectBarChart(student);
    this.drawDistributionHistogram();
    this.drawCorrelationScatter();
  }

  // Setup canvas with window.devicePixelRatio for crystal-sharp rendering
  setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || canvas.width;
    const height = 260; // Standardized height

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.resetTransform?.();
    ctx.scale(dpr, dpr);
    return { ctx, width, height };
  }

  // Chart 1: Longitudinal Trajectory
  drawTrajectoryLineChart(student) {
    const canvas = document.getElementById('termTrendCanvas');
    if (!canvas) return;
    const { ctx, width, height } = this.setupCanvas(canvas);

    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    const padding = { top: 30, right: 35, bottom: 40, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    const labels = ['Fall Term 1', 'Midterm Milestone', 'Spring Term 2'];
    const studentVals = [
      student.historicalTerms?.term1 || 91.0,
      student.historicalTerms?.midterm || 92.5,
      student.historicalTerms?.term2 || 94.0
    ];

    // Compute actual cohort averages for all 3 periods
    const avgT1 = this.students.reduce((acc, s) => acc + (s.historicalTerms?.term1 || 88), 0) / this.students.length;
    const avgMid = this.students.reduce((acc, s) => acc + (s.historicalTerms?.midterm || 89), 0) / this.students.length;
    const avgT2 = this.students.reduce((acc, s) => acc + (s.historicalTerms?.term2 || 91), 0) / this.students.length;
    const classVals = [avgT1, avgMid, avgT2];

    const minY = 75;
    const maxY = 100;
    const getY = (val) => padding.top + chartH - ((val - minY) / (maxY - minY)) * chartH;
    const getX = (i) => padding.left + (i / (labels.length - 1)) * chartW;

    // Grid lines
    ctx.strokeStyle = isDark ? '#243048' : '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.font = '11px Plus Jakarta Sans, sans-serif';
    ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';

    for (let yVal = 80; yVal <= 100; yVal += 5) {
      const y = getY(yVal);
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
      ctx.fillText(`${yVal}%`, 10, y + 4);
    }

    // X Axis Labels
    labels.forEach((lbl, i) => {
      const x = getX(i);
      ctx.textAlign = 'center';
      ctx.fillText(lbl, x, height - 12);
    });

    // Draw Class Cohort Line (Dotted)
    ctx.beginPath();
    ctx.strokeStyle = isDark ? '#64748b' : '#94a3b8';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    classVals.forEach((val, i) => {
      const x = getX(i);
      const y = getY(val);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw Student Area Gradient
    const grad = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    grad.addColorStop(0, isDark ? 'rgba(99, 102, 241, 0.35)' : 'rgba(79, 70, 229, 0.2)');
    grad.addColorStop(1, 'rgba(99, 102, 241, 0.0)');

    ctx.beginPath();
    studentVals.forEach((val, i) => {
      const x = getX(i);
      const y = getY(val);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.lineTo(getX(labels.length - 1), height - padding.bottom);
    ctx.lineTo(getX(0), height - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Solid Student Line
    ctx.beginPath();
    ctx.strokeStyle = isDark ? '#818cf8' : '#4f46e5';
    ctx.lineWidth = 3.5;
    studentVals.forEach((val, i) => {
      const x = getX(i);
      const y = getY(val);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Data Circles & Point Labels
    studentVals.forEach((val, i) => {
      const x = getX(i);
      const y = getY(val);

      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#111827' : '#ffffff';
      ctx.fill();
      ctx.strokeStyle = isDark ? '#818cf8' : '#4f46e5';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.font = 'bold 11px JetBrains Mono, monospace';
      ctx.fillStyle = isDark ? '#f8fafc' : '#1e1b4b';
      ctx.textAlign = 'center';
      ctx.fillText(`${val.toFixed(1)}%`, x, y - 10);
    });

    if (!this.chartTargets) this.chartTargets = {};
    this.chartTargets.trajectory = studentVals.map((val, i) => ({
      type: 'circle',
      x: getX(i),
      y: getY(val),
      r: 14,
      label: labels[i],
      studentVal: val,
      classVal: classVals[i]
    }));
  }

  // Chart 2: Subject Proficiencies Bar Comparison
  drawSubjectBarChart(student) {
    const canvas = document.getElementById('subjectBarCanvas');
    if (!canvas) return;
    const { ctx, width, height } = this.setupCanvas(canvas);

    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    const padding = { top: 25, right: 25, bottom: 45, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    const courses = student.courses;
    if (courses.length === 0) return;

    if (!this.chartTargets) this.chartTargets = {};
    this.chartTargets.subjectBars = [];

    const barGroupWidth = chartW / courses.length;
    const barWidth = Math.min(22, barGroupWidth * 0.35);

    // Y Grid lines
    ctx.strokeStyle = isDark ? '#243048' : '#f1f5f9';
    ctx.lineWidth = 1;
    ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
    ctx.font = '10px Plus Jakarta Sans, sans-serif';

    const minY = 60;
    const maxY = 100;
    const getY = (val) => padding.top + chartH - ((val - minY) / (maxY - minY)) * chartH;

    for (let yVal = 70; yVal <= 100; yVal += 10) {
      const y = getY(yVal);
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
      ctx.fillText(`${yVal}%`, 10, y + 4);
    }

    courses.forEach((c, i) => {
      const studentScore = this.calculateWeightedScore(c);
      const classAvg = c.classAvg;
      const groupCenterX = padding.left + (i * barGroupWidth) + (barGroupWidth / 2);

      // Student Bar
      const studentX = groupCenterX - barWidth - 2;
      const studentY = getY(studentScore);
      const studentH = (height - padding.bottom) - studentY;

      const grad = ctx.createLinearGradient(0, studentY, 0, height - padding.bottom);
      grad.addColorStop(0, isDark ? '#818cf8' : '#4f46e5');
      grad.addColorStop(1, isDark ? '#4f46e5' : '#818cf8');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(studentX, studentY, barWidth, studentH, [4, 4, 0, 0]) : ctx.rect(studentX, studentY, barWidth, studentH);
      ctx.fill();

      // Class Avg Bar
      const classX = groupCenterX + 2;
      const classY = getY(classAvg);
      const classH = (height - padding.bottom) - classY;

      ctx.fillStyle = isDark ? '#334155' : '#cbd5e1';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(classX, classY, barWidth, classH, [4, 4, 0, 0]) : ctx.rect(classX, classY, barWidth, classH);
      ctx.fill();

      // Save hover targets
      this.chartTargets.subjectBars.push({
        type: 'rect',
        x: studentX,
        y: studentY,
        w: barWidth,
        h: studentH,
        course: c,
        score: studentScore,
        typeLabel: 'Student Score'
      });
      this.chartTargets.subjectBars.push({
        type: 'rect',
        x: classX,
        y: classY,
        w: barWidth,
        h: classH,
        course: c,
        score: classAvg,
        typeLabel: 'Cohort Benchmark'
      });

      // Subject Short Label
      ctx.font = '10px Plus Jakarta Sans, sans-serif';
      ctx.fillStyle = isDark ? '#cbd5e1' : '#475569';
      ctx.textAlign = 'center';
      const shortName = c.name.split(' ')[0];
      ctx.fillText(shortName, groupCenterX, height - 15);
    });
  }

  // Chart 3: Cohort Grade Distribution Histogram
  drawDistributionHistogram() {
    const canvas = document.getElementById('distributionCanvas');
    if (!canvas) return;
    const { ctx, width, height } = this.setupCanvas(canvas);

    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    const padding = { top: 25, right: 25, bottom: 35, left: 35 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Dynamically calculate distribution from current student database
    const brackets = [
      { label: '< 70%', min: 0, max: 69.9, count: 0 },
      { label: '70-79%', min: 70, max: 79.9, count: 0 },
      { label: '80-89%', min: 80, max: 89.9, count: 0 },
      { label: '90-94%', min: 90, max: 94.9, count: 0 },
      { label: '95-100%', min: 95, max: 100, count: 0 }
    ];

    this.students.forEach(s => {
      const avg = this.calculateStudentAverages(s).rawAvg;
      const bucket = brackets.find(b => avg >= b.min && avg <= b.max) || brackets[0];
      bucket.count++;
    });

    const maxCount = Math.max(5, ...brackets.map(b => b.count)) + 1;
    const barW = (chartW / brackets.length) - 16;

    if (!this.chartTargets) this.chartTargets = {};
    this.chartTargets.histogram = [];

    brackets.forEach((b, i) => {
      const x = padding.left + i * (chartW / brackets.length) + 8;
      const barH = (b.count / maxCount) * chartH;
      const y = (height - padding.bottom) - barH;

      const grad = ctx.createLinearGradient(0, y, 0, height - padding.bottom);
      grad.addColorStop(0, i >= 3 ? '#10b981' : '#0ea5e9');
      grad.addColorStop(1, i >= 3 ? '#34d399' : '#38bdf8');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x, y, barW, barH, [6, 6, 0, 0]) : ctx.rect(x, y, barW, barH);
      ctx.fill();

      this.chartTargets.histogram.push({
        type: 'rect',
        x,
        y,
        w: barW,
        h: barH,
        label: b.label,
        count: b.count
      });

      // Count on top
      ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
      ctx.font = 'bold 11px JetBrains Mono, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${b.count} sts`, x + barW / 2, y - 6);

      // Label below
      ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
      ctx.font = '10px Plus Jakarta Sans, sans-serif';
      ctx.fillText(b.label, x + barW / 2, height - 12);
    });
  }

  // Chart 4: Attendance vs Final Grade Correlation
  drawCorrelationScatter() {
    const canvas = document.getElementById('correlationCanvas');
    if (!canvas) return;
    const { ctx, width, height } = this.setupCanvas(canvas);

    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    const padding = { top: 25, right: 30, bottom: 40, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Outer Frame
    ctx.strokeStyle = isDark ? '#243048' : '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.strokeRect(padding.left, padding.top, chartW, chartH);

    // Trendline
    ctx.beginPath();
    ctx.strokeStyle = isDark ? 'rgba(52, 211, 153, 0.45)' : 'rgba(16, 185, 129, 0.4)';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.moveTo(padding.left + 20, height - padding.bottom - 20);
    ctx.lineTo(width - padding.right - 20, padding.top + 20);
    ctx.stroke();
    ctx.setLineDash([]);

    // Scatter points
    if (!this.chartTargets) this.chartTargets = {};
    this.chartTargets.correlation = [];

    this.students.forEach(s => {
      const totalDays = s.attendance.totalDays || 90;
      const attRate = (s.attendance.present / totalDays) * 100;
      const score = this.calculateStudentAverages(s).rawAvg;
      const isSelected = s.id === this.selectedStudentId;

      // Dynamic scale
      const x = padding.left + Math.max(0, Math.min(1, (attRate - 78) / 22)) * chartW;
      const y = (height - padding.bottom) - Math.max(0, Math.min(1, (score - 72) / 28)) * chartH;

      this.chartTargets.correlation.push({
        type: 'circle',
        x,
        y,
        r: isSelected ? 12 : 8,
        student: s,
        attRate,
        score
      });

      ctx.beginPath();
      ctx.arc(x, y, isSelected ? 8 : 5, 0, Math.PI * 2);
      ctx.fillStyle = isSelected ? (isDark ? '#818cf8' : '#4f46e5') : '#0284c7';
      ctx.fill();
      ctx.strokeStyle = isDark ? '#111827' : '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      if (isSelected) {
        ctx.fillStyle = isDark ? '#ffffff' : '#1e1b4b';
        ctx.font = 'bold 10px Plus Jakarta Sans, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(s.name.split(' ')[0], x, y - 11);
      }
    });

    // Axis Labels
    ctx.font = '10px Plus Jakarta Sans, sans-serif';
    ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
    ctx.textAlign = 'center';
    ctx.fillText('Attendance Rate (%) →', width / 2, height - 10);
  }

  // --- Toast Notification Helper ---
  showToast(message) {
    if (!this.toastNotification) return;
    this.toastNotification.textContent = message;
    this.toastNotification.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastNotification.classList.remove('show');
    }, 3400);
  }
}

// Instantiate on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.eduMetricsApp = new EduMetricsApp();
});
