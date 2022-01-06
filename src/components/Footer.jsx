import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';

//a simple footer component that can be reused on all pages
const Footer = () => {

    const isMobile = useMediaQuery({ query: `(max-width: 992px)` });
    return (
        <div >

            
            {!isMobile && <br /> }
            <br />
            <br />
             <Navbar bg="light"  fixed= "bottom" className="footer" >
                 <Container className = "justify-content-center">
                    <Navbar.Brand>
                        Site by <a href="http://www.linkedin.com/in/salil-khanna" target="_blank" rel="noreferrer">Salil Khanna</a> with React JS
                     </Navbar.Brand>
                 </Container>
             </Navbar>
        </div>
    )
}

export default Footer
