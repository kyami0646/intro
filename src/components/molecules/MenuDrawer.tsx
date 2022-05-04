import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickTop: () => void;
    onClickAbout: () => void;
    onClickworks: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
    const { onClose, isOpen, onClickTop, onClickAbout, onClickworks } = props;
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="black" >
                        <Button borderRadius="none" bg="Black" color="White" w="100%" _hover={{opacity:"0.6"}} onClick={onClickTop}>Top</Button>
                        <Button borderRadius="none" bg="Black" color="White" w="100%" _hover={{opacity:"0.6"}} onClick={onClickAbout}>About</Button>
                        <Button borderRadius="none" bg="Black" color="White" w="100%" _hover={{opacity:"0.6"}} onClick={onClickworks}>Works</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
});