import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectImage({ image, className, fill = false }) {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    handleProjectImage();
  }, [image]);

  const handleProjectImage = async () => {
    // if (project?.images === undefined) {
    //   return;
    // }
    // console.log(project?.images[0]);
    const storage = getStorage();
    const imageRef = ref(storage, image);
    // console.log(imageRef);
    // console.log(imageRef.bucket);
    await getDownloadURL(imageRef)
      .then((url) => {
        setImageURL(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (imageURL !== null) {
    if (fill) {
      return (
        <Image
          src={imageURL}
          alt={"Project Image"}
          fill={fill}
          className={className}
        />
      );
    } else {
      return (
        <Image
          src={imageURL}
          alt={"Project Image"}
          width={700}
          height={700}
          className={className}
        />
      );
    }
  } else {
    return <>Loading...</>;
  }
}
