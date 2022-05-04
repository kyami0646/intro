import { Badge, Box, Image, Text } from "@chakra-ui/react";
import { CSSProperties, memo, VFC } from "react";

type Props = {
    imageUrl: string;
    title: string;
    description: string;
    techs : string[];
    link : string;
};


export const WorksCard: VFC<Props> = memo((props) => {
    const { imageUrl, title, description, techs, link } = props;
    const techItems = techs.map((tech) =>
        <Badge m={2} key={tech} colorScheme='red'>{tech}</Badge>
    );
    const iStyle: CSSProperties = {
        fontSize: '2rem'
    }
    return (
        <Box w="sm" minW="xs"  maxW="sm"  bg="white" borderRadius="lg" overflow="hidden">
                <Image maxH="70vh" src={process.env.PUBLIC_URL + imageUrl} alt={title} />
                <Text color="black" pb={2} fontWeight="bold" textAlign="center"  pt={[3]}>{title}</Text>
                    {techItems}
                    <a href={link}><i style={iStyle} className="devicon-github-original colored"></i></a>
                <Text color="Black" p={[3]}>{description}</Text>
        </Box>
    );
});