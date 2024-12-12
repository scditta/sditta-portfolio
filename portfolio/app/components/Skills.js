import skills from "@/projectData/skills";

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
