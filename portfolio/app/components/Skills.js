"use client"

export default function Skills() {

  const skills = [
    {
      id: 0,
      skill: "JavaScript",
      image: "..."
    },
    {
      id: 1,
      skill: "CSS",
      image: "..."
    },
    {
      id: 2,
      skill: "HTML",
      image: "..."
    },
    {
      id: 3,
      skill: "React.JS",
      image: "..."
    }
  ]

  return (
    <>
      <section id="skills">
        <div className="w-full h-screen">
            <h1 className="text-center pt-56 md:text-5xl sm:text-3xl text-xl">Skills</h1>
            <div>
              {skills.map(skill => {
                return <div key={skill.id}>{skill.skill}</div>;
              })}
            </div>
        </div>
      </section>
    </>
  );
}
