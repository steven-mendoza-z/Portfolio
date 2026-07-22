import Text from "../atomics/Text";

export function Link({ children, size, href }) {
    return (
        <Text
            as="a"
            size={size}
            color="highlight-1"
            className="text-link"
            semibold
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Text>
    );
}

export default Link;
