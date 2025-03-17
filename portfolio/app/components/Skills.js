import skills from "@/app/data/skills";

export default function Skills() {
  const Skill = ({ skill }) => {
    return (
      <div className="">
        <img className="w-28 m-auto" src={skill.image} />
        <h1>{skill.skill}</h1>
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
          {/* flex flex-wrap text-center h-full */}
          <div className="grid grid-cols-3 lg:gap-5 content-evenly gap-1 h-full text-center">
            {skills.map((skill) => {
              return <Skill key={skill.id} skill={skill} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
