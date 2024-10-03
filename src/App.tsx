import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { saveAs } from "file-saver"; // Import FileSaver

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create the LaTeX string
    const latexContent = `\\documentclass[letterpaper,10pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}

\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\raggedbottom
\\raggedright

\\begin{document}

\\begin{center}
\\textbf{\\Huge \\scshape ${name}} \\\\
\\vspace{1pt}
\\small (${phone}) $|$ \\href{mailto:your.email@example.com}{\\underline{your.email@example.com}} $|$ 
\\href{https://www.linkedin.com/in/your-linkedin/}{www.linkedin.com/in/your-linkedin/} $|$
\\href{https://github.com/your-github}{github.com/your-github}
\\end{center}

\\end{document}`;

    // Create a Blob and save it
    const blob = new Blob([latexContent], {
      type: "text/x-latex;charset=utf-8",
    });
    saveAs(blob, "resume.tex");

    // Reset form values
    setName("");
    setPhone("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
