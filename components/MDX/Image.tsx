import NextImage from "next/image";

type Props = {
  src: string;
  alt: string;
  height: number;
  width: number;
};

const Image = (props: Props) => {
  return (
    <NextImage
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className="mdx-image"
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />
  );
};

export default Image;
