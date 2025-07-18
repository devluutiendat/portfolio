import { skills } from "@/data/skills";
import SkillList from "./Skill";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 mx-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg shadow-lg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            use to build amazing digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-500 rounded-full mr-4"></span>
                Frontend
              </h3>
              <SkillList list={skills.frontend} />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-green-500 rounded-full mr-4"></span>
                Tools & Platforms
              </h3>
              <SkillList list={skills.tools} />
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-4"></span>
              Backend
            </h3>
            <SkillList list={skills.backend} />
          </div>
        </div>
      </div>
    </section>
  );
}
