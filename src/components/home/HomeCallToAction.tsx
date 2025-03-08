import { Button } from "../ui/button";

export const HomeCallToaction = () => {
  return (
    <>
      <div className="flex flex-row justify-center gap-4">
        <a href="/contact" className="min-w-32">
          <Button className="relative w-full bg-secondary text-secondary-foreground group rounded-none p-8">
            <p className="z-10 font-rmmono text-base">Entre em Contato</p>
            <span className="absolute w-[7px] h-[7px] bg-white transition-all duration-300 group-hover:w-[calc(100%-4px)] group-hover:h-[calc(100%-4px)] top-[-4px] left-[-4px] rounded-tl-lg"></span>
            <span className="absolute w-[7px] h-[7px] bg-white transition-all duration-300 group-hover:w-[calc(100%-4px)] group-hover:h-[calc(100%-4px)] top-[-4px] right-[-4px] rounded-tr-lg"></span>
            <span className="absolute w-[7px] h-[7px] bg-white transition-all duration-300 group-hover:w-[calc(100%-4px)] group-hover:h-[calc(100%-4px)] bottom-[-4px] left-[-4px] rounded-bl-lg"></span>
            <span className="absolute w-[7px] h-[7px] bg-white transition-all duration-300 group-hover:w-[calc(100%-4px)] group-hover:h-[calc(100%-4px)] bottom-[-4px] right-[-4px] rounded-br-lg"></span>
          </Button>
        </a>
        {/* <Button className="w-32">Deixe seu contato</Button> */}
      </div>
    </>
  );
};
