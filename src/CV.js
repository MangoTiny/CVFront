import React from 'react';

export default function CV () {
  const data = {
    "phone_number": "+447534676372",
    "website": "https://google.com",
    "profile_image": "base_64",
    "full_name": "Jack O",
    "position": "Aftersales Representative",
    "summary": "Outgoing and detail-oriented Aftersales Representative experienced in luxury brand customer service. Skilled in repair management, client engagement, and administration tasks.",
    "skills": [
      "Customer engagement",
      "Repair management",
      "Product knowledge",
      "Problem-solving",
      "Communication",
      "Attention to detail",
      "Time management"
    ],
    "interests": [
      "Luxury leather products",
      "Costume jewellery goods",
      "Continuous learning"
    ],
    "education": [
      {
        "year": "2022",
        "title": "Diploma in Luxury Brand Management",
        "summary": "London School of Fashion"
      },
      {
        "year": "2021",
        "title": "Certificate in Customer Service Excellence",
        "summary": "Customer Service Institute"
      },
      {
        "year": "2020",
        "title": "High School Diploma",
        "summary": "London Central High School"
      }
    ],
    "work_history": [
      {
        "date": "2022 - Present",
        "title": "Aftersales Representative",
        "company": "Elegance Group",
        "summary": "Manage repair requests, engage with clients, and ensure timely completion of repairs. Collaborate with various teams for seamless aftersales operations.",
        "bullet_points": [
          "Facilitate repair requests and provide exceptional service to clients.",
          "Coordinate with repair workshops and manage repair logistics.",
          "Maintain accurate records of repair progress and provide timely updates to clients.",
          "Cultivate strong customer relationships and address any queries or concerns.",
          "Collaborate with internal teams to resolve client complaints and ensure customer satisfaction."
        ]
      },
      {
        "date": "2021 - 2022",
        "title": "Customer Service Associate",
        "company": "Global Luxury Brands",
        "summary": "Provided personalized customer service, handled product inquiries, and processed sales transactions for luxury goods.",
        "bullet_points": [
          "Delivered exceptional customer service and addressed product inquiries.",
          "Assisted clients with product selection and made personalized recommendations.",
          "Processed sales transactions accurately and efficiently.",
          "Handled customer complaints and resolved issues to ensure customer satisfaction.",
          "Maintained product knowledge and kept up-to-date with new releases and promotions."
        ]
      },
      {
        "date": "2020 - 2021",
        "title": "Retail Sales Assistant",
        "company": "Premium Boutique",
        "summary": "Assisted customers in a luxury retail environment, provided styling advice, and ensured an exceptional shopping experience.",
        "bullet_points": [
          "Welcomed and engaged customers, assisting with product selection and styling advice.",
          "Provided in-depth product knowledge and recommendations based on customer preferences.",
          "Maintained visual merchandising standards to showcase products effectively.",
          "Handled cash transactions and maintained accurate sales records.",
          "Built rapport with customers and fostered long-term relationships."
        ]
      }
    ]
  };
   return (
    <div>
      <h1>{data.full_name}</h1>
      <p>{data.position}</p>
      <p>{data.summary}</p>
       <h2>Contact Information</h2>
      <p>Phone Number: {data.phone_number}</p>
      <p>Website: <a href={data.website}>{data.website}</a></p>
       <h2>Skills</h2>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
       <h2>Interests</h2>
      <ul>
        {data.interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
       <h2>Education</h2>
      {data.education.map((education, index) => (
        <div key={index}>
          <h3>{education.year}</h3>
          <p>{education.title}</p>
          <p>{education.summary}</p>
        </div>
      ))}
       <h2>Work History</h2>
      {data.work_history.map((job, index) => (
        <div key={index}>
          <h3>{job.date}</h3>
          <p>{job.title} at {job.company}</p>
          <p>{job.summary}</p>
          <ul>
            {job.bullet_points.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
