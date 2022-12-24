const Education = () => {
    return (
        <section className="education-section">
            <h1 className="title">Education</h1>
            <div className="bloc">
                <div className="bac-bloc">
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/medal_96px.png`} alt="diploma" />
                    <p>Baccaloriat</p>
                    <p>2017 / 2018</p>
                </div>
                <div className="ista-bloc">
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/certificate_96px.png`} alt="diploma" />
                    <p>Bachlore degree in CS</p>
                    <p>2019 / 2022</p>
                </div>
            </div>
        </section>
    );
}

export default Education;