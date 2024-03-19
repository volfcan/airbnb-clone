'use client'

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {subtitle}
            </div>
        </div>
    )
}

export default Heading;