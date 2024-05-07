import { usePathname } from "next/navigation";
import { urlPaths } from "@/constans/constants";

export const handlerClassName = (styles: any) => {
  return () => {
    const path: any = usePathname();

    if (path.startsWith(urlPaths.post)) {
      return styles.default;
    }

    else if (![urlPaths.contacts, urlPaths.home].includes(path)) {
      return styles.filter;
    }

    else {
      return styles.default;
    }
  };
};
