"use client";

import Image from "next/image";

export default function Page() {
  return (
    <>
      <section id="about">
        <div className="w-full h-full flex flex-col">
          <h1 className="text-center pt-20 md:text-5xl sm:text-3xl text-xl">
            About Me
          </h1>
          <div className="flex justify-evenly m-auto flex-col sm:flex-col md:flex-row">
            <img
              src="https://i.pinimg.com/736x/58/7b/57/587b57f888b1cdcc0e895cbdcfde1c1e.jpg"
              className="w-full p-10 h-44 sm:w-full sm:h-auto md:h-auto md:w-1/3"
            ></img>
            {/* <Image
              src="https://i.pinimg.com/736x/58/7b/57/587b57f888b1cdcc0e895cbdcfde1c1e.jpg"
              alt="Profile Picture of Stephen Ditta"
              fill
            /> */}
            {/* <div className="w-full p-10 h-96 sm:w-1/3 sm:h-auto bg-red-500"></div> */}
            <p className="w-full p-10 sm:w-full md:w-1/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tortor id quam venenatis imperdiet. Mauris odio nunc, porttitor at
              nulla ac, blandit scelerisque nulla. Mauris non tortor ac quam
              pretium venenatis. Nam molestie nunc justo, tempus ullamcorper
              massa ullamcorper sed. Morbi iaculis scelerisque eros. Etiam nec
              ultricies mauris, eget vehicula libero. Vivamus non efficitur
              dolor. Quisque tincidunt eros blandit sollicitudin cursus. Nunc
              tincidunt libero at turpis semper, sit amet scelerisque mi
              malesuada. Aenean luctus consequat risus, non tincidunt lectus
              rutrum id. Nunc vitae posuere metus, id ultrices lectus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Mauris eu odio a neque
              scelerisque pharetra. Sed at tempus nisi. In venenatis nisi felis,
              nec feugiat tortor imperdiet et. Etiam ut orci mollis, tincidunt
              magna non, scelerisque enim. Phasellus facilisis sem quis erat
              elementum ornare. Cras quis ipsum eget nisi hendrerit blandit vel
              eget odio. Suspendisse egestas, eros sit amet suscipit auctor,
              dolor lorem tempus lectus, quis feugiat eros turpis eget ligula.
              Mauris eget mi ac dolor ultrices venenatis. Aenean tempor diam
              cursus, ornare arcu at, malesuada lectus. Etiam in nunc ac mauris
              scelerisque pulvinar. Nullam non urna eu felis volutpat dapibus
              non tincidunt risus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
