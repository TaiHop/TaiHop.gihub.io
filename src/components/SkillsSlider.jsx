import React from "react";

const topSkills = [
  { img: "/img/python-html.png", alt: "Python logo", skill: "Python", value: 70 },
  { img: "/img/html5.png", alt: "HTML logo", skill: "HTML", value: 50 },
  { img: "/img/css.png", alt: "CSS logo", skill: "CSS", value: 75 },
  { img: "/img/sqlite.png", alt: "SQLite logo", skill: "SQLite", value: 72 },
  { img: "/img/r.png", alt: "R logo", skill: "R", value: 60 },
  { img: "/img/cs.jpg", alt: "C logo", skill: "C", value: 45 },
];

const bottomSkills = [
  { img: "/img/cat.png", alt: "placeholder", skill: "p5Js", value: 75 },
  { img: "/img/cat.png", alt: "placeholder", skill: "Adobe Photoshop", value: 50 },
  { img: "/img/cat.png", alt: "placeholder", skill: "Adobe Illustrator", value: 50 },
  { img: "/img/cat.png", alt: "placeholder", skill: "React", value: 25 },
  { img: "/img/cat.png", alt: "placeholder", skill: "Skill 11", value: 50 },
  { img: "/img/cat.png", alt: "placeholder", skill: "Skill 12", value: 50 },
  { img: "/img/cat.png", alt: "placeholder", skill: "Skill 13", value: 50 },
  { img: "/img/cat.png", alt: "placeholder", skill: "Skill 14", value: 50 },
];

function SkillCard({ img, alt, skill, value }) {
  return (
    <div className="moving-skill-card">
      <img src={img} alt={alt} />
      <p>{skill}</p>
      <progress max="100" value={value}></progress>
    </div>
  );
}

function SkillRow({ skills, direction }) {
  return (
    <div className={`moving-skills-row ${direction}`}>
      {[...skills, ...skills].map((item, index) => (
        <SkillCard key={`${item.skill}-${index}`} {...item} />
      ))}
    </div>
  );
}

export default function SkillsSlider() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="moving-skills-wrapper">
        <SkillRow skills={topSkills} direction="skills-left" />
        <SkillRow skills={bottomSkills} direction="skills-right" />
      </div>
    </section>
  );
}
