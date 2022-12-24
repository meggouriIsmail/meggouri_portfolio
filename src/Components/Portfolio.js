import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const Portfolio = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/db/projects.json`)
        .then((response) => {
            console.log(response);
            setProjects(response.data);
        }).catch(err => console.log(process.env.PUBLIC_URL));
    }, []);

    if (projects.length <= 0) return null;

    return (
        <section className="portfolio-section" id="portfolio">
            <h1 className="title">Potfolio</h1>
            <div className="projects">
                {
                    projects.map((prod) => {
                        return (
                            <div className="project" key={prod.id} >
                                <img src={process.env.PUBLIC_URL + prod.img} className="img" alt={prod.name} />
                                <a href={prod.url} target="_blank" rel="noreferrer">
                                    <div className="overlay">
                                        <div className="text">
                                            <h2>{prod.name}</h2>
                                            <em>{prod.techs}</em>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;