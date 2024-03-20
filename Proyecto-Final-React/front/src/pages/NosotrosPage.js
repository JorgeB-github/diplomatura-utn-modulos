import React from "react";

const NosotrosPage = (props) => {
    return (
        <main className="holder">        
            <div className="img">
                <img src="img/home.jpg" alt="energy" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sapiente perferendis ut omnis dolorem, tempore repudiandae voluptates? Nisi sequi rerum, quisquam at unde commodi fuga vero atque recusandae saepe nesciunt?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem pariatur tenetur modi eaque quibusdam tempora. Dignissimos maiores, qui blanditiis quae dolore perferendis architecto amet nesciunt tempora, quia rerum sit eius.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Gomez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;