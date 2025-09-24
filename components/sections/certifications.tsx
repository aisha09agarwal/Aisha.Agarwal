import React from "react";

export function Certifications() {
  const certifications = [
    {
      title: "Data Structures in JAVA",
      issuer: "Coding Ninjas",
      year: "2022",
      link: "https://certificate.codingninjas.com/view/11f1eff9687f74e3"
    }
  ];

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border rounded-xl shadow hover:shadow-lg transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-sm text-gray-500">{cert.issuer}</p>
            <p className="text-sm text-gray-400">{cert.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
