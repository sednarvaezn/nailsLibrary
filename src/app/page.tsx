"use client";
import Head from "next/head";
import "../assets/css/main.css";
import GoogleAd from "@/GoogleAd";
import { useEffect, useRef, useState } from "react";
import Category from "./Category/Category";
import Modal from "./Modal/Modal";
import {
  images3D,
  imagesCorazones,
  imagesElegantes,
  imagesMunecos,
} from "./db";
export default function Home() {
  const main = useRef<HTMLBodyElement>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeImageUrl, setActiveImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (activeImageUrl && !showModal) {
      setShowModal(true);
    }
  }, [activeImageUrl, showModal]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title></title>

        <noscript>
          <link
            rel="stylesheet"
            href="assets/css/noscript.css"
          />
        </noscript>
      </Head>
      <div id="wrapper">
        <section
          id="main"
          ref={main}
        >
          {activeImageUrl && (
            <Modal
              description={""}
              imageUrl={activeImageUrl}
              show={showModal}
              handleClose={() => setShowModal(false)}
            />
          )}
          <Category
            categoryName={"Elegante"}
            description={"Diseños elegantes para lucir con distinción"}
            images={imagesElegantes}
            setActiveImageUrl={setActiveImageUrl}
          />

          <Category
            categoryName={"Muñecos"}
            description={
              "Diseños con encantadores muñecos y dibujos para tus uñas. ¡Diviértete con nuestra colección creativa!"
            }
            images={imagesMunecos}
            setActiveImageUrl={setActiveImageUrl}
          />
          <Category
            categoryName={"Corazones"}
            description={
              "Diseños llenos de corazones para tus uñas. Encuentra amor y estilo en cada detalle!"
            }
            images={imagesCorazones}
            setActiveImageUrl={setActiveImageUrl}
          />
          <Category
            categoryName={"3D"}
            description={
              "Diseños en 3D para tus uñas. Déjalas deslumbrantes con efectos sorprendentes."
            }
            images={images3D}
            setActiveImageUrl={setActiveImageUrl}
          />
        </section>

        <section id="footer">
          <section>
            <ul className="icons">
              <li>
                <a
                  href="#"
                  className="icon brands fa-instagram"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="icon solid fa-envelope"
                >
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>
                Design: <a href="http://html5up.net">HTML5 UP</a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </main>
  );
}
