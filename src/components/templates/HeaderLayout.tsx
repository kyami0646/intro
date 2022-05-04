import { Container } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import { Footer } from "../organisms/Layouts/Footer";
import { Header } from "../organisms/Layouts/Header";

type props= {
    children: ReactNode;
};

export const HeaderLayout: VFC<props> = memo(props => {
    const { children } = props;
    return (
        <>
        <Container display="flex" flexDirection="column" minH={"100vh"} minW={"100vw"}>
            <Header />
            {children}
            <Footer />
        </Container>
        </>
    );
});