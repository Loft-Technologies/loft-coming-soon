interface PictureProps {
    sources: { srcSet: string; media: string }[];
    imgSrc: string;
    className: string;
}

const Picture = ({ sources, imgSrc, className }: PictureProps) => {
    return (
        <picture>
            {sources.map((source, index) => (
                <source key={index} srcSet={source.srcSet} media={source.media} />
            ))}
            <img src={imgSrc} className={className} />
        </picture>
    );
};

export default Picture