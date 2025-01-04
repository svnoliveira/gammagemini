import { Button } from "../ui/button";

export const HomeCallToaction = () => {
  return (
    <>
      <div className="flex flex-row justify-center gap-4">
        <a href="mailto:gammageminiweb@gmail.com" className="w-32">
          <Button className="w-full">Envie um e-mail</Button>
        </a>
        {/* <Button className="w-32">Deixe seu contato</Button> */}
      </div>
    </>
  );
};
