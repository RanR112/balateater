import React, { useState } from 'react';
import './gallery.css';
import Data from './data.json';
import FsLightbox from 'fslightbox-react';

const Gallery = () => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    const openLightboxOnSlide = (slideNumber) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: slideNumber
        });
    };

    return (
        <section className="gallery" id='Gallery'>
            <div className="cover">
                <h1 className='title' data-aos="fade-up">Gallery</h1>

                <div className="content">
                    <div className="achievement">
                        <h1 data-aos="fade-up">Achievement</h1>
                        <p data-aos="fade-up">
                            1. Festival Teater Pelajar 2017 tingkat Kabupaten Banjarnegara <b>(Juara 1)</b><br />
                            2. FLS2N 2018 tingkat Provinsi Jawa Tengah <b>(Juara 2)</b><br />
                            3. Artefac UNS 2019 tingkat Nasional <b>(6 Besar)</b><br />
                            4. Artefac UNS 2020 tingkat Nasional <b>(Penyaji Artistik Terbaik)</b><br />
                            5. Artefac UNS 2022 tingkat nasional <b>(Penyaji Terbaik 2)</b><br />
                            6. Artefac UNS 2023 tingkat nasional <b>(Penyaji Terbaik 3)</b><br />
                            7. FLS2N SMA 2023 Cabang Lomba Baca Puisi tingkat Provinsi <b>(Juara 3)</b><br />
                            8. FLS2N SMA 2024 Cabang Lomba Monolog tingkat Kabupaten Banjarnegara <b>(Juara 1)</b><br />
                            9. FLS2N SMA 2024 Cabang Lomba Baca Puisi tingkat Kabupaten Banjarnegara <b>(Juara 3)</b><br />
                            <br />
                            <a href="https://drive.google.com/drive/folders/1VyLMpW3YZ5o6Q8RIVg9I9Uv1E5pg9yp-"><b><pre>Naskah Yang Sudah Pernah Dibawakan    « Klik disini</pre></b></a>
                            <br />
                            <br />
                        </p>
                    </div>

                    <div className="memories">
                        <h1 data-aos="fade-up">Memories</h1>
                        <div className="dataFoto">
                            {Data.map(({ id, img, alt }, index) => (
                                <div key={id} className='foto' data-aos="fade-up">
                                    <img
                                        src={img}
                                        alt={alt}
                                        onClick={() => openLightboxOnSlide(index + 1)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <FsLightbox
                toggler={lightboxController.toggler}
                sources={Data.map(({ img }) => img)}
                slide={lightboxController.slide}
            />
        </section>
    );
}

export default Gallery;
