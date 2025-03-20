export default function Servico() {
    const services = [
      {
        id: 1,
        title: "Web Design UX/UI",
        description: "Desenvolver designs de sites que sejam visualmente impactantes e intuitivos.",
      },
      {
        id: 2,
        title: "Frontend Development",
        description: "Elaborando interfaces que se ajustam a diferentes dispositivos e promovem a interatividade.",
      },
      {
        id: 3,
        title: "Full-Stack Development",
        description: "Combinando habilidades de desenvolvimento front-end e back-end.",
      },
    ];
  
    return (
     
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h1 className="uppercase gradienttext mt-8 font-semibold text-4xl text-center mb-12">
            Serviço
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#272727] px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4FAFF] to-[#54EAFF]">
                  {service.id}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4FAFF] to-[#54EAFF]">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      
    );
  }
  