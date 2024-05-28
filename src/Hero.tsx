import { Button } from "@/components/ui/button";
import Search from "./components/Search";
export default function Hero() {
  return (
    <>
      <div>
        <div className="container py-24 lg:py-32">
          <div className="my-12 max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              What A.I are you looking for?
            </h1>
          </div>
          <div className="">
            <Search />
          </div>
          <div className="mt-5 max-w-3xl text-center mx-auto flex justify-center">
            <p className="text-xl text-muted-foreground">
              Find over 300+ A.I today.
            </p>
            <div className="flex justify-center">
              <div className="h-8 overflow-hidden items-center rounded-full ">
                <div className="line">
                  <a className="text-blue-400 text-sm p-1 transition" href="#">
                    Image Generation
                  </a>
                </div>
                <div className="line">
                  <a className="text-green-400 text-sm p-1 transition" href="#">
                    Image Enhancer
                  </a>
                </div>
                <div className="line">
                  <a className="text-red-400 text-sm p-1 transition" href="#">
                    Chat Bots
                  </a>
                </div>
                <div className="line">
                  <a className="text-amber-500 text-sm p-1 transition" href="#">
                    Debugger
                  </a>
                </div>
                <div className="line">
                  <a className="text-lime-300 text-sm p-1 transition" href="#">
                    Video maker
                  </a>
                </div>
                <div className="line">
                  <a
                    className="text-emerald-400 text-sm p-1 ps-3 transition"
                    href="#"
                  >
                    Voice maker
                  </a>
                </div>
                <div className="line">
                  <a
                    className="text-fuchsia-500 text-sm p-1 ps-3 transition"
                    href="#"
                  >
                    Software Engineer
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 gap-3 flex justify-center">
            <Button size={"lg"} variant={"outline"}>
              Browse AI
            </Button>
            <Button
              size={"lg"}
              className="hover:underline hover:bg-transparent"
            >
              How to use
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
