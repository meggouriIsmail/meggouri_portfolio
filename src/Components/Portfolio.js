
const Portfolio = () => {

    const products = require('../projects.json');

    return (
        <section className="portfolio-section" id="portfolio">
            <h1 className="title">Potfolio</h1>
            <div className="projects">
                {
                    products.map((prod) => {
                        return (
                            <div className="project" key={prod.id} >
                                <img src={prod.img} className="img" alt={prod.name} />
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