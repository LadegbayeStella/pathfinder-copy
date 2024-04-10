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
import DotImage from "@/public/images/newsletter_shape02.png.png";
import Aside from "@/src/components/resources/aside";
import Sections from "@/src/components/resources/section"
function Resources() {
  return (
    <React.Fragment>
      <main>
        <div className="p-6 w-full h-56 flex items-center bg-[#8560885b]">
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
        <div className="px-40 py-4 flex gap-4 mt-10">
          <aside className="lg:block md:hidden sm:hidden lg:mt-8"> 
            <Aside/>
          </aside>
          <section className="-mt-10"><Sections/></section>
        </div>
      </main>
    </React.Fragment>
  );
}

const Breadcrumbs = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Resources</BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
export default Resources;
