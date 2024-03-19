"use client";
import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Jummy from "../../../public/images/jummy.png"
import Amina from "../../../public/images/aminach.png"
import Mai from "../../../public/images/mai.png"
import Ku from "../../../public/images/ku.png"
import Fati from "../../../public/images/fati.png"
import Mike from "../../../public/images/mike.png"
import Jega from "../../../public/images/jega.png"

const content = [
  {
    name: "Amina Bala Zakari",
    title: "Chair Board of Directors ",
    
    description:
      "Amina is pharmacist and a health and social sector development expert with a wealth of experience in policy/strategic development and program design, management, and evaluation. She is also a seasoned administrator and a subject matter expert in democracy and governance with 10 years of experience at various levels of the Independent National Electoral Commission where she served as national commissioner in charge operations and logistics (2016-2018) and health and welfare (2018-2019. She was the acting Chairperson of the commission from June 2015 and October 2015. Previously, she served as Secretary of Health and Human Services (2004-2006) and Secretary Social Development (2006-2007) in the Federal Capital Territory Administration. She was also Senior Consultant Health at Afri-project Consortium from 1997 to 2001. Hajiya Amina serves on several boards including the Albino Foundation of Nigeria and Reach Care Multi-Services Nigeria Ltd.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <Image
          src={Amina}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Olajumoke Azogu,',
    title: "Member Board of Directors",
    description:
      "Jumoke holds a Ph.D. (Information Science) with about 15 years in Monitoring and Evaluation of Public Health programs, 9 years of which involve technical and team leadership. Currently the MEL Director with Palladium International for the USAID Integrated Health Program (IHP), a $225M USAID Nigeria-funded Reproductive, Maternal, Newborn, Child Health and Nutrition, and Malaria (RMNCH+NM) program for Health Systems Strengthening and Health Financing, where she provides strategic guidance and technical leadership, vision and management, capacity strengthening for MEL activities, working with National and State partners.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Jummy}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Amina Ahmad K.U Nagogo',
    title: "Member Board of Directors",
    description:
      "Results-driven social entrepreneur with over 10 years working experience in development and management of digital health initiatives. She is the Founder and CEO of Datharm Nigeria Ltd, a company with a passion for developing tools for data driven decision making in the field of public health and education.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       <Image
          src={Ku}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Mohammad Farouk Jega',
    title: "Member Board of Directors, Senior Program Director",
    description:
      "Farouk is an obstetrics and gynecologist and project management expert with over 2 decades of clinical, managerial and leadership roles in the health and development sector. He had served as Country Director of Pathfinder International for Nigeria and Ghana from 2012 to 2020 and Senior Program Director/Regional Director from 2020 to 2022. He holds a medical degree from the University of Jos and a Master of Public Health from Liverpool School of Tropical Medicine.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Jega}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Fatima Jika',
    title: "Member Board of Directors",
    description:
      "Farouk is an obstetrics and gynecologist and project management expert with over 2 decades of clinical, managerial and leadership roles in the health and development sector. He had served as Country Director of Pathfinder International for Nigeria and Ghana from 2012 to 2020 and Senior Program Director/Regional Director from 2020 to 2022. He holds a medical degree from the University of Jos and a Master of Public Health from Liverpool School of Tropical Medicine.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Fati}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Mike Egboh',
    title: "Member Board of Directors",
    description:
      "A notable figure in the development sector in Nigeria and beyond with over 4 decades of leadership roles in the non-profit, global health and development sector. Mike was Country Director for Pathfinder International for close 2 decades. He also successfully led the PATH II project at the Project Director. More recently, he was the Country Director and Chief of Party for the Chemonics led Global Supply Chain project here in Nigeria. Mike currently mentors and coaches’ development leaders and organizations in the sub-region and globally. He holds a Master of Public Health from the Harvard University, School of public health. He is a recipient of various national and global awards including the prestigious alumni award of the Harvard School of Public Health and US president’s Volunteer Service Award.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Mike}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    name: 'Mohammad Murtala Mai',
    title: "CEO/Secretary, Board of Directors",
    description:
      "Experienced and strategic, international development leader with almost 3 decades of success in managing complex, expansive, global, health and development initiatives focused on improving health and quality of lives of women, young people, and their communities. Murtala spent 22 years in various leadership roles at Pathfinder International including Country Director Nigeria and Ghana (2008-2012), Senior Technical Director Best Practices (2012-2016), Regional Director (2016-2018), Chief of Country and Program Strategy (2018-2020), Chief of Programs (2020-2022) and Executive Vice President 2022-2023). Previously, he was a Senior Consultant at Afri-project Consortium from 1996 to 2000. He had served as Senior Special Assistant Health to the Governor of Adamawa State (2008-2009), and a member of the board of the National Primary Healthcare Development Agency (2008-2012). He holds a medical degree from Ahmadu Bello University and a Master of Public Health (MPH) and Business Administration (MBA) from the University of Maastricht, Netherlands and the Frankfurt School of Business and Finance respectively.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <Image
          src={Mai}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function Staff() {
  return (
    <div className="bg-[#0E1729] flex flex-col items-center">
          <div className="mt-5">
            <h1 className="text-align text-white text-4xl font-bold">Our Team</h1>
        </div>
      <div className="w-[80%] mt-10">
      <StickyScroll content={content} />
      </div>
    </div>
  );
}
