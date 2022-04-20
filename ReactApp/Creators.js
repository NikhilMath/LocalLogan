class Creators extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="container">
                <h1 className="display-1 text-center mt-4 text-light">Creators</h1>
                <p className="lead text-center text-light">The team behind LocalLogan.com</p>
                <hr className="text-light" />
                <div className="row mb-4">
                    <h3 className="font-monospace display-3 text-center text-light">Nikhil Math</h3>
                    <div className="col-md-6 mt-2 text-center">
                        <img className="personPic rounded-circle align-middle align-self-center" src="/images/NikhilPic.jpg" alt="" />
                    </div>
                    <div className="col-md-6 mt-2 d-grid">
                        <h4 className="lead display-5 text-center text-light">Creator / Web Developer / Editor</h4>
                        <a target="_blank" className="btn btn-secondary text-light btn-outline-dark text-center"
                        href="https://www.linkedin.com/in/nikhil-math/">LinkedIn</a> <br />
                        <a target="_blank" className="btn btn-secondary text-light btn-outline-dark text-center"
                        href="https://github.com/NikhilMath">GitHub</a> <br />
                        <a target="_blank" className="btn btn-secondary text-light btn-outline-dark text-center"
                        href="https://NikhilMath.com">Personal Site
                        (NikhilMath.com)</a>
                    </div>
                </div>
                <hr className="text-light" />
                <div className="row">
                    <h4 className="font-monospace display-4 text-center text-light">Cheyenne Price</h4>
                    <div className="col-md-6 mt-2 text-center">
                        <img className="personPic rounded-circle align-middle" src="/images/Cheyenne.jpg" alt="" />
                    </div>
                    <div className="col-md-6 mt-2 d-grid ">
                        <h5 className="lead display-5 text-center mt-5 text-light">Writer</h5>
                    </div>
                </div>
                <hr className="text-light" />
                <div className="row">
                    <h4 className="font-monospace display-4 text-center mt-3 text-light">Ivie Parkinson</h4>
                    <div className="col-md-6 mt-2 text-center">
                        <img className="personPic rounded-circle align-middle" src="/images/IviePic.jpg" alt="" />
                    </div>
                    <div className="col-md-6 mt-2 d-grid">
                        <p className="lead display-5 text-center mt-5 text-light">Logo Designer</p>
                    </div>
                </div>
            </section>
        );
    }

}