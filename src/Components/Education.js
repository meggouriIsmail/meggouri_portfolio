const Education = () => {
    return (
        <section className="education-section">
            <h1 className="title">Education</h1>
            <div className="bloc">
                <div className="ista-bloc">
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/certificate_96px.png`} alt="diploma" />
                    <p>Technicien degree in CS</p>
                    <p>2019 / 2021</p>
                </div>
                <div className="ista-bloc">
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/medal_96px.png`} alt="diploma" />
                    <p>Bachlore degree in CS</p>
                    <p>2021 / 2022</p>
                </div>
                <div className="ista-bloc">
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/certificate_96px.png`} alt="diploma" />
                    <p>Master degree in CS</p>
                    <p>2022 / 2024</p>
                </div>
            </div>
        </section>
    );
}

export default Education;