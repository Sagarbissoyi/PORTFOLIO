import { Badge, Group, Image, Modal, ScrollArea, Text,Button, ActionIcon, Tooltip } from "@mantine/core";
import { IconAdjustments, IconArrowBigDownLineFilled } from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";

const ResumeViewer=(props:any)=>{

return <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" className="font-mono" opened={props.opened} onClose={props.close}>
<Modal.Overlay />
<Modal.Content className="!rounded-3xl">
  <Modal.Header className="!bg-bgColor border-primaryColor  !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
    <Modal.Title data-autofocus className="!text-4xl text-white flex gap-3 items-center !font-bold">Resume
        <Tooltip label="Download" className="!text-bgColor" color="#64FFDA" position="right" offset={5}>
        <ActionIcon className="!text-primaryColor" component="a" href="Marshel Resume.pdf" download={Info.name} 
        variant="outline" color="#64FFDA" >
           <IconArrowBigDownLineFilled  />
        </ActionIcon>
        </Tooltip>
    </Modal.Title>
    <Modal.CloseButton size="md" iconSize="30px"  className="!bg-bgColor !text-red-500"/>
  </Modal.Header>
  <Modal.Body className="!bg-bgColor !pt-2 border-primaryColor !border-2 !border-t-0  !rounded-bl-3xl !rounded-br-3xl">

  <Document file="Chandrabhan Maurya.pdf" >
        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
      </Document>
  
  </Modal.Body>
</Modal.Content>
</Modal.Root>
 

}
export default ResumeViewer;