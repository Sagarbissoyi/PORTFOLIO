import { IconHexagon } from "@tabler/icons-react";
import { Slugs } from "../User";
import IconCloud from "./magicui/icon-cloud";



export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_1.2s_ease-in-out_1_2s] items-center justify-center   px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={Slugs} />
      <IconHexagon className="absolute -z-10 animate-[spin_2s_linear_infinite]" size={120} color="#64FFDA" stroke={1.25}/>
      <div className="absolute font-mono text-primaryColor font-semibold text-6xl -z-10">SB</div>
    </div>
  );
}
