import type React from "react";
import Image from "next/image";

export interface SkillProps {
  name: string;
  icon: string;
  description: string;
  color: string;
}

interface SkillListProps {
  list: SkillProps[];
}

const SkillList: React.FC<SkillListProps> = ({ list }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {list.map((skill, index) => (
        <div
          key={skill.name}
          className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6
           hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {/* Content */}
          <div className="relative z-10 flex items-center space-x-4">
            <div className="rounded-lg  flex items-center justify-center shadow-lg group-hover:scale-100 transition-transform duration-300">
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={`${skill.name} icon`}
                width={26}
                height={26}
              />
            </div>

            <h4 className="text-white group-hover:text-blue-300 transition-colors duration-300">
              {skill.name}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
