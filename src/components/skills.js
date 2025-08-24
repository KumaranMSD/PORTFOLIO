

function Skills(){
    return(
        <section className="skills">
            <h2>Skills</h2>
            <div className="skill-bars">
                <div class="skill"><span>HTML/CSS/JavaScript</span><div className="bar" style={{width:"90%"}}></div></div>
                <div className="skill"><span>React JS</span><div className="bar" style={{width: "85%"}}></div></div>
                <div className="skill"><span>Node & Express</span><div className="bar" style={{width: "80%"}}></div></div>
                <div className="skill"><span>MongoDB</span><div className="bar" style={{width: "75%"}}></div></div>
                <div className="skill"><span>Photoshop</span><div className="bar" style={{width: "60%"}}></div></div>
            </div>
        </section>
    )
}

export default Skills;