
import {
  Card,
  CardBody,
  Typography,
 
} from "@material-tailwind/react";
 
export default function BackgroundBlogCard() {
  return (
  
    <Card
      shadow={false}
      className="relative grid h-[18rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center mt-5 mb-10"
    >
      <CardBody
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >

<Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          How we design and code open-source projects?
        </Typography>
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
   
     
     
       
     
      </CardBody>
    </Card>
  );
}