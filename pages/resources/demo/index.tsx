import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import img from "@/public/images/marketing.png";
import DotImage from "@/public/images/newsletter_shape02.png.png";
import { Badge } from "@/components/ui/badge";
import { TiStarFullOutline } from "react-icons/ti";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/src/components/ui/button";

const Demo = () => {
  const date = new Date();
  return (
    <React.Fragment>
      <main>
        <div className="p-6 w-full h-56 flex items-center bg-purple-200">
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-4xl">All Resources</h1>
              <Breadcrumbs />
            </div>
            <Image
              src={DotImage}
              width={100}
              height={100}
              alt="dot dot dot"
              className="h-16 w-16 items-start"
            />
          </div>
        </div>
        <div className="py-4 flex justify-center mt-10">
          <section className="flex flex-col gap-2">
            <Image
              src={img}
              width={100}
              height={100}
              alt="resources"
              className="w-[800px] h-82 container "
            />
            <div className="flex items-center ml-8 gap-10">
              <Badge variant="outline">Development</Badge>
              <span className="flex items-center">
                <TiStarFullOutline /> (4.5 Reviews)
              </span>
            </div>
            <h3 className="font-semibold">
              Resolving Conflicts Between Designer And Engineers
            </h3>
            <div className="flex gap-2 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h4>
                By <b>David Okafor</b>.
              </h4>
              <span className="text-gray-500">24/07/2024</span>
              <span className="text-gray-500">2,250 Students</span>
            </div>
            <div className="flex gap-2 items-center">
              <Button className="rounded-3xl bg-purple-800">Overview</Button>
              <Button className="rounded-3xl bg-gray-400">Curriculum</Button>
              <Button className="rounded-3xl bg-gray-400">Instructors</Button>
              <Button className="rounded-3xl bg-gray-400">Reviews</Button>
            </div>
            <div className="mt-6 p-4 border-2 border-gray-400 shadow-xl">
              <h3 className="text-3xl font-bold">Course Description</h3>
              <article>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                ea. Eaque magnam accusantium asperiores architecto, vero
                dignissimos numquam cupiditate optio tempora aliquid! Totam
                doloremque quae quaerat nesciunt eveniet ipsa tempore voluptate
                sed ab excepturi facere itaque aperiam corrupti cum molestias
                mollitia cumque aliquid suscipit natus, maiores officiis
                quisquam. Illum est quisquam reiciendis consequatur, inventore
                quae nesciunt animi! Dicta expedita excepturi reprehenderit
                provident assumenda libero. Odio corrupti porro ipsam, maxime
                eveniet velit, sed iure harum et laboriosam debitis a molestiae
                optio alias autem possimus expedita. Iste doloremque ut fuga,
                aliquam ipsa eveniet distinctio! Expedita itaque error
                laboriosam dignissimos dolorem vitae reprehenderit.
              </article>
              <h3 className="text-3xl font-bold">
                What You&apos;ll learn in this course?
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ab
                dignissimos sequi quisquam neque? Repellat quam cum laboriosam?
                Quod quas culpa eos soluta eligendi quisquam distinctio amet
                maxime, quia porro odio. Necessitatibus minima possimus nulla
                inventore enim quaerat recusandae voluptas?
              </p>
            </div>
          </section>
          <aside className="lg:block md:hidden sm:hidden "></aside>
        </div>
      </main>
    </React.Fragment>
  );
};

const Breadcrumbs = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-purple-700">
            Resolving Conflicts Between Designers And Engineers
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
export default Demo;
