import { Container, Heading, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Home: VFC = memo(() => {
    return (
        <HeaderLayout>
                <Heading as="h1" fontSize={{ base: "3xl", md:"6xl" }} mt={32} textAlign="center">welcome to my portfolio</Heading>
                <Container maxW="2xl" pt={6}>
                <Text align="center" m={8} color="gray.300" >このページはReactを使い開発した初めてのページです。
                    なぜReactで開発をしたかというと単純にかっこいいと思ったからです。
                    プログラミング言語にはかっこいい名前が多いですね。
                    かっこいいエンジニアになるためにも日々勉強しております。
                    不具合は見つけ次第改善していきます。
                </Text>
                </Container>
        </HeaderLayout>
    );
});