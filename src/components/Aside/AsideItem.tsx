import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

export default function AsideItem({
  TbIcon,
  label,
  href,
  active,
  className = "",
  simple = false,
  ...props
}: any) {
  const router = useRouter();
  if (!href) {
    href = "#";
  }

  return (
    <Button
      {...props}
      as={Link}
      link
      onClick={() => router.push(href)}
      variant="light"
      id={active && "active-menu"}
      className={` w-full flex aside-menus bg-transparent border-0 items-center justify-start p-2 pl-0 mb-1 ${
        active ? "text-primary-500" : "text-parent"
      } ${className}`}
    >
      {!simple && <div className={`h-full w-1 rounded bg-primary-500`} />}

      {/* {!!TbIcon && <Icon TbIcon={TbIcon} size={20} />} */}
      <div className="ml-2 ">{label}</div>
    </Button>
  );
}
