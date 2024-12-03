"use client";

const skills = [
  {
    id: 0,
    skill: "JavaScript",
    image: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    id: 1,
    skill: "CSS",
    image:
      "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
  },
  {
    id: 2,
    skill: "HTML",
    image: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    id: 3,
    skill: "React.JS",
    image: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
  },
  {
    id: 4,
    skill: "React Native",
    image: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
  },
  {
    id: 5,
    skill: "Angular",
    image: "https://img.icons8.com/?size=100&id=71257&format=png&color=000000",
  },
  {
    id: 6,
    skill: "Bootstrap",
    image:
      "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
  },
  {
    id: 7,
    skill: "Tailwind",
    image:
      "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
  },
  {
    id: 8,
    skill: "Git",
    image: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
  },
  {
    id: 9,
    skill: "Express.js",
    image:
      "https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000",
  },
  {
    id: 10,
    skill: "Node.js",
    image:
      "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
  },
  {
    id: 11,
    skill: "Python",
    image: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
];

export default function Skills() {
  const Skill = ({ skill }) => {
    return (
      <div className="basis-1/3 flex flex-col">
        <h1>{skill.skill}</h1>
        <img className="w-28 m-auto" src={skill.image} />
      </div>
    );
  };

  return (
    <>
      <section id="skills">
        <div className="w-full h-screen flex flex-col">
          <h1 className="text-center pt-20 md:text-5xl sm:text-3xl text-xl">
            Skills
          </h1>
          <div className="flex flex-wrap text-center h-full">
            {skills.map((skill) => {
              return <Skill key={skill.id} skill={skill} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
