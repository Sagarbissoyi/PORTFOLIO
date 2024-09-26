import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Burger } from "@mantine/core";
import { IconHexagonLetterS, IconX } from "@tabler/icons-react";
import { navLinks } from "./Header";

const SideBar = () => {
  const [opened, {toggle }] = useDisclosure(false);

  return (
    <>
   

        
     

      <Drawer.Root className="bs:!hidden !-z-10"
        position="right"
        opened={opened}
        onClose={toggle}
        size="50vw" >
        <Drawer.Overlay className='!-z-0  !backdrop-opacity-85 blur-sm' />
        <Drawer.Content className="!-z-0" bg="#0A192F">
          
          <Drawer.Body className='mt-20 xs:mt-24  flex flex-col gap-5' bg="#0A192F">
            {navLinks(true, toggle)}
            </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>


 <Burger className="bs:!hidden !z-10" size='lg' color='#64FFDA' opened={opened} onClick={toggle} />

   


    </>
  );
};
export default SideBar;
