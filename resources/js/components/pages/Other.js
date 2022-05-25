import {Header, Footer, React, Contact, About, Features} from "../../index";

const Other = ({page}) => {

    var renderPage = ''
    if(page === "contact"){
        renderPage = <Contact/>;
    }else if(page === "about"){
        renderPage = <About/>;
    }else if (page === "features"){
        renderPage = <Features/>;
    }

    return (
        <div>
            <Header page="home"/>
            {renderPage}
            <Footer page="home"/>
        </div>
    );
}

export default Other;