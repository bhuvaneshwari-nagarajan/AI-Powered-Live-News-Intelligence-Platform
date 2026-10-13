/* ============================================================
   NewsSphere — Demo Data
   js/data.js — All sample content, clearly labelled as demo
   ============================================================ */

'use strict';

// ── Ticker headlines ─────────────────────────────────────────
const TICKER_HEADLINES = {
  en: [
    "[DEMO] Global Climate Summit enters second day with record attendance of 140+ nations",
    "[DEMO] AI governance framework proposed at international technology conference",
    "[DEMO] Markets stabilize after three-day volatility — indices recover",
    "[DEMO] Quantum computing breakthrough reported by international research consortium",
    "[DEMO] Peace talks resume in conflict-affected region with UN mediation",
    "[DEMO] Space mission achieves orbital milestone — crew reports safe conditions",
    "[DEMO] Renewable energy investment hits record high globally in Q3",
    "[DEMO] Major sporting championship finals set for this weekend",
  ],
  ta: [
    "[மாதிரி] 140+ நாடுகளுடன் உலக காலநிலை மாநாட்டின் இரண்டாம் நாள்",
    "[மாதிரி] AI ஆட்சி கட்டமைப்பு சர்வதேச தொழில்நுட்ப மாநாட்டில் முன்மொழியப்பட்டது",
    "[மாதிரி] மூன்று நாள் ஏற்ற இறக்கத்திற்குப் பிறகு சந்தைகள் நிலைப்பெற்றன",
    "[மாதிரி] குவாண்டம் கம்ப்யூட்டிங் திடீர் முன்னேற்றம் — ஆராய்ச்சி குழு",
    "[மாதிரி] UN மத்தியஸ்தத்துடன் அமைதி பேச்சுவார்த்தைகள் மீண்டும் தொடங்கின",
    "[மாதிரி] விண்வெளி பயணம் சுற்றுப்பாதை மைல்கல்லை அடைந்தது",
  ]
};

// ── News articles ────────────────────────────────────────────
const NEWS_ARTICLES = [
  {
    id: 1,
    category: 'world',
    categoryLabel: { en: 'World', ta: 'உலகம்' },
    badgeClass: 'cat-world',
    title: {
      en: 'Global Leaders Convene for Historic Climate and Economic Summit [DEMO]',
      ta: 'வரலாற்றுச் சிறப்புமிக்க காலநிலை மாநாட்டில் உலகத் தலைவர்கள் [மாதிரி]',
    },
    summary: {
      en: 'Representatives from over 140 nations gathered to discuss binding commitments on carbon reduction and equitable economic development frameworks. [DEMO CONTENT]',
      ta: '140-க்கும் மேற்பட்ட நாடுகளின் பிரதிநிதிகள் கார்பன் குறைப்பு மற்றும் பொருளாதார வளர்ச்சி குறித்து ஒன்று கூடினர். [மாதிரி உள்ளடக்கம்]',
    },
    body: {
      en: `Representatives from over 140 nations gathered at the international summit to discuss unprecedented climate and economic cooperation. The three-day conference, which opened to record attendance, focuses on establishing binding emissions targets and an equitable framework for green technology transfer to developing nations.

Senior diplomats emphasized that this gathering differs from previous climate talks in its scope and legal enforceability. A draft agreement circulating among delegations includes specific timelines, verification mechanisms, and a dedicated fund of several hundred billion dollars for climate adaptation in vulnerable nations.

Economic sessions running in parallel addressed supply chain resilience, digital trade, and the governance of emerging technologies including AI systems.

[DEMO CONTENT — This article is sample text for demonstration purposes. It does not represent real events or verified reporting.]`,
      ta: `140-க்கும் மேற்பட்ட நாடுகளின் பிரதிநிதிகள் சர்வதேச மாநாட்டில் ஒன்று கூடினர். மூன்று நாள் மாநாடு கட்டாய உமிழ்வு இலக்குகள் மற்றும் பசுமை தொழில்நுட்ப பரிமாற்றத்திற்கான சட்டகத்தை நிறுவுவதில் கவனம் செலுத்துகிறது.

[மாதிரி உள்ளடக்கம் — இந்தக் கட்டுரை ஆர்ப்பாட்ட நோக்கங்களுக்கான மாதிரி உரை. இது உண்மையான நிகழ்வுகளை குறிக்கவில்லை.]`,
    },
    date: '12 Oct 2026',
    datetime: '2026-10-12',
    readTime: { en: '4 min read', ta: '4 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1500&q=85',
    imageAlt: '[Demo image] Solar panels at a renewable energy site, illustrating climate summit coverage',
    featured: true,
  },
  {
    id: 2,
    category: 'tech',
    categoryLabel: { en: 'Technology', ta: 'தொழில்நுட்பம்' },
    badgeClass: 'cat-tech',
    title: {
      en: 'Nations Draft First Binding AI Governance Framework [DEMO]',
      ta: 'முதல் கட்டாய AI ஆட்சி கட்டமைப்பு வரைவு — நாடுகள் [மாதிரி]',
    },
    summary: {
      en: 'Twenty-seven nations have agreed to a draft framework that would impose legal accountability on AI developers for harmful outputs in high-stakes domains. [DEMO]',
      ta: '27 நாடுகள் AI டெவலப்பர்களுக்கு சட்ட பொறுப்புணர்வு விதிக்கும் வரைவு சட்டகத்திற்கு ஒப்புக்கொண்டன. [மாதிரி]',
    },
    body: {
      en: `Twenty-seven nations have agreed to the outline of a legally binding framework that would impose accountability requirements on AI developers operating in high-stakes domains including healthcare, criminal justice, and financial services.

The draft, developed over eighteen months of multilateral negotiations, establishes minimum standards for model transparency, audit rights, and redress mechanisms for individuals harmed by automated decisions.

Industry observers note that the scope of the draft is more ambitious than previous voluntary codes, though significant debates remain about extraterritorial enforcement and the treatment of open-source models.

[DEMO CONTENT — Sample article for demonstration. Not verified reporting.]`,
      ta: `27 நாடுகள் AI டெவலப்பர்களுக்கு சட்ட பொறுப்புணர்வு விதிக்கும் கட்டாய கட்டமைப்பின் வரைவுக்கு ஒப்புக்கொண்டன. [மாதிரி உள்ளடக்கம்]`,
    },
    date: '12 Oct 2026',
    datetime: '2026-10-12',
    readTime: { en: '5 min read', ta: '5 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] Electronic circuit board detail',
    featured: false,
  },
  {
    id: 3,
    category: 'business',
    categoryLabel: { en: 'Business', ta: 'வணிகம்' },
    badgeClass: 'cat-business',
    title: {
      en: 'Global Markets Rebound After Three-Day Decline [DEMO]',
      ta: 'மூன்று நாள் வீழ்ச்சிக்குப் பிறகு உலக சந்தைகள் மீண்டன [மாதிரி]',
    },
    summary: {
      en: 'Major equity indices posted gains of between 1.2% and 2.8% as investor sentiment improved following central bank commentary on interest rate stability. [DEMO]',
      ta: 'மத்திய வங்கி வட்டி விகித நிலைத்தன்மை பற்றிய கருத்துக்களைத் தொடர்ந்து முக்கிய பங்கு குறியீடுகள் 1.2% மற்றும் 2.8% இடையே ஆதாயம் பெற்றன. [மாதிரி]',
    },
    body: {
      en: `Major equity indices posted significant gains on Monday as investor sentiment improved following central bank commentary on interest rate stability. The broad rally reversed three consecutive sessions of losses linked to geopolitical uncertainty and mixed economic data.

Technology and energy sectors led the recovery, while defensive sectors saw more modest movement. Currency markets showed reduced volatility compared to last week.

Analysts caution that underlying structural factors that triggered the sell-off remain unresolved and advise monitoring upcoming earnings reports.

[DEMO CONTENT — Sample article for demonstration. Not real financial information.]`,
      ta: `முக்கிய பங்கு குறியீடுகள் முக்கியமான ஆதாயங்களை பதிவு செய்தன. தொழில்நுட்பம் மற்றும் ஆற்றல் துறைகள் மீட்சியை வழிநடத்தின. [மாதிரி உள்ளடக்கம்]`,
    },
    date: '12 Oct 2026',
    datetime: '2026-10-12',
    readTime: { en: '3 min read', ta: '3 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] Financial market charts on a trading display',
    featured: false,
  },
  {
    id: 4,
    category: 'science',
    categoryLabel: { en: 'Science', ta: 'அறிவியல்' },
    badgeClass: 'cat-science',
    title: {
      en: 'Researchers Report Breakthrough in Quantum Memory Storage [DEMO]',
      ta: 'குவாண்டம் நினைவக சேமிப்பில் திடீர் முன்னேற்றம் — ஆராய்ச்சியாளர்கள் [மாதிரி]',
    },
    summary: {
      en: 'A multinational research consortium has demonstrated quantum memory coherence times exceeding one hour at room temperature, a significant advance toward practical quantum networks. [DEMO]',
      ta: 'சர்வதேச ஆராய்ச்சி கூட்டமைப்பு அறை வெப்பநிலையில் ஒரு மணி நேரத்திற்கும் அதிகமான குவாண்டம் நினைவக நேர்மை நேரங்களை நிரூபித்துள்ளது. [மாதிரி]',
    },
    body: {
      en: `A multinational research consortium has demonstrated quantum memory coherence times exceeding one hour at room temperature, a significant step toward practical quantum networks and distributed quantum computing.

The experiment used a novel error-correction protocol combined with a specially engineered crystal lattice material to achieve the result. Prior state-of-the-art systems typically maintained coherence for seconds or minutes, and often required cryogenic cooling.

The findings, published in a peer-reviewed journal, have been welcomed by quantum computing researchers as a potential enabling technology for long-distance quantum communication.

[DEMO CONTENT — Sample article for demonstration. Not verified scientific reporting.]`,
      ta: `சர்வதேச ஆராய்ச்சி கூட்டமைப்பு குவாண்டம் நினைவக நேர்மை நேரங்களை நிரூபித்துள்ளது. [மாதிரி உள்ளடக்கம்]`,
    },
    date: '11 Oct 2026',
    datetime: '2026-10-11',
    readTime: { en: '5 min read', ta: '5 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] Researcher working in a science laboratory',
    featured: false,
  },
  {
    id: 5,
    category: 'world',
    categoryLabel: { en: 'World', ta: 'உலகம்' },
    badgeClass: 'cat-world',
    title: {
      en: 'UN Security Council Convenes Emergency Session on Regional Stability [DEMO]',
      ta: 'பிராந்திய நிலைத்தன்மை குறித்து UN பாதுகாப்பு கவுன்சில் அவசர அமர்வு [மாதிரி]',
    },
    summary: {
      en: 'The UN Security Council held an emergency session to address escalating tensions in a disputed border region, with five permanent members presenting divergent positions. [DEMO]',
      ta: 'UN பாதுகாப்பு கவுன்சில் பிராந்திய பதட்டங்களை நிவர்த்திக்க அவசர அமர்வு நடத்தியது. [மாதிரி]',
    },
    body: {
      en: `The United Nations Security Council convened an emergency session to address escalating tensions in a disputed border region. All five permanent members attended, presenting positions that ranged from calls for immediate ceasefire to demands for independent investigation.

The session concluded without a binding resolution, though a joint statement calling for restraint was adopted. Humanitarian organizations reported increasing civilian displacement in the affected area.

Diplomatic channels remain open, with several nations offering to host mediation talks in coming weeks.

[DEMO CONTENT — Sample article for demonstration. Not verified reporting.]`,
      ta: `UN பாதுகாப்பு கவுன்சில் அவசர அமர்வு நடத்தியது. [மாதிரி உள்ளடக்கம்]`,
    },
    date: '12 Oct 2026',
    datetime: '2026-10-12',
    readTime: { en: '4 min read', ta: '4 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] International city skyline at dusk',
    featured: false,
  },
  {
    id: 6,
    category: 'tech',
    categoryLabel: { en: 'Technology', ta: 'தொழில்நுட்பம்' },
    badgeClass: 'cat-tech',
    title: {
      en: 'Major Tech Consortium Unveils Open Robotics Platform [DEMO]',
      ta: 'பெரிய தொழில்நுட்ப கூட்டமைப்பு திறந்த ரோபாட்டிக்ஸ் தளத்தை வெளியிட்டது [மாதிரி]',
    },
    summary: {
      en: 'A consortium of technology companies and academic institutions released an open-source robotics middleware platform designed to accelerate research in human-robot collaboration. [DEMO]',
      ta: 'தொழில்நுட்ப நிறுவனங்கள் மனித-ரோபோ ஒத்துழைப்பில் ஆராய்ச்சியை விரைவுபடுத்த திறந்த மூல ரோபாட்டிக்ஸ் தளத்தை வெளியிட்டன. [மாதிரி]',
    },
    body: {
      en: `A major consortium of technology companies and academic institutions released an open-source robotics middleware platform designed to accelerate research in human-robot collaboration in manufacturing and service environments.

The platform includes standardized hardware interfaces, safety monitoring modules, and a shared simulation environment. Early access partners include several universities and manufacturing groups who participated in the development process.

The release is seen as a strategic move to establish common infrastructure in a rapidly growing sector, following significant private investment in autonomous systems.

[DEMO CONTENT — Sample article. Not verified reporting.]`,
      ta: `ரோபாட்டிக்ஸ் தளம் வெளியிடப்பட்டது. [மாதிரி உள்ளடக்கம்]`,
    },
    date: '11 Oct 2026',
    datetime: '2026-10-11',
    readTime: { en: '3 min read', ta: '3 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] Humanoid research robot in a laboratory',
    featured: false,
  },
  {
    id: 7,
    category: 'business',
    categoryLabel: { en: 'Business', ta: 'வணிகம்' },
    badgeClass: 'cat-business',
    title: {
      en: 'Central Banks Signal Coordinated Policy Approach for Q4 [DEMO]',
      ta: 'மத்திய வங்கிகள் Q4-க்கான ஒருங்கிணைந்த கொள்கை அணுகுமுறையை சமிக்ஞை செய்தன [மாதிரி]',
    },
    summary: {
      en: 'Representatives from G7 central banks issued a coordinated statement emphasizing synchronized monetary policy adjustments to address shared inflationary pressures. [DEMO]',
      ta: 'G7 மத்திய வங்கிகளின் பிரதிநிதிகள் பணவீக்க அழுத்தங்களை நிவர்த்திக்க ஒருங்கிணைந்த அறிக்கையை வெளியிட்டனர். [மாதிரி]',
    },
    body: {
      en: `Representatives from G7 central banks issued a coordinated statement emphasizing synchronized monetary policy adjustments to address shared inflationary pressures and ensure financial stability heading into Q4.

The statement, unusually precise by historical standards, indicated that rate decisions in coming months would be closely calibrated across jurisdictions to avoid disruptive capital flows. Currency strategists noted this as the most explicit coordination signal in several years.

Emerging market nations expressed both support for the stability signal and concern about the secondary effects of synchronized tightening on their capital markets.

[DEMO CONTENT — Sample article. Not real financial information.]`,
      ta: `G7 மத்திய வங்கிகள் ஒருங்கிணைந்த அறிக்கையை வெளியிட்டன. [மாதிரி உள்ளடக்கம்]`,
    },
    date: '11 Oct 2026',
    datetime: '2026-10-11',
    readTime: { en: '4 min read', ta: '4 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] Business analytics displayed on a laptop',
    featured: false,
  },
  {
    id: 8,
    category: 'science',
    categoryLabel: { en: 'Science', ta: 'அறிவியல்' },
    badgeClass: 'cat-science',
    title: {
      en: 'Deep-Sea Expedition Discovers Novel Bioluminescent Species [DEMO]',
      ta: 'ஆழ்கடல் பயணம் புதிய ஜீவஒளி உடைய உயிரினங்களை கண்டறிந்தது [மாதிரி]',
    },
    summary: {
      en: 'Marine biologists documented over forty previously unclassified species during a six-week deep-sea survey, including organisms adapted to extreme pressure environments. [DEMO]',
      ta: 'கடல் உயிரியலாளர்கள் ஆறு வார ஆழ்கடல் ஆய்வின் போது 40-க்கும் மேற்பட்ட புதிய உயிரினங்களை ஆவணப்படுத்தினர். [மாதிரி]',
    },
    body: {
      en: `Marine biologists from an international research vessel documented over forty previously unclassified species during a six-week deep-sea survey of an unexplored hydrothermal vent field.

Among the discoveries were several bioluminescent organisms and filter feeders adapted to extreme pressure and chemical environments found only at these vents. The expedition used advanced remotely operated vehicles to reach depths exceeding 4,000 meters.

The specimens collected will undergo genetic analysis to determine their evolutionary relationships to known species. Researchers expect the findings to provide insights into the adaptability of life in extreme environments.

[DEMO CONTENT — Sample article. Not verified scientific reporting.]`,
      ta: `ஆழ்கடல் ஆய்வில் 40-க்கும் மேற்பட்ட புதிய உயிரினங்கள் கண்டறியப்பட்டன. [மாதிரி உள்ளடக்கம்]`,
    },
    date: '10 Oct 2026',
    datetime: '2026-10-10',
    readTime: { en: '4 min read', ta: '4 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] Deep blue ocean seen from above',
    featured: false,
  },
  {
    id: 9,
    category: 'sports',
    categoryLabel: { en: 'Sports', ta: 'விளையாட்டு' },
    badgeClass: 'cat-sports',
    title: {
      en: 'International Cricket: India Posts Record Score in 3rd ODI [DEMO]',
      ta: 'சர்வதேச கிரிக்கெட்: இந்தியா 3வது ODI-யில் சாதனை மதிப்பெண் [மாதிரி]',
    },
    summary: {
      en: 'India posted a commanding 287/6 in the third One-Day International, with a century partnership anchoring the innings. Australia begin their chase in a must-win encounter. [DEMO]',
      ta: 'மூன்றாவது ODI-யில் இந்தியா 287/6 என சாதனை மதிப்பெண் பதிவு செய்தது. ஆஸ்திரேலியா துரத்தல் தொடங்கியது. [மாதிரி]',
    },
    body: {
      en: `India posted a commanding 287/6 in 50 overs in the third One-Day International against Australia, setting up a must-win encounter for the visiting side in the series decider.

A century partnership between the middle order anchored the innings after an early wobble that saw two quick wickets. The pitch offered variable bounce but the Indian batters adapted well to the conditions.

Australia face a challenging chase in conditions that have historically suited spin bowling. The series stands level at one win apiece following this third match.

[DEMO CONTENT — Sample sports article. Not real match data.]`,
      ta: `இந்தியா 50 ஓவர்களில் 287/6 பதிவு செய்தது. [மாதிரி உள்ளடக்கம்]`,
    },
    date: '12 Oct 2026',
    datetime: '2026-10-12',
    readTime: { en: '3 min read', ta: '3 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] Cricket stadium during a match',
    featured: false,
  },
  {
    id: 10,
    category: 'sports',
    categoryLabel: { en: 'Sports', ta: 'விளையாட்டு' },
    badgeClass: 'cat-sports',
    title: {
      en: 'El Clásico: Barcelona Lead 2–1 at 72 Minutes [DEMO]',
      ta: 'எல் கிளாசிக்கோ: 72 நிமிடத்தில் பார்சிலோனா 2–1 முன்னணி [மாதிரி]',
    },
    summary: {
      en: 'Barcelona hold a narrow lead over Real Madrid at the Nou Camp in a tightly contested fixture. A late equalizer attempt by Madrid was denied by a remarkable save. [DEMO]',
      ta: 'நூ கேம்பில் பார்சிலோனா ரியல் மாட்ரிட்டை விட சிறிய முன்னிலையில் உள்ளது. [மாதிரி]',
    },
    body: {
      en: `Barcelona hold a narrow 2–1 lead over Real Madrid with eighteen minutes remaining in an enthralling El Clásico at the Nou Camp. The match has seen end-to-end action with both goalkeepers making key interventions.

Barcelona's second goal, a well-executed set piece converted by their striker, gave the home side the advantage after Madrid's equalizer threatened to swing momentum. A late attempt by Madrid's forward was denied by a remarkable fingertip save.

Both managers have made tactical adjustments in the second half, and additional time promises a tense conclusion.

[DEMO CONTENT — Sample sports article. Not real match data.]`,
      ta: `பார்சிலோனா 2-1 முன்னணியில் உள்ளது. [மாதிரி உள்ளடக்கம்]`,
    },
    date: '12 Oct 2026',
    datetime: '2026-10-12',
    readTime: { en: '2 min read', ta: '2 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] Football on a pitch before a match',
    featured: false,
  },
  {
    id: 11,
    category: 'world',
    categoryLabel: { en: 'World', ta: 'உலகம்' },
    badgeClass: 'cat-world',
    title: {
      en: 'International Aid Organizations Scale Operations in Disaster-Affected Region [DEMO]',
      ta: 'பேரிடர் பாதித்த பகுதியில் சர்வதேச உதவி நிறுவனங்கள் செயல்பாடுகளை விரிவாக்குகின்றன [மாதிரி]',
    },
    summary: {
      en: 'Multiple humanitarian organizations have mobilized emergency response teams and supplies to an area affected by severe flooding, with access routes reopening gradually. [DEMO]',
      ta: 'பல மனிதாபிமான நிறுவனங்கள் கடுமையான வெள்ளத்தால் பாதிக்கப்பட்ட பகுதிக்கு அவசர குழுக்களை அனுப்பியுள்ளன. [மாதிரி]',
    },
    body: {
      en: `Multiple humanitarian organizations have mobilized emergency response teams and supplies to an area affected by severe seasonal flooding. Estimates suggest several hundred thousand residents require immediate assistance with clean water, shelter, and medical care.

Access routes that were severed by the flooding are gradually reopening as water levels recede, enabling the delivery of relief materials. Coordination centers have been established by several major international NGOs working with local authorities.

Long-term recovery planning has begun, focusing on infrastructure rehabilitation and flood mitigation measures.

[DEMO CONTENT — Sample article. Not verified reporting.]`,
      ta: `பேரிடர் பகுதியில் சர்வதேச உதவி நிறுவனங்கள் செயல்படுகின்றன. [மாதிரி உள்ளடக்கம்]`,
    },
    date: '11 Oct 2026',
    datetime: '2026-10-11',
    readTime: { en: '3 min read', ta: '3 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] Floodwater moving through an urban area',
    featured: false,
  },
  {
    id: 12,
    category: 'tech',
    categoryLabel: { en: 'Technology', ta: 'தொழில்நுட்பம்' },
    badgeClass: 'cat-tech',
    title: {
      en: 'Next-Generation Satellite Internet Constellation Completes Deployment Phase [DEMO]',
      ta: 'அடுத்த தலைமுறை செயற்கைக்கோள் இணைய நட்சத்திரக் கூட்டம் வரிசைப்படுத்தல் முடிந்தது [மாதிரி]',
    },
    summary: {
      en: 'A major satellite internet provider confirmed the completion of its initial constellation deployment, enabling global broadband coverage including remote and rural areas. [DEMO]',
      ta: 'ஒரு பெரிய செயற்கைக்கோள் இணைய வழங்குநர் ஆரம்ப நட்சத்திரக் கூட்ட வரிசைப்படுத்தல் முடிவடைந்ததை உறுதிப்படுத்தியது. [மாதிரி]',
    },
    body: {
      en: `A major satellite internet provider confirmed the completion of its initial constellation deployment phase, enabling broadband internet coverage across the globe including remote polar and oceanic regions.

Service availability will be rolled out incrementally by region over the next several months. The provider claims latency suitable for video conferencing and standard consumer applications, though independent testing has not yet been published.

Regulatory approvals for the constellation remain pending in several jurisdictions, and the provider is engaged in ongoing discussions with national telecommunications authorities.

[DEMO CONTENT — Sample article. Not verified reporting.]`,
      ta: `செயற்கைக்கோள் இணைய நட்சத்திரக் கூட்டம் வரிசைப்படுத்தல் முடிந்தது. [மாதிரி உள்ளடக்கம்]`,
    },
    date: '10 Oct 2026',
    datetime: '2026-10-10',
    readTime: { en: '3 min read', ta: '3 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] Earth viewed from orbit',
    featured: false,
  },
  {
    id: 13,
    category: 'politics',
    categoryLabel: { en: 'Politics', ta: 'அரசியல்' },
    badgeClass: 'cat-politics',
    title: {
      en: 'Parliamentary Delegations Open Talks on a Shared Digital Charter [DEMO]',
      ta: 'பொதுவான டிஜிட்டல் சாசனம் குறித்து நாடாளுமன்றக் குழுக்கள் பேச்சுவார்த்தை தொடங்கின [மாதிரி]',
    },
    summary: {
      en: 'Lawmakers from several regions began a sample round of talks on digital rights, public transparency and cross-border cooperation. [DEMO]',
      ta: 'டிஜிட்டல் உரிமைகள், வெளிப்படைத்தன்மை மற்றும் எல்லை தாண்டிய ஒத்துழைப்பு குறித்து பல பிராந்தியங்களின் சட்டமன்ற உறுப்பினர்கள் மாதிரி பேச்சுவார்த்தையைத் தொடங்கினர். [மாதிரி]',
    },
    body: {
      en: `Parliamentary delegations from several regions opened a sample round of talks on a shared digital charter, with an agenda covering individual rights, public transparency and cross-border cooperation.

The fictional framework outlined in this demonstration includes proposals for public consultation, independent review and periodic reporting. Delegates are shown considering how national legislation might address common questions without limiting local debate.

[DEMO CONTENT — This is fictional sample text for demonstration purposes. It does not describe a real meeting or verified political reporting.]`,
      ta: `பல பிராந்தியங்களின் நாடாளுமன்றக் குழுக்கள் டிஜிட்டல் உரிமைகள், வெளிப்படைத்தன்மை மற்றும் ஒத்துழைப்பு குறித்து மாதிரி பேச்சுவார்த்தையைத் தொடங்கின.

[மாதிரி உள்ளடக்கம் — இது ஆர்ப்பாட்டத்திற்கான கற்பனை உரை. உண்மையான கூட்டத்தை விவரிக்கவில்லை.]`,
    },
    date: '12 Oct 2026',
    datetime: '2026-10-12',
    readTime: { en: '3 min read', ta: '3 நிமிட வாசிப்பு' },
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80',
    imageAlt: '[Demo image] Legislative chamber during a parliamentary session',
    featured: false,
  },
];

// ── Horoscope data (12 Rasi) ─────────────────────────────────
const HOROSCOPE_DATA = [
  {
    id: 'aries',
    symbol: '♈',
    nameEn: 'Aries',
    nameTa: 'மேஷம்',
    dateRange: 'Mar 21 – Apr 19',
    predictionEn: 'New opportunities arise in your professional sphere. Trust your instincts and act decisively. Financial outlook is positive. [DEMO]',
    predictionTa: 'உங்கள் தொழில் துறையில் புதிய வாய்ப்புகள் எழுகின்றன. உங்கள் உள்ளுணர்வை நம்புங்கள். நிதி நிலைமை நேர்மறையாக உள்ளது. [மாதிரி]',
    stars: 4,
    color: '#e8523a',
  },
  {
    id: 'taurus',
    symbol: '♉',
    nameEn: 'Taurus',
    nameTa: 'ரிஷபம்',
    dateRange: 'Apr 20 – May 20',
    predictionEn: 'Focus on personal relationships and self-care today. Avoid hasty decisions in financial matters. Creativity is at a peak. [DEMO]',
    predictionTa: 'இன்று தனிப்பட்ட உறவுகள் மற்றும் சுய பராமரிப்பில் கவனம் செலுத்துங்கள். நிதி விஷயங்களில் அவசர முடிவுகளை தவிர்க்கவும். [மாதிரி]',
    stars: 3,
    color: '#4e9b52',
  },
  {
    id: 'gemini',
    symbol: '♊',
    nameEn: 'Gemini',
    nameTa: 'மிதுனம்',
    dateRange: 'May 21 – Jun 20',
    predictionEn: 'Communication is your strength today. Engage in meaningful conversations and collaborative projects. Travel plans look promising. [DEMO]',
    predictionTa: 'இன்று தொடர்பு உங்கள் பலம். அர்த்தமுள்ள உரையாடல்கள் மற்றும் கூட்டுறவு திட்டங்களில் ஈடுபடுங்கள். [மாதிரி]',
    stars: 5,
    color: '#e0c046',
  },
  {
    id: 'cancer',
    symbol: '♋',
    nameEn: 'Cancer',
    nameTa: 'கடகம்',
    dateRange: 'Jun 21 – Jul 22',
    predictionEn: 'Home and family matters take priority. Emotional balance comes from setting clear boundaries. Health looks favorable. [DEMO]',
    predictionTa: 'வீடு மற்றும் குடும்ப விஷயங்கள் முன்னுரிமை பெறுகின்றன. தெளிவான எல்லைகளை அமைப்பதன் மூலம் உணர்ச்சி சமநிலை கிடைக்கும். [மாதிரி]',
    stars: 4,
    color: '#60a0d8',
  },
  {
    id: 'leo',
    symbol: '♌',
    nameEn: 'Leo',
    nameTa: 'சிம்மம்',
    dateRange: 'Jul 23 – Aug 22',
    predictionEn: 'Leadership opportunities shine. Your confidence inspires others. Romantic prospects are highlighted. Financial caution advised. [DEMO]',
    predictionTa: 'தலைமை வாய்ப்புகள் பிரகாசிக்கின்றன. உங்கள் நம்பிக்கை மற்றவர்களை ஈர்க்கிறது. ஆர்வமான வாய்ப்புகள் முன்னிலைப்படுத்தப்பட்டுள்ளன. [மாதிரி]',
    stars: 5,
    color: '#e8a832',
  },
  {
    id: 'virgo',
    symbol: '♍',
    nameEn: 'Virgo',
    nameTa: 'கன்னி',
    dateRange: 'Aug 23 – Sep 22',
    predictionEn: 'Detail-oriented work yields results today. Health routines benefit from attention. Avoid overthinking social situations. [DEMO]',
    predictionTa: 'இன்று விரிவான வேலை முடிவுகளை தருகிறது. உடல்நல நடைமுறைகளுக்கு கவனம் செலுத்துங்கள். [மாதிரி]',
    stars: 3,
    color: '#6ba87e',
  },
  {
    id: 'libra',
    symbol: '♎',
    nameEn: 'Libra',
    nameTa: 'துலாம்',
    dateRange: 'Sep 23 – Oct 22',
    predictionEn: 'Balance and harmony are your guiding themes. Negotiations and partnerships favor your side. Creative energy is high. [DEMO]',
    predictionTa: 'சமநிலை மற்றும் நல்லிணக்கம் உங்கள் வழிகாட்டும் கருப்பொருள்கள். பேச்சுவார்த்தைகள் மற்றும் கூட்டாண்மைகள் உங்களுக்கு சாதகமாக இருக்கும். [மாதிரி]',
    stars: 4,
    color: '#b07ade',
  },
  {
    id: 'scorpio',
    symbol: '♏',
    nameEn: 'Scorpio',
    nameTa: 'விருச்சிகம்',
    dateRange: 'Oct 23 – Nov 21',
    predictionEn: 'Deep insights guide your path today. Transformation is at work. Trust processes even when they feel slow. Finances improve. [DEMO]',
    predictionTa: 'ஆழமான நுண்ணறிவு இன்று உங்கள் பாதையை வழிநடத்துகிறது. மாற்றம் செயல்பாட்டில் உள்ளது. [மாதிரி]',
    stars: 4,
    color: '#c8423a',
  },
  {
    id: 'sagittarius',
    symbol: '♐',
    nameEn: 'Sagittarius',
    nameTa: 'தனுசு',
    dateRange: 'Nov 22 – Dec 21',
    predictionEn: 'Adventure calls but proceed with measured enthusiasm. Learning and growth are highlighted. Social connections open new doors. [DEMO]',
    predictionTa: 'சாகசம் அழைக்கிறது, ஆனால் அளவான உற்சாகத்துடன் முன்னேறுங்கள். கற்றல் மற்றும் வளர்ச்சி முன்னிலைப்படுத்தப்பட்டுள்ளன. [மாதிரி]',
    stars: 5,
    color: '#e8783a',
  },
  {
    id: 'capricorn',
    symbol: '♑',
    nameEn: 'Capricorn',
    nameTa: 'மகரம்',
    dateRange: 'Dec 22 – Jan 19',
    predictionEn: 'Discipline and persistence pay dividends. Career advancement is well-aspected. Tend to your health and relationships equally. [DEMO]',
    predictionTa: 'ஒழுக்கம் மற்றும் விடாமுயற்சி பலன் தரும். தொழில் வளர்ச்சி நன்மதிப்பில் உள்ளது. [மாதிரி]',
    stars: 4,
    color: '#5a8ab8',
  },
  {
    id: 'aquarius',
    symbol: '♒',
    nameEn: 'Aquarius',
    nameTa: 'கும்பம்',
    dateRange: 'Jan 20 – Feb 18',
    predictionEn: 'Innovation and community stand out. Your ideas attract interest from unexpected quarters. Financial prudence is advised. [DEMO]',
    predictionTa: 'நூதனமான கருத்துக்கள் கவனத்தை ஈர்க்கின்றன. சமூகம் முன்னிலை பெறுகிறது. நிதி விவேகம் பரிந்துரைக்கப்படுகிறது. [மாதிரி]',
    stars: 3,
    color: '#4a9ec8',
  },
  {
    id: 'pisces',
    symbol: '♓',
    nameEn: 'Pisces',
    nameTa: 'மீனம்',
    dateRange: 'Feb 19 – Mar 20',
    predictionEn: 'Spiritual and artistic energies are heightened. Trust your intuition in relationships. Financial matters benefit from practical planning. [DEMO]',
    predictionTa: 'ஆன்மீக மற்றும் கலை சக்திகள் அதிகரிக்கின்றன. உறவுகளில் உங்கள் உள்ளுணர்வை நம்புங்கள். [மாதிரி]',
    stars: 4,
    color: '#7a6ab8',
  },
];

// Export for use in script.js
if (typeof module !== 'undefined') {
  module.exports = { TICKER_HEADLINES, NEWS_ARTICLES, HOROSCOPE_DATA };
}
