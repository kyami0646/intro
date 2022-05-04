import { Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";
import { WorksCard } from "../organisms/WorksCard"

export const Works: VFC = memo(() => {
    return (
        <HeaderLayout>
                <Heading textAlign="center" as="h1">works</Heading>
                <Text textAlign="center" mt={12} px={[6]}>
                    ここには私が開発したものを載せていこうと思います。
                    まだ少ないですが、これからどんどん開発していこうかなと思います。
                </Text>
                <Wrap p={{base:6,md: 8}} justify="center">
                    <WrapItem px={[6]} pb={[6]}>
                        <WorksCard
                        imageUrl="/image/typo.png"
                        title="国旗DEタイピング"
                        description="国旗を覚えながらタイピング練習もできるwebアプリケーションです"
                        techs={["php", "javaScript"]}
                        link="https://github.com/kyami0646/project"
                        />
                    </WrapItem>
                    <WrapItem px={[6]} pb={[6]}>
                        <WorksCard
                        imageUrl="/image/studyHelp.png"
                        title="studyHelp"
                        description="勉強の成果を視覚化したwebアプリケーションです"
                        techs={["Flask", "python"]}
                        link="https://github.com/kyami0646/s17"
                        />
                    </WrapItem>
                    <WrapItem  px={[6]} pb={[6]}>
                        <WorksCard
                        imageUrl="/image/portfolio.png"
                        title="ポートフォリオサイト"
                        description="私の自己紹介、プロダクト紹介ページです"
                        techs={["react"]}
                        link="https://github.com/kyami0646/intro"
                        />
                    </WrapItem>
                </Wrap>
        </HeaderLayout>
    )
})