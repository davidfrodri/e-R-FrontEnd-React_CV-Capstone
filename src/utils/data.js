import codewarsImg from "../assets/images/portfolio/codewars.png";
import codepenImg from "../assets/images/portfolio/Codepen.png";
import githubImg from "../assets/images/portfolio/github.png";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


// Address data
export const contactItems = [
  {
    id: 1,
    type: "phone",
    icon: faPhone,
    link: "tel:+573246331033",
    displayText: "(324) 633-1033",
  },
  {
    id: 2,
    type: "email",
    icon: faEnvelope,
    link: "mailto:davidfrodricomputerscience@gmail.com",
    displayText: "davidfrodricomputerscience@gmail.com",
  },
  {
    id: 3,
    type: "linkedin",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/davidfeliperodriguez",
    displayText: "https://www.linkedin.com/in/davidfeliperodriguez",
    titleText: "LinkedIn",
  },
];

// Education data
export const timeLineData = [
  {
    title: 'Meta Frontend Professional Certification',
    date: '2023',
    description: "Successfully completed an intensive Meta Frontend Professional Certification program, which encompassed a comprehensive curriculum in advanced frontend development. Profoundly engaged with topics including in-depth HTML and CSS, advanced React techniques, version control, fundamental principles of UX and UI design, coding interview preparation, and culminating in a project capstone. This certification underscores a mastery of contemporary frontend technologies and the ability to deliver superior user experiences."
  },
  {
    title: 'Certified Scrum Master',
    date: '2022',
    description: "Attained certification as a Scrum Master, acquiring expertise in Agile methodologies and their pivotal role in technology projects. Demonstrated proficiency in facilitating Agile practices, enhancing cross-functional collaboration, and ensuring timely product delivery. The certification underscores the capacity to lead Agile initiatives, optimize team performance, and foster a culture of continuous improvement."
  },
  {
    title: 'Project Management Emphasis - University EAFIT',
    date: '2022',
    description: "Completed a specialized Project Management program as an academic exchange at the University EAFIT. This experience served as a pivotal step in forging a path towards adept project management, encompassing comprehensive training in project planning, execution, problem-solving, and strategic decision-making. Strengthened the ability to orchestrate multifaceted projects, ensuring their seamless execution and successful outcomes."
  },
  {
    title: 'Bachelor of Science in Civil Engineering',
    date: '2022',
    description: "Earned a Bachelor's degree in Civil Engineering from the prestigious Universidad Nacional de Colombia. This program provided a robust foundation in engineering principles, equipped with skills spanning civil infrastructure design, problem-solving, and rudiments of programming. The curriculum included a diverse array of subjects, fostering a comprehensive understanding of engineering concepts and methodologies."
  },
  {
    title: 'Professional Ethics Course - COPNIA',
    date: '2022',
    description: "Participated in a Professional Ethics course offered by COPNIA, delving into the critical importance of upholding ethical standards in professional endeavors. Gained insights into operating with integrity, ethical decision-making, and fostering a principled work environment. This course reinforced the value of ethical conduct and its profound impact on individual growth and organizational success."
  }
];

export const defaultSkillsData  = [
  {name: 'React', range: 50},
  {name: 'CSS', range: 55},
  {name: 'HTML', range: 60},
  {name: 'JavaScript', range: 40}
]

export const experienceData = {
  data: [
    {
      date: '2013-2014',
      info: {
        company: 'Google',
        job: 'Front-end developer / php programmer',
        description:
		'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil',
      },
    },
    {
      date: '2012',
      info: {
        company: 'Twitter',
        job: 'Web developer',
        description:
		'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim',
      },
    },
  ],
}

export const feedbackData = {
  data: [
    {
      feedback:
		'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
      reporter: {
        photoUrl: '../../assets/images/useravatar.png',
        name: 'John Doe',
        citeUrl: 'https://www.citeexample.com',
      },
    },
    {
      feedback:
		'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
      reporter: {
        photoUrl: '../../assets/images/useravatar.png',
        name: 'John Doe',
        citeUrl: 'https://www.citeexample.com',
      },
    },
  ],
}

export const aboutMeTextData = 
  'An enthusiastic Software Developer with a background in Civil Engineering, I am fueled by a fervor for crafting inventive web solutions, exploring the frontiers of AI, and mastering the craft of Project Management. My journey represents a harmonious blend of structured engineering thinking intertwined with the boundless possibilities of code. Thriving in collaborative environments, I harness the power of teamwork to breathe life into visionary projects. My innate commitment to discipline, coupled with a penchant for meticulous planning and organization, equips me to navigate intricate challenges with finesse. At my core is a proactive mindset that transforms obstacles into stepping stones. Embracing unending curiosity, I seize every chance for ongoing learning to remain at the vanguard of technological progress. With each project I undertake, my goal is to meticulously shape elegant, user-centric solutions that seamlessly unite form and function.'

export const infoTextData =
	'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. '

export const portfolioItems = [
  {
    id: 1,
    classes: "code",
    imgSrc: codewarsImg,
    title: "Code Wars",
    description:
        "Discover a collection of challenges and logic tests I've completed on Code Wars. Each 'kata' represents a unique problem that addresses various coding concepts",
    link: "https://www.codewars.com/users/davidfrodri",
    linkText: "Read more",
  },
  {
    id: 2,
    classes: "ui code",
    imgSrc: codepenImg,
    title: "Code Pen",
    description:
        "Explore a variety of creative projects I've shared on CodePen. CodePen is an online space where I can experiment with HTML, CSS, and JavaScript. Here, you'll find interactive examples and visual experiments I've created to learn and showcase web concepts.",
    link: "https://codepen.io/davidfrodri",
    linkText: "Read more",
  },
  {
    id: 3,
    classes: "ui code",
    imgSrc: githubImg,
    title: "GitHub",
    description:
        "Explore my repositories and projects on GitHub, a collaborative development platform. On GitHub, I share personal projects and code samples I've developed.",
    link: "https://github.com/davidfrodri",
    linkText: "Read more",
  },
  {
    id: 4,
    classes: "ui",
    imgSrc: "https://picsum.photos/306/190",
    title: "Some text",
    description:
        "Explore my repositories and projects on GitHub, a collaborative development platform. On GitHub, I share personal projects and code samples I've developed.",
    link: "#",
    linkText: "Read more",
  },
];