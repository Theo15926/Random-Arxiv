document.addEventListener('DOMContentLoaded', function() {
  const fieldSelect = document.getElementById("field");
  const categorySelect = document.getElementById("category");
  const fetchBtn = document.getElementById("fetchBtn");
  const resultDiv = document.getElementById("result");

  // Category mapping
  const CATEGORIES = {
    
cs: {
  "cs.AI": "Artificial Intelligence",
  "cs.LG": "Machine Learning",
  "cs.MA": "Multiagent Systems",
  "cs.NE": "Neural and Evolutionary Computing",
  "cs.RO": "Robotics",

  "cs.CC": "Computational Complexity",
  "cs.DM": "Discrete Mathematics",
  "cs.FL": "Formal Languages and Automata Theory",
  "cs.IT": "Information Theory",
  "cs.LO": "Logic in Computer Science",
  "cs.PL": "Programming Languages",
  "cs.SC": "Symbolic Computation",
  "cs.GT": "Computer Science and Game Theory",

  "cs.AR": "Hardware Architecture",
  "cs.DC": "Distributed, Parallel, and Cluster Computing",
  "cs.NI": "Networking and Internet Architecture",
  "cs.OS": "Operating Systems",
  "cs.PF": "Performance",
  "cs.SY": "Systems and Control",

  "cs.DB": "Databases",
  "cs.DL": "Digital Libraries",
  "cs.IR": "Information Retrieval",
  "cs.SI": "Social and Information Networks",

  "cs.CV": "Computer Vision and Pattern Recognition",
  "cs.CG": "Computational Geometry",
  "cs.GR": "Graphics",
  "cs.MM": "Multimedia",
  "cs.SD": "Sound",

  "cs.CY": "Computers and Society",
  "cs.HC": "Human-Computer Interaction",

  "cs.CE": "Computational Engineering, Finance, and Science",
  "cs.SE": "Software Engineering",
  "cs.MS": "Mathematical Software",
  "cs.ET": "Emerging Technologies",

  "cs.GL": "General Literature",
  "cs.OH": "Other Computer Science"
    },
    
math: {
  "math.AG": "Algebraic Geometry",
  "math.AC": "Commutative Algebra",
  "math.GR": "Group Theory",
  "math.NT": "Number Theory",
  "math.QA": "Quantum Algebra",
  "math.RT": "Representation Theory",
  "math.RA": "Rings and Algebras",
  
  "math.AP": "Analysis of PDEs",
  "math.CA": "Classical Analysis and ODEs",
  "math.FA": "Functional Analysis",
  "math.SP": "Spectral Theory",
  "math.NA": "Numerical Analysis",
  
  "math.DG": "Differential Geometry",
  "math.GM": "General Mathematics",
  "math.GN": "General Topology",
  "math.GT": "Geometric Topology",
  "math.KT": "K-Theory and Homology",
  "math.MG": "Metric Geometry",
  "math.SG": "Symplectic Geometry",
  
  "math.LO": "Logic",
  "math.CT": "Category Theory",
  "math.IT": "Information Theory",
  "math.HO": "History and Overview",
  
  "math.PR": "Probability",
  "math.ST": "Statistics Theory",
  
  "math.MP": "Mathematical Physics",
  "math.OC": "Optimization and Control"
    },
    
physics: {
  "physics.acc-ph": "Accelerator Physics",
  "physics.app-ph": "Applied Physics",
  "physics.atm-clus": "Atomic and Molecular Clusters",
  "physics.atom-ph": "Atomic Physics",
  "physics.bio-ph": "Biological Physics",
  "physics.chem-ph": "Chemical Physics",
  "physics.class-ph": "Classical Physics",
  "physics.comp-ph": "Computational Physics",
  "physics.data-an": "Data Analysis, Statistics and Probability",
  "physics.ed-ph": "Physics Education",
  "physics.flu-dyn": "Fluid Dynamics",
  "physics.gen-ph": "General Physics",
  "physics.geo-ph": "Geophysics",
  "physics.hist-ph": "History and Philosophy of Physics",
  "physics.ins-det": "Instrumentation and Detectors",
  "physics.med-ph": "Medical Physics",
  "physics.optics": "Optics",
  "physics.plasm-ph": "Plasma Physics",
  "physics.pop-ph": "Popular Physics",
  "physics.soc-ph": "Physics and Society",
  "physics.space-ph": "Space Physics",

  "astro-ph.CO": "Cosmology and Nongalactic Astrophysics",
  "astro-ph.EP": "Earth and Planetary Astrophysics",
  "astro-ph.GA": "Astrophysics of Galaxies",
  "astro-ph.HE": "High Energy Astrophysical Phenomena",
  "astro-ph.IM": "Instrumentation and Methods for Astrophysics",
  "astro-ph.SR": "Solar and Stellar Astrophysics",

  "cond-mat.dis-nn": "Disordered Systems and Neural Networks",
  "cond-mat.mes-hall": "Mesoscopic Systems and Quantum Hall Effect",
  "cond-mat.mtrl-sci": "Materials Science",
  "cond-mat.quant-gas": "Quantum Gases",
  "cond-mat.soft": "Soft Condensed Matter",
  "cond-mat.stat-mech": "Statistical Mechanics",
  "cond-mat.str-el": "Strongly Correlated Electrons",
  "cond-mat.supr-con": "Superconductivity",
  "cond-mat.other": "Other Condensed Matter",

  "gr-qc": "General Relativity and Quantum Cosmology",

  "hep-ex": "High Energy Physics - Experiment",
  "hep-lat": "High Energy Physics - Lattice",
  "hep-ph": "High Energy Physics - Phenomenology",
  "hep-th": "High Energy Physics - Theory",

  "math-ph": "Mathematical Physics",

  "nlin.AO": "Adaptation and Self-Organizing Systems",
  "nlin.CD": "Chaotic Dynamics",
  "nlin.CG": "Cellular Automata and Lattice Gases",
  "nlin.PS": "Pattern Formation and Solitons",
  "nlin.SI": "Exactly Solvable and Integrable Systems",

  "nucl-ex": "Nuclear Experiment",
  "nucl-th": "Nuclear Theory",

  "quant-ph": "Quantum Physics"
    },
    
"q-bio": {
      "q-bio.BM": "Biomolecules",
      "q-bio.CB": "Cell Behavior",
      "q-bio.GN": "Genomics",
      "q-bio.MN": "Molecular Networks",
      "q-bio.NC": "Neurons and Cognition",
      "q-bio.OT": "Other Quantitative Biology",
      "q-bio.PE": "Populations and Evolution",
      "q-bio.QM": "Quantitative Methods",
      "q-bio.SC": "Subcellular Processes",
      "q-bio.TO": "Tissues and Organs"
    },
    
"q-fin": {
      "q-fin.CP": "Computational Finance",
      "q-fin.EC": "Economics",
      "q-fin.GN": "General Finance",
      "q-fin.MF": "Mathematical Finance",
      "q-fin.PM": "Portfolio Management",
      "q-fin.PR": "Pricing of Securities",
      "q-fin.RM": "Risk Management",
      "q-fin.ST": "Statistical Finance",
      "q-fin.TR": "Trading and Market Microstructure"
    },
    
stat: {
      "stat.AP": "Applications",
      "stat.CO": "Computation",
      "stat.ME": "Methodology",
      "stat.ML": "Machine Learning",
      "stat.TH": "Theory",
      "stat.OT": "Other Statistics"
    },
    
econ: {
      "econ.EM": "Econometrics",
      "econ.GM": "General Economics",
      "econ.TH": "Theoretical Economics"
    },
    
eess: {
      "eess.AS": "Audio and Speech Processing",
      "eess.IV": "Image and Video Processing",
      "eess.SP": "Signal Processing",
      "eess.SY": "Systems and Control"
    },
  };

  // Called when a field is selected
  function updateCategories() {
    const selectedField = fieldSelect.value;
    const categoryMap = CATEGORIES[selectedField];

    // Clear old options
    categorySelect.innerHTML = "";

    if (!categoryMap) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "No categories available";
      option.disabled = true;
      option.selected = true;
      categorySelect.appendChild(option);
      return;
    }

    const anyOption = document.createElement("option");
    anyOption.value = "all";
    anyOption.textContent = "Any category";
    categorySelect.appendChild(anyOption);

    // Populate new options
    for (const [value, label] of Object.entries(categoryMap)) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      categorySelect.appendChild(option);
    }
  }

  // Helper function to format the date
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  // Helper function to safely escape HTML
  function escapeHTML(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Loading indicator
  function showLoading() {
    resultDiv.innerHTML = '<p class="loading">Loading paper... <br>This may take a moment.</p>';
  }

  // Fetch and display a random paper
  async function fetchRandomPaper() {
    const field = fieldSelect.value;
    const category = categorySelect.value;

    if (category === "all") {
      // Use the field for broader search
      showLoading();
      fetchPapersByField(field);
    } else if (category) {
      // Use specific category
      showLoading();
      fetchPapersByCategory(category);
    } else {
      resultDiv.innerHTML = "<p>Please select a category.</p>";
    }
  }

  // Fetch papers by specific category
  async function fetchPapersByCategory(category) {
    const apiURL = `https://export.arxiv.org/api/query?search_query=cat:${category}&sortBy=submittedDate&max_results=200`;
    fetchPapers(apiURL);
  }

  // Fetch papers by field (more general)
  async function fetchPapersByField(field) {
    const apiURL = `https://export.arxiv.org/api/query?search_query=cat:${field}.*&sortBy=submittedDate&max_results=2000`;
    fetchPapers(apiURL);
  }

  // Generic function to fetch papers from arXiv API
  async function fetchPapers(apiURL) {
    try {
      const response = await fetch(apiURL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlText, "application/xml");
      
      // Parser errors
      const parserError = xml.querySelector("parsererror");
      if (parserError) {
        throw new Error("XML parsing error");
      }

      const entries = Array.from(xml.getElementsByTagName("entry"));

      if (!entries || entries.length === 0) {
        resultDiv.innerHTML = "<p>No papers found in this category.</p>";
        return;
      }

      // Select a random paper from the results
      const randomIndex = Math.floor(Math.random() * entries.length);
      const entry = entries[randomIndex];
      
      // Paper details
      const title = entry.querySelector("title")?.textContent.trim() || "No title available";
      const summary = entry.querySelector("summary")?.textContent.trim() || "No summary available";
      const link = entry.querySelector("id")?.textContent || "#";
      const published = entry.querySelector("published")?.textContent || "";
      
      // Authors
      const authorNodes = entry.querySelectorAll("author name");
      const authors = Array.from(authorNodes).map(node => node.textContent).join(", ");
      
      // Display the paper
      const formattedDate = published ? formatDate(published) : "Unknown date";
      
      resultDiv.innerHTML = `
        <h2>${escapeHTML(title)}</h2>
        <div class="authors">Authors: ${escapeHTML(authors)}</div>
        <div class="date">Published: ${formattedDate}</div>
        <p>${escapeHTML(summary)}</p>
        <a href="${escapeHTML(link)}" target="_blank" rel="noopener noreferrer">Read on arXiv</a>
      `;
      
      // Typeset the math in the result div after setting the content
      if (window.MathJax) {
        window.MathJax.typeset([resultDiv]);
      }
    } catch (error) {
      console.error("Error fetching papers:", error);
      resultDiv.innerHTML = `
        <p>Error fetching paper: ${error.message}</p>
        <p>This might be due to network issues. Try:</p>
        <ul>
          <li>Checking your internet connection (e.g., Live Server in VSCode)</li>
          <li>Checking if arXiv is down</li>
        </ul>
      `;
    }
  }

  // Event listeners
  fieldSelect.addEventListener("change", updateCategories);
  fetchBtn.addEventListener("click", fetchRandomPaper);

  // Initialize the category list when the page loads
  updateCategories();
});