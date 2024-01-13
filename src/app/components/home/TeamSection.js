"use client";
import { useInView } from "react-intersection-observer";
import TeamMemberCard from "./TeamMemberCard";
import useAPI from '../../hooks/useAPI'
import { useEffect, useState } from "react";

function TeamSection({ grad }) {     
    const [members,setMembers] = useState({
        CEO:null,
        CTO:null,
        teamMembers:null
    })    
    useEffect(() => {
        const query = `query {
            teamCollection{
              items{
                name
                designation
                displayPicture{
                  url
                }
                github
                linkedin
                  sys{
                  id
                } 
              }
            }
          }`
          useAPI(query).then(teamMembers=>{
            let ceo = null;
            let cto = null;
            // Filter out 'CEO' and 'CTO' elements
            const filteredTeam = teamMembers.data.teamCollection.items.filter(member => {
                if (member.designation === 'CEO') {
                ceo = member;
                return false;
                } else if (member.designation === 'CTO') {
                cto = member;
                return false;
                }
                return true;
            });    
            setMembers({
                CEO:ceo,
                CTO:cto,
                teamMembers:filteredTeam
            })
          })
    },[])
  const { ref: myref, inView, entry } = useInView();
  if(members.CTO && members.CTO){
    return (
        <div className={inView ? "team-details" : null} id="team-details-div">
          <section className="bg-slate-200">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
              <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
                  Our team
                </h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                  Explore the whole collection of open-source web components and
                  elements built with the utility classNamees from Tailwind
                </p>
              </div>
              <div className="flex flex-wrap justify-evenly">
                <TeamMemberCard
                id = {members.CEO.sys.id}
                  dp={members.CEO.displayPicture.url}
                  name={members.CEO.name}
                  designation={members.CEO.designation}
                  github={members.CEO.github}
                  linkedin={members.CEO.linkedin}
                />
                <TeamMemberCard
                id = {members.CTO.sys.id}
                  dp={members.CTO.displayPicture.url}
                  name={members.CTO.name}
                  designation={members.CTO.designation}
                  github={members.CTO.github}
                  linkedin={members.CTO.linkedin}
                />
              </div>
              <div
                className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                ref={myref}
              >
               {members.teamMembers.map((item) => (
                <TeamMemberCard
                id = {item.sys.id}
                  dp={item.displayPicture.url}
                  name={item.name}
                  designation={item.designation}
                  github={item.github}
                  linkedin={item.linkedin}
                />  
               ))}
              </div>
            </div>
          </section>
        </div>
      );
  }
  
}

export default TeamSection;
