import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function BackgroundBlogCard() {
  return (
    <>
      <Card
        shadow={false}
        className="relative grid h-[18rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center mt-5 mb-10"
      >
        <CardBody
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/c0/32/08/c0320833a8deed0715715b9155aae307.jpg')] bg-cover bg-center"
        >
          <Typography
            variant="h2"
            color="black"
            className="mt-10 font-medium leading-[1.5]"
          >
            How world!
          </Typography>
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardBody>
      </Card>
    </>
  );
}
