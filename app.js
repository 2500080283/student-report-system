/**
 * EduMetrics Pro — Comprehensive Indian Universities Directory & Institutional Registry
 * Covering 503 recognized Universities & Institutes of National Importance
 * across ALL 28 States and 8 Union Territories of India.
 * Formatted for instant 1-click application to official academic report cards and student target tracking.
 */

const INDIAN_STATES_UT = [
  "All States & UTs",
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

const INDIAN_UNIVERSITY_TYPES = [
  "All Classifications",
  "Institute of National Importance (INI)",
  "Central University",
  "State Public University",
  "Deemed to be University",
  "State Private University"
];

const INDIAN_UNIVERSITIES = [
  {
    "id": "univ_acharya_n_g_ranga_agricultural_university",
    "name": "Acharya N.G. Ranga Agricultural University",
    "shortName": "ANGRAU Guntur",
    "city": "Guntur",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1964,
    "website": "https://angrau.ac.in",
    "accreditation": "Premier Agricultural University in AP • ICAR",
    "defaultSubtitle": "State Public University • Guntur, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_acharya_nagarjuna_university",
    "name": "Acharya Nagarjuna University",
    "shortName": "ANU Guntur",
    "city": "Guntur",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1976,
    "website": "https://www.nagarjunauniversity.ac.in",
    "accreditation": "NAAC A Grade State University",
    "defaultSubtitle": "State Public University • Guntur, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_adamas_university",
    "name": "Adamas University",
    "shortName": "Adamas Barasat",
    "city": "Barasat",
    "state": "West Bengal",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2014,
    "website": "https://adamasuniversity.ac.in",
    "accreditation": "Comprehensive Multi-Disciplinary Campus",
    "defaultSubtitle": "State Private University • Barasat, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_adikavi_nannaya_university",
    "name": "Adikavi Nannaya University",
    "shortName": "AKNU Rajamahendravaram",
    "city": "Rajamahendravaram",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2006,
    "website": "https://www.aknu.edu.in",
    "accreditation": "State University of Godavari Region",
    "defaultSubtitle": "State Public University • Rajamahendravaram, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_ahmedabad_university",
    "name": "Ahmedabad University",
    "shortName": "Ahmedabad University",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2009,
    "website": "https://ahduni.edu.in",
    "accreditation": "Liberal Education & Interdisciplinary Research Hub",
    "defaultSubtitle": "State Private University • Ahmedabad, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_alagappa_university",
    "name": "Alagappa University",
    "shortName": "Alagappa Karaikudi",
    "city": "Karaikudi",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1985,
    "website": "https://alagappauniversity.ac.in",
    "accreditation": "NAAC A+ Grade • Category-I Autonomy by UGC",
    "defaultSubtitle": "State Public University • Karaikudi, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_aligarh_muslim_university",
    "name": "Aligarh Muslim University",
    "shortName": "AMU",
    "city": "Aligarh",
    "state": "Uttar Pradesh",
    "type": "Central University",
    "category": "Multidisciplinary & Medical",
    "established": 1920,
    "website": "https://www.amu.ac.in",
    "accreditation": "NAAC A+ • NIRF #9 (Universities)",
    "defaultSubtitle": "Central University • Est. 1920 • Aligarh, Uttar Pradesh",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_amity_university_noida",
    "name": "Amity University Noida",
    "shortName": "Amity University",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2005,
    "website": "https://www.amity.edu",
    "accreditation": "NAAC A+ Grade • Multi-Campus Flagship Institution",
    "defaultSubtitle": "State Private University • Noida, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_amrita_vishwa_vidyapeetham",
    "name": "Amrita Vishwa Vidyapeetham",
    "shortName": "Amrita University",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 2003,
    "website": "https://www.amrita.edu",
    "accreditation": "Institute of Eminence (IoE) • NAAC A++ (3.7/4)",
    "defaultSubtitle": "Deemed to be University • Coimbatore, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_andaman_nicobar_islands_institute_of_medical_sciences",
    "name": "Andaman & Nicobar Islands Institute of Medical Sciences",
    "shortName": "ANIIMS Port Blair",
    "city": "Port Blair",
    "state": "Andaman and Nicobar Islands",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 2015,
    "website": "https://andssw1.and.nic.in/aniims",
    "accreditation": "Premier Island Healthcare & Medical College • UT Administration of A&N",
    "defaultSubtitle": "State Public University • Port Blair, Andaman and Nicobar Islands • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_andhra_university",
    "name": "Andhra University",
    "shortName": "Andhra University (AU)",
    "city": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1926,
    "website": "https://www.andhrauniversity.edu.in",
    "accreditation": "NAAC A++ (3.74/4) • Oldest University in Andhra Pradesh",
    "defaultSubtitle": "State Public University • Visakhapatnam, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_anna_university",
    "name": "Anna University",
    "shortName": "Anna University Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1978,
    "website": "https://www.annauniv.edu",
    "accreditation": "Apex Technical University in Tamil Nadu • NAAC A++ (3.54/4)",
    "defaultSubtitle": "State Public University • Chennai, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_annamalai_university",
    "name": "Annamalai University",
    "shortName": "Annamalai Chidambaram",
    "city": "Chidambaram",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1929,
    "website": "https://annamalaiuniversity.ac.in",
    "accreditation": "Historic Residential University • NAAC A+ Grade",
    "defaultSubtitle": "State Public University • Chidambaram, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_anurag_university",
    "name": "Anurag University",
    "shortName": "Anurag Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 2002,
    "website": "https://anurag.edu.in",
    "accreditation": "Leading Private Tech University in Hyderabad",
    "defaultSubtitle": "State Private University • Hyderabad, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_apex_professional_university",
    "name": "Apex Professional University",
    "shortName": "APU Pasighat",
    "city": "Pasighat",
    "state": "Arunachal Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2013,
    "website": "https://apexuniversity.edu.in",
    "accreditation": "UGC Recognized State Private University",
    "defaultSubtitle": "State Private University • Pasighat, Arunachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_apj_abdul_kalam_technological_university",
    "name": "APJ Abdul Kalam Technological University",
    "shortName": "KTU Kerala",
    "city": "Thiruvananthapuram",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2014,
    "website": "https://ktu.edu.in",
    "accreditation": "Apex Technological Affiliating Body of Kerala",
    "defaultSubtitle": "State Public University • Thiruvananthapuram, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_arka_jain_university",
    "name": "Arka Jain University",
    "shortName": "AJU Jamshedpur",
    "city": "Jamshedpur",
    "state": "Jharkhand",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2017,
    "website": "https://arkajainuniversity.ac.in",
    "accreditation": "First Private University in Kolhan Region",
    "defaultSubtitle": "State Private University • Jamshedpur, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_arunachal_university_of_studies",
    "name": "Arunachal University of Studies",
    "shortName": "AUS Namsai",
    "city": "Namsai",
    "state": "Arunachal Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2012,
    "website": "https://www.arunachaluniversity.ac.in",
    "accreditation": "Recognized by UGC • NAAC Accredited",
    "defaultSubtitle": "State Private University • Namsai, Arunachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_aryabhatta_knowledge_university",
    "name": "Aryabhatta Knowledge University",
    "shortName": "AKU Patna",
    "city": "Patna",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2008,
    "website": "http://akubihar.ac.in",
    "accreditation": "State Technical & Professional Education Body",
    "defaultSubtitle": "State Public University • Patna, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_ashoka_university",
    "name": "Ashoka University",
    "shortName": "Ashoka Sonipat",
    "city": "Sonipat",
    "state": "Haryana",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2014,
    "website": "https://www.ashoka.edu.in",
    "accreditation": "Pioneer in Liberal Arts & Sciences Education",
    "defaultSubtitle": "State Private University • Sonipat, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_assam_agricultural_university",
    "name": "Assam Agricultural University",
    "shortName": "AAU Jorhat",
    "city": "Jorhat",
    "state": "Assam",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1969,
    "website": "http://www.aau.ac.in",
    "accreditation": "Premier Agricultural University in North-East • ICAR",
    "defaultSubtitle": "State Public University • Jorhat, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_assam_don_bosco_university",
    "name": "Assam Don Bosco University",
    "shortName": "ADBU Guwahati",
    "city": "Guwahati",
    "state": "Assam",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2008,
    "website": "https://www.dbuniversity.ac.in",
    "accreditation": "First State Private University in Assam • NAAC A Grade",
    "defaultSubtitle": "State Private University • Guwahati, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_assam_down_town_university",
    "name": "Assam Down Town University",
    "shortName": "AdtU Guwahati",
    "city": "Guwahati",
    "state": "Assam",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2010,
    "website": "https://adtu.in",
    "accreditation": "NAAC Accredited Healthcare & Engineering University",
    "defaultSubtitle": "State Private University • Guwahati, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_assam_science_and_technology_university",
    "name": "Assam Science and Technology University",
    "shortName": "ASTU Guwahati",
    "city": "Guwahati",
    "state": "Assam",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://astu.ac.in",
    "accreditation": "State Technological University of Assam",
    "defaultSubtitle": "State Public University • Guwahati, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_assam_university",
    "name": "Assam University",
    "shortName": "AUS",
    "city": "Silchar",
    "state": "Assam",
    "type": "Central University",
    "category": "Multidisciplinary & Sciences",
    "established": 1994,
    "website": "http://www.aus.ac.in",
    "accreditation": "NAAC B++ • Central University Act",
    "defaultSubtitle": "Central Teaching & Affiliating University • Silchar & Diphu",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_atal_bihari_vajpayee_indian_institute_of_information_technology_and_management_gwalior",
    "name": "Atal Bihari Vajpayee Indian Institute of Information Technology and Management Gwalior",
    "shortName": "ABV-IIITM Gwalior",
    "city": "Gwalior",
    "state": "Madhya Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1997,
    "website": "https://www.iiitm.ac.in",
    "accreditation": "First IIIT Established in India • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 1997 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_atal_bihari_vajpayee_vishwavidyalaya",
    "name": "Atal Bihari Vajpayee Vishwavidyalaya",
    "shortName": "ABVV Bilaspur",
    "city": "Bilaspur",
    "state": "Chhattisgarh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2012,
    "website": "https://www.bilaspuruniversity.ac.in",
    "accreditation": "Major State Affiliating University in Bilaspur",
    "defaultSubtitle": "State Public University • Bilaspur, Chhattisgarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_atlas_skilltech_university",
    "name": "ATLAS SkillTech University",
    "shortName": "ATLAS Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2021,
    "website": "https://www.atlasuniversity.edu.in",
    "accreditation": "Next-Gen Urban Design, Technology & Management",
    "defaultSubtitle": "State Private University • Mumbai, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_awadhesh_pratap_singh_university",
    "name": "Awadhesh Pratap Singh University",
    "shortName": "APSU Rewa",
    "city": "Rewa",
    "state": "Madhya Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1968,
    "website": "https://apsurewa.ac.in",
    "accreditation": "State University of Baghelkhand Region",
    "defaultSubtitle": "State Public University • Rewa, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_baba_farid_university_of_health_sciences",
    "name": "Baba Farid University of Health Sciences",
    "shortName": "BFUHS Faridkot",
    "city": "Faridkot",
    "state": "Punjab",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 1998,
    "website": "http://www.bfuhs.ac.in",
    "accreditation": "Apex Medical Affiliating Body in Punjab",
    "defaultSubtitle": "State Public University • Faridkot, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_baba_ghulam_shah_badshah_university",
    "name": "Baba Ghulam Shah Badshah University",
    "shortName": "BGSBU Rajouri",
    "city": "Rajouri",
    "state": "Jammu and Kashmir",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2002,
    "website": "http://www.bgsbu.ac.in",
    "accreditation": "State University of Pir Panjal Foothills",
    "defaultSubtitle": "State Public University • Rajouri, Jammu and Kashmir • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_babasaheb_bhimrao_ambedkar_bihar_university",
    "name": "Babasaheb Bhimrao Ambedkar Bihar University",
    "shortName": "BRABU Muzaffarpur",
    "city": "Muzaffarpur",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1952,
    "website": "https://brabu.net",
    "accreditation": "Premier State University in North Bihar",
    "defaultSubtitle": "State Public University • Muzaffarpur, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_babasaheb_bhimrao_ambedkar_university",
    "name": "Babasaheb Bhimrao Ambedkar University",
    "shortName": "BBAU",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "type": "Central University",
    "category": "Multidisciplinary & Environmental Studies",
    "established": 1996,
    "website": "https://www.bbau.ac.in",
    "accreditation": "NAAC A++ • NIRF #42 (Universities)",
    "defaultSubtitle": "Central University • Vidya Vihar, Raebareli Road, Lucknow",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_banaras_hindu_university",
    "name": "Banaras Hindu University",
    "shortName": "BHU",
    "city": "Varanasi",
    "state": "Uttar Pradesh",
    "type": "Central University",
    "category": "Multidisciplinary & Sciences",
    "established": 1916,
    "website": "https://www.bhu.ac.in",
    "accreditation": "Institute of Eminence (IoE) • NAAC A • NIRF #5",
    "defaultSubtitle": "Central University • Institute of Eminence • Varanasi, Uttar Pradesh",
    "leadTitle": "Rector / Dean of Students",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_banasthali_vidyapith",
    "name": "Banasthali Vidyapith",
    "shortName": "Banasthali Vidyapith",
    "city": "Niwai",
    "state": "Rajasthan",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1935,
    "website": "http://www.banasthali.org",
    "accreditation": "World's Largest Fully-Residential Women's University • NAAC A++",
    "defaultSubtitle": "Deemed to be University • Niwai, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bangalore_university",
    "name": "Bangalore University",
    "shortName": "Bangalore University",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1886,
    "website": "https://bangaloreuniversity.karnataka.gov.in",
    "accreditation": "Historic State University • NAAC A++ Grade",
    "defaultSubtitle": "State Public University • Bengaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_barkatullah_university",
    "name": "Barkatullah University",
    "shortName": "Barkatullah Bhopal (BU)",
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1970,
    "website": "http://www.bubhopal.ac.in",
    "accreditation": "Premier State University in Capital Region",
    "defaultSubtitle": "State Public University • Bhopal, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bengaluru_city_university",
    "name": "Bengaluru City University",
    "shortName": "BCU Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2017,
    "website": "https://bcu.ac.in",
    "accreditation": "Central Bengaluru Metropolitan University",
    "defaultSubtitle": "State Public University • Bengaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bengaluru_north_university",
    "name": "Bengaluru North University",
    "shortName": "BNU Kolar",
    "city": "Kolar",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2017,
    "website": "https://bnu.ac.in",
    "accreditation": "North Bengaluru & Kolar Regional University",
    "defaultSubtitle": "State Public University • Kolar, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bennett_university",
    "name": "Bennett University",
    "shortName": "Bennett University",
    "city": "Greater Noida",
    "state": "Uttar Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2016,
    "website": "https://www.bennett.edu.in",
    "accreditation": "The Times of India Group Initiative • UGC Recognized",
    "defaultSubtitle": "State Private University • Greater Noida, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_berhampur_university",
    "name": "Berhampur University",
    "shortName": "Berhampur University",
    "city": "Berhampur",
    "state": "Odisha",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1967,
    "website": "https://www.buodisha.edu.in",
    "accreditation": "Southern Odisha Regional University • NAAC A",
    "defaultSubtitle": "State Public University • Berhampur, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bhagat_phool_singh_mahila_vishwavidyalaya",
    "name": "Bhagat Phool Singh Mahila Vishwavidyalaya",
    "shortName": "BPSMV Khanpur Kalan",
    "city": "Sonipat",
    "state": "Haryana",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2006,
    "website": "http://bpsmv.ac.in",
    "accreditation": "First Women's State University in North India",
    "defaultSubtitle": "State Public University • Sonipat, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bharathiar_university",
    "name": "Bharathiar University",
    "shortName": "Bharathiar University",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1982,
    "website": "https://b-u.ac.in",
    "accreditation": "NIRF Top 25 University • NAAC A Grade",
    "defaultSubtitle": "State Public University • Coimbatore, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bharathidasan_university",
    "name": "Bharathidasan University",
    "shortName": "BDU Tiruchirappalli",
    "city": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1982,
    "website": "https://www.bdu.ac.in",
    "accreditation": "NAAC A+ Grade State University • Govt. of Tamil Nadu",
    "defaultSubtitle": "State Public University • Tiruchirappalli, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bharati_vidyapeeth_deemed_university",
    "name": "Bharati Vidyapeeth Deemed University",
    "shortName": "Bharati Vidyapeeth",
    "city": "Pune",
    "state": "Maharashtra",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1964,
    "website": "https://bvuniversity.edu.in",
    "accreditation": "UGC Recognized Deemed University • NAAC A+ Grade",
    "defaultSubtitle": "Deemed to be University • Pune, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bhattadev_university",
    "name": "Bhattadev University",
    "shortName": "Bhattadev University",
    "city": "Bajali",
    "state": "Assam",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2019,
    "website": "https://bhattadevuniversity.ac.in",
    "accreditation": "State University in Lower Assam",
    "defaultSubtitle": "State Public University • Bajali, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bhupendra_narayan_mandal_university",
    "name": "Bhupendra Narayan Mandal University",
    "shortName": "BNMU Madhepura",
    "city": "Madhepura",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1992,
    "website": "https://bnmu.ac.in",
    "accreditation": "State University of Kosi Region",
    "defaultSubtitle": "State Public University • Madhepura, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bihar_agricultural_university",
    "name": "Bihar Agricultural University",
    "shortName": "BAU Sabour",
    "city": "Sabour",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 2010,
    "website": "https://bausabour.ac.in",
    "accreditation": "Premier Agricultural Education & Research in Bihar",
    "defaultSubtitle": "State Public University • Sabour, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bihar_animal_sciences_university",
    "name": "Bihar Animal Sciences University",
    "shortName": "BASU Patna",
    "city": "Patna",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 2016,
    "website": "https://www.basu.org.in",
    "accreditation": "Veterinary & Animal Husbandry Apex Body in Bihar",
    "defaultSubtitle": "State Public University • Patna, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_biju_patnaik_university_of_technology",
    "name": "Biju Patnaik University of Technology",
    "shortName": "BPUT Rourkela",
    "city": "Rourkela",
    "state": "Odisha",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2002,
    "website": "https://www.bput.ac.in",
    "accreditation": "State Technological University of Odisha",
    "defaultSubtitle": "State Public University • Rourkela, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_binod_bihari_mahto_koyalanchal_university",
    "name": "Binod Bihari Mahto Koyalanchal University",
    "shortName": "BBMKU Dhanbad",
    "city": "Dhanbad",
    "state": "Jharkhand",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2017,
    "website": "https://bbmku.ac.in",
    "accreditation": "State University for Coal Belt Region",
    "defaultSubtitle": "State Public University • Dhanbad, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_birla_institute_of_technology_and_science_pilani",
    "name": "Birla Institute of Technology and Science Pilani",
    "shortName": "BITS Pilani",
    "city": "Pilani",
    "state": "Rajasthan",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1964,
    "website": "https://www.bits-pilani.ac.in",
    "accreditation": "Institute of Eminence (IoE) • Founded by G.D. Birla • NAAC A",
    "defaultSubtitle": "Deemed to be University • Pilani, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_birla_institute_of_technology_mesra",
    "name": "Birla Institute of Technology Mesra",
    "shortName": "BIT Mesra Ranchi",
    "city": "Ranchi",
    "state": "Jharkhand",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1955,
    "website": "https://www.bitmesra.ac.in",
    "accreditation": "Space & Rocket Technology Pioneer • NAAC A Grade",
    "defaultSubtitle": "Deemed to be University • Ranchi, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_birsa_agricultural_university",
    "name": "Birsa Agricultural University",
    "shortName": "BAU Ranchi",
    "city": "Ranchi",
    "state": "Jharkhand",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1981,
    "website": "https://www.bauranchi.org",
    "accreditation": "Plateau Agricultural Research Center • ICAR",
    "defaultSubtitle": "State Public University • Ranchi, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bits_pilani_k_k_birla_goa_campus",
    "name": "BITS Pilani K.K. Birla Goa Campus",
    "shortName": "BITS Goa",
    "city": "Zuarinagar",
    "state": "Goa",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 2004,
    "website": "https://www.bits-pilani.ac.in/goa",
    "accreditation": "Institute of Eminence (IoE) constituent campus",
    "defaultSubtitle": "Deemed to be University • Zuarinagar, Goa • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bml_munjal_university",
    "name": "BML Munjal University",
    "shortName": "BMU Gurugram",
    "city": "Gurugram",
    "state": "Haryana",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2014,
    "website": "https://www.bmu.edu.in",
    "accreditation": "Hero Group Initiative • Mentored by Imperial College London",
    "defaultSubtitle": "State Private University • Gurugram, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bodoland_university",
    "name": "Bodoland University",
    "shortName": "Bodoland University",
    "city": "Kokrajhar",
    "state": "Assam",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2009,
    "website": "https://buniv.edu.in",
    "accreditation": "State University for BTR Region • UGC Recognized",
    "defaultSubtitle": "State Public University • Kokrajhar, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_bundelkhand_university",
    "name": "Bundelkhand University",
    "shortName": "BU Jhansi",
    "city": "Jhansi",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1975,
    "website": "https://www.bujhansi.ac.in",
    "accreditation": "NAAC A++ Grade State University in Bundelkhand",
    "defaultSubtitle": "State Public University • Jhansi, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_calicut_university_lakshadweep_centers",
    "name": "Calicut University Lakshadweep Centers",
    "shortName": "CULC Kavaratti",
    "city": "Kavaratti",
    "state": "Lakshadweep",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2003,
    "website": "https://uoc.ac.in",
    "accreditation": "Higher Education Centers of Lakshadweep Islands",
    "defaultSubtitle": "State Public University • Kavaratti, Lakshadweep • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_central_agricultural_university",
    "name": "Central Agricultural University",
    "shortName": "CAU",
    "city": "Imphal",
    "state": "Manipur",
    "type": "Central University",
    "category": "Agricultural & Veterinary Sciences",
    "established": 1993,
    "website": "https://www.cau.ac.in",
    "accreditation": "ICAR Recognized Central University",
    "defaultSubtitle": "Premier Central Agricultural University of North East India • Imphal",
    "leadTitle": "Director of Instruction",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_sanskrit_university",
    "name": "Central Sanskrit University",
    "shortName": "CSU",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Central University",
    "category": "Sanskrit & Indology",
    "established": 1970,
    "website": "http://www.sanskrit.nic.in",
    "accreditation": "Central Sanskrit University Act, 2020",
    "defaultSubtitle": "Premier Central University for Sanskrit Studies • New Delhi",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_tribal_university_of_andhra_pradesh",
    "name": "Central Tribal University of Andhra Pradesh",
    "shortName": "CTUAP",
    "city": "Vizianagaram",
    "state": "Andhra Pradesh",
    "type": "Central University",
    "category": "Tribal Studies & Multidisciplinary",
    "established": 2019,
    "website": "https://ctuap.ac.in",
    "accreditation": "UGC / Ministry of Education, Govt. of India",
    "defaultSubtitle": "Central Tribal University • Vizianagaram, Andhra Pradesh",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_andhra_pradesh",
    "name": "Central University of Andhra Pradesh",
    "shortName": "CUAP",
    "city": "Anantapur",
    "state": "Andhra Pradesh",
    "type": "Central University",
    "category": "Multidisciplinary & Sciences",
    "established": 2018,
    "website": "https://cuap.ac.in",
    "accreditation": "UGC / Ministry of Education, Govt. of India",
    "defaultSubtitle": "Central University established by Central Universities Act • Andhra Pradesh",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_gujarat",
    "name": "Central University of Gujarat",
    "shortName": "CUG",
    "city": "Gandhinagar",
    "state": "Gujarat",
    "type": "Central University",
    "category": "Multidisciplinary & Research",
    "established": 2009,
    "website": "https://www.cug.ac.in",
    "accreditation": "NAAC A • Central Universities Act, 2009",
    "defaultSubtitle": "Central University • Sector-29, Gandhinagar, Gujarat",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_haryana",
    "name": "Central University of Haryana",
    "shortName": "CUH",
    "city": "Mahendragarh",
    "state": "Haryana",
    "type": "Central University",
    "category": "Multidisciplinary & Applied Sciences",
    "established": 2009,
    "website": "https://www.cuh.ac.in",
    "accreditation": "NAAC A • Central Universities Act, 2009",
    "defaultSubtitle": "Central University • Jant-Pali, Mahendragarh, Haryana",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_himachal_pradesh",
    "name": "Central University of Himachal Pradesh",
    "shortName": "CUHP",
    "city": "Dharamshala",
    "state": "Himachal Pradesh",
    "type": "Central University",
    "category": "Multidisciplinary & Humanities",
    "established": 2009,
    "website": "http://www.cuhimachal.ac.in",
    "accreditation": "NAAC A+ • Central Universities Act, 2009",
    "defaultSubtitle": "Central University • Kangra, Dharamshala, Himachal Pradesh",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_jammu",
    "name": "Central University of Jammu",
    "shortName": "CUJ",
    "city": "Samba, Jammu",
    "state": "Jammu and Kashmir",
    "type": "Central University",
    "category": "Multidisciplinary & Applied Sciences",
    "established": 2011,
    "website": "https://www.cujammu.ac.in",
    "accreditation": "NAAC A+ • Central Universities Act",
    "defaultSubtitle": "Central University • Bagla, Rahya-Suchani, Jammu",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_jharkhand",
    "name": "Central University of Jharkhand",
    "shortName": "CUJ",
    "city": "Ranchi",
    "state": "Jharkhand",
    "type": "Central University",
    "category": "Multidisciplinary & Environmental Sciences",
    "established": 2009,
    "website": "http://cuj.ac.in",
    "accreditation": "NAAC A • Central Universities Act, 2009",
    "defaultSubtitle": "Central University • Brambe, Ranchi, Jharkhand",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_karnataka",
    "name": "Central University of Karnataka",
    "shortName": "CUK",
    "city": "Kalaburagi",
    "state": "Karnataka",
    "type": "Central University",
    "category": "Multidisciplinary & Engineering",
    "established": 2009,
    "website": "https://www.cuk.ac.in",
    "accreditation": "NAAC A • Central Universities Act, 2009",
    "defaultSubtitle": "Central University • Kadaganchi, Kalaburagi, Karnataka",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_kashmir",
    "name": "Central University of Kashmir",
    "shortName": "CUK",
    "city": "Ganderbal",
    "state": "Jammu and Kashmir",
    "type": "Central University",
    "category": "Multidisciplinary & Humanities",
    "established": 2009,
    "website": "https://www.cukashmir.ac.in",
    "accreditation": "NAAC B++ • Central Universities Act, 2009",
    "defaultSubtitle": "Central University • Tulmulla, Ganderbal, Jammu and Kashmir",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_kerala",
    "name": "Central University of Kerala",
    "shortName": "CUKerala",
    "city": "Kasaragod",
    "state": "Kerala",
    "type": "Central University",
    "category": "Multidisciplinary & Life Sciences",
    "established": 2009,
    "website": "https://www.cukerala.ac.in",
    "accreditation": "NAAC A • Central Universities Act, 2009",
    "defaultSubtitle": "Central University • Tejaswini Hills, Periye, Kasaragod",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_odisha",
    "name": "Central University of Odisha",
    "shortName": "CUO",
    "city": "Koraput",
    "state": "Odisha",
    "type": "Central University",
    "category": "Multidisciplinary & Biodiversity",
    "established": 2009,
    "website": "https://cuo.ac.in",
    "accreditation": "UGC / Ministry of Education, Govt. of India",
    "defaultSubtitle": "Central University • Sunabeda, Koraput, Odisha",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_punjab",
    "name": "Central University of Punjab",
    "shortName": "CUPB",
    "city": "Bathinda",
    "state": "Punjab",
    "type": "Central University",
    "category": "Applied Sciences & Multidisciplinary",
    "established": 2009,
    "website": "http://www.cup.edu.in",
    "accreditation": "NAAC A+ • Top Ranked New Central University in NIRF",
    "defaultSubtitle": "Central University • Ghudda, Bathinda, Punjab",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_rajasthan",
    "name": "Central University of Rajasthan",
    "shortName": "CURAJ",
    "city": "Bandarsindri, Ajmer",
    "state": "Rajasthan",
    "type": "Central University",
    "category": "Basic & Applied Sciences",
    "established": 2009,
    "website": "https://www.curaj.ac.in",
    "accreditation": "NAAC A++ • Central Universities Act, 2009",
    "defaultSubtitle": "Premier Central University of Rajasthan • Ajmer",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_south_bihar",
    "name": "Central University of South Bihar",
    "shortName": "CUSB",
    "city": "Gaya",
    "state": "Bihar",
    "type": "Central University",
    "category": "Multidisciplinary & Sciences",
    "established": 2009,
    "website": "https://www.cusb.ac.in",
    "accreditation": "NAAC A++ • Highest Grade Central University in Bihar",
    "defaultSubtitle": "Central University • Panchanpur, Gaya, Bihar",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_central_university_of_tamil_nadu",
    "name": "Central University of Tamil Nadu",
    "shortName": "CUTN",
    "city": "Thiruvarur",
    "state": "Tamil Nadu",
    "type": "Central University",
    "category": "Multidisciplinary & Sciences",
    "established": 2009,
    "website": "https://cutn.ac.in",
    "accreditation": "NAAC B++ • Central Universities Act, 2009",
    "defaultSubtitle": "Central University • Neelakudi, Thiruvarur, Tamil Nadu",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_chanakya_national_law_university",
    "name": "Chanakya National Law University",
    "shortName": "CNLU Patna",
    "city": "Patna",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Law",
    "established": 2006,
    "website": "https://cnlu.ac.in",
    "accreditation": "National Law University in Bihar • BCI Recognized",
    "defaultSubtitle": "State Public University • Patna, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_chandigarh_university",
    "name": "Chandigarh University",
    "shortName": "CU Gharuan",
    "city": "Mohali",
    "state": "Punjab",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2012,
    "website": "https://www.cuchd.in",
    "accreditation": "NAAC A+ Accredited Private University in Punjab",
    "defaultSubtitle": "State Private University • Mohali, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_chandra_shekhar_azad_university_of_agriculture_and_technology",
    "name": "Chandra Shekhar Azad University of Agriculture and Technology",
    "shortName": "CSAU Kanpur",
    "city": "Kanpur",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1975,
    "website": "https://csauk.ac.in",
    "accreditation": "Premier Agricultural Sciences University in UP",
    "defaultSubtitle": "State Public University • Kanpur, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_charotar_university_of_science_and_technology",
    "name": "Charotar University of Science and Technology",
    "shortName": "CHARUSAT Changa",
    "city": "Changa",
    "state": "Gujarat",
    "type": "State Private University",
    "category": "Science & Research",
    "established": 2009,
    "website": "https://www.charusat.ac.in",
    "accreditation": "NAAC A+ Accredited Science & Tech University",
    "defaultSubtitle": "State Private University • Changa, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_chaudhary_charan_singh_haryana_agricultural_university",
    "name": "Chaudhary Charan Singh Haryana Agricultural University",
    "shortName": "CCSHAU Hisar",
    "city": "Hisar",
    "state": "Haryana",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1970,
    "website": "http://hau.ac.in",
    "accreditation": "Premier Agricultural Institution • ICAR Award Winner",
    "defaultSubtitle": "State Public University • Hisar, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_chaudhary_charan_singh_university",
    "name": "Chaudhary Charan Singh University",
    "shortName": "CCSU Meerut",
    "city": "Meerut",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1965,
    "website": "https://www.ccsuniversity.ac.in",
    "accreditation": "NAAC A++ Grade State University in Western UP (3.66/4)",
    "defaultSubtitle": "State Public University • Meerut, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_chaudhary_devi_lal_university",
    "name": "Chaudhary Devi Lal University",
    "shortName": "CDLU Sirsa",
    "city": "Sirsa",
    "state": "Haryana",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2003,
    "website": "https://www.cdlu.ac.in",
    "accreditation": "State University of Western Haryana • NAAC B",
    "defaultSubtitle": "State Public University • Sirsa, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_chhatrapati_shahu_ji_maharaj_university",
    "name": "Chhatrapati Shahu Ji Maharaj University",
    "shortName": "CSJMU Kanpur",
    "city": "Kanpur",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1966,
    "website": "http://www.kanpuruniversity.org",
    "accreditation": "NAAC A++ Grade State University in Kanpur (3.57/4)",
    "defaultSubtitle": "State Public University • Kanpur, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_chhattisgarh_swami_vivekanand_technical_university",
    "name": "Chhattisgarh Swami Vivekanand Technical University",
    "shortName": "CSVTU Bhilai",
    "city": "Bhilai",
    "state": "Chhattisgarh",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2005,
    "website": "https://csvtu.ac.in",
    "accreditation": "State Technical Affiliating Body of Chhattisgarh",
    "defaultSubtitle": "State Public University • Bhilai, Chhattisgarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_chitkara_university",
    "name": "Chitkara University",
    "shortName": "Chitkara Rajpura",
    "city": "Rajpura",
    "state": "Punjab",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://www.chitkara.edu.in",
    "accreditation": "NAAC A+ Accredited Private Technological University",
    "defaultSubtitle": "State Private University • Rajpura, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_chitkara_university_himachal_pradesh",
    "name": "Chitkara University Himachal Pradesh",
    "shortName": "Chitkara HP",
    "city": "Solan",
    "state": "Himachal Pradesh",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 2008,
    "website": "https://www.chitkarauniversity.edu.in",
    "accreditation": "NAAC A+ Grade Private University in Solan",
    "defaultSubtitle": "State Private University • Solan, Himachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_christ_university",
    "name": "Christ University",
    "shortName": "Christ (Deemed to be University)",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1969,
    "website": "https://christuniversity.in",
    "accreditation": "NAAC A+ Grade Deemed University",
    "defaultSubtitle": "Deemed to be University • Bengaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_cluster_university_of_jammu",
    "name": "Cluster University of Jammu",
    "shortName": "CU Jammu State",
    "city": "Jammu",
    "state": "Jammu and Kashmir",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2016,
    "website": "http://clujammu.ac.in",
    "accreditation": "Cluster University under RUSA • Govt. of J&K",
    "defaultSubtitle": "State Public University • Jammu, Jammu and Kashmir • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_cluster_university_of_srinagar",
    "name": "Cluster University of Srinagar",
    "shortName": "CUS Srinagar",
    "city": "Srinagar",
    "state": "Jammu and Kashmir",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2016,
    "website": "https://cusrinagar.edu.in",
    "accreditation": "Cluster University under RUSA • Govt. of J&K",
    "defaultSubtitle": "State Public University • Srinagar, Jammu and Kashmir • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_cochin_university_of_science_and_technology",
    "name": "Cochin University of Science and Technology",
    "shortName": "CUSAT Kochi",
    "city": "Kochi",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1971,
    "website": "https://cusat.ac.in",
    "accreditation": "NAAC A+ Grade State Technological & Marine Leader",
    "defaultSubtitle": "State Public University • Kochi, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_cooch_behar_panchanan_barma_university",
    "name": "Cooch Behar Panchanan Barma University",
    "shortName": "CBPBU Cooch Behar",
    "city": "Cooch Behar",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2012,
    "website": "https://cbpbu.ac.in",
    "accreditation": "State University of Northern Bengal",
    "defaultSubtitle": "State Public University • Cooch Behar, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_cotton_university",
    "name": "Cotton University",
    "shortName": "Cotton University Guwahati",
    "city": "Guwahati",
    "state": "Assam",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1901,
    "website": "https://cottonuniversity.ac.in",
    "accreditation": "Historic Heritage Institution in Assam • NAAC A Grade",
    "defaultSubtitle": "State Public University • Guwahati, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_csk_himachal_pradesh_krishi_vishvavidyalaya",
    "name": "CSK Himachal Pradesh Krishi Vishvavidyalaya",
    "shortName": "CSKHPKV Palampur",
    "city": "Palampur",
    "state": "Himachal Pradesh",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1978,
    "website": "http://www.hillagric.ac.in",
    "accreditation": "Hill Agricultural Research Leader • ICAR",
    "defaultSubtitle": "State Public University • Palampur, Himachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_cv_raman_global_university",
    "name": "CV Raman Global University",
    "shortName": "CGU Bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 1997,
    "website": "https://cgu-odisha.ac.in",
    "accreditation": "NAAC A Grade Technological University in Odisha",
    "defaultSubtitle": "State Private University • Bhubaneswar, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_damodaram_sanjivayya_national_law_university",
    "name": "Damodaram Sanjivayya National Law University",
    "shortName": "DSNLU Visakhapatnam",
    "city": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Law",
    "established": 2008,
    "website": "https://dsnlu.ac.in",
    "accreditation": "National Law University in AP • BCI Recognized",
    "defaultSubtitle": "State Public University • Visakhapatnam, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_davangere_university",
    "name": "Davangere University",
    "shortName": "Davangere University",
    "city": "Davangere",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2009,
    "website": "http://davangereuniversity.ac.in",
    "accreditation": "Central Karnataka State University",
    "defaultSubtitle": "State Public University • Davangere, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dayananda_sagar_university",
    "name": "Dayananda Sagar University",
    "shortName": "DSU Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2014,
    "website": "https://www.dsu.edu.in",
    "accreditation": "Healthcare, AI & Core Engineering Hub",
    "defaultSubtitle": "State Private University • Bengaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_deen_dayal_upadhyaya_gorakhpur_university",
    "name": "Deen Dayal Upadhyaya Gorakhpur University",
    "shortName": "DDU Gorakhpur",
    "city": "Gorakhpur",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1957,
    "website": "https://ddugu.ac.in",
    "accreditation": "NAAC A++ Grade State University in Eastern UP",
    "defaultSubtitle": "State Public University • Gorakhpur, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_deenbandhu_chhotu_ram_university_of_science_and_technology",
    "name": "Deenbandhu Chhotu Ram University of Science and Technology",
    "shortName": "DCRUST Murthal",
    "city": "Murthal",
    "state": "Haryana",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1987,
    "website": "https://dcrustm.ac.in",
    "accreditation": "State Technological University of Haryana • NAAC A",
    "defaultSubtitle": "State Public University • Murthal, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_delhi_pharmaceutical_sciences_and_research_university",
    "name": "Delhi Pharmaceutical Sciences and Research University",
    "shortName": "DPSRU Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 2008,
    "website": "https://dpsru.edu.in",
    "accreditation": "First Pharmacy University in India & Third in the World",
    "defaultSubtitle": "State Public University • New Delhi, Delhi • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_delhi_skill_and_entrepreneurship_university",
    "name": "Delhi Skill and Entrepreneurship University",
    "shortName": "DSEU Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2020,
    "website": "https://dseu.ac.in",
    "accreditation": "Vocational, Technical & Entrepreneurial Training",
    "defaultSubtitle": "State Public University • New Delhi, Delhi • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_delhi_technological_university",
    "name": "Delhi Technological University",
    "shortName": "DTU (Delhi College of Engineering)",
    "city": "Delhi",
    "state": "Delhi",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1941,
    "website": "http://www.dtu.ac.in",
    "accreditation": "Premier Technological University • Formerly DCE (1941)",
    "defaultSubtitle": "State Public University • Delhi, Delhi • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_devi_ahilya_vishwavidyalaya",
    "name": "Devi Ahilya Vishwavidyalaya",
    "shortName": "DAVV Indore",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1964,
    "website": "https://www.dauniv.ac.in",
    "accreditation": "Only University in MP with NAAC A++ Grade (3.69/4)",
    "defaultSubtitle": "State Public University • Indore, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dhirubhai_ambani_institute_of_information_and_communication_technology",
    "name": "Dhirubhai Ambani Institute of Information and Communication Technology",
    "shortName": "DA-IICT Gandhinagar",
    "city": "Gandhinagar",
    "state": "Gujarat",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 2001,
    "website": "https://www.daiict.ac.in",
    "accreditation": "Pioneer in ICT Education • NAAC A Grade",
    "defaultSubtitle": "State Private University • Gandhinagar, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dibrugarh_university",
    "name": "Dibrugarh University",
    "shortName": "Dibrugarh University",
    "city": "Dibrugarh",
    "state": "Assam",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1965,
    "website": "https://dibru.ac.in",
    "accreditation": "Easternmost University in India • NAAC A Grade",
    "defaultSubtitle": "State Public University • Dibrugarh, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_digital_university_kerala",
    "name": "Digital University Kerala",
    "shortName": "DUK Trivandrum (IIITM-K)",
    "city": "Thiruvananthapuram",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2020,
    "website": "https://duk.ac.in",
    "accreditation": "First Digital University in India • AI, Chips & Cyber",
    "defaultSubtitle": "State Public University • Thiruvananthapuram, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dit_university",
    "name": "DIT University",
    "shortName": "DIT Dehradun",
    "city": "Dehradun",
    "state": "Uttarakhand",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 1998,
    "website": "https://www.dituniversity.edu.in",
    "accreditation": "Leading Private University in Himalayan Foothills",
    "defaultSubtitle": "State Private University • Dehradun, Uttarakhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dr_a_p_j_abdul_kalam_technical_university",
    "name": "Dr. A.P.J. Abdul Kalam Technical University",
    "shortName": "AKTU Lucknow (UPTU)",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2000,
    "website": "https://aktu.ac.in",
    "accreditation": "Largest Technical Affiliating Body in India • Govt. of UP",
    "defaultSubtitle": "State Public University • Lucknow, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dr_b_r_ambedkar_institute_of_technology_port_blair",
    "name": "Dr. B.R. Ambedkar Institute of Technology Port Blair",
    "shortName": "DBRAIT Port Blair",
    "city": "Port Blair",
    "state": "Andaman and Nicobar Islands",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1984,
    "website": "https://dbrait.andaman.gov.in",
    "accreditation": "Premier Island Technical & Polytechnic Institute",
    "defaultSubtitle": "State Public University • Port Blair, Andaman and Nicobar Islands • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dr_b_r_ambedkar_national_institute_of_technology_jalandhar",
    "name": "Dr. B.R. Ambedkar National Institute of Technology Jalandhar",
    "shortName": "NIT Jalandhar",
    "city": "Jalandhar",
    "state": "Punjab",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1987,
    "website": "https://www.nitj.ac.in",
    "accreditation": "Premier Engineering Institute in Punjab • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1987 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_dr_b_r_ambedkar_university_delhi",
    "name": "Dr. B.R. Ambedkar University Delhi",
    "shortName": "AUD New Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "State Public University",
    "category": "Arts & Humanities",
    "established": 2007,
    "website": "https://aud.ac.in",
    "accreditation": "Liberal Arts & Social Sciences Center • Govt. of Delhi",
    "defaultSubtitle": "State Public University • New Delhi, Delhi • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dr_babasaheb_ambedkar_marathwada_university",
    "name": "Dr. Babasaheb Ambedkar Marathwada University",
    "shortName": "BAMU Aurangabad",
    "city": "Chhatrapati Sambhajinagar",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1958,
    "website": "https://www.bamu.ac.in",
    "accreditation": "Marathwada Regional University • NAAC A Grade",
    "defaultSubtitle": "State Public University • Chhatrapati Sambhajinagar, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dr_babasaheb_ambedkar_technological_university",
    "name": "Dr. Babasaheb Ambedkar Technological University",
    "shortName": "DBATU Lonere",
    "city": "Lonere",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1989,
    "website": "https://dbatu.ac.in",
    "accreditation": "State Technical Affiliating University of Maharashtra",
    "defaultSubtitle": "State Public University • Lonere, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dr_d_y_patil_vidyapeeth",
    "name": "Dr. D. Y. Patil Vidyapeeth",
    "shortName": "DPU Pune",
    "city": "Pune",
    "state": "Maharashtra",
    "type": "Deemed to be University",
    "category": "Medical & Health",
    "established": 2003,
    "website": "https://dpu.edu.in",
    "accreditation": "NAAC A++ Accredited Deemed University (3.64/4)",
    "defaultSubtitle": "Deemed to be University • Pune, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dr_harisingh_gour_vishwavidyalaya",
    "name": "Dr. Harisingh Gour Vishwavidyalaya",
    "shortName": "DHSGU",
    "city": "Sagar",
    "state": "Madhya Pradesh",
    "type": "Central University",
    "category": "Multidisciplinary & Sciences",
    "established": 1946,
    "website": "http://www.dhsgsu.ac.in",
    "accreditation": "NAAC A+ • Central University Act, 2009",
    "defaultSubtitle": "Oldest Central University of Madhya Pradesh • Sagar",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_dr_rajendra_prasad_central_agricultural_university",
    "name": "Dr. Rajendra Prasad Central Agricultural University",
    "shortName": "RPCAU",
    "city": "Pusa, Samastipur",
    "state": "Bihar",
    "type": "Central University",
    "category": "Agricultural Sciences & Engineering",
    "established": 2016,
    "website": "https://www.rpcau.ac.in",
    "accreditation": "ICAR Recognized Central University",
    "defaultSubtitle": "Central Agricultural University • Pusa, Bihar",
    "leadTitle": "Dean of Agriculture",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_dr_ram_manohar_lohia_avadh_university",
    "name": "Dr. Ram Manohar Lohia Avadh University",
    "shortName": "RMLAU Ayodhya",
    "city": "Ayodhya",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1975,
    "website": "http://www.rmlau.ac.in",
    "accreditation": "Major State Affiliating University in Awadh Region • NAAC A",
    "defaultSubtitle": "State Public University • Ayodhya, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dr_ram_manohar_lohiya_national_law_university",
    "name": "Dr. Ram Manohar Lohiya National Law University",
    "shortName": "RMLNLU Lucknow",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Law",
    "established": 2005,
    "website": "http://www.rmlnlu.ac.in",
    "accreditation": "National Law University in Uttar Pradesh • BCI",
    "defaultSubtitle": "State Public University • Lucknow, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dr_yashwant_singh_parmar_university_of_horticulture_and_forestry",
    "name": "Dr. Yashwant Singh Parmar University of Horticulture and Forestry",
    "shortName": "YSP UHF Nauni",
    "city": "Solan",
    "state": "Himachal Pradesh",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1985,
    "website": "http://www.yspuniversity.ac.in",
    "accreditation": "First Horticulture & Forestry University in Asia",
    "defaultSubtitle": "State Public University • Solan, Himachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dr_ysr_university_of_health_sciences",
    "name": "Dr. YSR University of Health Sciences",
    "shortName": "YSRUHS Vijayawada",
    "city": "Vijayawada",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 1986,
    "website": "http://ntruhs.ap.nic.in",
    "accreditation": "Apex Health Sciences Body in Andhra Pradesh",
    "defaultSubtitle": "State Public University • Vijayawada, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_dravidian_university",
    "name": "Dravidian University",
    "shortName": "Dravidian University",
    "city": "Kuppam",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Arts & Humanities",
    "established": 1997,
    "website": "http://www.dravidianuniversity.ac.in",
    "accreditation": "Inter-State Linguistic & Cultural Research",
    "defaultSubtitle": "State Public University • Kuppam, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_english_and_foreign_languages_university",
    "name": "English and Foreign Languages University",
    "shortName": "EFLU",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "Central University",
    "category": "Linguistics & Foreign Languages",
    "established": 1958,
    "website": "https://www.efluniversity.ac.in",
    "accreditation": "NAAC A+ • Institute of National Distinction",
    "defaultSubtitle": "Central University dedicated to Language Studies • Hyderabad",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_fakir_mohan_university",
    "name": "Fakir Mohan University",
    "shortName": "FM University Balasore",
    "city": "Balasore",
    "state": "Odisha",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1999,
    "website": "https://fmuniversity.nic.in",
    "accreditation": "Northern Coastal Odisha University • NAAC A",
    "defaultSubtitle": "State Public University • Balasore, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_flame_university",
    "name": "FLAME University",
    "shortName": "FLAME Pune",
    "city": "Pune",
    "state": "Maharashtra",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2015,
    "website": "https://www.flame.edu.in",
    "accreditation": "Pioneer of Liberal Education in India",
    "defaultSubtitle": "State Private University • Pune, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_forest_research_institute",
    "name": "Forest Research Institute",
    "shortName": "FRI Dehradun",
    "city": "Dehradun",
    "state": "Uttarakhand",
    "type": "Deemed to be University",
    "category": "Science & Research",
    "established": 1906,
    "website": "http://fridu.edu.in",
    "accreditation": "Historic Forestry & Ecological Science Research Center",
    "defaultSubtitle": "Deemed to be University • Dehradun, Uttarakhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_galgotias_university",
    "name": "Galgotias University",
    "shortName": "Galgotias Greater Noida",
    "city": "Greater Noida",
    "state": "Uttar Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2011,
    "website": "https://www.galgotiasuniversity.edu.in",
    "accreditation": "NAAC A+ Grade Private University in NCR",
    "defaultSubtitle": "State Private University • Greater Noida, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_ganpat_university",
    "name": "Ganpat University",
    "shortName": "GNU Mehsana",
    "city": "Mehsana",
    "state": "Gujarat",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2005,
    "website": "https://www.ganpatuniversity.ac.in",
    "accreditation": "Pioneer Industry-Linked Education",
    "defaultSubtitle": "State Private University • Mehsana, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_gati_shakti_vishwavidyalaya",
    "name": "Gati Shakti Vishwavidyalaya",
    "shortName": "GSV",
    "city": "Vadodara",
    "state": "Gujarat",
    "type": "Central University",
    "category": "Transportation & Logistics Engineering",
    "established": 2022,
    "website": "https://gsv.ac.in",
    "accreditation": "Central University under Ministry of Railways",
    "defaultSubtitle": "Pioneering Central Transportation University • Vadodara, Gujarat",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_gauhati_university",
    "name": "Gauhati University",
    "shortName": "Gauhati University (GU)",
    "city": "Guwahati",
    "state": "Assam",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1948,
    "website": "https://www.gauhati.ac.in",
    "accreditation": "Oldest University in North-East India • NAAC A Grade",
    "defaultSubtitle": "State Public University • Guwahati, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_gd_goenka_university",
    "name": "GD Goenka University",
    "shortName": "GD Goenka Gurugram",
    "city": "Gurugram",
    "state": "Haryana",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2013,
    "website": "https://www.gdgoenkauniversity.com",
    "accreditation": "Top Ranked Private University in NCR • UGC Recognized",
    "defaultSubtitle": "State Private University • Gurugram, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_gitam_deemed_to_be_university",
    "name": "GITAM (Deemed to be University)",
    "shortName": "GITAM Visakhapatnam",
    "city": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1980,
    "website": "https://www.gitam.edu",
    "accreditation": "NAAC A++ Grade Deemed University (3.54/4)",
    "defaultSubtitle": "Deemed to be University • Visakhapatnam, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_gla_university",
    "name": "GLA University",
    "shortName": "GLA Mathura",
    "city": "Mathura",
    "state": "Uttar Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 1998,
    "website": "https://www.gla.ac.in",
    "accreditation": "NAAC A+ Grade State Private University (3.46/4)",
    "defaultSubtitle": "State Private University • Mathura, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_goa_university",
    "name": "Goa University",
    "shortName": "Goa University (GU)",
    "city": "Taleigao Plateau",
    "state": "Goa",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1985,
    "website": "https://www.unigoa.ac.in",
    "accreditation": "Apex State University in Goa • NAAC A Grade",
    "defaultSubtitle": "State Public University • Taleigao Plateau, Goa • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_gondwana_university",
    "name": "Gondwana University",
    "shortName": "Gondwana University",
    "city": "Gadchiroli",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2011,
    "website": "https://unigdu.ac.in",
    "accreditation": "Tribal & Forest Region Higher Education Leader",
    "defaultSubtitle": "State Public University • Gadchiroli, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_govind_ballabh_pant_university_of_agriculture_and_technology",
    "name": "Govind Ballabh Pant University of Agriculture and Technology",
    "shortName": "GBPUAT Pantnagar",
    "city": "Pantnagar",
    "state": "Uttarakhand",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1960,
    "website": "https://gbpuat.ac.in",
    "accreditation": "First Agricultural University in India • Green Revolution Pioneer",
    "defaultSubtitle": "State Public University • Pantnagar, Uttarakhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_graphic_era_deemed_to_be_university",
    "name": "Graphic Era (Deemed to be University)",
    "shortName": "Graphic Era Dehradun",
    "city": "Dehradun",
    "state": "Uttarakhand",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1993,
    "website": "https://geu.ac.in",
    "accreditation": "NIRF Top 55 Engineering • NAAC A+ Grade",
    "defaultSubtitle": "Deemed to be University • Dehradun, Uttarakhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_gujarat_national_law_university",
    "name": "Gujarat National Law University",
    "shortName": "GNLU Gandhinagar",
    "city": "Gandhinagar",
    "state": "Gujarat",
    "type": "State Public University",
    "category": "Law",
    "established": 2003,
    "website": "https://www.gnlu.ac.in",
    "accreditation": "Leading Maritime & International Law Center • BCI",
    "defaultSubtitle": "State Public University • Gandhinagar, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_gujarat_technological_university",
    "name": "Gujarat Technological University",
    "shortName": "GTU Ahmedabad",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2007,
    "website": "https://www.gtu.ac.in",
    "accreditation": "Apex Technical Affiliating Body of Gujarat • NAAC A+",
    "defaultSubtitle": "State Public University • Ahmedabad, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_gujarat_university",
    "name": "Gujarat University",
    "shortName": "Gujarat University (GU)",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1949,
    "website": "https://www.gujaratuniversity.ac.in",
    "accreditation": "Oldest & Largest State University in Gujarat • NAAC A+",
    "defaultSubtitle": "State Public University • Ahmedabad, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_gulbarga_university",
    "name": "Gulbarga University",
    "shortName": "Gulbarga University",
    "city": "Kalaburagi",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1980,
    "website": "https://gug.ac.in",
    "accreditation": "Kalyana-Karnataka Regional University • NAAC B",
    "defaultSubtitle": "State Public University • Kalaburagi, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_guru_ghasidas_vishwavidyalaya",
    "name": "Guru Ghasidas Vishwavidyalaya",
    "shortName": "GGV",
    "city": "Bilaspur",
    "state": "Chhattisgarh",
    "type": "Central University",
    "category": "Multidisciplinary & Engineering",
    "established": 1983,
    "website": "https://www.ggu.ac.in",
    "accreditation": "NAAC A++ • Central University Act, 2009",
    "defaultSubtitle": "Central University • Koni, Bilaspur, Chhattisgarh",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_guru_gobind_singh_indraprastha_university",
    "name": "Guru Gobind Singh Indraprastha University",
    "shortName": "IP University (GGSIPU)",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1998,
    "website": "http://www.ipu.ac.in",
    "accreditation": "NAAC A++ Grade State University • Govt. of NCT of Delhi",
    "defaultSubtitle": "State Public University • New Delhi, Delhi • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_guru_jambheshwar_university_of_science_and_technology",
    "name": "Guru Jambheshwar University of Science and Technology",
    "shortName": "GJUST Hisar",
    "city": "Hisar",
    "state": "Haryana",
    "type": "State Public University",
    "category": "Science & Research",
    "established": 1995,
    "website": "http://www.gjust.ac.in",
    "accreditation": "NAAC A+ Grade Science & Technological University",
    "defaultSubtitle": "State Public University • Hisar, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_guru_nanak_dev_university",
    "name": "Guru Nanak Dev University",
    "shortName": "GNDU Amritsar",
    "city": "Amritsar",
    "state": "Punjab",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1969,
    "website": "http://www.gndu.ac.in",
    "accreditation": "Category I University • NAAC A++ (3.85/4)",
    "defaultSubtitle": "State Public University • Amritsar, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_gurukula_kangri_vishwavidyalaya",
    "name": "Gurukula Kangri Vishwavidyalaya",
    "shortName": "GKV Haridwar",
    "city": "Haridwar",
    "state": "Uttarakhand",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1902,
    "website": "https://www.gkv.ac.in",
    "accreditation": "Historic Vedic & Modern Education Deemed University",
    "defaultSubtitle": "Deemed to be University • Haridwar, Uttarakhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_harcourt_butler_technical_university",
    "name": "Harcourt Butler Technical University",
    "shortName": "HBTU Kanpur",
    "city": "Kanpur",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1921,
    "website": "https://hbtu.ac.in",
    "accreditation": "Centenary Engineering Institution (Formerly HBTI) • NAAC A",
    "defaultSubtitle": "State Public University • Kanpur, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_hemchand_yadav_vishwavidyalaya",
    "name": "Hemchand Yadav Vishwavidyalaya",
    "shortName": "Durg University",
    "city": "Durg",
    "state": "Chhattisgarh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2015,
    "website": "https://durguniversity.ac.in",
    "accreditation": "State University of Durg Division",
    "defaultSubtitle": "State Public University • Durg, Chhattisgarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_hemchandracharya_north_gujarat_university",
    "name": "Hemchandracharya North Gujarat University",
    "shortName": "HNGU Patan",
    "city": "Patan",
    "state": "Gujarat",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1986,
    "website": "https://www.ngu.ac.in",
    "accreditation": "NAAC A Grade State University in North Gujarat",
    "defaultSubtitle": "State Public University • Patan, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_hemvati_nandan_bahuguna_garhwal_university",
    "name": "Hemvati Nandan Bahuguna Garhwal University",
    "shortName": "HNBGU",
    "city": "Srinagar, Garhwal",
    "state": "Uttarakhand",
    "type": "Central University",
    "category": "Multidisciplinary & Himalayan Ecology",
    "established": 1973,
    "website": "https://www.hnbgu.ac.in",
    "accreditation": "NAAC A • Central Universities Act, 2009",
    "defaultSubtitle": "Central University • Srinagar, Pauri Garhwal, Uttarakhand",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_hidayatullah_national_law_university",
    "name": "Hidayatullah National Law University",
    "shortName": "HNLU Raipur",
    "city": "Nava Raipur",
    "state": "Chhattisgarh",
    "type": "State Public University",
    "category": "Law",
    "established": 2003,
    "website": "https://hnlu.ac.in",
    "accreditation": "Premier National Law University in Central India • BCI",
    "defaultSubtitle": "State Public University • Nava Raipur, Chhattisgarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_himachal_pradesh_national_law_university",
    "name": "Himachal Pradesh National Law University",
    "shortName": "HPNLU Shimla",
    "city": "Shimla",
    "state": "Himachal Pradesh",
    "type": "State Public University",
    "category": "Law",
    "established": 2016,
    "website": "https://hpnlu.ac.in",
    "accreditation": "National Law University in Himalayas • BCI",
    "defaultSubtitle": "State Public University • Shimla, Himachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_himachal_pradesh_technical_university",
    "name": "Himachal Pradesh Technical University",
    "shortName": "HPTU Hamirpur",
    "city": "Hamirpur",
    "state": "Himachal Pradesh",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://www.himtu.ac.in",
    "accreditation": "State Technical University of Himachal Pradesh",
    "defaultSubtitle": "State Public University • Hamirpur, Himachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_himachal_pradesh_university",
    "name": "Himachal Pradesh University",
    "shortName": "HPU Shimla",
    "city": "Shimla",
    "state": "Himachal Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1970,
    "website": "https://hpuniv.ac.in",
    "accreditation": "Premier Himalayan State University • NAAC A Grade",
    "defaultSubtitle": "State Public University • Shimla, Himachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_himalayan_university",
    "name": "Himalayan University",
    "shortName": "Himalayan University",
    "city": "Itanagar",
    "state": "Arunachal Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2013,
    "website": "https://www.himalayanuniversity.com",
    "accreditation": "UGC Recognized State Private University",
    "defaultSubtitle": "State Private University • Itanagar, Arunachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_hindustan_institute_of_technology_and_science",
    "name": "Hindustan Institute of Technology and Science",
    "shortName": "HITS Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1985,
    "website": "https://hindustanuniv.ac.in",
    "accreditation": "Aeronautical & Multi-Disciplinary Pioneer • NAAC A+",
    "defaultSubtitle": "Deemed to be University • Chennai, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_i_k_gujral_punjab_technical_university",
    "name": "I.K. Gujral Punjab Technical University",
    "shortName": "IKGPTU Jalandhar",
    "city": "Jalandhar",
    "state": "Punjab",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1997,
    "website": "https://ptu.ac.in",
    "accreditation": "Apex Technical Affiliating Body of Punjab",
    "defaultSubtitle": "State Public University • Jalandhar, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_indian_agricultural_research_institute",
    "name": "Indian Agricultural Research Institute",
    "shortName": "IARI (Pusa Institute)",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Deemed to be University",
    "category": "Agriculture",
    "established": 1905,
    "website": "https://www.iari.res.in",
    "accreditation": "Cradle of Agricultural Research • ICAR National Institute",
    "defaultSubtitle": "Deemed to be University • New Delhi, Delhi • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_indian_institute_of_engineering_science_and_technology_shibpur",
    "name": "Indian Institute of Engineering Science and Technology Shibpur",
    "shortName": "IIEST Shibpur",
    "city": "Howrah",
    "state": "West Bengal",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1856,
    "website": "https://www.iiests.ac.in",
    "accreditation": "Second Oldest Engineering College in India • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1856 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_agartala",
    "name": "Indian Institute of Information Technology Agartala",
    "shortName": "IIIT Agartala",
    "city": "Agartala",
    "state": "Tripura",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2018,
    "website": "https://iiitagartala.ac.in",
    "accreditation": "North-Eastern Information Technology Pioneer • MoE",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2018 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_allahabad",
    "name": "Indian Institute of Information Technology Allahabad",
    "shortName": "IIIT Allahabad",
    "city": "Prayagraj",
    "state": "Uttar Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1999,
    "website": "https://www.iiita.ac.in",
    "accreditation": "Premier Cyber Security & IT Center • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 1999 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_bhagalpur",
    "name": "Indian Institute of Information Technology Bhagalpur",
    "shortName": "IIIT Bhagalpur",
    "city": "Bhagalpur",
    "state": "Bihar",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2017,
    "website": "https://www.iiitbh.ac.in",
    "accreditation": "Eastern Bihar Information Technology Center • MoE",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2017 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_bhopal",
    "name": "Indian Institute of Information Technology Bhopal",
    "shortName": "IIIT Bhopal",
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2017,
    "website": "https://iiitbhopal.ac.in",
    "accreditation": "IT & Computer Science Education • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2017 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_design_and_manufacturing_jabalpur",
    "name": "Indian Institute of Information Technology Design and Manufacturing Jabalpur",
    "shortName": "IIITDM Jabalpur",
    "city": "Jabalpur",
    "state": "Madhya Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2005,
    "website": "https://www.iiitdmj.ac.in",
    "accreditation": "Design & Advanced Manufacturing Institute • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2005 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_design_and_manufacturing_kancheepuram",
    "name": "Indian Institute of Information Technology Design and Manufacturing Kancheepuram",
    "shortName": "IIITDM Kancheepuram",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2007,
    "website": "https://www.iiitdm.ac.in",
    "accreditation": "Pioneer in IT Enabled Design & Smart Manufacturing • MoE",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2007 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_dharwad",
    "name": "Indian Institute of Information Technology Dharwad",
    "shortName": "IIIT Dharwad",
    "city": "Dharwad",
    "state": "Karnataka",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2015,
    "website": "https://iiitdwd.ac.in",
    "accreditation": "Data Science & Intelligent Systems Center • MoE",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2015 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_guwahati",
    "name": "Indian Institute of Information Technology Guwahati",
    "shortName": "IIIT Guwahati",
    "city": "Guwahati",
    "state": "Assam",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2013,
    "website": "https://www.iiitg.ac.in",
    "accreditation": "IT Innovation Center in North-East • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2013 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_kalyani",
    "name": "Indian Institute of Information Technology Kalyani",
    "shortName": "IIIT Kalyani",
    "city": "Kalyani",
    "state": "West Bengal",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2014,
    "website": "https://iiitkalyani.ac.in",
    "accreditation": "Premier Information Technology Institute in Bengal • MoE",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2014 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_kota",
    "name": "Indian Institute of Information Technology Kota",
    "shortName": "IIIT Kota",
    "city": "Kota",
    "state": "Rajasthan",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2013,
    "website": "https://iiitkota.ac.in",
    "accreditation": "Technical Education Hub in Rajasthan • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2013 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_kottayam",
    "name": "Indian Institute of Information Technology Kottayam",
    "shortName": "IIIT Kottayam",
    "city": "Kottayam",
    "state": "Kerala",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2015,
    "website": "https://www.iiitkottayam.ac.in",
    "accreditation": "AI & Data Science Excellence Center • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2015 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_lucknow",
    "name": "Indian Institute of Information Technology Lucknow",
    "shortName": "IIIT Lucknow",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2015,
    "website": "https://iiitl.ac.in",
    "accreditation": "Leading Information Technology Institute in UP • MoE",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2015 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_nagpur",
    "name": "Indian Institute of Information Technology Nagpur",
    "shortName": "IIIT Nagpur",
    "city": "Nagpur",
    "state": "Maharashtra",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2016,
    "website": "https://iiitn.ac.in",
    "accreditation": "Vidarbha IT & Automation Center • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2016 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_pune",
    "name": "Indian Institute of Information Technology Pune",
    "shortName": "IIIT Pune",
    "city": "Pune",
    "state": "Maharashtra",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2016,
    "website": "https://www.iiitp.ac.in",
    "accreditation": "Cyber Security & Data Science Hub • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2016 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_ranchi",
    "name": "Indian Institute of Information Technology Ranchi",
    "shortName": "IIIT Ranchi",
    "city": "Ranchi",
    "state": "Jharkhand",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2016,
    "website": "https://iiitranchi.ac.in",
    "accreditation": "Premier Information Technology Institute in Jharkhand • MoE",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2016 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_sonepat",
    "name": "Indian Institute of Information Technology Sonepat",
    "shortName": "IIIT Sonepat",
    "city": "Sonipat",
    "state": "Haryana",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2014,
    "website": "https://iiitsonepat.ac.in",
    "accreditation": "NCR Tech Hub • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2014 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_sri_city",
    "name": "Indian Institute of Information Technology Sri City",
    "shortName": "IIIT Sri City",
    "city": "Chittoor",
    "state": "Andhra Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2013,
    "website": "https://www.iiits.ac.in",
    "accreditation": "Premier Smart Cities & Data Analytics Center • MoE",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2013 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_surat",
    "name": "Indian Institute of Information Technology Surat",
    "shortName": "IIIT Surat",
    "city": "Surat",
    "state": "Gujarat",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2017,
    "website": "https://iiitsurat.ac.in",
    "accreditation": "Leading IT Center in Southern Gujarat • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2017 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_una",
    "name": "Indian Institute of Information Technology Una",
    "shortName": "IIIT Una",
    "city": "Una",
    "state": "Himachal Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2014,
    "website": "https://iiitu.ac.in",
    "accreditation": "Himalayan Foothills IT Institute • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2014 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_information_technology_vadodara",
    "name": "Indian Institute of Information Technology Vadodara",
    "shortName": "IIIT Vadodara",
    "city": "Gandhinagar",
    "state": "Gujarat",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2013,
    "website": "https://iiitvadodara.ac.in",
    "accreditation": "Premier IT Institute in Gujarat • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance (INI) • Founded 2013 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_ahmedabad",
    "name": "Indian Institute of Management Ahmedabad",
    "shortName": "IIM Ahmedabad",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 1961,
    "website": "https://www.iima.ac.in",
    "accreditation": "NIRF #1 Management • EQUIS & AACSB Accredited",
    "defaultSubtitle": "Institute of National Importance • Founded 1961 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_amritsar",
    "name": "Indian Institute of Management Amritsar",
    "shortName": "IIM Amritsar",
    "city": "Amritsar",
    "state": "Punjab",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2015,
    "website": "https://iimamritsar.ac.in",
    "accreditation": "Premier B-School in Punjab • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2015 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_bangalore",
    "name": "Indian Institute of Management Bangalore",
    "shortName": "IIM Bangalore",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 1973,
    "website": "https://www.iimb.ac.in",
    "accreditation": "NIRF #2 Management • EQUIS Accredited",
    "defaultSubtitle": "Institute of National Importance • Founded 1973 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_bodh_gaya",
    "name": "Indian Institute of Management Bodh Gaya",
    "shortName": "IIM Bodh Gaya",
    "city": "Bodh Gaya",
    "state": "Bihar",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2015,
    "website": "https://iimbg.ac.in",
    "accreditation": "The Enlightening IIM • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2015 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_calcutta",
    "name": "Indian Institute of Management Calcutta",
    "shortName": "IIM Calcutta",
    "city": "Kolkata",
    "state": "West Bengal",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 1961,
    "website": "https://www.iimcal.ac.in",
    "accreditation": "First IIM • Triple Crown Accredited (AACSB, AMBA, EQUIS)",
    "defaultSubtitle": "Institute of National Importance • Founded 1961 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_indore",
    "name": "Indian Institute of Management Indore",
    "shortName": "IIM Indore",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 1996,
    "website": "https://www.iimidr.ac.in",
    "accreditation": "Triple Crown Accredited (AACSB, AMBA, EQUIS)",
    "defaultSubtitle": "Institute of National Importance • Founded 1996 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_jammu",
    "name": "Indian Institute of Management Jammu",
    "shortName": "IIM Jammu",
    "city": "Jammu",
    "state": "Jammu and Kashmir",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2016,
    "website": "https://www.iimj.ac.in",
    "accreditation": "Northernmost IIM • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2016 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_kashipur",
    "name": "Indian Institute of Management Kashipur",
    "shortName": "IIM Kashipur",
    "city": "Kashipur",
    "state": "Uttarakhand",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2011,
    "website": "https://www.iimkashipur.ac.in",
    "accreditation": "Premier Himalayan Region B-School • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2011 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_kozhikode",
    "name": "Indian Institute of Management Kozhikode",
    "shortName": "IIM Kozhikode",
    "city": "Kozhikode",
    "state": "Kerala",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 1996,
    "website": "https://www.iimk.ac.in",
    "accreditation": "EQUIS & AMBA Accredited • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1996 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_lucknow",
    "name": "Indian Institute of Management Lucknow",
    "shortName": "IIM Lucknow",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 1984,
    "website": "https://www.iiml.ac.in",
    "accreditation": "AACSB & AMBA Accredited • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1984 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_mumbai",
    "name": "Indian Institute of Management Mumbai",
    "shortName": "IIM Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 1963,
    "website": "https://iimmumbai.ac.in",
    "accreditation": "Formerly NITIE • Supply Chain & Industrial Leadership",
    "defaultSubtitle": "Institute of National Importance • Founded 1963 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_nagpur",
    "name": "Indian Institute of Management Nagpur",
    "shortName": "IIM Nagpur",
    "city": "Nagpur",
    "state": "Maharashtra",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2015,
    "website": "https://www.iimnagpur.ac.in",
    "accreditation": "New-Generation Flagship IIM • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2015 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_raipur",
    "name": "Indian Institute of Management Raipur",
    "shortName": "IIM Raipur",
    "city": "Naya Raipur",
    "state": "Chhattisgarh",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2010,
    "website": "https://www.iimraipur.ac.in",
    "accreditation": "Premier Management Education • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2010 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_ranchi",
    "name": "Indian Institute of Management Ranchi",
    "shortName": "IIM Ranchi",
    "city": "Ranchi",
    "state": "Jharkhand",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2009,
    "website": "https://www.iimranchi.ac.in",
    "accreditation": "Premier Management Institute in Eastern India • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 2009 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_rohtak",
    "name": "Indian Institute of Management Rohtak",
    "shortName": "IIM Rohtak",
    "city": "Rohtak",
    "state": "Haryana",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2009,
    "website": "https://www.iimrohtak.ac.in",
    "accreditation": "Premier Management Institute in NCR • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2009 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_sambalpur",
    "name": "Indian Institute of Management Sambalpur",
    "shortName": "IIM Sambalpur",
    "city": "Sambalpur",
    "state": "Odisha",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2015,
    "website": "https://iimsambalpur.ac.in",
    "accreditation": "Innovation & Digital Entrepreneurship Hub • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 2015 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_shillong",
    "name": "Indian Institute of Management Shillong",
    "shortName": "IIM Shillong",
    "city": "Shillong",
    "state": "Meghalaya",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2007,
    "website": "https://www.iimshillong.ac.in",
    "accreditation": "Rajiv Gandhi Indian Institute of Management • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 2007 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_sirmaur",
    "name": "Indian Institute of Management Sirmaur",
    "shortName": "IIM Sirmaur",
    "city": "Paonta Sahib",
    "state": "Himachal Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2015,
    "website": "https://www.iimsirmaur.ac.in",
    "accreditation": "Himalayan Frontier IIM • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2015 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_tiruchirappalli",
    "name": "Indian Institute of Management Tiruchirappalli",
    "shortName": "IIM Trichy",
    "city": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2011,
    "website": "https://www.iimtrichy.ac.in",
    "accreditation": "AMBA Accredited • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2011 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_udaipur",
    "name": "Indian Institute of Management Udaipur",
    "shortName": "IIM Udaipur",
    "city": "Udaipur",
    "state": "Rajasthan",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2011,
    "website": "https://www.iimu.ac.in",
    "accreditation": "AACSB Accredited • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2011 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_management_visakhapatnam",
    "name": "Indian Institute of Management Visakhapatnam",
    "shortName": "IIM Visakhapatnam",
    "city": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Management",
    "established": 2015,
    "website": "https://www.iimv.ac.in",
    "accreditation": "Sunrise State B-School • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2015 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_bhu_varanasi",
    "name": "Indian Institute of Technology (BHU) Varanasi",
    "shortName": "IIT BHU",
    "city": "Varanasi",
    "state": "Uttar Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1919,
    "website": "https://www.iitbhu.ac.in",
    "accreditation": "Centenary Heritage Engineering Institution • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1919 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_ism_dhanbad",
    "name": "Indian Institute of Technology (ISM) Dhanbad",
    "shortName": "IIT (ISM) Dhanbad",
    "city": "Dhanbad",
    "state": "Jharkhand",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1926,
    "website": "https://www.iitism.ac.in",
    "accreditation": "Pioneer Mineral & Earth Sciences Institute • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1926 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_bhilai",
    "name": "Indian Institute of Technology Bhilai",
    "shortName": "IIT Bhilai",
    "city": "Bhilai",
    "state": "Chhattisgarh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2016,
    "website": "https://www.iitbhilai.ac.in",
    "accreditation": "Premier Technical Institute in Central India • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 2016 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_bhubaneswar",
    "name": "Indian Institute of Technology Bhubaneswar",
    "shortName": "IIT Bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2008,
    "website": "https://www.iitbbs.ac.in",
    "accreditation": "Advanced Materials & Oceanic Studies • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2008 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_bombay",
    "name": "Indian Institute of Technology Bombay",
    "shortName": "IIT Bombay",
    "city": "Mumbai",
    "state": "Maharashtra",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1958,
    "website": "https://www.iitb.ac.in",
    "accreditation": "Institute of Eminence (IoE) • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1958 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_delhi",
    "name": "Indian Institute of Technology Delhi",
    "shortName": "IIT Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1961,
    "website": "https://home.iitd.ac.in",
    "accreditation": "Institute of Eminence (IoE) • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1961 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_dharwad",
    "name": "Indian Institute of Technology Dharwad",
    "shortName": "IIT Dharwad",
    "city": "Dharwad",
    "state": "Karnataka",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2016,
    "website": "https://iitdh.ac.in",
    "accreditation": "Premier Engineering Institute in Karnataka • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2016 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_gandhinagar",
    "name": "Indian Institute of Technology Gandhinagar",
    "shortName": "IIT Gandhinagar",
    "city": "Gandhinagar",
    "state": "Gujarat",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2008,
    "website": "https://iitgn.ac.in",
    "accreditation": "Liberal Arts & Engineering Integration • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 2008 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_goa",
    "name": "Indian Institute of Technology Goa",
    "shortName": "IIT Goa",
    "city": "Ponda",
    "state": "Goa",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2016,
    "website": "https://iitgoa.ac.in",
    "accreditation": "Premier Technical Institute in Goa • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2016 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_guwahati",
    "name": "Indian Institute of Technology Guwahati",
    "shortName": "IIT Guwahati",
    "city": "Guwahati",
    "state": "Assam",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1994,
    "website": "https://www.iitg.ac.in",
    "accreditation": "Premier INI in North-East • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1994 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_hyderabad",
    "name": "Indian Institute of Technology Hyderabad",
    "shortName": "IIT Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2008,
    "website": "https://www.iith.ac.in",
    "accreditation": "Top Ranked Second-Gen IIT • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2008 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_indore",
    "name": "Indian Institute of Technology Indore",
    "shortName": "IIT Indore",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2009,
    "website": "https://www.iiti.ac.in",
    "accreditation": "Leading Research IIT • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2009 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_jammu",
    "name": "Indian Institute of Technology Jammu",
    "shortName": "IIT Jammu",
    "city": "Jammu",
    "state": "Jammu and Kashmir",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2016,
    "website": "https://iitjammu.ac.in",
    "accreditation": "Strategic Northern Frontier Institute • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2016 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_jodhpur",
    "name": "Indian Institute of Technology Jodhpur",
    "shortName": "IIT Jodhpur",
    "city": "Jodhpur",
    "state": "Rajasthan",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2008,
    "website": "https://iitj.ac.in",
    "accreditation": "AI, Data Science & Clean Energy Hub • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2008 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_kanpur",
    "name": "Indian Institute of Technology Kanpur",
    "shortName": "IIT Kanpur",
    "city": "Kanpur",
    "state": "Uttar Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1959,
    "website": "https://www.iitk.ac.in",
    "accreditation": "Premier Research Institute • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1959 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_kharagpur",
    "name": "Indian Institute of Technology Kharagpur",
    "shortName": "IIT Kharagpur",
    "city": "Kharagpur",
    "state": "West Bengal",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1951,
    "website": "https://www.iitkgp.ac.in",
    "accreditation": "First IIT in India • Institute of Eminence (IoE)",
    "defaultSubtitle": "Institute of National Importance • Founded 1951 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_madras",
    "name": "Indian Institute of Technology Madras",
    "shortName": "IIT Madras",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1959,
    "website": "https://www.iitm.ac.in",
    "accreditation": "NIRF #1 Overall & Engineering • Institute of Eminence",
    "defaultSubtitle": "Institute of National Importance • Founded 1959 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_mandi",
    "name": "Indian Institute of Technology Mandi",
    "shortName": "IIT Mandi",
    "city": "Mandi",
    "state": "Himachal Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2009,
    "website": "https://www.iitmandi.ac.in",
    "accreditation": "Himalayan Sustainable Tech Pioneer • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2009 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_palakkad",
    "name": "Indian Institute of Technology Palakkad",
    "shortName": "IIT Palakkad",
    "city": "Palakkad",
    "state": "Kerala",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2015,
    "website": "https://iitpkd.ac.in",
    "accreditation": "Premier Engineering Institute in Kerala • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2015 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_patna",
    "name": "Indian Institute of Technology Patna",
    "shortName": "IIT Patna",
    "city": "Patna",
    "state": "Bihar",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2008,
    "website": "https://www.iitp.ac.in",
    "accreditation": "Premier Technical Institute in Bihar • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2008 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_roorkee",
    "name": "Indian Institute of Technology Roorkee",
    "shortName": "IIT Roorkee",
    "city": "Roorkee",
    "state": "Uttarakhand",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1847,
    "website": "https://www.iitr.ac.in",
    "accreditation": "Oldest Technical Institution in Asia • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1847 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_ropar",
    "name": "Indian Institute of Technology Ropar",
    "shortName": "IIT Ropar",
    "city": "Rupnagar",
    "state": "Punjab",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2008,
    "website": "https://www.iitrpr.ac.in",
    "accreditation": "Top Research Citations Rank • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2008 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_institute_of_technology_tirupati",
    "name": "Indian Institute of Technology Tirupati",
    "shortName": "IIT Tirupati",
    "city": "Tirupati",
    "state": "Andhra Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2015,
    "website": "https://iittp.ac.in",
    "accreditation": "Third-Gen Rapid Growth IIT • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2015 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Programmes & Registrar"
  },
  {
    "id": "univ_indian_maritime_university",
    "name": "Indian Maritime University",
    "shortName": "IMU",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "Central University",
    "category": "Maritime Studies & Nautical Sciences",
    "established": 2008,
    "website": "https://www.imu.edu.in",
    "accreditation": "Central Maritime University under Ministry of Ports & Shipping",
    "defaultSubtitle": "Premier Central Maritime University • East Coast Road, Chennai",
    "leadTitle": "Dean of Maritime Studies",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_indira_gandhi_delhi_technical_university_for_women",
    "name": "Indira Gandhi Delhi Technical University for Women",
    "shortName": "IGDTUW Delhi",
    "city": "Delhi",
    "state": "Delhi",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1998,
    "website": "https://www.igdtuw.ac.in",
    "accreditation": "First Technical University for Women in India • NAAC A+",
    "defaultSubtitle": "State Public University • Delhi, Delhi • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_indira_gandhi_krishi_vishwavidyalaya",
    "name": "Indira Gandhi Krishi Vishwavidyalaya",
    "shortName": "IGKV Raipur",
    "city": "Raipur",
    "state": "Chhattisgarh",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1987,
    "website": "http://igkv.ac.in",
    "accreditation": "State Agricultural University • ICAR Recognized",
    "defaultSubtitle": "State Public University • Raipur, Chhattisgarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_indira_gandhi_national_open_university",
    "name": "Indira Gandhi National Open University",
    "shortName": "IGNOU",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Central University",
    "category": "Open & Distance Learning",
    "established": 1985,
    "website": "http://www.ignou.ac.in",
    "accreditation": "NAAC A++ • Largest University in the World by Enrollment",
    "defaultSubtitle": "Central National Open University • Maidan Garhi, New Delhi",
    "leadTitle": "Director of Academic Coordination",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_indira_gandhi_national_tribal_university",
    "name": "Indira Gandhi National Tribal University",
    "shortName": "IGNTU",
    "city": "Amarkantak",
    "state": "Madhya Pradesh",
    "type": "Central University",
    "category": "Tribal Studies & Multidisciplinary",
    "established": 2007,
    "website": "http://www.igntu.ac.in",
    "accreditation": "NAAC A • Ministry of Education, Govt. of India",
    "defaultSubtitle": "National Tribal Central University • Amarkantak, Madhya Pradesh",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_indira_gandhi_technological_and_medical_sciences_university",
    "name": "Indira Gandhi Technological and Medical Sciences University",
    "shortName": "IGTAMSU Ziro",
    "city": "Ziro",
    "state": "Arunachal Pradesh",
    "type": "State Private University",
    "category": "Medical & Health",
    "established": 2012,
    "website": "https://www.igtamsu.ac.in",
    "accreditation": "Medical & Allied Health Sciences Center",
    "defaultSubtitle": "State Private University • Ziro, Arunachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_indraprastha_institute_of_information_technology_delhi",
    "name": "Indraprastha Institute of Information Technology Delhi",
    "shortName": "IIIT-Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2008,
    "website": "https://www.iiitd.ac.in",
    "accreditation": "State University by IIIT-D Act • NAAC A Grade",
    "defaultSubtitle": "State Public University • Founded 2008 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_institute_of_chemical_technology_mumbai",
    "name": "Institute of Chemical Technology Mumbai",
    "shortName": "ICT Mumbai (UDCT)",
    "city": "Mumbai",
    "state": "Maharashtra",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1933,
    "website": "https://www.ictmumbai.edu.in",
    "accreditation": "Elite Status Deemed University • NAAC A++ (3.77/4)",
    "defaultSubtitle": "Deemed to be University • Mumbai, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_international_institute_of_information_technology_bangalore",
    "name": "International Institute of Information Technology Bangalore",
    "shortName": "IIIT Bangalore",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1999,
    "website": "https://www.iiitb.ac.in",
    "accreditation": "IT Capital Premier Research Center • NAAC A+",
    "defaultSubtitle": "Deemed to be University • Founded 1999 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_international_institute_of_information_technology_hyderabad",
    "name": "International Institute of Information Technology Hyderabad",
    "shortName": "IIIT Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1998,
    "website": "https://www.iiit.ac.in",
    "accreditation": "World-Class AI & Computer Science Research • NAAC A++",
    "defaultSubtitle": "Deemed to be University • Founded 1998 • Ministry of Education & State Govt.",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academics & Registrar"
  },
  {
    "id": "univ_islamic_university_of_science_and_technology",
    "name": "Islamic University of Science and Technology",
    "shortName": "IUST Awantipora",
    "city": "Awantipora",
    "state": "Jammu and Kashmir",
    "type": "State Public University",
    "category": "Science & Research",
    "established": 2005,
    "website": "https://iust.ac.in",
    "accreditation": "Technological & Scientific Research Center",
    "defaultSubtitle": "State Public University • Awantipora, Jammu and Kashmir • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_j_c_bose_university_of_science_and_technology_ymca",
    "name": "J.C. Bose University of Science and Technology YMCA",
    "shortName": "JC Bose YMCA Faridabad",
    "city": "Faridabad",
    "state": "Haryana",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1969,
    "website": "https://jcboseust.ac.in",
    "accreditation": "Premier Industrial Engineering Legacy • NAAC A+",
    "defaultSubtitle": "State Public University • Faridabad, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jadavpur_university",
    "name": "Jadavpur University",
    "shortName": "JU Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1955,
    "website": "http://www.jaduniv.edu.in",
    "accreditation": "NIRF Top 5 University in India • NAAC A Grade",
    "defaultSubtitle": "State Public University • Kolkata, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jagran_lakecity_university",
    "name": "Jagran Lakecity University",
    "shortName": "JLU Bhopal",
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2013,
    "website": "https://jlu.edu.in",
    "accreditation": "Leading Media & Professional Studies University",
    "defaultSubtitle": "State Private University • Bhopal, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jai_narain_vyas_university",
    "name": "Jai Narain Vyas University",
    "shortName": "JNVU Jodhpur",
    "city": "Jodhpur",
    "state": "Rajasthan",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1962,
    "website": "http://www.jnvu.edu.in",
    "accreditation": "Historic Western Rajasthan University • NAAC A",
    "defaultSubtitle": "State Public University • Jodhpur, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jai_prakash_university",
    "name": "Jai Prakash University",
    "shortName": "JPU Chhapra",
    "city": "Chhapra",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1990,
    "website": "https://jpv.ac.in",
    "accreditation": "State University of Saran Division",
    "defaultSubtitle": "State Public University • Chhapra, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jain_deemed_to_be_university",
    "name": "JAIN (Deemed-to-be University)",
    "shortName": "Jain University",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1990,
    "website": "https://www.jainuniversity.ac.in",
    "accreditation": "NAAC A++ Grade Deemed University (3.71/4)",
    "defaultSubtitle": "Deemed to be University • Bengaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jamia_hamdard",
    "name": "Jamia Hamdard",
    "shortName": "Jamia Hamdard",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Deemed to be University",
    "category": "Medical & Health",
    "established": 1989,
    "website": "http://jamiahamdard.edu",
    "accreditation": "NIRF #1 Pharmacy in India • NAAC A+ Grade",
    "defaultSubtitle": "Deemed to be University • New Delhi, Delhi • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jamia_millia_islamia",
    "name": "Jamia Millia Islamia",
    "shortName": "JMI",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Central University",
    "category": "Multidisciplinary & Engineering",
    "established": 1920,
    "website": "https://www.jmi.ac.in",
    "accreditation": "NAAC A++ • NIRF #3 (Universities Category)",
    "defaultSubtitle": "Central University • Founded 1920 • Jamia Nagar, New Delhi",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_jawaharlal_nehru_krishi_vishwavidyalaya",
    "name": "Jawaharlal Nehru Krishi Vishwavidyalaya",
    "shortName": "JNKVV Jabalpur",
    "city": "Jabalpur",
    "state": "Madhya Pradesh",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1964,
    "website": "http://www.jnkvv.org",
    "accreditation": "Premier Agricultural Sciences University in MP",
    "defaultSubtitle": "State Public University • Jabalpur, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jawaharlal_nehru_technological_university_anantapur",
    "name": "Jawaharlal Nehru Technological University Anantapur",
    "shortName": "JNTU Anantapur (JNTUA)",
    "city": "Anantapur",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1946,
    "website": "https://www.jntua.ac.in",
    "accreditation": "Rayalaseema Region Technological University",
    "defaultSubtitle": "State Public University • Anantapur, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jawaharlal_nehru_technological_university_hyderabad",
    "name": "Jawaharlal Nehru Technological University Hyderabad",
    "shortName": "JNTU Hyderabad (JNTUH)",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1972,
    "website": "https://jntuh.ac.in",
    "accreditation": "First Technological University in India • NAAC A+",
    "defaultSubtitle": "State Public University • Hyderabad, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jawaharlal_nehru_technological_university_kakinada",
    "name": "Jawaharlal Nehru Technological University Kakinada",
    "shortName": "JNTU Kakinada (JNTUK)",
    "city": "Kakinada",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1946,
    "website": "https://www.jntuk.edu.in",
    "accreditation": "Premier Technological University in AP • NAAC A",
    "defaultSubtitle": "State Public University • Kakinada, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jawaharlal_nehru_university",
    "name": "Jawaharlal Nehru University",
    "shortName": "JNU",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Central University",
    "category": "Multidisciplinary & Social Sciences",
    "established": 1969,
    "website": "https://www.jnu.ac.in",
    "accreditation": "NAAC A++ • NIRF #2 (Universities Category)",
    "defaultSubtitle": "Premier Central Research University • New Delhi",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_jaypee_institute_of_information_technology",
    "name": "Jaypee Institute of Information Technology",
    "shortName": "JIIT Noida",
    "city": "Noida",
    "state": "Uttar Pradesh",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 2001,
    "website": "https://www.jiit.ac.in",
    "accreditation": "NIRF Top Engineering & Computer Science • NAAC A",
    "defaultSubtitle": "Deemed to be University • Noida, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jaypee_university_of_information_technology",
    "name": "Jaypee University of Information Technology",
    "shortName": "JUIT Waknaghat",
    "city": "Solan",
    "state": "Himachal Pradesh",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 2002,
    "website": "https://www.juit.ac.in",
    "accreditation": "NAAC A+ Grade State Private University",
    "defaultSubtitle": "State Private University • Solan, Himachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jecrc_university",
    "name": "JECRC University",
    "shortName": "JECRC Jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2012,
    "website": "https://jecrcuniversity.edu.in",
    "accreditation": "Engineering & Applied Sciences Leader in Rajasthan",
    "defaultSubtitle": "State Private University • Jaipur, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jharkhand_university_of_technology",
    "name": "Jharkhand University of Technology",
    "shortName": "JUT Ranchi",
    "city": "Ranchi",
    "state": "Jharkhand",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2018,
    "website": "https://jutranchi.ac.in",
    "accreditation": "Apex Technical Affiliating Body of Jharkhand",
    "defaultSubtitle": "State Public University • Ranchi, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jiwaji_university_gwalior",
    "name": "Jiwaji University Gwalior",
    "shortName": "Jiwaji University",
    "city": "Gwalior",
    "state": "Madhya Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1964,
    "website": "https://www.jiwaji.edu",
    "accreditation": "NAAC A++ Grade State University in Gwalior-Chambal",
    "defaultSubtitle": "State Public University • Gwalior, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_jss_academy_of_higher_education_and_research",
    "name": "JSS Academy of Higher Education and Research",
    "shortName": "JSS AHER Mysuru",
    "city": "Mysuru",
    "state": "Karnataka",
    "type": "Deemed to be University",
    "category": "Medical & Health",
    "established": 2008,
    "website": "https://jssuni.edu.in",
    "accreditation": "NIRF Top 40 University in India • NAAC A++ (3.75/4)",
    "defaultSubtitle": "Deemed to be University • Mysuru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_k_r_mangalam_university",
    "name": "K.R. Mangalam University",
    "shortName": "KRMU Gurugram",
    "city": "Gurugram",
    "state": "Haryana",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2013,
    "website": "https://www.krmangalam.edu.in",
    "accreditation": "UGC Recognized Private University in NCR",
    "defaultSubtitle": "State Private University • Gurugram, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kakatiya_university",
    "name": "Kakatiya University",
    "shortName": "KU Warangal",
    "city": "Warangal",
    "state": "Telangana",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1976,
    "website": "https://kakatiya.ac.in",
    "accreditation": "NAAC A Grade State University in Telangana",
    "defaultSubtitle": "State Public University • Warangal, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kalinga_institute_of_industrial_technology",
    "name": "Kalinga Institute of Industrial Technology",
    "shortName": "KIIT Bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1992,
    "website": "https://kiit.ac.in",
    "accreditation": "Institute of Eminence (IoE) • NAAC A++ (3.65/4)",
    "defaultSubtitle": "Deemed to be University • Bhubaneswar, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kalinga_university",
    "name": "Kalinga University",
    "shortName": "Kalinga Raipur",
    "city": "Nava Raipur",
    "state": "Chhattisgarh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2013,
    "website": "https://kalingauniversity.ac.in",
    "accreditation": "NAAC Accredited Private University in Central India",
    "defaultSubtitle": "State Private University • Nava Raipur, Chhattisgarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kaloji_narayana_rao_university_of_health_sciences",
    "name": "Kaloji Narayana Rao University of Health Sciences",
    "shortName": "KNRUHS Warangal",
    "city": "Warangal",
    "state": "Telangana",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 2014,
    "website": "https://knruhs.telangana.gov.in",
    "accreditation": "Apex Health Sciences Affiliating Body in Telangana",
    "defaultSubtitle": "State Public University • Warangal, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kannur_university",
    "name": "Kannur University",
    "shortName": "Kannur University",
    "city": "Kannur",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1996,
    "website": "https://www.kannuruniversity.ac.in",
    "accreditation": "North Malabar Regional University • NAAC B++",
    "defaultSubtitle": "State Public University • Kannur, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_karnatak_university_dharwad",
    "name": "Karnatak University Dharwad",
    "shortName": "KUD Dharwad",
    "city": "Dharwad",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1949,
    "website": "https://www.kud.ac.in",
    "accreditation": "Second Oldest University in Karnataka • NAAC A",
    "defaultSubtitle": "State Public University • Dharwad, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kavayitri_bahinabai_chaudhari_north_maharashtra_university",
    "name": "Kavayitri Bahinabai Chaudhari North Maharashtra University",
    "shortName": "KBC NMU Jalgaon",
    "city": "Jalgaon",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1990,
    "website": "http://www.nmu.ac.in",
    "accreditation": "NAAC A Grade State University in Khandesh",
    "defaultSubtitle": "State Public University • Jalgaon, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kazi_nazrul_university",
    "name": "Kazi Nazrul University",
    "shortName": "KNU Asansol",
    "city": "Asansol",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2012,
    "website": "https://knu.ac.in",
    "accreditation": "State University in Coal Belt of Bengal",
    "defaultSubtitle": "State Public University • Asansol, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kaziranga_university",
    "name": "Kaziranga University",
    "shortName": "KU Jorhat",
    "city": "Jorhat",
    "state": "Assam",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2012,
    "website": "https://www.kazirangauniversity.in",
    "accreditation": "Leading Private University in Upper Assam",
    "defaultSubtitle": "State Private University • Jorhat, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kerala_agricultural_university",
    "name": "Kerala Agricultural University",
    "shortName": "KAU Thrissur",
    "city": "Thrissur",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1971,
    "website": "https://kau.in",
    "accreditation": "Premier Hill & Plantation Crop Research • ICAR",
    "defaultSubtitle": "State Public University • Thrissur, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kerala_university_of_fisheries_and_ocean_studies",
    "name": "Kerala University of Fisheries and Ocean Studies",
    "shortName": "KUFOS Kochi",
    "city": "Kochi",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Science & Research",
    "established": 2010,
    "website": "http://kufos.ac.in",
    "accreditation": "First Fisheries & Ocean Studies University in India",
    "defaultSubtitle": "State Public University • Kochi, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kerala_university_of_health_sciences",
    "name": "Kerala University of Health Sciences",
    "shortName": "KUHS Thrissur",
    "city": "Thrissur",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 2010,
    "website": "http://kuhs.ac.in",
    "accreditation": "Apex Health Sciences Body in Kerala",
    "defaultSubtitle": "State Public University • Thrissur, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kerala_veterinary_and_animal_sciences_university",
    "name": "Kerala Veterinary and Animal Sciences University",
    "shortName": "KVASU Wayanad",
    "city": "Pookode",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 2010,
    "website": "https://www.kvasu.ac.in",
    "accreditation": "Veterinary & Animal Husbandry Apex Body",
    "defaultSubtitle": "State Public University • Pookode, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_king_george_s_medical_university",
    "name": "King George's Medical University",
    "shortName": "KGMU Lucknow",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 1905,
    "website": "https://www.kgmu.org",
    "accreditation": "Historic Medical Institution • NAAC A+ Grade",
    "defaultSubtitle": "State Public University • Lucknow, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kle_academy_of_higher_education_and_research",
    "name": "KLE Academy of Higher Education and Research",
    "shortName": "KAHER Belagavi",
    "city": "Belagavi",
    "state": "Karnataka",
    "type": "Deemed to be University",
    "category": "Medical & Health",
    "established": 2006,
    "website": "https://kledeemeduniversity.edu.in",
    "accreditation": "NAAC A+ Grade Healthcare Deemed University",
    "defaultSubtitle": "Deemed to be University • Belagavi, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kolhan_university",
    "name": "Kolhan University",
    "shortName": "Kolhan University",
    "city": "Chaibasa",
    "state": "Jharkhand",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2009,
    "website": "https://kolhanuniversity.ac.in",
    "accreditation": "State University for Kolhan Division",
    "defaultSubtitle": "State Public University • Chaibasa, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_koneru_lakshmaiah_education_foundation",
    "name": "Koneru Lakshmaiah Education Foundation",
    "shortName": "KL University",
    "city": "Guntur",
    "state": "Andhra Pradesh",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1980,
    "website": "https://www.kluniversity.in",
    "accreditation": "NAAC A++ Accredited Deemed University (3.57/4)",
    "defaultSubtitle": "Deemed to be University • Guntur, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_krantiguru_shyamji_krishna_verma_kachchh_university",
    "name": "Krantiguru Shyamji Krishna Verma Kachchh University",
    "shortName": "KSKV Kachchh University",
    "city": "Bhuj",
    "state": "Gujarat",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2003,
    "website": "https://kskvku.ac.in",
    "accreditation": "State University of Kutch Region",
    "defaultSubtitle": "State Public University • Bhuj, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_krea_university",
    "name": "Krea University",
    "shortName": "Krea Sri City",
    "city": "Sri City",
    "state": "Andhra Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2018,
    "website": "https://krea.edu.in",
    "accreditation": "Pioneer Interwoven Learning & Liberal Arts",
    "defaultSubtitle": "State Private University • Sri City, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_krishna_university",
    "name": "Krishna University",
    "shortName": "Krishna University",
    "city": "Machilipatnam",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2008,
    "website": "https://kru.ac.in",
    "accreditation": "State University of Krishna District",
    "defaultSubtitle": "State Public University • Machilipatnam, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kumaun_university",
    "name": "Kumaun University",
    "shortName": "Kumaun University",
    "city": "Nainital",
    "state": "Uttarakhand",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1973,
    "website": "https://www.kunainital.ac.in",
    "accreditation": "NAAC A+ Grade State University in Kumaun Hills",
    "defaultSubtitle": "State Public University • Nainital, Uttarakhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kurukshetra_university",
    "name": "Kurukshetra University",
    "shortName": "KUK Kurukshetra",
    "city": "Kurukshetra",
    "state": "Haryana",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1956,
    "website": "https://www.kuk.ac.in",
    "accreditation": "Oldest University in Haryana • NAAC A++ Grade (3.56/4)",
    "defaultSubtitle": "State Public University • Kurukshetra, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_kuvempu_university",
    "name": "Kuvempu University",
    "shortName": "Kuvempu University",
    "city": "Shivamogga",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1987,
    "website": "http://www.kuvempu.ac.in",
    "accreditation": "Malnad Region State University • NAAC A Grade",
    "defaultSubtitle": "State Public University • Shivamogga, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_lakshmibai_national_institute_of_physical_education",
    "name": "Lakshmibai National Institute of Physical Education",
    "shortName": "LNIPE Gwalior",
    "city": "Gwalior",
    "state": "Madhya Pradesh",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1957,
    "website": "https://www.lnipe.edu.in",
    "accreditation": "Premier Sports & Physical Education Institute in Asia",
    "defaultSubtitle": "Deemed to be University • Gwalior, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_lalit_narayan_mithila_university",
    "name": "Lalit Narayan Mithila University",
    "shortName": "LNMU Darbhanga",
    "city": "Darbhanga",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1972,
    "website": "https://lnmu.ac.in",
    "accreditation": "NAAC B+ Grade • Cultural & Academic Center of Mithila",
    "defaultSubtitle": "State Public University • Darbhanga, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_lovely_professional_university",
    "name": "Lovely Professional University",
    "shortName": "LPU Phagwara",
    "city": "Phagwara",
    "state": "Punjab",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2005,
    "website": "https://www.lpu.in",
    "accreditation": "Largest Single-Campus University • NAAC A++ (3.68/4)",
    "defaultSubtitle": "State Private University • Phagwara, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_madan_mohan_malaviya_university_of_technology",
    "name": "Madan Mohan Malaviya University of Technology",
    "shortName": "MMMUT Gorakhpur",
    "city": "Gorakhpur",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1962,
    "website": "https://www.mmmut.ac.in",
    "accreditation": "NAAC A Grade State Technological University",
    "defaultSubtitle": "State Public University • Gorakhpur, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_madhabdev_university",
    "name": "Madhabdev University",
    "shortName": "Madhabdev University",
    "city": "Narayanpur",
    "state": "Assam",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2019,
    "website": "https://madhabdevuniversity.ac.in",
    "accreditation": "State University in Upper Assam",
    "defaultSubtitle": "State Public University • Narayanpur, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_madhya_pradesh_medical_science_university",
    "name": "Madhya Pradesh Medical Science University",
    "shortName": "MPMSU Jabalpur",
    "city": "Jabalpur",
    "state": "Madhya Pradesh",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 2011,
    "website": "https://mpmsu.edu.in",
    "accreditation": "Apex Medical Affiliating University in MP",
    "defaultSubtitle": "State Public University • Jabalpur, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_madurai_kamaraj_university",
    "name": "Madurai Kamaraj University",
    "shortName": "MKU Madurai",
    "city": "Madurai",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1966,
    "website": "https://mkuniversity.ac.in",
    "accreditation": "University with Potential for Excellence (UPE) • NAAC A++",
    "defaultSubtitle": "State Public University • Madurai, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_magadh_university",
    "name": "Magadh University",
    "shortName": "Magadh University",
    "city": "Bodh Gaya",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1962,
    "website": "https://magadhuniversity.ac.in",
    "accreditation": "Largest Affiliating University in Bihar",
    "defaultSubtitle": "State Public University • Bodh Gaya, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_maharaja_ranjit_singh_punjab_technical_university",
    "name": "Maharaja Ranjit Singh Punjab Technical University",
    "shortName": "MRSPTU Bathinda",
    "city": "Bathinda",
    "state": "Punjab",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2015,
    "website": "https://www.mrsptu.ac.in",
    "accreditation": "Technical University for Malwa Region of Punjab",
    "defaultSubtitle": "State Public University • Bathinda, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_maharaja_sayajirao_university_of_baroda",
    "name": "Maharaja Sayajirao University of Baroda",
    "shortName": "MSU Baroda",
    "city": "Vadodara",
    "state": "Gujarat",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1949,
    "website": "https://www.msubaroda.ac.in",
    "accreditation": "Residential Unitary University • NAAC A+ Grade",
    "defaultSubtitle": "State Public University • Vadodara, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_maharashtra_national_law_university_mumbai",
    "name": "Maharashtra National Law University Mumbai",
    "shortName": "MNLU Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Law",
    "established": 2014,
    "website": "https://mnlumumbai.edu.in",
    "accreditation": "National Law University in Financial Capital • BCI",
    "defaultSubtitle": "State Public University • Mumbai, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_maharashtra_national_law_university_nagpur",
    "name": "Maharashtra National Law University Nagpur",
    "shortName": "MNLU Nagpur",
    "city": "Nagpur",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Law",
    "established": 2016,
    "website": "https://www.nlunagpur.ac.in",
    "accreditation": "National Law University in Central India • BCI",
    "defaultSubtitle": "State Public University • Nagpur, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_maharashtra_university_of_health_sciences",
    "name": "Maharashtra University of Health Sciences",
    "shortName": "MUHS Nashik",
    "city": "Nashik",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 1998,
    "website": "https://www.muhs.ac.in",
    "accreditation": "Apex Medical & Health Sciences Body in Maharashtra",
    "defaultSubtitle": "State Public University • Nashik, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_maharshi_dayanand_saraswati_university",
    "name": "Maharshi Dayanand Saraswati University",
    "shortName": "MDSU Ajmer",
    "city": "Ajmer",
    "state": "Rajasthan",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1987,
    "website": "https://www.mdsuajmer.ac.in",
    "accreditation": "Central Rajasthan Affiliating Body • NAAC B++",
    "defaultSubtitle": "State Public University • Ajmer, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_maharshi_dayanand_university",
    "name": "Maharshi Dayanand University",
    "shortName": "MDU Rohtak",
    "city": "Rohtak",
    "state": "Haryana",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1976,
    "website": "https://mdu.ac.in",
    "accreditation": "NAAC A+ Grade State University",
    "defaultSubtitle": "State Public University • Rohtak, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_mahatma_gandhi_antarrashtriya_hindi_vishwavidyalaya",
    "name": "Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya",
    "shortName": "MGAHV",
    "city": "Wardha",
    "state": "Maharashtra",
    "type": "Central University",
    "category": "Languages, Literature & Humanities",
    "established": 1997,
    "website": "http://www.hindivishwa.org",
    "accreditation": "NAAC A+ • Central University Act, 1997",
    "defaultSubtitle": "Central International Hindi University • Wardha, Maharashtra",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_mahatma_gandhi_central_university",
    "name": "Mahatma Gandhi Central University",
    "shortName": "MGCU",
    "city": "Motihari",
    "state": "Bihar",
    "type": "Central University",
    "category": "Multidisciplinary & Humanities",
    "established": 2016,
    "website": "https://mgcub.ac.in",
    "accreditation": "UGC / Ministry of Education, Govt. of India",
    "defaultSubtitle": "Central University • Motihari, Champaran, Bihar",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_mahatma_gandhi_university_kerala",
    "name": "Mahatma Gandhi University Kerala",
    "shortName": "MG University Kottayam",
    "city": "Kottayam",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1983,
    "website": "https://www.mgu.ac.in",
    "accreditation": "NAAC A++ Accredited State University (3.88/4)",
    "defaultSubtitle": "State Public University • Kottayam, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_mahatma_gandhi_university_nalgonda",
    "name": "Mahatma Gandhi University Nalgonda",
    "shortName": "MGU Nalgonda",
    "city": "Nalgonda",
    "state": "Telangana",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2007,
    "website": "http://www.mguniversity.ac.in",
    "accreditation": "State University of Nalgonda Region",
    "defaultSubtitle": "State Public University • Nalgonda, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_mahatma_jyotiba_phule_rohilkhand_university",
    "name": "Mahatma Jyotiba Phule Rohilkhand University",
    "shortName": "MJPRU Bareilly",
    "city": "Bareilly",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1975,
    "website": "https://www.mjpru.ac.in",
    "accreditation": "NAAC A++ Grade State University in Rohilkhand",
    "defaultSubtitle": "State Public University • Bareilly, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_mahindra_university",
    "name": "Mahindra University",
    "shortName": "Mahindra University",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2020,
    "website": "https://www.mahindrauniversity.edu.in",
    "accreditation": "Mahindra Group & École Centrale Paris Initiative",
    "defaultSubtitle": "State Private University • Hyderabad, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_malaviya_national_institute_of_technology_jaipur",
    "name": "Malaviya National Institute of Technology Jaipur",
    "shortName": "MNIT Jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1963,
    "website": "https://www.mnit.ac.in",
    "accreditation": "Premier Engineering Institute in Rajasthan • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1963 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_manav_rachna_international_institute_of_research_and_studies",
    "name": "Manav Rachna International Institute of Research and Studies",
    "shortName": "MRIIRS Faridabad",
    "city": "Faridabad",
    "state": "Haryana",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1997,
    "website": "https://manavrachna.edu.in",
    "accreditation": "NAAC A++ Grade Deemed University (3.57/4)",
    "defaultSubtitle": "Deemed to be University • Faridabad, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_mangalore_university",
    "name": "Mangalore University",
    "shortName": "Mangalore University",
    "city": "Mangaluru",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1980,
    "website": "https://mangaloreuniversity.ac.in",
    "accreditation": "Coastal Karnataka Regional University • NAAC A",
    "defaultSubtitle": "State Public University • Mangaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_manipal_academy_of_higher_education",
    "name": "Manipal Academy of Higher Education",
    "shortName": "MAHE Manipal",
    "city": "Manipal",
    "state": "Karnataka",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1953,
    "website": "https://manipal.edu",
    "accreditation": "Institute of Eminence (IoE) • NAAC A++ (3.65/4)",
    "defaultSubtitle": "Deemed to be University • Manipal, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_manipal_university_jaipur",
    "name": "Manipal University Jaipur",
    "shortName": "MUJ Jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2011,
    "website": "https://jaipur.manipal.edu",
    "accreditation": "NAAC A+ Accredited State Private University (3.28/4)",
    "defaultSubtitle": "State Private University • Jaipur, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_manipur_university",
    "name": "Manipur University",
    "shortName": "MU",
    "city": "Imphal",
    "state": "Manipur",
    "type": "Central University",
    "category": "Multidisciplinary & Life Sciences",
    "established": 1980,
    "website": "https://www.manipuruniv.ac.in",
    "accreditation": "NAAC A • Central University Act, 2005",
    "defaultSubtitle": "Central University • Canchipur, Imphal, Manipur",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_manonmaniam_sundaranar_university",
    "name": "Manonmaniam Sundaranar University",
    "shortName": "MSU Tirunelveli",
    "city": "Tirunelveli",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1990,
    "website": "https://www.msuniv.ac.in",
    "accreditation": "Southern Tamil Nadu Regional University • NAAC A",
    "defaultSubtitle": "State Public University • Tirunelveli, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_marwadi_university",
    "name": "Marwadi University",
    "shortName": "Marwadi University Rajkot",
    "city": "Rajkot",
    "state": "Gujarat",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2016,
    "website": "https://www.marwadiuniversity.ac.in",
    "accreditation": "NAAC A+ Accredited University in Saurashtra",
    "defaultSubtitle": "State Private University • Rajkot, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_maulana_abul_kalam_azad_university_of_technology",
    "name": "Maulana Abul Kalam Azad University of Technology",
    "shortName": "MAKAUT (WBUT)",
    "city": "Haringhata",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2000,
    "website": "https://makautwb.ac.in",
    "accreditation": "Apex Technical Affiliating Body of West Bengal",
    "defaultSubtitle": "State Public University • Haringhata, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_maulana_azad_national_institute_of_technology_bhopal",
    "name": "Maulana Azad National Institute of Technology Bhopal",
    "shortName": "MANIT Bhopal",
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1960,
    "website": "https://www.manit.ac.in",
    "accreditation": "Premier Technical Institution in Central India • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1960 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_maulana_azad_national_urdu_university",
    "name": "Maulana Azad National Urdu University",
    "shortName": "MANUU",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "Central University",
    "category": "Multidisciplinary & Vocational Studies",
    "established": 1998,
    "website": "https://manuu.edu.in",
    "accreditation": "NAAC A+ • Central University Act, 1997",
    "defaultSubtitle": "Central University • Gachibowli, Hyderabad, Telangana",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_medi_caps_university",
    "name": "Medi-Caps University",
    "shortName": "Medi-Caps Indore",
    "city": "Indore",
    "state": "Madhya Pradesh",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 2000,
    "website": "https://www.medicaps.ac.in",
    "accreditation": "Top Private Technological University in Central India",
    "defaultSubtitle": "State Private University • Indore, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_mit_world_peace_university",
    "name": "MIT World Peace University",
    "shortName": "MIT-WPU Pune",
    "city": "Pune",
    "state": "Maharashtra",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 1983,
    "website": "https://mitwpu.edu.in",
    "accreditation": "Pioneer Engineering & Peace Studies • Govt. of Maharashtra",
    "defaultSubtitle": "State Private University • Pune, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_mizoram_university",
    "name": "Mizoram University",
    "shortName": "MZU",
    "city": "Aizawl",
    "state": "Mizoram",
    "type": "Central University",
    "category": "Multidisciplinary & Environmental Sciences",
    "established": 2001,
    "website": "https://mzu.edu.in",
    "accreditation": "NAAC A • NIRF #76 (Overall)",
    "defaultSubtitle": "Central University • Tanhril, Aizawl, Mizoram",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_mohanlal_sukhadia_university",
    "name": "Mohanlal Sukhadia University",
    "shortName": "MLSU Udaipur",
    "city": "Udaipur",
    "state": "Rajasthan",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1962,
    "website": "https://www.mlsu.ac.in",
    "accreditation": "Premier Multi-Faculty University in Southern Rajasthan",
    "defaultSubtitle": "State Public University • Udaipur, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_motilal_nehru_national_institute_of_technology_allahabad",
    "name": "Motilal Nehru National Institute of Technology Allahabad",
    "shortName": "MNNIT Allahabad",
    "city": "Prayagraj",
    "state": "Uttar Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1961,
    "website": "https://www.mnnit.ac.in",
    "accreditation": "First REC to offer Computer Science in India • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1961 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_munger_university",
    "name": "Munger University",
    "shortName": "Munger University",
    "city": "Munger",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2018,
    "website": "https://mungeruniversity.ac.in",
    "accreditation": "State University of Munger Division",
    "defaultSubtitle": "State Public University • Munger, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_nagaland_university",
    "name": "Nagaland University",
    "shortName": "NU",
    "city": "Lumami",
    "state": "Nagaland",
    "type": "Central University",
    "category": "Multidisciplinary & Agricultural Sciences",
    "established": 1989,
    "website": "https://nagalanduniversity.ac.in",
    "accreditation": "NAAC B • Central University Act, 1989",
    "defaultSubtitle": "Central University • Lumami, Kohima & Medziphema",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_nalanda_university",
    "name": "Nalanda University",
    "shortName": "Nalanda",
    "city": "Rajgir",
    "state": "Bihar",
    "type": "Central University",
    "category": "Historical & International Studies",
    "established": 2010,
    "website": "https://nalandauniv.edu.in",
    "accreditation": "International Institution of National Importance • Ministry of External Affairs",
    "defaultSubtitle": "International Central University of Ancient Heritage • Rajgir, Bihar",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_nalsar_university_of_law",
    "name": "NALSAR University of Law",
    "shortName": "NALSAR Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "State Public University",
    "category": "Law",
    "established": 1998,
    "website": "https://www.nalsar.ac.in",
    "accreditation": "Top Ranked National Law University • Bar Council of India",
    "defaultSubtitle": "State Public University • Hyderabad, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_national_dairy_research_institute",
    "name": "National Dairy Research Institute",
    "shortName": "NDRI Karnal",
    "city": "Karnal",
    "state": "Haryana",
    "type": "Deemed to be University",
    "category": "Agriculture",
    "established": 1923,
    "website": "http://www.ndri.res.in",
    "accreditation": "Premier Dairy Science Research • ICAR Deemed University",
    "defaultSubtitle": "Deemed to be University • Karnal, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_national_forensic_sciences_university",
    "name": "National Forensic Sciences University",
    "shortName": "NFSU",
    "city": "Gandhinagar",
    "state": "Gujarat",
    "type": "Central University",
    "category": "Forensic Science & Criminology",
    "established": 2008,
    "website": "https://www.nfsu.ac.in",
    "accreditation": "Institute of National Importance • Ministry of Home Affairs",
    "defaultSubtitle": "World's First Forensic Sciences Central University • Gandhinagar",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_national_institute_of_fashion_technology_daman",
    "name": "National Institute of Fashion Technology Daman",
    "shortName": "NIFT Daman",
    "city": "Daman",
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "type": "Institute of National Importance (INI)",
    "category": "Arts & Humanities",
    "established": 2022,
    "website": "https://www.nift.ac.in/daman",
    "accreditation": "Apex Fashion Institute in UT of DNH & DD • MoT",
    "defaultSubtitle": "Institute of National Importance (INI) • Daman, Dadra and Nagar Haveli and Daman and Diu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_fashion_technology_delhi",
    "name": "National Institute of Fashion Technology Delhi",
    "shortName": "NIFT Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Institute of National Importance (INI)",
    "category": "Arts & Humanities",
    "established": 1986,
    "website": "https://www.nift.ac.in",
    "accreditation": "Apex Fashion & Design Institution in India • Ministry of Textiles",
    "defaultSubtitle": "Institute of National Importance (INI) • New Delhi, Delhi • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_agartala",
    "name": "National Institute of Technology Agartala",
    "shortName": "NIT Agartala",
    "city": "Agartala",
    "state": "Tripura",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1965,
    "website": "https://www.nita.ac.in",
    "accreditation": "Premier Engineering Institute in Tripura • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1965 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_andhra_pradesh",
    "name": "National Institute of Technology Andhra Pradesh",
    "shortName": "NIT Andhra",
    "city": "Tadepalligudem",
    "state": "Andhra Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2015,
    "website": "https://nitandhra.ac.in",
    "accreditation": "New-Generation Engineering Center in AP • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 2015 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_arunachal_pradesh",
    "name": "National Institute of Technology Arunachal Pradesh",
    "shortName": "NIT Arunachal",
    "city": "Jote",
    "state": "Arunachal Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://www.nitap.ac.in",
    "accreditation": "Premier Technology Institute in Arunachal Pradesh • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 2010 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_calicut",
    "name": "National Institute of Technology Calicut",
    "shortName": "NIT Calicut",
    "city": "Kozhikode",
    "state": "Kerala",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1961,
    "website": "https://www.nitc.ac.in",
    "accreditation": "Top Ranked Engineering & Architecture • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1961 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_delhi",
    "name": "National Institute of Technology Delhi",
    "shortName": "NIT Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://nitdelhi.ac.in",
    "accreditation": "National Capital Technical Hub • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2010 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_durgapur",
    "name": "National Institute of Technology Durgapur",
    "shortName": "NIT Durgapur",
    "city": "Durgapur",
    "state": "West Bengal",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1960,
    "website": "https://nitdgp.ac.in",
    "accreditation": "Renowned Industrial Engineering Center • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1960 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_goa",
    "name": "National Institute of Technology Goa",
    "shortName": "NIT Goa",
    "city": "Cuncolim",
    "state": "Goa",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://www.nitgoa.ac.in",
    "accreditation": "Leading Technology Institute in Goa • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2010 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_jamshedpur",
    "name": "National Institute of Technology Jamshedpur",
    "shortName": "NIT Jamshedpur",
    "city": "Jamshedpur",
    "state": "Jharkhand",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1960,
    "website": "https://nitjsr.ac.in",
    "accreditation": "Steel City Engineering Pioneer • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1960 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_karnataka_surathkal",
    "name": "National Institute of Technology Karnataka Surathkal",
    "shortName": "NITK Surathkal",
    "city": "Mangaluru",
    "state": "Karnataka",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1960,
    "website": "https://www.nitk.ac.in",
    "accreditation": "Top Ranked Coastal NIT • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1960 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_kurukshetra",
    "name": "National Institute of Technology Kurukshetra",
    "shortName": "NIT Kurukshetra",
    "city": "Kurukshetra",
    "state": "Haryana",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1963,
    "website": "https://nitkkr.ac.in",
    "accreditation": "Historic Technological Leadership • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1963 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_manipur",
    "name": "National Institute of Technology Manipur",
    "shortName": "NIT Manipur",
    "city": "Imphal",
    "state": "Manipur",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://www.nitmanipur.ac.in",
    "accreditation": "Frontier North-East Technical Hub • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2010 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_meghalaya",
    "name": "National Institute of Technology Meghalaya",
    "shortName": "NIT Meghalaya",
    "city": "Shillong",
    "state": "Meghalaya",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://www.nitm.ac.in",
    "accreditation": "High-Altitude Innovation & Computing • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2010 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_mizoram",
    "name": "National Institute of Technology Mizoram",
    "shortName": "NIT Mizoram",
    "city": "Aizawl",
    "state": "Mizoram",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://www.nitmz.ac.in",
    "accreditation": "High Altitude Technical Education • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2010 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_nagaland",
    "name": "National Institute of Technology Nagaland",
    "shortName": "NIT Nagaland",
    "city": "Chumukedima",
    "state": "Nagaland",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://nitnagaland.ac.in",
    "accreditation": "Premier Engineering Institute in Nagaland • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 2010 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_patna",
    "name": "National Institute of Technology Patna",
    "shortName": "NIT Patna",
    "city": "Patna",
    "state": "Bihar",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1886,
    "website": "https://www.nitp.ac.in",
    "accreditation": "Sixth Oldest Engineering Institution in India • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1886 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_puducherry",
    "name": "National Institute of Technology Puducherry",
    "shortName": "NIT Puducherry",
    "city": "Karaikal",
    "state": "Puducherry",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://www.nitpy.ac.in",
    "accreditation": "Coastal Technical Institution • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2010 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_raipur",
    "name": "National Institute of Technology Raipur",
    "shortName": "NIT Raipur",
    "city": "Raipur",
    "state": "Chhattisgarh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1956,
    "website": "https://www.nitrr.ac.in",
    "accreditation": "Mining, Metallurgy & Core Tech Pioneer • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1956 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_rourkela",
    "name": "National Institute of Technology Rourkela",
    "shortName": "NIT Rourkela",
    "city": "Rourkela",
    "state": "Odisha",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1961,
    "website": "https://www.nitrkl.ac.in",
    "accreditation": "Premier Technical University in Eastern India • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1961 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_sikkim",
    "name": "National Institute of Technology Sikkim",
    "shortName": "NIT Sikkim",
    "city": "Ravangla",
    "state": "Sikkim",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2010,
    "website": "https://nitsikkim.ac.in",
    "accreditation": "Himalayan Clean Tech Pioneer • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 2010 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_silchar",
    "name": "National Institute of Technology Silchar",
    "shortName": "NIT Silchar",
    "city": "Silchar",
    "state": "Assam",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1967,
    "website": "https://www.nits.ac.in",
    "accreditation": "Premier Technology Institute in Barak Valley • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1967 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_srinagar",
    "name": "National Institute of Technology Srinagar",
    "shortName": "NIT Srinagar",
    "city": "Srinagar",
    "state": "Jammu and Kashmir",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1960,
    "website": "https://nitsri.ac.in",
    "accreditation": "Premier Engineering Center in Kashmir Valley • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1960 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_tiruchirappalli",
    "name": "National Institute of Technology Tiruchirappalli",
    "shortName": "NIT Trichy",
    "city": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1964,
    "website": "https://www.nitt.edu",
    "accreditation": "NIRF #1 NIT in India • MoE, Govt. of India",
    "defaultSubtitle": "Institute of National Importance • Founded 1964 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_uttarakhand",
    "name": "National Institute of Technology Uttarakhand",
    "shortName": "NIT Uttarakhand",
    "city": "Srinagar Garhwal",
    "state": "Uttarakhand",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2009,
    "website": "https://nituk.ac.in",
    "accreditation": "Garhwal Hill Region Engineering Excellence • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 2009 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_institute_of_technology_warangal",
    "name": "National Institute of Technology Warangal",
    "shortName": "NIT Warangal",
    "city": "Warangal",
    "state": "Telangana",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1959,
    "website": "https://www.nitw.ac.in",
    "accreditation": "First Regional Engineering College (REC) in India • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1959 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_national_law_institute_university",
    "name": "National Law Institute University",
    "shortName": "NLIU Bhopal",
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "type": "State Public University",
    "category": "Law",
    "established": 1997,
    "website": "https://www.nliu.ac.in",
    "accreditation": "Second Established NLU in India • BCI Recognized",
    "defaultSubtitle": "State Public University • Bhopal, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_national_law_school_of_india_university",
    "name": "National Law School of India University",
    "shortName": "NLSIU Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Law",
    "established": 1987,
    "website": "https://www.nls.ac.in",
    "accreditation": "NIRF #1 Law School in India • Bar Council of India",
    "defaultSubtitle": "State Public University • Bengaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_national_law_university_and_judicial_academy_assam",
    "name": "National Law University and Judicial Academy Assam",
    "shortName": "NLUJAA Guwahati",
    "city": "Guwahati",
    "state": "Assam",
    "type": "State Public University",
    "category": "Law",
    "established": 2009,
    "website": "https://www.nluassam.ac.in",
    "accreditation": "Premier National Law University in North-East • BCI",
    "defaultSubtitle": "State Public University • Guwahati, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_national_law_university_delhi",
    "name": "National Law University Delhi",
    "shortName": "NLU Delhi",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "State Public University",
    "category": "Law",
    "established": 2008,
    "website": "https://nludelhi.ac.in",
    "accreditation": "NIRF #2 Law School in India • High Court of Delhi",
    "defaultSubtitle": "State Public University • New Delhi, Delhi • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_national_law_university_jodhpur",
    "name": "National Law University Jodhpur",
    "shortName": "NLUJ Jodhpur",
    "city": "Jodhpur",
    "state": "Rajasthan",
    "type": "State Public University",
    "category": "Law",
    "established": 1999,
    "website": "http://www.nlujodhpur.ac.in",
    "accreditation": "Top Ranked National Law University • BCI Recognized",
    "defaultSubtitle": "State Public University • Jodhpur, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_national_law_university_odisha",
    "name": "National Law University Odisha",
    "shortName": "NLUO Cuttack",
    "city": "Cuttack",
    "state": "Odisha",
    "type": "State Public University",
    "category": "Law",
    "established": 2008,
    "website": "https://www.nluo.ac.in",
    "accreditation": "Coastal Legal Research Center • Bar Council of India",
    "defaultSubtitle": "State Public University • Cuttack, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_national_sanskrit_university",
    "name": "National Sanskrit University",
    "shortName": "NSU",
    "city": "Tirupati",
    "state": "Andhra Pradesh",
    "type": "Central University",
    "category": "Sanskrit, Shastras & Traditional Knowledge",
    "established": 1961,
    "website": "https://nsktu.ac.in",
    "accreditation": "Central University Act, 2020 • NAAC A+",
    "defaultSubtitle": "Central University for Sanskrit & Shastric Sciences • Tirupati",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_national_university_of_advanced_legal_studies",
    "name": "National University of Advanced Legal Studies",
    "shortName": "NUALS Kochi",
    "city": "Kochi",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Law",
    "established": 2005,
    "website": "https://www.nuals.ac.in",
    "accreditation": "National Law University in Kerala • BCI Recognized",
    "defaultSubtitle": "State Public University • Kochi, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_national_university_of_study_and_research_in_law",
    "name": "National University of Study and Research in Law",
    "shortName": "NUSRL Ranchi",
    "city": "Ranchi",
    "state": "Jharkhand",
    "type": "State Public University",
    "category": "Law",
    "established": 2010,
    "website": "https://www.nusrlranchi.ac.in",
    "accreditation": "National Law University in Jharkhand • BCI",
    "defaultSubtitle": "State Public University • Ranchi, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_netaji_subhas_university_of_technology",
    "name": "Netaji Subhas University of Technology",
    "shortName": "NSUT Delhi (NSIT)",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1983,
    "website": "http://www.nsut.ac.in",
    "accreditation": "Leading Engineering & AI University • Formerly NSIT",
    "defaultSubtitle": "State Public University • New Delhi, Delhi • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_nilamber_pitamber_university",
    "name": "Nilamber-Pitamber University",
    "shortName": "NPU Medininagar",
    "city": "Medininagar",
    "state": "Jharkhand",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2009,
    "website": "http://npu.ac.in",
    "accreditation": "State University for Palamu Division",
    "defaultSubtitle": "State Public University • Medininagar, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_nirma_university",
    "name": "Nirma University",
    "shortName": "Nirma Ahmedabad",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2003,
    "website": "https://nirmauni.ac.in",
    "accreditation": "NAAC A+ Accredited State Private University",
    "defaultSubtitle": "State Private University • Ahmedabad, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_nitte_deemed_to_be_university",
    "name": "Nitte (Deemed to be University)",
    "shortName": "Nitte Mangaluru",
    "city": "Mangaluru",
    "state": "Karnataka",
    "type": "Deemed to be University",
    "category": "Medical & Health",
    "established": 2008,
    "website": "https://nitte.edu.in",
    "accreditation": "NAAC A+ Grade Coastal Deemed University",
    "defaultSubtitle": "Deemed to be University • Mangaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_north_eastern_regional_institute_of_science_and_technology",
    "name": "North Eastern Regional Institute of Science and Technology",
    "shortName": "NERIST Nirjuli",
    "city": "Nirjuli",
    "state": "Arunachal Pradesh",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1984,
    "website": "https://nerist.ac.in",
    "accreditation": "Premier Autonomous Technical Institute • MoE",
    "defaultSubtitle": "Deemed to be University • Nirjuli, Arunachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_north_eastern_hill_university",
    "name": "North-Eastern Hill University",
    "shortName": "NEHU",
    "city": "Shillong",
    "state": "Meghalaya",
    "type": "Central University",
    "category": "Multidisciplinary & Sciences",
    "established": 1973,
    "website": "https://nehu.ac.in",
    "accreditation": "NAAC A • University with Potential for Excellence",
    "defaultSubtitle": "Premier Central University of Meghalaya • Shillong",
    "leadTitle": "Dean of Students' Welfare",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_o_p_jindal_global_university",
    "name": "O.P. Jindal Global University",
    "shortName": "JGU Sonipat",
    "city": "Sonipat",
    "state": "Haryana",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2009,
    "website": "https://jgu.edu.in",
    "accreditation": "Institute of Eminence (IoE) • QS Top Ranked Private University",
    "defaultSubtitle": "State Private University • Sonipat, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_odisha_university_of_agriculture_and_technology",
    "name": "Odisha University of Agriculture and Technology",
    "shortName": "OUAT Bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1962,
    "website": "https://ouat.ac.in",
    "accreditation": "Second Oldest Agricultural University in India • ICAR",
    "defaultSubtitle": "State Public University • Bhubaneswar, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_op_jindal_university_raigarh",
    "name": "OP Jindal University Raigarh",
    "shortName": "OPJU Raigarh",
    "city": "Raigarh",
    "state": "Chhattisgarh",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 2014,
    "website": "https://www.opju.ac.in",
    "accreditation": "Steel, Metallurgy & Core Engineering Leadership",
    "defaultSubtitle": "State Private University • Raigarh, Chhattisgarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_osmania_university",
    "name": "Osmania University",
    "shortName": "OU Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1918,
    "website": "https://www.osmania.ac.in",
    "accreditation": "Centenary Heritage University • NAAC A+ Grade • 7th Oldest in India",
    "defaultSubtitle": "State Public University • Hyderabad, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_palamuru_university",
    "name": "Palamuru University",
    "shortName": "Palamuru University",
    "city": "Mahabubnagar",
    "state": "Telangana",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2008,
    "website": "http://www.palamuruuniversity.com",
    "accreditation": "State University of Mahabubnagar Region",
    "defaultSubtitle": "State Public University • Mahabubnagar, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_pandit_deendayal_energy_university",
    "name": "Pandit Deendayal Energy University",
    "shortName": "PDEU Gandhinagar",
    "city": "Gandhinagar",
    "state": "Gujarat",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 2007,
    "website": "https://www.pdeu.ac.in",
    "accreditation": "NAAC A++ Grade (3.52/4) • Energy, Solar & Tech Leader",
    "defaultSubtitle": "State Private University • Gandhinagar, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_panjab_university",
    "name": "Panjab University",
    "shortName": "PU Chandigarh",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1882,
    "website": "https://puchd.ac.in",
    "accreditation": "NAAC A++ (3.68/4) • Inter-State Historic University",
    "defaultSubtitle": "State Public University • Chandigarh, Chandigarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_parul_university",
    "name": "Parul University",
    "shortName": "Parul University Vadodara",
    "city": "Vadodara",
    "state": "Gujarat",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2009,
    "website": "https://paruluniversity.ac.in",
    "accreditation": "NAAC A++ Accredited State Private University (3.55/4)",
    "defaultSubtitle": "State Private University • Vadodara, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_patliputra_university",
    "name": "Patliputra University",
    "shortName": "PPU Patna",
    "city": "Patna",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2018,
    "website": "http://www.ppup.ac.in",
    "accreditation": "Major Affiliating University in Patna & Nalanda",
    "defaultSubtitle": "State Public University • Patna, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_patna_university",
    "name": "Patna University",
    "shortName": "Patna University (PU)",
    "city": "Patna",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1917,
    "website": "https://pup.ac.in",
    "accreditation": "Seventh Oldest University in India • Historic Heritage",
    "defaultSubtitle": "State Public University • Patna, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_periyar_university",
    "name": "Periyar University",
    "shortName": "Periyar University",
    "city": "Salem",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1997,
    "website": "https://www.periyaruniversity.ac.in",
    "accreditation": "NAAC A++ Accredited State University in Western TN",
    "defaultSubtitle": "State Public University • Salem, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_pes_university",
    "name": "PES University",
    "shortName": "PESU Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 1972,
    "website": "https://pes.edu",
    "accreditation": "Premier Engineering & Computer Science University",
    "defaultSubtitle": "State Private University • Bengaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_plaksha_university",
    "name": "Plaksha University",
    "shortName": "Plaksha Mohali",
    "city": "Mohali",
    "state": "Punjab",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 2021,
    "website": "https://plaksha.edu.in",
    "accreditation": "Reimagining Tech Education • Data Science & Clean Energy",
    "defaultSubtitle": "State Private University • Mohali, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_pondicherry_university",
    "name": "Pondicherry University",
    "shortName": "PU",
    "city": "Kalapet",
    "state": "Puducherry",
    "type": "Central University",
    "category": "Multidisciplinary & Sciences",
    "established": 1985,
    "website": "https://www.pondiuni.edu.in",
    "accreditation": "NAAC A • Ministry of Education, Govt. of India",
    "defaultSubtitle": "Collegiate Central University • Puducherry",
    "leadTitle": "Dean of College Development",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_poornima_university",
    "name": "Poornima University",
    "shortName": "Poornima Jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2012,
    "website": "https://www.poornima.edu.in",
    "accreditation": "Leading Private University in Jaipur",
    "defaultSubtitle": "State Private University • Jaipur, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_presidency_university_kolkata",
    "name": "Presidency University Kolkata",
    "shortName": "Presidency Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1817,
    "website": "https://www.presiuniv.ac.in",
    "accreditation": "Bicentenary Flagship Liberal Arts & Sciences (Hindoo College 1817)",
    "defaultSubtitle": "State Public University • Kolkata, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_professor_jayashankar_telangana_state_agricultural_university",
    "name": "Professor Jayashankar Telangana State Agricultural University",
    "shortName": "PJTSAU Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1965,
    "website": "https://pjtsau.edu.in",
    "accreditation": "Apex Agricultural University of Telangana • ICAR",
    "defaultSubtitle": "State Public University • Hyderabad, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_pt_bhagwat_dayal_sharma_university_of_health_sciences",
    "name": "Pt. Bhagwat Dayal Sharma University of Health Sciences",
    "shortName": "UHSR Rohtak",
    "city": "Rohtak",
    "state": "Haryana",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 2008,
    "website": "http://uhsr.ac.in",
    "accreditation": "Apex Medical Affiliating Body in Haryana",
    "defaultSubtitle": "State Public University • Rohtak, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_pt_ravishankar_shukla_university",
    "name": "Pt. Ravishankar Shukla University",
    "shortName": "PRSU Raipur",
    "city": "Raipur",
    "state": "Chhattisgarh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1964,
    "website": "http://www.prsu.ac.in",
    "accreditation": "Oldest & Premier State University in Chhattisgarh • NAAC A",
    "defaultSubtitle": "State Public University • Raipur, Chhattisgarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_puducherry_technological_university",
    "name": "Puducherry Technological University",
    "shortName": "PTU Puducherry",
    "city": "Puducherry",
    "state": "Puducherry",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1984,
    "website": "https://ptupuducherry.ac.in",
    "accreditation": "First State Technical University of Puducherry (PEC upgraded 2020)",
    "defaultSubtitle": "State Public University • Puducherry, Puducherry • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_punjab_agricultural_university",
    "name": "Punjab Agricultural University",
    "shortName": "PAU Ludhiana",
    "city": "Ludhiana",
    "state": "Punjab",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1962,
    "website": "https://www.pau.edu",
    "accreditation": "Cradle of Green Revolution • NIRF #1 State Agri University",
    "defaultSubtitle": "State Public University • Ludhiana, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_punjab_engineering_college",
    "name": "Punjab Engineering College",
    "shortName": "PEC Chandigarh",
    "city": "Chandigarh",
    "state": "Chandigarh",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1921,
    "website": "https://pec.ac.in",
    "accreditation": "Centenary Technological Center • Founded 1921",
    "defaultSubtitle": "Deemed to be University • Chandigarh, Chandigarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_punjabi_university_patiala",
    "name": "Punjabi University Patiala",
    "shortName": "Punjabi University",
    "city": "Patiala",
    "state": "Punjab",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1962,
    "website": "http://www.punjabiuniversity.ac.in",
    "accreditation": "Second University in the World named after a language • NAAC A+",
    "defaultSubtitle": "State Public University • Patiala, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_punyashlok_ahilyadevi_holkar_solapur_university",
    "name": "Punyashlok Ahilyadevi Holkar Solapur University",
    "shortName": "PAHSU Solapur",
    "city": "Solapur",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2004,
    "website": "http://su.digitaluniversity.ac",
    "accreditation": "State University of Solapur Region • NAAC B++",
    "defaultSubtitle": "State Public University • Solapur, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_purnea_university",
    "name": "Purnea University",
    "shortName": "Purnea University",
    "city": "Purnea",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2018,
    "website": "https://purneauniversity.ac.in",
    "accreditation": "State University of Seemanchal Region",
    "defaultSubtitle": "State Public University • Purnea, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_rabindra_bharati_university",
    "name": "Rabindra Bharati University",
    "shortName": "RBU Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Arts & Humanities",
    "established": 1962,
    "website": "https://www.rbu.ac.in",
    "accreditation": "Fine Arts, Music & Performing Arts Cultural Center",
    "defaultSubtitle": "State Public University • Kolkata, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_rajasthan_technical_university",
    "name": "Rajasthan Technical University",
    "shortName": "RTU Kota",
    "city": "Kota",
    "state": "Rajasthan",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2006,
    "website": "https://www.rtu.ac.in",
    "accreditation": "Apex Technical Affiliating Body of Rajasthan",
    "defaultSubtitle": "State Public University • Kota, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_rajiv_gandhi_institute_of_petroleum_technology",
    "name": "Rajiv Gandhi Institute of Petroleum Technology",
    "shortName": "RGIPT Jais",
    "city": "Amethi",
    "state": "Uttar Pradesh",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 2007,
    "website": "https://www.rgipt.ac.in",
    "accreditation": "Institute of National Importance • Ministry of Petroleum & Natural Gas",
    "defaultSubtitle": "Institute of National Importance (INI) • Amethi, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_rajiv_gandhi_national_university_of_law",
    "name": "Rajiv Gandhi National University of Law",
    "shortName": "RGNUL Patiala",
    "city": "Patiala",
    "state": "Punjab",
    "type": "State Public University",
    "category": "Law",
    "established": 2006,
    "website": "https://www.rgnul.ac.in",
    "accreditation": "Premier Law School in Northern India • BCI",
    "defaultSubtitle": "State Public University • Patiala, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_rajiv_gandhi_proudyogiki_vishwavidyalaya",
    "name": "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    "shortName": "RGPV Bhopal",
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1998,
    "website": "https://www.rgpv.ac.in",
    "accreditation": "State Technological University of MP • NAAC A",
    "defaultSubtitle": "State Public University • Bhopal, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_rajiv_gandhi_university",
    "name": "Rajiv Gandhi University",
    "shortName": "RGU",
    "city": "Rono Hills, Doimukh",
    "state": "Arunachal Pradesh",
    "type": "Central University",
    "category": "Multidisciplinary & Tribal Studies",
    "established": 1984,
    "website": "https://www.rgu.ac.in",
    "accreditation": "NAAC A • Central University Act, 2007",
    "defaultSubtitle": "Premier Central University of Arunachal Pradesh • Itanagar",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_rajiv_gandhi_university_of_health_sciences",
    "name": "Rajiv Gandhi University of Health Sciences",
    "shortName": "RGUHS Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 1996,
    "website": "http://www.rguhs.ac.in",
    "accreditation": "Largest Health Sciences Affiliating Body in India",
    "defaultSubtitle": "State Public University • Bengaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_ranchi_university",
    "name": "Ranchi University",
    "shortName": "Ranchi University (RU)",
    "city": "Ranchi",
    "state": "Jharkhand",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1960,
    "website": "http://www.ranchiuniversity.ac.in",
    "accreditation": "Premier State Public University in Jharkhand • NAAC B++",
    "defaultSubtitle": "State Public University • Ranchi, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_rani_channamma_university",
    "name": "Rani Channamma University",
    "shortName": "RCUB Belagavi",
    "city": "Belagavi",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2010,
    "website": "https://rcub.ac.in",
    "accreditation": "Kittur Karnataka Regional University",
    "defaultSubtitle": "State Public University • Belagavi, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_rani_durgavati_vishwavidyalaya",
    "name": "Rani Durgavati Vishwavidyalaya",
    "shortName": "RDVV Jabalpur",
    "city": "Jabalpur",
    "state": "Madhya Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1956,
    "website": "https://rdunijbpin.org",
    "accreditation": "NAAC B++ Grade State University in Mahakoshal",
    "defaultSubtitle": "State Public University • Jabalpur, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_rani_lakshmi_bai_central_agricultural_university",
    "name": "Rani Lakshmi Bai Central Agricultural University",
    "shortName": "RLBCAU",
    "city": "Jhansi",
    "state": "Uttar Pradesh",
    "type": "Central University",
    "category": "Agricultural & Horticultural Sciences",
    "established": 2014,
    "website": "http://www.rlbcau.ac.in",
    "accreditation": "ICAR Recognized Central University",
    "defaultSubtitle": "Central Agricultural University • Jhansi, Bundelkhand",
    "leadTitle": "Director of Instruction",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_rashtrasant_tukadoji_maharaj_nagpur_university",
    "name": "Rashtrasant Tukadoji Maharaj Nagpur University",
    "shortName": "RTM Nagpur University",
    "city": "Nagpur",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1923,
    "website": "https://nagpuruniversity.ac.in",
    "accreditation": "Centenary State University in Vidarbha • NAAC A",
    "defaultSubtitle": "State Public University • Nagpur, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_rashtriya_raksha_university",
    "name": "Rashtriya Raksha University",
    "shortName": "RRU",
    "city": "Gandhinagar",
    "state": "Gujarat",
    "type": "Central University",
    "category": "National Security & Police Administration",
    "established": 2020,
    "website": "https://rru.ac.in",
    "accreditation": "Institute of National Importance • Ministry of Home Affairs",
    "defaultSubtitle": "National Security & Police Central University • Lavad, Gujarat",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_ravenshaw_university",
    "name": "Ravenshaw University",
    "shortName": "Ravenshaw Cuttack",
    "city": "Cuttack",
    "state": "Odisha",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1868,
    "website": "https://ravenshawuniversity.ac.in",
    "accreditation": "Historic Heritage Institution • Converted 2006 • NAAC A",
    "defaultSubtitle": "State Public University • Cuttack, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_rayalaseema_university",
    "name": "Rayalaseema University",
    "shortName": "Rayalaseema University",
    "city": "Kurnool",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2008,
    "website": "https://www.rayalaseemauniversity.ac.in",
    "accreditation": "State University for Kurnool Region",
    "defaultSubtitle": "State Public University • Kurnool, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_reva_university",
    "name": "REVA University",
    "shortName": "REVA Bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2012,
    "website": "https://www.reva.edu.in",
    "accreditation": "Top Ranked Private Multi-Disciplinary Campus",
    "defaultSubtitle": "State Private University • Bengaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_royal_global_university",
    "name": "Royal Global University",
    "shortName": "RGU Guwahati",
    "city": "Guwahati",
    "state": "Assam",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2017,
    "website": "https://www.rgu.ac",
    "accreditation": "Premier Private Multi-Disciplinary Campus",
    "defaultSubtitle": "State Private University • Guwahati, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sambalpur_university",
    "name": "Sambalpur University",
    "shortName": "Sambalpur University",
    "city": "Burla",
    "state": "Odisha",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1967,
    "website": "https://www.suniv.ac.in",
    "accreditation": "Western Odisha Apex Educational Center • NAAC A",
    "defaultSubtitle": "State Public University • Burla, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sanjay_gandhi_postgraduate_institute_of_medical_sciences",
    "name": "Sanjay Gandhi Postgraduate Institute of Medical Sciences",
    "shortName": "SGPGIMS Lucknow",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 1983,
    "website": "https://sgpgims.org.in",
    "accreditation": "NIRF Top 10 Medical Institute in India",
    "defaultSubtitle": "State Public University • Lucknow, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sant_gadge_baba_amravati_university",
    "name": "Sant Gadge Baba Amravati University",
    "shortName": "SGBAU Amravati",
    "city": "Amravati",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1983,
    "website": "https://www.sgbau.ac.in",
    "accreditation": "NAAC A Grade State University in West Vidarbha",
    "defaultSubtitle": "State Public University • Amravati, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sant_gahira_guru_vishwavidyalaya",
    "name": "Sant Gahira Guru Vishwavidyalaya",
    "shortName": "Sarguja University",
    "city": "Ambikapur",
    "state": "Chhattisgarh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2008,
    "website": "https://sggcg.in",
    "accreditation": "State University of Northern Chhattisgarh",
    "defaultSubtitle": "State Public University • Ambikapur, Chhattisgarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sardar_patel_university",
    "name": "Sardar Patel University",
    "shortName": "SPU Vallabh Vidyanagar",
    "city": "Vallabh Vidyanagar",
    "state": "Gujarat",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1955,
    "website": "https://www.spuvvn.edu",
    "accreditation": "NAAC A Grade • Historic Rural Higher Education Pioneer",
    "defaultSubtitle": "State Public University • Vallabh Vidyanagar, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sardar_vallabhbhai_national_institute_of_technology_surat",
    "name": "Sardar Vallabhbhai National Institute of Technology Surat",
    "shortName": "SVNIT Surat",
    "city": "Surat",
    "state": "Gujarat",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1961,
    "website": "https://www.svnit.ac.in",
    "accreditation": "Leading Technological Center in Western India • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1961 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_sastra_deemed_university",
    "name": "SASTRA Deemed University",
    "shortName": "SASTRA Thanjavur",
    "city": "Thanjavur",
    "state": "Tamil Nadu",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1984,
    "website": "https://www.sastra.edu",
    "accreditation": "UGC Category I Deemed University • NAAC A++ (3.76/4)",
    "defaultSubtitle": "Deemed to be University • Thanjavur, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sathyabama_institute_of_science_and_technology",
    "name": "Sathyabama Institute of Science and Technology",
    "shortName": "Sathyabama Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1987,
    "website": "https://www.sathyabama.ac.in",
    "accreditation": "NAAC A++ Accredited Deemed University",
    "defaultSubtitle": "Deemed to be University • Chennai, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_saurashtra_university",
    "name": "Saurashtra University",
    "shortName": "Saurashtra University",
    "city": "Rajkot",
    "state": "Gujarat",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1967,
    "website": "https://www.saurashtrauniversity.edu",
    "accreditation": "NAAC A Grade State University in Saurashtra Region",
    "defaultSubtitle": "State Public University • Rajkot, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_saveetha_institute_of_medical_and_technical_sciences",
    "name": "Saveetha Institute of Medical and Technical Sciences",
    "shortName": "SIMATS Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 2005,
    "website": "https://www.saveetha.com",
    "accreditation": "World-Renowned Dental & Tech Campus • NAAC A++ (3.66/4)",
    "defaultSubtitle": "Deemed to be University • Chennai, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_savitribai_phule_pune_university",
    "name": "Savitribai Phule Pune University",
    "shortName": "SPPU (Pune University)",
    "city": "Pune",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1949,
    "website": "http://www.unipune.ac.in",
    "accreditation": "The Oxford of the East • NAAC A+ Grade (3.60/4)",
    "defaultSubtitle": "State Public University • Pune, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_shaheed_mahendra_karma_vishwavidyalaya",
    "name": "Shaheed Mahendra Karma Vishwavidyalaya",
    "shortName": "Bastar University",
    "city": "Jagdalpur",
    "state": "Chhattisgarh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2008,
    "website": "https://bvvjdp.ac.in",
    "accreditation": "State University of Bastar Tribal Region",
    "defaultSubtitle": "State Public University • Jagdalpur, Chhattisgarh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sharda_university",
    "name": "Sharda University",
    "shortName": "Sharda Greater Noida",
    "city": "Greater Noida",
    "state": "Uttar Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2009,
    "website": "https://www.sharda.ac.in",
    "accreditation": "NAAC A+ Accredited Global University in NCR",
    "defaultSubtitle": "State Private University • Greater Noida, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sher_e_kashmir_university_of_agricultural_sciences_and_technology_of_jammu",
    "name": "Sher-e-Kashmir University of Agricultural Sciences and Technology of Jammu",
    "shortName": "SKUAST Jammu",
    "city": "Jammu",
    "state": "Jammu and Kashmir",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1999,
    "website": "https://skuast.org",
    "accreditation": "Agricultural & Veterinary Sciences Leader in Jammu",
    "defaultSubtitle": "State Public University • Jammu, Jammu and Kashmir • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sher_e_kashmir_university_of_agricultural_sciences_and_technology_of_kashmir",
    "name": "Sher-e-Kashmir University of Agricultural Sciences and Technology of Kashmir",
    "shortName": "SKUAST Kashmir",
    "city": "Srinagar",
    "state": "Jammu and Kashmir",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1982,
    "website": "https://skuastkashmir.ac.in",
    "accreditation": "Premier Temperate Hill Agriculture University",
    "defaultSubtitle": "State Public University • Srinagar, Jammu and Kashmir • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_shiv_nadar_university",
    "name": "Shiv Nadar University",
    "shortName": "SNU Greater Noida",
    "city": "Greater Noida",
    "state": "Uttar Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2011,
    "website": "https://snu.edu.in",
    "accreditation": "Institution of Eminence Recommended • NAAC A",
    "defaultSubtitle": "State Private University • Greater Noida, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_shivaji_university_kolhapur",
    "name": "Shivaji University Kolhapur",
    "shortName": "Shivaji University",
    "city": "Kolhapur",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1962,
    "website": "http://www.unishivaji.ac.in",
    "accreditation": "NAAC A++ Accredited State University (3.52/4)",
    "defaultSubtitle": "State Public University • Kolhapur, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_shoolini_university_of_biotechnology_and_management_sciences",
    "name": "Shoolini University of Biotechnology and Management Sciences",
    "shortName": "Shoolini University",
    "city": "Solan",
    "state": "Himachal Pradesh",
    "type": "State Private University",
    "category": "Science & Research",
    "established": 2009,
    "website": "https://shooliniuniversity.com",
    "accreditation": "Top Research Citations Rank • NAAC A+ Grade",
    "defaultSubtitle": "State Private University • Solan, Himachal Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_shri_lal_bahadur_shastri_national_sanskrit_university",
    "name": "Shri Lal Bahadur Shastri National Sanskrit University",
    "shortName": "SLBSNSU",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Central University",
    "category": "Sanskrit & Vedic Literature",
    "established": 1962,
    "website": "https://www.slbsrsv.ac.in",
    "accreditation": "Central Sanskrit University Act, 2020 • NAAC A",
    "defaultSubtitle": "Central University for Classical Vedic Studies • New Delhi",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_shri_mata_vaishno_devi_university",
    "name": "Shri Mata Vaishno Devi University",
    "shortName": "SMVDU Katra",
    "city": "Katra",
    "state": "Jammu and Kashmir",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1999,
    "website": "https://www.smvdu.ac.in",
    "accreditation": "Residential Technological University • UGC Recognized",
    "defaultSubtitle": "State Public University • Katra, Jammu and Kashmir • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_shri_vishwakarma_skill_university",
    "name": "Shri Vishwakarma Skill University",
    "shortName": "SVSU Palwal",
    "city": "Dudhola",
    "state": "Haryana",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2016,
    "website": "https://svsu.ac.in",
    "accreditation": "India's First Government Skill University",
    "defaultSubtitle": "State Public University • Dudhola, Haryana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sido_kanhu_murmu_university",
    "name": "Sido Kanhu Murmu University",
    "shortName": "SKMU Dumka",
    "city": "Dumka",
    "state": "Jharkhand",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1992,
    "website": "http://skmu.ac.in",
    "accreditation": "State University for Santhal Pargana",
    "defaultSubtitle": "State Public University • Dumka, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sikkim_university",
    "name": "Sikkim University",
    "shortName": "SU",
    "city": "Gangtok",
    "state": "Sikkim",
    "type": "Central University",
    "category": "Multidisciplinary & Himalayan Studies",
    "established": 2007,
    "website": "https://cus.ac.in",
    "accreditation": "NAAC B • Central Universities Act, 2006",
    "defaultSubtitle": "Central University • Samdur, Tadong, Gangtok",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_siksha_o_anusandhan",
    "name": "Siksha 'O' Anusandhan",
    "shortName": "SOA University",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 2007,
    "website": "https://www.soa.ac.in",
    "accreditation": "NIRF Top 15 University in India • NAAC A++",
    "defaultSubtitle": "Deemed to be University • Bhubaneswar, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sister_nivedita_university",
    "name": "Sister Nivedita University",
    "shortName": "SNU Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2017,
    "website": "https://snuniv.ac.in",
    "accreditation": "Techno India Group Flagship University",
    "defaultSubtitle": "State Private University • Kolkata, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sndt_women_s_university",
    "name": "SNDT Women's University",
    "shortName": "SNDT Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1916,
    "website": "https://sndt.ac.in",
    "accreditation": "First Women's University in India and South-East Asia",
    "defaultSubtitle": "State Public University • Mumbai, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_soban_singh_jeena_university",
    "name": "Soban Singh Jeena University",
    "shortName": "SSJU Almora",
    "city": "Almora",
    "state": "Uttarakhand",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2020,
    "website": "https://ssju.ac.in",
    "accreditation": "State University of Kumaun Himalayan Belt",
    "defaultSubtitle": "State Public University • Almora, Uttarakhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_somaiya_vidyavihar_university",
    "name": "Somaiya Vidyavihar University",
    "shortName": "Somaiya Vidyavihar",
    "city": "Mumbai",
    "state": "Maharashtra",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 1959,
    "website": "https://somaiya.edu",
    "accreditation": "Historic Educational Campus in Mumbai • UGC Recognized",
    "defaultSubtitle": "State Private University • Mumbai, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_south_asian_university",
    "name": "South Asian University",
    "shortName": "SAU",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Central University",
    "category": "International & Regional Studies",
    "established": 2010,
    "website": "http://www.sau.int",
    "accreditation": "International Intergovernmental University (SAARC Nations)",
    "defaultSubtitle": "International Central University of SAARC Nations • Chanakyapuri, New Delhi",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "President"
  },
  {
    "id": "univ_sri_dev_suman_uttarakhand_university",
    "name": "Sri Dev Suman Uttarakhand University",
    "shortName": "SDSUU Tehri",
    "city": "Badshahithaul",
    "state": "Uttarakhand",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2012,
    "website": "https://www.sdsuv.ac.in",
    "accreditation": "State University for Garhwal Foothills",
    "defaultSubtitle": "State Public University • Badshahithaul, Uttarakhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sri_krishnadevaraya_university",
    "name": "Sri Krishnadevaraya University",
    "shortName": "SKU Anantapur",
    "city": "Anantapur",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1981,
    "website": "https://skuniversity.ac.in",
    "accreditation": "NAAC B++ Grade State University",
    "defaultSubtitle": "State Public University • Anantapur, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sri_padmavati_mahila_visvavidyalayam",
    "name": "Sri Padmavati Mahila Visvavidyalayam",
    "shortName": "SPMVV Tirupati",
    "city": "Tirupati",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1983,
    "website": "https://www.spmvv.ac.in",
    "accreditation": "Premier Women's University in AP • NAAC A+",
    "defaultSubtitle": "State Public University • Tirupati, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sri_ramachandra_institute_of_higher_education_and_research",
    "name": "Sri Ramachandra Institute of Higher Education and Research",
    "shortName": "SRIHER Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "Deemed to be University",
    "category": "Medical & Health",
    "established": 1985,
    "website": "https://www.sriramachandra.edu.in",
    "accreditation": "Premier Medical Deemed University • NAAC A++ (3.53/4)",
    "defaultSubtitle": "Deemed to be University • Chennai, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sri_sathya_sai_institute_of_higher_learning",
    "name": "Sri Sathya Sai Institute of Higher Learning",
    "shortName": "SSSIHL Prasanthi Nilayam",
    "city": "Prasanthi Nilayam",
    "state": "Andhra Pradesh",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1981,
    "website": "https://www.sssihl.edu.in",
    "accreditation": "Values-Based Free Higher Education • NAAC A++",
    "defaultSubtitle": "Deemed to be University • Prasanthi Nilayam, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_sri_venkateswara_university",
    "name": "Sri Venkateswara University",
    "shortName": "SVU Tirupati",
    "city": "Tirupati",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1954,
    "website": "https://svuniversity.edu.in",
    "accreditation": "NAAC A+ Grade State University",
    "defaultSubtitle": "State Public University • Tirupati, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_srimanta_sankaradeva_university_of_health_sciences",
    "name": "Srimanta Sankaradeva University of Health Sciences",
    "shortName": "SSUHS Guwahati",
    "city": "Guwahati",
    "state": "Assam",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 2009,
    "website": "http://www.ssuhs.in",
    "accreditation": "Apex Medical Affiliating University in Assam",
    "defaultSubtitle": "State Public University • Guwahati, Assam • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_srm_institute_of_science_and_technology",
    "name": "SRM Institute of Science and Technology",
    "shortName": "SRM IST Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1985,
    "website": "https://www.srmist.edu.in",
    "accreditation": "UGC Category I Autonomy • NAAC A++ (3.55/4)",
    "defaultSubtitle": "Deemed to be University • Chennai, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_srm_university_ap",
    "name": "SRM University AP",
    "shortName": "SRM AP Amaravati",
    "city": "Amaravati",
    "state": "Andhra Pradesh",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2017,
    "website": "https://srmap.edu.in",
    "accreditation": "Premier Multi-Disciplinary University in Capital Region",
    "defaultSubtitle": "State Private University • Amaravati, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_st_xavier_s_university_kolkata",
    "name": "St. Xavier's University Kolkata",
    "shortName": "SXUK Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2017,
    "website": "https://www.sxuk.edu.in",
    "accreditation": "Jesuit Tradition of Educational Excellence",
    "defaultSubtitle": "State Private University • Kolkata, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_svkm_s_narsee_monjee_institute_of_management_studies",
    "name": "SVKM's Narsee Monjee Institute of Management Studies",
    "shortName": "NMIMS Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1981,
    "website": "https://www.nmims.edu",
    "accreditation": "UGC Category I Autonomy • NAAC A+ Accredited",
    "defaultSubtitle": "Deemed to be University • Mumbai, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_swami_ramanand_teerth_marathwada_university",
    "name": "Swami Ramanand Teerth Marathwada University",
    "shortName": "SRTMUN Nanded",
    "city": "Nanded",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1994,
    "website": "https://srtmun.ac.in",
    "accreditation": "State University of Southern Marathwada • NAAC B++",
    "defaultSubtitle": "State Public University • Nanded, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_symbiosis_international_university",
    "name": "Symbiosis International University",
    "shortName": "SIU Pune",
    "city": "Pune",
    "state": "Maharashtra",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1971,
    "website": "https://siu.edu.in",
    "accreditation": "UGC Recognized Deemed University • NAAC A++ (3.58/4)",
    "defaultSubtitle": "Deemed to be University • Pune, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_tamil_nadu_agricultural_university",
    "name": "Tamil Nadu Agricultural University",
    "shortName": "TNAU Coimbatore",
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1971,
    "website": "https://tnau.ac.in",
    "accreditation": "Premier Agricultural Sciences University in South India",
    "defaultSubtitle": "State Public University • Coimbatore, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_tamil_nadu_dr_ambedkar_law_university",
    "name": "Tamil Nadu Dr. Ambedkar Law University",
    "shortName": "TNDALU Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Law",
    "established": 1997,
    "website": "https://tndalu.ac.in",
    "accreditation": "First Law University of its kind in South Asia • BCI",
    "defaultSubtitle": "State Public University • Chennai, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_tamil_nadu_national_law_university",
    "name": "Tamil Nadu National Law University",
    "shortName": "TNNLU Tiruchirappalli",
    "city": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Law",
    "established": 2012,
    "website": "https://www.tnnlu.ac.in",
    "accreditation": "National Law University in Tamil Nadu • BCI",
    "defaultSubtitle": "State Public University • Tiruchirappalli, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_tata_institute_of_social_sciences",
    "name": "Tata Institute of Social Sciences",
    "shortName": "TISS Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "type": "Deemed to be University",
    "category": "Multi-Disciplinary",
    "established": 1936,
    "website": "https://tiss.edu",
    "accreditation": "Premier Social Sciences & HRM Institute • MoE, Govt. of India",
    "defaultSubtitle": "Deemed to be University • Mumbai, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_techno_india_university",
    "name": "Techno India University",
    "shortName": "TIU Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "type": "State Private University",
    "category": "Engineering & Technology",
    "established": 2012,
    "website": "https://technoindiauniversity.ac.in",
    "accreditation": "First Private University in West Bengal",
    "defaultSubtitle": "State Private University • Kolkata, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_telangana_university",
    "name": "Telangana University",
    "shortName": "TU Nizamabad",
    "city": "Nizamabad",
    "state": "Telangana",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2006,
    "website": "http://www.telanganauniversity.ac.in",
    "accreditation": "State University of Northern Telangana",
    "defaultSubtitle": "State Public University • Nizamabad, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_tezpur_university",
    "name": "Tezpur University",
    "shortName": "TU",
    "city": "Tezpur",
    "state": "Assam",
    "type": "Central University",
    "category": "Science, Technology & Humanities",
    "established": 1994,
    "website": "http://www.tezu.ernet.in",
    "accreditation": "NAAC A+ • Visitor's Best University Award",
    "defaultSubtitle": "Central University • Napaam, Tezpur, Assam",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_thapar_institute_of_engineering_and_technology",
    "name": "Thapar Institute of Engineering and Technology",
    "shortName": "TIET Patiala",
    "city": "Patiala",
    "state": "Punjab",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1956,
    "website": "https://www.thapar.edu",
    "accreditation": "NIRF Top 20 Engineering • NAAC A+ Grade",
    "defaultSubtitle": "Deemed to be University • Patiala, Punjab • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_the_tamil_nadu_dr_m_g_r_medical_university",
    "name": "The Tamil Nadu Dr. M.G.R. Medical University",
    "shortName": "TNMGRMU Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Medical & Health",
    "established": 1987,
    "website": "https://www.tnmgrmu.ac.in",
    "accreditation": "Apex Medical Affiliating Body in Tamil Nadu",
    "defaultSubtitle": "State Public University • Chennai, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_tilka_manjhi_bhagalpur_university",
    "name": "Tilka Manjhi Bhagalpur University",
    "shortName": "TMBU Bhagalpur",
    "city": "Bhagalpur",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1960,
    "website": "https://tmbuniv.ac.in",
    "accreditation": "Historic University of Anga Region",
    "defaultSubtitle": "State Public University • Bhagalpur, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_tripura_university",
    "name": "Tripura University",
    "shortName": "TU",
    "city": "Suryamaninagar, Agartala",
    "state": "Tripura",
    "type": "Central University",
    "category": "Multidisciplinary & Sciences",
    "established": 1987,
    "website": "https://www.tripurauniv.ac.in",
    "accreditation": "NAAC B • Central University Act, 2006",
    "defaultSubtitle": "Central University • Suryamaninagar, Agartala, Tripura",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_tumkur_university",
    "name": "Tumkur University",
    "shortName": "Tumkur University",
    "city": "Tumakuru",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2004,
    "website": "http://tumkuruniversity.ac.in",
    "accreditation": "NAAC A Grade State University in Tumakuru",
    "defaultSubtitle": "State Public University • Tumakuru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_agricultural_sciences_bangalore",
    "name": "University of Agricultural Sciences Bangalore",
    "shortName": "UAS Bengaluru (GKVK)",
    "city": "Bengaluru",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1964,
    "website": "https://uasbangalore.edu.in",
    "accreditation": "Premier Agricultural Sciences University • ICAR",
    "defaultSubtitle": "State Public University • Bengaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_agricultural_sciences_dharwad",
    "name": "University of Agricultural Sciences Dharwad",
    "shortName": "UAS Dharwad",
    "city": "Dharwad",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Agriculture",
    "established": 1986,
    "website": "https://uasd.edu",
    "accreditation": "North Karnataka Agricultural Sciences Center",
    "defaultSubtitle": "State Public University • Dharwad, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_allahabad",
    "name": "University of Allahabad",
    "shortName": "UoA",
    "city": "Prayagraj",
    "state": "Uttar Pradesh",
    "type": "Central University",
    "category": "Multidisciplinary & Classical Studies",
    "established": 1887,
    "website": "https://www.allduniv.ac.in",
    "accreditation": "Central University • 'Oxford of the East' Founded 1887",
    "defaultSubtitle": "Fourth Oldest University in India • Prayagraj, Uttar Pradesh",
    "leadTitle": "Dean of College Development",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_university_of_burdwan",
    "name": "University of Burdwan",
    "shortName": "Burdwan University",
    "city": "Bardhaman",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1960,
    "website": "http://www.buruniv.ac.in",
    "accreditation": "Major State Affiliating University in Western Bengal",
    "defaultSubtitle": "State Public University • Bardhaman, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_calcutta",
    "name": "University of Calcutta",
    "shortName": "Calcutta University (CU)",
    "city": "Kolkata",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1857,
    "website": "https://www.caluniv.ac.in",
    "accreditation": "First Modern University in South Asia • 5 Nobel Laureates associated",
    "defaultSubtitle": "State Public University • Kolkata, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_calicut",
    "name": "University of Calicut",
    "shortName": "Calicut University",
    "city": "Thenhipalam",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1968,
    "website": "https://uoc.ac.in",
    "accreditation": "Largest University in Kerala by Colleges • NAAC A+",
    "defaultSubtitle": "State Public University • Thenhipalam, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_delhi",
    "name": "University of Delhi",
    "shortName": "DU",
    "city": "New Delhi",
    "state": "Delhi",
    "type": "Central University",
    "category": "Multidisciplinary & Collegiate",
    "established": 1922,
    "website": "https://www.du.ac.in",
    "accreditation": "NAAC A++ • Institute of Eminence (IoE) • NIRF #11",
    "defaultSubtitle": "Collegiate Central University • Institute of Eminence • New Delhi",
    "leadTitle": "Dean of Colleges & Examinations",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_university_of_gour_banga",
    "name": "University of Gour Banga",
    "shortName": "UGB Malda",
    "city": "Malda",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2008,
    "website": "http://www.ugb.ac.in",
    "accreditation": "State University of Malda Division",
    "defaultSubtitle": "State Public University • Malda, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_hyderabad",
    "name": "University of Hyderabad",
    "shortName": "UoH / HCU",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "Central University",
    "category": "Multidisciplinary & Research",
    "established": 1974,
    "website": "https://uohyd.ac.in",
    "accreditation": "NAAC A++ • Institute of Eminence (IoE) • NIRF #10",
    "defaultSubtitle": "Premier Central University • Institute of Eminence • Hyderabad",
    "leadTitle": "Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_university_of_jammu",
    "name": "University of Jammu",
    "shortName": "Jammu University (JU)",
    "city": "Jammu",
    "state": "Jammu and Kashmir",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1969,
    "website": "https://jammuuniversity.ac.in",
    "accreditation": "NAAC A+ Grade State University • Govt. of J&K",
    "defaultSubtitle": "State Public University • Jammu, Jammu and Kashmir • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_kalyani",
    "name": "University of Kalyani",
    "shortName": "Kalyani University",
    "city": "Kalyani",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1960,
    "website": "https://klyuniv.ac.in",
    "accreditation": "NAAC A Grade State University • Govt. of West Bengal",
    "defaultSubtitle": "State Public University • Kalyani, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_kashmir",
    "name": "University of Kashmir",
    "shortName": "Kashmir University (KU)",
    "city": "Srinagar",
    "state": "Jammu and Kashmir",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1948,
    "website": "https://kashmiruniversity.net",
    "accreditation": "NAAC A+ Grade State University (3.31/4)",
    "defaultSubtitle": "State Public University • Srinagar, Jammu and Kashmir • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_kerala",
    "name": "University of Kerala",
    "shortName": "Kerala University",
    "city": "Thiruvananthapuram",
    "state": "Kerala",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1937,
    "website": "https://www.keralauniversity.ac.in",
    "accreditation": "NAAC A++ Accredited State University (3.67/4)",
    "defaultSubtitle": "State Public University • Thiruvananthapuram, Kerala • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_kota",
    "name": "University of Kota",
    "shortName": "Kota University",
    "city": "Kota",
    "state": "Rajasthan",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2003,
    "website": "https://www.uok.ac.in",
    "accreditation": "Hadoti Region State University • NAAC B",
    "defaultSubtitle": "State Public University • Kota, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_ladakh",
    "name": "University of Ladakh",
    "shortName": "University of Ladakh",
    "city": "Leh",
    "state": "Ladakh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2018,
    "website": "https://uol.ac.in",
    "accreditation": "Highest Altitude Cluster University in India • UT Administration of Ladakh",
    "defaultSubtitle": "State Public University • Leh, Ladakh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_lucknow",
    "name": "University of Lucknow",
    "shortName": "Lucknow University (LU)",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1920,
    "website": "https://www.lkouniv.ac.in",
    "accreditation": "Centenary State University • NAAC A++ (3.55/4)",
    "defaultSubtitle": "State Public University • Lucknow, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_madras",
    "name": "University of Madras",
    "shortName": "Madras University",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1857,
    "website": "https://www.unom.ac.in",
    "accreditation": "One of the First 3 Modern Universities in India • NAAC A++",
    "defaultSubtitle": "State Public University • Chennai, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_mumbai",
    "name": "University of Mumbai",
    "shortName": "Mumbai University (MU)",
    "city": "Mumbai",
    "state": "Maharashtra",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1857,
    "website": "https://mu.ac.in",
    "accreditation": "First 3 Modern Universities in India • NAAC A++",
    "defaultSubtitle": "State Public University • Mumbai, Maharashtra • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_mysore",
    "name": "University of Mysore",
    "shortName": "Mysore University",
    "city": "Mysuru",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1916,
    "website": "https://uni-mysore.ac.in",
    "accreditation": "First University in Karnataka & Sixth in India • NAAC A",
    "defaultSubtitle": "State Public University • Mysuru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_north_bengal",
    "name": "University of North Bengal",
    "shortName": "NBU Siliguri",
    "city": "Siliguri",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1962,
    "website": "https://www.nbu.ac.in",
    "accreditation": "Premier Himalayan Foothill State University • NAAC A",
    "defaultSubtitle": "State Public University • Siliguri, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_patanjali",
    "name": "University of Patanjali",
    "shortName": "UOP Haridwar",
    "city": "Haridwar",
    "state": "Uttarakhand",
    "type": "State Private University",
    "category": "Medical & Health",
    "established": 2006,
    "website": "https://universityofpatanjali.com",
    "accreditation": "World Center for Yoga, Ayurveda & Naturopathy",
    "defaultSubtitle": "State Private University • Haridwar, Uttarakhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_petroleum_and_energy_studies",
    "name": "University of Petroleum and Energy Studies",
    "shortName": "UPES Dehradun",
    "city": "Dehradun",
    "state": "Uttarakhand",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2003,
    "website": "https://www.upes.ac.in",
    "accreditation": "Energy, Aviation & Digital Tech Pioneer • NAAC A Grade",
    "defaultSubtitle": "State Private University • Dehradun, Uttarakhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_university_of_rajasthan",
    "name": "University of Rajasthan",
    "shortName": "Rajasthan University (UOR)",
    "city": "Jaipur",
    "state": "Rajasthan",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1947,
    "website": "https://www.uniraj.ac.in",
    "accreditation": "Oldest Institution of Higher Learning in Rajasthan • NAAC A",
    "defaultSubtitle": "State Public University • Jaipur, Rajasthan • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_usha_martin_university",
    "name": "Usha Martin University",
    "shortName": "UMU Ranchi",
    "city": "Ranchi",
    "state": "Jharkhand",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2012,
    "website": "https://www.umu.ac.in",
    "accreditation": "Leading Private University in Jharkhand",
    "defaultSubtitle": "State Private University • Ranchi, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_utkal_university",
    "name": "Utkal University",
    "shortName": "Utkal University",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1943,
    "website": "https://utkaluniversity.ac.in",
    "accreditation": "Oldest University in Odisha • 17th Oldest in India • NAAC A+",
    "defaultSubtitle": "State Public University • Bhubaneswar, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_veer_bahadur_singh_purvanchal_university",
    "name": "Veer Bahadur Singh Purvanchal University",
    "shortName": "VBSPU Jaunpur",
    "city": "Jaunpur",
    "state": "Uttar Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1987,
    "website": "http://www.vbspu.ac.in",
    "accreditation": "NAAC A+ Grade State University in Purvanchal",
    "defaultSubtitle": "State Public University • Jaunpur, Uttar Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_veer_kunwar_singh_university",
    "name": "Veer Kunwar Singh University",
    "shortName": "VKSU Ara",
    "city": "Ara",
    "state": "Bihar",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1992,
    "website": "https://vksu.ac.in",
    "accreditation": "State University of Bhojpur Region",
    "defaultSubtitle": "State Public University • Ara, Bihar • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_veer_madho_singh_bhandari_uttarakhand_technical_university",
    "name": "Veer Madho Singh Bhandari Uttarakhand Technical University",
    "shortName": "UTU Dehradun",
    "city": "Dehradun",
    "state": "Uttarakhand",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 2005,
    "website": "https://uktech.ac.in",
    "accreditation": "Apex State Technical University of Uttarakhand",
    "defaultSubtitle": "State Public University • Dehradun, Uttarakhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_veer_narmad_south_gujarat_university",
    "name": "Veer Narmad South Gujarat University",
    "shortName": "VNSGU Surat",
    "city": "Surat",
    "state": "Gujarat",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1965,
    "website": "https://www.vnsgu.ac.in",
    "accreditation": "NAAC A Grade State University in South Gujarat",
    "defaultSubtitle": "State Public University • Surat, Gujarat • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_veer_surendra_sai_university_of_technology",
    "name": "Veer Surendra Sai University of Technology",
    "shortName": "VSSUT Burla",
    "city": "Burla",
    "state": "Odisha",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1956,
    "website": "https://www.vssut.ac.in",
    "accreditation": "Oldest Engineering College in Odisha (UCE Burla) • NAAC A",
    "defaultSubtitle": "State Public University • Burla, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_vellore_institute_of_technology",
    "name": "Vellore Institute of Technology",
    "shortName": "VIT Vellore",
    "city": "Vellore",
    "state": "Tamil Nadu",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1984,
    "website": "https://vit.ac.in",
    "accreditation": "Institute of Eminence (IoE) • NAAC A++ (3.66/4)",
    "defaultSubtitle": "Deemed to be University • Vellore, Tamil Nadu • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_vidyasagar_university",
    "name": "Vidyasagar University",
    "shortName": "Vidyasagar University",
    "city": "Midnapore",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1981,
    "website": "http://www.vidyasagar.ac.in",
    "accreditation": "Named after Pandit Iswar Chandra Vidyasagar",
    "defaultSubtitle": "State Public University • Midnapore, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_vignan_s_foundation_for_science_technology_and_research",
    "name": "Vignan's Foundation for Science, Technology and Research",
    "shortName": "Vignan University",
    "city": "Guntur",
    "state": "Andhra Pradesh",
    "type": "Deemed to be University",
    "category": "Engineering & Technology",
    "established": 1997,
    "website": "https://vignan.ac.in",
    "accreditation": "NAAC A+ Grade Deemed University",
    "defaultSubtitle": "Deemed to be University • Guntur, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_vijayanagara_sri_krishnadevaraya_university",
    "name": "Vijayanagara Sri Krishnadevaraya University",
    "shortName": "VSKU Ballari",
    "city": "Ballari",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2010,
    "website": "http://vskub.ac.in",
    "accreditation": "State University of Bellary & Koppal Region",
    "defaultSubtitle": "State Public University • Ballari, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_vikram_university",
    "name": "Vikram University",
    "shortName": "Vikram University Ujjain",
    "city": "Ujjain",
    "state": "Madhya Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1957,
    "website": "https://vikramuniv.ac.in",
    "accreditation": "Historic Cultural & Academic Center of Malwa • NAAC A",
    "defaultSubtitle": "State Public University • Ujjain, Madhya Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_vikrama_simhapuri_university",
    "name": "Vikrama Simhapuri University",
    "shortName": "VSU Nellore",
    "city": "Nellore",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2008,
    "website": "https://simhapuriuniv.ac.in",
    "accreditation": "State University for Coastal AP",
    "defaultSubtitle": "State Public University • Nellore, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_vinoba_bhave_university",
    "name": "Vinoba Bhave University",
    "shortName": "VBU Hazaribag",
    "city": "Hazaribag",
    "state": "Jharkhand",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 1992,
    "website": "https://www.vbu.ac.in",
    "accreditation": "Major Affiliating University in North Chotanagpur",
    "defaultSubtitle": "State Public University • Hazaribag, Jharkhand • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_visva_bharati_university",
    "name": "Visva-Bharati University",
    "shortName": "Visva-Bharati",
    "city": "Santiniketan",
    "state": "West Bengal",
    "type": "Central University",
    "category": "Arts, Humanities & Sciences",
    "established": 1921,
    "website": "https://www.visvabharati.ac.in",
    "accreditation": "UNESCO World Heritage Institution • NAAC A",
    "defaultSubtitle": "Central University founded by Rabindranath Tagore • Santiniketan",
    "leadTitle": "Upacharya / Dean of Academic Affairs",
    "officerTitle": "Vice-Chancellor"
  },
  {
    "id": "univ_visvesvaraya_national_institute_of_technology_nagpur",
    "name": "Visvesvaraya National Institute of Technology Nagpur",
    "shortName": "VNIT Nagpur",
    "city": "Nagpur",
    "state": "Maharashtra",
    "type": "Institute of National Importance (INI)",
    "category": "Engineering & Technology",
    "established": 1960,
    "website": "https://vnit.ac.in",
    "accreditation": "Premier Central Indian Engineering Institute • MoE",
    "defaultSubtitle": "Institute of National Importance • Founded 1960 • Ministry of Education, Govt. of India",
    "leadTitle": "Director",
    "officerTitle": "Dean of Academic Affairs & Registrar"
  },
  {
    "id": "univ_visvesvaraya_technological_university",
    "name": "Visvesvaraya Technological University",
    "shortName": "VTU Belagavi",
    "city": "Belagavi",
    "state": "Karnataka",
    "type": "State Public University",
    "category": "Engineering & Technology",
    "established": 1998,
    "website": "https://vtu.ac.in",
    "accreditation": "Apex Technical Affiliating Body of Karnataka",
    "defaultSubtitle": "State Public University • Belagavi, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_west_bengal_national_university_of_juridical_sciences",
    "name": "West Bengal National University of Juridical Sciences",
    "shortName": "WBNUJS Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Law",
    "established": 1999,
    "website": "https://www.nujs.edu",
    "accreditation": "Premier National Law University • Bar Council of India",
    "defaultSubtitle": "State Public University • Kolkata, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_west_bengal_state_university",
    "name": "West Bengal State University",
    "shortName": "WBSU Barasat",
    "city": "Barasat",
    "state": "West Bengal",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2008,
    "website": "https://wbsu.ac.in",
    "accreditation": "State University of North 24 Parganas",
    "defaultSubtitle": "State Public University • Barasat, West Bengal • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_woxsen_university",
    "name": "Woxsen University",
    "shortName": "Woxsen Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "type": "State Private University",
    "category": "Multi-Disciplinary",
    "established": 2014,
    "website": "https://woxsen.edu.in",
    "accreditation": "Business, Architecture & Technology Pioneer",
    "defaultSubtitle": "State Private University • Hyderabad, Telangana • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_xim_university",
    "name": "XIM University",
    "shortName": "XIM Bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "type": "State Private University",
    "category": "Management",
    "established": 2013,
    "website": "https://xim.edu.in",
    "accreditation": "Jesuit Business & Governance Leadership",
    "defaultSubtitle": "State Private University • Bhubaneswar, Odisha • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_yenepoya_deemed_to_be_university",
    "name": "Yenepoya (Deemed to be University)",
    "shortName": "Yenepoya Mangaluru",
    "city": "Mangaluru",
    "state": "Karnataka",
    "type": "Deemed to be University",
    "category": "Medical & Health",
    "established": 2008,
    "website": "https://www.yenepoya.edu.in",
    "accreditation": "NAAC A+ Grade Medical Deemed University",
    "defaultSubtitle": "Deemed to be University • Mangaluru, Karnataka • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  },
  {
    "id": "univ_yogi_vemana_university",
    "name": "Yogi Vemana University",
    "shortName": "YVU Kadapa",
    "city": "Kadapa",
    "state": "Andhra Pradesh",
    "type": "State Public University",
    "category": "Multi-Disciplinary",
    "established": 2006,
    "website": "http://www.yogivemanauniversity.ac.in",
    "accreditation": "NAAC A Grade State University",
    "defaultSubtitle": "State Public University • Kadapa, Andhra Pradesh • Recognized by UGC & Ministry of Education, Govt. of India",
    "leadTitle": "Vice-Chancellor",
    "officerTitle": "Registrar & Controller of Examinations"
  }
];

const IndianUniversitiesHub = {
  all: INDIAN_UNIVERSITIES,
  states: INDIAN_STATES_UT,
  types: INDIAN_UNIVERSITY_TYPES,

  filter({ query, state, type, category } = {}) {
    let results = INDIAN_UNIVERSITIES;
    if (query) {
      const q = query.toLowerCase().trim();
      results = results.filter(u => 
        u.name.toLowerCase().includes(q) ||
        (u.shortName && u.shortName.toLowerCase().includes(q)) ||
        u.city.toLowerCase().includes(q) ||
        u.state.toLowerCase().includes(q) ||
        u.type.toLowerCase().includes(q)
      );
    }
    if (state && state !== 'All States & UTs') {
      results = results.filter(u => u.state === state);
    }
    if (type && type !== 'All Classifications') {
      results = results.filter(u => u.type.toLowerCase().includes(type.toLowerCase()));
    }
    if (category && category !== 'all') {
      const c = category.toLowerCase().trim();
      results = results.filter(u => 
        (u.category && u.category.toLowerCase().includes(c)) ||
        u.name.toLowerCase().includes(c)
      );
    }
    return results;
  },

  getById(id) {
    return INDIAN_UNIVERSITIES.find(u => u.id === id);
  },

  getByName(name) {
    if (!name) return null;
    const n = name.toLowerCase().trim();
    return INDIAN_UNIVERSITIES.find(u => u.name.toLowerCase() === n || (u.shortName && u.shortName.toLowerCase() === n));
  },

  getStats() {
    const total = INDIAN_UNIVERSITIES.length;
    const statesCount = new Set(INDIAN_UNIVERSITIES.map(u => u.state)).size;
    const iniCount = INDIAN_UNIVERSITIES.filter(u => u.type.includes('National Importance')).length;
    const centralCount = INDIAN_UNIVERSITIES.filter(u => u.type === 'Central University' || u.type.includes('Central')).length;
    const stateCount = INDIAN_UNIVERSITIES.filter(u => u.type.includes('State Public')).length;
    const deemedCount = INDIAN_UNIVERSITIES.filter(u => u.type.includes('Deemed')).length;
    const privateCount = INDIAN_UNIVERSITIES.filter(u => u.type.includes('Private')).length;
    return {
      total,
      statesCount,
      iniCount,
      centralCount,
      stateCount,
      deemedCount,
      privateCount
    };
  },

  generateCSV() {
    const headers = ['ID', 'University Name', 'Short Name', 'City', 'State', 'Classification Type', 'Discipline / Category', 'Established Year', 'Accreditation', 'Official Website'];
    const rows = INDIAN_UNIVERSITIES.map(u => [
      `"${u.id}"`,
      `"${(u.name || '').replace(/"/g, '""')}"`,
      `"${(u.shortName || '').replace(/"/g, '""')}"`,
      `"${(u.city || '').replace(/"/g, '""')}"`,
      `"${(u.state || '').replace(/"/g, '""')}"`,
      `"${(u.type || '').replace(/"/g, '""')}"`,
      `"${(u.category || '').replace(/"/g, '""')}"`,
      u.established || '',
      `"${(u.accreditation || '').replace(/"/g, '""')}"`,
      `"${(u.website || '').replace(/"/g, '""')}"`
    ]);
    return [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  }
};

if (typeof window !== 'undefined') {
  window.INDIAN_UNIVERSITIES = INDIAN_UNIVERSITIES;
  window.INDIAN_STATES_UT = INDIAN_STATES_UT;
  window.INDIAN_UNIVERSITY_TYPES = INDIAN_UNIVERSITY_TYPES;
  window.IndianUniversitiesHub = IndianUniversitiesHub;
}

// ============================================================================
// EDUMETRICS PRO APPLICATION CORE & CONTROLLER
// ============================================================================

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
  name: 'Indian Institute of Technology Bombay',
  subtitle: 'Institute of National Importance • NIRF #3 (Overall) • Powai, Mumbai, Maharashtra',
  academicYear: '2025–2026',
  activeTerm: 'term2',
  termName: 'Term 2 (Spring 2026)',
  deanName: 'Prof. K. V. Krishna, Ph.D.',
  deanTitle: 'Dean of Academic Programmes',
  principalName: 'Prof. Shireesh Kedare, Ph.D.',
  principalTitle: 'Director'
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
    targetUniversity: 'Indian Institute of Technology Bombay',
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
    targetUniversity: 'Indian Institute of Science Bangalore',
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
    targetUniversity: 'All India Institute of Medical Sciences New Delhi',
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
    targetUniversity: 'University of Delhi',
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
    targetUniversity: 'Indian Institute of Technology Delhi',
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
    targetUniversity: 'National Law School of India University Bengaluru',
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
    targetUniversity: 'Birla Institute of Technology and Science Pilani',
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
    targetUniversity: 'Indian Institute of Management Ahmedabad',
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

// Certified Institutional Faculty Directory
const DEFAULT_FACULTY = [
  { id: 'FAC-101', name: 'Dr. Marcus Sterling, Ph.D.', dept: 'Science', subjects: 'Honors Physics II, Quantum Mechanics', cohorts: 'Grade 10-A, Grade 11-A', email: 'm.sterling@stjude.edu', status: 'Active' },
  { id: 'FAC-102', name: 'Dr. Evelyn Reed, Ph.D.', dept: 'Mathematics', subjects: 'AP Calculus BC, Linear Algebra', cohorts: 'Grade 10-A, Grade 10-B', email: 'e.reed@stjude.edu', status: 'Active' },
  { id: 'FAC-103', name: 'Prof. David Lin, M.S.', dept: 'STEM & CS', subjects: 'Advanced Computer Science, Data Structures', cohorts: 'Grade 10-A, Grade 11-A', email: 'd.lin@stjude.edu', status: 'Active' },
  { id: 'FAC-104', name: 'Ms. Clara Oswald, M.A.', dept: 'Humanities', subjects: 'World Literature & Rhetoric', cohorts: 'Grade 10-A, Grade 10-B', email: 'c.oswald@stjude.edu', status: 'Active' },
  { id: 'FAC-105', name: 'Mr. Julian Vance, M.Ed.', dept: 'Humanities', subjects: 'AP World History: Modern, Economics', cohorts: 'Grade 10-B, Grade 11-A', email: 'j.vance@stjude.edu', status: 'Active' },
  { id: 'FAC-106', name: 'Elena Rostova, MFA', dept: 'Fine Arts', subjects: 'Digital Media & Visual Design', cohorts: 'Grade 10-A, Grade 10-B, Grade 11-A', email: 'e.rostova@stjude.edu', status: 'Active' },
  { id: 'FAC-107', name: 'Dr. Rajeshwar Sharma, Ph.D.', dept: 'Science', subjects: 'AP Chemistry, Molecular Biology', cohorts: 'Grade 10-B, Grade 11-A', email: 'r.sharma@stjude.edu', status: 'Active' },
  { id: 'FAC-108', name: 'Dr. Priya Nair, Ed.D.', dept: 'Counseling', subjects: 'Academic Advising & University Admissions', cohorts: 'All Cohorts', email: 'p.nair@stjude.edu', status: 'Active' }
];

// Master System Audit Trail
const DEFAULT_AUDIT_LOGS = [
  { timestamp: '2026-03-24 10:15:32', user: 'Admin (System)', action: 'System Initialization', details: 'Initialized institutional database with 503 Indian Universities and 3 Class Cohorts.' },
  { timestamp: '2026-03-24 11:42:19', user: 'Teacher (Dr. Evelyn Reed)', action: 'Gradebook Update', details: 'Published Midterm marks for Grade 10-A Mathematics.' },
  { timestamp: '2026-03-24 14:05:08', user: 'Parent (Arthur Chen)', action: 'Term Sign-Off', details: "Digitally signed Sophia Chen's official Term 2 transcript." },
  { timestamp: '2026-03-25 09:20:44', user: 'Admin (Dean Sterling)', action: 'Faculty Assignment', details: 'Assigned Prof. David Lin as lead instructor for Advanced Computer Science.' },
  { timestamp: '2026-03-25 15:30:11', user: 'Teacher (Prof. David Lin)', action: 'Attendance Audit', details: 'Recorded daily attendance ledger for Grade 10-A STEM lab session.' }
];

// Student Absence & Leave Requests Log
const DEFAULT_LEAVE_REQUESTS = [
  { id: 'LR-201', studentId: 'STU-10492', studentName: 'Sophia Chen', date: '2026-03-20', category: 'Official Academic Competition', reason: 'Representing Academy at National Science Olympiad finals.', status: 'Approved' },
  { id: 'LR-202', studentId: 'STU-10492', studentName: 'Sophia Chen', date: '2026-02-14', category: 'Medical Illness / Doctor Visit', reason: 'Dental appointment and orthodontic follow-up.', status: 'Approved' },
  { id: 'LR-203', studentId: 'STU-10493', studentName: 'Marcus Aurelius Vance', date: '2026-03-12', category: 'Approved University Visit', reason: 'Attending IIT Bombay campus open house and lab tour.', status: 'Approved' },
  { id: 'LR-204', studentId: 'STU-10494', studentName: 'Aaliyah Patel', date: '2026-04-02', category: 'Family Emergency / Urgent Event', reason: 'Attending family milestone gathering.', status: 'Pending Review' }
];

// Institutional Circulars & Notices
const DEFAULT_CIRCULARS = [
  { id: 'CIR-101', title: 'Schedule of Term 2 Comprehensive Examinations', category: 'Examination', date: 'March 25, 2026', excerpt: 'Final examination timetable, laboratory practical evaluations, and grading policies for Spring 2026.', priority: 'High' },
  { id: 'CIR-102', title: 'National Higher Education & JEE/NEET Counseling Workshop', category: 'Admissions', date: 'March 22, 2026', excerpt: 'Informational session for Grade 10 & 11 parents regarding Indian University admissions and NIRF ranking insights.', priority: 'Normal' },
  { id: 'CIR-103', title: 'Annual STEM & Innovation Science Expo 2026', category: 'Academic Event', date: 'March 18, 2026', excerpt: 'Student project submissions, robotics displays, and jury reviews scheduled at Main Auditorium.', priority: 'Normal' },
  { id: 'CIR-104', title: 'Spring Holiday Recess & Campus Library Timings', category: 'Administrative', date: 'March 15, 2026', excerpt: 'Campus operations, administrative office hours, and digital library portal access during recess.', priority: 'Low' }
];

// Parent-Faculty Consultations & Conferences
const DEFAULT_CONFERENCES = [
  { id: 'CONF-301', studentName: 'Sophia Chen', teacher: 'Dr. Marcus Sterling (Academic Dean)', format: 'Virtual Video Call (Google Meet)', date: '2026-03-30', time: '02:30 PM - 03:00 PM', topic: 'Review AP Physics laboratory milestones and university preparation.', status: 'Confirmed' },
  { id: 'CONF-302', studentName: 'Sophia Chen', teacher: 'Dr. Evelyn Reed (Mathematics)', format: 'In-Person Campus Meeting', date: '2026-04-05', time: '11:30 AM - 12:00 PM', topic: 'Discuss advanced calculus competition preparation.', status: 'Scheduled' }
];

// Universal Authentication User Accounts (Admin, Teacher, Parent, Student)
const DEFAULT_USERS = {
  admin: {
    id: 'USR-ADMIN-01',
    role: 'admin',
    name: 'Prof. Shireesh Kedare',
    shortName: 'Prof. S. Kedare',
    title: 'Director, IIT Bombay',
    email: 'admin@edumetrics.edu',
    allowedIdentifiers: ['admin@edumetrics.edu', 'admin', 'director@iitb.ac.in', 'dean@iitb.ac.in', 'director', 'administrator'],
    allowedPasswords: ['Admin@2026', 'admin123', 'admin', 'Admin123'],
    defaultTab: 'tabAdminBtn',
    defaultView: 'adminView'
  },
  teacher: {
    id: 'USR-FAC-01',
    role: 'teacher',
    name: 'Dr. Marcus Sterling',
    shortName: 'Dr. M. Sterling',
    title: 'Senior Faculty & Dept Head',
    email: 'teacher@edumetrics.edu',
    allowedIdentifiers: ['teacher@edumetrics.edu', 'teacher', 'dr.sterling@edumetrics.edu', 'faculty@edumetrics.edu', 'faculty', 'm.sterling'],
    allowedPasswords: ['Teacher@2026', 'teacher123', 'teacher', 'Teacher123'],
    defaultTab: 'tabTeacherBtn',
    defaultView: 'teacherView'
  },
  parent: {
    id: 'USR-PRT-01',
    role: 'parent',
    name: 'Arthur Chen',
    shortName: 'Arthur Chen',
    title: 'Guardian (Sophia Chen, Gr. 10-A)',
    email: 'parent@edumetrics.edu',
    allowedIdentifiers: ['parent@edumetrics.edu', 'parent', 'chen.family@edumetrics.edu', 'arthur.chen@edumetrics.edu', 'guardian', 'chen'],
    allowedPasswords: ['Parent@2026', 'parent123', 'parent', 'Parent123'],
    defaultTab: 'tabParentBtn',
    defaultView: 'parentView'
  },
  student: {
    id: 'STU-10492',
    role: 'student',
    name: 'Sophia Chen',
    shortName: 'Sophia Chen',
    title: 'Scholar • Grade 10-A (Rank #1)',
    email: 'sophia.chen@student.edumetrics.edu',
    allowedIdentifiers: ['STU-10492', 'stu-10492', 'sophia.chen', 'student@edumetrics.edu', 'student'],
    allowedPasswords: ['Student@2026', 'student123', 'student', 'Student123'],
    defaultTab: 'tabReportBtn',
    defaultView: 'reportView'
  }
};

class EduMetricsApp {
  constructor() {
    window.app = this;
    window.eduMetricsApp = this;

    this.students = this.loadStudents();
    this.scaleConfig = this.loadScaleConfig();
    this.institution = this.loadInstitution();
    this.faculty = this.loadFaculty();
    this.auditLogs = this.loadAuditLogs();
    this.leaveRequests = this.loadLeaveRequests();
    this.circulars = this.loadCirculars();
    this.conferences = this.loadConferences();
    this.attendanceRecords = {};
    
    // Authentication & Session
    this.authUsers = DEFAULT_USERS;
    this.currentAuthUser = this.loadAuthSession();
    this.currentRole = this.currentAuthUser ? this.currentAuthUser.role : 'admin';

    this.selectedStudentId = this.students[0]?.id || 'STU-10492';
    this.currentGradingFormat = localStorage.getItem('edumetrics_format') || 'letter';
    this.activeTab = this.currentAuthUser?.defaultView || 'adminView';
    this.activeReportTerm = 'term2'; // term2 | midterm | term1 | cumulative
    this.activeEditorTerm = 'term2';
    this.sortMode = 'name-asc';
    this.activeAuthModalRole = 'admin';

    // Indian Universities Directory State
    this.univSearchQuery = '';
    this.univActiveState = 'All States & UTs';
    this.univActiveType = 'All Classifications';
    this.univActiveCategory = 'all';

    this.chartTooltipData = null;
    this.pendingDeleteAction = null;

    this.initElements();
    this.initTheme();
    this.initIndianUniversities();
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
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Fill targetUniversity for existing stored students if missing
          parsed.forEach((s, idx) => {
            if (!s.targetUniversity && INITIAL_STUDENTS[idx]?.targetUniversity) {
              s.targetUniversity = INITIAL_STUDENTS[idx].targetUniversity;
            }
          });
          return parsed;
        }
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

  loadFaculty() {
    try {
      const stored = localStorage.getItem('edumetrics_faculty');
      return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_FACULTY));
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_FACULTY));
    }
  }

  saveFaculty() {
    try {
      localStorage.setItem('edumetrics_faculty', JSON.stringify(this.faculty));
    } catch (e) {
      console.error('Failed to save faculty to localStorage', e);
    }
  }

  loadAuditLogs() {
    try {
      const stored = localStorage.getItem('edumetrics_audit_logs');
      return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_AUDIT_LOGS));
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_AUDIT_LOGS));
    }
  }

  saveAuditLogs() {
    try {
      localStorage.setItem('edumetrics_audit_logs', JSON.stringify(this.auditLogs));
    } catch (e) {
      console.error('Failed to save audit logs to localStorage', e);
    }
  }

  logAudit(user, action, details) {
    const now = new Date();
    const timestamp = now.toISOString().replace('T', ' ').substring(0, 19);
    this.auditLogs.unshift({ timestamp, user, action, details });
    if (this.auditLogs.length > 80) this.auditLogs.pop();
    this.saveAuditLogs();
    this.renderAdminAuditTable();
  }

  loadLeaveRequests() {
    try {
      const stored = localStorage.getItem('edumetrics_leave_requests');
      return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_LEAVE_REQUESTS));
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_LEAVE_REQUESTS));
    }
  }

  saveLeaveRequests() {
    try {
      localStorage.setItem('edumetrics_leave_requests', JSON.stringify(this.leaveRequests));
    } catch (e) {
      console.error('Failed to save leave requests to localStorage', e);
    }
  }

  loadCirculars() {
    return JSON.parse(JSON.stringify(DEFAULT_CIRCULARS));
  }

  loadConferences() {
    try {
      const stored = localStorage.getItem('edumetrics_conferences');
      return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_CONFERENCES));
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_CONFERENCES));
    }
  }

  saveConferences() {
    try {
      localStorage.setItem('edumetrics_conferences', JSON.stringify(this.conferences));
    } catch (e) {
      console.error('Failed to save conferences to localStorage', e);
    }
  }

  loadAuthSession() {
    try {
      const stored = localStorage.getItem('edumetrics_auth_user');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.role && DEFAULT_USERS[parsed.role]) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load auth session from localStorage:', e);
    }
    // Default institutional session: Admin (Prof. Shireesh Kedare, Director)
    return JSON.parse(JSON.stringify(DEFAULT_USERS.admin));
  }

  saveAuthSession(user) {
    try {
      if (user) {
        localStorage.setItem('edumetrics_auth_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('edumetrics_auth_user');
      }
    } catch (e) {
      console.error('Failed to save auth session to localStorage:', e);
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

    // Indian Universities Directory & Quick Select Elements
    this.indianUniversitiesBtn = document.getElementById('indianUniversitiesBtn');
    this.indianUniversitiesModal = document.getElementById('indianUniversitiesModal');
    this.closeUnivModalBtn = document.getElementById('closeUnivModalBtn');
    this.closeUnivModalFooterBtn = document.getElementById('closeUnivModalFooterBtn');
    this.univSearchInput = document.getElementById('univSearchInput');
    this.clearUnivSearchBtn = document.getElementById('clearUnivSearchBtn');
    this.univStateFilter = document.getElementById('univStateFilter');
    this.univTypeFilter = document.getElementById('univTypeFilter');
    this.resetUnivFiltersBtn = document.getElementById('resetUnivFiltersBtn');
    this.univCardsGrid = document.getElementById('univCardsGrid');
    this.univEmptyState = document.getElementById('univEmptyState');
    this.univResultsCountText = document.getElementById('univResultsCountText');
    this.univExportCsvTopBtn = document.getElementById('univExportCsvTopBtn');
    this.univExportCsvFooterBtn = document.getElementById('univExportCsvFooterBtn');
    this.downloadIndianUnivCsvBtn = document.getElementById('downloadIndianUnivCsvBtn');
    this.instQuickSelectIndianUniv = document.getElementById('instQuickSelectIndianUniv');
    this.allIndianUniversitiesDatalist = document.getElementById('allIndianUniversitiesDatalist');
    this.reportStudentTargetUniv = document.getElementById('reportStudentTargetUniv');
    this.newStudentTargetUniv = document.getElementById('newStudentTargetUniv');
    this.editStudentTargetUniv = document.getElementById('editStudentTargetUniv');

    // Admin Module Elements
    this.adminTotalStudents = document.getElementById('adminTotalStudents');
    this.adminTotalFaculty = document.getElementById('adminTotalFaculty');
    this.adminCampusGpa = document.getElementById('adminCampusGpa');
    this.adminCampusAttendance = document.getElementById('adminCampusAttendance');
    this.adminUnivMapped = document.getElementById('adminUnivMapped');
    this.adminFacultyTableBody = document.getElementById('adminFacultyTableBody');
    this.adminFacultySearchInput = document.getElementById('adminFacultySearchInput');
    this.adminFacultyDeptFilter = document.getElementById('adminFacultyDeptFilter');
    this.adminCohortGrid = document.getElementById('adminCohortGrid');
    this.adminUnivPipelineTableBody = document.getElementById('adminUnivPipelineTableBody');
    this.adminAuditTableBody = document.getElementById('adminAuditTableBody');
    this.adminNewStudentBtn = document.getElementById('adminNewStudentBtn');
    this.adminNewFacultyBtn = document.getElementById('adminNewFacultyBtn');
    this.adminExportBackupBtn = document.getElementById('adminExportBackupBtn');
    this.adminSchoolSettingsBtn = document.getElementById('adminSchoolSettingsBtn');
    this.adminOpenUnivDirectoryBtn = document.getElementById('adminOpenUnivDirectoryBtn');
    this.adminExportAuditCsvBtn = document.getElementById('adminExportAuditCsvBtn');
    this.adminClearAuditBtn = document.getElementById('adminClearAuditBtn');

    // Modals: New Faculty & Leave Request
    this.newFacultyModal = document.getElementById('newFacultyModal');
    this.closeNewFacultyModalBtn = document.getElementById('closeNewFacultyModalBtn');
    this.cancelNewFacultyBtn = document.getElementById('cancelNewFacultyBtn');
    this.newFacultyForm = document.getElementById('newFacultyForm');

    this.leaveRequestModal = document.getElementById('leaveRequestModal');
    this.closeLeaveRequestModalBtn = document.getElementById('closeLeaveRequestModalBtn');
    this.cancelLeaveRequestBtn = document.getElementById('cancelLeaveRequestBtn');
    this.leaveRequestForm = document.getElementById('leaveRequestForm');

    // Teacher Module Elements
    this.teacherAddCourseBtn = document.getElementById('teacherAddCourseBtn');
    this.teacherSaveAllGradesBtn = document.getElementById('teacherSaveAllGradesBtn');
    this.teacherProfileSelect = document.getElementById('teacherProfileSelect');
    this.teacherCohortSelect = document.getElementById('teacherCohortSelect');
    this.teacherTermSelector = document.getElementById('teacherTermSelector');
    this.teacherActiveStudentName = document.getElementById('teacherActiveStudentName');
    this.teacherActiveStudentID = document.getElementById('teacherActiveStudentID');
    this.teacherGradesTableBody = document.getElementById('teacherGradesTableBody');
    this.teacherAutofillClassAvgBtn = document.getElementById('teacherAutofillClassAvgBtn');
    this.teacherResetGradesBtn = document.getElementById('teacherResetGradesBtn');
    this.teacherAttendanceDateInput = document.getElementById('teacherAttendanceDateInput');
    this.teacherMarkAllPresentBtn = document.getElementById('teacherMarkAllPresentBtn');
    this.teacherAttendanceTableBody = document.getElementById('teacherAttendanceTableBody');
    this.teacherRemarksStudentSelect = document.getElementById('teacherRemarksStudentSelect');
    this.teacherHonorBadgeSelect = document.getElementById('teacherHonorBadgeSelect');
    this.teacherCounselorRemarksInput = document.getElementById('teacherCounselorRemarksInput');
    this.teacherSaveRemarksOnlyBtn = document.getElementById('teacherSaveRemarksOnlyBtn');
    this.teacherCohortStatsGrid = document.getElementById('teacherCohortStatsGrid');

    // Parent Module Elements
    this.parentOpenLeaveModalBtn = document.getElementById('parentOpenLeaveModalBtn');
    this.parentBookConferenceBtn = document.getElementById('parentBookConferenceBtn');
    this.parentWardSelect = document.getElementById('parentWardSelect');
    this.parentWardClassText = document.getElementById('parentWardClassText');
    this.parentWardAdvisorText = document.getElementById('parentWardAdvisorText');
    this.parentSignOffBadge = document.getElementById('parentSignOffBadge');
    this.parentPrintReportBtn = document.getElementById('parentPrintReportBtn');
    this.parentGradesTableBody = document.getElementById('parentGradesTableBody');
    this.parentAckDetailedStatus = document.getElementById('parentAckDetailedStatus');
    this.parentSignOffBtn = document.getElementById('parentSignOffBtn');
    this.parentAttPresent = document.getElementById('parentAttPresent');
    this.parentAttExcused = document.getElementById('parentAttExcused');
    this.parentAttUnexcused = document.getElementById('parentAttUnexcused');
    this.parentAttTardy = document.getElementById('parentAttTardy');
    this.parentAddLeaveBtn = document.getElementById('parentAddLeaveBtn');
    this.parentLeaveTableBody = document.getElementById('parentLeaveTableBody');
    this.parentNewConferenceBtn = document.getElementById('parentNewConferenceBtn');
    this.parentConferencesList = document.getElementById('parentConferencesList');
    this.parentCircularsGrid = document.getElementById('parentCircularsGrid');

    // Universal Authentication Elements
    this.authTriggerBtn = document.getElementById('authTriggerBtn');
    this.authSignOutBtn = document.getElementById('authSignOutBtn');
    this.authStatusDot = document.getElementById('authStatusDot');
    this.authRoleChip = document.getElementById('authRoleChip');
    this.authUserName = document.getElementById('authUserName');
    this.authModal = document.getElementById('authModal');
    this.closeAuthModalBtn = document.getElementById('closeAuthModalBtn');
    this.cancelAuthModalBtn = document.getElementById('cancelAuthModalBtn');
    this.authLoginForm = document.getElementById('authLoginForm');
    this.authIdentifierInput = document.getElementById('authIdentifierInput');
    this.authPasswordInput = document.getElementById('authPasswordInput');
    this.authTogglePasswordBtn = document.getElementById('authTogglePasswordBtn');
    this.authAlertBanner = document.getElementById('authAlertBanner');
    this.authAlertText = document.getElementById('authAlertText');
    this.authRoleTabs = document.querySelectorAll('.auth-role-tab');
    this.quickFillChips = document.querySelectorAll('.quick-fill-chip');

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
        const targetRole = btn.dataset.role;
        if (!this.currentAuthUser || this.currentAuthUser.role !== targetRole) {
          this.openAuthModal(targetRole, `Authentication required for ${targetRole.toUpperCase()} portal.`);
        } else {
          this.roleBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.currentRole = targetRole;
          this.handleRoleChange();
        }
      });
    });

    // Tab Switching
    this.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;

        // Gate access to protected institutional portals
        if (targetId === 'adminView') {
          if (!this.currentAuthUser || this.currentAuthUser.role !== 'admin') {
            this.openAuthModal('admin', 'Admin authorization required. Please sign in with Director or Admin credentials.');
            return;
          }
        } else if (targetId === 'teacherView') {
          if (!this.currentAuthUser || (this.currentAuthUser.role !== 'teacher' && this.currentAuthUser.role !== 'admin')) {
            this.openAuthModal('teacher', 'Teacher Gradebook access restricted. Please sign in with Faculty credentials.');
            return;
          }
        } else if (targetId === 'parentView') {
          if (!this.currentAuthUser || (this.currentAuthUser.role !== 'parent' && this.currentAuthUser.role !== 'admin')) {
            this.openAuthModal('parent', 'Parent Portal access restricted. Please sign in with Guardian credentials.');
            return;
          }
        }

        this.tabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        this.activeTab = targetId;
        this.viewPanels.forEach(p => p.classList.remove('active'));
        document.getElementById(targetId)?.classList.add('active');

        // Sync role switcher buttons to active module
        let role = 'student';
        if (targetId === 'adminView') role = 'admin';
        else if (targetId === 'teacherView') role = 'teacher';
        else if (targetId === 'parentView') role = 'parent';
        else if (targetId === 'reportView') role = 'student';

        this.roleBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.role === role);
        });
        this.currentRole = role;

        if (targetId === 'analyticsView') {
          setTimeout(() => this.renderCharts(), 50);
        } else if (targetId === 'adminView') {
          this.renderAdminModule();
        } else if (targetId === 'teacherView') {
          this.renderTeacherModule();
        } else if (targetId === 'parentView') {
          this.renderParentModule();
        } else if (targetId === 'reportView') {
          this.renderReportCard();
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

    // Indian Universities Directory Listeners
    this.indianUniversitiesBtn?.addEventListener('click', () => this.openIndianUniversitiesModal());
    this.closeUnivModalBtn?.addEventListener('click', () => this.indianUniversitiesModal.close());
    this.closeUnivModalFooterBtn?.addEventListener('click', () => this.indianUniversitiesModal.close());

    this.univSearchInput?.addEventListener('input', (e) => {
      this.univSearchQuery = e.target.value.trim();
      if (this.clearUnivSearchBtn) {
        this.clearUnivSearchBtn.style.display = this.univSearchQuery ? 'block' : 'none';
      }
      this.renderUniversitiesList();
    });

    this.clearUnivSearchBtn?.addEventListener('click', () => {
      this.univSearchQuery = '';
      if (this.univSearchInput) this.univSearchInput.value = '';
      this.clearUnivSearchBtn.style.display = 'none';
      this.renderUniversitiesList();
    });

    this.univStateFilter?.addEventListener('change', (e) => {
      this.univActiveState = e.target.value;
      this.renderUniversitiesList();
    });

    this.univTypeFilter?.addEventListener('change', (e) => {
      this.univActiveType = e.target.value;
      this.updateActiveStatPill();
      this.renderUniversitiesList();
    });

    this.resetUnivFiltersBtn?.addEventListener('click', () => this.resetAllUnivFilters());
    document.getElementById('clearUnivFiltersEmptyBtn')?.addEventListener('click', () => this.resetAllUnivFilters());

    // Stats Ribbon Pill Filtering
    document.querySelectorAll('.univ-stat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const filterType = pill.dataset.filterType;
        document.querySelectorAll('.univ-stat-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        if (filterType === 'all') {
          this.univActiveType = 'All Classifications';
        } else {
          this.univActiveType = filterType;
        }
        if (this.univTypeFilter) this.univTypeFilter.value = this.univActiveType;
        this.renderUniversitiesList();
      });
    });

    // Quick Category Chips Filtering
    document.querySelectorAll('.univ-category-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.univ-category-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.univActiveCategory = chip.dataset.cat;
        this.renderUniversitiesList();
      });
    });

    // CSV Downloads for Indian Universities
    this.univExportCsvTopBtn?.addEventListener('click', () => this.exportIndianUniversitiesCSV());
    this.univExportCsvFooterBtn?.addEventListener('click', () => this.exportIndianUniversitiesCSV());
    this.downloadIndianUnivCsvBtn?.addEventListener('click', () => this.exportIndianUniversitiesCSV());

    // Quick Select inside Institutional Settings
    this.instQuickSelectIndianUniv?.addEventListener('change', (e) => {
      const univId = e.target.value;
      if (!univId) return;
      const univ = window.IndianUniversitiesHub?.getById(univId);
      if (univ) {
        document.getElementById('instNameInput').value = univ.name;
        document.getElementById('instSubInput').value = univ.defaultSubtitle;
        if (univ.leadTitle) document.getElementById('instDeanTitleInput').value = univ.leadTitle;
        if (univ.officerTitle) document.getElementById('instPrincipalTitleInput').value = univ.officerTitle;
        this.showToast(`Applied details for ${univ.name}`);
      }
    });

    // Auto-fill when typing into institution name input if it matches any Indian University
    document.getElementById('instNameInput')?.addEventListener('change', (e) => {
      const val = e.target.value.trim();
      const match = window.IndianUniversitiesHub?.getByName(val);
      if (match) {
        document.getElementById('instSubInput').value = match.defaultSubtitle;
        if (match.leadTitle) document.getElementById('instDeanTitleInput').value = match.leadTitle;
        if (match.officerTitle) document.getElementById('instPrincipalTitleInput').value = match.officerTitle;
        this.showToast(`Auto-configured accreditation & titles for ${match.name}`);
      }
    });

    // Module Sub-Navigation buttons across Admin, Teacher, Parent
    document.querySelectorAll('.subnav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const nav = btn.closest('.module-subnav');
        if (!nav) return;
        nav.querySelectorAll('.subnav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const paneId = btn.dataset.pane;
        const panel = nav.closest('.view-panel');
        if (panel) {
          panel.querySelectorAll('.subnav-pane').forEach(p => p.classList.remove('active'));
          const targetPane = panel.querySelector(`#${paneId}`);
          if (targetPane) targetPane.classList.add('active');
        }
      });
    });

    // --- Admin Module Event Listeners ---
    this.adminNewStudentBtn?.addEventListener('click', () => {
      this.newStudentForm?.reset();
      this.newStudentModal?.showModal();
    });
    this.adminNewFacultyBtn?.addEventListener('click', () => {
      this.newFacultyForm?.reset();
      this.newFacultyModal?.showModal();
    });
    this.closeNewFacultyModalBtn?.addEventListener('click', () => this.newFacultyModal?.close());
    this.cancelNewFacultyBtn?.addEventListener('click', () => this.newFacultyModal?.close());
    this.newFacultyForm?.addEventListener('submit', (e) => this.handleNewFacultySubmit(e));

    this.adminExportBackupBtn?.addEventListener('click', () => this.exportJsonBackup());
    this.adminSchoolSettingsBtn?.addEventListener('click', () => {
      this.populateInstitutionModal();
      this.institutionSettingsModal?.showModal();
    });
    this.adminOpenUnivDirectoryBtn?.addEventListener('click', () => this.openIndianUniversitiesModal());
    this.adminFacultySearchInput?.addEventListener('input', () => this.renderAdminFacultyTable());
    this.adminFacultyDeptFilter?.addEventListener('change', () => this.renderAdminFacultyTable());
    this.adminExportAuditCsvBtn?.addEventListener('click', () => this.exportAuditCsv());
    this.adminClearAuditBtn?.addEventListener('click', () => {
      this.promptConfirmDelete('all system audit log entries', () => {
        this.auditLogs = [];
        this.saveAuditLogs();
        this.renderAdminAuditTable();
        this.showToast('Cleared institutional audit logs.');
      });
    });

    // --- Teacher Module Event Listeners ---
    this.teacherAddCourseBtn?.addEventListener('click', () => {
      this.addSubjectForm?.reset();
      this.addSubjectModal?.showModal();
    });
    this.teacherSaveAllGradesBtn?.addEventListener('click', () => {
      this.handleSaveTeacherInput();
      this.logAudit('Teacher', 'Gradebook Saved', `Published term evaluation marks for ${this.getSelectedStudent()?.name}`);
    });
    this.teacherAutofillClassAvgBtn?.addEventListener('click', () => {
      const student = this.getSelectedStudent();
      if (student && student.courses) {
        student.courses.forEach(c => {
          c.coursework = Math.min(100, Math.max(0, c.classAvg + 4));
          c.midterm = Math.min(100, Math.max(0, c.classAvg + 3));
          c.exam = Math.min(100, Math.max(0, c.classAvg + 5));
        });
        this.renderTeacherGradebook();
        this.showToast('Auto-populated marks with class benchmark baseline.');
      }
    });
    this.teacherResetGradesBtn?.addEventListener('click', () => {
      this.renderTeacherGradebook();
      this.showToast('Reverted unsaved gradebook matrix inputs.');
    });
    this.teacherProfileSelect?.addEventListener('change', (e) => {
      this.showToast(`Active instructor: ${e.target.value}`);
    });
    this.teacherCohortSelect?.addEventListener('change', (e) => {
      this.showToast(`Cohort switched to: ${e.target.value}`);
      this.renderTeacherModule();
    });
    this.teacherTermSelector?.addEventListener('change', (e) => {
      this.activeEditorTerm = e.target.value;
      this.showToast(`Assessment term: ${e.target.options[e.target.selectedIndex].text}`);
      this.renderTeacherGradebook();
    });
    this.teacherAttendanceDateInput?.addEventListener('change', () => {
      this.renderTeacherAttendanceLedger();
    });
    this.teacherMarkAllPresentBtn?.addEventListener('click', () => {
      this.markAllCohortPresent();
    });
    this.teacherRemarksStudentSelect?.addEventListener('change', (e) => {
      this.selectedStudentId = e.target.value;
      this.render();
    });
    this.teacherHonorBadgeSelect?.addEventListener('change', (e) => {
      const student = this.getSelectedStudent();
      if (student) {
        student.honor = e.target.value;
        this.saveStudents();
        this.render();
      }
    });
    this.teacherSaveRemarksOnlyBtn?.addEventListener('click', () => {
      const student = this.getSelectedStudent();
      if (student && this.teacherCounselorRemarksInput) {
        student.counselorRemarks = this.teacherCounselorRemarksInput.value.trim();
        this.saveStudents();
        this.logAudit('Teacher', 'Faculty Observation Saved', `Updated formal observation for ${student.name}`);
        this.showToast(`Saved observations for ${student.name}`);
        this.renderReportCard();
      }
    });
    document.querySelectorAll('.remark-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.text;
        if (this.teacherCounselorRemarksInput && text) {
          const current = this.teacherCounselorRemarksInput.value.trim();
          this.teacherCounselorRemarksInput.value = current ? `${current} ${text}` : text;
          this.showToast('Appended remark preset to observation note.');
        }
      });
    });

    // --- Parent Module Event Listeners ---
    this.parentWardSelect?.addEventListener('change', (e) => {
      this.selectedStudentId = e.target.value;
      this.render();
      this.showToast(`Viewing academic profile for ${this.getSelectedStudent()?.name}`);
    });
    this.parentPrintReportBtn?.addEventListener('click', () => {
      document.body.classList.remove('is-batch-printing');
      window.print();
    });
    this.parentSignOffBtn?.addEventListener('click', () => {
      this.handleParentDigitalSignOff();
    });
    this.parentOpenLeaveModalBtn?.addEventListener('click', () => {
      this.openLeaveRequestModal();
    });
    this.parentAddLeaveBtn?.addEventListener('click', () => {
      this.openLeaveRequestModal();
    });
    this.closeLeaveRequestModalBtn?.addEventListener('click', () => this.leaveRequestModal?.close());
    this.cancelLeaveRequestBtn?.addEventListener('click', () => this.leaveRequestModal?.close());
    this.leaveRequestForm?.addEventListener('submit', (e) => this.handleLeaveRequestSubmit(e));

    this.parentBookConferenceBtn?.addEventListener('click', () => {
      const today = new Date().toISOString().split('T')[0];
      const dateInp = document.getElementById('confPreferredDate');
      if (dateInp) dateInp.min = today;
      this.conferenceModal?.showModal();
    });
    this.parentNewConferenceBtn?.addEventListener('click', () => {
      const today = new Date().toISOString().split('T')[0];
      const dateInp = document.getElementById('confPreferredDate');
      if (dateInp) dateInp.min = today;
      this.conferenceModal?.showModal();
    });

    // Universal Authentication & Portal Access Listeners
    this.authTriggerBtn?.addEventListener('click', () => {
      this.openAuthModal(this.currentRole || 'admin');
    });

    this.authSignOutBtn?.addEventListener('click', () => {
      this.handleSignOut();
    });

    this.closeAuthModalBtn?.addEventListener('click', () => {
      this.authModal?.close();
    });

    this.cancelAuthModalBtn?.addEventListener('click', () => {
      this.authModal?.close();
    });

    this.authRoleTabs?.forEach(tab => {
      tab.addEventListener('click', () => {
        this.switchAuthModalRole(tab.dataset.authRole);
      });
    });

    this.quickFillChips?.forEach(chip => {
      chip.addEventListener('click', () => {
        this.handleQuickFill(chip.dataset.quickRole);
      });
    });

    this.authTogglePasswordBtn?.addEventListener('click', () => {
      this.toggleAuthPasswordVisibility();
    });

    this.authLoginForm?.addEventListener('submit', (e) => {
      this.handleAuthSubmit(e);
    });
  }

  // --- Indian Universities Registry Implementation ---
  initIndianUniversities() {
    if (!window.INDIAN_UNIVERSITIES || !Array.isArray(window.INDIAN_UNIVERSITIES)) return;

    // 1. Populate Datalist for autocomplete in Institution and Student forms
    if (this.allIndianUniversitiesDatalist) {
      this.allIndianUniversitiesDatalist.innerHTML = window.INDIAN_UNIVERSITIES.map(u => 
        `<option value="${u.name}">${u.shortName ? u.shortName + ' — ' : ''}${u.city}, ${u.state} (${u.type})</option>`
      ).join('');
    }

    // 2. Populate State / UT filter dropdown
    if (this.univStateFilter && window.INDIAN_STATES_UT) {
      this.univStateFilter.innerHTML = window.INDIAN_STATES_UT.map(st => 
        `<option value="${st}">${st}</option>`
      ).join('');
    }

    // 3. Populate Type filter dropdown
    if (this.univTypeFilter && window.INDIAN_UNIVERSITY_TYPES) {
      this.univTypeFilter.innerHTML = window.INDIAN_UNIVERSITY_TYPES.map(tp => 
        `<option value="${tp}">${tp}</option>`
      ).join('');
    }

    // 4. Populate Quick-Select dropdown in Institutional Settings Modal
    if (this.instQuickSelectIndianUniv) {
      const sorted = [...window.INDIAN_UNIVERSITIES].sort((a, b) => a.name.localeCompare(b.name));
      const optionsHtml = ['<option value="">-- Choose Indian University to Auto-Fill Institution & Accreditation --</option>'];
      sorted.forEach(u => {
        optionsHtml.push(`<option value="${u.id}">${u.name} (${u.city}, ${u.state})</option>`);
      });
      this.instQuickSelectIndianUniv.innerHTML = optionsHtml.join('');
    }

    // 5. Update Statistics Ribbon
    if (window.IndianUniversitiesHub) {
      const stats = window.IndianUniversitiesHub.getStats();
      const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
      setTxt('statTotalUnivs', stats.total);
      setTxt('statIniUnivs', `${stats.iniCount}+`);
      setTxt('statCentralUnivs', stats.centralCount);
      setTxt('statStateUnivs', `${stats.stateCount}+`);
      setTxt('statDeemedUnivs', `${stats.deemedCount}+`);
      setTxt('statPrivateUnivs', `${stats.privateCount}+`);
    }
  }

  openIndianUniversitiesModal() {
    this.renderUniversitiesList();
    this.indianUniversitiesModal.showModal();
  }

  resetAllUnivFilters() {
    this.univSearchQuery = '';
    this.univActiveState = 'All States & UTs';
    this.univActiveType = 'All Classifications';
    this.univActiveCategory = 'all';

    if (this.univSearchInput) this.univSearchInput.value = '';
    if (this.clearUnivSearchBtn) this.clearUnivSearchBtn.style.display = 'none';
    if (this.univStateFilter) this.univStateFilter.value = 'All States & UTs';
    if (this.univTypeFilter) this.univTypeFilter.value = 'All Classifications';

    document.querySelectorAll('.univ-stat-pill').forEach((p, i) => {
      p.classList.toggle('active', i === 0);
    });
    document.querySelectorAll('.univ-category-chip').forEach((c, i) => {
      c.classList.toggle('active', i === 0);
    });

    this.renderUniversitiesList();
  }

  updateActiveStatPill() {
    document.querySelectorAll('.univ-stat-pill').forEach(pill => {
      const filterType = pill.dataset.filterType;
      if (this.univActiveType === 'All Classifications' && filterType === 'all') {
        pill.classList.add('active');
      } else if (filterType === this.univActiveType) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  renderUniversitiesList() {
    if (!this.univCardsGrid || !window.INDIAN_UNIVERSITIES) return;

    let filtered = window.INDIAN_UNIVERSITIES;

    // 1. Search Query Filter
    if (this.univSearchQuery) {
      const q = this.univSearchQuery.toLowerCase();
      filtered = filtered.filter(u => 
        u.name.toLowerCase().includes(q) ||
        (u.shortName && u.shortName.toLowerCase().includes(q)) ||
        u.city.toLowerCase().includes(q) ||
        u.state.toLowerCase().includes(q) ||
        u.type.toLowerCase().includes(q)
      );
    }

    // 2. State Filter
    if (this.univActiveState && this.univActiveState !== 'All States & UTs') {
      filtered = filtered.filter(u => u.state === this.univActiveState);
    }

    // 3. Type Filter
    if (this.univActiveType && this.univActiveType !== 'All Classifications') {
      filtered = filtered.filter(u => u.type.toLowerCase().includes(this.univActiveType.toLowerCase()));
    }

    // 4. Category Filter
    if (this.univActiveCategory && this.univActiveCategory !== 'all') {
      const catQ = this.univActiveCategory.toLowerCase();
      filtered = filtered.filter(u => 
        (u.category && u.category.toLowerCase().includes(catQ)) ||
        u.name.toLowerCase().includes(catQ)
      );
    }

    // Update count text
    if (this.univResultsCountText) {
      const totalAll = window.INDIAN_UNIVERSITIES.length;
      if (filtered.length === totalAll) {
        this.univResultsCountText.textContent = `Showing all ${totalAll} Universities & Institutes across 36 States & Union Territories`;
      } else {
        this.univResultsCountText.textContent = `Showing ${filtered.length} of ${totalAll} Universities based on active filters`;
      }
    }

    // Show/hide empty state
    if (filtered.length === 0) {
      this.univCardsGrid.innerHTML = '';
      if (this.univEmptyState) this.univEmptyState.style.display = 'flex';
      return;
    }

    if (this.univEmptyState) this.univEmptyState.style.display = 'none';

    // Render cards
    const cardsHtml = filtered.map(u => {
      let badgeClass = 'badge-state';
      if (u.type.includes('National Importance')) badgeClass = 'badge-ini';
      else if (u.type.includes('Central')) badgeClass = 'badge-central';
      else if (u.type.includes('Deemed')) badgeClass = 'badge-deemed';
      else if (u.type.includes('Private')) badgeClass = 'badge-private';

      const shortBadge = u.shortName ? `<span class="univ-card-acronym">${u.shortName}</span>` : '';
      const websiteLink = u.website ? `<a href="${u.website}" target="_blank" rel="noopener noreferrer" class="btn-visit-univ" title="Open official portal ${u.website}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        Portal
      </a>` : '';

      return `
        <div class="univ-card" data-univ-id="${u.id}">
          <div class="univ-card-header">
            ${shortBadge}
            <span class="univ-card-type-badge ${badgeClass}">${u.type}</span>
          </div>

          <div class="univ-card-body">
            <h4 class="univ-card-name">${u.name}</h4>
            <div class="univ-card-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>${u.city}, <strong>${u.state}</strong></span>
            </div>
            <div class="univ-card-meta-row">
              <span>${u.category || 'Multidisciplinary'}</span>
              <span>•</span>
              <span>Est. ${u.established || 'Recognized'}</span>
            </div>
            <div class="univ-card-accreditation">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${u.accreditation || 'UGC / MoE Recognized'}</span>
            </div>
          </div>

          <div class="univ-card-actions">
            <button type="button" class="btn-apply-inst" onclick="window.app.setUniversityAsActiveInstitution('${u.id}')" title="Set ${u.name} as Institution for Report Cards">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              Set as Active Institution
            </button>
            <button type="button" class="btn btn-outline btn-assign-student" onclick="window.app.setUniversityAsStudentTarget('${u.id}')" title="Assign target to active student">
              Assign to Student
            </button>
            ${websiteLink}
          </div>
        </div>
      `;
    }).join('');

    this.univCardsGrid.innerHTML = cardsHtml;
  }

  setUniversityAsActiveInstitution(univId) {
    const univ = window.IndianUniversitiesHub?.getById(univId);
    if (!univ) return;

    this.institution.name = univ.name;
    this.institution.subtitle = univ.defaultSubtitle;
    if (univ.leadTitle) this.institution.deanTitle = univ.leadTitle;
    if (univ.officerTitle) this.institution.principalTitle = univ.officerTitle;

    this.saveInstitution();
    this.updateInstitutionHeader();
    this.renderReportCard();

    // If institution settings modal is open, re-populate it
    if (this.institutionSettingsModal?.open) {
      this.populateInstitutionModal();
    }

    this.showToast(`Applied "${univ.name}" as official Institution! Transcripts, headers, and watermarks updated.`);
  }

  setUniversityAsStudentTarget(univId) {
    const univ = window.IndianUniversitiesHub?.getById(univId);
    if (!univ) return;

    const student = this.getSelectedStudent();
    if (!student) return;

    student.targetUniversity = univ.name;
    this.saveStudents();
    this.renderReportCard();

    this.showToast(`Assigned ${univ.name} as target university for ${student.name}`);
  }

  exportIndianUniversitiesCSV() {
    if (!window.IndianUniversitiesHub) return;
    const csvContent = window.IndianUniversitiesHub.generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `All_Indian_Universities_Registry_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    this.showToast('Exported complete registry of 451 Indian Universities to CSV!');
  }

  // --- Confirmation Dialog Helper ---
  promptConfirmDelete(itemDescription, onConfirm) {
    this.confirmDeleteMessage.textContent = `Are you sure you want to delete ${itemDescription}? This action will permanently remove associated grade records.`;
    this.pendingDeleteAction = onConfirm;
    this.confirmDeleteModal.showModal();
  }

  // ==========================================================================
  // UNIVERSAL AUTHENTICATION & ROLE MANAGEMENT SYSTEM
  // ==========================================================================
  renderAuthWidget() {
    if (!this.headerAuthWidget) return;

    if (this.currentAuthUser) {
      const u = this.currentAuthUser;
      if (this.authStatusDot) {
        this.authStatusDot.className = 'auth-status-dot online';
      }
      if (this.authRoleChip) {
        this.authRoleChip.textContent = (u.role || 'user').toUpperCase();
        this.authRoleChip.className = `auth-user-role-chip role-${u.role || 'student'}`;
      }
      if (this.authUserName) {
        this.authUserName.textContent = u.shortName || u.name || 'User';
      }
      if (this.authTriggerBtn) {
        this.authTriggerBtn.title = `Signed in as ${u.name} (${u.title || u.role}). Click to switch session or sign in.`;
      }
      if (this.authSignOutBtn) {
        this.authSignOutBtn.style.display = 'inline-flex';
        this.authSignOutBtn.title = `Sign out (${u.shortName || u.name})`;
      }
    } else {
      if (this.authStatusDot) {
        this.authStatusDot.className = 'auth-status-dot logged-out';
      }
      if (this.authRoleChip) {
        this.authRoleChip.textContent = 'GUEST';
        this.authRoleChip.className = 'auth-user-role-chip';
      }
      if (this.authUserName) {
        this.authUserName.textContent = 'Sign In';
      }
      if (this.authTriggerBtn) {
        this.authTriggerBtn.title = 'Click to Sign In with institutional credentials';
      }
      if (this.authSignOutBtn) {
        this.authSignOutBtn.style.display = 'none';
      }
    }
  }

  openAuthModal(preselectedRole = 'admin', alertMessage = null) {
    if (!this.authModal) return;

    this.switchAuthModalRole(preselectedRole || this.currentRole || 'admin');

    if (this.authAlertBanner) {
      if (alertMessage) {
        this.showAuthAlert(alertMessage, 'warning');
      } else {
        this.authAlertBanner.classList.add('hidden');
        if (this.authAlertText) this.authAlertText.textContent = '';
      }
    }

    if (this.authPasswordInput) {
      this.authPasswordInput.value = '';
    }

    if (this.authIdentifierInput) {
      const targetUser = this.authUsers[this.activeAuthModalRole];
      if (targetUser && targetUser.email) {
        this.authIdentifierInput.value = targetUser.email;
      }
    }

    this.authModal.showModal();
    this.authPasswordInput?.focus();
  }

  switchAuthModalRole(role) {
    if (!role || !this.authUsers[role]) role = 'admin';
    this.activeAuthModalRole = role;

    // Update Tab UI
    this.authRoleTabs?.forEach(tab => {
      const isSelected = tab.dataset.authRole === role;
      tab.classList.toggle('active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    const user = this.authUsers[role];
    if (this.authIdentifierInput && user) {
      if (role === 'student') {
        this.authIdentifierInput.placeholder = 'Student ID (STU-10492) or email';
        if (this.authIdentifierLabel) {
          this.authIdentifierLabel.textContent = 'Student ID Number or School Email *';
        }
      } else if (role === 'admin') {
        this.authIdentifierInput.placeholder = 'admin@edumetrics.edu or director';
        if (this.authIdentifierLabel) {
          this.authIdentifierLabel.textContent = 'Official Director / Administrator Email *';
        }
      } else if (role === 'teacher') {
        this.authIdentifierInput.placeholder = 'teacher@edumetrics.edu or dr.sterling';
        if (this.authIdentifierLabel) {
          this.authIdentifierLabel.textContent = 'Faculty Academic Email Address *';
        }
      } else if (role === 'parent') {
        this.authIdentifierInput.placeholder = 'parent@edumetrics.edu or guardian';
        if (this.authIdentifierLabel) {
          this.authIdentifierLabel.textContent = 'Registered Guardian Email Address *';
        }
      }
    }

    // Clear alert banner when switching role
    if (this.authAlertBanner) {
      this.authAlertBanner.classList.add('hidden');
    }
  }

  handleQuickFill(role) {
    if (!role || !this.authUsers[role]) return;
    this.switchAuthModalRole(role);
    const user = this.authUsers[role];
    if (this.authIdentifierInput) {
      this.authIdentifierInput.value = user.allowedIdentifiers[0];
    }
    if (this.authPasswordInput) {
      this.authPasswordInput.value = user.allowedPasswords[0];
    }
    this.showAuthAlert(`Auto-filled credentials for ${user.name} (${user.role.toUpperCase()})`, 'success');
  }

  toggleAuthPasswordVisibility() {
    if (!this.authPasswordInput || !this.authTogglePasswordBtn) return;
    const isPassword = this.authPasswordInput.type === 'password';
    this.authPasswordInput.type = isPassword ? 'text' : 'password';
    this.authTogglePasswordBtn.textContent = isPassword ? 'Hide Password' : 'Show Password';
  }

  showAuthAlert(message, type = 'error') {
    if (!this.authAlertBanner || !this.authAlertText) return;
    this.authAlertBanner.className = 'auth-alert-banner';
    if (type === 'error') {
      this.authAlertBanner.classList.add('error');
    } else if (type === 'warning') {
      this.authAlertBanner.classList.add('warning');
    } else if (type === 'success') {
      this.authAlertBanner.classList.add('success');
    }
    this.authAlertText.textContent = message;
    this.authAlertBanner.classList.remove('hidden');
  }

  handleAuthSubmit(e) {
    if (e) e.preventDefault();
    const identifier = (this.authIdentifierInput?.value || '').trim().toLowerCase();
    const password = (this.authPasswordInput?.value || '').trim();

    if (!identifier || !password) {
      this.showAuthAlert('Please enter both your identifier and password to sign in.', 'warning');
      return;
    }

    let matchedRole = null;
    let matchedUser = null;

    // Check selected role first
    const activeUser = this.authUsers[this.activeAuthModalRole];
    if (activeUser && 
        activeUser.allowedIdentifiers.some(id => id.toLowerCase() === identifier) &&
        activeUser.allowedPasswords.includes(password)) {
      matchedRole = this.activeAuthModalRole;
      matchedUser = activeUser;
    } else {
      // Smart fallback: check if user entered credentials for ANY valid institutional role
      for (const [rKey, uObj] of Object.entries(this.authUsers)) {
        if (uObj.allowedIdentifiers.some(id => id.toLowerCase() === identifier) &&
            uObj.allowedPasswords.includes(password)) {
          matchedRole = rKey;
          matchedUser = uObj;
          break;
        }
      }
    }

    if (matchedUser && matchedRole) {
      this.currentAuthUser = matchedUser;
      this.currentRole = matchedRole;

      const remember = this.authRememberMeCheck ? this.authRememberMeCheck.checked : true;
      if (remember) {
        this.saveAuthSession(matchedUser);
      } else {
        this.saveAuthSession(null);
      }

      this.logAudit(
        matchedUser.name, 
        'AUTHENTICATION_LOGIN', 
        `Successful handshake. Logged in as ${matchedRole.toUpperCase()} (${matchedUser.title || matchedUser.name})`
      );

      this.renderAuthWidget();
      this.authModal?.close();
      this.navigateToRole(matchedRole);
      this.showToast(`Welcome back, ${matchedUser.name}! Signed into ${matchedRole.toUpperCase()} Portal.`);
    } else {
      this.showAuthAlert(
        `Invalid credentials for ${this.activeAuthModalRole.toUpperCase()} role. Use Quick-Fill demo chips above or verify your password.`, 
        'error'
      );
    }
  }

  handleSignOut() {
    const prevName = this.currentAuthUser?.name || 'Authorized User';
    this.logAudit(prevName, 'AUTHENTICATION_LOGOUT', 'Signed out from session');
    this.currentAuthUser = null;
    this.saveAuthSession(null);
    this.renderAuthWidget();
    this.showToast('You have signed out successfully.');
    this.openAuthModal('admin', 'Session signed out. Please sign in to access institutional portals.');
  }

  navigateToRole(role) {
    this.currentRole = role;
    if (role === 'admin') {
      const tab = document.getElementById('tabAdminBtn');
      if (tab) tab.click();
    } else if (role === 'teacher') {
      const tab = document.getElementById('tabTeacherBtn');
      if (tab) tab.click();
    } else if (role === 'parent') {
      const tab = document.getElementById('tabParentBtn');
      if (tab) tab.click();
    } else {
      const tab = document.getElementById('tabReportBtn');
      if (tab) tab.click();
    }
  }

  handleRoleChange() {
    this.navigateToRole(this.currentRole);
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
    this.renderAuthWidget();
    this.updateInstitutionHeader();
    this.renderStudentList();
    this.renderReportCard();
    this.renderTeacherInput();
    this.renderSidebarStats();
    this.renderAdminModule();
    this.renderTeacherModule();
    this.renderParentModule();
    if (this.activeTab === 'analyticsView') {
      this.renderCharts();
    }
  }

  // ==========================================================================
  // ADMIN MODULE: INSTITUTIONAL GOVERNANCE & OPERATIONS
  // ==========================================================================
  renderAdminModule() {
    this.renderAdminKPIs();
    this.renderAdminFacultyTable();
    this.renderAdminCohorts();
    this.renderAdminUnivPipeline();
    this.renderAdminAuditTable();
  }

  renderAdminKPIs() {
    if (this.adminTotalStudents) this.adminTotalStudents.textContent = this.students.length;
    if (this.adminTotalFaculty) this.adminTotalFaculty.textContent = this.faculty.length;
    
    // Mean GPA
    const allGpas = this.students.map(s => this.calculateStudentAverages(s).gpa);
    const avgGpa = allGpas.length ? (allGpas.reduce((a, b) => a + b, 0) / allGpas.length).toFixed(2) : '4.00';
    if (this.adminCampusGpa) this.adminCampusGpa.textContent = avgGpa;

    // Campus Attendance Rate
    const totalAtt = this.students.reduce((acc, s) => {
      const days = s.attendance.totalDays || 90;
      return acc + (s.attendance.present / days);
    }, 0);
    const avgAtt = this.students.length ? ((totalAtt / this.students.length) * 100).toFixed(1) : '96.5';
    if (this.adminCampusAttendance) this.adminCampusAttendance.textContent = `${avgAtt}%`;

    // University Mapped %
    const mapped = this.students.filter(s => !!s.targetUniversity).length;
    const mappedPct = this.students.length ? Math.round((mapped / this.students.length) * 100) : 100;
    if (this.adminUnivMapped) this.adminUnivMapped.textContent = `${mappedPct}%`;
  }

  renderAdminFacultyTable() {
    if (!this.adminFacultyTableBody) return;
    this.adminFacultyTableBody.innerHTML = '';

    const query = (this.adminFacultySearchInput?.value || '').trim().toLowerCase();
    const deptFilter = this.adminFacultyDeptFilter?.value || 'all';

    const filtered = this.faculty.filter(f => {
      const matchesSearch = !query || 
        f.name.toLowerCase().includes(query) || 
        f.subjects.toLowerCase().includes(query) ||
        f.cohorts.toLowerCase().includes(query) ||
        (f.email && f.email.toLowerCase().includes(query));
      const matchesDept = deptFilter === 'all' || f.dept.toLowerCase().includes(deptFilter.toLowerCase());
      return matchesSearch && matchesDept;
    });

    if (filtered.length === 0) {
      this.adminFacultyTableBody.innerHTML = `
        <tr>
          <td colspan="6" class="text-center text-muted" style="padding: 2rem;">
            No faculty members match your filter criteria.
          </td>
        </tr>
      `;
      return;
    }

    filtered.forEach(f => {
      const initials = f.name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s*/, '').split(' ').map(p => p[0]).join('').substring(0, 2);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div class="faculty-name-cell">
            <div class="faculty-avatar">${initials}</div>
            <div>
              <strong>${f.name}</strong><br>
              <span class="text-muted text-xs">${f.email || 'N/A'}</span>
            </div>
          </div>
        </td>
        <td><span class="badge badge-info">${f.dept}</span></td>
        <td>${f.subjects}</td>
        <td>${f.cohorts}</td>
        <td class="text-center">
          <span class="badge ${f.status === 'Active' ? 'badge-success' : 'badge-warning'}">${f.status}</span>
        </td>
        <td class="text-center">
          <button type="button" class="btn btn-outline btn-xs admin-remove-faculty-btn" data-id="${f.id}" title="Remove Faculty Member">Remove</button>
        </td>
      `;
      this.adminFacultyTableBody.appendChild(tr);
    });

    // Remove faculty listener
    this.adminFacultyTableBody.querySelectorAll('.admin-remove-faculty-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const target = this.faculty.find(f => f.id === id);
        if (target) {
          this.promptConfirmDelete(`faculty member "${target.name}"`, () => {
            this.faculty = this.faculty.filter(f => f.id !== id);
            this.saveFaculty();
            this.logAudit('Admin', 'Faculty Removed', `Removed ${target.name} from institutional registry`);
            this.renderAdminModule();
            this.showToast(`Removed faculty record: ${target.name}`);
          });
        }
      });
    });
  }

  handleNewFacultySubmit(e) {
    e.preventDefault();
    const name = document.getElementById('newFacultyName')?.value.trim();
    const dept = document.getElementById('newFacultyDept')?.value;
    const subjects = document.getElementById('newFacultySubjects')?.value.trim();
    const cohorts = document.getElementById('newFacultyCohorts')?.value.trim();
    const email = document.getElementById('newFacultyEmail')?.value.trim();
    const status = document.getElementById('newFacultyStatus')?.value || 'Active';

    if (!name || !subjects || !cohorts) {
      alert('Please fill out all required faculty details.');
      return;
    }

    const id = `FAC-${Math.floor(100 + Math.random() * 900)}`;
    const newFaculty = { id, name, dept, subjects, cohorts, email, status };

    this.faculty.unshift(newFaculty);
    this.saveFaculty();
    this.logAudit('Admin', 'Faculty Registered', `Added ${name} to ${dept} department`);

    this.newFacultyModal?.close();
    this.newFacultyForm?.reset();
    this.showToast(`Registered new faculty member: ${name}`);
    this.renderAdminModule();
  }

  renderAdminCohorts() {
    if (!this.adminCohortGrid) return;
    this.adminCohortGrid.innerHTML = '';

    // Group students by class
    const cohortNames = ['Grade 10-A', 'Grade 10-B', 'Grade 11-A'];
    cohortNames.forEach(cohortName => {
      const cohortStudents = this.students.filter(s => s.class === cohortName);
      const count = cohortStudents.length;
      const gpas = cohortStudents.map(s => this.calculateStudentAverages(s).gpa);
      const meanGpa = gpas.length ? (gpas.reduce((a, b) => a + b, 0) / gpas.length).toFixed(2) : '3.85';
      const advisor = cohortStudents[0]?.advisor || 'Dr. Marcus Sterling';

      const totalAtt = cohortStudents.reduce((acc, s) => {
        const d = s.attendance.totalDays || 90;
        return acc + (s.attendance.present / d);
      }, 0);
      const avgAtt = cohortStudents.length ? ((totalAtt / cohortStudents.length) * 100).toFixed(1) : '97.2';

      const card = document.createElement('div');
      card.className = 'cohort-card';
      card.innerHTML = `
        <div class="cohort-card-header">
          <h4 class="cohort-card-title">${cohortName}</h4>
          <span class="badge badge-primary">${count} Students</span>
        </div>
        <div class="cohort-stats-row">
          <span>Advisor: <strong>${advisor}</strong></span>
          <span>Mean GPA: <strong class="text-accent">${meanGpa}</strong></span>
          <span>Attendance: <strong class="text-success">${avgAtt}%</strong></span>
        </div>
        <div>
          <span class="text-muted text-xs">Enrolled Members:</span>
          <div style="margin-top: 0.35rem; display: flex; flex-wrap: wrap; gap: 0.3rem;">
            ${cohortStudents.map(s => `<span class="badge badge-info" style="font-size: 0.72rem;">${s.name.split(' ')[0]}</span>`).join('')}
          </div>
        </div>
      `;
      this.adminCohortGrid.appendChild(card);
    });
  }

  renderAdminUnivPipeline() {
    if (!this.adminUnivPipelineTableBody) return;
    this.adminUnivPipelineTableBody.innerHTML = '';

    this.students.forEach(s => {
      const avgs = this.calculateStudentAverages(s);
      const targetUniv = s.targetUniversity || 'Indian Institute of Technology Bombay';
      const univObj = window.IndianUniversitiesHub?.getByName(targetUniv);
      const category = univObj?.category || 'Engineering / Multi-Disciplinary';

      let readiness = 'Admissions Ready';
      let readinessBadge = 'badge-success';
      if (avgs.gpa < 3.5) {
        readiness = 'In Progress';
        readinessBadge = 'badge-warning';
      } else if (avgs.gpa < 3.8) {
        readiness = 'Competitive Candidate';
        readinessBadge = 'badge-primary';
      }

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <strong>${s.name}</strong><br>
          <span class="text-muted text-xs">${s.id}</span>
        </td>
        <td>${s.class}</td>
        <td>
          <strong>${targetUniv}</strong><br>
          <span class="text-muted text-xs">${univObj?.state ? univObj.city + ', ' + univObj.state : 'Top Tier Indian Institution'}</span>
        </td>
        <td><span class="badge badge-info">${category}</span></td>
        <td class="text-center font-mono"><strong>${avgs.gpa.toFixed(2)}</strong></td>
        <td class="text-center"><span class="badge ${readinessBadge}">${readiness}</span></td>
      `;
      this.adminUnivPipelineTableBody.appendChild(tr);
    });
  }

  renderAdminAuditTable() {
    if (!this.adminAuditTableBody) return;
    this.adminAuditTableBody.innerHTML = '';

    if (this.auditLogs.length === 0) {
      this.adminAuditTableBody.innerHTML = `
        <tr>
          <td colspan="4" class="text-center text-muted" style="padding: 2rem;">
            Audit log is currently empty.
          </td>
        </tr>
      `;
      return;
    }

    this.auditLogs.slice(0, 50).forEach(log => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="font-mono text-xs">${log.timestamp}</td>
        <td><span class="badge badge-info">${log.user}</span></td>
        <td><strong>${log.action}</strong></td>
        <td class="text-muted text-xs">${log.details}</td>
      `;
      this.adminAuditTableBody.appendChild(tr);
    });
  }

  exportAuditCsv() {
    let csv = 'Timestamp,User / Role,Action Executed,Operational Details\n';
    this.auditLogs.forEach(l => {
      csv += `"${l.timestamp}","${l.user}","${l.action}","${l.details.replace(/"/g, '""')}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `edumetrics-audit-log-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    this.showToast('Audit log CSV exported successfully!');
  }

  // ==========================================================================
  // TEACHER MODULE: CLASSROOM GRADEBOOK, ATTENDANCE & REMARKS
  // ==========================================================================
  renderTeacherModule() {
    const student = this.getSelectedStudent();
    if (!student) return;

    // 1. Populate Instructor dropdown if not already populated
    if (this.teacherProfileSelect && this.teacherProfileSelect.options.length === 0) {
      this.teacherProfileSelect.innerHTML = this.faculty.map(f => 
        `<option value="${f.name}">${f.name} (${f.dept})</option>`
      ).join('');
    }

    // 2. Context active student labels
    if (this.teacherActiveStudentName) this.teacherActiveStudentName.textContent = student.name;
    if (this.teacherActiveStudentID) this.teacherActiveStudentID.textContent = student.id;

    // 3. Render Gradebook matrix, attendance ledger, remarks, and metrics
    this.renderTeacherGradebook();
    this.renderTeacherAttendanceLedger();
    this.renderTeacherRemarksHub();
    this.renderTeacherClassroomMetrics();
  }

  renderTeacherGradebook() {
    const student = this.getSelectedStudent();
    if (!student || !this.teacherGradesTableBody) return;

    this.teacherGradesTableBody.innerHTML = '';
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
        <td class="text-center">
          <input type="number" min="0" max="100" class="form-control input-score-sm teacher-cw" data-idx="${idx}" value="${c.coursework}" aria-label="${c.name} coursework score">
        </td>
        <td class="text-center">
          <input type="number" min="0" max="100" class="form-control input-score-sm teacher-mt" data-idx="${idx}" value="${c.midterm}" aria-label="${c.name} midterm score">
        </td>
        <td class="text-center">
          <input type="number" min="0" max="100" class="form-control input-score-sm teacher-ex" data-idx="${idx}" value="${c.exam}" aria-label="${c.name} final exam score">
        </td>
        <td class="text-center font-mono font-bold">
          <span class="live-teacher-weighted" data-idx="${idx}">${weighted}%</span>
        </td>
        <td class="text-center">
          <span class="score-badge ${converted.badgeClass} live-teacher-converted" data-idx="${idx}">${converted.display}</span>
        </td>
        <td>
          <input type="text" class="form-control teacher-remark-inp" data-idx="${idx}" value="${c.remark || ''}" style="width: 100%; min-width: 220px;" placeholder="Teacher observation...">
        </td>
        <td class="text-center">
          <button type="button" class="delete-row-btn teacher-delete-course-btn" data-idx="${idx}" title="Remove Subject" aria-label="Delete ${c.name}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </td>
      `;
      this.teacherGradesTableBody.appendChild(tr);
    });

    // Real-time live recalculation
    const updateTeacherRow = (idx) => {
      const cw = Number(this.teacherGradesTableBody.querySelector(`.teacher-cw[data-idx="${idx}"]`)?.value) || 0;
      const mt = Number(this.teacherGradesTableBody.querySelector(`.teacher-mt[data-idx="${idx}"]`)?.value) || 0;
      const ex = Number(this.teacherGradesTableBody.querySelector(`.teacher-ex[data-idx="${idx}"]`)?.value) || 0;

      const weighted = Math.round(((cw * 0.3) + (mt * 0.3) + (ex * 0.4)) * 10) / 10;
      const converted = this.convertScore(weighted);

      const weightEl = this.teacherGradesTableBody.querySelector(`.live-teacher-weighted[data-idx="${idx}"]`);
      const convEl = this.teacherGradesTableBody.querySelector(`.live-teacher-converted[data-idx="${idx}"]`);
      if (weightEl) weightEl.textContent = `${weighted}%`;
      if (convEl) {
        convEl.textContent = converted.display;
        convEl.className = `score-badge ${converted.badgeClass} live-teacher-converted`;
      }

      // Sync to student model in real time
      if (student.courses[idx]) {
        student.courses[idx].coursework = cw;
        student.courses[idx].midterm = mt;
        student.courses[idx].exam = ex;
      }
    };

    this.teacherGradesTableBody.querySelectorAll('.input-score-sm').forEach(inp => {
      inp.addEventListener('input', (e) => {
        updateTeacherRow(e.target.dataset.idx);
      });
    });

    this.teacherGradesTableBody.querySelectorAll('.teacher-remark-inp').forEach(inp => {
      inp.addEventListener('change', (e) => {
        const idx = Number(e.target.dataset.idx);
        if (student.courses[idx]) {
          student.courses[idx].remark = e.target.value.trim();
          this.saveStudents();
        }
      });
    });

    this.teacherGradesTableBody.querySelectorAll('.teacher-delete-course-btn').forEach(btn => {
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
  }

  renderTeacherAttendanceLedger() {
    if (!this.teacherAttendanceTableBody) return;
    this.teacherAttendanceTableBody.innerHTML = '';

    const selectedCohort = this.teacherCohortSelect?.value || 'Grade 10-A';
    const cohortStudents = this.students.filter(s => s.class === selectedCohort);

    cohortStudents.forEach(s => {
      const totalDays = s.attendance.totalDays || 90;
      const attRate = ((s.attendance.present / totalDays) * 100).toFixed(1);
      const studentStatus = this.attendanceRecords[s.id] || 'P';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${s.name}</strong></td>
        <td class="font-mono text-xs">${s.id}</td>
        <td>${s.class}</td>
        <td>
          <div class="att-toggle-group" data-student-id="${s.id}">
            <button type="button" class="att-btn att-btn-p ${studentStatus === 'P' ? 'active' : ''}" data-val="P" title="Present">P</button>
            <button type="button" class="att-btn att-btn-a ${studentStatus === 'A' ? 'active' : ''}" data-val="A" title="Absent">A</button>
            <button type="button" class="att-btn att-btn-t ${studentStatus === 'T' ? 'active' : ''}" data-val="T" title="Tardy">T</button>
            <button type="button" class="att-btn att-btn-e ${studentStatus === 'E' ? 'active' : ''}" data-val="E" title="Excused">E</button>
          </div>
        </td>
        <td class="text-center font-mono">
          <span class="badge ${parseFloat(attRate) >= 95 ? 'badge-success' : 'badge-primary'}">${attRate}%</span>
        </td>
      `;
      this.teacherAttendanceTableBody.appendChild(tr);
    });

    // Toggle button click handlers
    this.teacherAttendanceTableBody.querySelectorAll('.att-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const group = e.target.closest('.att-toggle-group');
        const sId = group.dataset.studentId;
        const val = e.target.dataset.val;

        group.querySelectorAll('.att-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.attendanceRecords[sId] = val;

        const targetStudent = this.students.find(s => s.id === sId);
        if (targetStudent) {
          if (val === 'A') targetStudent.attendance.unexcused++;
          else if (val === 'T') targetStudent.attendance.tardy++;
          else if (val === 'E') targetStudent.attendance.excused++;
          this.saveStudents();
          this.showToast(`Marked ${targetStudent.name} as ${val === 'P' ? 'Present' : (val === 'A' ? 'Absent' : (val === 'T' ? 'Tardy' : 'Excused'))}`);
        }
      });
    });
  }

  markAllCohortPresent() {
    const selectedCohort = this.teacherCohortSelect?.value || 'Grade 10-A';
    const cohortStudents = this.students.filter(s => s.class === selectedCohort);
    cohortStudents.forEach(s => {
      this.attendanceRecords[s.id] = 'P';
    });
    this.renderTeacherAttendanceLedger();
    this.logAudit('Teacher', 'Roll Call Completed', `Marked all students present in ${selectedCohort}`);
    this.showToast(`Marked all ${cohortStudents.length} students in ${selectedCohort} as Present!`);
  }

  renderTeacherRemarksHub() {
    if (!this.teacherRemarksStudentSelect) return;
    
    // Populate select if empty or mismatched
    const selectedCohort = this.teacherCohortSelect?.value || 'Grade 10-A';
    const cohortStudents = this.students.filter(s => s.class === selectedCohort);

    this.teacherRemarksStudentSelect.innerHTML = cohortStudents.map(s => 
      `<option value="${s.id}" ${s.id === this.selectedStudentId ? 'selected' : ''}>${s.name} (${s.id})</option>`
    ).join('');

    const student = this.getSelectedStudent();
    if (student) {
      if (this.teacherHonorBadgeSelect) this.teacherHonorBadgeSelect.value = student.honor || 'Honor Roll with Distinction';
      if (this.teacherCounselorRemarksInput) this.teacherCounselorRemarksInput.value = student.counselorRemarks || '';
    }
  }

  renderTeacherClassroomMetrics() {
    if (!this.teacherCohortStatsGrid) return;
    this.teacherCohortStatsGrid.innerHTML = '';

    const selectedCohort = this.teacherCohortSelect?.value || 'Grade 10-A';
    const cohortStudents = this.students.filter(s => s.class === selectedCohort);

    const gpas = cohortStudents.map(s => this.calculateStudentAverages(s).gpa).sort((a, b) => a - b);
    const medianGpa = gpas.length ? gpas[Math.floor(gpas.length / 2)].toFixed(2) : '3.88';
    const highGpa = gpas.length ? gpas[gpas.length - 1].toFixed(2) : '4.00';
    const honorsCount = cohortStudents.filter(s => (s.honor || '').includes('Honor Roll')).length;

    const totalAtt = cohortStudents.reduce((acc, s) => {
      const d = s.attendance.totalDays || 90;
      return acc + (s.attendance.present / d);
    }, 0);
    const attPct = cohortStudents.length ? ((totalAtt / cohortStudents.length) * 100).toFixed(1) : '97.4';

    this.teacherCohortStatsGrid.innerHTML = `
      <div class="stat-metric-card">
        <span class="metric-label">Cohort Median GPA</span>
        <span class="metric-val text-primary">${medianGpa}</span>
        <span class="metric-sub">${selectedCohort} Benchmark</span>
      </div>
      <div class="stat-metric-card">
        <span class="metric-label">Highest Student GPA</span>
        <span class="metric-val text-accent">${highGpa}</span>
        <span class="metric-sub">Valedictorian Pace</span>
      </div>
      <div class="stat-metric-card">
        <span class="metric-label">Honors Recipients</span>
        <span class="metric-val text-success">${honorsCount} / ${cohortStudents.length}</span>
        <span class="metric-sub">Academic Distinction</span>
      </div>
      <div class="stat-metric-card">
        <span class="metric-label">Cohort Attendance</span>
        <span class="metric-val text-info">${attPct}%</span>
        <span class="metric-sub">Punctuality Average</span>
      </div>
    `;
  }

  // ==========================================================================
  // PARENT MODULE: WARD OVERSIGHT, ATTENDANCE DIARY & CIRCULARS
  // ==========================================================================
  renderParentModule() {
    const student = this.getSelectedStudent();
    if (!student) return;

    // 1. Populate Ward select if needed
    if (this.parentWardSelect) {
      this.parentWardSelect.innerHTML = this.students.map(s =>
        `<option value="${s.id}" ${s.id === student.id ? 'selected' : ''}>${s.name} (${s.class})</option>`
      ).join('');
    }

    // 2. Ward ribbon details
    if (this.parentWardClassText) this.parentWardClassText.textContent = student.class;
    if (this.parentWardAdvisorText) this.parentWardAdvisorText.textContent = student.advisor;

    const isSigned = student.parentAckDate && student.parentAckDate !== 'Pending';
    if (this.parentSignOffBadge) {
      this.parentSignOffBadge.className = `badge ${isSigned ? 'badge-success' : 'badge-warning'}`;
      this.parentSignOffBadge.textContent = isSigned ? `Acknowledged (${student.parentAckDate})` : 'Sign-Off Pending';
    }

    // 3. Render sub-panes
    this.renderParentAcademicReport();
    this.renderParentAttendanceDiary();
    this.renderParentConferences();
    this.renderParentCirculars();
  }

  renderParentAcademicReport() {
    const student = this.getSelectedStudent();
    if (!student || !this.parentGradesTableBody) return;

    this.parentGradesTableBody.innerHTML = '';
    student.courses.forEach(c => {
      const weighted = this.calculateWeightedScore(c);
      const converted = this.convertScore(weighted);
      const diff = (weighted - c.classAvg).toFixed(1);
      const isPositive = diff >= 0;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <strong>${c.name}</strong><br>
          <span class="text-muted text-xs">${c.dept} &bull; ${c.teacher}</span>
        </td>
        <td>1.0</td>
        <td>
          <span class="score-badge ${converted.badgeClass}">${converted.display}</span>
        </td>
        <td>
          <span class="text-muted text-xs">Class Avg: ${c.classAvg}%</span><br>
          <strong style="font-size: 0.75rem; color: ${isPositive ? 'var(--success)' : 'var(--warning)'};">
            ${isPositive ? '+' : ''}${diff}% vs Class
          </strong>
        </td>
        <td class="text-muted text-xs font-italic">
          "${c.remark || 'Maintains attentive and consistent performance.'}"
        </td>
      `;
      this.parentGradesTableBody.appendChild(tr);
    });

    // Parent Sign-Off Box
    const isSigned = student.parentAckDate && student.parentAckDate !== 'Pending';
    if (this.parentAckDetailedStatus) {
      if (isSigned) {
        this.parentAckDetailedStatus.innerHTML = `
          <strong class="text-success">&#10003; Electronically Signed by ${student.parentName || 'Parent'}</strong> on ${student.parentAckDate}.<br>
          <span class="text-muted text-xs">Official Verification Hash: <code>EDUMET-${student.id.replace('STU-', '')}-${student.class.replace(' ', '')}</code></span>
        `;
      } else {
        this.parentAckDetailedStatus.textContent = `Sign-off pending for ${student.name} (${student.class}) for Term 2 evaluations.`;
      }
    }

    if (this.parentSignOffBtn) {
      this.parentSignOffBtn.disabled = isSigned;
      this.parentSignOffBtn.textContent = isSigned ? 'Acknowledged Online' : 'Confirm & Electronically Sign';
    }
  }

  handleParentDigitalSignOff() {
    const student = this.getSelectedStudent();
    if (!student) return;

    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    student.parentAckDate = today;
    this.saveStudents();

    this.logAudit('Parent', 'Digital Sign-Off', `Acknowledged official Term 2 transcript for ${student.name}`);
    this.showToast(`Digitally signed transcript for ${student.name}!`);
    this.render();
  }

  renderParentAttendanceDiary() {
    const student = this.getSelectedStudent();
    if (!student) return;

    if (this.parentAttPresent) this.parentAttPresent.textContent = student.attendance.present;
    if (this.parentAttExcused) this.parentAttExcused.textContent = student.attendance.excused;
    if (this.parentAttUnexcused) this.parentAttUnexcused.textContent = student.attendance.unexcused;
    if (this.parentAttTardy) this.parentAttTardy.textContent = student.attendance.tardy;

    if (!this.parentLeaveTableBody) return;
    this.parentLeaveTableBody.innerHTML = '';

    const studentLeaves = this.leaveRequests.filter(lr => lr.studentId === student.id || lr.studentName === student.name);

    if (studentLeaves.length === 0) {
      this.parentLeaveTableBody.innerHTML = `
        <tr>
          <td colspan="4" class="text-center text-muted" style="padding: 1.5rem;">
            No absence notes recorded for ${student.name}.
          </td>
        </tr>
      `;
      return;
    }

    studentLeaves.forEach(lr => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="font-mono text-xs">${lr.date}</td>
        <td><span class="badge badge-info">${lr.category}</span></td>
        <td class="text-xs text-muted">${lr.reason}</td>
        <td class="text-center">
          <span class="badge ${lr.status === 'Approved' ? 'badge-success' : 'badge-warning'}">${lr.status}</span>
        </td>
      `;
      this.parentLeaveTableBody.appendChild(tr);
    });
  }

  openLeaveRequestModal() {
    const student = this.getSelectedStudent();
    const nameInp = document.getElementById('leaveStudentName');
    if (nameInp && student) nameInp.value = `${student.name} (${student.id} • ${student.class})`;

    const today = new Date().toISOString().split('T')[0];
    const dateInp = document.getElementById('leaveDate');
    if (dateInp) dateInp.value = today;

    this.leaveRequestModal?.showModal();
  }

  handleLeaveRequestSubmit(e) {
    e.preventDefault();
    const student = this.getSelectedStudent();
    if (!student) return;

    const date = document.getElementById('leaveDate')?.value;
    const category = document.getElementById('leaveCategory')?.value;
    const reason = document.getElementById('leaveReason')?.value.trim();

    if (!date || !category || !reason) {
      alert('Please fill out all required leave request fields.');
      return;
    }

    const id = `LR-${Math.floor(200 + Math.random() * 800)}`;
    const newReq = {
      id,
      studentId: student.id,
      studentName: student.name,
      date,
      category,
      reason,
      status: 'Pending Review'
    };

    this.leaveRequests.unshift(newReq);
    this.saveLeaveRequests();
    this.logAudit('Parent', 'Absence Note Submitted', `Submitted absence excuse for ${student.name} on ${date}`);

    this.leaveRequestModal?.close();
    this.leaveRequestForm?.reset();
    this.showToast(`Submitted absence note for ${student.name}`);
    this.renderParentAttendanceDiary();
  }

  renderParentConferences() {
    if (!this.parentConferencesList) return;
    this.parentConferencesList.innerHTML = '';

    const student = this.getSelectedStudent();
    const list = this.conferences.filter(c => !c.studentName || c.studentName === student.name);

    if (list.length === 0) {
      this.parentConferencesList.innerHTML = `
        <div class="text-center text-muted" style="padding: 2rem;">
          No conferences currently scheduled. Click "+ Book Conference" to request a consultation.
        </div>
      `;
      return;
    }

    list.forEach(conf => {
      const card = document.createElement('div');
      card.className = 'conference-item-card';
      card.innerHTML = `
        <div class="conference-item-meta">
          <h4>${conf.teacher}</h4>
          <p><strong>${conf.date}</strong> &bull; ${conf.time} &bull; <em>${conf.format}</em></p>
          <p class="text-xs text-muted" style="margin-top: 0.25rem;">Discussion: ${conf.topic}</p>
        </div>
        <div>
          <span class="badge ${conf.status === 'Confirmed' ? 'badge-success' : 'badge-primary'}">${conf.status}</span>
        </div>
      `;
      this.parentConferencesList.appendChild(card);
    });
  }

  renderParentCirculars() {
    if (!this.parentCircularsGrid) return;
    this.parentCircularsGrid.innerHTML = '';

    this.circulars.forEach(cir => {
      const card = document.createElement('div');
      card.className = 'circular-card';
      card.innerHTML = `
        <div class="circular-card-top">
          <span class="badge badge-info">${cir.category}</span>
          <span class="circular-date">${cir.date}</span>
        </div>
        <h4 class="circular-title">${cir.title}</h4>
        <p class="text-muted text-xs">${cir.excerpt}</p>
        <div style="margin-top: auto;">
          <span class="badge ${cir.priority === 'High' ? 'badge-danger' : 'badge-primary'}" style="font-size: 0.7rem;">${cir.priority} Priority</span>
        </div>
      `;
      this.parentCircularsGrid.appendChild(card);
    });
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

    const targetUnivEl = document.getElementById('reportStudentTargetUniv');
    if (targetUnivEl) {
      targetUnivEl.textContent = student.targetUniversity || 'Not Assigned';
    }

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
    const portalGreeting = document.getElementById('portalGreetingName');
    if (portalGreeting) {
      portalGreeting.textContent = `${student.name.split(' ')[1] || student.name} Family`;
    }
    const parentNameInp = document.getElementById('parentNameInput');
    if (parentNameInp && student.parentName) {
      parentNameInp.value = student.parentName;
    }
  }

  // --- View 2: Teacher Input Gradebook (Legacy Safe Handler) ---
  renderTeacherInput() {
    const student = this.getSelectedStudent();
    if (!student) return;

    const nameEl = document.getElementById('editorStudentName');
    if (nameEl) nameEl.textContent = student.name;
    const idEl = document.getElementById('editorStudentID');
    if (idEl) idEl.textContent = student.id;
    const classEl = document.getElementById('editorStudentClass');
    if (classEl) classEl.textContent = student.class;

    const tbody = document.getElementById('editorGradesTableBody');
    if (!tbody) return;
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
    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
    setVal('inputDaysPresent', student.attendance.present);
    setVal('inputDaysExcused', student.attendance.excused);
    setVal('inputDaysUnexcused', student.attendance.unexcused);
    setVal('inputDaysTardy', student.attendance.tardy);
    setVal('inputAttNote', student.attendance.notes);

    // Counselor remarks & honor badge
    setVal('inputCounselorRemarks', student.counselorRemarks || '');
    setVal('inputHonorBadge', student.honor || 'Honor Roll with Distinction');
  }

  handleSaveTeacherInput() {
    const student = this.getSelectedStudent();
    if (!student) return;

    const tbody = document.getElementById('editorGradesTableBody');
    if (tbody) {
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
    }

    const getNumVal = (id) => Number(document.getElementById(id)?.value) || 0;
    const getTxtVal = (id) => document.getElementById(id)?.value || '';

    // Attendance
    if (document.getElementById('inputDaysPresent')) {
      student.attendance.present = getNumVal('inputDaysPresent');
      student.attendance.excused = getNumVal('inputDaysExcused');
      student.attendance.unexcused = getNumVal('inputDaysUnexcused');
      student.attendance.tardy = getNumVal('inputDaysTardy');
      student.attendance.notes = getTxtVal('inputAttNote');
    }

    // Counselor & Honor
    if (document.getElementById('inputCounselorRemarks')) {
      student.counselorRemarks = getTxtVal('inputCounselorRemarks');
    }
    if (document.getElementById('inputHonorBadge')) {
      student.honor = getTxtVal('inputHonorBadge');
    }

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
    const targetUniversity = document.getElementById('newStudentTargetUniv')?.value.trim() || '';

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
      targetUniversity,
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
    if (document.getElementById('editStudentTargetUniv')) {
      document.getElementById('editStudentTargetUniv').value = student.targetUniversity || '';
    }

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
    if (document.getElementById('editStudentTargetUniv')) {
      student.targetUniversity = document.getElementById('editStudentTargetUniv').value.trim();
    }

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

    const parentNameInp = document.getElementById('parentNameInput');
    const relationInp = document.getElementById('parentRelationship');
    const parentName = parentNameInp ? parentNameInp.value.trim() : (student.parentName || 'Parent / Guardian');
    const relation = relationInp ? relationInp.value : (student.parentRelation || 'Parent');
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    student.parentName = parentName;
    student.parentRelation = relation;
    student.parentAckDate = today;
    this.saveStudents();

    if (this.parentAckConfirmationMsg) {
      this.parentAckConfirmationMsg.classList.remove('hidden');
      setTimeout(() => this.parentAckConfirmationMsg?.classList.add('hidden'), 4500);
    }
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
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    window.eduMetricsApp = new EduMetricsApp();
  });
}


if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    INDIAN_UNIVERSITIES,
    INDIAN_STATES_UT,
    INDIAN_UNIVERSITY_TYPES,
    IndianUniversitiesHub,
    DEFAULT_INSTITUTION,
    DEFAULT_SCALE_CONFIG,
    INITIAL_STUDENTS,
    EduMetricsApp
  };
}
