class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="text-center mt-5">
                        <h1 className="display-1 mb-4 text-light">The Goals of LocalLogan.com</h1>
                        <iframe width="320" height="200" src="https://www.youtube.com/embed/qtSiCmjUKTI" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
                    </div>
                </div>
            </section>
        );
    }
}