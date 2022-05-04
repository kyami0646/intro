import { Accordion, Avatar, Center,Flex, Heading, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { MainAccordion } from "../organisms/MainAccordion";
import { HeaderLayout } from "../templates/HeaderLayout";

export const About: VFC = memo(() => {
    return (
        <HeaderLayout>
                <Heading as="h1" mt={10} textAlign="center">About me</Heading>
                <Flex direction={{base:"column", md:"row"}} justify="center" mt={24}>
                    <Center >
                        <Avatar size="2xl"></Avatar>
                    </Center>
                    <Text textAlign="center" w={{md:"55%"}} m={8} pb={6}>大学三年です。大学は体育系の学部に所属しています。
                    高校時代は野球部に所属していました。野球は物心つく前からやっていました。
                    しかし、2年生の冬の頃にプログラミングに出会いました。そこから私のエンジニアとしてのキャリアが始まりました??
                    </Text>
                </Flex>
                <Heading as="h1" textAlign="center" mt={12}>Question me</Heading>
                <Accordion allowMultiple mx="auto" w={{base:"90%",md:"80%"}} mt={12}>
                    <MainAccordion
                    title="なんで文系で体育系の大学なのにプログラミングやってるの？"
                    description="大学2年の冬ごろに、暇だなと思い何か勉強したら将来役に立つものはないかな〜と思っていた時に
                    プログラミングに出会いました。最初は遊び感覚でプログラミングをしていました。そこからどんどん絵勉強が楽しくなっていき、
                    そしてこれが仕事になるということも知り、本格的に勉強を始めました。
                    まさかプログラミングの勉強をするなんて、大学入学時の僕からは想像ができないと思います。"
                    />
                    <MainAccordion
                    title="野球は大学で続けないの？"
                    description="大学でも続ける予定でしたが、第一志望の大学に落ちて野球を諦めました...   しかし大学に入ってやってみたかった、
                    ダンスを始めました。ジャンルはブレイクダンスをやっていました。今はもう引退しやっていませんが、とても楽しかったです。
                    それにその大学に入学したら、プログラミングに出会ってなかったと思います。
                    自分では何か運命のようなものを感じています。"
                    />
                    <MainAccordion
                    title="エンジニアとしてのキャリアビジョンは？"
                    description="業務や勉強会などを通じて基本的な技術を学んだ上で、最終的にはフルスタックエンジニアとして働きたいと思っています。
                    理由としては、プロダクトの開発工程全てに関わり、改善点などを提案できるようになりたいからです。
                    また、一つのプロダクトを一人で完結させる事ができるエンジニアになりたいと思ったからです。
                    そのためには高い技術力を有している必要があるので、絶えず技術力を吸収し続け、ユーザーの生活が便利で豊かになるようなWebアプリを開発したいと考えています。
                    それと同時にエンジニアとしてキャリアを積み上げ、上流工程から下流工程までの精通を目指し、常に最新の技術を取り入れて成長し続けていきたいと思います。
                    そして、最終的にはチャンスを頂いたときに期待に答えられるようなエンジニアを目指して頑張りたいと思います。"
                    />
                </Accordion>
        </HeaderLayout>
    )
})