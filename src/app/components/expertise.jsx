import { HoverEffect } from "../../components/ui/card-hover-effect";

export function Expertise() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-8">
     <div className="w-[90%] flex flex-col items-center">
        <div>
            <h1 className="text-align text-black text-4xl font-bold mt-10">Our Expertise</h1>
        </div>
     <HoverEffect items={projects} />
     </div>
    </div>
  );
}
export const projects = [
  {
    title: "Program Management",
    description:
      "We enable institutions and communities to implement development and humanitarian projects. We ensure timely delivery, within scope, budget, and quality standards while fostering learning and growth and achieving maximum impact. We support organizations in all phases of the project life cycle.",
  
  },
  {
    title: "Policy Influencing and Advocacy",
    description:
      "We work with communities and stakeholders including those affected by certain policy issues to identify and drive effective strategies to get policies enacted or reviewed.",
 
  },
  {
    title: "Project Design and Strategy Development",
    description:
      "We support donors and development partners with full suite of services to co-create responsive, locally relevant development projects and programs. We also support strategy development for populations and organizations in the development sector. ",
    
  },
  {
    title: "Development Of Tools And Manuals",
    description:
      "We bring expertise to help organizations and communities develop and adapt tools and resources using participatory methodologies.",
  
  },
  {
    title: "Organizational Capacity Development",
    description:
      "We facilitate organizations to assess, develop and implement organizational capacity strengthening initiatives using diverse and multiple approaches including training, coaching, embedded or short-term technical assistance and peer to peer and learning exchange activities.",

  },
  {
    title: "Health Systems Strengthening",
    description:
      "We bring extensive local knowledge of health systems and global best practices to support the development, implementation and evaluation of health systems strengthening interventions across the domains of leadership, management, and governance, service delivery, human resources for health, health financing and health management information and data systems.",
  
  },
  {
    title: "Partnership/Grants Management",
    description:
      "We connect organizations with likeminded stakeholders and foster synergistic relationships building on our deep global regional and national networks and connections and our multi-decade experience in fostering such partnerships and managing grants.",

  },
  // {
  //   title: "Values-based Leadership Development",
  //   description:
  //     "We help organization and leaders to enhance their capacity to scan and respond to challenges and opportunities, mobilize, and align their teams and stakeholders to a shared purpose and drive lasting, inclusive change.",
  
  // },
  {
    title: "Values-based Leadership Development",
    description:
      "We help organizations and leaders to enhance their capacity to scan and respond to challenges and opportunities. We help them mobilize and align their teams and stakeholders to a shared purpose and to drive lasting, inclusive, values-based change.",
  
  },
];
