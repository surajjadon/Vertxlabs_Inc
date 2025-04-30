// src/data/users.js
export const users = [
    {
      id: 1,
      name: "Mr A",
      avatar: "/images/profile.png",
      title: "Co-Founder & CEO @Vertx",
      verified: true,
      tag: "Entrepreneur",
      socialLinks: {
        linkedin: "https://linkedin.com/in/mra",
        twitter: "https://twitter.com/mra",
        email: "mailto:mra@example.com"
      },
      foundedCompanies: [
        {
          id: 1,
          name: "Vertx",
          logo: "/images/vertx-logo.png",
          tag: "Web3",
          foundedYear: "2025",
          industry: "Fintech"
        },
        {
          id: 2,
          name: "Company X",
          logo: "/images/company-logo.png",
          tag: "PROPRIETOR",
          details: "Details/Information",
          acquired: "like acquired/exit/m&a"
        }
      ],
      experience: [
        { id: 1, name: "Company 1", logo: "/images/company1.png" },
        { id: 2, name: "Company 2", logo: "/images/company2.png" },
        { id: 3, name: "Company 3", logo: "/images/company3.png" }
      ]
    },
    // Add more users here
  ];
  
  export const getUserById = (id) => {
    return users.find(user => user.id === parseInt(id)) || null;
  };
  