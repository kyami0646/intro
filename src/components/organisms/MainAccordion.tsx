import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    title: string;
    description: string;
};

export const MainAccordion: VFC<Props> = memo((props) => {
    const { title, description } = props;
    return (
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                {title}
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            {description}
            </AccordionPanel>
        </AccordionItem>
);
});