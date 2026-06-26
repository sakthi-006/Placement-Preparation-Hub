function Companies() {

  const companies = [
    { name: "TCS", progress: "90%" },
    { name: "Infosys", progress: "85%" },
    { name: "Wipro", progress: "80%" },
    { name: "Cognizant", progress: "75%" },
    { name: "Capgemini", progress: "70%" },
    { name: "Deloitte", progress: "65%" },
  ];

  return (
    <section className="companies" id="Companies">

      <h2>Top Companies Preparation</h2>

      <div className="company-grid">

        {companies.map((company,index)=>(
          <div className="company-card" key={index}>

            <h3>{company.name}</h3>

            <p>Preparation Level</p>

            <h1>{company.progress}</h1>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Companies;