import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIconButton } from "../../atoms/Button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const onClickTop = useCallback(() => navigate(process.env.PUBLIC_URL), [navigate]);
    const onClickAbout = useCallback(() => navigate(process.env.PUBLIC_URL + "/about"), [navigate]);
    const onClickworks = useCallback(() => navigate(process.env.PUBLIC_URL + "/works"), [navigate]);

    return (
        <>
        <Flex as="nav" bg="Black" color="White" align="center" justify="space-between" padding={{ base:3, md:5 }} >
            <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}  onClick={onClickTop}>
            <Heading as="h1" fontSize={{ base: "lg", md:"xl" }}>portfolio</Heading>
            </Flex>
            <Flex align="center" fontSize="sm" flexGrow={2} display={{ base:"none", md:"flex"}}>
                <Box pr={4}>
                    <Link onClick={onClickAbout}>About</Link>
                </Box>
                <Link onClick={onClickworks}>Works</Link>
            </Flex>
            <MenuIconButton onOpen={onOpen}/>
        </Flex>
        <MenuDrawer onClose={onClose} isOpen={isOpen} onClickTop={onClickTop} onClickAbout={onClickAbout} onClickworks={onClickworks}/>
        </>
    )
})